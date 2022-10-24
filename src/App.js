import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import AboutSection from './aboutSection'
import NavBar from './navBar'
import ProjectsSection from './projectsSection'
import ContactSection from './contactSection'


/* import bannerConnectingDots from './bannerConnectingDots';
*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">


          <NavBar />
<AboutSection />
<ProjectsSection />
<ContactSection />
        </header>
      </div>
    )
  }
}


export default App;
