import React, { useState } from 'react'

export const FooterBanner = () => {

    const humedad = '100';
    const ph = '6';
    const temperatura = '25';
    const luminosidad = '600'

    const [buttonState1, setButtonState1] = useState(false)
    const [dataHumedad, setdataHumedad] = useState('')
    const [buttonState2, setButtonState2] = useState(false)
    const [dataPh, setdataPh] = useState('')
    const [buttonState3, setButtonState3] = useState(false)
    const [dataTemperatura, setdataTemperatura] = useState('')
    const [buttonState4, setButtonState4] = useState(false)
    const [dataLuminosidad, setdataLuminosidad] = useState('')

    const handleClick1 = (e) => {
        e.preventDefault();
        if (buttonState1 === false) {
            //Cambios otros botones
            setButtonState2(false)
            setdataPh('')
            setButtonState3(false)
            setdataTemperatura('')
            setButtonState4(false)
            setdataLuminosidad('')
            //
            setButtonState1(true)
            setdataHumedad(humedad)
            console.log(buttonState1, humedad)
        } else if (buttonState1 === true) {
            setButtonState1(false)
            setdataHumedad('')
            console.log(buttonState1)
        }
    }

    const handleClick2 = (e) => {
        e.preventDefault();
        if (buttonState2 === false) {
            //Cambios otros botones
            setButtonState1(false)
            setdataHumedad('')
            setButtonState3(false)
            setdataTemperatura('')
            setButtonState4(false)
            setdataLuminosidad('')
            //
            setButtonState2(true)
            setdataPh(ph)
            console.log(buttonState2)
        } else if (buttonState2 === true) {
            setButtonState2(false)
            setdataPh('')
            console.log(buttonState2)
        }
    }

    const handleClick3 = (e) => {
        e.preventDefault();
        if (buttonState3 === false) {
            //Cambios otros botones
            setButtonState1(false)
            setdataHumedad('')
            setButtonState2(false)
            setdataPh('')
            setButtonState4(false)
            setdataLuminosidad('')
            //
            setButtonState3(true)
            setdataTemperatura(temperatura)
            console.log(buttonState3)
        } else if (buttonState3 === true) {
            setButtonState3(false)
            setdataTemperatura('')
            console.log(buttonState3)
        }
    }

    const handleClick4 = (e) => {
        e.preventDefault();
        if (buttonState4 === false) {
            //Cambios otros botones
            setButtonState1(false)
            setdataHumedad('')
            setButtonState2(false)
            setdataPh('')
            setButtonState3(false)
            setdataTemperatura('')
            //
            setButtonState4(true)
            setdataLuminosidad(luminosidad)
            console.log(buttonState4)
        } else if (buttonState4 === true) {
            setButtonState4(false)
            setdataLuminosidad('')
            console.log(buttonState4)
        }
    }

    return (
        <div className='footer__container'>
            <div className='footer__grid'>
                <div className='img-logo2'>
                    <img
                        src={'../assets/logo2.png'}
                        alt='logo'
                    />
                </div>
                <div className='btns btns1'>
                    <button
                        className={` ${buttonState1 ? '' : 'shallow'}`}
                        onClick={handleClick1}
                    >
                        Humedad
                    </button>
                    <button
                        className={` ${buttonState2 ? '' : 'shallow'}`}
                        onClick={handleClick2}
                    >
                        Ph
                    </button>
                </div>
                <div className='btns btns1'>
                    <button
                        className={` ${buttonState3 ? '' : 'shallow'}`}
                        onClick={handleClick3}
                    >
                        Temperatura
                    </button>
                    <button
                        className={` ${buttonState4 ? '' : 'shallow'}`}
                        onClick={handleClick4}
                    >
                        Luminosidad
                    </button>
                </div>
            </div>


            <div className='box-text'>
                <h3>{dataHumedad}</h3>
            </div>
            <div className='box-text'>
                <h3>{dataPh}</h3>
            </div>
            <div className='box-text'>
                <h3>{dataTemperatura}</h3>
            </div>
            <div className='box-text'>
                <h3>{dataLuminosidad}</h3>
            </div>


        </div>
    )
}