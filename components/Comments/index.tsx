import React, { useMemo } from "react";

import { Avatar, Divider, Paper } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import styles from "./Comments.module.scss";

import { Tabs } from "../assets/Tabs";

export const Comments: React.FC = React.memo(function Comments() {
    const categories = useMemo(() => {
        return ["Популярные", "По порядку"];
    }, []);

    return (
        <Paper elevation={0} className={styles.comments}>
            <div className={styles.content}>
                <div className={styles.count}>
                    <span>3 коммента</span>
                </div>
                <div className={styles.navigation}>
                    <Tabs
                        categories={categories}
                        style={{ width: "195px", height: "50px" }}
                    />
                    <NotificationsNoneOutlinedIcon />
                </div>
            </div>
            <Divider />
        </Paper>
    );
});
