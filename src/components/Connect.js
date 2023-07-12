import * as React from 'react'
import styled from 'styled-components'
import useContact from '../utils/useContact'
import useForm from '../utils/useForm'

const Form = styled.form`
  max-width: 80rem;
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
  button {
    margin: 2rem 0;
    align-self: end;
  }
`

const InlineField = styled.fieldset`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 0.5rem;
  border: none;
  margin-bottom: 2rem;
  input {
    padding: 1rem;
    margin: 0 0.5rem 2rem;
    border: none;
    border-bottom: 0.2rem inset var(--darkgray);
    background: transparent;
    font-family: inherit;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
  }
  @media only screen and (max-height: 750px) {
    margin-bottom: 1rem;
    input {
      font-size: 1.25rem;
    }
    a,
    button {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
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
    font-family: inherit;
  }
  textarea {
    width: 100%;
    margin: 0 0 2rem 0.5rem;
    padding: 1rem;
    border: none;
    border-bottom: 0.2rem inset var(--darkgray);
    background: transparent;
    font-family: inherit;
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

export default function Connect() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phone: '',
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
      netlify
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
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
        />
      </FullField>
      <InlineField className="emailPhone">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={values.email}
          onChange={updateValue}
          placeholder="Email"
          className="required"
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={values.phone}
          onChange={updateValue}
          placeholder="Phone"
          className="required"
        />
      </InlineField>
      <FullField className="message">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={values.message}
          onChange={updateValue}
          rows="7"
          placeholder="How can we help today?"
          className="required"
        />
      </FullField>
      <Submit type="submit" value="Submit">
        Submit
      </Submit>
    </Form>
  )
}
