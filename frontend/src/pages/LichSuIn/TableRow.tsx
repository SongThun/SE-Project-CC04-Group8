import React from "react";

type RowData = {
  id?: string;
  date?: string;
  printerId?: string;
  fileName?: string;
  format?: string;
  size?: string;
  pages?: number;
  paperType?: string;
};

const TableRow: React.FC<RowData> = ({
  id = "456789356",
  date = "Sep 9, 2024, 04:30pm",
  printerId = "456789356",
  fileName = "Software_Engineering.pdf",
  format = "PDF",
  size = "5KB",
  pages = "10",
  paperType = "A4",
}) => {
  return (
    <tr className="h-[55px] border-b border-gray-200">
      <td className="p-3 text-[16px] text-gray-700">{id}</td>
      <td className="p-3 text-sm text-gray-700">{date}</td>
      <td className="p-3 text-sm text-gray-700">{printerId}</td>
      <td className="p-3 text-sm text-gray-700">{fileName}</td>
      <td className="p-3 text-sm text-gray-700">{format}</td>
      <td className="p-3 text-sm text-gray-700">{size}</td>
      <td className="p-3 text-sm text-gray-700">{pages}</td>
      <td className="p-3 text-sm text-gray-700">{paperType}</td>
      <td className="p-3 text-sm text-gray-700">
        <button className="text-blue-500 hover:underline">Edit</button>
      </td>
    </tr>
  );
};

export default TableRow;
