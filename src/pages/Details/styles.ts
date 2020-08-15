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
  padding: 20px 30px;
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

    h3 {
      font-size: 24px;
      color: ${({ theme }) => theme.color.tertiary};
      font-weight: bold;
      margin-left: 10px;
    }
  }

  > ul {
    list-style: none;
    margin-top: 40px;

    li {
      display: flex;
      align-items: center;

      & + li {
        margin-top: 18px;
      }
    }

    span {
      margin-left: 12px;
      font-size: 18px;
      color: ${({ theme }) => theme.color.secondary};
    }

    strong {
      margin-left: 8px;
      font-size: 18px;
      color: ${({ theme }) => theme.color.tertiary};
      font-weight: bold;
    }
  }

  @media screen and (max-width: 360px) {
    min-width: auto;
  }
`;
