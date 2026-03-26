export const COLOR = {
  CARNATION: "#f05f6a",
  CLOUD_BURST: "#1d254f",
  MYSTIC: "#e7ebf0",
  PICTON_BLUE: "#54b8f2",
  SHAMROCK: "#5ae0a6",
} as const

const BREAKPOINT = {
  XL: "1280px",
  L: "1024px",
  M: "768px",
  S: "498px",
} as const

export const MEDIA_QUERY = {
  DESKTOP: `@media only screen and (min-width: ${BREAKPOINT.XL})`,
  SMALL_DESKTOP_AND_DOWN: `@media only screen and (max-width: ${BREAKPOINT.XL})`,
  TABLET_AND_DOWN: `@media only screen and (max-width: ${BREAKPOINT.M})`,
  MOBILE_AND_DOWN: `@media only screen and (max-width: ${BREAKPOINT.S})`,
} as const

export const ERROR_MESSAGE_CODE = {
  NO_TOKEN: "no-token",
  NOT_AUTHORIZED: "not-authorized",
  NO_BODY_GIVEN: "no-body-given",
  BODY_INCOMPLETE: "body-incomplete",
} as const
