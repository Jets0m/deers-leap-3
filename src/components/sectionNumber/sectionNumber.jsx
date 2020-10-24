import React from 'react'
import "./sectionNumber.scss"

function SectionNumber({number, title}) {
    return (
        <div className="sectionNumber">
            <div className="sectionNumber__number">{number}</div>
            <div className="sectionNumber__title">{title}</div>
        </div>
    )
}

export default SectionNumber
