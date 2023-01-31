import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Section } from "../components/layoutComponents"
import {
  Label,
  Input,
  TextArea,
  Submit,
  LabelInline,
  InputInline,
  Select,
} from "../components/forms/formItems"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Logo } from "../images/logo-tnal.svg"
import SEO from "../components/seo"
const device = {
  md: "48em",
}

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  max-width: 85rem;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacer);
`

const Wrapper = styled.div``

const PartTitle = styled.h2`
  font-size: var(--fs-1);
  text-transform: capitalize;
  font-style: italic;
  margin-bottom: var(--spacer-lg);
  text-align: center;

  span {
    font-size: var(--fs-sm);
    font-weight: var(--fw-400);
    display: block;
    text-transform: none;
  }
`

const QuestionTitle = styled.h3`
  font-size: var(--fs-3);
  font-weight: var(--fw-400);
  text-transform: uppercase;
  margin-bottom: var(--spacer-sm);
  text-align: center;
`

const Part = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`

const QuestionArea = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 2em;
  border-radius: var(--br);

  & > * + * {
    margin-top: var(--spacer);
  }
`

const Anchors = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;

  @media screen and (max-width: 37.5em) {
    flex-direction: column;
    text-align: center;
    & > * {
      width: 100%;
    }

    & > * + * {
      margin-left: 0;
    }
  }

  & > * + * {
    margin-left: 10px;
  }

  .previous {
    cursor: pointer;
    display: inline-block;
    font-size: var(--fs-sm);
    font-weight: var(--fw-button);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--clr-accent);
    text-decoration: none;
  }

  .next {
    cursor: pointer;
    display: inline-block;
    font-size: var(--fs-sm);
    font-weight: var(--fw-button);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 1.33em;
    transition: all 0.2s linear;

    background: transparent;
    color: var(--clr-accent);
    border: 1px solid var(--clr-accent);

    &:hover {
      opacity: 0.8;
    }
  }

  .submit {
    cursor: pointer;
    display: inline-block;
    font-size: var(--fs-sm);
    font-weight: var(--fw-button);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 2em;
    background: var(--clr-accent);
    color: var(--txt-light);
    border: 1px solid var(--clr-accent);
    transition: all 0.2s linear;
    -webkit-appearance: none;

    :hover {
      background: var(--clr-accent-darker);
    }
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    width: 100%;
  }

  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * + * {
    margin-left: 10px;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const ItemFlex = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 5px;
  }
`

