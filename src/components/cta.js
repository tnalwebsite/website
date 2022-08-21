import React from "react"
import styled from "styled-components"
import QuickApproval from "./forms/quickApproval"
import { Container, FlexMobileOpp, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: url("../../images/hero.jpg"), rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    color: var(--txt-light);
  }
`

const Item = styled.div`
  color: var(--txt-light);
`

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
`
const Div = styled.div`
  align-self: center;
`

export default function Cta() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <h2 className="center title italics bold caps">
            are you ready to get your loan?
          </h2>
          <FlexMobileOpp>
            <Div className="spacing-lg">
              <Item className="spacing">
                <h3 className="bold upper italics heading">
                  pick your ride, customize your loan, get it delivered to your
                  doorstep
                </h3>
                <p>
                  Dedicated to finding the right vehicle for your needs,
                  whatever your credit may be - we can give you auto loan
                  options. With a large inventory of over 5000+ vehicles, you
                  can find out what you’re approved for. Delivering all across
                  Canada and to many remote areas - we make buying a vehicle
                  easy for you.
                </p>
              </Item>
              <Item className="spacing">
                <h3 className="bold upper italics heading">
                  we provide free groceries with every delivery
                </h3>
                <p>
                  We understand the convenience of having groceries delivered to
                  your door. With every vehicle purchase, we want to give you
                  that convenience. Or the option of a gift card for groceries
                  is available.
                </p>
              </Item>
              <Item className="spacing">
                <h3 className="bold upper italics heading">
                  financing solutions for any credit situation
                </h3>
                <p>
                  Whether it’s a consumer proposal or bankruptcy, we advise you
                  on solutions that will improve your credit while getting you a
                  car loan in Canada. We also have programs offered to those who
                  have had a repossession in the past. Our mission is to get you
                  driving! We have helped hundreds of customers with a bad
                  credit car loan Canada guaranteed approval.
                </p>
                {/* <ul>
                  <li>Calgary, AB</li>
                  <li>Edmonton, AB</li>
                  <li>Fort McMurray, AB</li>
                  <li>Maskwacis, AB</li>
                  <li>Saskatoon, SK</li>
                  <li>Yellowknife, NWT</li>
                </ul> */}
              </Item>
            </Div>
            <FormWrapper>
              <QuickApproval />
            </FormWrapper>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
