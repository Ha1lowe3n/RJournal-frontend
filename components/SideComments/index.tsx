import React from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./SideComments.module.scss";

import { CommentFullInfo } from "../../pages/news/[slug]";
import { SideComment } from "./SideComment";

interface SideComments {
    comments: CommentFullInfo[];
}

export const SideComments: React.FC<SideComments> = React.memo(
    function SideComments({ comments }) {
        return (
            <div className={styles.comments}>
                <div className={styles.showOrHide}>
                    Комментарии
                    <KeyboardArrowRightIcon />
                </div>

                <div className={styles.commentsPosts}>
                    {comments?.map((comment, i) => (
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
