import React from "react"
import styled from "styled-components"
import { Container, GridTwo, Section } from "../layoutComponents"
import SingleTestimonial from "./singleTestimonial"

const Testimonial = styled.div`
  background: rgba(253, 0, 0, 0.2);
  border-radius: var(--br);
  padding: 4em;

  p {
    text-align: center;
  }
`

export default function FullTestimonials() {
  return (
    <Section>
      <Container className="spacing">
        <div className="center">
          <h2 className="title bold italics">
            We’ve been able to help 200+ customers in northern canada{" "}
          </h2>
          <p className="accent upper">financing solutions for everyone</p>
        </div>
        <GridTwo>
          <SingleTestimonial
            name="first last"
            location="location"
            review="sample review"
          />
          <SingleTestimonial
            name="first last"
            location="location"
            review="sample review"
          />
          <SingleTestimonial
            name="first last"
            location="location"
            review="sample review"
          />
          <SingleTestimonial
            name="first last"
            location="location"
            review="sample review"
          />
        </GridTwo>
      </Container>
    </Section>
  )
}
