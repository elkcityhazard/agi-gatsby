// Import React so that you can use JSX in HeadComponents
const React = require("react")



const headComponents = [
    <script defer key="booking" src="https://asset-tidycal.b-cdn.net//js/embed.js"></script>
]

const bodyComponents = [
    <script async >
        {`(function (s, u, m, o, j, v) {
                            j = u.createElement(m);
                            v = u.getElementsByTagName(m)[0];
                            j.async = 1;
                            j.src = o;
                            j.dataset.sumoSiteId =
                                '7b6f548845c0146f30c426c9ee4531ad9d946e3e37866aefc4703b5d2b5c8cbe';
                            v.parentNode.insertBefore(j, v);
                        })(window, document, 'script', '//load.sumo.com/');`}
    </script >
]



export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    setHeadComponents(headComponents)
    setPostBodyComponents(bodyComponents)
}


