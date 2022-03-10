const React = require('react');

const Layout = require('./src/components/MainLayout').default


exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    const { pathname } = location

    console.log(pathname, getSavedScrollPosition)

    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [
        `/privacy-policy`,
        `/services/traverse-city-home-builder`,
        `/services/`,
        `/contact-us`,
        `/about-us`,
        `/gallery`,
        `/blog`,
        `/terms-of-service`,
        `/cookie-policy`,
        `/general-disclaimer`,
        `/refund-policy`,
        `/shipping-policy`

    ]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {

        window.scrollTo(0, 0)
    }

    return false
}
