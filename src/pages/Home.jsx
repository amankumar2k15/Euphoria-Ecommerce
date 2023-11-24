import React from 'react'
import Slider from "../components/homeComponent/Slider"
import Everyday from "../components/homeComponent/Everyday"
import NewArrival from "../components/homeComponent/NewArrival"
import MenCategory from "../components/homeComponent/MenCategory"
import WomenCategory from "../components/homeComponent/WomenCategory"
import Limelight from "../components/homeComponent/Limelight"
import FeedbackSlider from '../components/homeComponent/FeedbackSlider'

const Home = () => {
    return (
        <>
            <Slider />
            <Everyday />
            <NewArrival />
            <MenCategory />
            <WomenCategory />
            <Limelight />
            <FeedbackSlider />
        </>
    )
}

export default Home