import { useState } from "react"

export default function LikeButton(){
    let[isLiked,setIsLiked] = useState(false);

    let toggle= ()=>{
        setIsLiked(!isLiked);
    }

    return( 
        <div>
            <h1>Hello Moto!  
                <p onClick={toggle} > {isLiked? <i class="fa-solid fa-heart" style={{color:"red"}}></i>:<i class="fa-regular fa-heart"></i> }  </p>
            </h1>
        </div>
    )
}