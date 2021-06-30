import styled from '../lib/style-components.js'

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .75rem 1.5rem;
  color: #000000;
  text-transform: uppercase;
  font: 700 1.125rem/1.75rem 'Montserrat', system-ui, sans-serif;
  background-color: #FED941;
  border-radius: .25rem;
`

const GhostButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #FED941;
  padding: .75rem 1.5rem;
  text-transform: uppercase;
  font: 700 1.125rem/1.75rem 'Montserrat', system-ui, sans-serif;
  color: #FED941;
  border-radius: .25rem;
  background-color: #0C0E16;
`

export {
  PrimaryButton,
  GhostButton,
}