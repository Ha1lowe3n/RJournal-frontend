import React from "react";
import type { NextPage } from "next";

import { MainLayout } from "../../layouts/MainLayout";
import { ProfileComponent } from "../../components/Profile";

const Profile: NextPage = React.memo(function Profile() {
    return (
        <MainLayout hideComments contentFullWidth>
            <ProfileComponent />
        </MainLayout>
    );
});

export default Profile;
