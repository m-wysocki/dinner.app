import styled, { css } from 'styled-components';

const Heading = styled.h2`
  line-height: 1.3;
  font-size: 4.2rem;
  font-weight: ${({ theme }) => theme.bold};
  position: relative;
  margin-bottom: ${({ mb }) => mb || '4rem'};

  @media ${({ theme }) => theme.media.maxMobile} {
    margin-bottom: 2rem;
  }
  
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -1rem;
    width: 6rem;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text};
  }
  
  ${({ thin }) =>
    thin &&
    css`
      font-weight: ${({ theme }) => theme.thin};
      text-transform: lowercase;
      text-align: center;
      font-size: 6rem;
      margin-bottom: ${({ mb }) => mb || '5rem'};
      &:after {
        display: none;
      }

      @media ${({ theme }) => theme.media.maxMobile} {
        font-size: 3rem;
      }
    `}

  ${({ big }) =>
    big &&
    css`
      font-size: 4.8rem;

      @media ${({ theme }) => theme.media.maxMobile} {
        font-size: 3rem;
      }
    `}
  ${({ small }) =>
    small &&
    css`
      font-size: 2.8rem;

      @media ${({ theme }) => theme.media.maxMobile} {
        font-size: 2rem;
      }
    `}
`;

export default Heading;
