import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  > h3 {
    margin-top: 45px;
    color: ${({ theme }) => theme.color.secondary};
    font-size: 26px;
    font-weight: bold;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 35px 0 25px 0;
  width: fit-content;
  width: 100%;
  max-width: 420px;
  border-radius: 8px;
  background: ${({ theme }) => lighten(0.055, theme.color.primary)};

  > svg {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;

    transition: transform 250ms;
    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(1);
    }
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    > h3 {
      font-size: 24px;
      color: ${({ theme }) => theme.color.tertiary};
      font-weight: bold;
      margin-top: 12px;
      text-align: center;
      padding: 0 10px;
    }

    > img {
      width: 120px;
      border-radius: 6px;
    }
  }

  > ul {
    list-style: none;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-row-gap: 30px;

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    span {
      font-size: 18px;
      color: ${({ theme }) => theme.color.secondary};
    }

    strong {
      line-height: 1;
      font-size: 18px;
      color: ${({ theme }) => theme.color.tertiary};
      font-weight: bold;
      text-align: center;
    }
  }
`;

export const CardsGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  width: 100%;
`;
