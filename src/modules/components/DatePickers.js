import React, { PropTypes, Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

import DatePicker from 'react-native-datepicker';

class DatePickers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            time: '20:00',
            datetime: '2016-05-05 20:00',
            datetime1: '2016-05-05 20:00'
        }
    }
    
    render() {
        var timeMin = new Date();
        var timeMax = new Date();
        timeMin.setTime(timeMin.getTime() + 30*60*1000);
        timeMax.setTime(timeMax.getTime() + 1440*365*60*1000);

        const setTimeMin = new Date(timeMin.getTime());
        const setTimeMax = new Date(timeMax.getTime());
  
        return (
            <DatePicker
                style={{width: 200, marginLeft: 20, backgroundColor: 'white' }}
                date={ this.props.datePicker }
                minDate={ setTimeMin}
                maxDate={ setTimeMax }
                mode="datetime"
                format="YYYY/MM/DD HH:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                }}
                minuteInterval={10}
                onDateChange={this.props.valueChange}
            />
        );
    }
}

DatePicker.PropTypes = {
    valueChange: PropTypes.object.isRequired,
    datePicker: PropTypes.object.isRequired
}


export default DatePickers;