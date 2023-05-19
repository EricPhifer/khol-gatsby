import * as React from 'react'
import styled from 'styled-components'

const CopyStyles = styled.footer`
  width: 100%;
  height: 3rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 0;
  background-color: var(--black);
  font-weight: 600;
  color: white;
`

const Copyright = () => (
  <CopyStyles className="storybrand">
    <p>
      &copy; {new Date().getFullYear()} All Rights Reserved Phifer Web Solutions
    </p>
  </CopyStyles>
)

export default Copyright
