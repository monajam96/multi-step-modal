import MenuIcon from "@mui/icons-material/Menu";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useState } from "react";
import { Box } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <header className="h-16 m-2 bg-neutral-100 rounded-2xl px-6 flex items-center justify-between">
      <div className="flex items-center gap-2 ">
        <MenuIcon sx={{ color: "#1B6442", fontSize: 32 }} />
        <input
          type="text"
          placeholder="صفحه مورد نظر را جستجو کنید"
          className="w-64 rounded-2xl border px-4 py-2 text-sm focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <Box
          onClick={() => setIsDark(!isDark)}
          sx={{
            width: 60,
            height: 36,
            borderRadius: 16,
            background:"#1B6442",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 1,
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 4,
              left: isDark ? 4 : 30,
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "white",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            {isDark ? (
              <DarkModeOutlinedIcon sx={{ fontSize: 18, color: "#7c3aed" }} />
            ) : (
              <LightModeOutlinedIcon sx={{ fontSize: 18, color: "#f59e0b" }} />
            )}
          </Box>

        </Box>
        <button className="h-9 px-3 rounded-2xl bg-[#1B6442] text-gray-200 text-sm">
          <SettingsOutlinedIcon /> سفارشی سازی
        </button>
        <button className="h-9 px-3 rounded-2xl border border-[#1B6442] text-[#1B6442] text-sm">
          <PersonOutlineOutlinedIcon /> خوش آمدید
        </button>
      </div>
    </header>
  );
};

export default Navbar;
