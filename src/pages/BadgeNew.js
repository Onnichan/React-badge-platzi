import React from 'react';

import '../components/styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
  state = {
    form : {
      firstName: '',
      lastName: '',
      jobTitle: '',
      twitter: '',
      email: ''
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render(){

    return (
      <React.Fragment>
        {/* <Navbar></Navbar> */}
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt=""/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} email={this.state.form.email}></Badge>
            </div>
            <div className="col">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}></BadgeForm>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew