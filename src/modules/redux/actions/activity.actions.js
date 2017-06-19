import * as types from '../../constants/actionTypes';

import Firestack from 'react-native-firestack';
import axios from 'axios';
import moment from 'moment';

export const showModalSuccess = (data) => {
    return {
        type: types.SHOW_MODAL,
        showModal: data
    }
}

export const showModal = (boolean) => {
    return (dispatch) => {
        return dispatch(
            showModalSuccess(boolean)
        );
    }
}

export const backgroundActivitySuccess = (data) => {
    return {
        type: types.BACKGROUND_ACTIVITY,
        backgroundActivity: data
    }
}

export const backgroundActivity = (text) => {
    return (dispatch) => {
        return dispatch(
            backgroundActivitySuccess(text)
        )
    }
}


export const activityUpdates = ({prop, value}) => {
    return {
        type: types.ACTIVITY_UPDATE,
        payload: {
            prop,
            value
        }
    }
     
}

export const dataActivitySuccess = (data) => {
    return {
        type: types.FEED_DATA_ACTIVITY,
        dataActivity: data.val()
    }
}

export const dataActivity = (uid) => {
    const FirebaseStack = new Firestack();
    const feeds = FirebaseStack.database.ref(`/users/${uid}/activity`);
    return (dispatch) => {
           return feeds.on('value', snapshot => {
            dispatch(dataActivitySuccess(snapshot))
            })
    }
}


export const checkDataActivitySuccess = (data) => {
    return {
        type: types.CHECK_DATA_ACTIVITY,
        checkDataActivity: data
    }
}

export const checkDataActivity = (data) => {
    return (dispatch) => {
        return dispatch(
            checkDataActivitySuccess(data)
        )
    }
}

export const deleteActivity = (facebookID, userID, inviteID) => {

    return (dispatch) => {
        return axios.post('https://stage.listmyspot.com/Activity/CreatorSendDeleteMyInvite?callback=JSON_CALLBACK&facebookID='
                    + facebookID + 
                    "&userID="
                    + userID +
                    "&inviteID="
                    + inviteID
                )
                .then(delDB => {
                    
                    dispatch({
                        type: types.DELETE_ACTIVITY
                    })
                    console.log("result: " + JSON.stringify(delDB));
                 }).catch(err => {
                    alert("err: " +  JSON.stringify(error));
                 });
    }
}

export const diffTimeSuccess = (s) => {
    return {
        type: types.DIFF_TIME,
        s 
    }
}

export const diffTime = (s) => {
    return (dispatch) => {
        return dispatch(
            diffTimeSuccess(s)
        )
    }
}

export const showActivitySuccess = (data) => {
    return {
        type: types.ACTIVITY_SHOW,
        showActivity: data
    }
}

export const showActivity = (facebookID, userID) => {
    return (dispatch) => {
        return  fetch(`https://stage.listmyspot.com/Activity/GetMyInvite?facebookID=${facebookID}&userID=${userID}&inviteID=0&callback=call`)
                .then(res => {
                    return res._bodyInit;
                }).then((data) => {
                    var d = data.slice(5, -2);
                    var y = JSON.parse(d);
                    dispatch(
                     showActivitySuccess(y)
                    )
                }).catch(err => {
                    console.log('Error: ' + err);
                });
    }
}

export const activityCreate = (uid, fbID, imageUpload, { subject, content, dateTimePicker, donate }) => {
   
   const FirebaseStack = new Firestack();
   const createAct = FirebaseStack.database.ref(`/users/${uid}/activity`);
   var date = new Date().getTime();

   return (dispatch) => {
       if (imageUpload != 5) {
            FirebaseStack.storage.uploadFile(`photos/${uid}/${date}`, imageUpload.uri, {
            contentType: 'image/jpeg',
            contentEncoding: 'base64',
            }, (evt) => {
                console.log('Got an event in JS', evt);
            }).then((res) => {
                

                createAct.push({
                subject,
                content,
                dateTimePicker: new Date(dateTimePicker).getTime(),
                donate,
                imageUrl: res.downloadUrl
                 }).then((r) => {
                 console.log('result from upload file: ', JSON.stringify(res));
                    createAct.child(r.key).set({
                        _key: r.key,
                        subject,
                        content,
                        dateTimePicker: new Date(dateTimePicker).getTime(),
                        donate,
                        imageName: res.name,
                        imageUrl: res.downloadUrl
                    })
                    dispatch({
                        type: types.ACTIVITY_CREATE
                    })
                    console.log("Activity Create Success = " + res);
                }).catch((err) => {
                    alert('Please Connect Internet');
                })

                
            }).catch((err) => {
                    alert('Error appened with uploadFire', err);
            });
       } else {
            console.log("uuuid = " + uid);
            console.log("ffid = " + fbID);
            axios.post('https://stage.listmyspot.com/Activity/CreateUserActivity?callback=JSON_CALLBACK&userID=' 
                        + uid + 
                        "&facebookID=" 
                        + fbID + 
                        "&header=" 
                        + subject + 
                        "&description="
                         + content + 
                         "&timeLimit=0&location=" 
                         + '18.8427834,99.0114548' + 
                         '&usePaid=false&donation=' 
                         + donate + 
                         '&day=' 
                         + moment(dateTimePicker).format('DD') + 
                         '&month=' 
                         + moment(dateTimePicker).format('MM') + 
                         '&year=' 
                         + moment(dateTimePicker).format('YYYY') + 
                         '&atTime=' 
                         + moment(dateTimePicker).format('HH:mm') + 
                          '&gmt=' 
                          + 7 + 
                          '&photoID=' 
                          + 'undefined' + 
                          '&isPrivate=' + 
                          true)
            .then(function (response) {
                
                dispatch({
                    type: types.ACTIVITY_CREATE
                })
                console.log(JSON.stringify(response));
            })
            .catch(function (error) {
                alert(JSON.stringify(error));
            });
       }

   }

}
