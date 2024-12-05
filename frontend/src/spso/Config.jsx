import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import { Search } from "lucide-react";

const Config = () => {
    const [config, setConfig] = useState([
			{
				config_name: "Loại tệp được phép",
				information: "PDF, DOCX, JPEG, PNG",
				published_date: "2024-12-10",
			},
			{
				config_name: "Kích thước tệp tối đa",
				information: "20MB",
				published_date: "2024-12-12",
			},
			{
				config_name: "Số trang mặc định",
				information: "50 trang",
				published_date: "2024-12-15",
			},
			{
				config_name: "Số trang tối đa khi mua",
				information: "100 trang",
				published_date: "2024-12-20",
			},
			{
				config_name: "Chi phí cho một trang",
				information: "500 VNĐ",
				published_date: "2024-12-25",
			},
			{
				config_name: "Kích thước giấy hỗ trợ",
				information: "A4, A3",
				published_date: "2025-01-05",
			}
		]);
    const [error, setError] = useState(null);

    return (
				<div className="p-6">
            <Header title="Cấu hình"/>
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
													<th>Cấu hình</th>
													<th>Thông tin</th>
													<th>Có hiệu lực từ</th>
											</tr>
											
									</thead>
									<tbody>
											{config.map((cf, index) => (
													<tr key={index} className="h-[40px] border-b border-gray-50 hover:bg-gray-50">
															<td>{cf.config_name}</td>
															<td>{cf.information}</td>
															<td>{cf.published_date}</td>
													</tr>
											))}
									</tbody>
							</table>
						</div>
        </div>
    );
};

export default Config;
