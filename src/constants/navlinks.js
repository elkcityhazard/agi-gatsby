// data
const links = [
  {
    text: "Interior Construction Contractor",
    url: "/services/traverse-city-home-builder",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#333",
    id: 1
  },
  {
    text: "Services",
    url: "/services",
    id: 2,
    children: [
      {
        text: "Flooring Contractor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "/services/traverse-city-flooring-contractor",
        icon: "<FaHome />"
      },
      {
        text: "Concrete Contractor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "/services/concrete-service-traverse-city",
        icon: "<FaHome />"
      },
      {
        text: "Bathroom Remodeler",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "/services/traverse-city-bathroom-remodeler",
        icon: "<FaHome />"
      },
      {
        text: "Kitchen Remodeler",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "/services/traverse-city-kitchen-remodeler",
        icon: "<FaHome />"
      },
      {
        text: "General Contractor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "/services/general-contractor-traverse-city",
        icon: "<FaHome />"
      }
    ],
    color: "#333",
  },
  {
    text: "Get In Touch",
    url: "/contact-us",
    color: "#333",
    id: 3
  },
  {
    text: "About Us",
    url: "/about-us",
    color: "#333",
    id: 4
  },
  {
    text: "Gallery",
    url: "/gallery",
    color: "#333",
    id: 5
  },
  {
    text: "Our Blog",
    url: "/blog",
    badge: true,
    color: "#333",
    id: 6
  },
]

export default links;