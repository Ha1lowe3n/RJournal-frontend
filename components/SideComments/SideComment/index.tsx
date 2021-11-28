import React from "react";
import Image from "next/image";

import styles from "./SideComment.module.scss";

interface SideCommentProps {
    user: {
        fullname: string;
        avatarUrl: string;
    };
    text: string;
    post: {
        title: string;
    };
}

export const SideComment: React.FC<SideCommentProps> = React.memo(
    function Comment({ user, text, post }) {
        return (
            <div className={styles.post}>
                <a>
                    <div className={styles.author}>
                        <Image
                            src={user.avatarUrl}
                            alt="author avatar"
                            width="24"
                            height="24"
                        />
                        <span>{user.fullname}</span>
                        <time>3м</time>
                    </div>
                </a>

                <a>
                    <div className={styles.text}>{text}</div>
                </a>

                <a>
                    <div className={styles.titleTheme}>{post.title}</div>
                </a>
            </div>
        );
    }
);
