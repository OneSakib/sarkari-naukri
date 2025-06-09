interface ResultPageProps {
    params: { id: string };
}

export default function ResultDetailPage({ params }: ResultPageProps) {
    return (
        <div>
            <h1>Result Details</h1>
            <p>Result ID: {params.id}</p>
        </div>
    );
}
