import React, { useMemo } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { Avatar, Paper } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import styles from "../../styles/Profile.module.scss";

import { MainLayout } from "../../layouts/MainLayout";
import { Tabs } from "../../components/assets/Tabs";
import { TJButton } from "../../components/assets/TJButton";
import { Post } from "../../components/Post";

const Profile: NextPage = () => {
    console.log("profile component rerender");

    const categories = useMemo(() => {
        return [
            "Статьи",
            "Комментарии",
            "Черновики",
            "Уведомления",
            "Донаты",
            "Подробнее",
        ];
    }, []);

    return (
        <MainLayout hideComments contentFullWidth>
            <Paper className={styles.profileInfo} elevation={0}>
                <div className={styles.information}>
                    <Avatar
                        className={styles.avatar}
                        src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                    />

                    <div className={styles.fullname}>Вася Пупкин</div>

                    <div className={styles.carmaAndFollowers}>
                        <div className={styles.carma}>+ 208</div>
                        <div>2 подписчика</div>
                    </div>

                    <div className="mt-20 mb-5">На проекте с 15 ноя 2021</div>

                    <Tabs categories={categories} style={{ width: "704px" }} />
                </div>

                <div className={styles.buttons}>
                    <Link href="/profile/settings">
                        <a>
                            <TJButton className={styles.whiteBtn}>
                                <SettingsIcon />
                            </TJButton>
                        </a>
                    </Link>

                    <TJButton className={styles.blueBtn}>
                        <SmsOutlinedIcon />
                        <span>Написать</span>
                    </TJButton>
                </div>
            </Paper>

            <div className={styles.profileCategotyElements}>
                <Post />

                <Paper elevation={0} className={styles.followers}>
                    <div>Подписчики</div>
                    <div className={styles.avatars}>
                        <Avatar className="mr-15">H</Avatar>
                        <Avatar className="mr-15" sx={{ bgcolor: "orange" }}>
                            N
                        </Avatar>
                    </div>
                </Paper>
            </div>
        </MainLayout>
    );
};

export default React.memo(Profile);
