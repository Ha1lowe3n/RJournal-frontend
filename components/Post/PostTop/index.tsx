import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import styles from "./PostTop.module.scss";
import { IconButton } from "@mui/material";
import clsx from "clsx";

interface PostTopProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imageSrc: string;
    titleCategory: string;
    authorName: string;
    time: string;
}

export const PostTop: React.FC<PostTopProps> = ({
    className,
    imageSrc,
    titleCategory,
    authorName,
    time,
    ...props
}) => {
    return (
        <div className={clsx(styles.top, className)} {...props}>
            <div className={styles.topInformation}>
                <a className={styles.category}>
                    <div className={styles.categoryImg}>
                        <Image
                            src={imageSrc}
                            alt="image"
                            width="22"
                            height="22"
                        />
                    </div>
                    <div className={styles.titleCategory}>{titleCategory}</div>
                </a>

                <a className={styles.authorName}>{authorName}</a>

                <time>{time}</time>
            </div>

            <IconButton className={styles.addBtn}>
                <PersonAddIcon />
                <span>Подписаться</span>
            </IconButton>
        </div>
    );
};
