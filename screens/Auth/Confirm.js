import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-apollo-hooks';
import { Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CONFIRM_SECRET } from './AuthQueries';
import { useLogIn } from '../../AuthContext';
import useInput from '../../hooks/useInput';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default ({ navigation }) => {
  const confirmInput = useInput('');
  const logIn = useLogIn();
  const [loading, setLoading] = useState(false);
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: navigation.getParam('email'),
      loginSecret: confirmInput.value
    }
  });

  const handleConfirm = async () => {
    const { value } = confirmInput;
    if (value === '' || !value.includes(' ')) {
      return Alert.alert('Invalid secret');
    }

    try {
      setLoading(true);
      const {
        data: { confirmSecret }
      } = await confirmSecretMutation();
      if (confirmSecret !== '' || confirmSecret !== false) {
        logIn(confirmSecret);
      } else {
        Alert.alert('Wrong secret!');
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Can't confirm secret");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...confirmInput}
          placeholder="Secret"
          returnKeyType="send"
          onSubmitEditing={handleConfirm}
          autoCorrect={false}
        />
        <AuthButton loading={loading} onPress={handleConfirm} text="Confirm" />
      </View>
    </TouchableWithoutFeedback>
  );
};
