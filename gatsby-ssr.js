// Import React so that you can use JSX in HeadComponents
const React = require("react")



exports.onRenderBody = ({ setHeadComponents }) => {

    const headComponents = [<script defer data-domain="agitraversebay.com" src="https://plausible.io/js/plausible.js"></script>
    ]

    setHeadComponents(headComponents)
}

