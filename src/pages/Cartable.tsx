import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
type Connection = {
  id: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalId: string;
  phone: string;
  connectionType: string;
  requestNumber: string;
  tariffType: string;
  address?: string;
  startDate: string;
};
const Cartable = () => {
  const dataString = localStorage.getItem("newConnections");
  const data: Connection[] = dataString ? JSON.parse(dataString) : [];

  return (
    <div className="rounded-2xl overflow-hidden border">
      <table className="w-full">
        <thead className="rounded-2xl">
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
                  <button>
                    <EditCalendarOutlinedIcon />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cartable;
