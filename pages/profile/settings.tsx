import React, { useMemo } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { Paper } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styles from "../../styles/ProfileSettings.module.scss";
import { facebook, twitter, vk } from "../../assets/svg";

import { MainLayout } from "../../layouts/MainLayout";
import { TJInput } from "../../components/assets/Input";
import { TJButton } from "../../components/assets/TJButton";

const ProfileSettings: NextPage = () => {
    const datalistForOnline = useMemo(() => {
        return ["Показывать когда я онлайн", "Скрыть ото всех"];
    }, []);
    const datalistForLent = useMemo(() => {
        return [
            "Моя лента - популярное",
            "Моя лента - свежее",
            "Весь сайт - популярное",
            "Весь сайт - свежее",
        ];
    }, []);
    const datalistForBlog = useMemo(() => {
        return ["Показывать всем", "Показывать только подписчикам"];
    }, []);
    const datalistForOld = useMemo(() => {
        return ["Блюрить записи 18+", "Показывать все"];
    }, []);

    return (
        <MainLayout hideComments contentFullWidth>
            <Paper elevation={0} className={styles.content}>
                <div className={styles.top}>
                    <Link href="/profile/1">
                        <a className={styles.back}>
                            <KeyboardArrowLeftIcon />
                            <span>Вася Пупкин</span>
                        </a>
                    </Link>

                    <div className={clsx(styles.email, styles.block)}>
                        <div className={styles.title}>Почта и пароль</div>
                        <TJInput value={"vasya@mail.ru"} type={"email"} />
                        <span>Изменить пароль</span>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.title}>Связанные аккаунты</div>

                        <div className={styles.item}>
                            <Image
                                src={facebook}
                                alt="facebook logo"
                                height="20"
                                width="20"
                            />
                            Facebook
                        </div>
                        <div className={styles.item}>
                            <Image
                                src={twitter}
                                alt="twitter logo"
                                height="20"
                                width="20"
                            />
                            Twitter
                        </div>
                        <div className={styles.item}>
                            <Image
                                src={vk}
                                alt="VK logo"
                                height="20"
                                width="20"
                            />
                            VK
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.title}>Статус онлайн</div>
                        <TJInput
                            value={datalistForOnline[0]}
                            datalist={datalistForOnline}
                        />
                    </div>

                    <div className={styles.block}>
                        <div className={styles.title}>Лента по умолчанию</div>
                        <TJInput
                            value={datalistForLent[0]}
                            datalist={datalistForLent}
                        />
                    </div>

                    <div className={styles.block}>
                        <div className={styles.title}>Записи в блоге</div>
                        <TJInput
                            value={datalistForBlog[0]}
                            datalist={datalistForBlog}
                        />
                    </div>

                    <div className={styles.block}>
                        <div className={styles.title}>Контент для взрослых</div>
                        <TJInput
                            value={datalistForOld[0]}
                            datalist={datalistForOld}
                        />
                    </div>
                </div>

                <Paper elevation={0} className={styles.footer}>
                    <TJButton style={{ width: "112px" }}>Сохранить</TJButton>
                </Paper>
            </Paper>
        </MainLayout>
    );
};

export default React.memo(ProfileSettings);
