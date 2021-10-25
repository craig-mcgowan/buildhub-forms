import styled from "styled-components";
const submitColor = "#0066ff";

const SubmitButton = styled.button`
  border-radius: 3px;
  border: 2px solid  ${submitColor};
  background-color: ${submitColor};
  color: white;

`

const FormField = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  &:hover {
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 2px 0px 3px ${submitColor}, 0px 2px 3px ${submitColor},
      -2px 0px 3px ${submitColor}, 0px -2px 3px ${submitColor};
  }
`;



export { SubmitButton, FormField }
