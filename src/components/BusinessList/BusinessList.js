import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return(
      <div className='BusinessList'>
        {this.props.businesses.forEach(bus => {
          return <Business key={bus.id} business={bus} />;
        })}
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

export default BusinessList;
