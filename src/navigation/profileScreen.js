import React, {Component} from 'react';
import Profile from '../screens/Profile';

class ProfileScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });
  render() {
    const {navigate} = this.props.navigation;
    return <Profile navigate={navigate} />;
  }
}

export default ProfileScreen;
