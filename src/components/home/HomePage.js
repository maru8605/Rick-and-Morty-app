import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import styles from './home.module.css'
import { connect} from 'react-redux'
import {removeCharacterAction,addToFavoritesAction} from '../../redux/charsDuck'

 function Home( {addToFavoritesAction, chars, removeCharacterAction}) {

    function renderCharacter() {
        let char = chars[0]
        return (
            <Card
             rightClick={addFav}
             leftClick={nextCharacter} 
             {...char}/>
        )
    }


    function nextCharacter(){
        removeCharacterAction()
    }

    function addFav (){
        addToFavoritesAction()
    }

    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    )
}

// mape state to prop
function mapState(state){
    return{
        chars:state.characters.array
    }
}


export default connect(mapState, {addToFavoritesAction, removeCharacterAction})(Home)

// con connect es como le sacamos los datos a redux