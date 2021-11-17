import { Paper } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./Post.module.scss";
import clsx from "clsx";

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className={clsx(styles.content)}>
            <div className={styles.top}>
                <div className={styles.topInformation}>
                    <a className={styles.category}>
                        <div className={styles.categoryImg}>
                            <Image
                                src="https://leonardo.osnova.io/2810b9bb-071f-8a49-2290-2f92ca6797cd/-/scale_crop/64x64/"
                                alt="image"
                                width="22"
                                height="22"
                            />
                        </div>
                        <div className={styles.titleCategory}>Новости</div>
                    </a>

                    <a className={styles.authorName}>Сергей Исенеков</a>

                    <time>6 часов</time>
                </div>

                <IconButton className={styles.addBtn}>
                    <PersonAddIcon />
                    <span>Подписаться</span>
                </IconButton>
            </div>
            <div className={styles.title}>
                Две группы мигрантов прорвались через белорусско-польскую
                границу. Их остановили и отправили на территорию
            </div>
            <p>
                Также белорусские пограничники обнаружили в стихийном лагере
                четверых курдов со следами побоев.
            </p>
            <div className={styles.image}>
                <Image
                    src="https://leonardo.osnova.io/e5d01147-5bc5-5e55-b4b4-d12301ab79fd/-/preview/1300/-/format/webp/"
                    alt="image"
                    width="600"
                    height="340"
                />
            </div>

            <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    <div className={styles.item}>
                        <ModeCommentOutlinedIcon />
                        <span>0</span>
                    </div>
                    <div className={styles.item}>
                        <ChangeCircleOutlinedIcon />
                        <span>0</span>
                    </div>
                    <div className={styles.item}>
                        <BookmarkBorderOutlinedIcon />
                    </div>
                    <div className={styles.item}>
                        <FileUploadOutlinedIcon />
                    </div>
                </div>

                <div className={styles.footerRight}>
                    <IconButton
                        style={{
                            height: "24px",
                            width: "24px",
                            marginRight: "12px",
                        }}
                    >
                        <KeyboardArrowDownIcon />
                    </IconButton>
                    <span>50</span>
                    <IconButton
                        style={{
                            height: "24px",
                            width: "24px",
                            marginLeft: "12px",
                        }}
                    >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </div>
            </div>
        </Paper>
    );
};
