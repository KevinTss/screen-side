import React, { useState } from "react"

import {
  GetInTouchContainer,
  Form,
  FormGroup,
  AlertContainer,
  AlertCloseButton,
} from "./style"
import { Container } from "../../../styles"
import { Input, Button, Label, Heading, P, Image } from "../../ui"
import closeIconSuccess from "../../../assets/images/icon/close-success.svg"
import closeIconDanger from "../../../assets/images/icon/close-danger.svg"
import { COLOR } from "../../../utils/constants"

const endPoint =
  "https://hooks.slack.com/services/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"

const sendInfo = (data, successCallback, errorCallback) => {
  const body = {
    text: `New message from ${data.name} — ${data.email}`,
    attachments: [
      {
        color: COLOR.PICTON_BLUE,
        fields: [
          {
            title: "Message",
            value: data.message,
            short: false,
          },
        ],
      },
    ],
  }

  fetch(endPoint, {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then(res => {
      if (res.ok) {
        successCallback()
      } else {
        errorCallback(JSON.stringify(res))
      }
    })
    .catch(err => errorCallback(err.message))
}

const sendErrorInfo = data => {
  const body = {
    text: `Error on form submission`,
    attachments: [
      {
        color: COLOR.CARNATION,
        fields: [
          {
            title: "Error message",
            value: data.message,
            short: false,
          },
        ],
      },
    ],
  }

  fetch(endPoint, {
    method: "POST",
    body: JSON.stringify(body),
  }).then(res => {
    console.log("res", res)
  })
}

const canSendForm = (name, email, message) => {
  const isNameCorrect = !!name && name.length > 3
  const isEmailCorrect = !!email && email.includes("@")
  const isMessageCorrect = !!message && message.length > 10

  return isNameCorrect && isEmailCorrect && isMessageCorrect
}

const GetInTouch = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSentMessage, setIsSentMessage] = useState(false)
  const [error, setError] = useState(false)

  return (
    <GetInTouchContainer id="get-in-touch">
      <Container>
        <Form
          onSubmit={event => {
            event.preventDefault()

            sendInfo(
              {
                name,
                email,
                message,
              },
              () => {
                setName("")
                setEmail("")
                setMessage("")
                setIsSentMessage(true)
              },
              errorMessage => {
                setError(true)
                sendErrorInfo({
                  message: errorMessage,
                })
              }
            )
          }}
        >
          <Heading level={3}>
            Let's chat{" "}
            <span role="img" aria-label="emoji smile">
              🙂
            </span>
          </Heading>

          <FormGroup>
            <Label htmlFor="name-input">How should I call you?</Label>
            <Input
              id="name-input"
              type="text"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email-input">What's your best e-mail?</Label>
            <Input
              id="email-input"
              type="email"
              name="email"
              placeholder="john.doe@email.com"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message-input">Explain me your idea</Label>
            <Input
              id="message-input"
              type="textarea"
              name="message"
              placeholder="Your awesome words here..."
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
          </FormGroup>

          <AlertContainer
            isVisible={isSentMessage || error}
            type={error ? "danger" : "success"}
          >
            <AlertCloseButton
              onClick={event => {
                event.preventDefault()
                error ? setError(false) : setIsSentMessage(false)
              }}
            >
              <Image svg={error ? closeIconDanger : closeIconSuccess} />
            </AlertCloseButton>
            {error ? (
              <P>
                Sorry, something went wrong on our side, I'm working on it
                <br />
                <span role="img" aria-label="emoji grinning">
                  😅
                </span>
                <br />
                Try again later or reach me on{" "}
                <a
                  href="https://www.facebook.com/ScreenSideWebsiteCreation/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Facebook
                </a>
              </P>
            ) : (
              <P>
                Thank you for your message
                <br />
                <span role="img" aria-label="emoji hand up">
                  🙌
                </span>
                <br />I will come back to you soon
              </P>
            )}
          </AlertContainer>

          <Button
            type="submit"
            data-track="get-in-touch"
            disabled={!canSendForm(name, email, message)}
          >
            submit
          </Button>
        </Form>
      </Container>
    </GetInTouchContainer>
  )
}

export default GetInTouch
