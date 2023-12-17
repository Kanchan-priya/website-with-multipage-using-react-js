import React, { useState } from 'react'
import aboutapi from './API/AboutApi'

const AboutUs = () => {

    const [aboutData, SetAboutData]= useState(aboutapi)
    console.log(aboutData)

  return (
    <>
    <section className='common-section our-services'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                    <img src='https://picsum.photos/seed/picsum/200/300' alt='aboutus Img'/>
                </div>

                <div className='col-12 col-lg-7 our-services-list'>
                    <h3 className='mini-title'>--AVAILABLE @ GOOGLEAND IOS APP STORY ONLY</h3>
                    <h1 className='main-heading'>How to Use the App</h1>
                    

                    {aboutData.map((curEle)=>{

                        const {id, title, info}=curEle;

                        return<>
                        <div className='row our-service-info' key={id}>
                        
                        <div className='col-1 our-services-number'>{id}</div>
                        <div className='col-10 our-service-data'>
                            <h2>{title}</h2>
                            <p className='main-hero-para'>{info}</p>
                        </div>
                        </div>
                        </>
                    })

                    }


                        
                 
                    <br/>
                    <button className='btn btn-style btn-style-border'>Learn more</button>
                    
                </div>
            </div>
        </div>

    </section>

    <section className='common-section our-services our-services-right-side'>
        <div className='container'>
            <div className='row'>
                

                <div className='col-12 col-lg-7 our-services-list d-flex flex-column justify-content-center'>
                    <h3 className='mini-title'>--AVAILABLE @ GOOGLEAND IOS APP STORY ONLY</h3>
                    <h1 className='main-heading'>How to Use the App</h1>
                    

                    {aboutData.map((curEle)=>{

                        const {id, title, info}=curEle;

                        return<>
                        <div className='row our-service-info' key={id}>
                        
                        <div className='col-1 our-services-number'>{id}</div>
                        <div className='col-10 our-service-data'>
                            <h2>{title}</h2>
                            <p className='main-hero-para'>{info}</p>
                        </div>
                        </div>
                        </>
                    })

                    }


                        
                 
                    <br/>
                    <button className='btn btn-style btn-style-border'>Learn more</button>
                    
                </div>

                <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                    <img src='https://picsum.photos/seed/picsum/200/300' alt='aboutus Img'/>
                </div>
            </div>
        </div>

    </section>


    </>
  )
}

export default AboutUs