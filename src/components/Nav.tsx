import { useState } from "react";
import { navItems } from "../data/nav";

const Nav: React.FC = () => {
  // console.log("This is a react component");

  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="nav-btn">
        <button onClick={() => setShowNav(!showNav)}>Nav Toggle</button>
        {showNav && (
          <nav className="nav-mobile">
            {navItems.map((navE) => (
              <div key={navE.id}>{navE.name}</div>
            ))}
          </nav>
        )}
      </div>
      <nav className="nav">
        {navItems.map((navE) => (
          <div key={navE.id}>{navE.name}</div>
        ))}
      </nav>
    </>
  );
};

export default Nav;
