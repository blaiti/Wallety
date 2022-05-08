import React from 'react';
import {
    View
} from 'react-native';

const Button = (props) => {
    return (
        <View style={{backgroundColor: props.color, padding: props.padding}} />
    );
};
 
export default Button;
 