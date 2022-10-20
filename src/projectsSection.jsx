import crimeMap from "./crimeMap.jpg";
import podcastPlanners from "./podcastPlanners.jpg";
import React, { Component }  from 'react';

const ProjectsSection = () => {
    return (
        <div class="flexwrapper">
            <h2>Projects</h2>
            <div>
                <a href="https://nifty-blackwell-b8fba1.netlify.app/" ><img src={crimeMap} /></a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div>
                <a href="https://main--curious-bunny-7f4ff1.netlify.app/" ><img src={podcastPlanners} /></a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    )
}

export default ProjectsSection;