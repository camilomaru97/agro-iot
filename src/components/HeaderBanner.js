import React from 'react'

export const HeaderBanner = () => {
    return (
        <div className='banner__container'>
            <div className='banner__grid'>
                <div className='box_info'>
                    <div className='img_logo'>
                        <img
                            className='img_logo'
                            src={'../assets/logo.png'}
                            alt='logo'
                        />
                    </div>
                    <div className='text'>
                        <p>
                            Nace con la idea de materializar los espacios 
                            donde los sueños, las ideas, y la imaginación crean 
                            felicidad en quienes los habitan. Una sonrisa al final 
                            es la mejor recompensa del deber hecho.
                            
                        </p>
                        <hr />
                    </div>
                </div>
                <div className='texto_banner'>
                    <h1>SOMOS <br/> EL CAMBIO.</h1>
                </div>
            </div>
        </div>
    )
}
