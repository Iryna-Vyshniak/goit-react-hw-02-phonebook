import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;

  max-width: 100%;
  width: 600px;

  // box-shadow: -15px -15px 2px -5px #b1dfc1, -15px 15px 2px -5px #063a36,
  //   15px -15px 2px -5px #fff, 15px 15px 2px -5px #fff, -1px -1px 5px #b1dfc1,
  //   #fff 1px 1px 5px 5px;

  box-shadow: -1px -1px 15px #8ba793, 15px 15px 35px #fff;
`;
