import React, {useEffect, useState} from 'react'
import PropertyListing from './PropertyListing'
import pic4 from '../images/pic04.jpg'
import pic5 from '../images/pic05.jpg'
import pic6 from '../images/pic06.jpg'
import pic7 from '../images/pic07.jpg'
import {allPropertiesApi, ApiEndpoint} from '../Constants'
import {get} from '../utils/FetchUtils'

interface IProperty {
    name: string
    status: string
    availability: string
    price: string
    builderId: string
    builderName: string
    contactNumber: string
    handOverDate?: any
    regionName: string
    zipCode: string
    city: string
    state: string
    partitionKey: string
    rowKey: string
}

const PropertiesList = () => {
    const [properties, setProperties] = useState<IProperty[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let apiUrl = `${ApiEndpoint}${allPropertiesApi}`
        setError(null)
        get<IProperty[]>(apiUrl)
            .then(data => {
                console.log(data)
                data && setProperties(data)
            })
            .catch(err => {
                console.error(err)
                setError(err)
            })
    }, [])
    return (
        <section id="four" className="wrapper alt style1">
            <div className="inner">
                <h2 className="major">Properties</h2>
                <p>
                    Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
                    Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
                    egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
                    in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
                <section className="features">
                    {
                        properties.map(p => <PropertyListing
                            id={p.rowKey}
                            imageUrl={pic4}
                            title={p.name}
                            description={p.builderName ?? "Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices"} />)
                    }
                </section>
                <ul className="actions">
                    <li><a href="#" className="button">Browse All</a></li>
                </ul>
            </div>
        </section>
    )
}

export default PropertiesList