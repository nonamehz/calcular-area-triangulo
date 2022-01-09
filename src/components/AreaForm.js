import React, { useState } from 'react';

export const AreaForm = () => {

    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    const handleBaseChange = (e) => {
        setBase(e.target.value);
    }

    const handleAlturaChange = (e) => {
        setAltura(e.target.value);
    }

    const handleArea = (e) => {
        e.preventDefault();
        setResultado((base * altura) / 2);
    }

    return (
        <div className='form-container'>
            <form
                className='form'
            >

                <label htmlFor="base">Base: (m)</label>
                <input
                    id='base'
                    type="number"
                    onChange={handleBaseChange}
                    value={base}
                />

                <label className='mt' htmlFor="altura">Altura: (m)</label>
                <input
                    id='altura'
                    type="number"
                    onChange={handleAlturaChange}
                    value={altura}
                />

                <button
                    className='mt'
                    type='submit'
                    onClick={handleArea}
                >
                    Calcular Área
                </button>

            </form>

            <div className="resultado text-center">
                <p>{resultado} mt<sup>2</sup></p>
            </div>
        </div>
    )
}
