import React from 'react';
import {useState} from 'react';

import { StaticImage } from "gatsby-plugin-image"

// custom components

import CallNow from './CallNow'

// custom css

import './LocaleCard.scss'

const title = "#1 Interior Construction Contractor in Traverse City, Michigan"

export default function LocaleCard() {

    const [zoom, setZoom] = useState(1.25)

    const handleLoad = (e) => {
        setZoom(1)
    }

    return (
        <section className="locale-card p-3">
        <div className="container">
            <div className="row">
                <div className="col-12 col-xl-6 mx-auto p-3 text-center">
                    <StaticImage 
                    src="../images/interior-bathroom-design-to-finish.jpg" 
                    alt="from design to finish" 
                    className="mt-5 mx-auto rounded shadow"
                    loading="lazy"
                    layout="fullWidth"
                    placeholder="blurred"
                    />
                </div>
                <div className="col-12 col-xl-6 mx-auto p-3">
                    <h3>{title}</h3>
                    <p className="leader">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, iste nulla. Quis reiciendis saepe quam illo voluptates explicabo sint numquam voluptatum maxime magni, cum aperiam vero beatae, ratione vitae cumque?
                        Expedita natus harum quis, architecto nihil ut error magnam necessitatibus esse libero ex perspiciatis quia quam iure aliquam illum suscipit vero sed minus eum veniam aut. Nemo deserunt voluptatum cumque.
                        Eaque eius voluptatibus eum maiores distinctio quam illum, culpa cupiditate recusandae. Dolore modi et possimus corrupti quaerat dolorem neque, mollitia unde, perferendis nihil assumenda quisquam enim expedita nemo ab aperiam!
                        Eos dolore odio consectetur, hic velit, eligendi excepturi illo aut a ab, voluptatem fuga sapiente quos explicabo omnis natus voluptate pariatur tenetur ullam! Repudiandae fugit dolor provident quibusdam sit nihil!
                        Expedita iure, quisquam ad illo nobis nihil asperiores velit, id nostrum vel assumenda exercitationem perspiciatis rem. Quis odit repudiandae illo eum rerum deleniti neque! Cupiditate assumenda optio dolorem tempora consequuntur?
                    </p>
                    <CallNow />
                </div>
            </div>
        </div>
        </section>
    )
}
