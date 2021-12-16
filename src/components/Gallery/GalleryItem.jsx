import React, { useState } from 'react';
const defaultImage = "https://cdn.pixabay.com/photo/2021/12/05/11/22/vinpearl-land-6847412__340.jpg";
const GalleryItem = ({link='#', src=defaultImage, alt="city image", ...props}) =>{
    return(
        <li>
            <a href={link}>
                <img src={src} alt={alt} />
            </a>
        </li>
    )

}

export default GalleryItem;