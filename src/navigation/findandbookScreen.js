import React, {Component} from 'react';
import FindAndBook from '../screens/FindAndBook';

class FindAndBookScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });
  render() {
    const {navigate} = this.props.navigation;
    return <FindAndBook navigate={navigate} />;
  }
}

export default FindAndBookScreen;
