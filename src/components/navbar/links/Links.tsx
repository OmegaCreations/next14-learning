"use client";

import { useState } from "react";
import "./links.css";
import NavLink from "./navLink/navLink";

// Links
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  // TODO: TEMP
  const session = true;
  const isAdmin = true;

  return (
    <div className="container">
      <div className="links">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}{" "}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="logout">Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button onClick={() => setOpen((prev) => !prev)}>menu</button>
      {open && (
        <div className="mobileLinks">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
