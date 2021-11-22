import clsx from "clsx";
import React, {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    ReactNode,
} from "react";

import styles from "./TJButton.module.scss";

interface TJButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode;
}

export const TJButton: React.FC<TJButtonProps> = React.memo(function TJButton({
    children,
    className,
    style,
    onClick,
    ...props
}) {
    console.log("button");

    return (
        <button
            style={style && style}
            className={clsx(styles.whiteBtn, className)}
            onClick={onClick && onClick}
            {...props}
        >
            {children}
        </button>
    );
});
