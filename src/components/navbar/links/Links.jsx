"use client";

import NavLink from "./navbarLink/navLink";
import styles from "./links.module.css";
import { useState } from "react";

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

const Links = () => {
    const [open, setOpen] = useState(false);

    // TEMPORARY
    const session = false;
    const isAdmin = false;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink
                                item={{ title: "Admin", path: "/admin" }}
                            ></NavLink>
                        )}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink
                        item={{ title: "Login", path: "/login" }}
                    ></NavLink>
                )}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
