const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem('token') || null,
            user: '',
            message: null,
            isAuthenticated: !!localStorage.getItem('token'),
            users: [],
            selectedUser: null,
            bookmarks: [],
            offers: [],
            selectedoffer: null,
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
                        console.log(data);
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

            getMessage: async () => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({ message: data.message });
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
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

            getAllUsers: async () => {
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/users`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${getStore().token}`
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
                        console.log(data)
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

            loadAllOffers: async () => {
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/offers`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    if (resp.ok) {
                        console.log('resp loadAllOffers: ', resp)
                        const data = await resp.json();
                        setStore({ offers: data.offers });
                    } else {
                        console.error("Error al cargar ofertas");
                    }
                } catch (error) {
                    console.error("Error en la solicitud de ofertas:", error);
                }
            },

            applyToJobOffer: async (offer_id) => {
                const store = getStore();
                const token = store.token;

                if (!token) {
                    return { msg: "Usuario no autenticado: registrate o inicia sesión", type: 'error' }
                }

                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/candidate`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({ offer_id })
                    });

                    if (resp.ok) {
                        const data = await resp.json();
                        console.log('inscripcion exitosa', data);
                        return { msg: "Inscripcion realizada con exito.", type: "success" };
                    } else {
                        const errorData = await resp.json();
                        console.log("Error al inscribirse: ", errorData.msg);
                        return { msg: errorData.msg, type: 'warning' };

                    }
                } catch (error) {
                    console.log("Error en la solitud de inscripcion.");
                    return { msg: "Error en la solicitud de inscripcion.", type: "error" }

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
                        console.log('Desinscripción exitosa', data);
                        return { msg: "Desinscripción realizada con éxito.", type: "success" };
                    } else {
                        const errorData = await resp.json();
                        console.log("Error al desinscribirse: ", errorData.msg);
                        return { msg: errorData.msg, type: 'warning' };
                    }
                } catch (error) {
                    console.log("Error en la solicitud de desinscripción.");
                    return { msg: "Error en la solicitud de desinscripción.", type: "error" };
                }
            },

            addBookmark: async (programador_id, empleador_id, oferta_id) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/favoritos`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            programador_id: programador_id,
                            empleador_id: empleador_id,
                            oferta_id: oferta_id,
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Error al agregar favorito');
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
                        console.error('Error al obtener los favoritos');
                    }
                } catch (error) {
                    console.error('Error en la solicitud de favoritos:', error);
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
                            developer_id: developer_id || null,
                            empleador_id: company_id || null,
                            offer_id: offer_id
                        })
                    });

                    if (!response.ok) {
                        throw new Error("Error al eliminar favorito.");
                    }

                    const data = await response.json();

                    if (data.success) {
                        setStore({
                            bookmarks: getStore().bookmarks.filter(
                                (fav) => fav.id !== offer_id || fav.developer_id !== developer_id || fav.company_id !== company_id
                            )
                        });
                        getActions().getBookmarks()
                        return true;
                    } else {
                        return { success: false, msg: data.msg || "Error desconocido." };
                    }
                } catch (error) {
                    console.error("Error en removeFavorite:", error);
                    return { success: false, msg: error.message };
                }
            },
        }
    };
};

export default getState;
