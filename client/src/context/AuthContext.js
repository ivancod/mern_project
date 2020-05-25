import { createContext } from "react";

function fn() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: fn,
    logout: fn,
    isAuth: false
})