import React, {Component} from 'react';
import TimeSlot3 from '../screens/TimeSlot3';

class TimeSlot3Screen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });
  render() {
    const {navigate} = this.props.navigation;
    return <TimeSlot3 navigate={navigate} />;
  }
}

export default TimeSlot3Screen;
