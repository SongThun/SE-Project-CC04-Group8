import React, { useEffect, useState } from 'react'

const PrintHistory = () => {
    const [printHistory, setPrintHistory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        fetch('/api/spso/getPrintHistory')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch print history');
                }
                return response.json();

            })
            .then((data) => {setPrintHistory(data); console.log(data)})
            .catch((error) => setError(error.message));
    }, []);

    return (
        <div>
            <h1>Lịch sử hoạt động</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>StudentID</th>
                        <th>PrinterID</th>
                        <th>Thời gian</th>
                        <th>Type</th>
                        <th>Size</th>
                        <th>Cỡ trang</th>
                        <th>Số lượng trang</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {printHistory.map((p) => (
                        <tr>
                            <td>{p.studentID}</td>
                            <td>{p.printerID}</td>
                            <td>{p.datetime}</td>
                            <td>{p.file_type}</td>
                            <td>{p.file_size}</td>
                            <td>{p.page_size}</td>
                            <td>{p.number_of_page}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PrintHistory