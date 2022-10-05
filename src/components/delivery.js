import React from "react"
import styled from "styled-components"
import { Container, Flex, Section } from "./layoutComponents"
import { FaCheckCircle } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

const FlexItem = styled.div`
  & > * + * {
    margin-left: 5px;
  }
`

const fontStyle = {
  color: "#C73232",
  fontSize: "50px",
}

export default function Delivery() {
  return (
    <Section>
      <Container className="spacing">
        <div className="center">
          <h2 className="title bold italics">free nationwide delivery</h2>
          <p className="accent upper">
            5000+ vehicles in stock ready to be shipped
          </p>
        </div>
        <Flex>
          <div className="spacing">
            <FlexItem>
              <FaCheckCircle style={fontStyle} />
              <div className="spacing-sm">
                <h3 className="heading upper bold">
                  we provide{" "}
                  <span className="italics underline accent">
                    free groceries
                  </span>{" "}
                  with every delivery!
                </h3>
                <p>
                  We understand the convenience of having groceries delivered to
                  your door. With every vehicle purchase, we want to give you
                  that convenience. Or the option of a gift card for groceries
                  is available.
                </p>
              </div>
            </FlexItem>
            <FlexItem>
              <FaCheckCircle style={fontStyle} />
              <div className="spacing-sm">
                <h3 className="heading upper bold">
                  get your vehicle (and free groceries) delivered to your
                  doorstep - for free!
                </h3>
                <p>
                  For auto loans in Northern Canada, we want to make sure you get
                  all the essentials you need with your purchase. Let us know
                  what you want to be included in the delivery of your vehicle.
                </p>
              </div>
            </FlexItem>
          </div>
          <StaticImage
            src="../images/free-delivery.jpg"
            alt="free delivery"
            class="stretch"
          />
        </Flex>
      </Container>
    </Section>
  )
}
