import styled, { css } from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media ${({ theme }) => theme.media.maxMobile} {
    padding-top: 1rem;
    padding-bottom: 2rem;
    flex-direction: column;
  }

  ${({ subpage }) =>
    subpage &&
    css`
      border-bottom: solid 2px #d8d8d8;
      padding-left: ${({ theme }) => theme.padding};
      padding-right: ${({ theme }) => theme.padding};
      margin-bottom: 10rem;

      @media ${({ theme }) => theme.media.maxMobile} {
        border-width: 1px;
        margin-bottom: 5rem;
        padding-left: ${({ theme }) => theme.paddingMobile};
        padding-right: ${({ theme }) => theme.paddingMobile};
      }
    `}
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.media.maxMobile} {
    justify-content: flex-start;
    margin-top: 1rem;
  }
`;

export const MenuItem = styled.a`
  display: inline-block;
  margin-right: 2.5rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.textLight};
  transition: color 0.3s ease-in-out;
  font-weight: ${({ theme }) => theme.light};

  @media ${({ theme }) => theme.media.maxMobile} {
    margin-right: 1.5rem;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.extra};
  }
`;

export const StyledButton = styled(Button)`
  @media ${({ theme }) => theme.media.maxMobile} {
    margin-top: 2rem;
    width: 100%;
  }
`;
