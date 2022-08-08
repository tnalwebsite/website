import React from "react"
import styled from "styled-components"
import { Section, Container, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit, Select } from "./formItems"
import Map from "../map"

const Flex = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 56em) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: 56em) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

export default function QuickApproval() {
  return (
    <Section>
      <Container>
        <h3 className="title--bold center">
          <span className="italics accent">get a quick approval</span>
        </h3>
        <div>
          <form
            name="quick-approval"
            className="spacing"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <Flex>
              <div className="spacing-sm">
                <Label htmlFor="fname">* First Name:</Label>
                <Input
                  type="name"
                  name="fname"
                  id="fname"
                  placeholder="John"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="lname">* Last Name:</Label>
                <Input
                  type="name"
                  name="lname"
                  id="lname"
                  placeholder="Doe"
                  required
                />
              </div>
            </Flex>
            <Flex>
              <div className="spacing-sm">
                <Label htmlFor="name">* Email:</Label>
                <Input
                  type="mail"
                  name="mail"
                  id="mail"
                  placeholder="john@email.com"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="email">* Phone:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="000-000-0000"
                  required
                />
              </div>
            </Flex>
            <div className="spacing-sm">
              <Label htmlFor="preferredContactMethod">
                * Preferred Contact Method:
              </Label>
              <Select name="preferredContactMethod" id="preferredContactMethod">
                <option value="phone">Phone</option>
                <option value="phone">Email</option>
              </Select>
            </div>
            <div className="spacing-sm">
              <Label htmlFor="preferredTimeOfDay">Preferred Time of Day:</Label>
              <Select name="preferredTimeOfDay" id="preferredTimeOfDay">
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">evening</option>
              </Select>
            </div>
            <Submit type="submit" id="submit" value="get approved now" />
          </form>
        </div>
      </Container>
    </Section>
  )
}
