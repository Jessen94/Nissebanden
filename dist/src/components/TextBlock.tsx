import React from 'react'

const TextBlock = ({text}) => {
    return (
        <div className="content-column-text">
            <h2>
                <span>
                    {text}
                </span>
            </h2>
        </div>
    )
}

export default TextBlock