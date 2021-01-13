import React from 'react'

import Carousel from './Carousel/Carousel'
import Updates from './NewsAndUpdates/Updates'
import Stats from './Stats/Stats'

import './Home.css'

function Home() {
    return (
        <div className="container home">
            <div className="row" style={{ marginBottom: "40px" }}>
                <div className="mb-5 col-12 col-md-8">
                    <Carousel />
                </div>
                <div className="mb-5 col-12 col-md-4">
                    <Updates />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-3">
                    <Stats src="assets/startups.svg" caption1="100+" caption2="Startups" />
                </div>
                <div className="col-12 col-md-3">
                    <Stats src="assets/employement.svg" caption1="2000+" caption2="Employment" />
                </div>
                <div className="col-12 col-md-3">
                    <Stats src="assets/entrepreneurs.svg" caption1="500+" caption2="Entrepreneurs" />
                </div>
                <div className="col-12 col-md-3">
                    <Stats src="assets/funds.svg" caption1="INR 100 Cr." caption2="Funds Raised" />
                </div>
            </div>
        </div>
    )
}

export default Home
