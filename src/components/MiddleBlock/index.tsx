import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, SlideProps } from "react-awesome-reveal";
import { MiddleBlockSection, MinTitle, MinPara, } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";

interface MiddleBlockProps {
  id?: string;
  title: string;
  content?: string;
  direction?: SlideProps["direction"];
  button?: string;
  section: any;
  t?: any;
}

const MiddleBlock = ({ title, section, direction}: MiddleBlockProps) => {

  return (
    <MiddleBlockSection>
      <Slide direction={direction || "right"}>
        <div>
          <h6>{title}</h6>
          <Row gutter={[32, 32]} align="middle" style={{ marginTop: "5rem" }}>
            {typeof section === "object" &&
              section.map((item: any, id: number) => {
                return (
                  <Col key={id} xs={24} xl={6} md={6} sm={12} lg={6}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <SvgIcon src={item.icon} width={item.size || "120px"} height={item.size || "120px"} />
                      <MinTitle>{item.title}</MinTitle>
                      <MinPara>{item.content}</MinPara>
                    </div>
                  </Col>
                );
              })
            }
          </Row>
        </div>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