const BirthdayFlex = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 48em) {
    flex-direction: column;
  }
  > * + * {
    margin-left: 10px;

    @media screen and (max-width: 48em) {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`

const VehicleChoice = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 48em) {
  }

  & > * + * {
    margin-left: 10px;

    @media screen and (max-width: 48em) {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  div {
    max-width: 150px;
    width: 100%;

    label {
      display: flex;
      flex-direction: column;

      .label-img {
        border: 1px solid var(--txt-dark-secondary);
        height: 150px;
      }
    }
  }
`
export default function GetALoan() {
  return (
    <Wrapper>
      <SEO
        title="Get Approved Now! True North Auto Loans"
        description="Online car loan form. Get approved on bad credit car loans using this form!"
      />
      <>
        <Container className="">
          <LogoContainer>
            <Link to="/">
              <StaticImage
                src="../images/true-north-auto-loans-logo.svg"
                alt="true north auto loans logo"
                width={150}
              />
            </Link>
          </LogoContainer>
          <form
            name="fullloan"
            className="spacing-lg"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <Part id="part1">
              <div>
                <PartTitle>
                  start: pick your ride{" "}
                  <span>
                    Dedicated to finding the right vehicle for your needs
                  </span>
                </PartTitle>
                <QuestionArea>
                  <QuestionTitle className="center">
                    what vehicle do you want?
                  </QuestionTitle>
                  <VehicleChoice>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <div className="spacing-sm">
                      <Label for="car">
                        <StaticImage
                          src="../images/inventory/sedans.jpg"
                          alt="car"
                          className="label-img"
                        />
                        car
                      </Label>
                      <input
                        type="radio"
                        name="vehicleChoice1"
                        id="car"
                        value="car"
                        defaultChecked
                      />
                    </div>
                    <div className="spacing-sm">
                      <Label for="suv">
                        <StaticImage
                          src="../images/inventory/sport-suvs.jpg"
                          alt="suv"
                          className="label-img"
                        />
                        suv
                      </Label>
                      <input
                        type="radio"
                        name="vehicleChoice2"
                        id="suv"
                        value="suv"
                      />
                    </div>
                    <div className="spacing-sm">
                      <Label for="truck">
                        <StaticImage
                          src="../images/inventory/trucks.jpg"
                          alt="truck"
                          className="label-img"
                        />
                        truck
                      </Label>
                      <input
                        type="radio"
                        name="vehicleChoice3"
                        id="truck"
                        value="truck"
                      />
                    </div>
                  </VehicleChoice>
                  <div>
                    <QuestionTitle>do you have a trade-in?</QuestionTitle>
                    <div className="spacing-sm">
                      <Select className="center" name="tradeIn" id="tradeIn">
                        <option value="no" selected>
                          Nope!
                        </option>
                        <option value="yes">Yes I do!</option>
                      </Select>
                    </div>
                  </div>
                  <Anchors>
                    <AnchorLink
                      className="next"
                      to="/get-a-loan#part2"
                      title="continue"
                    />
                  </Anchors>
                </QuestionArea>
              </div>
            </Part>
            <Part id="part2">
              <div>
                <PartTitle>
                  your bugdet{" "}
                  <span>We'll find a vehicle that fits your budget.</span>
                </PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>what is your monthly budget?</QuestionTitle>
                  <div className="spacing-sm">
                    <Select
                      className="center"
                      name="monthlyBudget"
                      id="monthlyBudget"
                    >
                      <option value="$100 per month">$100 / month</option>
                      <option value="$100-$500 per month">
                        $100 - $500 / month
                      </option>
                      <option value="$500-$1000 per month">
                        $500 - $1000 / month
                      </option>
                      <option value="$1000+ per month">$1000+ / month</option>
                    </Select>
                  </div>{" "}
                  <Anchors>
                    <AnchorLink
                      className="previous"
                      to="/get-a-loan#part1"
                      title="previous"
                    />
                    <AnchorLink
                      className="next"
                      to="/get-a-loan#part3"
                      title="continue"
                    />
                  </Anchors>
                </QuestionArea>
              </div>
            </Part>
            <Part id="part3">
              <div>
                <PartTitle>
                  employment information{" "}
                  <span>
                    Being specific will help us find you the best offer
                  </span>
                </PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>what is your employment status?</QuestionTitle>
                  <center>
                    <div>
                      <div className="spacing-sm">
                        <input
                          type="radio"
                          name="employmentStatus1"
                          id="full-time"
                          value="full-time"
                          defaultChecked
                        />
                        <label for="full-time">Full-time</label>
                      </div>
                      <div className="spacing-sm">
                        <input
                          type="radio"
                          name="employmentStatus2"
                          id="part-time"
                          value="part-time"
                        />
                        <label for="part-time">Part-time</label>
                      </div>
                      <div className="spacing-sm">
                        <input
                          type="radio"
                          name="employmentStatus3"
                          id="self-employed"
                          value="self-employed"
                        />
                        <label for="self-employed">Self-employed</label>
                      </div>
                      <div className="spacing-sm">
                        <input
                          type="radio"
                          name="employmentStatus4"
                          id="pension"
                          value="pension"
                        />
                        <label for="pension">Pension</label>
                      </div>
                    </div>
                  </center>
                  <div>
                    <QuestionTitle>what is your monthly income?</QuestionTitle>
                    <ItemFlex>
                      <p>$</p>
                      <Input
                        type="number"
                        name="monthlyIncome"
                        id="monthlyIncome"
                        datatype="currency"
                        placeholder="Monthly Income"
                        defaultValue="1000"
                        step="1000"
                        className="center"
                        required
                      />
                      <p>monthly</p>
                    </ItemFlex>
                  </div>
                  <Anchors>
                    <AnchorLink
                      className="previous"
                      to="/get-a-loan#part2"
                      title="previous"
                    />
                    <AnchorLink
                      className="next"
                      to="/get-a-loan#part4"
                      title="continue"
                    />
                  </Anchors>
                </QuestionArea>
              </div>
            </Part>
            <Part id="part4">
              <div>
                <PartTitle>
                  more employment information{" "}
                  <span>
                    Being specific will help us find you the best offer
                  </span>
                </PartTitle>
                <QuestionArea className="spacing-md">
                  <div>
                    <QuestionTitle>where do you work?</QuestionTitle>
                    <Flex>
                      <center className="spacing-sm">
                        <label for="companyName">Company name:</label> <br />
                        <Input
                          type="text"
                          name="companyName"
                          id="companyName"
                          required
                        />
                      </center>
                      <center className="spacing-sm">
                        <label for="jobTitle">Job title:</label> <br />
                        <Input
                          type="text"
                          name="jobTitle"
                          id="jobTitle"
                          required
                        />
                      </center>
                    </Flex>
                  </div>
                  <div>
                    <QuestionTitle>
                      how long have you worked here?
                    </QuestionTitle>
                    <div>
                      <Select
                        className="center"
                        name="lengthOfWork"
                        id="lengthOfWork"
                      >
                        <option value="1 - 3 months">1 - 3 Months</option>
                        <option value="3 - 6 months">3 - 6 Months</option>
                        <option value="6 - 12 months">6 - 12 Months</option>
                        <option value="1+ year">1+ Year</option>
                      </Select>
                    </div>
                  </div>
                  <Anchors>
                    <AnchorLink
                      className="previous"
                      to="/get-a-loan#part3"
                      title="previous"
                    />
                    <AnchorLink
                      className="next"
                      to="/get-a-loan#part5"
                      title="continue"
                    />
                  </Anchors>
                </QuestionArea>
              </div>
            </Part>
            <Part id="part5">
              <div>
                <PartTitle>
                  your living situation{" "}
                  <span>
                    Being specific will help us find you the best offer
                  </span>
                </PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>
                    do you rent or own property? <span></span>
                  </QuestionTitle>
                  <FlexCenter>
                    <div>
                      <div className="spacing-sm">
                        <input
                          type="radio"
                          name="rentOrOwn1"
                          id="rent"
                          value="rent"
                          defaultChecked
                        />
                        <label for="rent">Rent</label>
                      </div>
                      <div className="spacing-sm">
                        <input
                          type="radio"
                          name="rentOrOwn2"
                          id="own"
                          value="own"
                        />
                        <label for="own">Own</label>
                      </div>
                    </div>
                  </FlexCenter>
                  <div>
                    <QuestionTitle>what is your monthly payment?</QuestionTitle>
                    <div>
                      <ItemFlex>
                        <p>$</p>
                        <Input
                          type="number"
                          name="monthlyExpense"
                          id="monthlyExpense"
                          datatype="currency"
                          placeholder="Monthly Payment"
                          defaultValue="500"
                          step="100"
                          className="center"
                        />
                        <p>monthly</p>
                      </ItemFlex>
                    </div>
                  </div>
                  <Anchors>
                    <AnchorLink
                      className="previous"
                      to="/get-a-loan#part4"
                      title="previous"
                    />
                    <AnchorLink
                      className="next"
                      to="/get-a-loan#part6"
                      title="continue"
                    />
                  </Anchors>
                </QuestionArea>
              </div>
            </Part>
            <Part id="part6">
              <div>
                <PartTitle>
                  get it delivered to your doorstep{" "}
                  <span>
                    Knowing your location withh help us find the best deals in
                    your area
                  </span>
                </PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>what is your home address?</QuestionTitle>
                  <div className="spacing">
                    <Flex>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="123 Rose St"
                          required
                        />
                        <Label for="address">address line 1</Label>
                      </div>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Calgary"
                          required
                        />
                        <Label for="city">city</Label>
                      </div>
                    </Flex>
                    <Flex>
                      <div className="spacing-sm">
                        <Select name="province" id="province">
                          <option value="AB">Alberta</option>
                          <option value="BC">British Columbia</option>
                          <option value="MB">Manitoba</option>
                          <option value="NB">New Brunswick</option>
                          <option value="NL">Newfoundland and Labrador</option>
                          <option value="NS">Nova Scotia</option>
                          <option value="NT">Northwest Territories</option>
                          <option value="NU">Nunavut</option>
                          <option value="ON">Ontario</option>
                          <option value="PE">Prince Edward Island</option>
                          <option value="QC">Quebec</option>
                          <option value="SK">Saskatchewan</option>
                          <option value="YT">Yukon</option>
                        </Select>
                        <Label for="province">province</Label>
                      </div>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="postalCode"
                          id="postalCode"
                          placeholder="--- ---"
                          required
                        />
                        <Label for="postalCode">postal code</Label>
                      </div>
                    </Flex>
                  </div>
                  <Anchors>
                    <AnchorLink
                      className="previous"
                      to="/get-a-loan#part5"
                      title="previous"
                    />
                    <AnchorLink
                      className="next"
                      to="/get-a-loan#part7"
                      title="continue"
                    />
                  </Anchors>
                </QuestionArea>
              </div>
            </Part>
            <Part id="part7">
              <div>
                <PartTitle>
                  how can we reach you?{" "}
                  <span>
                    We will need your contact information to let you know of
                    your custom loan
                  </span>
                </PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>contact information</QuestionTitle>
                  <div className="spacing">
                    <Flex>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="John"
                          required
                        />
                        <Label for="firstName">first name</Label>
                      </div>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Doe"
                          required
                        />
                        <Label for="lastName">last name</Label>
                      </div>
                    </Flex>
                    <Flex>
                      <div className="spacing-sm">
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="johndoe@gmail.com"
                          required
                        />
                        <Label for="email">your email</Label>
                      </div>
                      <div className="spacing-sm">
                        <Input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="000-000-0000"
                          required
                        />
                        <Label for="phone">your phone number</Label>
                      </div>
                    </Flex>
                  </div>
                  <Anchors>
                    <AnchorLink
                      className="previous"
                      to="/get-a-loan#part6"
                      title="previous"
                    />
                    <AnchorLink
                      className="next"
                      to="/get-a-loan#part8"
                      title="continue"
                    />
                  </Anchors>
                </QuestionArea>
              </div>
            </Part>
            <Part id="part8">
              <div>
                <PartTitle>
                  last step!{" "}
                  <span>
                    This gives us all the information we need to customize your
                    loan!
                  </span>
                </PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>what is your birth date?</QuestionTitle>
                  <BirthdayFlex>
                    <Select
                      name="birthdayMonth"
                      id="birthdayMonth"
                      className="center"
                    >
                      <option value="1">Janaury</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </Select>
                    <Select
                      name="birthdayDay"
                      id="birthdayDay"
                      className="center"
                    >
                      <option value="01">1</option>
                      <option value="02">2</option>
                      <option value="03">3</option>
                      <option value="04">4</option>
                      <option value="05">5</option>
                      <option value="06">6</option>
                      <option value="07">7</option>
                      <option value="08">8</option>
                      <option value="09">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </Select>
                    <Input
                      type="text"
                      name="birthdayYear"
                      id="birthdayYear"
                      size="4"
                      maxLength="4"
                      defaultValue="1960"
                      placeholder="YYYY"
                      className="center"
                      required
                    />
                  </BirthdayFlex>
                  <Anchors>
                    <AnchorLink
                      className="previous"
                      to="/get-a-loan#part7"
                      title="previous"
                    />
                    <input
                      className="submit"
                      type="submit"
                      id="submit"
                      value="submit"
                    />
                  </Anchors>
                </QuestionArea>
              </div>
            </Part>
          </form>
        </Container>
      </>
    </Wrapper>
  )
}
