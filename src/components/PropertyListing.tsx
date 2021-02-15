import React from 'react'

interface IPropertyListingProps {
    imageUrl: string
    title: string
    description: string
    id: string
}

const PropertyListing = (props: IPropertyListingProps) => {
    return (
        <article id={props.id}>
            <img className="image" src={props.imageUrl} alt="" />
            <h3 className="major">{props.title}</h3>
            <p>
                {props.description}
            </p>
            <a href="/#" className="special">Learn more</a>
        </article>)
}

export default PropertyListing
