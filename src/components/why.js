import React from "react"
import styled from "styled-components"
import { Container, Flex, Section } from "./layoutComponents"
import { FaCheckCircle } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

const List = styled.ul`
  list-style-type: none;
`

const FontStyle = {
  color: "var(--clr-accent)",
  fontSize: "25px",
}

export default function Why() {
  return (
    <Section>
      <Container>
        <Flex>
          <div className="spacing">
            <h2 className="title bold caps">why use true north auto loans?</h2>
            <List>
              <li>
                <FaCheckCircle style={FontStyle} /> Free nationwide vehicle
                delivery with groceries or gift cards included
              </li>
              <li>
                <FaCheckCircle style={FontStyle} /> Auto financing solutions for
                everyone
              </li>
              <li>
                <FaCheckCircle style={FontStyle} /> We are always in stock with
                5000+ vehicles
              </li>
              <li>
                <FaCheckCircle style={FontStyle} /> We welcome vehicle trades on
                your auto loan
              </li>

              <li>
                <FaCheckCircle style={FontStyle} /> Quick approval process
              </li>
              <li>
                <FaCheckCircle style={FontStyle} /> Get up to $10,000 cash back
              </li>
              <li>
                <FaCheckCircle style={FontStyle} /> Go 6 months without payments
              </li>
            </List>
          </div>
          <StaticImage
            src="../images/why.jpg"
            alt="why use true north auto loans"
          />
        </Flex>
      </Container>
    </Section>
  )
}
