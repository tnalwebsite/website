import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import { ButtonPrimary, ButtonSecondaryDark } from "../buttons"
import QuickApproval from "../forms/quickApproval"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  background: url("../../../images/hero-black-truck.jpg"), rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 85vh;
  height: 100%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 48em) {
    padding: 4em 0;
  }
`

const Text = styled.div`
  color: var(--txt-light);
`

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
`

export default function HeroBasic() {
  return (
    <HeroWrapper>
      <Container>
        <Flex>
          <Text className="spacing">
            <p className="caps italics bold title">
              pick your ride, customize your loan, get it delivered to your
              doorstep
            </p>
            <p>
              Dedicated to finding the right vehicle for your needs, whatever
              your credit may be - we can give you options. With a large
              inventory of over 5000+ vehicles, you can find out what you’re
              approved for. Delivering all across Canada and to many remote
              areas - we make buying a vehicle easy for you.
            </p>
          </Text>
          <FormWrapper>
            <QuickApproval />
          </FormWrapper>
        </Flex>
      </Container>
    </HeroWrapper>
  )
}
