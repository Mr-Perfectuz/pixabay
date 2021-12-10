import React from 'react';
import Button  from './Button';

const Gallery => {
    return(
        <header>
            <div>
                <a href="#">Logo</a>
                <ul>
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Gallery</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>
                <Button></Button>
            </div>
        </header>
        )
    }

    export default Gallery;