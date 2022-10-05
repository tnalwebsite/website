import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "./buttons"
import { Section, Container, GridAuto } from "./layoutComponents"
import {
  FaRegCreditCard,
  FaRegArrowAltCircleDown,
  FaHandHoldingUsd,
  FaRegChartBar,
} from "react-icons/fa"

// credit FaRegCreditCard
// downsize FaCompressAlt or FaSortAmountDown or FaRegArrowAltCircleDown
// equity FaDollarSign or FaDonate or FaHandHoldingUsd
// interest FaRegChartBar

const Item = styled.div`
  div {
    padding: 2em;
    box-shadow: var(--shadow-light);
    border-radius: var(--br);
    text-align: center;
  }
`

const IconStyle = {
  fontSize: "60px",
  color: "var(--clr-accent)",
}

export default function Solutions() {
  return (
    <Section>
      <Container className="spacing">
        <div className="center">
          <h2 className="title bold italics caps">
            financing solutions available for everyone
          </h2>
          <p className="accent upper">
            worried about your credit history? We’ve got your back!
          </p>
        </div>
        <GridAuto>
          <Item>
            <div className="spacing">
              <FaRegCreditCard style={IconStyle} />
              <h3 className="bold caps body--large">Bad or Damaged Credit</h3>
              <p>
                Whether it’s a consumer proposal or bankruptcy, we advise you on
                solutions that will improve your credit while getting you a car
                loan in Canada. We also have programs offered to those who have
                had a repossession in the past. Our mission is to get you
                driving!
              </p>
            </div>
          </Item>
          <Item>
            <div className="spacing">
              <FaRegChartBar style={IconStyle} />
              <h3 className="bold caps body--large">
                High Interest Loan Relief
              </h3>
              <p>
                Are you in a high interest auto loan? We find refinancing
                options available to you which can get you out of high interest
                car loans.{" "}
              </p>
            </div>
          </Item>
          <Item>
            <div className="spacing">
              <FaHandHoldingUsd style={IconStyle} />
              <h3 className="bold caps body--large">Negative Equity?</h3>
              <p>
                We make sure you get the highest value for your auto loan
                trade-in. Through our dealer network, we find the highest bidder
                on your vehicle so you know you’re getting what your vehicle is
                worth.{" "}
              </p>
            </div>
          </Item>
          <Item>
            <div className="spacing">
              <FaRegArrowAltCircleDown style={IconStyle} />
              <h3 className="bold caps body--large">Downsizing</h3>
              <p>
                If you’re looking to lower the cost of driving - we have
                solutions. We’ll find creative ways to lower your auto
                loan payment. Or if you’re looking for a smaller vehicle because
                your kids moved out - let us find you the right car loan for
                your situation now!
              </p>
            </div>
          </Item>
        </GridAuto>
        <div className="center">
          <ButtonPrimary to="/get-a-loan">get a loan now</ButtonPrimary>
        </div>
      </Container>
    </Section>
  )
}
