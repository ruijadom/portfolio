import styled from 'styled-components';
import overlayIllustration from 'assets/photo.png';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  margin: 0px auto; 
  text-align: center; 
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #DDD;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  text-align: center;
  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;
