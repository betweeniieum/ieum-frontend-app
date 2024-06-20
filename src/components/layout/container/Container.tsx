'use client';

import { FC, PropsWithChildren } from 'react';
import { DocContainer } from './styled';
import Header from '@components/layout/header/Header';
import Footer from '@components/layout/footer/Footer';

export const Container: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <DocContainer>
      <Header />
      {children}
      <Footer />
    </DocContainer>
  );
};
