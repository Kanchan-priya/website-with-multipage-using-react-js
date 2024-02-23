import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='contactus-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='contact-left-side col-12 col-lg-5'>
                                    <h1 className='main-heading fw-bold'>Contact with our <br /> sales team</h1>
                                    <p className='main-hero-para'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator</p>
                                    <figure>
                                        <img src='https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='ConatctusImg' className='img-fluid' />
                                    </figure>
                                </div>

                                {/* Right side conatct form */}


                                <div className='col-12 col-lg-7 contact-rightside'>

                                    <form method='POST'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-feild'>

                                                <input type='text' name='' id='' className='form-control' placeholder='First-Name' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>

                                                <input type='text' name='' id='' className='form-control' placeholder='Last-Name' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-feild'>

                                                <input type='text' name='' id='' className='form-control' placeholder='Phone Number' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>

                                                <input type='email' name='' id='' className='form-control' placeholder='Email Id' />
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-12 contact-input-feild'>
                                                <input type='text' name='' id='' className='form-control' placeholder='Add Address' />
                                            </div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-12 '>
                                                <input type='text' name='' id='' className='form-control' placeholder='Enter your Message' />
                                            </div>
                                        </div>

                                        <div className="form-check form-checkbox-style">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label main-hero-para" for="flexCheckDefault">
                                                I agree with all condition
                                            </label>
                                        </div>
                                        <button type='submit' className='btn btn-style w-100'>Submit</button>






                                    </form>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact