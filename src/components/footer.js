import React from "react"

import kg_logo from '../images/kg-logo-footer.svg'

const Footer = () => (
    <footer className="flex-layout">
        <img src={kg_logo}></img>
        <div>
            <p>The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</p>
            <p>For a breakdown of the fees and expenses associated with the verdicts and settlements listed on our site, please visit our Results page.</p>
        </div>
    </footer>
)

export default Footer
