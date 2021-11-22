import React from "react";
import type { NextPage } from "next";

import { MainLayout } from "../../layouts/MainLayout";
import { Settings } from "../../components/Profile/Settings";

const ProfileSettings: NextPage = React.memo(function ProfileSettings() {
    return (
        <MainLayout hideComments contentFullWidth>
            <Settings />
        </MainLayout>
    );
});

export default ProfileSettings;
