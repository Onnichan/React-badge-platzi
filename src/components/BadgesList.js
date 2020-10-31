import React from 'react';

import avatar from '../images/dante.jpg';
import '../components/styles/BadgesList.css';

class BadgesList extends React.Component{

  render(){

    return(
      <ul className="list-unstyled">
        {this.props.badges.map( badge => {
          return (
            <li key={badge.id} className="list__badge">
              <img src={avatar} alt=""/>
              <div className="content__list-info">
                <span>{`${badge.firstName} ${badge.lastName}`}</span>
                <span>{badge.twitter}</span>
                <span>{badge.jobTitle}</span>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList