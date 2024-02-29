import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  height: 2.5rem;
  transition: all 0.2s ease-in-out;

  &:disabled {
    background-color: lightgray;
    color: black;
    cursor: not-allowed;
  }
`

export const SecBtn = styled(Button)`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  display: flex;
  font-size: ${props => props.theme.fontSizes.medium};
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.colors.darkSecondary};
  }

  &:disabled {
    background-color: lightgray;
  }
`