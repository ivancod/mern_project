import React, { useState } from 'react';
// import {}
export const Auth = () => {
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  })

  const changeForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const authHandler = () => {

  }

  const registrHandler = () => {
    
  }

  return (
    <div className="row jc-c flex">
      <div className="col auth-card ">
        <form method="POST" action="/" >
          <h5 className="title"> Сервис коротких ссылок </h5>
          <div className="input-field s12">
            <input 
            id="email" 
            name="email" 
            type="text" 
            className="validate" 
            onChange={ changeForm } 
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field  s12">
            <input 
            id="password" 
            name="password" 
            type="password" 
            className="validate"
            onChange={ changeForm } 
            />
            <label htmlFor="password">Пароль</label>
          </div>
          <div className="flex jc-c">
            <button 
            className="btn log-in" 
            onClick={ authHandler }
            >
              Вход
            </button>
            <button 
            className="btn" 
            onClick={ registrHandler }
            >
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

