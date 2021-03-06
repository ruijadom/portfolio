import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem 0;
`

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  border-radius: 0.5rem;
  cursor: pointer;

  h3 {
    color: #ddd;
    font-weight: 500;
    margin-bottom: 0px;
  }

  p {
    color: #707070;
    margin-bottom: 0px;
  }
`

export const Content = styled.div`
  padding: 0rem 0;
`
