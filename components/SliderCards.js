import React, { useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import '../styles/SliderCards.css'

const SliderCards = () => {
    const [cards, setCards] = useState([
        {id: 1, name: 'App 1', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 2, name: 'App 2', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 3, name: 'App 3', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 4, name: 'App 4', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 5, name: 'App 5', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 6, name: 'App 6', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 7, name: 'App 7', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 8, name: 'App 8', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 9, name: 'App 9', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 10, name: 'App 10', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 11, name: 'App 11', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 12, name: 'App 12', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 13, name: 'App 13', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 14, name: 'App 14', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
        {id: 15, name: 'App 15', imgFront: '/images/metavalley.png', qrcode: '/images/fakeqrcode.jpg'},
    ])

    return (
        <>
            <main className='cards-container'>
                <h1 className='title'> <ChevronRightIcon/> Conheca nossos Apps </h1>

                <ul className="wrapper-cards">
                    {cards.map( card => (
                        <li className="flip-card" key={card.id}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={card.imgFront}/>
                                </div>
                                <div className="flip-card-back">
                                    <p> Acesse pelo QR Code </p>
                                    <img src={card.qrcode}/>
                            </div>
                            </div>
                        </li>
                    ))}
                </ul>
              
            </main>
        </>
    )
}

export default SliderCards