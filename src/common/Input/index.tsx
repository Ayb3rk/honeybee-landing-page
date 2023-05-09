import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

export default function Input({ name, placeholder, onChange }: InputProps) {
  return (
    <Container>
      <Label htmlFor={name}>{name}</Label>
      <StyledInput
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={onChange}
      />
    </Container>
  )
}
