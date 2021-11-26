import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@mui/material";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import styles from "./LeftMenu.module.scss";
import clsx from "clsx";

export const LeftMenu: React.FC = React.memo(function LeftMenu() {
    const router = useRouter();

    return (
        <div className={styles.menu}>
            <ul>
                <li
                    className={clsx({
                        [styles.active]: router.pathname === "/",
                    })}
                >
                    <Link href="/">
                        <a>
                            <Button>
                                <WhatshotOutlinedIcon />
                                <p>Популярное</p>
                            </Button>
                        </a>
                    </Link>
                </li>
                <li
                    className={clsx({
                        [styles.active]: router.pathname === "/messages",
                    })}
                >
                    <Button>
                        <SmsOutlinedIcon />
                        <p>Сообщения</p>
                    </Button>
                </li>
                <li
                    className={clsx({
                        [styles.active]: router.pathname === "/rating",
                    })}
                >
                    <Link href="/rating">
                        <a>
                            <Button>
                                <TrendingUpIcon />
                                <p>Рейтинг TJ</p>
                            </Button>
                        </a>
                    </Link>
                </li>
                <li
                    className={clsx({
                        [styles.active]: router.pathname === "/subscribers",
                    })}
                >
                    <Button>
                        <FormatListBulletedIcon />
                        <p>Подписки</p>
                    </Button>
                </li>
            </ul>
        </div>
    );
});
