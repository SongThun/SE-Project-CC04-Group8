import React, { useEffect, useState } from 'react';
import backgroundImage from "../assets/cse_background.png";
import Header from "../components/Header";
import { Search } from "lucide-react";

const Printer = () => {
    const [printers, setPrinters] = useState([]);
    const [filteredPrinters, setFilteredPrinters] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
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
            .then((data) => {
                setPrinters(data);
                setFilteredPrinters(data); // Initialize the filtered printers with all data
            })
            .catch((error) => setError(error.message));
    }, []);

    // Handle search input change
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchQuery(value);

        // Check the search query and filter the printers
        if (value === "") {
            setFilteredPrinters(printers); // If search query is empty, show all printers
        } else {
            const filtered = printers.filter((printer) => {
                const query = value.toLowerCase();
                return (
                    printer.printerId.toString().toLowerCase().includes(query) ||
                    printer.brand.toLowerCase().includes(query) ||
                    printer.location.toLowerCase().includes(query) ||
                    printer.last_updated.toLowerCase().includes(query) ||
                    printer.status.toLowerCase().includes(query)
                );
            });
            setFilteredPrinters(filtered); // Update the filtered list
        }
    };

    return (
        <div
            className="p-8 min-h-screen w-full bg-fixed bg-cover bg-no-repeat overflow-y-auto"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <Header title="Máy in" />
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="w-full mt-6 bg-white rounded-xl py-6">
                <div className="flex items-center justify-center p-4">
                    <button className="ml-2 py-2 pr-2 rounded-full hover:bg-blue-600">
                        <Search size={15}/>
                    </button>
                    <input
                        type="text"
                        className="w-full px-4 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch} // Handle the search input change
                    />
                </div>
                <div className="overflow-y-auto max-h-[calc(100vh-150px)]"> {/* Set max height and enable scrolling */}
                    <table className="min-w-full text-center">
                        <thead className="sticky top-0 bg-gray-100 h-[40px] font-semibold text-gray-500">
                            <tr>
                                <th>PrinterID</th>
                                <th>Hãng</th>
                                <th>Địa điểm</th>
                                <th>Cập nhật lần cuối</th>
                                <th>Tình trạng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPrinters.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="py-4 text-center text-gray-500">No results found</td>
                                </tr>
                            ) : (
                                filteredPrinters.map((p, index) => (
                                    <tr key={index} className="h-[40px] border-b border-gray-50 hover:bg-gray-50">
                                        <td>{p.printerId}</td>
                                        <td>{p.brand}</td>
                                        <td>{p.location}</td>
                                        <td>{p.last_updated}</td>
                                        <td className="py-1">
                                            <button 
                                                className={`w-32 rounded-xl py-1 text-sm font-semibold ${p.status === "Hoạt động" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                                            >
                                                {p.status}
                                            </button>
                                        </td>
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

export default Printer;
