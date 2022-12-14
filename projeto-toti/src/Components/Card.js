import React from 'react';
import './Card.css';

function Card({title,imageUrl,body}) {
    return (

        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>

            <div className='card-content'>
                <div ClassName='card-title'>
                    <h3>{ title }</h3>
                </div>

                <div ClassName='card-body'>
                    <p>{ body }</p>
                </div>
            </div>

            <div className='btn'>
                <button>
                    <a>
                        Leia mais...
                    </a>
                </button>
            </div>

        </div>
        

    )
}

export default Card