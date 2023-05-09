import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

export default function TextArea({ name, placeholder, onChange }: InputProps) {
  return (
    <StyledContainer>
      <Label htmlFor={name}>{name}</Label>
      <StyledTextArea
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={onChange}
      />
    </StyledContainer>
  )
}
