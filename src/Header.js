import React from 'react'
import PropsTypes from 'prop-types'
function Header({content}) {
    return (
        <div className="Header">
            <h1>{content}</h1>
        </div>
    )
}

Header.defaultProps = {
    content: 'FUTURE MESSAGE',
}

Header.PropsTypes = {
    content: PropsTypes.string,
}
export default Header
