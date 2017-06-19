import { ListView } from 'react-native';
var time = new Date();
time.setTime(time.getTime() + 120*60*1000);
const setTime = new Date(time.getTime());

export default { 
    start: {
        dataMenuHome: {},
        checkLanguage: 'en',
        checkAuth: true,
        userProfile: {},
        dataUser: {},
        loading: false,
        fbToken: ''
    },

    activity: {
        showModal: true,
        backgroundActivity: require('../img/bg-home.jpg') ,
        subject: '',
        content: '',
        dateTimePicker: setTime,
        donate: '0',
        dataActivity: {},
        showActivity: {},
        checkDataActivity: null,
        d: '',
        h: '',
        m: '',
        s: '',
        
    },

    mapview: {
        activities: {},
        cards: {},
        all: {},
        promotions: {},
        items: {}
    }
}