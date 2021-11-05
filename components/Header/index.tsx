import React from "react";

import { Paper, Button, IconButton, Avatar } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
    return (
        <Paper classes={{ root: styles.root }} elevation={0} square={true}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <svg className={styles.logo} viewBox="0 0 24 25" id="site_logo">
                    <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
                    <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
                    <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
                </svg>

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

                <button className={styles.createNewBtn}>Новая запись</button>
            </div>

            <div className="d-flex align-center">
                <IconButton>
                    <SmsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsNoneOutlinedIcon />
                </IconButton>

                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
        </Paper>
    );
};
