import React, { useMemo } from "react";
import type { NextPage } from "next";

import { Paper } from "@mui/material";
import styles from "../styles/Rating.module.scss";

import { MainLayout } from "../layouts/MainLayout";
import { Tabs } from "../components/assets/Tabs";
import { RatingList } from "../components/RatingList";

const Rating: NextPage = () => {
    const categories = useMemo(() => {
        return ["Ноябрь", "3 месяца", "За все время"];
    }, []);

    const style = useMemo(() => {
        return {
            width: "298px",
        };
    }, []);
    return (
        <MainLayout contentFullWidth>
            <div className={styles.content}>
                <Paper className={styles.header} elevation={0}>
                    <h3 className={styles.title}>Рейтинг сообществ и блогов</h3>
                    <p>
                        Десять лучших авторов и комментаторов, а также
                        администраторы первых десяти сообществ из рейтинга по
                        итогам месяца бесплатно получают Plus-аккаунт на месяц.
                    </p>

                    <Tabs categories={categories} style={style} />
                </Paper>

                <RatingList />
            </div>
        </MainLayout>
    );
};

export default React.memo(Rating);
