import React from "react"



const Footer = () => (
    <footer>
        <section class="ft-main">
            <div class="ft-main-item">
                <h2 class="ft-logo">Kherkher Garcia LLP</h2>
                <ul>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Disclaimer</a></li>
                </ul>
            </div>

            <div class="ft-main-item ft-office">
                <h2 class="ft-title">Principal Office</h2>
                <ul>
                    <li>Kherkher Garcia LLP</li>
                    <li> 2925 Richmond Ave., Suite 1560</li>
                    <li>Houston, Texas  77098 </li>
                    <li><a class="ft-button ft-directions" href="#">Get Directions</a></li>
                </ul>
            </div>
            <div class="ft-main-item ft-contact">
                <h2 class="ft-title">Contact Us</h2>
                <ul>
                    <li ><a class="ft-button" href="#">(800) 123-4567</a></li>
                    <li><a class="ft-button ft-text" href="#">Text Us</a></li>
                    <li><a class="ft-button ft-email" href="#">Email Us</a></li>
                </ul>
            </div>
            <div class="ft-main-item">
                <h2 class="ft-title">Follow Us</h2>
                <ul class="ft-social-list">
                    <li><a class="fa-facebook" href="#">Facebook</a></li>
                    <li><a class="fa-twitter" href="#">Twitter</a></li>
                    <li><a class="fa-instagram" href="#">Instagram</a></li>
                    <li><a class="fa-youtube" href="#">YouTube</a></li>
                    <li><a class="fa-linkedin" href="#">LinkedIn</a></li>
                </ul>
            </div>
        </section>
        <section class="ft-copyright">
            <p>&copy; Copyright Kherkher Garcia LLP Personal Injury Trial Lawyers. All Rights Reserved.</p>
        </section>
        <section class="ft-legal">
            <p>The information presented on this website is not intended to be taken as legal advice for any case or situation. Additionally, nothing shown or mentioned on this website constitutes nor creates an attorney-client relationship.</p>
        </section>
    </footer>
)

export default Footer
