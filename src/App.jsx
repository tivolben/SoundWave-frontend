import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Utilities from "./components/Utilities";
import Separator from "./components/Separator";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Form from "./components/Form";
import Footer from "./components/Footer";
import './index.css'
  
export default function App() {

    return(
            <div className="shadow-2xl shadow-black max-w-full">
            <Header/>
            <Hero/>
            <Utilities/>
            <Separator/>
            <About/>
            <Separator/>
            <Portfolio/>
            <Separator/>
            <Reviews/>
            <Separator/>
            <CTA/>
            <Separator/>
            <Form/>
            <Footer/>
            </div>
    ) 

 }
