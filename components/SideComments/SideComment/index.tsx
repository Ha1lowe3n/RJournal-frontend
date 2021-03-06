import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./SideComment.module.scss";

interface SideCommentProps {
    user: {
        fullname: string;
        avatarUrl: string;
        id: number;
    };
    text: string;
    post: {
        title: string;
        id: number;
    };
}

export const SideComment: React.FC<SideCommentProps> = React.memo(
    function Comment({ user, text, post }) {
        return (
            <div className={styles.post}>
                <a>
                    <div className={styles.author}>
                        <Link href={`profile/${user.id}`}>
                            <a>
                                <Image
                                    src={user.avatarUrl}
                                    alt="author avatar"
                                    width="24"
                                    height="24"
                                />
                                <span>{user.fullname}</span>
                            </a>
                        </Link>
                        <time>3м</time>
                    </div>
                </a>

                <a>
                    <div className={styles.text}>{text}</div>
                </a>

                <Link href={`/news/${post.id}`}>
                    <a>
                        <div className={styles.titleTheme}>{post.title}</div>
                    </a>
                </Link>
            </div>
        );
    }
);
