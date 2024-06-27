/**
 * 메인페이지 부분 서버 사이드 코드를 여기서 실행시킨다.
 * 요구사항 정의
 */
import { DocContainer, Main } from './styled';
import Header from '@app/layout/header/Header';
import Footer from '@app/layout/footer/Footer';

export default function MainPage() {
  return (
    <DocContainer>
      <Header />
      <Main></Main>
      <Footer />
    </DocContainer>
  );
}
