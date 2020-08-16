import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 35px 0 25px 0;
  width: fit-content;
  min-width: 320px;
  border-radius: 8px;
  background: ${({ theme }) => lighten(0.055, theme.color.primary)};

  > span {
    margin-top: 30px;
    width: 180px;
    height: 120px;
    align-self: center;
    background: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

    h3 {
      font-size: 24px;
      color: ${({ theme }) => theme.color.tertiary};
      font-weight: bold;
      margin-top: 12px;
    }
  }

  > ul {
    list-style: none;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-row-gap: 20px;

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
    }
  }

  @media screen and (max-width: 360px) {
    min-width: 100%;
  }
`;
