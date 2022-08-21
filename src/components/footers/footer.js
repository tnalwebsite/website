import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Info } from "../info"
import { Container } from "../layoutComponents"
import { ButtonInline } from "../buttons"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Logo from "../../images/true-north-auto-loans-logo.svg"
import AaronTonnerWebSolutionsLogo from "../../images/aaron-tonner-web-solutions-logo.svg"
import Facebook from "../../images/socials/facebook.svg"
import Instagram from "../../images/socials/instagram.svg"
import Twitter from "../../images/socials/twitter.svg"
import Linkedin from "../../images/socials/linkedin.svg"
import Youtube from "../../images/socials/youtube.svg"

const device = {
  sm: "43em",
  md: "48em",
  lg: "57em",
}

const FooterWrapper = styled.footer`
  padding: 4em 0 1em 0;
  background: var(--clr-light-secondary);
  color: var(--txt-dark);
`

export const Flex = styled.div`
  display: flex;
  img {
    width: 100%;
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 500px;
  }
`

const Socials = styled.div`
  display: flex;

  & > * + * {
    margin-left: 15px;
  }

  div {
    display: flex;

    & > * + * {
      margin-left: 5px;
    }
  }

  img {
    width: 25px;
  }
`

const FlexContact = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }

  a {
    color: var(--clr-accent);
    text-decoration: none;
  }

  p {
    margin-bottom: 0;
  }
`

const FlexItem = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: var(--spacer) 0;

    li {
      a {
        color: var(--txt-dark);
        font-weight: var(--fw-500);
      }
    }
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 1em;

      @media screen and (max-width: ${device.md}) {
        margin-left: 0;
      }
    }

    li {
      a {
        text-transform: capitalize;
        color: var(--txt-dark);
        font-weight: var(--fw-500);
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-dark);
  font-weight: var(--fw-400);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
  }
`
const StyledAnchorLink = styled(props => <AnchorLink {...props} />)`
  text-transform: capitalize;
  color: var(--txt-dark);
  font-weight: var(--fw-400);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Author = styled.div`
  color: var(--txt-dark-secondary);

  div {
    display: flex;
    gap: 0.5em;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }

  a {
    display: inline;
    color: var(--txt-dark-secondary);
  }

  img {
    width: 150px;
  }
`

export default function Footer() {
  return (
    <div className="spacing-lg">
      <FooterWrapper className="spacing">
        <Container className="spacing-lg">
          <LogoContainer>
            <img src={Logo} alt="" />
          </LogoContainer>
          <hr />
          <Flex>
            <FlexItem>
              <p className="heading">contact us</p>
              <ul>
                <li>
                  <FlexContact>
                    <a href="tel: 587-847-3446">{Info.tel1}</a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <a href="mailto: ">{Info.mail1}</a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <p>{Info.hours}</p>
                  </FlexContact>
                </li>
              </ul>
              <ul>
                <li>Based in Canada</li>
              </ul>
              {/* <Socials>
                <div>
                  <a target="_blank" href="">
                    <img src={Facebook} alt="" />
                  </a>
                  <a target="_blank" href="">
                    <img src={Linkedin} alt="" />
                  </a>
                </div>
              </Socials> */}
            </FlexItem>
            <FlexItem>
              <p className="heading">links</p>
              <ul>
                <li>
                  <StyledAnchorLink to="/">home</StyledAnchorLink>
                </li>
                <li>
                  <StyledAnchorLink to="/#how">how it works</StyledAnchorLink>
                </li>
                <li>
                  <StyledAnchorLink to="/#process">process</StyledAnchorLink>
                </li>
                <li>
                  <StyledAnchorLink to="/#inventory">
                    inventory
                  </StyledAnchorLink>
                </li>
                <li>
                  <StyledAnchorLink to="/#testimonials">
                    testimonials
                  </StyledAnchorLink>
                </li>
                <li>
                  <StyledLink to="/get-a-loan">get approved today</StyledLink>
                </li>
              </ul>
            </FlexItem>
            <FlexItem className="spacing">
              <p className="heading">about us</p>
              <p>
                Dedicated to finding the right vehicle for your needs, Whatever
                your credit may be - we can give you options. With a large
                inventory of over 5000+ vehicles, you can find out what you’re
                approved for. Delivering all across Canada and to many remote
                areas - we make buying a vehicle easy for you. We deliver
                vehicles to central and remote locations in British Columbia,
                Alberta, Saskatchewan, Manitoba, Yukon, Northwest Territories,
                Nunavut, Ontario, and more!
              </p>
            </FlexItem>
          </Flex>
          <hr />
          <Copyright>
            <ul>
              <li>Copyright&#169; 2022</li>
              <li>{Info.name}</li>
              <li>All Rights Reserved</li>
              <li>
                <a
                  target="_blank"
                  href="https://www.truenorthautoloans.com/terms-of-use"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.truenorthautoloans.com/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Copyright>
          <hr />
        </Container>
        <Author>
          <Container>
            <div>
              <p>website by: </p>
              <a target="_blank" href="https://www.aarontonner.com">
                <img src={AaronTonnerWebSolutionsLogo} alt="" />
              </a>
            </div>
          </Container>
        </Author>
      </FooterWrapper>
    </div>
  )
}
