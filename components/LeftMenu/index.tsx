import React from "react";

import { Button } from "@mui/material";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import styles from "./LeftMenu.module.scss";

export const LeftMenu: React.FC = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li className={styles.active}>
                    <Button>
                        <WhatshotOutlinedIcon />
                        <p>Популярное</p>
                    </Button>
                </li>
                <li>
                    <Button>
                        <SmsOutlinedIcon />
                        <p>Сообщения</p>
                    </Button>
                </li>
                <li>
                    <Button>
                        <TrendingUpIcon />
                        <p>Рейтинг TJ</p>
                    </Button>
                </li>
                <li>
                    <Button>
                        <FormatListBulletedIcon />
                        <p>Подписки</p>
                    </Button>
                </li>
            </ul>
        </div>
    );
};
