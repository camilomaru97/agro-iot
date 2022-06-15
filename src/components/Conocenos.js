import React, { useState } from 'react'
import { ObjetivosRender, } from './ObjetivosRender'
import { Vision } from './Vision'



export const Conocenos = () => {

    const [buttonState, setButtonState] = useState(true)

    const handleClick1 = (e) => {
        e.preventDefault();

        if (buttonState === false) {
            setButtonState(true)
        } 

        console.log(buttonState)
    }

    const handleClick2 = (e) => {
        e.preventDefault();

        if (buttonState === true) {
            setButtonState(false)
        }

        console.log(buttonState)
    }

    return (
        <div className='conocenos__container'>
            <div className='conocenos'>
                <h1>CONOCENOS</h1>
                <div className='btns'>
                    <button
                        className= {` btn1 ${ buttonState ? '' : 'shallow' }`}
                        onClick={handleClick1}
                    >
                        Objetivos
                    </button>
                    <button
                        className= {` btn2 ${ buttonState ? 'shallow' : '' }`}
                        onClick={handleClick2}
                    >
                        Vision
                    </button>
                </div>
                {
                    buttonState ?  <ObjetivosRender />  :   <Vision /> 
                }

                <div className='img'>
                    <img
                        src={'../assets/conocenos.png'}
                        alt='conocenos'
                    />
                </div>
            </div>

            <img
                className='img1'
                src={'../assets/img1.png'}
                alt='img'
            />
            <img
                className='img2'
                src={'../assets/img2.png'}
                alt='img'
            />
        </div>



    )
}
