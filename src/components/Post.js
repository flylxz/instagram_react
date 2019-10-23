import React from 'react';
import User from './User';

export default class Post extends React.Component {
  render() {
    return (
      <div className='post'>
        <User
          src='https://i1.wp.com/cdn.thedailymash.co.uk/wp-content/uploads/20190914140636/handbar.jpg?ssl=1'
          alt='man'
          name='Scott'
          min
        />
        <img src={this.props.src} alt={this.props.alt} />
        <div className='post__name'>some account</div>
        <div className='post__descr'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque
          eos at! Ex, officia sapiente. Eos nihil voluptate nobis tenetur.
        </div>
      </div>
    );
  }
}
