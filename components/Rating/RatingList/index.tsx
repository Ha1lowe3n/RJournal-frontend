import { Paper } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import React, { useMemo } from "react";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./RatingList.module.scss";
import { TJButton } from "../../assets/TJButton";
import { RatingItem } from "./RatingItem";

export const RatingList: React.FC = React.memo(function RatingList() {
    console.log("RatingList");

    const items = useMemo(() => {
        return [
            {
                place: 1,
                image: "https://leonardo.osnova.io/c38d4dc2-ab25-56f8-9619-1dba44c863c5/-/scale_crop/64x64/-/format/webp/",
                title: "Плохие шутки",
                rating: 2500,
            },
            {
                place: 2,
                image: "https://leonardo.osnova.io/e1cbd17b-37d7-527e-8a7b-17bc11848dae/-/scale_crop/64x64/-/format/webp/",
                title: "Шутки у маршутки",
                rating: 2300,
            },
            {
                place: 3,
                image: "https://leonardo.osnova.io/ffe817cf-8f00-93bd-aa44-8595887baf29/-/scale_crop/64x64/-/format/webp/",
                title: "hfnnffgddfg",
                rating: 3100,
            },
        ];
    }, []);

    return (
        <Paper className={clsx(styles.content, styles.ratings)} elevation={0}>
            <div className={styles.categories}>
                <span className={styles.title}>Сообщества</span>
                <span className={styles.rating}>Рейтинг</span>
            </div>
            <div className={styles.items}>
                {items.map((item, i) => (
                    <RatingItem
                        key={item.title + i}
                        place={item.place}
                        title={item.title}
                        rating={item.rating}
                        image={item.image}
                    />
                ))}
            </div>
            <div className={styles.showMore}>
                <span>Показать еще</span>
                <KeyboardArrowDownIcon />
            </div>
        </Paper>
    );
});
