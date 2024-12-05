import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import backgroundImage from "../assets/cse_background.png"
import { Search } from "lucide-react";

const Config = () => {
    const [config, setConfig] = useState([
			{
				name: "Loại tệp được phép",
				value: "PDF, DOCX, JPEG, PNG",
				date: "2024-12-10",
			},
			{
				name: "Kích thước tệp tối đa",
				value: "20MB",
				date: "2024-12-12",
			},
			{
				name: "Số trang mặc định",
				value: "50 trang",
				date: "2024-12-15",
			},
			{
				name: "Số trang tối đa khi mua",
				value: "100 trang",
				date: "2024-12-20",
			},
			{
				name: "Chi phí cho một trang",
				value: "500 VNĐ",
				date: "2024-12-25",
			},
			{
				name: "Kích thước giấy hỗ trợ",
				value: "A4, A3",
				date: "2025-01-05",
			}
		]);
    const [error, setError] = useState(null);

		const [isEditing, setIsEditing] = useState(null);
		const [editValue, setEditValue] = useState({
			value: "",
			date: ""
		});

		const handleEdit = (name, currentValue, currentDate) => {
			setIsEditing(name);
			setEditValue({
				value: currentValue,
				date: currentDate
			});
		};

		const handleSave = (name) => {
			const updatedConfigurations = config.map((cf) =>
				cf.name === name ? { ...cf, value: editValue.value, date: editValue.date} : cf
			);
			setConfig(updatedConfigurations);

			setIsEditing(null); 
		};

		const handleCancel = () => {
			setIsEditing(null); 
		};

    return (
				<div
					className="p-12 h-screen bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `url(${backgroundImage})`,
					}}
				>
            <Header title="Cấu hình"/>
            {error && <p style={{ color: 'red' }}>{error}</p>}
						<div className="w-full mt-6 bg-white rounded-xl py-6">
							<table className="min-w-full text-center">
									<thead className="bg-gray-100 h-[40px] font-semibold text-gray-500">
											<tr>
													<th>Cấu hình</th>
													<th>Thông tin</th>
													<th>Có hiệu lực từ</th>
													<th className="w-2/12"></th>
											</tr>
											
									</thead>
									<tbody>
											{config.map((cf, index) => (
													<tr key={index} className="h-[40px] border-b border-gray-50 hover:bg-gray-50">
															<td className="text-left pl-10">{cf.name}</td>
															<td>
																{isEditing === cf.name ? (
																	<input
																		type="text"
																		className="w-full border border-gray-400 rounded px-2"
																		value={editValue.value}
																		onChange={(e) => setEditValue({...editValue, value: e.target.value})}
																	/>
																) : (
																	cf.value
																)}
															</td>
															<td>
																{isEditing === cf.name ? (
																	<input
																		type="date"
																		className="w-full border border-gray-400 rounded px-2"
																		value={editValue.date}
																		onChange={(e) => setEditValue({...editValue, date: e.target.value})}
																	/>
																) : (
																	cf.date
																)}
															</td>
															<td className="w-2/12">
																{isEditing === cf.name ? (
																	<div className="items-center">
																		<button
																			onClick={() => handleSave(cf.name)}
																			className="bg-green-500 text-white px-4 py-1 rounded mr-2"
																		>
																			Lưu thay đổi
																		</button>
																		<button
																			onClick={handleCancel}
																			className="bg-red-500 text-white px-4 py-1 rounded"
																		>
																			Hủy
																		</button>
																	</div>
																): (
																	<button
																		onClick={() => handleEdit(cf.name, cf.value, cf.date)}
																		className="hover:bg-blue-500 hover:text-white px-4 py-1 rounded"
																	>
																		Chỉnh sửa
																	</button>
																)}
															</td>
													</tr>
											))}
									</tbody>
							</table>
						</div>
        </div>
    );
};

export default Config;
