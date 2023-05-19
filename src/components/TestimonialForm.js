import * as React from 'react'
import styled from 'styled-components'
import useContact from '../utils/useContact'
import useForm from '../utils/useForm'

const Form = styled.form`
  max-width: 65rem;
  width: 100%;
  margin: 2rem auto;
  transition: 0.5s all ease;
  display: flex;
  flex-flow: column nowrap;
  label {
    display: none;
  }
  input,
  textarea {
    font-size: 1.75rem;
  }
  legend {
    width: 98%;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  button.submit {
    margin: 2rem 0;
    align-self: end;
  }
`

const FullField = styled.fieldset`
  display: flex;
  justify-content: center;
  border: none;
  input {
    width: 100%;
    padding: 1rem;
    margin: 0 0.5rem 2rem;
    border: none;
    border-bottom: 0.2rem inset var(--darkgray);
    background: transparent;
  }
  textarea {
    width: 100%;
    margin-left: 0.5rem;
    padding: 1rem;
    border: none;
    border-bottom: 0.2rem inset var(--darkgray);
    background: transparent;
  }
`

const Submit = styled.button`
  width: 20rem;
  margin-bottom: 5rem;
  padding: 1.5rem;
  background: var(--blue);
  color: var(--white);
  border-radius: 1rem;
  font-size: 2rem;
  font-variant: small-caps;
  font-weight: 700;
  &:focus {
    border: 0.2rem dotted var(--blue);
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
`

export default function TestimonialForm() {
  const { values, updateValue } = useForm({
    name: '',
    message: '',
  })
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  })
  console.log(contact, error, loading, submitContact)
  if (errMessage) {
    return <p>{errMessage}</p>
  }
  return (
    <Form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="testimonial"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="testimonial" />
      <legend>Share With Others How We Have Impacted Your Life</legend>
      <FullField className="nameEmail">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={updateValue}
          placeholder="Name"
          className="required"
          required
        />
      </FullField>
      <FullField className="message">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={values.message}
          onChange={updateValue}
          rows="5"
          placeholder="How has Kinna's House of Love helped you?"
          className="required"
          required
        />
      </FullField>
      <Submit type="submit" value="Submit" className="submit">
        Submit
      </Submit>
    </Form>
  )
}
