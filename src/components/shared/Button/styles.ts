import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.color.tertiary};
  border-radius: 8px;
  width: 100%;
  height: 56px;
  border: 0;
  padding: 0 16px;
  color: ${({ theme }) => theme.color.secondary};
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;

  background-position: center;
  transition: background 0.5s;
  will-change: background-color;
  &:hover {
    background: ${({ theme }) => shade(0.2, theme.color.tertiary)}
      radial-gradient(
        circle,
        transparent 1%,
        ${({ theme }) => shade(0.2, theme.color.tertiary)} 1%
      )
      center/15000%;
  }

  &:active {
    background-color: ${({ theme }) => lighten(0.1, theme.color.tertiary)};
    background-size: 100%;
    transition: background 0s;
  }

  ._loading {
    svg {
      fill: ${({ theme }) => theme.color.secondary};
    }
  }

  &:disabled {
    opacity: 0.8;
    background: ${({ theme }) => shade(0.2, theme.color.tertiary)};
    cursor: not-allowed;
    > * {
      pointer-events: none;
    }
  }
`;
