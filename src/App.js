import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//import logo from './logo.svg';
import './App.css';
//Full Height Row
//Selected Projects
//Carousel
//Skills
//Contact
class Menu extends React.Component{
  render(){
    return (
    <div id="header"> <div className="title">Ed Ali</div><div id="menu">
      <ul>
        <li><a href="/#featured">Projects</a></li>
        <li><a href="/#skills">Background</a></li>
      </ul>
    </div>
    </div>);
  }
}

class FullHeight extends React.Component{
  render(){
    return (<div id="row" className="full-height">
      
      <div className="descriptor">
        <div className="contents">
        A software developer based in the <div id="area">Greater Seattle Area</div> <div id="status"><a href="mailto:edali.personal@gmail.com">looking for an opportunity</a></div> to build websites and applications
        </div>
        <div id="places">
<div id="links">
<a href="mailto:edali.personal@gmail.com">Email</a>
        <a href="https://github.com/eda-git">Github</a>
        <a href="https://www.linkedin.com/in/ed-ali-812a0a14b/">LinkedIn</a>
</div>
</div>
        </div>
    </div>);
  }
}

const slider = <Carousel>
<div>
    <img src="/img/fastsport-1.png" alt="Main Page of fastsport.co" />
</div>
<div>
    <img src="/img/fastsport-2.png" alt="Boxscore Page Contents"/>
</div>
<div>
    <img src="/img/fastsport-3.png" alt="Example of how player profiles work"/>
</div>
</Carousel>;



class SelectedProjects extends React.Component{
  render(){
    return (<div id="featured" className="fastsport">
      <h2>Featured Project</h2>
      <h1>FastSport.co</h1>
      <div id="image">
  {slider}
      </div>
      <div id="desc">
      FastSport is a sports information website that includes news and scores from other games using scrapped data from BeautifulSoup. 
      Originally the site was written in PHP, but is now written with Django and Python
      </div>
      <div id="tech">
        <ul>
          <li>Python</li>
          <li>Django</li>
          <li>Javascript</li>
          <li>jQuery</li>
        </ul>
      </div>
    </div>);
  }
}


function AppData(props) {
  var viewData = props.view;
  var viewResult;
  if (viewData) {
    viewResult = <div id="view"><a href={props.view}>View</a></div>;
  } else {
    viewResult = null;
  }

  return (<div id="appName" className="">
  <h2>{props.name}</h2>
  <div id="desc">
  {props.desc}
  </div>
  <div id="viewer">
    <div id="github"><a href={props.github}>Github</a></div>
    {viewResult}
    
  </div>
</div>);
}



class ProjectReel extends React.Component{
  render(){
    const TourneyBracket = (<span>
      A tournament manager that autosorts brackets.
      <br /> 
      Technology Used: C# (ASP.NET MVC EF Core), Microsoft SQL Server, jQuery, Javascript, Leaflet  
      </span>);
    const PropertyVillage = (<span>
    Property searching website built in PHP, Javascript. 
    <br />
    Also uses jQuery, MySQL and Leaflet
    </span>);
    const TheCup = (<span>
      Developed a Web Application to manage a tournament and view boxscores
      <br />
      Technology Used: PHP, MySQL, jQuery, Javascript
      </span>);

    return (<div id="list">
      <div id="row">
      <AppData name="PropertyVillage" github="https://github.com/eda-git/Senior-Project-Site" view="http://students.washington.edu/edali/seniorproject/" desc={PropertyVillage} />
      <AppData name="TourneyBracket" github="https://github.com/eda-git/MVC-Core-Tournament-Maker-ASP.NET" view="" desc={TourneyBracket}/>
      <AppData name="TheCup.us Project" github="https://github.com/eda-git/Soccer-PHP-DB-Project" view="http://students.washington.edu/edali/ussoc/" desc={TheCup} />
      </div>
      
            
    </div>);
  }
}


class Skills extends React.Component{
  render(){
    return (<div id="skills">
      <div id="information">
        <div id="background">
        <h3>Background</h3>
        Software Developer, Kent, WA
        </div>
        <div id="education">
          2017-2019 Bachelors of Science, Information Technology
          <br />
          University of Washington, Tacoma
        </div>
      </div>
      <div id="knowledge">
        <h3>Skills</h3>
        <ul>
          <li>Python</li>
          <li>C#</li>
          <li>PHP</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>CSS/Sass/HTML</li>
          <li>MySQL</li>
          <li>Sketch/Lunacy</li>
          <li>Adobe Creative Suite</li>
        </ul>
      </div>
      <div id="professional">
      <h3>Professional Experience</h3>
        <div id="job">
          <div className="headline">
          <span>Cascade Public Media</span>, Web Production Intern
            </div>
            <ul>
            <li>Developed Drupal Modules in PHP</li>
            <li>Worked on front-end projects</li>
            <li>Worked on SEO related projects</li>
              </ul>

        </div>
      </div>
    </div>);
  }
}


class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div id="top">
          <div className="top content">
          <Menu />
        <FullHeight />
          </div>
       
        </div>
        <div id="rest">
          <div className="rest content">
          <SelectedProjects />
        <ProjectReel />
        <Skills />

          </div>
        
        </div>
        
        <footer>
    <div id="flexer">
        <div id="vertLine">
        </div>
        <div id="content">
        <b>
        Designed and Developed by Ed Ali
        </b>
        <br />
        <a href="mailto:edali.personal@gmail.com">Email</a>
        <a href="https://github.com/eda-git">Github</a>
        <a href="https://www.linkedin.com/in/ed-ali-812a0a14b/">LinkedIn</a>
        </div>
    </div>
    </footer>


      </div>

    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
