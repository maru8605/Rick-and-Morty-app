import React from 'react'
import styles from './login.module.css'
import {connect} from 'react-redux'
import {doGoogleLoginAction, logOutAction} from '../../redux/userDuck'
import {retreiveFavs} from '../../redux/charsDuck'

function LoginPage({retreiveFavs, logOutAction, loggedIn, fetching, doGoogleLoginAction, }) {
    
    function doLogin(){
        doGoogleLoginAction()
    }

    function logOut(){
        logOutAction()
    }
    
    if (fetching) return <h2>Cargando...</h2>
    return (
        <div className={styles.container}>
            {loggedIn  ? <h1>
                Cierra tu sesión
            </h1> : <h1>
                Inicia tu sesión
            </h1> }

            {loggedIn ? <button onClick={logOut}>
                Cerrar sesión
            </button> : <button onClick={doLogin}>
                Inicia  Sesión
            </button>}
        </div>
    )
}

function mapState({user:{fetching,loggedIn}}){
    return{
        fetching,
        loggedIn
    }
}

export default connect(mapState, {retreiveFavs, doGoogleLoginAction, logOutAction})(LoginPage)