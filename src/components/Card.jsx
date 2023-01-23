import React from 'react'
import "./Card.css"

function Card({name, description}) {
  return (
    <div>  
        <div class="a-box xl:mt-">
            <div class="img-container">
                <div class="img-inner">
                <div class="inner-skew">
                <img src="https://images.pexels.com/photos/14045068/pexels-photo-14045068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </div>
    </div>
    <div class="text-container">
        <h3>{name}</h3>
        <div>
            {description}
        </div>
    </div>
    </div>
    </div>
    )
}

export default Card