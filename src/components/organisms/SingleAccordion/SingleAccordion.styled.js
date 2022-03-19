import styled, { css } from 'styled-components';

const arrowSize = '6px';

export const Wrapper = styled.div`
  ${({ isOpen }) =>
    isOpen &&
    css`
      margin-bottom: 10rem;

      @media ${({ theme }) => theme.media.maxMobile} {
        margin-bottom: 5rem;
      }
    `}
`;

export const Header = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textLight};

  &:after {
    display: none;
  }
`;

export const Arrow = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 ${arrowSize} ${arrowSize} ${arrowSize};
  border-radius: 3px;
  border-color: transparent transparent ${({ theme }) => theme.colors.textLight} transparent;
  margin-left: 1rem;

  ${({ isOpen }) =>
    isOpen &&
    css`
      border-width: ${arrowSize} ${arrowSize} 0 ${arrowSize};
      border-color: ${({ theme }) => theme.colors.textLight} transparent transparent transparent;
    `}
`;
