import {
  Bot,
  CalendarPlus2,
  LayoutDashboardIcon,
  LogOut,
  UserRound,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const { logout, user } = {
    logout: () => {
      window.location.href = "/";
    },
    user: { name: "moks", email: "moks@test.com" },
  };
  const location = useLocation();
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboardIcon, path: "/dashboard" },
    { name: "Accounts", icon: UserRound, path: "/accounts" },
    { name: "Schedule", icon: CalendarPlus2, path: "/scheduler" },
    { name: "AI Composer", icon: Bot, path: "/ai-composer" },
  ];
  return (
    <div
      className={`bg-charcol text-cream fixed inset-y-0 left-0 z-50 w-64 flex flex-col h-full transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/*logo*/}
      <div className="p-6 pb-4">
        <div className="text-xl tracking-tight text-cream flex items-center gap-1.5">
          <img src="/favicon.svg" alt="logo" className="size-6" />
          Auto Post
        </div>
      </div>
      {/*nav-section*/}
      <div className="px-6 py-2">
        <span className="text-xs uppercase tracking-wider text-slate-500">
          Menu
        </span>
      </div>

      {/*nav links*/}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => {
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-all duration-150 border ${isActive ? "bg-cream text-charcol" : "text-cream hover:bg-slate-500 border-transparent hover:text-cream"}`}
            >
              <item.icon
                className={`size-4.5 shrink-0 ${isActive ? "text-charcol" : "text-cream"}`}
              />
              <span>{item.name}</span>
              {isActive && (
                <span className="ml-auto w-1.25 h-5 rounded-full bg-charcol" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/*user footer */}
      <div className="p-4">
        <div className="flex items-center gap-3 p-2 rounded-xl transition-colors">
          <div className="size-8 rounded-full bg-linear-to-br from-slate-800 to-slate-400 flex items-center justify-center text-charcol text-sm font-bold shrink-0">
            {user.name.charAt(0).toUpperCase() || "U"}
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-sm text-cream truncate">{user.name}</div>
            <div className="text-xs text-slate-400 truncate">{user.email}</div>
          </div>
        </div>

        <button
          onClick={logout}
          className="mt-1 flex items-center gap-2 px-3 py-3 w-full rounded text-sm text-cream hover:bg-slate-400 hover:text-charcol transition-all duration-150"
        >
          <LogOut className="size-4" />
          LogOut
        </button>
      </div>
    </div>
  );
}
