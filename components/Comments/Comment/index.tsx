import Link from "next/link";
import React from "react";

import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./Comment.module.scss";

import { ChangeCarma } from "../../assets/ChangeCarma";

export interface CommentProps {
    text: string;
    createdAt: string;
    user: {
        fullname: string;
        avatarUrl: string;
    };
    carmaCount: number;
}

export const Comment: React.FC<CommentProps> = ({
    text,
    createdAt,
    user: { fullname, avatarUrl },
    carmaCount,
}) => {
    return (
        <div className={styles.comment}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <Avatar
                        src={avatarUrl}
                        alt="avatar"
                        style={{
                            width: "32px",
                            height: "32px",
                            marginRight: "10px",
                        }}
                    />

                    <div className={styles.info}>
                        <Link href="/">
                            <a>
                                <span>{fullname}</span>
                            </a>
                        </Link>
                        <time>{createdAt}</time>
                    </div>
                </div>

                <div className={styles.right}>
                    <ChangeCarma carmaCount={carmaCount} />
                </div>
            </div>

            <div className={styles.text}>
                <span>{text}</span>
            </div>

            <div className={styles.footer}>
                <span>Ответить</span>
                <div className={styles.dots}>
                    <MoreHorizIcon
                        style={{
                            width: "16px",
                            height: "16px",
                            color: "#595959",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
