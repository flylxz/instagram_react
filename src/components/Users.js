import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className='right'>
      <User
        src='https://i1.wp.com/cdn.thedailymash.co.uk/wp-content/uploads/20190914140636/handbar.jpg?ssl=1'
        alt='man'
        name='Scott'
      />
      <div className='users__block'>
        <User
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVACpJuKl8IUTNld5REYMj0Pl2BuajeSBHQMV9aifJJtD6ZMu'
          alt='man'
          name='Jim'
          min
        />
        <User
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunCuVYKQxidX0Hz2xMnAYIOgMn9z29y-fwnJnH1XM98ksYdQj'
          alt='man'
          name='Ben'
          min
        />
        <User
          src='https://cdn.images.express.co.uk/img/dynamic/67/590x/Manchester-United-legend-Rio-Ferdinand-1181299.jpg?r=1569175503344'
          alt='man'
          name='Bill'
          min
        />
        <User
          src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/15/10/iron-man-deleted-scene-samuel-l-jackson.png'
          alt='man'
          name='Evan'
          min
        />
      </div>
    </div>
  );
}
