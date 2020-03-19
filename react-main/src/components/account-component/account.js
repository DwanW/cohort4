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
                <input className="inputbox" onChange={this.handleChange} placeholder="Enter Fund" type="number" />
                <button className="deposit" onClick={this.deposit}>Deposit</button>
                <button className="withdraw" onClick={this.withdraw}>Withdraw</button>
                <div className="result">{`Account ${this.props.name} total balance: $${this.props.balance}`}</div>
                <button className="delete" onClick={this.props.onDelete}><i className="fa fa-user-times"></i></button>
            </div>
        )
    }
};

export default Account;