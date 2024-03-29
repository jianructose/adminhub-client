import { useEffect } from "react";
import { FaList as ListIcon } from "react-icons/fa6"; // list icon to display the sidebar
import { BsFillChatHeartFill as ChatIcon } from "react-icons/bs"; // chat icon to display the chat
import { MdOutlineNotificationsNone as NotificationIcon } from "react-icons/md"; // notification icon to display the notifications

import { TooltipComponent } from "@syncfusion/ej2-react-popups"; // tooltip component to display the tooltip effect on the icons
import { useStateContext } from "../contexts/ContextProvider"; // import the useStateContext hook to access the state
import Avatar, { genConfig } from "react-nice-avatar"; // import the Avatar component

const config = genConfig(); // generate the configuration for the Avatar component

// a component
const NavButton = ({ title, func, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => func()} // call the function when the button is clicked
        style={{ color }} // set the color of the button
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex h-2 w-2 top-2 right-2 rounded-full" // set the position of the dot to the top right
        >
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <nav className="flex md:mx-6 p-2 justify-between relative">
      {/* the menu button to toggle the sidebar */}
      <NavButton
        title="Menu"
        func={() => setActiveMenu(!activeMenu)}
        icon={<ListIcon />}
        color="slate-900"
      />

      {/* for all other icons button */}
      <div className="flex gap-4">
        <NavButton
          title="Chat"
          func={() => handleClick("chat")}
          icon={<ChatIcon />}
          color="slate-900"
          // dotColor="blue"
        />
        <NavButton
          title="Notification"
          func={() => handleClick("notification")}
          icon={<NotificationIcon />}
          color="slate-900"
          // dotColor="blue"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-4 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            {" "}
            <Avatar {...config} className="w-10 h-10" />
            <span className="text-slate-900">John Doe</span>
          </div>
        </TooltipComponent>
      </div>
    </nav>
  );
};

export default Navbar;
