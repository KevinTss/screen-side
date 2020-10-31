import React, { useState, useEffect } from "react"

import {
  GetInTouchContainer,
  Form,
  FormGroup,
  SuccessContainer,
  SuccessCloseButton,
} from "./style"
import { Container } from "../../../styles"
import { Input, Button, Label, Heading, P, Image } from "../../ui"
import closeIcon from "../../../assets/images/icon/close.svg"
import { COLOR } from "../../../utils/constants"

const endPoint =
  "https://hooks.slack.com/services/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"

const sendInfo = (data, callback) => {
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
  }).then(() => callback())
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

  useEffect(() => {
    console.log("coucou", isSentMessage)
  }, [isSentMessage])

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

          <SuccessContainer isVisible={isSentMessage}>
            <SuccessCloseButton
              onClick={event => {
                event.preventDefault()
                setIsSentMessage(false)
              }}
            >
              <Image svg={closeIcon} />
            </SuccessCloseButton>
            <P>
              Thank you for your message
              <br />
              <span role="img" aria-label="emoji smile">
                🙌
              </span>
              <br />I will come back to you soon
            </P>
          </SuccessContainer>

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
