const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem('token') || null,
            user: '',
            selectedUser: '',
            message: null,
            isAuthenticated: !!localStorage.getItem('token'),
            bookmarks: [],
            offers: [],
            candidates: [],
            users: [],
        },
        actions: {
            signup: async (formData) => {
                try {
                    console.log('Datos enviados:', formData);
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/signup`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData),
                    });

                    if (!resp.ok) {
                        const errorData = await resp.json();
                        setStore({ error: errorData.message || 'Error desconocido' });
                        console.log('Error en el registro:', errorData);
                        return { success: false, error: errorData.message || 'Error desconocido' };
                    }

                    const data = await resp.json();
                    setStore({
                        token: data.token,
                        user: data.user,
                        users: data.user,
                        isAuthenticated: true
                    });
                    localStorage.setItem('token', data.token);
                    return data;

                } catch (error) {
                    console.log('Error:', error);
                    return { success: false, error: 'Error al conectar con el backend.' };
                }
            },

            resetStore: () => {
                setStore({ msg: "", success: "" });
            },

            logOut: () => {
                localStorage.removeItem("token");
                setStore({ token: null, user: null, isAuthenticated: false, users: [], selectedUser: null });
                return { success: true };
            },

            login: async (credentials) => {
                console.log(credentials)
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    });

                    if (resp.ok) {
                        const data = await resp.json();
                        localStorage.setItem('token', data.token);
                        setStore({ token: data.token, user: data.user });
                        return data;
                    }
                } catch (error) {
                    console.error("Error al conectarse con el backend:", error);
                }
            },

            checkToken: async (token) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/token`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setStore({ user: data, isAuthenticated: true });
                        return { success: true };
                    } else {
                        setStore({ isAuthenticated: false });
                        return { success: false, error: error.msg };
                    }
                } catch (error) {
                    console.error("Error en la validación del token:", error);
                    setStore({ isAuthenticated: false });
                    return { success: false, error: error.msg };
                }
            },

            getUser: async (userId) => {
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/users/${userId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${getStore().token}`
                        }
                    });

                    if (resp.ok) {
                        const data = await resp.json();
                        setStore({ selectedUser: data.user });
                        return data;
                    } else {
                        console.error('Error al obtener el usuario:', resp.statusText);
                        return false;
                    }
                } catch (error) {
                    console.error("Error al conectarse con el backend:", error);
                }
            },

            updateProfile: async (updatedData) => {
                try {
                    const token = localStorage.getItem('token');
                    const response = await fetch(`${process.env.BACKEND_URL}/api/profile`, {
                        methods: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,

                        },
                        body: JSON.stringify(updatedData)
                    });

                    if (response.ok) {
                        const updateUSer = await response.json();
                        setStore({ user: updateUSer })
                        alert('Perfil actualizado correctamente')
                    } else {
                        console.error("Error al actualizar perfil");
                    }
                } catch (error) {
                    console.error(error)
                }

            },

            getAllUsers: async () => {
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/users`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    if (resp.ok) {
                        const data = await resp.json();
                        setStore({ users: data.user });
                        return data;
                    } else {
                        console.error('Error al obtener todos los usuarios:', resp.statusText);
                        return false;
                    }
                } catch (error) {
                    console.error("Error al conectarse con el backend:", error);
                }
            },

            createJobOffer: async (formData) => {
                console.log(formData);
                try {
                    const token = localStorage.getItem('token');
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/createOffer`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": 'application/json',
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify(formData)
                    });

                    if (resp.ok) {
                        const data = await resp.json();
                        const store = getStore();
                        setStore({ offers: [...store.offers, data.offer] });
                        return data;
                    } else {
                        const errorData = await resp.json();
                        console.error("Error al crear la oferta:", errorData.msg);
                        return errorData;
                    }
                } catch (error) {
                    console.error("Error al conectarse con el backend:", error);
                }
            },

            getAllOffers: async () => {
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/offers`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    if (resp.ok) {
                        const data = await resp.json();
                        setStore({ offers: data.offers });
                    } else {
                        console.error("Error al cargar ofertas");
                    }
                } catch (error) {
                    console.error("Error en la solicitud de ofertas:", error);
                }
            },

            getOfferById: async (offer_id) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/offers/${offer_id}`);
                    if (response.ok) {
                        const data = await response.json();
                        return data;
                    } else {
                        console.error("Error", response.statusText);
                        return null;
                    }
                } catch (error) {
                    console.error("Error:", error);
                    return null;
                }
            },

            applyToJobOffer: async (offer_id) => {
                const store = getStore();
                const token = store.token;

                if (!token) {
                    return { msg: "Usuario no autenticado: regístrate o inicia sesión", type: 'error' };
                }

                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/candidates`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({ offer_id })
                    });

                    if (resp.ok) {
                        const data = await resp.json();

                        setStore({
                            user: {
                                ...store.user,
                                candidates: [...store.user.candidates, { id: offer_id }]
                            }
                        });

                        console.log('Inscripción exitosa', data);
                        return { msg: "Inscripción realizada con éxito.", type: "success" };
                    } else {
                        const errorData = await resp.json();
                        return { msg: errorData.msg, type: "error" };
                    }
                } catch (error) {
                    return { msg: "Error en la solicitud de inscripción.", type: 'error' };
                }
            },

            unapplyFromJobOffer: async (offer_id) => {
                const store = getStore();
                const token = store.token;

                if (!token) {
                    return { msg: "Usuario no autenticado: regístrate o inicia sesión", type: 'error' };
                }

                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/candidates/${offer_id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (resp.ok) {
                        const data = await resp.json();

                        setStore({
                            user: {
                                ...store.user,
                                candidates: store.user.candidates.filter(candidate => candidate.id !== offer_id)
                            }
                        });

                        console.log('Desinscripción exitosa', data);
                        return { msg: "Desinscripción realizada con éxito.", type: "success" };
                    } else {
                        const errorData = await resp.json();
                        return { msg: errorData.msg, type: 'warning' };
                    }
                } catch (error) {
                    return { msg: "Error en la solicitud de desinscripción.", type: 'error' };
                }
            },


            addBookmark: async (developer_id, company_id, offer_id) => {
                const store = getStore();
                const token = store.token;

                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/bookmarks`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,

                        },
                        body: JSON.stringify({
                            developer_id: developer_id,
                            company_id: company_id,
                            offer_id: offer_id,
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Error al agregar Bookmark');
                    }

                    getActions().getBookmark()
                    return true;

                } catch (error) {
                    console.error('Error:', error);
                    throw error;
                }
            },

            getBookmark: async (id = getStore().user.id) => {
                if (!id) {
                    console.error('No se pudo obtener el ID del usuario');
                    return;
                }
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/user/${id}/bookmarks`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (response.ok) {
                        const { bookmarks } = await response.json();
                        setStore({ bookmarks: bookmarks });
                    } else {
                        console.error('Error al obtener los bookmarks');
                    }
                } catch (error) {
                    console.error('Error en la solicitud de bookmars:', error);
                }
            },

            removeBookmark: async (developer_id, company_id, offer_id) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/bookmarks`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        },
                        body: JSON.stringify({
                            developer_id: developer_id,
                            company_id: company_id,
                            offer_id: offer_id,
                        }),
                    });

                    if (!response.ok) {
                        throw new Error("Error al eliminar bookmark.");
                    }

                    const data = await response.json();

                    if (data.success) {

                        setStore({
                            bookmarks: getStore().bookmarks.filter(
                                (book) => book.id !== offer_id || book.developer_id !== developer_id || book.company_id !== company_id
                            )
                        });
                        getActions().getBookmark()
                        return true;
                    } else {
                        return { success: false, msg: data.msg || "Error desconocido." };
                    }
                } catch (error) {
                    console.error("Error en removeBookmark:", error);
                    return { success: false, msg: error.message };
                }
            },

        }
    };
};

export default getState;
