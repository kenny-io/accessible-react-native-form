import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Dialog from 'react-native-dialog';

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [focus, setFocus] = useState('');
  const [focusOnEmail, setFocusOnEmail] = useState('');
  const [focusOnAge, setFocusOnAge] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  if (!isVisible)
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center', flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.formheader}>Sample Form</Text>
          <TextInput
            accessible={true}
            placeholder="Enter Name"
            value={name}
            onChangeText={name => setName(name)}
            accessibilityLabel={'enter your name please'}
            onSubmitEditing={() => focusOnEmail.focus()}
            style={styles.textInput}></TextInput>
          <TextInput
            accessible={true}
            placeholder="Enter Email"
            value={email}
            onChangeText={email => setEmail(email)}
            accessibilityLabel={'enter your email please'}
            ref={input => {
              setFocusOnEmail(input);
            }}
            onSubmitEditing={() => focusOnAge.focus()}
            style={styles.textInput}></TextInput>
          <TextInput
            accessible={true}
            accessibilityLabel={'enter your age please'}
            value={age}
            onChangeText={age => setAge(age)}
            style={styles.textInput}
            placeholder="Enter Age"
            ref={input => {
              setFocusOnAge(input);
            }}
            onSubmitEditing={() => focus.focus()}></TextInput>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={'Click to submit form'}
            autoFocus={true}
            ref={input => {
              setFocus(input);
            }}
            style={styles.button}>
            <Text
              accessible={true}
              onPress={() => setIsVisible(true)}
              style={styles.btnText}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  else
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <Dialog.Container visible={isVisible}>
            <Dialog.Title>Register Details</Dialog.Title>
            <Dialog.Description>
              Do you want to submit these details? You cannot undo this action.
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={() => setIsVisible(false)} />
            <Dialog.Button label="Submit" onPress={() => setIsVisible(false)} />
          </Dialog.Container>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 100,
    // flex: 1,
    // alignSelf: 'stretch',
  },
  textInput: {
    height: 40,
    marginBottom: 30,
    color: '#300000',
    borderBottomColor: '#300000',
    borderBottomWidth: 1,
  },

  formheader: {
    fontSize: 24,
    // color: '#300000',
    color: '#00aa55',
    maxWidth: '100%',
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#300000',
    padding: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Form;
