import type { NextPage } from "next";

import { Post } from "../components/Post";

import { Header } from "../components/Header";
import { MainLayout } from "../layouts/MainLayout";

const Home: NextPage = () => {
    return (
        <div>
            <Header />

            <MainLayout>
                <div className="posts">
                    {Array(3)
                        .fill(0)
                        .map((_, i) => (
                            <Post key={i} />
                        ))}
                </div>
            </MainLayout>
        </div>
    );
};

export default Home;
