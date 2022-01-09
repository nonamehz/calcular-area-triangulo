import React, { useState } from 'react';

export const AreaForm = () => {

    const [formState, setFormState] = useState({
        altura: 0,
        base: 0,
        area: 0
    });

    const { altura, base, area } = formState;

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    const handleArea = (e) => {
        e.preventDefault();
        setFormState({
            ...formState,
            area: (parseInt(base) * parseInt(altura)) / 2
        })
    }

    return (
        <div className='form-container'>
            <form
                className='form'
            >

                <label htmlFor="base">Base: (m)</label>
                <input
                    id='base'
                    name='base'
                    type="number"
                    onChange={handleInputChange}
                    value={base}
                />

                <label className='mt' htmlFor="altura">Altura: (m)</label>
                <input
                    id='altura'
                    name='altura'
                    type="number"
                    onChange={handleInputChange}
                    value={altura}
                />

                <button
                    className='mt'
                    type='submit'
                    onClick={handleArea}
                >
                    Calcular Área
                </button>

                <label className='mt' htmlFor="altura">Área: (m<sup>2</sup>)</label>
                <input
                    id='area'
                    name='area'
                    type="number"
                    onChange={handleInputChange}
                    value={area}
                    disabled
                />
            </form>
        </div>
    )
}
