import { Paper } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import React, { useMemo } from "react";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./RatingList.module.scss";
import { TJButton } from "../../assets/TJButton";

export const RatingList: React.FC = () => {
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
                    <div key={item.title + i} className={styles.item}>
                        <div className={styles.link}>
                            <Link href="#">
                                <a>
                                    <span className={styles.place}>
                                        {item.place}
                                    </span>
                                    <Image
                                        src={item.image}
                                        alt="avatar"
                                        width="30"
                                        height="30"
                                    />
                                    <span className={styles.title}>
                                        {item.title}
                                    </span>
                                </a>
                            </Link>
                        </div>

                        <div className={styles.ratingNumber}>{item.rating}</div>

                        <TJButton style={{ width: "44px", height: "40px" }}>
                            <PersonAddIcon />
                        </TJButton>
                    </div>
                ))}
            </div>
            <div className={styles.showMore}>
                <span>Показать еще</span>
                <KeyboardArrowDownIcon />
            </div>
        </Paper>
    );
};
