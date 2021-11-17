import React from "react";
import type { NextPage } from "next";

import { MainLayout } from "../../layouts/MainLayout";
import { Settings } from "../../components/Profile/Settings";

const ProfileSettings: NextPage = () => {
    console.log("profile page render");

    return (
        <MainLayout hideComments contentFullWidth>
            <Settings />
        </MainLayout>
    );
};

export default ProfileSettings;
