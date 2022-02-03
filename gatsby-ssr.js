// Import React so that you can use JSX in HeadComponents
const React = require("react")



const headComponents = [
    <script defer key="booking" src="https://asset-tidycal.b-cdn.net//js/embed.js"></script>
]


export const onRenderBody = ({ setHeadComponents }) => {
    return setHeadComponents(headComponents)
}

