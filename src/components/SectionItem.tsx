import React from 'react'

interface SectionItemProps {
    title: string,
    description: string,
    id: string,
    styleType: string,
    imageUrl: string
}

export const SectionItem = (props: SectionItemProps) => {
    return (
        <section id={props.id} className={props.styleType}>
            <div className="inner">
                <img src={props.imageUrl} alt={props.title} className="image" />
                <div className="content">
                    <h2 className="major">{props.title}</h2>
                    <p>
                        {props.description}
                    </p>
                    <a href="/#" className="special">Learn more</a>
                </div>
            </div>
        </section>)
}
