import React from 'react'
import './Card.css'

export default function Users(props) {
    const {title, content} = props;
    return (
        <div className="users">
            <h1>{title}</h1>
            <h2>{content}</h2>
        </div>
    )
}
