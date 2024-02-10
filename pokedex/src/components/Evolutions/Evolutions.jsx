import React from 'react'

const Evolutions = ({ evolutions }) => {
    console.log(evolutions);
    return (
        <div>
            {evolutions.map((evolution, index) => (
                <article key={index}>
                    {evolution.name}
                </article>
            ))}

        </div>
    )
}

export default Evolutions