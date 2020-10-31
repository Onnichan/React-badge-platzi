import React from 'react';

class BadgeForm extends React.Component{

  constructor(props){

    super(props);

    // this.state = {
      
    // }
  }

  // handleChange = (e) =>{

  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleClick = (e) =>{
    console.log('Fue clickeado');
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    // console.log('Fue clickeado');
  }

  render(){
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input className="form-control" type="text" name="firstName" onChange={this.props.onChange} value={this.props.formValues.firstName}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input className="form-control" type="text" name="lastName" onChange={this.props.onChange} value={this.props.formValues.lastName}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input className="form-control" type="text" name="email" onChange={this.props.onChange} value={this.props.formValues.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input className="form-control" type="text" name="jobTitle" onChange={this.props.onChange} value={this.props.formValues.jobTitle}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input className="form-control" type="text" name="twitter" onChange={this.props.onChange} value={this.props.formValues.twitter}/>
          </div>
          <button className="btn btn-outline-primary" onClick={this.handleClick}>Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm