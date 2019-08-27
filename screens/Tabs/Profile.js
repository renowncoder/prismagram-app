import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import { ScrollView } from 'react-native';
import { USER_FRAGMENT } from '../../fragments';
import Loader from '../../components/Loader';
import UserProfile from '../../components/UserProfile';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ME = gql`
  {
    me {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const { loading, data } = useQuery(ME);
  return (
    <ScrollView>
      {loading ? <Loader /> : data && data.me && <UserProfile {...data.me} />}
    </ScrollView>
  );
};
