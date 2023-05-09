import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, Content, ContentWrapper, ServiceWrapper, MinTitle, MinPara, } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";

interface MiddleBlockProps {
  id?: string;
  title: string;
  content?: string;
  button?: string;
  section: any;
  t?: any;
}

const MiddleBlock = ({ title, content, section, t}: MiddleBlockProps) => {

  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={12} xs={6}>
              <h6>{title}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={6}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{item.title}</MinTitle>
                          <MinPara>{item.content}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
