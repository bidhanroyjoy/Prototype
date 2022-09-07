import React from 'react'
import memstripe from '../../assets/mem_stripe_circle2.svg'
import memdot from '../../assets/mem_dots_rect2.svg'
import sparkles from '../../assets/Sparkles.svg'
import stripe from '../../assets/mem_stipe_square.svg'
import wave from '../../assets/mem_wave_7.svg'

import imgleft from '../../assets/Image-Left.png'
import imgright from '../../assets/Image-Top-Right.png'
import bottomright from '../../assets/Image-Bottom-Right.png'



const Gallery = () => {
  return (
    <div>
           <div class="bg-tweaks">
        <img class="stripe-2" src={memstripe} alt="" />
        <img class="dot-2" src={memdot} alt="" />
        <img class="sparkles-1" src={sparkles} alt="" />
        <img class="square-stripe-1" src={stripe} alt="" />
        <img class="mem-wave-7" src={wave} alt="" />
    </div>
    <section class="glimps">
            <h1 class="glimps-title">Glimpses</h1>
            <p class="glimps-subtitle">Our workplace can be best previewed in photos</p>
            <div class="glimps-gallery">
                <div class="glimps-gallery-left">
                    <img src={imgleft} alt="" />
                </div>
                <div class="glimps-gallery-left">
                    <div class="glimps-gallery-left-top">
                        <img src={imgright} alt="" />
                    </div>
                    <div class="glimps-gallery-left-bottom">
                        <img src={bottomright} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Gallery