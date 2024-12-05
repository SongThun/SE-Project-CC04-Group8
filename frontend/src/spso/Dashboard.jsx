import React, { useEffect, useState } from 'react'
import backgroundImage from '../assets/cse_background.png';

const Dashboard = () => {
  const [noti, setNoti] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [configSchedule, setConfigSchedule] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setNoti([
      {type: "general", info: "Hóa đơn giấy"},
      {type: "general", info: "Hóa đơn in"},
      {type: "student", info: "Sinh viên Mã số xxxxx1, đã rút xx"},
      {type: "student", info: "Sinh viên Mã số xxxxx2, đã rút xx"},
    ])
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
      {config_name: "Số giấy mặc định", value: "50", datetime: "234234"},
      {config_name: "File type", value: "pdf, txt", datetime: "234234"},
    ])
  }, [])

  return (
    <div 
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid auto-rows-min gap-6 max-h-screen overflow-y-auto">
          {/* Card thông báo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h1 className="text-center text-lg font-bold text-gray-800">THÔNG BÁO</h1>
                {noti.map((n, index) => (
                  <p key={index} className="mt-2 text-sm text-gray-600">
                    {n.info}
                  </p>
                ))}
                <div className="text-center mt-4">
                  <button className="px-10 py-2 bg-gray-200 rounded-xl hover:bg-blue-600 hover:text-white transition">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>

            {/* Card sinh viên */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h1 className="text-center text-lg font-bold text-gray-800">SINH VIÊN</h1>
                {noti.filter(n => n.type === "student").map((n, index) => (
                  <p key={index} className="mt-2 text-sm text-gray-600">
                    {n.info}
                  </p>
                ))}
                <div className="text-center mt-4">
                  <button className="px-10 py-2 bg-gray-200 rounded-xl hover:bg-blue-600 hover:text-white transition">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tình trạng máy in */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h1 className="text-center text-lg font-bold text-gray-800">TÌNH TRẠNG MÁY IN</h1>
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
                        <td className="py-1">{printer.printerId}</td>
                        <td className="py-1">{printer.location}</td>
                        <td className="py-1">
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
                <button className="px-10 py-2 bg-gray-200 rounded-xl hover:bg-blue-600 hover:text-white transition">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>

          {/* Lịch cập nhật cấu hình */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h1 className="text-center text-lg font-bold text-gray-800">LỊCH CẬP NHẬT CẤU HÌNH</h1>
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
                <button className="px-10 py-2 bg-gray-200 rounded-xl hover:bg-blue-600 hover:text-white transition">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard