const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem('token') || null, 
            user: '',
            message: null,
            isAuthenticated: !!localStorage.getItem('token'),
            users: [], 
            selectedUser: null 
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
        }
    };
};

export default getState;
