import React from "react";
import { useLoadUsers } from "../../hooks/useLoadUsers.jsx";
import { CardUserPremiumLogic } from "../timeline_users_components/CardUserPremiumLogic.jsx";


export const CardListUser = () => {
    const { users = [], loading } = useLoadUsers();

    return (
        <div className="list-user-container mt-3 m-auto">
            {loading ? (
                <p className="loading-section text-center">Cargando ofertas...</p>
            ) : Array.isArray(users) && users.length > 0 ? (
                users.map((user) => (
                    <div key={user.id}>
                        <CardUserPremiumLogic user={user} />
                    </div>
                ))
            ) : (
                <p className="no-users-section text-center text-secondary shadow-lg">
                    No hay usuarios disponibles
                </p>
            )}
        </div>
    );
};
