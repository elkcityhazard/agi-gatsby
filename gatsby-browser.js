const React = require('react');

const Layout = require('./src/components/MainLayout').default


exports.wrapPageElement = ({ element, props}) => {
    return <Layout {...props}>{element}</Layout>
}