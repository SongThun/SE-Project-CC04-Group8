import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/cse_background.png";
import Header from "../components/Header";
import { Search } from "lucide-react";

const PrintHistory = () => {
  const [printHistory, setPrintHistory] = useState([]);
  const [filteredPrintHistory, setFilteredPrintHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [content, setContent] = useState("print-log");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/spso/getPrintHistory")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch print history");
        }
        return response.json();
      })
      .then((data) => {
        setPrintHistory(data);
        setFilteredPrintHistory(data);
      })
      .catch((error) => setError(error.message));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value === "") {
      setFilteredPrintHistory(printHistory);
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
      setFilteredPrintHistory(filtered);
    }
  };

  const getMonthlySummary = () => {
    const monthlySummary = {};
    printHistory.forEach((entry) => {
      const month = new Date(entry.datetime).toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      if (!monthlySummary[month]) {
        monthlySummary[month] = {
          totalPages: 0,
          totalPrints: 0,
          totalDataPrinted: 0,
          mostPopularFileType: {},
          printerUsage: {},
          studentUsage: {},
        };
      }

      const monthData = monthlySummary[month];

      monthData.totalPages += entry.number_of_page;
      monthData.totalPrints++;
      monthData.totalDataPrinted += parseFloat(
        entry.file_size.replace("MB", "")
      );

      if (!monthData.mostPopularFileType[entry.file_type]) {
        monthData.mostPopularFileType[entry.file_type] = 0;
      }
      monthData.mostPopularFileType[entry.file_type]++;

      if (!monthData.printerUsage[entry.printerID]) {
        monthData.printerUsage[entry.printerID] = 0;
      }
      monthData.printerUsage[entry.printerID]++;

      if (!monthData.studentUsage[entry.studentID]) {
        monthData.studentUsage[entry.studentID] = 0;
      }
      monthData.studentUsage[entry.studentID]++;
    });

    Object.keys(monthlySummary).forEach((month) => {
			const monthData = monthlySummary[month];
			monthData.totalStudentsUsed = Object.keys(monthData.studentUsage).length; // Total unique students
			monthData.mostActivePrinter = Object.keys(monthData.printerUsage).reduce(
				(a, b) =>
					monthData.printerUsage[a] > monthData.printerUsage[b] ? a : b
			);
			monthData.mostPopularFileType = Object.keys(
				monthData.mostPopularFileType
			).reduce((a, b) =>
				monthData.mostPopularFileType[a] > monthData.mostPopularFileType[b]
					? a
					: b
			);
		});
    return monthlySummary;
  };

  const getYearlySummary = () => {
    const yearlySummary = {};
    printHistory.forEach((entry) => {
      const year = new Date(entry.datetime).getFullYear();

      if (!yearlySummary[year]) {
        yearlySummary[year] = {
          totalPages: 0,
          totalPrints: 0,
          totalDataPrinted: 0,
          mostPopularFileType: {},
          printerUsage: {},
          studentUsage: {},
        };
      }

      const yearData = yearlySummary[year];

      yearData.totalPages += entry.number_of_page;
      yearData.totalPrints++;
      yearData.totalDataPrinted += parseFloat(
        entry.file_size.replace("MB", "")
      );

      if (!yearData.mostPopularFileType[entry.file_type]) {
        yearData.mostPopularFileType[entry.file_type] = 0;
      }
      yearData.mostPopularFileType[entry.file_type]++;

      if (!yearData.printerUsage[entry.printerID]) {
        yearData.printerUsage[entry.printerID] = 0;
      }
      yearData.printerUsage[entry.printerID]++;

      if (!yearData.studentUsage[entry.studentID]) {
        yearData.studentUsage[entry.studentID] = 0;
      }
      yearData.studentUsage[entry.studentID]++;
    });

    // Yearly Summary Modification
		Object.keys(yearlySummary).forEach((year) => {
			const yearData = yearlySummary[year];
			yearData.totalStudentsUsed = Object.keys(yearData.studentUsage).length; // Total unique students
			yearData.mostActivePrinter = Object.keys(yearData.printerUsage).reduce(
				(a, b) => (yearData.printerUsage[a] > yearData.printerUsage[b] ? a : b)
			);
			yearData.mostPopularFileType = Object.keys(
				yearData.mostPopularFileType
			).reduce((a, b) =>
				yearData.mostPopularFileType[a] > yearData.mostPopularFileType[b]
					? a
					: b
			);
		});

    return yearlySummary;
  };

  const handlePrint = (summary, title) => {
    const printableContent = `
      <h2>${title}</h2>
      <p><strong>Total Pages:</strong> ${summary.totalPages}</p>
      <p><strong>Total Prints:</strong> ${summary.totalPrints}</p>
      <p><strong>Most Active Printer:</strong> ${summary.mostActivePrinter}</p>
      <p><strong>Most Active Student:</strong> ${summary.mostActiveStudent}</p>
      <p><strong>Average Pages per Print:</strong> ${(
        summary.totalPages / summary.totalPrints
      ).toFixed(2)}</p>
      <p><strong>Total Data Printed:</strong> ${summary.totalDataPrinted.toFixed(
        2
      )} MB</p>
      <p><strong>Most Popular File Type:</strong> ${
        summary.mostPopularFileType
      }</p>
    `;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head><title>${title}</title></head>
        <body>${printableContent}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div
      className="p-8 min-h-screen w-full bg-fixed bg-cover bg-no-repeat overflow-y-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Header title="Lịch sử hoạt động" />
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="w-full mt-6 bg-white rounded-xl py-6">
        <div className="flex justify-between px-2">
          <div className="my-6 mx-2 w-1/3 flex ">
            <button
              className={"px-3 left hover:text-blue-500 " + (content === "print-log" ? "text-blue-500 border-b border-blue-500" : " ")}
              onClick={() => setContent("print-log")}
            >
              Lịch sử
            </button>
            <button
              className={"px-3 left hover:text-blue-500 " + (content === "summary-month" ?  "text-blue-500 border-b border-blue-500" : " ")}
              onClick={() => setContent("summary-month")}
            >
              Báo cáo tháng
            </button>
            <button
              className={"px-3 left hover:text-blue-500 " + (content === "summary-year" ?  "text-blue-500 border-b border-blue-500" : " ")}
              onClick={() => setContent("summary-year")}
            >
              Báo cáo năm
            </button>
          </div>

          <div
            id="search-bar"
            className="w-1/2 flex items-center justify-center p-4"
          >
            <button className="ml-2 py-1 px-2 rounded-full hover:bg-blue-600">
              <Search size={15}/>
            </button>
            <input
              type="text"
              className="w-full px-4 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-150px)]">
          {content === "print-log" && (
            <table className="table-fixed min-w-full text-center">
              <thead className="sticky top-0 bg-gray-100 h-[40px] font-semibold text-gray-500">
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
                    <td colSpan="7" className="py-4 text-center text-gray-500">
                      No print history found
                    </td>
                  </tr>
                ) : (
                  filteredPrintHistory.map((p, index) => (
                    <tr
                      key={index}
                      className="h-[40px] border-b border-gray-50 hover:bg-gray-50"
                    >
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
          )}
          {content === "summary-month" && (
            <div className="grid grid-cols-2 gap-4 p-4">
              {Object.entries(getMonthlySummary()).map(
                ([month, stats], index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 shadow-md bg-blue-50 leading-relaxed"
                  >
                    <h2 className="text-xl font-bold text-blue-700">{month}</h2>
                    <p>Tổng số trang: {stats.totalPages}</p>
                    <p>Tổng số lượt in: {stats.totalPrints}</p>
                    <p>
                      Máy in hoạt động nhiều nhất: {stats.mostActivePrinter}
                    </p>
                    <p>
                      Số lượng sinh viên sử dụng: {stats.totalStudentsUsed}
                    </p>
                    <p>
                      Trung bình số trang/lượt in:{" "}
                      {(stats.totalPages / stats.totalPrints).toFixed(2)}
                    </p>
                    <p>
                      Tổng dữ liệu in: {stats.totalDataPrinted.toFixed(2)} MB
                    </p>
                    <p>Loại file phổ biến nhất: {stats.mostPopularFileType}</p>
                    <button
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      onClick={() =>
                        handlePrint(stats, `Báo cáo tháng - ${month}`)
                      }
                    >
                      In báo cáo
                    </button>
                  </div>
                )
              )}
            </div>
          )}
          {content === "summary-year" && (
            <div className="grid grid-cols-2 gap-4 p-4">
              {Object.entries(getYearlySummary()).map(
                ([year, stats], index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 shadow-md bg-blue-50 leading-relaxed"
                  >
                    <h2 className="text-xl font-bold text-blue-700">{year}</h2>
                    <p>Tổng số trang: {stats.totalPages}</p>
                    <p>Tổng số lượt in: {stats.totalPrints}</p>
                    <p>
                      Máy in hoạt động nhiều nhất: {stats.mostActivePrinter}
                    </p>
                    <p>
                      Số lượng sinh viên sử dụng: {stats.totalStudentsUsed}
                    </p>
                    <p>
                      Trung bình số trang/lượt in:{" "}
                      {(stats.totalPages / stats.totalPrints).toFixed(2)}
                    </p>
                    <p>
                      Tổng dữ liệu in: {stats.totalDataPrinted.toFixed(2)} MB
                    </p>
                    <p>Loại file phổ biến nhất: {stats.mostPopularFileType}</p>
                    <button
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      onClick={() =>
                        handlePrint(stats, `Báo cáo năm - ${year}`)
                      }
                    >
                      In báo cáo
                    </button>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrintHistory;
