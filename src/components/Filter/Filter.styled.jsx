import styled from 'styled-components';

export const LabelDescr = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const Input = styled.input`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;
  width: 300px;

  border: 0;
  outline: 0;
  border-radius: 8px;
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.primary};
  box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;

  font-style: italic;

  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.s};
`;
