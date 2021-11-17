import clsx from "clsx";
import React from "react";

import styles from "./TJButton.module.scss";

interface TJButtonProps {
    className?: string;
}

export const TJButton: React.FC<TJButtonProps> = React.memo(function TJButton({
    children,
    className,
}) {
    return (
        <button className={clsx(styles.whiteBtn, className)}>{children}</button>
    );
});
