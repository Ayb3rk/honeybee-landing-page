import { Row } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  NavLink,
  LogoContainer,
  Para,
} from "./styles";

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <Row
          justify="space-between"
          align="middle"
        >
          <NavLink to="/" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <LogoContainer>
              <SvgIcon
                src="logo.svg"
                aria-label="homepage"
                width="101px"
                height="64px"
              />
            </LogoContainer>
            <Para style={{ marginTop: 10 }}>© 2023 HoneyBeeTracker. All rights reserved</Para>
          </NavLink>
        </Row>
      </Container>
    </FooterSection>
  );
};
