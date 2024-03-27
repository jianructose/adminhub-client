import { Link, NavLink } from "react-router-dom";
import { FaTeamspeak } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// import {links} from "../data/"

const Sidebar = () => {
  const activeMenu = true;
  return (
    <section className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/* if activeMenu is true, then show the sidebar */}
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" className="items-center" onClick={() => {}}>
              <FaTeamspeak />
              <span>AdminHub</span>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Sidebar;
