import React, { useState } from "react";

const Header = ({ setIsDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 600);

  return (
    <section>
      <header className="d-flex justify-content-between align-items-center px-4 py-2">
        <h1>State</h1>
        <div className="d-flex gap-5">
          <div className="d-flex gap-3 mt-1">
            <label>{isDarkMode ? "Koyu Mod" : "Açık Mod"}</label>
            <input
              onChange={(event) => {
                console.log(event);
                setIsDarkMode(event.target.checked);
              }}
              type="checkbox"
              className="form-check-input"
            />
          </div>

          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                rotate: isOpen ? "270deg" : "0deg",
                transition: "all 0.3s",
              }}
              className="btn btn-secondary"
            >
              |||
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <nav className=" bg-white p-3 text-black d-flex justify-content-center gap-3 rounded">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Slack</span>
        </nav>
      )}
    </section>
  );
};

export default Header;
