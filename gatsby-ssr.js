// Import React so that you can use JSX in HeadComponents
const React = require("react")



exports.onRenderBody = ({setHeadComponents}) => {
        setHeadComponents([
            <script id="bookNow" key="booking" src="https://asset-tidycal.b-cdn.net//js/embed.js"></script>
            ])
    }
