import React from "react";
import MerchList from "./Merch/MerchList";
import NewMerchForm from "./Merch/NewMerchForm";

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterMerchList: [],
      visibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      visibleOnPage: !prevState.visibleOnPage
    }));
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({masterMerchList: newMasterMerchList, visibleOnPage: false});
  }

  // increaseQuantityState = () => {
  //   this.setState
  // }

  // decreaseQuantityState = () => { 
  //   this.setState
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.visibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />
      buttonText = "Return to Merch List";
    } else {
      currentlyVisibleState = <MerchList merchList={this.state.masterMerchList} />;
      buttonText = "Add Merch"; 
    }
    return (
      <React.Fragment>
        <div style={style1}>
          {currentlyVisibleState}
        </div>
        <div style={style2}>
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>  
    );
  }
  
}

const style1 = {

}

const style2 = {
  display: 'inlineBlock'
}

export default MerchControl;