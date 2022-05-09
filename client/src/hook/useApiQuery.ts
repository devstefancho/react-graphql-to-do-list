import axios from 'axios';
import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';

const HELLO_WORLD = gql`
  query HelloWorld {
    hello
  }
`;

export const useApiQuery = (gqlKey: string, variables: any) => {
  const { loading, error, data } = useQuery(HELLO_WORLD);
  console.log('data', data);
  return { loading, error, data };
};
