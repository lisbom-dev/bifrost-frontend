import styled from 'styled-components';
import { darken } from 'polished';

export const AppBar = styled.div`
  display: flex;
  background: #f8f8f8;
  align-items: center;
  padding: 1rem;

  svg {
    color: #00867d;

    width: 3rem;
    height: 3rem;
  }
`;

export const Header = styled.div.attrs({ id: 'header' })`
  display: flex;
  width: 100%;
  height: 22.4rem;

  padding: 0.8rem;

  .headerInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;

    h1 {
      font-family: 'Roboto';
      font-size: 1.6rem;
      color: #f8f8f8;
    }

    .headerDate {
      span {
        font-family: 'Roboto';
        font-size: 1rem;
        color: #f8f8f8;

        display: flex;
        align-items: center;

        svg {
          margin: 0 1rem;
        }
      }
    }
  }
`;

export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;

  padding: 0.8rem;

  background: #f8f8f8;

  span {
    font-family: 'Roboto';
    font-size: 1.2rem;
    text-align: justify;

    color: #00423d;

    width: 100%;
  }
`;

export const EntriesList = styled.ul`
  padding: 1rem;
`;