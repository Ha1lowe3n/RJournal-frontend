import { Paper } from "@mui/material";
import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./TJInput.module.scss";
import clsx from "clsx";

interface TJInputProps {
    type?: string;
    datalist?: string[];
    value: string;
}

export const TJInput: React.FC<TJInputProps> = React.memo(function TJInput({
    type,
    datalist,
    value,
}) {
    const [valueInput, setValueInput] = useState<string>(value);
    const [hide, setHide] = useState<boolean>(true);

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value);
    };

    const showOrHideHiddentList = () => {
        hide ? setHide(false) : setHide(true);
    };

    return (
        <div className={styles.inputBlock}>
            <div
                className={styles.inputBox}
                onClick={datalist && showOrHideHiddentList}
                style={datalist && { cursor: "pointer" }}
            >
                <input
                    className={styles.input}
                    type={type && type}
                    value={valueInput}
                    onChange={changeInput}
                    disabled={!!datalist}
                />
                {datalist &&
                    (hide ? (
                        <KeyboardArrowDownIcon />
                    ) : (
                        <KeyboardArrowUpIcon />
                    ))}
            </div>
            {!hide && (
                <Paper className={styles.hiddenList}>
                    <div
                        className={clsx(styles.listItem, {
                            [styles.active]:
                                datalist && valueInput === datalist[0],
                        })}
                        onClick={() => {
                            datalist && setValueInput(datalist[0]);
                            showOrHideHiddentList();
                        }}
                    >
                        Показывать когда я онлайн
                    </div>
                    <div
                        onClick={() => {
                            datalist && setValueInput(datalist[1]);
                            showOrHideHiddentList();
                        }}
                        className={clsx(styles.listItem, {
                            [styles.active]:
                                datalist && valueInput === datalist[1],
                        })}
                    >
                        ратата
                    </div>
                </Paper>
            )}
        </div>
    );
});
