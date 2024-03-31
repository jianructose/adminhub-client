import { FaHome, FaCalendar, FaTrello, FaEdit, FaTable } from "react-icons/fa";

const pages = [
  {
    name: "Home",
    icon: <FaHome />,
  },
  {
    name: "Calendar",
    icon: <FaCalendar />,
  },
  {
    name: "Kanban",
    icon: <FaTrello />,
  },
  {
    name: "Editor",
    icon: <FaEdit />,
  },
];

const kanbanGrid = [
  { headerText: "To Do", keyField: "Open", allowToggle: true },

  { headerText: "In Progress", keyField: "InProgress", allowToggle: true },

  {
    headerText: "Testing",
    keyField: "Testing",
    allowToggle: true,
    // isExpanded: false,
  },

  { headerText: "Done", keyField: "Close", allowToggle: true },
];

export { pages, kanbanGrid };
