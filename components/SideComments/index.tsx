import React, { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./SideComments.module.scss";

import { CommentFullInfo } from "../../pages/news/[slug]";
import { SideComment } from "./SideComment";
import clsx from "clsx";

interface SideComments {
    comments: CommentFullInfo[];
}

export const SideComments: React.FC<SideComments> = React.memo(
    function SideComments({ comments }) {
        const [hiddenSideComments, setHiddenSideComments] =
            useState<boolean>(false);

        const toggleHiddenSideComments = () => {
            setHiddenSideComments(!hiddenSideComments);
        };

        return (
            <div className={styles.comments}>
                <div
                    className={clsx(styles.showOrHide, {
                        [styles.hidden]: hiddenSideComments,
                    })}
                    onClick={toggleHiddenSideComments}
                >
                    Комментарии
                    <KeyboardArrowRightIcon />
                </div>

                <div className={styles.commentsPosts}>
                    {!hiddenSideComments &&
                        comments?.map((comment, i) => (
                            <SideComment
                                key={comment.id}
                                user={comment.user}
                                text={comment.text}
                                post={comment.post}
                            />
                        ))}
                </div>
            </div>
        );
    }
);
