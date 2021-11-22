import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./IconsLine.module.scss";

interface IconsLineProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icons: {
        icon: JSX.Element;
        count?: number;
    }[];
}

export const IconsLine: React.FC<IconsLineProps> = React.memo(
    function IconsLine({ icons }) {
        return (
            <div className={styles.icons}>
                {icons.map((icon, i) => (
                    <div key={`${i}+${i + 1}`} className={styles.item}>
                        {icon.icon}
                        {icon.count !== undefined && <span>{icon.count}</span>}
                    </div>
                ))}
            </div>
        );
    }
);
