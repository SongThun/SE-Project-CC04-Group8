import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/cse_background.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [noti, setNoti] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [configSchedule, setConfigSchedule] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setNoti([
      { type: "general", info: "Hóa đơn giấy - MS: HDG-1247245" },
      { type: "general", info: "Hóa đơn in - MS: HDI-1592960" },
      { type: "student", info: "Sinh viên Mã số 2254567, đã mua 10 tờ" },
      { type: "student", info: "Sinh viên Mã số 2315678, đã in 15 tờ" },
    ]);
    fetch('/api/spso/getPrinters?limit=3')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch printers');
        }
        return response.json();
    })
    .then((data) => {setPrinters(data); console.log(data)})
    .catch((error) => setError(error.message));

    setConfigSchedule([
      {config_name: "Số giấy mặc định", value: "50", datetime: "2024-12-05"},
      {config_name: "File type", value: "pdf, txt", datetime: "2024-12-05"},
    ]);
  }, []);

  return (
    <div
      className="p-8 min-h-screen w-full bg-fixed bg-cover bg-no-repeat overflow-y-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
        <div className="grid auto-rows-min gap-10">
          {/* Card thông báo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h1 className="text-center text-xl font-bold text-gray-800">THÔNG BÁO</h1>
                {noti.filter(n => n.type === "general").map((n, index) => (
                  <p key={index} className="mt-4 text-gray-600">
                    {n.info}
                  </p>
                ))}
                <div className="text-center mt-4 ">
                  <button 
                    className="px-10 py-2 bg-gray-200 rounded-xl hover:bg-blue-100 hover:text-blue-500 transition"
                    onClick={() => navigate("print-history/")}
                  >
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>

            {/* Card sinh viên */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h1 className="text-center text-xl font-bold text-gray-800">SINH VIÊN</h1>
                {noti.filter(n => n.type === "student").map((n, index) => (
                  <p key={index} className="mt-4 text-gray-600">
                    {n.info}
                  </p>
                ))}
                <div className="text-center mt-4 justify-bottom">
                  <button 
                    className="px-10 py-2 bg-gray-200 rounded-xl hover:bg-blue-100 hover:text-blue-500 transition"
                    onClick={() => navigate("print-history/")}
                  >
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tình trạng máy in */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h1 className="text-center text-xl font-bold text-gray-800">TÌNH TRẠNG MÁY IN</h1>
              <div className="overflow-x-auto">
                <table className="mt-4 min-w-full text-center">
                  <thead>
                    <tr className="border-b bg-gray-100 text-gray-700">
                      <th className="py-1">ID Máy in</th>
                      <th className="py-1">Vị trí</th>
                      <th className="py-1">Tình trạng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {printers.map((printer, index) => (
                      <tr key={index} className="text-center hover:bg-gray-50">
                        <td className="py-1 w-2/12">{printer.printerId}</td>
                        <td className="py-1">{printer.location}</td>
                        <td className="py-1 w-2/12">
                          <button 
                            className={`w-32 rounded-xl py-1 text-sm font-semibold ${printer.status === "Hoạt động" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                          >
                            {printer.status}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-4">
                <button 
                  className="px-10 py-2 bg-gray-200 rounded-xl hover:bg-blue-100 hover:text-blue-500 transition"
                  onClick={() => navigate("printer/")}
                >
                  Xem thêm
                </button>
              </div>
            </div>
          </div>

          {/* Lịch cập nhật cấu hình */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h1 className="text-center text-xl font-bold text-gray-800">LỊCH CẬP NHẬT CẤU HÌNH</h1>
              <div className="overflow-x-auto">
                <table className="mt-4 min-w-full">
                  <thead>
                    <tr className="text-center border-b bg-gray-100 text-gray-700">
                      <th className="py-1">Cấu hình</th>
                      <th className="py-1">Thông tin</th>
                      <th className="py-1">Ngày cập nhật</th>
                    </tr>
                  </thead>
                  <tbody>
                    {configSchedule.map((cs, index) => (
                      <tr key={index} className="text-center hover:bg-gray-50">
                        <td className="py-1">{cs.config_name}</td>
                        <td className="py-1">{cs.value}</td>
                        <td className="py-1">{cs.datetime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-4">
                <button 
                  className="px-10 py-2 bg-gray-200 rounded-xl hover:bg-blue-100 hover:text-blue-500 transition"
                  onClick={() => navigate("config/")}
                >
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
