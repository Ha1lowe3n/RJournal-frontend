import clsx from "clsx";
import React from "react";

import styles from "./TJButton.module.scss";

interface TJButtonProps {
    className?: string;
    style?: {
        [key: string]: string;
    };
    onClick?: () => void;
}

export const TJButton: React.FC<TJButtonProps> = React.memo(function TJButton({
    children,
    className,
    style,
    onClick,
}) {
    return (
        <button
            style={style && style}
            className={clsx(styles.whiteBtn, className)}
            onClick={onClick && onClick}
        >
            {children}
        </button>
    );
});
