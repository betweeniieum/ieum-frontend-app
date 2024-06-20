import { FC, PropsWithChildren } from 'react';
import { DocHeader } from './styled';

const Header: FC<PropsWithChildren> = (props) => {
  return <DocHeader>헤더 영역입니다.</DocHeader>;
};

export default Header;
