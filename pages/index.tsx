import type { NextPage } from "next";
import React from "react";

import { Post } from "../components/Post";

import { MainLayout } from "../layouts/MainLayout";

const Home: NextPage = React.memo(function Home() {
    return (
        <MainLayout>
            <div className="mt-15">
                {Array(3)
                    .fill(0)
                    .map((_, i) => (
                        <Post key={i} />
                    ))}
            </div>
        </MainLayout>
    );
});

export default Home;
