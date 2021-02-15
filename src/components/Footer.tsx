import React, {FormEvent, useState} from 'react'
import {ApiEndpoint, sendEnquiryApi} from '../Constants'
import {post} from '../utils/FetchUtils'
interface IPropertyEnquiry {
    name?: string
    status?: string
    availability?: string
    price?: string
    builderId?: string
    builderName?: string
    contactNumber?: string
    handOverDate?: any
    regionName?: string
    zipCode?: string
    city?: string
    state?: string
    partitionKey?: string
    rowKey?: string
    Query?: string
    UserName?: string
    UserContactNumber?: string
    UserEmail?: string
    PropertyId?: string
}

const Footer = () => {
    const [state, setstate] = useState<IPropertyEnquiry>({
        builderId: "1",
        PropertyId: "1",
        regionName: "hyderabad"
    })
    const [submitted, setsubmitted] = useState<boolean>(false)
    const handleSubmit = (a: FormEvent<HTMLFormElement>) => {
        a.preventDefault()
        setsubmitted(false)

        if (!state) {
            return
        }

        let apiUrl = `${" http://localhost:7071/api/enquiry"}${sendEnquiryApi}`
        post<IPropertyEnquiry, {value: string}>(apiUrl, state)
            .then(data => {
                setsubmitted(true)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <section id="footer">
            <div className="inner">
                <h2 className="major">Get in touch</h2>
                <p>
                    Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
                    Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
                    egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
                    in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
              </p>
                <form onSubmit={handleSubmit}>
                    <div className="fields">
                        <div className="field">
                            <label >Name</label>
                            <input type="text" value={state?.UserName} name="username" id="username" onChange={(v) => setstate({...setstate, UserName: v.target.value})} />
                        </div>
                        <div className="field">
                            <label >Email</label>
                            <input type="email" name="useremail" id="useremail" onChange={(v) => setstate({...setstate, UserEmail: v.target.value})} />
                        </div>
                        <div className="field">
                            <label >Contact number</label>
                            <input type="text" value={state?.UserContactNumber} name="usercontactnumber" id="usercontactnumber" onChange={(v) => setstate({...setstate, UserContactNumber: v.target.value})} />
                        </div>
                        <div className="field">
                            <label >Message</label>
                            <textarea name="query" value={state?.Query} id="query" rows={4} onChange={(v) => setstate({...setstate, Query: v.target.value})}></textarea>
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" /></li>
                    </ul>
                </form>
                <ul className="contact">
                    <li className="icon solid fa-home">
                        Property Info, Inc<br />
                        1234 Somewhere Road Suite<br />
                        Mumbai, MUM 123456
                    </li>
                    <li className="icon solid fa-phone">
                        <a href="tel:(+91) 987 465 1230">(+91) 987 465 1230</a>
                    </li>
                    <li className="icon solid fa-envelope">
                        <a href="mailto:contactus@propertyinfo.com?Subject=Enqyiry">contactus@propertyinfo.com</a>
                    </li>
                    <li className="icon brands fa-twitter">
                        <a href="#">twitter.com/untitled-tld</a>
                    </li>
                    <li className="icon brands fa-facebook-f">
                        <a href="#">facebook.com/untitled-tld</a>
                    </li>
                    <li className="icon brands fa-instagram">
                        <a href="#">instagram.com/untitled-tld</a>
                    </li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled Inc. All rights reserved.</li>
                    <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer
