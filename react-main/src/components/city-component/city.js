import React from 'react';

const whichSphere = (latitude) => {
    if (Number(latitude) > 0) {
        return "North Hemisphere";
    } else if (Number(latitude) < 0) {
        return "South Hemisphere";
    } else {
        return "Equator";
    }
}

const howBig = (population) => {
    return (population > 100000) ? "City" :
        (population > 20000) ? "Large Town" :
            (population > 1000) ? "Town" :
                (population > 100) ? "Village" : "Hamlet";
}

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relocate: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.movedIn = this.movedIn.bind(this);
        this.movedOut = this.movedOut.bind(this);
    }

    handleChange(e) {
        this.setState({ relocate: e.target.value });
    }
    movedIn() {
        let afterPopulation = Number(this.props.population) + Number(this.state.relocate);
        this.props.onValueChange(afterPopulation, this.props.idx);
    }

    movedOut() {
        let afterPopulation = Number(this.props.population) - Number(this.state.relocate);
        this.props.onValueChange(afterPopulation, this.props.idx);
    }

    render() {
        return (
            <div className="cityCard">
                <div className="cityHeader">{this.props.cityName}</div>
                <input className="inputbox" placeholder="Enter population" type="number" onChange={this.handleChange} />
                <button className="movein city-button" onClick={this.movedIn}>Move In</button>
                <button className="moveout city-button" onClick={this.movedOut}>Move Out</button>
                <div className="result">{`Latitude: ${this.props.cityLat}, Longitude: ${this.props.cityLong}, Population: ${this.props.population} People. It is ${howBig(this.props.population)} sized and is located at ${whichSphere(this.props.cityLat)}.`}</div>
                <button className="delete city-button" onClick={this.props.onDelete}><i className="fa fa-trash" /></button>
            </div>
        )
    }
};

export default City;