'use client';

import { FC, PropsWithChildren } from 'react';
import { DocHeader } from './styled';

const Header: FC<PropsWithChildren> = (props) => {
  return (
    <DocHeader>
      <h1>메인페이지</h1>
      <span>헤더 영역입니다.</span>
    </DocHeader>
  );
};

export default Header;
