const React = require('react');

const Layout = require('./src/components/MainLayout').default


exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition
}) => {
    const currentPosition = getSavedScrollPosition(location)
    const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

    window.scrollTo(...(currentPosition || [0, 0]))

    return [0, 0]
}