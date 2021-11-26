import { NextPage } from "next";
import React, { ChangeEvent, useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import styles from "../styles/Write.module.scss";
import { TJButton } from "../components/assets/TJButton";

const Editor = dynamic(
    // @ts-ignore
    () => import("../components/assets/Editor").then((m) => m.Editor),
    { ssr: false }
);

const MIN_TEXTAREA_HEIGHT = 46;

const Write: NextPage = () => {
    const [value, setValue] = useState<string>("");
    const textareaRef = useRef(null);

    const changeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    };

    useLayoutEffect(() => {
        // @ts-ignore
        textareaRef.current.style.height = `${MIN_TEXTAREA_HEIGHT}px`;
        // @ts-ignore
        textareaRef.current.style.height = `${Math.max(
            // @ts-ignore
            textareaRef.current.scrollHeight,
            MIN_TEXTAREA_HEIGHT
        )}px`;
    }, [value]);

    return (
        <div className={styles.write}>
            <div className={styles.content}>
                <textarea
                    ref={textareaRef}
                    placeholder="Заголовок"
                    style={{ height: MIN_TEXTAREA_HEIGHT }}
                    maxLength={120}
                    value={value}
                    onChange={changeValue}
                    rows={1}
                />
                <div className={styles.editor}>
                    <Editor />
                </div>
                <div className={styles.button}>
                    <TJButton
                        style={{
                            color: "white",
                            backgroundColor: "#4683d9",
                            width: "140px",
                        }}
                    >
                        Опубликовать
                    </TJButton>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Write);
