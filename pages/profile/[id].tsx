import React from "react";
import type { NextPage } from "next";

import { MainLayout } from "../../layouts/MainLayout";
import { ProfileComponent } from "../../components/Profile";

const Profile: NextPage = () => {
    console.log("profile page render");

    return (
        <MainLayout hideComments contentFullWidth>
            <ProfileComponent />
        </MainLayout>
    );
};

export default Profile;
