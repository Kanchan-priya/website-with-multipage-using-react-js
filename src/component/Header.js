import React from 'react'

// https://www.youtube.com/watch?v=9mEdvuJWjkw


const Header = () => {
  return (
    <> 
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start'>
                    <h1 className='display-2'>
                        Online payment Made <br/>Easy for you.
                    </h1>
                    <p className='main-hero-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h3>Get Early access for you</h3>
                    <div className='input-group mt-3'>
                        <input type='text' className='rounded-pill w-50 me-3 p-2 form-control-text' placeholder='Enter your Email'/>
                        <div className='input-group-button'>Get it now</div>
                    </div>
                </div>


                <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center  align-item-center'>
                    <img src='https://images.unsplash.com/photo-1707926578532-1475f78b4b14?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='img-fluid'/>
                    <img src='https://plus.unsplash.com/premium_photo-1664094921465-40ae9484ab97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='img-fluid'/>

                </div>

            </div>

        </section>
    </header>
    
    </>
  )
}

export default Header