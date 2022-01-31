import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import { FaHome } from 'react-icons/fa'

const data = [
  {
    text: "Flooring Contractor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    url: "/services/traverse-city-flooring-contractor",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/wood-flooring.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up-right"
  },
  {
    text: "Concrete Contractor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    url: "/services/concrete-service-traverse-city",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-concrete-contractor.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up"
  },
  {
    text: "Bathroom Remodeler",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    url: "/services/traverse-city-bathroom-remodeler",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-bathroom-remodeler.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up-left"
  },
  {
    text: "Kitchen Remodeler",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    url: "/services/traverse-city-kitchen-remodeler",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-kitchen-remodeler.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up-right"
  },
  {
    text: "Tile Contractor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    url: "/services/traverse-city-flooring-contractor",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-tile-installer.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up"
  },
  {
    text: "General Contractor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    url: "/services/general-contractor-traverse-city",
    icon: <FaHome size={48} className="text-warning" />,
    image: <StaticImage className="" src="../images/traverse-city-general-contractor.jpg" loading="lazy" placeholder="blurred" layout="fullWidth" alt="A kitten" />,
    aos: "fade-up-left"
  }
]

export default data;