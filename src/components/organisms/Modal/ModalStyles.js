import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background: #f8f9fa;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
  width: 50%;
  margin: 0 auto;
  height: auto;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;
export const CloseButton = styled.a`
  align-self: flex-end;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  background-color: #af2626;
  border-radius: 100%;
  box-shadow: 0.5px 3px 4px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  :hover {
    background-color: #e42323;
  }
  svg path {
    stroke: #fff;
  }
`;
