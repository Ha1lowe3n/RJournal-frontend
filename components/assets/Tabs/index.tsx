import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

import styles from "./Tabs.module.scss";

interface TabsProps {
    categories: string[];
}

export const Tabs: React.FC<TabsProps> = ({ categories }) => {
    const [active, setActive] = useState<number>(0);

    return (
        <div className={styles.categories}>
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
};
