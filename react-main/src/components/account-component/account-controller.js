import React from 'react';
import Account from './account';
import './account-controller.styles.css'

class AccountController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accArr: [],
            newAccName: '',
            newAccBalance: 0,
            hideAccPrompt: true,
            hideInfoPrompt: true,
            total: 0,
            maxAcc: '',
            minAcc: '',
            info:'Account Not Found'
        }
        this.wrapperRef = [];
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBalanceChange = this.handleBalanceChange.bind(this);
        this.openAccPrompt = this.openAccPrompt.bind(this);
        this.openInfoPrompt = this.openInfoPrompt.bind(this);
        this.clickAway = this.clickAway.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.addAcc = this.addAcc.bind(this);
        this.getTotal = this.getTotal.bind(this);
        this.getMax = this.getMax.bind(this);
        this.getMin = this.getMin.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.clickAway);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.clickAway);
    }

    handleNameChange(e) {
        this.setState({ newAccName: e.target.value });
    }

    handleBalanceChange(e) {
        this.setState({ newAccBalance: e.target.value });
    }

    openAccPrompt() {
        this.setState({ hideAccPrompt: false, hideInfoPrompt: true});
    }
    openInfoPrompt() {
        this.setState({ hideInfoPrompt: false });
    }

    clickAway(event) {
        if (!this.wrapperRef[0].contains(event.target) && !this.wrapperRef[1].contains(event.target) && !this.wrapperRef[2].contains(event.target)) {
            this.setState({ hideAccPrompt: true, hideInfoPrompt: true });
        }
    }
    setWrapperRef(node) {
        this.wrapperRef.push(node);
    }

    addAcc() {
        let newAccObj = { "name": this.state.newAccName, "balance": this.state.newAccBalance };
        let tempArr = [...this.state.accArr, newAccObj];
        this.setState({ accArr: tempArr,hideAccPrompt: true });
    }

    onDelete(idx) {
        let tempArr = [...this.state.cityArr];
        tempArr.splice(idx, 1);
        this.setState({ cityArr: tempArr });
    }

    onValueChange(value, idx) {
        let tempArr = [...this.state.cityArr];
        tempArr[idx].balance = value;
        this.setState({ cityArr: tempArr })
    }

    getTotal() {
        if (this.state.accArr.length > 0) {
            let total = 0;
            this.state.accArr.forEach((obj) => {
                total += obj.balance;
            })
            this.setState({ total: total, info:`The Total Balance of All Accounts: $${total}` });
        }
        this.openInfoPrompt();
    }

    getMax() {
        if (this.state.accArr.length > 0) {
            let max = 0;
            let hAccName = '';
            this.state.accArr.forEach((obj) => (obj.balance > max) ? (max = obj.balance, hAccName = obj.name) : max);
            this.setState({ max: hAccName, info:`The Account with the Highest Balance: ${hAccName}` });
        }
        this.openInfoPrompt()
    }

    getMin() {
        if (this.state.accArr.length > 0) {
            let min = this.state.accArr[0].balance;
            let lAccName = this.state.accArr[0].name;
            this.state.accArr.forEach((obj) => (obj.balance < min) ? (min = obj.balance, lAccName = obj.name) : min);
            this.setState({ min: lAccName, info:`The Account with the Lowest Balance: ${lAccName}` });
        }
        this.openInfoPrompt()
    }

    render() {
        return (
            <div id="acc-app" >
                {
                    this.state.accArr.map((account, idx) => (
                        <Account
                            key={idx+account.name}
                            idx={idx}
                            name={account.name}
                            balance={account.balance}
                            onDelete={() => this.onDelete(idx)}
                            onValueChange={this.onValueChange}
                        />
                    ))
                }
                <div id="control-container" ref={this.setWrapperRef}>
                    <button className="accbutton" id="addAcc" onClick={this.openAccPrompt}>Add Acc</button>
                    <button className="accbutton" id="getTotal" onClick={this.getTotal}>Total</button>
                    <button className="accbutton" id="getMax" onClick={this.getMax}>Max</button>
                    <button className="accbutton" id="getMin" onClick={this.getMin}>Min</button>
                </div>
                <div className={`name-prompt ${this.state.hideAccPrompt ? 'hide' : ''}`} ref={this.setWrapperRef}>
                    <div className="prompt-header">Creating New Account</div>
                    <div id="name-prompt-action">
                        <input className="promptinput" type="text" id="accName" onChange={this.handleNameChange} placeholder="Enter Account Name" />
                        <input className="promptinput" type="number" id="accBalance" onChange={this.handleBalanceChange} placeholder="Enter Balance" />
                        <button className="accbutton" id="create-acc" onClick={this.addAcc}>Create this Accout</button>
                    </div>
                </div>
                <div className={`name-prompt ${this.state.hideInfoPrompt ? 'hide' : ''}`} ref={this.setWrapperRef} id="info-prompt">
                    <div className="prompt-header">Account Information</div>
                    <div id="info-panel">
                    {this.state.info}
                    </div>
                </div>
            </div>
        )
    }
};


export default AccountController;