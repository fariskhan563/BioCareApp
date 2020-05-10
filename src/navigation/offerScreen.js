import React, {Component} from 'react';
import Offers from '../screens/Offer';

class OfferScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });
  render() {
    const {navigate} = this.props.navigation;
    return <Offers navigate={navigate} />;
  }
}

export default OfferScreen;
