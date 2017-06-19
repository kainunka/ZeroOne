import React, { PropTypes, Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { Grid, Col, Row, Icon } from 'react-native-elements';

class DataActivity extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { text, view, r2, c3, image } = styles;
        const { actImage, actSubject, actContent, actExpire, 
                timeEvent, deleteEvent, shareEvent
        } = this.props;

        return (
          <View style={view}>
            <Grid>
                <Row>
                    <Col>
                        <Image
                            source={ actImage }
                            style={image}
                        />
                    </Col>
                    <Col>
                        <Row>
                            <Col><Text style={text}>{ actSubject }</Text></Col>
                        </Row>
                        <Row>
                            <Col><Text style={text}>{ actContent }</Text></Col>
                        </Row>
                        <Row>
                            <Col><Text style={text}>{ actExpire }</Text></Col>
                        </Row>
                        <Row>
                            <Col>
                                <TouchableOpacity
                                    onPress={ timeEvent }
                                >
                                <Icon
                                    name='clock'
                                    type='material-community'
                                    color='#ffc80b' />
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity
                                    onPress={ deleteEvent }
                                >
                                <Icon
                                    name='delete'
                                    type='material-community'
                                    color='#ffc80b' />
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity
                                    onPress={ shareEvent }
                                >
                                <Icon
                                    name='share'
                                    color='#ffc80b' />
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <View style={view}>
                                    <Text style={text}>R1 C2</Text>
                                </View>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={r2}>
                    <Col style={c3}>
                        <TouchableOpacity>
                        <Icon
                            name='eye-off'
                            type='material-community'
                            color='#ffc80b' />
                        </TouchableOpacity>
                    </Col>
                    <Col style={c3}>
                        <TouchableOpacity>
                        <Icon
                            name='access-point'
                            type='material-community'
                            color='#ffc80b' />
                        </TouchableOpacity>
                    </Col>
                    <Col style={c3}>
                        <TouchableOpacity>
                        <Icon
                            name='lock-open'
                            type='material-community'
                            color='#ffc80b' />
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Grid>
          </View>
        );
    }
}

DataActivity.PropTypes = {
    actImage: PropTypes.object,
    actSubject: PropTypes.object,
    actContent: PropTypes.object,
    actExpire: PropTypes.object,
    timeEvent: PropTypes.object,
    deleteEvent: PropTypes.object,
    shareEvent: PropTypes.object
}

const styles = StyleSheet.create({
    view: {
        height: null,
        flexDirection: 'row',
        margin: 15,
        marginBottom: 2,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ffc80b',
    },
    text: {
        fontSize: 14,
        padding: 15,
        textAlign: 'left',
        color: '#ffc80b',
        fontWeight: 'bold'
    },
    r2: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    c3: {
        padding: 20
    },
    image: {
        width: null,
        height: 200
    }

});

export default DataActivity;