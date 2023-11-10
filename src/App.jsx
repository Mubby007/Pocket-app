import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Feature from './Feature'
import Portfolio from './Portfolio'
import FAQS from './FAQS'
import Pricing from './Pricing'
import Question from './Questions'
import Footer from './Footer'


function App() {




    return (
        <div>
            <Header/>
            <Hero/>
            <Feature/>
            <Portfolio/>
            <FAQS/>
            <Pricing/>
            <Question/>
            <Footer/>


        </div>
       

    )
 
 


}

export default App
