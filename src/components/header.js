import PropTypes from "prop-types"
import { Link } from "react-scroll"
import React from "react"
import logo from "../../static/images/CONTENT-LIFE-logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"container"}>
      <div className={"top-menu"}>
        <div className={"logo"}>
          <Link to="/" title={"Content Life"}>
            <img alt={"Logo"} src={logo} />
          </Link>
        </div>

        <div style={{ cursor: "pointer" }} className={"get-started"}>
          <Link smooth={true} to={"features"}>
            Features
          </Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
