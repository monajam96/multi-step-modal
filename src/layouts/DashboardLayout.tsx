import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-screen ">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="m-2 bg-neutral-100 rounded-2xl flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
