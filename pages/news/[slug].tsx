import { NextPage } from "next";
import React from "react";
import { FullPost } from "../../components/FullPost";
import { MainLayout } from "../../layouts/MainLayout";

const News: NextPage = React.memo(function News() {
    return (
        <MainLayout contentFullWidth>
            <FullPost />
        </MainLayout>
    );
});

export default News;
