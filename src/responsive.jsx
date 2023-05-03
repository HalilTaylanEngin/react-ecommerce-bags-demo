import { css } from 'styled-components'

export const small = props => {
  return css`
    @media only screen and (max-width: 576px) {
      ${props}
    }
  `
}

export const medium = props => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `
}

export const large = props => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `
}

/*Bootstrap Breakpoints
Small	sm	≥576px
Medium	md	≥768px
Large	lg	≥992px
Extra large	xl	≥1200px
Extra extra large	xxl	≥1400px
 */
