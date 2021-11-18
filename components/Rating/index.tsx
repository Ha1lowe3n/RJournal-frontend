import React, { useMemo } from "react";

import { Paper } from "@mui/material";
import styles from "./Rating.module.scss";
import { Tabs } from "../assets/Tabs";
import { RatingList } from "./RatingList";

export const Rating: React.FC = React.memo(function Rating() {
    const categories = useMemo(() => {
        return ["Ноябрь", "3 месяца", "За все время"];
    }, []);

    return (
        <div className={styles.content}>
            <Paper className={styles.header} elevation={0}>
                <h3 className={styles.title}>Рейтинг сообществ и блогов</h3>
                <p>
                    Десять лучших авторов и комментаторов, а также
                    администраторы первых десяти сообществ из рейтинга по итогам
                    месяца бесплатно получают Plus-аккаунт на месяц.
                </p>
                <Tabs categories={categories} style={{ width: "298px" }} />
            </Paper>

            <RatingList />
        </div>
    );
});
