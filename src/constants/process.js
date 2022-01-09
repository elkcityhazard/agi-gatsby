import React from 'react';

import { FaUserCircle, FaUserFriends, FaEye, FaTools, FaKey } from 'react-icons/fa'

const data = [
    {
        id: "1",
        title: "Contact Us",
        text: "Schedule a free consultation in your home.",
        icon: <FaUserCircle size={56} className="my-3 border rounded-circle border-info p-3 text-warning" style={{height: `100px`, width: `100px`}} />,
    },
    {
        id: "2",
        title: "Consultation",
        text: "Our experienced project consultant will help determine your needs and create a plan that works",
        icon: <FaUserFriends size={56} className="my-3 border rounded-circle border-info p-3 text-warning" style={{height: `100px`, width: `100px`}} />,
    },
    {
        id: "3",
        title: "Design",
        text: "Our experienced design team will help you create the best space possible for your home or office",
        icon: <FaEye size={56} className="my-3 border rounded-circle border-info p-3 text-warning" style={{height: `100px`, width: `100px`}} />,
    },
    {
        id: "4",
        title: "Project Execution",
        text: "Our trained professionals will turn your project into a completed project",
        icon: <FaTools size={56} className="my-3 border rounded-circle border-info p-3 text-warning" style={{height: `100px`, width: `100px`}} />,
    },
    {
        id: "5",
        title: "Check-In",
        text: "We visit with you during and after the project to walk through the entire process",
        icon: <FaKey size={56} className="my-3 border rounded-circle border-info p-3 text-warning" style={{height: `100px`, width: `100px`}} />,
    },

]

export default data