import React from "react";
import { useLoadUsers } from "../../hooks/useLoadUsers.jsx";
import { CardUserPremiumLogic } from "../timeline_users_components/CardUserPremiumLogic.jsx";

export const CardListUser = () => {
    const { users = [], loading } = useLoadUsers();

    return (
        <div className="container my-4">
            {loading ? (
                <p className="loading-section text-center">Cargando usuarios...</p>
            ) : Array.isArray(users) && users.length > 0 ? (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {users.map((user) => (
                        <div className="col d-flex" key={user.id}>
                            <div className="w-100">
                                <CardUserPremiumLogic user={user} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-users-section text-center text-secondary shadow-lg">
                    No hay usuarios disponibles
                </p>
            )}
        </div>
    );
};
