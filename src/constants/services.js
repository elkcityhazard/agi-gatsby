import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import { FaHome } from 'react-icons/fa'

const data = [
  {
    text: "Flooring Contractor",
    description: "Flooring can be one of the most beautiful aspects of a home or commercial construction project.  Make sure your floor is installed correctly by our dependable and trusted professional installers",
    url: "/services/traverse-city-flooring-contractor",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/wood-flooring.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up-right"
  },
  {
    text: "Concrete Contractor",
    description: "You play basketball with your children on it and share loving memories with your friends and family on it, so why should concrete be boring?  We can help make sure your concrete is as unique as you are",
    url: "/services/concrete-service-traverse-city",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-concrete-contractor.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up"
  },
  {
    text: "Bathroom Remodeler",
    description: "One of the few places you can escape to your personal sanctuary.  A place where you can truely be yourself.  So why not have a bathroom that helps you find your center and drift away to your personal space",
    url: "/services/traverse-city-bathroom-remodeler",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-bathroom-remodeler.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up-left"
  },
  {
    text: "Kitchen Remodeler",
    description: "Have you ever heard the expression, \"there are too many cooks in the kitchen?\"  We all gather in the kitchen.  Let us help make it a beautiful, functional, and completely accessible place for your family",
    url: "/services/traverse-city-kitchen-remodeler",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-kitchen-remodeler.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up-right"
  },
  {
    text: "Tile Contractor",
    description: "We are more than tile experts.  We are tile innovators.  We will create a project plan based on your goals and budget.  Help you select the materials, deliver an estimate, and design around your budget and time",
    url: "/services/traverse-city-flooring-contractor",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-tile-installer.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up"
  },
  {
    text: "General Contractor",
    description: "Do you need a backyard kitchen for your Traverse City home? Looking for heated stamped concrete in Traverse City, Michigan?  Have a luxury interior idea?  We can help with that! Our limit is your vision. ",
    url: "/services/general-contractor-traverse-city",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-general-contractor.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up-left"
  }
]

export default data;