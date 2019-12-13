import React, { useState } from 'react'
import '../styles/Home.css'
import { randomInt } from "../helpers";

const Home = () => {
    const slides = [
        {
            url: 'https://static.twentytwowords.com/cdn-cgi/image/width=685,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/1153584493229054.Mhu4fwpzF4ypK8aok4yp_height640.png',
            title: 'Jennifer Aniston Breaks Down Watching Video of a Daughter Pleading to Help Her Unemployed Father'
        },
        {
            url: 'https://static.twentytwowords.com/cdn-cgi/image/width=1200,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/picklerickkkk-1200x630.jpg',
            title: 'Rick and Morty Team up with Pringles for Pickle Rick Flavor'
        },
        {
            url: 'https://static.twentytwowords.com/cdn-cgi/image/width=1200,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/disneyhotell-1200x630.jpg',
            title: 'A ‘Star Wars’ Hotel Shaped Like a Giant Ship Is Coming to Disney World in 2021'
        },
        {
            url: 'https://static.twentytwowords.com/cdn-cgi/image/width=1200,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/aaroncarterracist-1200x630.jpg',
            title: 'Aaron Carter Criticized for ‘Severely Racist’ Post'
        },
        {
            url: 'https://static.twentytwowords.com/cdn-cgi/image/width=1200,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/dfskdjffds-1200x630.jpg',
            title: 'Vegan Says She Constantly Gets Mistaken for Woman in Her 20s Due to Plant-Based Diet'
        },
    ]
    const [unviewedSlides, setUnviewedSlides] = useState([0, 1, 2, 3, 4])
    const [currentSlide, setCurrentSlide] = useState(randomInt(5))

    const nextSlide = () => {
        // Filter the current slide out
        const newArr = unviewedSlides.filter(e => e !== currentSlide)
        if (newArr.length > 0) {
            setUnviewedSlides(newArr)
            // Choose a random new slide of those remaining
            setCurrentSlide(newArr[randomInt(newArr.length)])
        } else {
            // All slides viewed so reset them
            setUnviewedSlides([0, 1, 2, 3, 4]);
            // Choose a random new slide
            setCurrentSlide(randomInt(5))
        }
    }
    return (
        <div>
            <div className="container">
                <div className='hero-img' style={{ backgroundImage: 'url(' + slides[currentSlide].url + ')' }}>
                    <div className='overlay'></div>
                    <div className='title-container'>
                        <h1>
                            {slides[currentSlide].title}
                        </h1>
                    </div>

                </div>
                <button className='btn' onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
}

export default Home;