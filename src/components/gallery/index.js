import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = () =>{
    return(
        <section className="py-3 text-center">
            <div className="container">
                <h2>Gallery</h2>
                <ul>
                    <GalleryItem/>
                    <GalleryItem />
                    <GalleryItem/>
                    <GalleryItem/>
                </ul>
            </div>
        </section>
    )
}

export default Gallery;