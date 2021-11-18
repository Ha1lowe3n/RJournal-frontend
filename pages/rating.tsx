import React from "react";
import type { NextPage } from "next";

import { MainLayout } from "../layouts/MainLayout";
import { Rating } from "../components/Rating";

const Profile: NextPage = () => {
    return (
        <MainLayout contentFullWidth>
            <Rating />
        </MainLayout>
    );
};

export default Profile;
