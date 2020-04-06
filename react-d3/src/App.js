import React, { Component } from 'react';
import SideNavComp from './components/SideNavComp';
import WelcomeComp from './components/WelcomeComp';
import ReactLogoComp from './components/ReactLogoComp';
import D3PlayComp from './components/D3PlayComp';
import D3BarGraphComp from './components/D3BarGraphComp';
import D3HistogramComp from './components/D3HistogramComp';
import D3RadarChartComp from './components/D3RadarChartComp';
import D3ComboComp from './components/D3ComboComp';
import D3ExerciseComp from './components/D3ExerciseComp';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { display: WelcomeComp };
    // this.state = {display: D3ComboComp};
    this.options = [
      { label: "Welcome", value: WelcomeComp },
      { label: "React", value: ReactLogoComp },
      { label: "Play", value: D3PlayComp },
      { label: "Bar Graph", value: D3BarGraphComp },
      { label: "Histogram", value: D3HistogramComp },
      { label: "Radar Chart", value: D3RadarChartComp },
      { label: "Combo", value: D3ComboComp },
      { label: "Exercise", value: D3ExerciseComp },
    ];
    // this.options.title = "From App";
    this.options.callback = this.setDisplay;
  }


  setDisplay = (option) => {
    // console.log("D3PlayComp.setDisplay:", option);
    this.setState({
      display: option,
    })
  }

  render() {
    const TagName = this.state.display;
    return (
      <div className="App" >
        <SideNavComp options={this.options} />
        <TagName />
      </div>
    )
  }
}

export default App;
