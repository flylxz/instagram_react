import React from 'react';
import User from './User';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';

export default class Users extends React.Component {
  InstaService = new InstaService();
  state = {
    users: [],
    error: false
  };

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this.InstaService.getAllUsers()
      .then(this.onUsersLoaded)
      .catch(this.onError);
  }

  onUsersLoaded = users => {
    this.setState({ users, error: false });
  };

  onError = () => {
    this.setState({ error: true });
  };

  renderUsers(arr) {
    return arr.map(user => {
      const { photo, alt, altname, id } = user;
      console.log(user);
      return (
        <div key={id} className='users'>
          <User src={photo} alt={alt} name={altname} min />
        </div>
      );
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    const user = this.renderUsers(users);

    return <div className='right'>{user}</div>;
  }
}
