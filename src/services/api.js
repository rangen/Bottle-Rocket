// const API_ROOT = `http://localhost:3000`;
const API_ROOT = 'https://ancient-thicket-66765.herokuapp.com'

const getAdminData = () => {
    return fetch(`${API_ROOT}/admin/data`, {credentials: 'include'})
}

const newWine = (config) => {
    return fetch(`${API_ROOT}/wines/new`, config)
}

const deleteWine = (id, config) => {
    return fetch(`${API_ROOT}/wines/${id}`, config)
}

const autoLogin = () => {
    return fetch(`${API_ROOT}/autologin`, {credentials: 'include'})
}

const signUp = (config) => {
    return fetch(`${API_ROOT}/subscriptions/new`, config)
}

const logout = (config) => {
    return fetch(`${API_ROOT}/logout`, config)
}

const login = (config) => {
    return fetch(`${API_ROOT}/login`, config)
}

const newOffer = (config) => {
    return fetch(`${API_ROOT}/offers/new`, config)
}

const deleteOffer = (id, config) => {
    return fetch(`${API_ROOT}/offers/${id}`, config)
}

const getProfile = () => {
    return fetch(`${API_ROOT}/user/profile`, {credentials: 'include'})
}

const deleteProfile = (config) => {
    return fetch(`${API_ROOT}/user/profile`, config)
}
//same; consider refactor   /   alias 
const updateProfile = (config) => {
    return fetch(`${API_ROOT}/user/profile`, config)
}

const submitSetupIntent = (config) => {
    return fetch('api/setup_intents', config)
}
const getUserData = () => {
    return fetch(`${API_ROOT}/user/data`, {credentials: 'include'})
}



export default {
    API_ROOT:           API_ROOT,
    auth:   {
        login:          login,
        autoLogin:      autoLogin,
        logout:         logout
            },
    admin:  {
        getData:           getAdminData,
        newWine:        newWine,
        deleteWine:     deleteWine,
        newOffer:       newOffer,
        deleteOffer:    deleteOffer
            },
    app:    {
        signUp:         signUp,
        setupIntent:    submitSetupIntent
            },
    user:   {
        show:           getProfile,
        destroy:        deleteProfile,
        update:         updateProfile,
        getData:        getUserData
    }
};