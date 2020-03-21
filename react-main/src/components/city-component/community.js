import React from 'react';
import './community.styles.css';
import City from './city';

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });
    return await response.json();   // parses JSON response into native JavaScript objects
}

class Community extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityArr: [],
            newCityName: '',
            newCityLat: 0,
            newCityLong: 0,
            newPop: 0,
            hideCityPrompt: true,
            hideInfoPrompt: true,
            total: 0,
            MostN: '',
            MostS: '',
            info: 'City Not Found',
            apiData: [],
        }
        this.wrapperRef = [];
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLatChange = this.handleLatChange.bind(this);
        this.handleLongChange = this.handleLongChange.bind(this);
        this.handlePopChange = this.handlePopChange.bind(this);
        this.openCityPrompt = this.openCityPrompt.bind(this);
        this.openInfoPrompt = this.openInfoPrompt.bind(this);
        this.clickAway = this.clickAway.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.createCity = this.createCity.bind(this);
        this.getMostNorthern = this.getMostNorthern.bind(this);
        this.getMostSouthern = this.getMostSouthern.bind(this);
        this.getPopulation = this.getPopulation.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.getRandom = this.getRandom.bind(this);
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await response.json();
            this.setState({ apiData: data });
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
        document.addEventListener('click', this.clickAway);

        try {
            const response = await fetch('http://localhost:5000/all');
            const data = await response.json();
            this.setState({ cityArr: data });
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.clickAway);
    }

    openCityPrompt() {
        this.setState({ hideCityPrompt: false, hideInfoPrompt: true });
    }
    openInfoPrompt() {
        this.setState({ hideInfoPrompt: false });
    }

    clickAway(event) {
        if (!this.wrapperRef[0].contains(event.target) && !this.wrapperRef[1].contains(event.target) && !this.wrapperRef[2].contains(event.target)) {
            this.setState({ hideCityPrompt: true, hideInfoPrompt: true });
        }
    }
    setWrapperRef(node) {
        this.wrapperRef.push(node);
    }

    handleNameChange(e) {
        this.setState({ newCityName: e.target.value });
    }
    handleLatChange(e) {
        this.setState({ newCityLat: e.target.value });
    }
    handleLongChange(e) {
        this.setState({ newCityLong: e.target.value });
    }

    handlePopChange(e) {
        this.setState({ newPop: e.target.value });
    }

    onDelete(idx, key) {
        let tempArr = [...this.state.cityArr];
        tempArr.splice(idx, 1);
        this.setState({ cityArr: tempArr });
        postData('http://localhost:5000/delete', { "key": key });
    }

    onValueChange(value, idx) {
        let tempArr = [...this.state.cityArr];
        tempArr[idx].population = value;
        this.setState({ cityArr: tempArr });
        postData('http://localhost:5000/update', tempArr[idx]);
    }

    createCity() {
        let newCity = { key: Math.floor(Math.random() * 100 + Date.now()), name: this.state.newCityName, latitude: this.state.newCityLat, longitude: this.state.newCityLong, population: this.state.newPop };
        let tempArr = [...this.state.cityArr, newCity];
        this.setState({ cityArr: tempArr, hideCityPrompt: true });
        postData('http://localhost:5000/add', newCity);
    }

    getMostNorthern() {
        if (this.state.cityArr.length > 1) {
            let mostN = 0;
            let cityName = '';
            this.state.cityArr.forEach((city) => ((Number(city.latitude) > mostN) ? (mostN = Number(city.latitude), cityName = city.name) : mostN));
            this.setState({ mostN: mostN, info: `The City Located Furthest North: ${cityName}` });
        }
        this.openInfoPrompt();
    }


    getMostSouthern() {
        if (this.state.cityArr.length > 1) {
            let mostS = this.state.cityArr[0].latitude;
            let cityName = '';
            this.state.cityArr.forEach((city) => ((Number(city.latitude) < mostS) ? (mostS = Number(city.latitude), cityName = city.name) : mostS));
            this.setState({ mostS: mostS, info: `The City Located Furthest South: ${cityName}` });
        }
        this.openInfoPrompt();
    }

    getPopulation() {
        if (this.state.cityArr.length > 0) {
            let total = 0;
            this.state.cityArr.forEach((city) => {
                total += Number(city.population);
            })
            this.setState({ total: total, info: `The Total Population of All Cities: ${total} people` });
        }
        this.openInfoPrompt();
    }

    getRandom() {
        let randomIdx = Math.round(Math.random() * 250);
        this.setState({
            newCityName: this.state.apiData[randomIdx].capital,
            newCityLat: this.state.apiData[randomIdx].latlng[0],
            newCityLong: this.state.apiData[randomIdx].latlng[1],
            newPop: this.state.apiData[randomIdx].population
        })
    }

    render() {
        return (
            <div id="city-app">
                {
                    this.state.cityArr.map((city, idx) => (
                        <City
                            key={city.key}
                            idx={idx}
                            cityName={city.name}
                            cityLat={city.latitude}
                            cityLong={city.longitude}
                            population={city.population}
                            onDelete={() => this.onDelete(idx, city.key)}
                            onValueChange={this.onValueChange}
                        />
                    ))
                }
                <div id="control-container" ref={this.setWrapperRef}>
                    <button className='city-button' id="addCity" onClick={this.openCityPrompt}>Create City</button>
                    <button className='city-button' id="getTotal" onClick={this.getPopulation}>Population</button>
                    <button className='city-button' id="getN" onClick={this.getMostNorthern}>Most Northern</button>
                    <button className='city-button' id="getS" onClick={this.getMostSouthern}>Most Southern</button>
                </div>
                <div className={`name-prompt ${this.state.hideCityPrompt ? 'hide' : ''}`} ref={this.setWrapperRef}>
                    <div className="prompt-header">Creating New City</div>
                    <div id="name-prompt-action">
                        <button className='city-button' id='random' onClick={this.getRandom}><i className="fa fa-smile-o" /></button>
                        <input className="promptinput" type="text" id="cityName" placeholder="City Name" value={this.state.newCityName} onChange={this.handleNameChange} />
                        <input className="promptinput" type="text" id="cityLat" placeholder="Latitude" value={this.state.newCityLat} onChange={this.handleLatChange} />
                        <input className="promptinput" type="text" id="cityLong" placeholder="Longitude" value={this.state.newCityLong} onChange={this.handleLongChange} />
                        <input className="promptinput" type="number" id="cityPop" placeholder="Population" value={this.state.newPop} onChange={this.handlePopChange} />
                        <button className='city-button' id="create-city" onClick={this.createCity}>Create this City</button>
                    </div>
                </div>
                <div className={`name-prompt ${this.state.hideInfoPrompt ? 'hide' : ''}`} id="info-prompt" ref={this.setWrapperRef}>
                    <div className="prompt-header">City Information</div>
                    <div id="info-panel">
                        {this.state.info}
                    </div>
                </div>
            </div>
        )
    }
};

export default Community;