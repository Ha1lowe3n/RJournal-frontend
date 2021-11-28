import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";

import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./ChangeCarma.module.scss";

interface ChangeCarmaProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    carmaCount: number;
}

export const ChangeCarma: React.FC<ChangeCarmaProps> = React.memo(
    function ChangeCarma({ carmaCount, className }) {
        return (
            <div className={clsx(styles.carmaUp, className)}>
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
