'use client';

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import type { AuthContextType, User } from '@/types';

type JWTPayload = {
    exp: number;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(
        typeof window !== 'undefined' ? localStorage.getItem('token') : null
    );
    const [user, setUser] = useState<User | null>(
        typeof window !== 'undefined' && localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user')!)
            : null
    );

    const login = (newToken: string, newUser: User) => {
        setToken(newToken);
        setUser(newUser);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.replace('/login');
    };

    const isTokenExpired = (token: string) => {
        try {
            const { exp } = jwtDecode<JWTPayload>(token);
            return Date.now() >= exp * 1000;
        } catch (e) {
            return true;
        }
    };

    useEffect(() => {
        if (token && isTokenExpired(token)) {
            logout();
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
