import React, { useEffect, useState } from 'react';
import backgroundImage from "../assets/cse_background.png";
import Header from "../components/Header";
import { Search } from "lucide-react";

const PrintHistory = () => {
    const [printHistory, setPrintHistory] = useState([]);
    const [filteredPrintHistory, setFilteredPrintHistory] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
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
            .then((data) => {
                setPrintHistory(data);
                setFilteredPrintHistory(data); // Initialize the filtered print history with all data
            })
            .catch((error) => setError(error.message));
    }, []);

    // Handle search input change
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchQuery(value);

        // Check the search query and filter the print history
        if (value === "") {
            setFilteredPrintHistory(printHistory); // If search query is empty, show all print history
        } else {
            const filtered = printHistory.filter((history) => {
                const query = value.toLowerCase();
                return (
                    history.studentID.toString().toLowerCase().includes(query) ||
                    history.printerID.toString().toLowerCase().includes(query) ||
                    history.datetime.toLowerCase().includes(query) ||
                    history.file_type.toLowerCase().includes(query) ||
                    history.page_size.toLowerCase().includes(query) ||
                    history.number_of_page.toString().includes(query)
                );
            });
            setFilteredPrintHistory(filtered); // Update the filtered list
        }
    };

    return (
        <div
            className="p-8 bg-cover bg-center bg-no-repeat overflow-y-auto"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <Header title="Lịch sử hoạt động" />
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="w-full mt-6 bg-white rounded-xl py-6">
                <div className="flex items-center justify-center p-4">
                    <button className="ml-2 p-2 rounded-full hover:bg-blue-600">
                        <Search />
                    </button>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch} // Handle the search input change
                    />
                </div>
                <div className="overflow-y-auto max-h-[calc(100vh-150px)]"> {/* Set max height and enable scrolling */}
                    <table className="mt-6 min-w-full text-center">
                        <thead className="bg-gray-100 h-[40px] font-semibold text-gray-500">
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
                            {filteredPrintHistory.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="py-4 text-center text-gray-500">No print history found</td>
                                </tr>
                            ) : (
                                filteredPrintHistory.map((p, index) => (
                                    <tr key={index} className="h-[40px] border-b border-gray-50 hover:bg-gray-50">
                                        <td>{p.studentID}</td>
                                        <td>{p.printerID}</td>
                                        <td>{p.datetime}</td>
                                        <td>{p.file_type}</td>
                                        <td>{p.file_size}</td>
                                        <td>{p.page_size}</td>
                                        <td>{p.number_of_page}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PrintHistory;
