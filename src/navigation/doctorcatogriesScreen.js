import React, {Component} from 'react';
import DoctorCat from '../screens/DoctorCatagories';

class DoctorCatagoriesScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });
  render() {
    const {navigate} = this.props.navigation;
    return <DoctorCat navigate={navigate} />;
  }
}

export default DoctorCatagoriesScreen;
