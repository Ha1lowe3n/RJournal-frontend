import clsx from "clsx";
import Link from "next/link";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./Tabs.module.scss";

interface TabsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    categories: string[];
    active: number;
    setActive: (active: number) => void;
}

export const Tabs: React.FC<TabsProps> = React.memo(function Tabs({
    categories,
    className,
    style,
    active,
    setActive,
    ...props
}) {
    return (
        <div
            className={clsx(styles.categories, className)}
            style={style}
            {...props}
        >
            {categories.map((category, i) => {
                return active === i ? (
                    <div
                        key={category + i}
                        className={clsx(styles.category, styles.active)}
                    >
                        {category}
                    </div>
                ) : (
                    <Link key={category + i} href="#">
                        <a onClick={() => setActive(i)}>
                            <div className={styles.category}>{category}</div>
                        </a>
                    </Link>
                );
            })}
        </div>
    );
});
