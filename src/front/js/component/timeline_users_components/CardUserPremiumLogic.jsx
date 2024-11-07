import React from "react";
import { CardUserPremium } from "../timeline_users_components/CardUserPremium.jsx"
import { CardUser } from "../timeline_users_components/CardUser.jsx"

export const CardUserPremiumLogic = ({ user }) => {
    return user.premium ? (
        <CardUserPremium name={user.name} id={user.id} />
    ) : (
        <CardUser user={user.name} id={user.id} />
    );
};