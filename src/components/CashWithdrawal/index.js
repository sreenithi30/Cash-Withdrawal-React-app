import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000, balance: true}

  onChangeAmount = value => {
    const {amount} = this.state
    if (amount - value >= 0) {
      this.setState(prevState => ({amount: prevState.amount - value}))
      this.setState({balance: true})
    } else {
      this.setState({balance: false})
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount, balance} = this.state
    const text = balance ? null : (
      <span className="error">* Insufficient Funds</span>
    )
    const waringText =
      amount >= 50 && !balance ? (
        <span className="warning">Choose another Denomination</span>
      ) : null

    return (
      <div className="cashContainer">
        <div className="cardContainer">
          <div className="header">
            <div className="iconContainer">
              <p className="icon-head">S</p>
            </div>
            <p className="name">Sarah williams</p>
          </div>
          <div className="balanceContainer">
            <p className="balanceName">Your Balance</p>
            <div className="balanceCard">
              <p className="balanceCardHead">{amount}</p>
              <p className="balanceCardPara">In rupees</p>
            </div>
          </div>
          <div className="withdrawContainer">
            <p className="withdraw">Withdraw</p>
            <p className="withdrawPara">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominationsContainer">
              {denominationsList.map(eachValue => (
                <DenominationItem
                  denominations={eachValue}
                  key={eachValue.id}
                  onChangeAmount={this.onChangeAmount}
                />
              ))}
            </ul>
            {text}
            {waringText}
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
