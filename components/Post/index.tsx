import { Paper } from "@mui/material";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import styles from "./Post.module.scss";

import { PostTop } from "./PostTop";
import { IconsLine } from "../assets/IconsLine";
import { ChangeCarma } from "../assets/ChangeCarma";

export const Post: React.FC = React.memo(function Post() {
    console.log("post render");

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

    return (
        <Paper elevation={0} className={clsx(styles.content)}>
            <PostTop {...postTopInfo} />

            <Link href="/news/1">
                <a>
                    <div className={styles.title}>
                        Две группы мигрантов прорвались через
                        белорусско-польскую границу. Их остановили и отправили
                        на территорию
                    </div>
                    <p>
                        Также белорусские пограничники обнаружили в стихийном
                        лагере четверых курдов со следами побоев.
                    </p>
                    <div className={styles.image}>
                        <Image
                            src="https://leonardo.osnova.io/e5d01147-5bc5-5e55-b4b4-d12301ab79fd/-/preview/1300/-/format/webp/"
                            alt="image"
                            width="600"
                            height="340"
                        />
                    </div>
                </a>
            </Link>

            <div className={styles.footer}>
                <IconsLine icons={icons} />
                <ChangeCarma carmaCount={50} />
            </div>
        </Paper>
    );
});
