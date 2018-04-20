import React from 'react';

export default class NewAccount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            AccountName: '', 
            Website: '', 
            UserId: '', 
            Password: ''
        };
    }

    handleSubmit() {
 
        if (this.isUserEntryValid() === false)
            return ;
     }

    handleAccountNameChange(e) {}

    handleWebsiteChange(e) {}

    handleUserIdChange(e) {}

    handlePasswordChange(e) {}

    isUserEntryValid() {
        
        return true;
     }
     render() {
         return(<form>
                     <div className="form-group">
                         <label htmlFor="accountName">Account Name</label>
                         <input type="text" className="form-control" id="accountName" placeholder="Account Name"
                                 onChange={this.handleAccountNameChange.bind(this)} />
                     </div>
                     <div className="form-group">
                         <label htmlFor="website">Website</label>
                         <input type="text" className="form-control" id="website" placeholder="Website" 
                                 onChange={this.handleWebsiteChange.bind(this)} />
                     </div>
                     <div className="form-group">
                         <label htmlFor="userid">User Id</label>
                         <input type="text" className="form-control" id="userid" placeholder="User Name"
                                 onChange={this.handleUserIdChange.bind(this)} />
                     </div>
                     <div className="form-group">
                         <label htmlFor="password">Password</label>
                         <input type="text" className="form-control" id="password" placeholder="Password Name"
                                  onChange={this.handlePasswordChange.bind(this)} />
                     </div>
                     <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit</button>
                </form>);
    }
}
