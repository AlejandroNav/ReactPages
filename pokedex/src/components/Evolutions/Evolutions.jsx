import React from 'react'

const Evolutions = ({ evolutions }) => {
    console.log(evolutions);
    return (
        <div className='flex gap-4 items-center justify-center'>
            {evolutions.map((evolution, index) => (
                <article key={index} className='flex items-center capitalize '>
                    <div >
                        {index !== 0 && (<span>Lv. {evolution.min_level}</span>)
                        }
                        <h3>{evolution.name}</h3>
                    </div>
                    <img src={evolution.image} alt={evolution.name} />

                </article>
            ))}

        </div>
    )
}

export default Evolutions