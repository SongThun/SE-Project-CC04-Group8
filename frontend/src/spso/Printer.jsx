import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import { Search } from "lucide-react";

const Printer = () => {
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
			<div
				className="h-screen w-screen bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
			>
            <Header title="Máy in"/>
            {error && <p style={{ color: 'red' }}>{error}</p>}
						<div className="w-full mt-6 bg-white rounded-xl py-6">
							<div className="flex items-center justify-center p-4">
								<button className="ml-2 p-2 rounded-full hover:bg-blue-600">
									<Search/>
								</button>
								<input
									type="text"
									className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Search..."
								/>
								
							</div>
							<table className="mt-6 min-w-full text-center">
									<thead className="bg-gray-100 h-[40px] font-semibold text-gray-500">
											<tr>
													<th>PrinterID</th>
													<th>Hãng</th>
													<th>Địa điểm</th>
													<th>Cập nhật lần cuối</th>
													<th>Tình trạng</th>
											</tr>
											
									</thead>
									<tbody>
											{printers.map((p, index) => (
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
											))}
									</tbody>
							</table>
						</div>
        </div>
    );
};

export default Printer;
