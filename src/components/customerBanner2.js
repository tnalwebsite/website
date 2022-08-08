import React, { Component } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Section, GridAuto } from "./layoutComponents"
import SingleTestimonial from "./testimonials/singleTestimonial"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Item = styled.div``

export default function CustomerBanner2() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <Section>
      <Container className="spacing">
        <div className="center">
          <h2 className="title bold italics">
            We’ve been able to help 200+ customers in northern canada{" "}
          </h2>
          <p className="accent upper">financing solutions for everyone</p>
        </div>
        <GridAuto>
          <Item>
            <StaticImage
              src="../images/jeep-suv-loan.jpg"
              alt="jeep suv loan canada"
            />
            <SingleTestimonial
              review="Big thanks to True North Auto Loans for getting us a Jeep SUV!"
              name="Ryan Lachapelle"
              location="Calgary, AB"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/truck-auto-loan-canada-customer-4.jpg"
              alt="jeep suv loan"
            />
            <SingleTestimonial
              review="Thanks to True North for getting me a pickup for work. Will recommend them to my friends and family."
              name="Tina Auger"
              location="Fort McMurray, AB"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/auto-loan-canada-customer-5.jpg"
              alt="auto loan canada"
            />
            <SingleTestimonial
              review="Thank you to True North Auto Loans! I’m loving the new truck. I’ll be coming back to you guys in the future!"
              name="Tanya Eaglehead"
              location="Edmonton, AB"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/auto-loan-canada-customer-6.jpg"
              alt="canadian auto loan trade-in"
            />
            <SingleTestimonial
              review="Great service. Traded my half ton for a diesel thanks to True North!"
              name="Jonas Morningbull"
              location="Saskatoon, SK"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/canada-auto-loan-customer-8.jpg"
              alt="canadian auto loan"
            />
            <SingleTestimonial
              review="I had my truck delivered in 2 days after applying. Thanks to Aaron at True North!"
              name="Jack Crowchild"
              location="Maskwacis, AB"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/canada-truck-loan-customer-1.jpg"
              alt="canada truck auto loan"
            />
            <SingleTestimonial
              review="Very happy with our new truck. Was easy to get approved and the truck we wanted. Thank you True North Auto Loans!"
              name="Joseph Parsch"
              location="Calgary, AB"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/canada-truck-loan-customer-2.jpg"
              alt="truck auto loan canada"
            />
            <SingleTestimonial
              review="True North went above and beyond to get through all the obstacles I’ve had getting financing, getting my truck insured and registered and delivering it to my home. Thank you!!"
              name="John Bigelow"
              location="Yellowknife, NWT"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/affordable-auto-loan-customer-3.jpg"
              alt="affordable auto loan in canada"
            />
            <SingleTestimonial
              review="We had a great experience with True North Auto Loans. They got us the financing we needed with affordable payments. We love our new blue Chevy. Also came full of groceries. Thanks guys!!"
              name="Emma Kaitak,"
              location="Yellowknife, NWT"
            />
          </Item>
        </GridAuto>
      </Container>
    </Section>
  )
}
