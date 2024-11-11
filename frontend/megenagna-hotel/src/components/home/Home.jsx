import React from 'react'
import MainHeader from '../layout/MainHeader'
import HotelServices from '../common/HotelServices'
import Parallax from '../common/Parallax';
import RoomCarousel from '../common/RoomCarousel';

const Home = () => {
    return (
        <section>
            <h2>Welcome To the Home Page</h2>
            <MainHeader />
            <section className='container'>
                <RoomCarousel />
                <Parallax />
                <RoomCarousel />
                <HotelServices />
                <Parallax />
                <RoomCarousel />
            </section>
            
        </section>
    )
}

export default Home
