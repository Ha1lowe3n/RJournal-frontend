import type { NextPage } from "next";

import { Post } from "../components/Post";

import { MainLayout } from "../layouts/MainLayout";

const Home: NextPage = () => {
    return (
        <div>
            <MainLayout>
                <div className="mt-15">
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
