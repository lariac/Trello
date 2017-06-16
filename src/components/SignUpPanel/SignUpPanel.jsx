import React from 'react';


class SignUpPanel extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h1>Sign Up!!</h1>
          <div className="form-group">
            <label className="control-label">UserName</label>
            <input className="form-control" nam="username" type="text"/>
          </div>
            <div className="form-group">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    )
  };
}

export default SignUpPanel;
