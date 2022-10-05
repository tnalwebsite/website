import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section, GridAuto } from "./layoutComponents"
import SingleTestimonial from "./testimonials/singleTestimonial"

const Text = styled.div`
  text-align: center;

  p {
    max-width: 90ch;
    margin-left: auto;
    margin-right: auto;
  }
`

export default function CustomerBanner1() {
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <h1 className="center title accent italics">
            good, limited, or bad credit car loans canada - guaranteed approval
            in 48 hours!
          </h1>
          <p>
            We offer gauranteed approval on your good, limited, or bad credit
            for car loans in Canada. Our online approval process is simple and easy to
            use for taking the first step to getting approved for your auto loan
            in Canada!
          </p>
        </Text>
        <GridAuto>
          <div>
            <StaticImage
              src="../images/canada-truck-loan-customer-1.jpg"
              alt="canada truck auto loan"
            />
            <SingleTestimonial
              review="Very happy with our new truck. Was easy to get approved and the truck we wanted. Thank you True North Auto Loans!"
              name="Joseph Parsch"
              location="Calgary, AB"
            />
          </div>
          <div>
            <StaticImage
              src="../images/canada-truck-loan-customer-2.jpg"
              alt="truck auto loan canada"
            />
            <SingleTestimonial
              review="True North went above and beyond to get through all the obstacles I’ve had getting financing, getting my truck insured and registered and delivering it to my home. Thank you!!"
              name="John Bigelow"
              location="Yellowknife, NWT"
            />
          </div>
          <div>
            <StaticImage
              src="../images/affordable-auto-loan-customer-3.jpg"
              alt="affordable auto loan in canada"
            />
            <SingleTestimonial
              review="We had a great experience with True North Auto Loans. They got us the financing we needed with affordable payments. We love our new blue Chevy. Also came full of groceries. Thanks guys!!"
              name="Emma Kaitak,"
              location="Yellowknife, NWT"
            />
          </div>
        </GridAuto>
      </Container>
    </Section>
  )
}
