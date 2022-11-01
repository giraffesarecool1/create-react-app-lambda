/*import profilePic from "./profilePic.jpg"
*/


import React, { Component }  from 'react';
const AboutSection = () => {
    return (
        <div class="flexwrapper AboutSection">
            <h2>About</h2>
            <div>
                <img src="https://pmsol3.files.wordpress.com/2009/08/chineseaverageman.jpg" alt="#" id="me"/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div id="flexwrapper skills">       
            <div><img src="https://benscott.dev/imgs/js.f8a28e905c78dadb79434b7ceebd52a0.png" /></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" /></div>
            <div><img src="https://benscott.dev/imgs/react.cb15bfce2a9004ce61c5f79f805b067b.png" /></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" /></div>
            <div><img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" /></div>
            
            </div>
        </div>
    )
}

export default AboutSection;
