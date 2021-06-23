import React from 'react';
import { Spinner9 } from '@styled-icons/icomoon/Spinner9';
import styled from 'styled-components';

const Spinner = styled(Spinner9)`
  width: 70px;
`;
export const Loading = () => {

  return (
    <div className='relative min-h-screen text-center text-indigo-500'>
      <span className='absolute bottom-2/4 animate-spin'>
      <Spinner />
      </span>
    </div>
  );
};
