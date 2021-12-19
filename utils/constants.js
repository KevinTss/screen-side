export const COLOR = {
  CARNATION: "#f05f6a",
  // CASABLANCA: "#f8be4a",
  CLOUD_BURST: "#1d254f",
  // DOLPHIN: "#656686",
  MYSTIC: "#e7ebf0",
  PICTON_BLUE: "#54b8f2",
  SHAMROCK: "#5ae0a6",
  // WHISPER: "#f6f7fa",
}

const BREAKPOINT = {
  XL: "1280px",
  L: "1024px",
  M: "768px",
  S: "498px",
}

export const MEDIA_QUERY = {
  DESKTOP: `@media only screen and (min-width: ${BREAKPOINT.XL})`,
  SMALL_DESKTOP_AND_DOWN: `@media only screen and (max-width: ${BREAKPOINT.XL})`,
  TABLET_AND_DOWN: `@media only screen and (max-width: ${BREAKPOINT.M})`,
  MOBILE_AND_DOWN: `@media only screen and (max-width: ${BREAKPOINT.S})`,
}

export const ERROR_MESSAGE_CODE = {
  NO_TOKEN: "no-token",
  NOT_AUTHORIZED: "not-authorized",
  NO_BODY_GIVEN: "no-body-given",
  BODY_INCOMPLETE: "body-incomplete",
}
