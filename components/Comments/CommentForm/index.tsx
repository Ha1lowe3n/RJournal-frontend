import React, { useEffect, useRef, useState } from "react";

import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import styles from "./CommentForm.module.scss";
import clsx from "clsx";
import { TJButton } from "../../assets/TJButton";

// interface CommentFormProps {}

const MIN_TEXTAREA_HEIGHT = 60;

export const CommentForm: React.FC = () => {
    const [focusInput, setFocusInput] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [focusTextarea, setFocusTextarea] = useState<boolean>(false);
    const textareaRef = useRef(null);

    useEffect(() => {
        if (focusInput) {
            // @ts-ignore
            textareaRef.current.style.height = `${MIN_TEXTAREA_HEIGHT}px`;
            // @ts-ignore
            textareaRef.current.style.height = `${Math.max(
                // @ts-ignore
                textareaRef.current.scrollHeight,
                MIN_TEXTAREA_HEIGHT
            )}px`;
        }
    }, [value, focusInput]);

    const changeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    };

    return (
        <>
            {!focusInput ? (
                <div className={styles.simpleForm}>
                    <input
                        type="text"
                        placeholder="Написать комментарий..."
                        onFocus={() => setFocusInput(true)}
                    />
                    <div className={styles.icons}>
                        <div className={clsx(styles.icon, styles.left)}>
                            <InsertPhotoOutlinedIcon />
                        </div>
                        <div className={clsx(styles.icon, styles.right)}>
                            <span>₽</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={clsx(styles.fullForm, {
                        [styles.active]: focusTextarea || value.length,
                    })}
                >
                    <textarea
                        ref={textareaRef}
                        placeholder="Написать комментарий..."
                        value={value}
                        onChange={changeValue}
                        onFocus={() => setFocusTextarea(true)}
                        onBlur={() => setFocusTextarea(false)}
                        autoFocus
                    />
                    <div className={styles.footer}>
                        <div className={styles.icons}>
                            <div className={clsx(styles.icon, styles.left)}>
                                <InsertPhotoOutlinedIcon />
                            </div>
                            <div className={clsx(styles.icon, styles.right)}>
                                <span>₽</span>
                            </div>
                        </div>
                        <TJButton
                            className={clsx({
                                [styles.disabled]: value.length === 0,
                            })}
                            disabled={value.length === 0}
                        >
                            Отправить
                        </TJButton>
                    </div>
                </div>
            )}
        </>
    );
};
