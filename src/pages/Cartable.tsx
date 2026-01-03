import { useState } from "react";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import EditModal from "../components/EditModal";
import type { Connection } from "../types/connection";
const Cartable = () => {
  const dataString = localStorage.getItem("newConnections");
  const [data, setData] = useState<Connection[]>(
    dataString ? JSON.parse(dataString) : []
  );
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Connection | null>(null);
  const handleOpenEdit = (row: Connection) => {
    setSelectedRow(row);
    setOpenEdit(true);
  };
  const handleSave = (updatedRow: Connection) => {
    const updatedData = data.map((item) =>
      item.id === updatedRow.id ? updatedRow : item
    );
    setData(updatedData);
    localStorage.setItem("newConnections", JSON.stringify(updatedData));
    setOpenEdit(false);
  };
  return (
    <>
      <div className="rounded-2xl overflow-hidden border">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-b from-[#1B6442] to-[#010805] text-gray-200 text-sm ">
              <th className="border p-2">نام</th>
              <th className="border p-2">نام پدر</th>
              <th className="border p-2">شماره ملی</th>
              <th className="border p-2">شماره تماس </th>
              <th className="border p-2">نوع انشعاب </th>
              <th className="border p-2">شماره درخواست</th>
              <th className="border p-2">نوع تعرفه</th>
              <th className="border p-2">آدرس</th>
              <th className="border p-2"> تاریخ شروع خدمات</th>
              <th className="border p-2 ">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center p-4 text-gray-500">
                  داده‌ای وجود ندارد
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border p-2">
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="border p-2">{item.fatherName}</td>
                  <td className="border p-2">{item.nationalId}</td>
                  <td className="border p-2">{item.phone}</td>{" "}
                  <td className="border p-2">{item.connectionType}</td>{" "}
                  <td className="border p-2">{item.requestNumber}</td>{" "}
                  <td className="border p-2">{item.tariffType}</td>{" "}
                  <td className="border p-2">{item.address}</td>{" "}
                  <td className="border p-2">{item.startDate}</td>{" "}
                  <td className="border p-2">
                    <button
                      onClick={() => handleOpenEdit(item)}
                      className="border-none"
                    >
                      <EditCalendarOutlinedIcon />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <EditModal
        open={openEdit}
        data={selectedRow}
        onClose={() => setOpenEdit(false)}
        onSave={handleSave}
      />
    </>
  );
};

export default Cartable;
