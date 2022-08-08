import React from "react"
import styled from "styled-components"

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`

export default function Map() {
  return (
    <div>
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.0319417926257!2d-114.18328998425551!3d50.81204687952692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371a05b09851601%3A0x33c645a0686ae67a!2sPacha%20Mamma%20Massage%20and%20Sound%20Therapy!5e0!3m2!1sen!2sca!4v1653666623604!5m2!1sen!2sca"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
