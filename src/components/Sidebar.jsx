import { Link, NavLink } from "react-router-dom";
import { FaTeamspeak } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { pages } from "../data/utils";

const Sidebar = () => {
  const activeMenu = true;

  const activeLink =
    "flex items-center gap-6 pl-4 pt-3 pb-2 rounded-lg text-blue-500 dark:text-blue-100 dark:hover:text-sky-500 hover:bg-light-gray text-md m-2";
  const inactiveLink =
    "flex items-center gap-6 pl-4 pt-3 pb-2 rounded-lg text-md text-slate-800 dark:text-gray-100 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <section className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/* if activeMenu is true, then show the sidebar */}
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="items-center gap-3 ml-3 mt-3 flex text-xl font-extrabold tracking-tighter dark:text-white text-slate-900"
              onClick={() => {}}
            >
              <FaTeamspeak />
              <span>AdminHub</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                className="md:hidden text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
                type="button"
                onClick={() => {}}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {pages.map((page, idx) => (
              <NavLink
                to={`/${page.name.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
                key={idx}
                onClick={() => {}}
              >
                {page.icon}
                <span>{page.name}</span>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Sidebar;
