import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  render() {
     console.log(this.props) 
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => <Stock stock={stock} addStock={this.props.addStock} type = {`stockcontainer`}/>)}
          {/* //render the list of stocks here */}
        </div>
    );
  }

}

export default StockContainer;
