import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

import {
  GetInTouchContainer,
  Form,
  FormGroup,
  AlertContainer,
  AlertCloseButton,
  ErrorMessage,
} from "./style"
import { Container } from "../../../styles"
import { Input, Button, Label, Heading, Text, Image } from "../../ui"
import closeIconSuccess from "../../../assets/images/icon/close-success.svg"
import closeIconDanger from "../../../assets/images/icon/close-danger.svg"

const formSchema = Yup.object().shape({
  name: Yup.string().min(2, "Your name is too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(20, "Explain a little more your request")
    .required("Required"),
})

const GetInTouch = () => {
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [hasMessageError, setHasMessageError] = useState("")
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
    dirty,
  } = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: formSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios({
          method: "POST",
          url: "/api/contact",
          data: {
            first: values.name.split(" ")[0] || "none",
            last: values.name.split(" ")[1] || "none",
            email: values.email,
            message: values.message,
          },
        })
        setIsMessageSent(true)
        resetForm()
      } catch (error) {
        setIsMessageSent(true)
        setHasMessageError(error.message)
      }
    },
  })

  return (
    <GetInTouchContainer id="contact-me">
      <Container>
        <Form onSubmit={handleSubmit}>
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
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.name && !!errors.name}
            />
            {touched.name && errors.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email-input">What's your best e-mail?</Label>
            <Input
              id="email-input"
              type="email"
              name="email"
              placeholder="john.doe@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.email && !!errors.email}
            />
            {touched.email && errors.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message-input">Explain me your idea</Label>
            <Input
              id="message-input"
              type="textarea"
              name="message"
              placeholder="Your awesome words here..."
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.message && !!errors.message}
            />
            {touched.message && errors.message && (
              <ErrorMessage>{errors.message}</ErrorMessage>
            )}
          </FormGroup>

          <AlertContainer
            isVisible={isMessageSent}
            type={hasMessageError ? "danger" : "success"}
          >
            <AlertCloseButton
              onClick={event => {
                event.preventDefault()
                setIsMessageSent(false)
                setHasMessageError("")
              }}
            >
              <Image
                src={hasMessageError ? closeIconDanger : closeIconSuccess}
              />
            </AlertCloseButton>
            {hasMessageError ? (
              <Text>
                Sorry, something went wrong on my side, I'm working on it
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
              </Text>
            ) : (
              <Text>
                Thank you for your message
                <br />
                <span role="img" aria-label="emoji hand up">
                  🙌
                </span>
                <br />I will come back to you soon
              </Text>
            )}
          </AlertContainer>

          <Button
            type="submit"
            data-track="get-in-touch"
            disabled={
              !dirty && Object.keys(touched) === 3 && Object.keys(errors) === 0
            }
          >
            Send message
          </Button>
        </Form>
      </Container>
    </GetInTouchContainer>
  )
}

export default GetInTouch
