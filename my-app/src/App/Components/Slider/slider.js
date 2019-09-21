// Check out my free youtube video on how to build a thumbnail gallery in react
// https://www.youtube.com/watch?v=GZ4d3HEn9zg
import React from 'react';
import "./slider.scss"
import image1 from "../../Components/Images Wkra/autumn-972786_1920.jpg";
// Obraz <a href="https://pixabay.com/pl/users/LubosHouska-198496/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=972786"> Lubos Houska</a> z <a href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=972786"> Pixabay</a>

import image2 from "../../Components/Images Wkra/web-2591485_1920.jpg";
// Obraz <a href="https://pixabay.com/pl/users/TeeFarm-199315/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2591485"> TeeFarm</a> z <a href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2591485"> Pixabay</a>

import image3 from "../../Components/Images Wkra/water-1246643_1920.jpg";
// Obraz <a href="https://pixabay.com/pl/users/Free-Photos-242387/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1246643"> Free-Photos</a> z <a href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1246643"> Pixabay</a>
import image4 from "../../Components/Images Wkra/autumn-219972_1280.jpg";
// Obraz <a href="https://pixabay.com/pl/users/Larisa-K-1107275/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=219972"> Larisa Koshkina</a> z <a href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=219972"> Pixabay</a>
import image5 from "../../Components/Images Wkra/wkra-1685383_1920.jpg";
// Obraz <a href="https://pixabay.com/pl/users/Demko-1495707/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1685383"> Demko</a> z <a href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1685383"> Pixabay</a>
import image6 from "../../Components/Images Wkra/river-2808802_1280.jpg";
// Obraz <a href="https://pixabay.com/pl/users/marcinw-5057605/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2808802"> Marcin Wąż</a> z <a href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2808802"> Pixabay</a>
import image7 from "../../Components/Images Wkra/clouds-daylight-environment-786134.jpg";

import image8 from "../../Components/Images Wkra/lake-72843_1280.jpg"
// Obraz <a href="https://pixabay.com/pl/users/Larisa-K-1107275/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=72843"> Larisa Koshkina</a> z <a href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=72843"> Pixabay</a>

class Slider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                image1, image2, image3, image4, image5, image6, image7, image8
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (<div className={"sliderContainer" + " container"}>
            <h2 className={"sliderTitle"}>Wkra w obiektywie aparatu</h2>
            <div className={"slider"}>
                <div className="slider-wrapper"
                     style={{
                         transform: `translateX(${this.state.translateValue}px)`,
                         transition: 'transform ease-out 0.45s'
                     }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image}/>
                        ))
                    }
                </div>

                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />

                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
            </div>
        );
    }
}


const Slide = ({image}) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}


const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}

export default Slider;