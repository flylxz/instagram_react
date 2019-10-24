import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className='container profile'>
      <User
        src='https://i1.wp.com/cdn.thedailymash.co.uk/wp-content/uploads/20190914140636/handbar.jpg?ssl=1'
        alt='man'
        name='Scott'
      />
      <Palette />
    </div>
  );
};

export default Profile;
