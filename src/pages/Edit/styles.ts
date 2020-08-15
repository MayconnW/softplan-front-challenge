import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 30px;
  width: 100%;
  max-width: 500px;
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

  > div {
    display: flex;
    align-items: center;
    position: relative;

    > svg {
      position: absolute;
      bottom: -13px;
      right: -22px;
      cursor: pointer;

      @keyframes wave {
        0% {
          transform: rotate(0);
        }
        33% {
          transform: rotate(40deg);
        }
        66% {
          transform: rotate(-40deg);
        }
        100% {
          transform: rotate(0);
        }
      }

      &:hover {
        animation: wave 300ms ease;
      }
    }
  }

  > form {
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: column;

    > div + div {
      margin-top: 12px;
    }

    > button {
      margin-top: 40px;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 20px 10px;
  }
`;
