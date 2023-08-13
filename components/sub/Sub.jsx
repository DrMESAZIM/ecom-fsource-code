import React from 'react'
import './Sub.css'

const Sub = () => {
  return (
    <div className="sub">
        <h2>Subscribe fo<span>r Disc</span>ount</h2>
        <div class="contant">
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Expedita laboriosam, eveniet sit optio pariatur quidem in
              dignissimos nobis commodi. </p>
              <div class="form">
              <form>
                        <input 
                        type="email" 
                        placeholder="Enter Your Email"
                         required /><br />
                        <button 
                        type="submit" 
                        class="sum">
                            Subscribe</button>
                </form>
              </div>
        </div>
    </div>
  )
}

export default Sub