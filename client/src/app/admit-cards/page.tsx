export default function AdmitCards() {
    return (
        <div className="container py-5">
            <h1>Admit Cards</h1>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}