/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react'

export const Title = ({title,subtitle}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}
export default Title;