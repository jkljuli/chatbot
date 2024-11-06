import styled from "styled-components";
import colors from "../utils/colorPalette.js";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0px 20px 0px;
`;

const InputField = styled.textarea`
  padding: 10px;
  margin: 0 10px 0;
  width: 300px;
  border: 2px solid ${colors.accentColor};
  border-radius: 18px;
  font-size: 12px;
  &:focus {
    outline: none;
    border-color: ${colors.accentColor};
  }
`;

export {FormContainer, InputField};