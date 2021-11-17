import React from "react";
import Link from "next/link";

import { Paper, IconButton, Avatar } from "@mui/material";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./Header.module.scss";

import { TJButton } from "../assets/TJButton";

export const Header: React.FC = React.memo(function Header() {
    console.log("header rerender");

    return (
        <Paper classes={{ root: styles.root }} elevation={0} square={true}>
            <div className="d-flex align-center">
                <IconButton style={{ color: "black" }}>
                    <MenuIcon />
                </IconButton>

                <Link href="/">
                    <a className={styles.logo}>
                        <svg viewBox="0 0 24 25" id="site_logo">
                            <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
                            <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
                            <path
                                fill="rgba(0,0,0,0.15)"
                                d="M7.5 19h1v6l-1-6z"
                            ></path>
                        </svg>
                    </a>
                </Link>

                <div className={styles.searchBox}>
                    <svg
                        className={styles.searchIcon}
                        viewBox="0 0 24 24"
                        id="v_search"
                    >
                        <path d="M11 5a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.905l3.387 3.388a1 1 0 01-1.414 1.414l-3.387-3.387A8 8 0 013 11z"></path>
                    </svg>
                    <input placeholder="Поиск" />
                </div>
                <TJButton>Новая запись</TJButton>
            </div>

            <div className="d-flex align-center">
                <IconButton className={styles.iconButton}>
                    <SmsOutlinedIcon />
                </IconButton>

                <IconButton className={styles.iconButton + " " + "ml-10"}>
                    <NotificationsNoneOutlinedIcon />
                </IconButton>

                <Link href="/profile/1">
                    <a className={styles.avatarBlock}>
                        <Avatar
                            className={styles.avatar}
                            alt="Remy Sharp"
                            src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                        />
                        <KeyboardArrowDownIcon />
                    </a>
                </Link>
            </div>
        </Paper>
    );
});
