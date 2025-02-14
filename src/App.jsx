import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi"; // Font Awesome Icon
import { TooltipComponent } from "@syncfusion/ej2-react-popups"; // Syncfusion Tooltip Component

import { Navbar, Footer, Sidebar, ThemeSettings, Contact } from "./components";
import { Calendar, Kanban, Pomodoro, Login } from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu, isLogged } = useStateContext(); // get the state from the context

  return (
    <div>
      <Router>
        {isLogged ? (
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  className="text-3xl p-3 hover:drop-shadow-lx hover:bg-light-gray
                 text-white"
                  style={{ background: "blue", borderRadius: "50%" }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>

            {activeMenu ? (
              <div className="w-56 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}

            <div
              className={`dark:bg-main-dark-bg bg-main-bg min-h-90 w-full ${
                activeMenu ? "md:ml-56" : "flex-2" // if activeMenu is true, then set the margin-left to 72 in medium screens, else set the flex to 2 (full width)
              }`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>

              <div>
                <Routes>
                  <Route path="/" element={<Calendar />} />
                  <Route path="/home" element={<Calendar />} />

                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/pomodoro" element={<Pomodoro />} />
                  <Route path="*" element={<h1>Not Found</h1>} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
