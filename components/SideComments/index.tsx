import React from "react";
import Image from "next/image";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./SideComments.module.scss";

const comments = [
    {
        user: {
            fullname: "Вася Пупкин",
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
        post: {
            title: "Какая у вас дома ванна?",
        },
    },
    {
        user: {
            fullname: "Вася Пупкин",
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
        post: {
            title: "Какая у вас дома ванна?",
        },
    },
    {
        user: {
            fullname: "Вася Пупкин",
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
        post: {
            title: "Какая у вас дома ванна?",
        },
    },
    {
        user: {
            fullname: "Вася Пупкин",
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
        post: {
            title: "Какая у вас дома ванна?",
        },
    },
    {
        user: {
            fullname: "Вася Пупкин",
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
        post: {
            title: "Какая у вас дома ванна?",
        },
    },
    {
        user: {
            fullname: "Вася Пупкин",
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
        post: {
            title: "Какая у вас дома ванна?",
        },
    },
    {
        user: {
            fullname: "Вася Пупкин",
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
        post: {
            title: "Какая у вас дома ванна?",
        },
    },
    {
        user: {
            fullname: "Вася Пупкин",
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
        post: {
            title: "Какая у вас дома ванна?",
        },
    },
    {
        user: {
            fullname: "Вася Пупкин",
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
        post: {
            title: "Какая у вас дома ванна?",
        },
    },
];

interface CommentProps {
    user: {
        fullname: string;
    };
    text: string;
    post: {
        title: string;
    };
}

const Comment: React.FC<CommentProps> = React.memo(function Comment({
    user,
    text,
    post,
}) {
    return (
        <div className={styles.post}>
            <a>
                <div className={styles.author}>
                    <Image
                        src="https://leonardo.osnova.io/2eac2f33-ab07-09c0-d20a-a3a95d68d9aa/-/scale_crop/64x64/-/format/webp/"
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
});

export const SideComments = React.memo(function SideComments() {
    return (
        <div className={styles.comments}>
            <div className={styles.showOrHide}>
                Комментарии
                <KeyboardArrowRightIcon />
            </div>

            <div className={styles.commentsPosts}>
                {comments.map((comment, i) => (
                    <Comment key={i} {...comment} />
                ))}
            </div>
        </div>
    );
});
