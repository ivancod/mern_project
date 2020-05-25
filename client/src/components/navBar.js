import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import * as logo from '../../public/logo.svg'

export const NavBar = () => {
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
    }

    return (
        <nav>
            <div class="nav-wrapper grey darken-3">
                <div class="container ">
                    <a href="/" class="brand-logo"><img src="../public/logo.svg" /></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/list">Список</a></li>
                        <li><a href="/create">Создать</a></li>
                        <li><a href="/" onClick={ logoutHandler }>Выход</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}