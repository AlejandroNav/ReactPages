import React from 'react'

const Evolutions = ({ evolutions }) => {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-center'>
            {evolutions.map((evolution, index) => (
                <article key={index} className='flex items-center capitalize '>
                    <div className='flex flex-col items-center bg-slate-400 p-2 rounded-lg' >
                        {index !== 0 && (<span>Lv. {evolution.min_level}</span>)
                        }
                        <h3>{evolution.name}</h3>
                    </div>
                    <button className='hover:scale-125 transition-all'>
                        <img src={evolution.image} alt={evolution.name} className='w-32 sm:w-40' />

                    </button>
                </article>
            ))}

        </div>
    )
}

export default Evolutions