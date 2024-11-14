import React from "react";
import { useLoadUsers } from "../../hooks/useLoadUsers.jsx";
import { CardUserPremiumLogic } from "../timeline_users_components/CardUserPremiumLogic.jsx";
import { Spinner } from "../Spinner.jsx";

export const CardListUser = () => {
    const { users, loading } = useLoadUsers();

    if (loading) return <Spinner />;
    if (!users.length) return <p className="no-users-section text-center text-secondary shadow-lg">No hay usuarios disponibles</p>;

    return (
        <div className="container my-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
                {users.map((user) => (
                    <div className="d-flex" >
                        <div className="w-100" key={user.id}>
                            <CardUserPremiumLogic user={user} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
