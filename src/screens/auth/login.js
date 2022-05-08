import React, {useState} from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Colors, Typography } from '../../styles';
import AuthContext from '../../context/AuthContext';

import Button from '../../components/Button';

const Login = ({navigation}) => {
    const {authContext} = React.useContext(AuthContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Login
    const __login = () => {
        if (firstName != '' && lastName != '') {
            const user = {
                firstName: firstName,
                lastName: lastName,
                joined: new Date()
            }
            authContext.signIn(user);
        }
        else {
            Alert.alert('Sorry !', 'Please, enter valid informations.');
        }
    }

    return (
        <View style={styles.container}>
            {/* Body */}
            <View style={styles.bodyContainer} >
                <View style={styles.rowContainer}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.goBack()} >
                            <Icon name="arrow-left" color={Colors.WHITE} size={25} />
                    </TouchableOpacity>
                    <Text style={[Typography.H1, {marginLeft: 10, color: Colors.WHITE}]}>Login</Text>
                </View>

                {/* Firstname */}
                <View style={{marginTop: 20}}>
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_DARK}]}>Firstname</Text>
                    <TextInput
                        value={firstName}
                        placeholder='Exp: John'
                        keyboardType='name-phone-pad'
                        onChangeText={(text) => setFirstName(text)}
                        style={[styles.input, Typography.BODY]}
                        placeholderTextColor={Colors.GRAY_MEDIUM} />
                </View>

                {/* Lastname */}
                <View style={{marginTop: 20}}>
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_DARK}]}>Lastname</Text>
                    <TextInput
                        value={lastName}
                        placeholder='Exp: Doe'
                        keyboardType='name-phone-pad'
                        onChangeText={(text) => setLastName(text)}
                        style={[styles.input, Typography.BODY]}
                        placeholderTextColor={Colors.GRAY_MEDIUM} />
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
                <Button 
                    title='Login'
                    onPress={() => __login()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    // Body
    bodyContainer: {
        flex: 1,
        padding: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        color: Colors.WHITE,
        backgroundColor: Colors.LIGHT_BLACK
    },
    // Footer
    footerContainer: {
        padding: 20,
    },
});
 
export default Login;
 