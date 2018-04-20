import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AccountList from './AccountList.js';
import NewAccount from './NewAccount.js';
import FilterAndAdd from './Filter.js';
import ModifyAccount from './ModifyAccount.js';

export default class ManageAccounts extends Component {
    constructor(props) {
        super(props);
        
        //Define the Initial State of the Application
        this.state = {
            ShowNewAccountUI : false,
            ShowModifyAccountUI: false,
            ShowAccountList : true,
            ShowFilterUI: true
        }
    }

    showNewAccountScreen() {
     
        this.setState({
            ShowNewAccountUI : true, 
            ShowAccountList: false,   
            ShowFilterUI: false
        })
   }
      
   showModifyAccountScreen() {
       
        this.setState({
            ShowModifyAccountUI : true,
            ShowAccountList : false, 
            ShowFilterUI: false
        })
   }

   filterAccountList(filter) {
    alert(filter);
}

render() {
return(<div><h1>Manage All Accounts here</h1>
            {this.state.ShowFilterUI && <FilterAndAdd OnAdd={this.showNewAccountScreen.bind(this)} OnFilter={this.filterAccountList.bind(this)} />}               
            {this.state.ShowAccountList &&  <AccountList /> }   
            {this.state.ShowNewAccountUI && <NewAccount />} 
            {this.state.ShowModifyAccountUI && <ModifyAccount  />} 
    </div>);
    }
}