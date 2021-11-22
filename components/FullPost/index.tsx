import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, Paper } from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import styles from "./FullPost.module.scss";

import { IconsLine } from "../assets/IconsLine";
import { PostTop } from "../Post/PostTop";
import { ChangeCarma } from "../assets/ChangeCarma";
import { TJButton } from "../assets/TJButton";

interface FullPostProps {}

export const FullPost: React.FC<FullPostProps> = React.memo(
    function FullPost() {
        const postTopInfo = useMemo(() => {
            return {
                imageSrc:
                    "https://leonardo.osnova.io/2810b9bb-071f-8a49-2290-2f92ca6797cd/-/scale_crop/64x64/",
                titleCategory: "Новости",
                authorName: "Сергей Исенеков",
                time: "6 часов",
            };
        }, []);

        const icons = useMemo(() => {
            return [
                { icon: <ModeCommentOutlinedIcon />, count: 0 },
                { icon: <ChangeCircleOutlinedIcon />, count: 0 },
                { icon: <BookmarkBorderOutlinedIcon /> },
                { icon: <FileUploadOutlinedIcon /> },
            ];
        }, []);

        const hashTags = useMemo(() => {
            return ["беженцы", "приключения", "wtf"];
        }, []);

        return (
            <Paper elevation={0} className={styles.wrapper}>
                <div className={styles.top}>
                    <PostTop {...postTopInfo} style={{ height: "32px" }} />
                    <h1 className={styles.title}>
                        Две группы мигрантов прорвались через
                        белорусско-польскую границу. Их остановили и отправили
                        на территорию
                    </h1>
                    <p>
                        Также белорусские пограничники обнаружили в стихийном
                        лагере четверых курдов со следами побоев.
                    </p>
                    <div className={styles.footerTop}>
                        <IconsLine icons={icons} />
                        <span>16 517 просмотров</span>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image
                        src="https://leonardo.osnova.io/e5d01147-5bc5-5e55-b4b4-d12301ab79fd/-/preview/1300/-/format/webp/"
                        alt="picture"
                        height="600"
                        width="980"
                    />
                </div>

                <div className={styles.endPost}>
                    <div className={styles.hashTags}>
                        {hashTags.map((tag, i) => (
                            <span key={tag + i}>#{tag}</span>
                        ))}
                    </div>
                    <div className={styles.icons}>
                        <IconsLine icons={icons} />
                        <ChangeCarma carmaCount={50} />
                    </div>
                    <div className={styles.author}>
                        <Link href="/profile/1">
                            <a>
                                <div className={styles.left}>
                                    <div className={styles.avatar}>
                                        <Avatar src="https://leonardo.osnova.io/1f42645f-2b49-519c-ad91-dc13b2851792/-/scale_crop/108x108/-/format/webp/" />
                                    </div>

                                    <div className={styles.info}>
                                        <div className={styles.name}>
                                            Никита Логинов
                                        </div>
                                        <div className={styles.carma}>
                                            +35 150
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <div className={styles.right}>
                            <TJButton
                                style={{
                                    width: "44px",
                                    height: "38px",
                                    marginRight: "10px",
                                }}
                            >
                                <SmsOutlinedIcon />
                            </TJButton>
                            <TJButton
                                style={{
                                    width: "158px",
                                    height: "38px",
                                }}
                            >
                                <PersonAddIcon
                                    style={{
                                        marginRight: "5px",
                                    }}
                                />
                                Подписаться
                            </TJButton>
                        </div>
                    </div>
                </div>
            </Paper>
        );
    }
);
