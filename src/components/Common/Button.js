import React from 'react'

export default function Button(props) {
    const{status, title="Download"} = props;
    return (
        <button className={`btn btn-${status}  btn-info rounded`}>
            {title}
        </button>
    )
}
