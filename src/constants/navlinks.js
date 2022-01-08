// data
const links = [
    {
      text: "Interior Construction Contractor",
      url: "/traverse-city-home-builder",
      description:
        "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
      color: "#E95800",
    },
    {
      text: "Services",
      url: "/services",
      children: [
        {
          text: "Flooring Contractor",
          url: "/services/flooring-contractor"
        },
        {
          text: "Concrete Contractor",
          url: "/services/concrete-contractor"
        },
        {
          text: "Bathroom Remodeler",
          url: "/services/bathroom-remodeler"
        },
        {
          text: "Kitchen Remodeler",
          url: "/services/kitchen-remodeler"
        },
        {
          text: "General Contractor",
          url: "/services/general-contractor-traverse-city"
        }
      ],
      color: "#1099A8",
    },
    {
      text: "Get In Touch",
      url: "/contact-us",
      color: "#BC027F",
    },
    {
      text: "About Us",
      url: "/about-us",
      color: "#0D96F2",
    },
    {
      text: "Gallery",
      url: "/gallery",
      color: "#8EB814",
    },
    {
      text: "Our Blog",
      url: "/interior-construction-blog",
      badge: true,
      color: "#663399",
    },
  ]

  export default links;