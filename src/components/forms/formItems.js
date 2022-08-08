import styled from "styled-components"

export const Label = styled.label`
  display: block;
  font-family: var(--ff);
  font-size: var(--fs-sm);
  text-transform: capitalize;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: var(--br);
  border: 1px solid var(--txt-dark-secondary);
  padding: 1em;
  font-size: var(--fs-sm);
  font-family: var(--ff);

  &:focus {
    outline: 1px solid var(--clr-accent-lighter);
    border: 1px solid var(--clr-accent-lighter);
  }

  &[type="radio"]:focus-within {
    color: red;
  }
`

export const Select = styled.select`
  display: block;
  width: 100%;
  border-radius: var(--br);
  border: 1px solid var(--txt-dark-secondary);
  padding: 1em;
  font-size: var(--fs-sm);
  font-family: var(--ff);
  &:focus {
    outline: 1px solid var(--clr-accent-lighter);
    border: 1px solid var(--clr-accent-lighter);
  }
`
export const LabelInline = styled.label`
  display: inline;
  font-family: var(--ff);
  font-size: var(--fs-sm);
`

export const InputInline = styled.input`
  display: inline;
  border-radius: var(--br);
  border: 1px solid var(--txt-dark-secondary);
  padding: 1.2em;
  font-size: var(--fs-sm);
  font-family: var(--ff);

  &:focus {
    outline: 1px solid var(--txt-dark-secondary);
  }
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid var(--txt-dark-secondary);
  box-shadow: none;
  outline: none;
  padding: 1.2em;
  font-size: var(--fs-sm);
  font-family: var(--ff);
  resize: none;

  &:focus {
    outline: 1px solid var(--clr-accent);
  }
`

export const Submit = styled.input`
  cursor: pointer;
  width: 100%;
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
`
