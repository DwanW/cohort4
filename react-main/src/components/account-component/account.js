import React from 'react';

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            transaction: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.deposit = this.deposit.bind(this);
        this.withdraw =this.withdraw.bind(this);
    }

    handleChange(e){
        this.setState({transaction: e.target.value});
    }
    deposit() {
        let afterBalance = Number(this.state.transaction) + Number(this.props.balance);
        this.props.onValueChange(afterBalance,this.props.idx)
    }

    withdraw() {
        let afterBalance = Number(this.props.balance) - Number(this.state.transaction);
        this.props.onValueChange(afterBalance,this.props.idx)
    }



    render() {
        return (
            <div className="accCard">
                <div className="accHeader">{this.props.name}</div>
                <input className="acc-inputbox" onChange={this.handleChange} value={this.state.transaction} placeholder="Enter Fund" type="number" />
                <button className="deposit accbutton" onClick={this.deposit}>Deposit</button>
                <button className="withdraw accbutton" onClick={this.withdraw}>Withdraw</button>
                <div className="acc-result">{`Account ${this.props.name} total balance: $${this.props.balance}`}</div>
                <button className="acc-delete accbutton" onClick={this.props.onDelete}><i className="fa fa-user-times"></i></button>
            </div>
        )
    }
};

export default Account;