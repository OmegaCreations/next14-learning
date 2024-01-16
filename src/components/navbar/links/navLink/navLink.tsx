"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

// NavLink
const NavLink: React.FC = ({ item }: any) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.navlink} ${pathName === item.path && styles.active}`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
