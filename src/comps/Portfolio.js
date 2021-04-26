import React from 'react'

export default function Portfolio() {

    const cards = [
        {
            project: 'Puzzle Slider',
            img: '',
            alt: 'sliding puzzle game',
            url: 'https://rw-puzzle-slider.web.app',
            desc: 'Sliding Puzzle build in React'
        },
        {
            project: 'To Do List',
            img: '',
            alt: 'to do list',
            url: 'https://to-do-list-ecbe1.web.app',
            desc: 'To do list built with react, deployed to firebase'
        },
        {
            project: 'Galactic Tic-Tac-Toe',
            img: '',
            alt: 'tic tac toe',
            url: 'https://thereeceshow.github.io/tic-tac-toe/',
            desc: 'An intergalactic take of the classic game'
        },
        {
            project: 'Weather App',
            img: '',
            alt: 'weather app',
            url: 'https://thereeceshow.github.io/weather/',
            desc: 'This app will give you the current weather condition for a Zip Code, or Current Location'
        },
        {
            project: 'Mind Reader',
            img: '',
            alt: 'mind reader',
            url: 'https://thereeceshow.github.io/mindreader/',
            desc: 'This app can predict the number you choose.  It can read your mind.'
        },
        {
            project: 'Bouncing Balls',
            img: '',
            alt: 'Bouncing Balls',
            url: 'https://thereeceshow.github.io/ball/',
            desc: 'This project renders bouncing balls on a canvas that interact with each other as they collide'
        },
        {
            project: 'Digital Clock',
            img: '',
            alt: 'digital clock',
            url: 'https://thereeceshow.github.io/clock/',
            desc: 'A digital clock created with HTML, CSS, and JavaScript'
        }
    ]

    return (
        <div className="Portfolio">
            <h1 className="text-center mt-3 p-4">
                Reece Walter - Portfolio
        </h1>
            <div className="row row-cols-1 row-cols-md-5 g-4 m-3 mt-5">
                {cards.map(el =>
                    <div className="col">
                        <div className="card h-100" style={{ width: 18 + 'rem' }}>
                            <img src={el.img} className="card-img-top" alt={el.alt} />
                            <div className="card-body">
                                <h5 className="card-title">{el.project}</h5>
                                <p className="card-text">{el.desc}</p>
                            </div>
                            <div className="card-footer d-grid">
                                    <a href={el.url} className="btn btn-primary">See the Project</a>
                                </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>

    )
}