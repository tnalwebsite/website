import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, GridAuto, Section } from "./layoutComponents"
import { ButtonPrimary } from "./buttons"

const VehicleType = styled.div`
  // box-shadow: var(--shadow-light);
  // padding: 2em;

  p {
    text-align: center;
  }
`

const P = styled.p`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 70ch;
`

const More = styled.p`
  color: #00ff00;
`

export default function Inventory() {
  return (
    <Section>
      <Container className="spacing">
        <div className="spacing">
          <h2 className="title bold caps center">
            we are <span className="italics underline accent">always</span> in
            stock!
          </h2>{" "}
          <P>
            Whether you’re looking for an economical and budget friendly sedan,
            or full size diesel pickup truck, we have 5000+ vehicles in stock
            and ready to be delivered to your doorstep!
          </P>
        </div>
        <GridAuto>
          <VehicleType className="">
            <StaticImage src="../images/inventory/sedans.jpg" alt="sedan" />
            <p className="bold upper">sporty and budget-friendly sedans</p>
          </VehicleType>
          <VehicleType className="">
            <StaticImage
              src="../images/inventory/sport-suvs.jpg"
              alt="sport suvs"
            />
            <p className="bold upper">sport suv's</p>
          </VehicleType>
          <VehicleType className="">
            <StaticImage
              src="../images/inventory/luxury-suvs.jpg"
              alt="luxury suvs"
            />
            <p className="bold upper">luxury suv's</p>
          </VehicleType>
          <VehicleType className="">
            <StaticImage src="../images/inventory/trucks.jpg" alt="trucks" />
            <p className="bold upper">light and heavy-duty pickup trucks</p>
          </VehicleType>
        </GridAuto>
        <center>
          <More className=" bold">&#x2b; more options available</More>
        </center>
        <center>
          <ButtonPrimary to="/get-a-loan">pick your ride &#8594;</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
