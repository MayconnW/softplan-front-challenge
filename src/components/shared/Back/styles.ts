import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 120px;
    cursor: pointer;

    > span {
      font-size: 24px;
      color: ${({ theme }) => theme.color.tertiary};
      margin-left: 8px;
    }

    > svg {
      color: ${({ theme }) => theme.color.tertiary};
    }

    @keyframes move {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-4px);
      }
    }

    &:hover {
      > svg {
        animation: move 250ms ease infinite alternate;
      }
    }
  }
`;
