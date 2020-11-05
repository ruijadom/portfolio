import styled from 'styled-components'

export const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`

export const SkillsWrapper = styled.div`
  padding: 0 0 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  margin: 0px auto;
  text-align: center;
  flex: 1;
  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #ddd;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`

export const DetailSkill = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Badge = styled.div`
  padding: 5px;
  margin: 5px auto;
  text-align: center;
  background: #212121;
  border-radius: 10px;
  width: 100px;
`

export const Thumbnail = styled.div`
  flex: 3;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`
