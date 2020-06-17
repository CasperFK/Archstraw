import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 80vh;
  padding-bottom: 50px;
  @media (min-width: 1024px) {
    width: 60vw;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  padding: 15px 0;
`;

export const Features = styled.ul`
  border-top: 1px solid black;
  margin: 0 20px;
  text-align: center;
  list-style: none;
  padding: 5px;
  font-size: 20px;
`;

export const ListItem = styled.li`
  text-align: left;
  font-weight: 300;
  padding: 5px;
  font-size: 15px;
`;
export const Arrow = styled.div`
  left: calc(50% - 16px);
  position: absolute;
  top: 0px;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(50%, -50%) rotate(45deg);
  height: 16px;
  width: 16px;
  background-color: #f9f4f4;
`;

export const ArrowContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
