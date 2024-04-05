import { Link, NavLink } from "react-router-dom";
import { FaTeamspeak } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { pages } from "../data/utils";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenWidth, setScreenWidth } =
    useStateContext(); // get the state from the context

  // close the sidebar when the screen width is less than 768px and the activeMenu is true
  const handleCloseSidebar = () => {
    if (screenWidth <= 900 && activeMenu) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-6 pl-4 pt-3 pb-2 rounded-lg text-blue-500 dark:text-blue-100 dark:hover:text-sky-500 hover:bg-light-gray text-lg m-2 hover:text-2xl hover:transition-all";
  const inactiveLink =
    "flex items-center gap-6 pl-4 pt-3 pb-2 rounded-lg text-lg text-slate-800 dark:text-gray-100 dark:hover:text-black hover:bg-light-gray m-2 hover:text-2xl hover:transition-all";

  return (
    <section className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/* if activeMenu is true, then show the sidebar, else hide it */}
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="items-center gap-3 ml-3 mt-3 flex text-xl font-extrabold tracking-tighter dark:text-white text-slate-900"
              onClick={handleCloseSidebar} // close the sidebar when the link is clicked
            >
              <FaTeamspeak />
              <span>AdminHub</span>
            </Link>

            <TooltipComponent content="Close" position="BottomCenter">
              <button
                className=" text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
                type="button"
                onClick={() => setActiveMenu(!activeMenu)} // reverse the state of the activeMenu
              >
                <MdClose />
              </button>
            </TooltipComponent>
          </div>

          {/* map through the pages array and display the links */}
          <div className="mt-10">
            {pages.map((page, idx) => (
              <NavLink
                to={`${page.name.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
                key={idx}
                onClick={handleCloseSidebar}
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
