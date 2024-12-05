import React, { useEffect, useState } from 'react';

const PrinterManage = () => {
    const [printers, setPrinters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        fetch('/api/spso/getPrinters')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch printers');
                }
                return response.json();

            })
            .then((data) => {setPrinters(data); console.log(data)})
            .catch((error) => setError(error.message));
    }, []);

    return (
        <div>
            <h1>Printers</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>PrinterID</th>
                        <th>Hãng</th>
                        <th>Địa điểm</th>
                        <th>Cập nhật lần cuối</th>
                        <th>Tình trạng</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {printers.map((p) => (
                        <tr>
                            <td>{p.printerId}</td>
                            <td>{p.brand}</td>
                            <td>{p.location}</td>
                            <td>{p.last_updated}</td>
                            <td>{p.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PrinterManage;
