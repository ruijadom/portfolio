import styled from 'styled-components'

export const Card = styled.div`
  padding: 15px;
  background: #2b2b2b;
  height: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    background: #383838;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`
