import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
}

export default function Block({ title, content }: Props) {
  return (
    <Container>
      <h6>{title}</h6>
      <TextWrapper>
        <Content>{content}</Content>
      </TextWrapper>
    </Container>
  );
};
