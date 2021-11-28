import React, { useCallback, useMemo, useState } from "react";

import { Divider, Paper } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import styles from "./Comments.module.scss";

import { Tabs } from "../assets/Tabs";
import { Comment } from "./Comment";
import { CommentFullInfo, items } from "../../pages/news/[slug]";
import { CommentForm } from "./CommentForm";

// interface CommentsProps {
//     items: CommentFullInfo[];
// }

export const Comments: React.FC = React.memo(function Comments() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const categories = useMemo(() => {
        return ["Популярные", "По порядку"];
    }, []);

    const sortCategories = useMemo(() => {
        if (activeTab === 0) {
            return items.sort((a, b) => b.carmaCount - a.carmaCount);
        } else {
            console.log("1");
            return items.sort((a, b) => a.carmaCount - b.carmaCount);
        }
    }, [activeTab]);

    return (
        <Paper elevation={0} className={styles.comments}>
            <div className={styles.content}>
                <div className={styles.count}>
                    <span>3 коммента</span>
                </div>
                <div className={styles.navigation}>
                    <Tabs
                        categories={categories}
                        style={{ width: "195px", height: "50px" }}
                        active={activeTab}
                        setActive={setActiveTab}
                    />
                    <div className={styles.icon}>
                        <NotificationsNoneOutlinedIcon
                            style={{
                                width: "25px",
                                height: "25px",
                            }}
                        />
                    </div>
                </div>
            </div>

            <Divider style={{ marginBottom: "20px" }} />

            <div className={styles.content}>
                <CommentForm />

                {sortCategories.map((item, i) => (
                    <Comment
                        key={item.id}
                        text={item.text}
                        createdAt={item.createdAt}
                        user={item.user}
                        carmaCount={item.carmaCount}
                    />
                ))}
            </div>
        </Paper>
    );
});
