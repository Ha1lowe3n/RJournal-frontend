import { IconButton } from "@mui/material";
import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./ChangeCarma.module.scss";

interface ChangeCarmaProps {
    carmaCount: number;
}

export const ChangeCarma: React.FC<ChangeCarmaProps> = React.memo(
    function ChangeCarma({ carmaCount }) {
        return (
            <div className={styles.carmaUp}>
                <IconButton
                    style={{
                        height: "24px",
                        width: "24px",
                        marginRight: "12px",
                    }}
                >
                    <KeyboardArrowDownIcon />
                </IconButton>
                <span>{carmaCount}</span>
                <IconButton
                    style={{
                        height: "24px",
                        width: "24px",
                        marginLeft: "12px",
                    }}
                >
                    <KeyboardArrowUpIcon />
                </IconButton>
            </div>
        );
    }
);
