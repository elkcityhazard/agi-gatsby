import React from 'react';

import { StaticImage } from "gatsby-plugin-image"

// custom components

import CallNow from './CallNow'

// custom css

import './LocaleCard.scss'

const title = "#1 Interior Construction Contractor in Traverse City, Michigan"

export default function LocaleCard() {

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
                        <p className="lead">
                            Are you looking for an <strong>interior construction contractor</strong> in Traverse City, Michigan?

                            Searching for a <strong>licensed interior construction contractor</strong> that is fully registered and insured can be a challenge.
                            You need to be careful that you are working with highly skilled and knowledgeable contractors who are professional
                            and competent in their work.  Absolutely Gorgeous Interiors has been passionate about helping families and businesses
                            create beautiful and accessible workspaces since 1991.
                            <br />
                            <br />
                            Absolutely Gorgeous Interiors, LLC is one of the top-rated interior construction contractors serving the Grand Traverse area.
                            We offer a wide variety of services types, including <strong>interior construction</strong>, <strong>ADA compliance construction</strong>, <strong>tile installation</strong>, <strong>concerete construction services</strong>,
                            <strong>bathroom construction and remodeling</strong>, and many others.  Our team has years of experience helping clients and we are passionate about it!  We are dedicated
                            to ensuring that each project is tailored to your needs.
                            <br />
                            <br />
                            Our registered and licensed contractors want to make your space both beautiful and accessible.  Mark and Donald believe that spaces should be a
                            joy for everyone to use and spark warmth and creativity.  Helping people have beautiful and accessible living spaces is our passion.  <strong>Our "why" is
                                because we love seeing people who struggled in their previous spaces have freedom and independence again! </strong> Are you ready to get started?  Sign up for a free
                            consultation today!



                        </p>
                        <CallNow />
                    </div>
                </div>
            </div>
        </section>
    )
}
