import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http'
import { useMessage } from '../hooks/message'
import { AuthContext } from '../context/AuthContext'


export const Auth = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, error,  request, clearError } = useHttp()
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  })

  const changeForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  
  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch(e) {}
  }
  
  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch(e) {}
  }
  
  useEffect(() => {
    message(error)
    clearError()
  }, [ message, error, clearError ])

  return (
    <div className="wrap auth-wrap">
      <div className="container">
      <div className="row jc-c flex">
        <div className="col auth-card ">
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
            <button className="btn log-in" onClick={ loginHandler } disabled={loading}>
              Вход
            </button>
            <button className="btn" onClick={ registerHandler } disabled={loading}>
              Регистрация
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

