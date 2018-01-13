import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    let businesses = this.props.businesses.map(bus => {
      return <Business key={bus.id} business={bus} />;
    });

    return(
      <div className='BusinessList'>
        {businesses}
      </div>
    );
  }
}

export default BusinessList;
