import React from "react";
import { useLoadUsers } from "../../hooks/useLoadUsers.jsx";
import { CardUser } from "../timeline_users_components/CardUser.jsx";
import { Spinner } from "../Spinner.jsx";

export const CardListUser = () => {
    const { users, loading } = useLoadUsers();

    if (loading) return <Spinner />;
    if (!users.length) return <p className="no-users-section text-center text-secondary shadow-lg">No hay usuarios disponibles</p>;

    return (

        <div className="row g-2 mt-5">
            {users.map((user) => (
                <div className="d-flex col-md-3" key={user.id} >
                    <CardUser user={user} />
                </div>
            ))}
        </div>

    );
};
