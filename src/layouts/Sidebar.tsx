import type { SvgIconComponent } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FitbitIcon from "@mui/icons-material/Fitbit";

type MenuItem = {
  icon: SvgIconComponent;
  title: string;
};
function Sidebar() {
  const menu: MenuItem[] = [
    { icon: HomeOutlinedIcon, title: "صفحه اصلی" },
    { icon: InboxOutlinedIcon, title: "کارتابل" },
    { icon: ConfirmationNumberOutlinedIcon, title: "تیکت ها" },
    { icon: NotificationsNoneOutlinedIcon, title: "اعلان ها" },
    { icon: SettingsOutlinedIcon, title: "تنظیمات" },
    { icon: PersonOutlineOutlinedIcon, title: "دسترسی" },
  ];
  return (
    <div className="w-64 m-2 rounded-2xl bg-gradient-to-b from-[#1B6442] to-[#010805]">
      <div className="flex flex-col items-center my-4 gap-2 text-gray-200">
        <FitbitIcon sx={{ fontSize: 120 }} />
        <h1 className="text-2xl">مدد باختر
        </h1>
      </div>

      <div className="space-y-4">
        {menu.map((item) => (
          <button
            key={item.title}
            className="bg-transparent w-60 mr-2 flex items-center gap-3 px-3 py-2 text-gray-200 hover:bg-green-200 hover:text-green-600 border-none"
          >
            <item.icon fontSize="small" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
