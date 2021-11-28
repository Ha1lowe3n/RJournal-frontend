import { NextPage } from "next";
import React, { useMemo } from "react";

import { Comments } from "../../components/Comments";
import { FullPost } from "../../components/FullPost";
import { MainLayout } from "../../layouts/MainLayout";

export interface CommentFullInfo {
    text: string;
    id: number;
    createdAt: string;
    user: {
        fullname: string;
        avatarUrl: string;
    };
    post: {
        title: string;
    };
    carmaCount: number;
}

export const items: CommentFullInfo[] = [
    {
        text: "hello",
        createdAt: "1212",
        id: 1,
        user: {
            fullname: "vasya pujpkin",
            avatarUrl:
                "https://leonardo.osnova.io/ffe28fb2-3cc1-584b-9efb-e50974e91ad8/-/scale_crop/64x64/-/format/webp/",
        },
        post: {
            title: "Мигранты",
        },
        carmaCount: 5,
    },
    {
        text: "dratute",
        createdAt: "1213",
        id: 2,
        user: {
            fullname: "vasya pujpkin",
            avatarUrl:
                "https://leonardo.osnova.io/ffe28fb2-3cc1-584b-9efb-e50974e91ad8/-/scale_crop/64x64/-/format/webp/",
        },
        post: {
            title: "Мигранты",
        },
        carmaCount: 10,
    },
    {
        text: "aga",
        createdAt: "1214",
        id: 3,
        user: {
            fullname: "vasya pujpkin",
            avatarUrl:
                "https://leonardo.osnova.io/ffe28fb2-3cc1-584b-9efb-e50974e91ad8/-/scale_crop/64x64/-/format/webp/",
        },
        post: {
            title: "Мигранты",
        },
        carmaCount: 15,
    },
];

const News: NextPage = React.memo(function News() {
    return (
        <MainLayout contentFullWidth>
            <FullPost />
            <Comments />
        </MainLayout>
    );
});

export default News;
