import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
    <section className='notfound'>
    <div class="wrapper">
<div class="box">
<h1>500</h1>
<p>Sorry, it's me, not you.</p>
<p>&#58;&#40;</p>
<button className="btn btn-style "><NavLink to="/">Back to Home</NavLink></button>
</div>
</div>
</section>
    </>
  )
}

export default Error404