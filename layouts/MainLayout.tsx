import React from "react";
import clsx from "clsx";

import { LeftMenu } from "../components/LeftMenu";
import { SideComments } from "../components/SideComments";
import { items } from "../pages/news/[slug]";

interface MainLayoutProps {
    hideComments?: boolean;
    contentFullWidth?: boolean;
    className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = React.memo(
    function MainLayout({
        children,
        contentFullWidth,
        hideComments,
        className,
    }) {
        return (
            <div className={clsx("wrapper", className)}>
                <LeftMenu />

                <div
                    className={clsx("content", {
                        "content--full": contentFullWidth,
                    })}
                >
                    {children}
                </div>
                {!hideComments && <SideComments comments={items} />}
            </div>
        );
    }
);
