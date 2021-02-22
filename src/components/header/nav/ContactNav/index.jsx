import React from 'react'
import CallIcon from '../../../../assets/icon/call.png'
import EmailIcon from '../../../../assets/icon/email.png'
import Locartion from '../../../../assets/icon/loc.png'

function ContactNav() {
    return (
        <div class="col-md-6 offset-md-6">
            <div class="location_icon_bottum">
                <ul>
                    <li><img src={CallIcon} alt="icons"/>(+71)9876543109</li>
                    <li><img src={EmailIcon} alt="icons"/>demo@gmail.com</li>
                    <li><img src={Locartion} alt="icons"/>Location</li>
                </ul>
            </div>
        </div>
    )
}

export default ContactNav
