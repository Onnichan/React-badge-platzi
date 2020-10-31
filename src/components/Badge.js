import React from 'react';
import confLogo from '../images/doom.jpg';
import confAvatar from '../images/dante.jpg'
import './styles/Badge.css';

class Badge extends React.Component{


  render(){

    // const firstName = 'Richard';
    // const lastName = 'Perez';

    return(
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt=""/>
        </div>
        <div className='Badge__section-name'>
          <img className='Badge__avatar' src={confAvatar} alt=""/>
          <h1>{ this.props.firstName }<br/>{ this.props.lastName }</h1>
        </div>
        <div className='Badge__section-info'>
          <p>{ this.props.jobTitle }</p>
          <p>{`@ ${this.props.twitter}`}</p>
          <p>{`correo : ${this.props.email}`}</p>
        </div>
        <div className='Badge__footer'>
          #platziConf
        </div>
      </div>
    )
  }
}

export default Badge