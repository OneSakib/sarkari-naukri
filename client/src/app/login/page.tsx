'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/auth/AuthContext'; // adjust path as needed
import { loginUser } from '@/services/api';       // adjust path as needed

const LoginPage: React.FC = () => {
    const { login } = useAuth();
    const router = useRouter();

    const [form, setForm] = useState({ phone_number: '', password: '' });
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const data = await loginUser(form.phone_number, form.password);
            login(data.access, data.user);
            router.push('/');
        } catch (err) {
            setError('Invalid credentials.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-4 border rounded">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {error && <div className="text-red-600 mb-2">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-3">
                    <label htmlFor="phone_number" className="block font-medium mb-1">
                        Phone Number
                    </label>
                    <input
                        id="phone_number"
                        type="text"
                        name="phone_number"
                        placeholder="Phone Number"
                        value={form.phone_number}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="block font-medium mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
