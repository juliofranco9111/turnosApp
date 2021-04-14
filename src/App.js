import React from 'react'

const App = () => {

    const handleDark = () => {
        const html = document.querySelector('#jodido');
        
        html.classList.add('dark')
    }
    return (
        <div>
            <h1>Hola</h1>
            <h2>Hola</h2>

            <button
            onClick={ handleDark }
            className="w-1/2 flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black" type="submit">Buy now</button>
        </div>
    )
}

export default App
