import React from "react";
import { useLoadUsers } from "../../hooks/useLoadUsers.jsx";
import { CardUserPremiumLogic } from "../timeline_users_components/CardUserPremiumLogic.jsx";

export const CardListUser = () => {
    const { users = [], loading } = useLoadUsers();

    return (
        <div className="container my-4">
            {loading ? (
                <div className="svg-box">
                    <svg className="svg-load-icon" fill="hsl(228, 97%, 42%)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="12" r="3" opacity="1">
                            <animate id="spinner_qYjJ" begin="0;spinner_t4KZ.end-0.25s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
                        </circle>
                        <circle cx="12" cy="12" r="3" opacity=".4">
                            <animate begin="spinner_qYjJ.begin+0.15s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
                        </circle><circle cx="20" cy="12" r="3" opacity=".3">
                            <animate id="spinner_t4KZ" begin="spinner_qYjJ.begin+0.3s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
                        </circle>
                    </svg>
                </div>
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
