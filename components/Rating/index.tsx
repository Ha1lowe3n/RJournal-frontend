import React, { useMemo, useState } from "react";

import { Paper } from "@mui/material";
import styles from "./Rating.module.scss";
import { Tabs } from "../assets/Tabs";
import { RatingList } from "./RatingList";

export const Rating: React.FC = React.memo(function Rating() {
    const [state, setState] = useState(0);
    console.log("Rating");

    const categories = useMemo(() => {
        return ["Ноябрь", "3 месяца", "За все время"];
    }, []);

    const style = useMemo(() => {
        return {
            width: "298px",
        };
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
                <button onClick={() => setState((prev) => prev + 1)}>+</button>
                <Tabs categories={categories} style={style} />
            </Paper>

            <RatingList />
        </div>
    );
});
