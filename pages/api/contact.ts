import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { ERROR_MESSAGE_CODE } from "../../utils/constants"

const authorizedHosts = ["localhost:3000", "screenside.be"]

interface SlackField {
  type: string
  text: string
}

interface SlackBlock {
  type: string
  text?: { type: string; text: string }
  fields?: SlackField[]
}

interface ContactBody {
  email: string
  first: string
  last: string
  message: string
}

const getSlackBodyObject = ({
  email,
  first,
  last,
  message,
}: ContactBody): SlackBlock[] => [
  {
    type: "section",
    text: { type: "mrkdwn", text: "New message from website:" },
  },
  { type: "divider" },
  {
    type: "section",
    fields: [
      { type: "mrkdwn", text: `*First Name:*\n${first}` },
      { type: "mrkdwn", text: `*Last Name:*\n${last}` },
      { type: "mrkdwn", text: `*Email:*\n${email}` },
    ],
  },
  { type: "divider" },
  {
    type: "section",
    text: { type: "mrkdwn", text: `*Message:*\n${message}` },
  },
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!process.env.SLACK_TOKEN) {
      res.status(500).json({ message: ERROR_MESSAGE_CODE.NO_TOKEN })
      return
    }
    if (req.method !== "POST") {
      res.status(401).json({ message: ERROR_MESSAGE_CODE.NOT_AUTHORIZED })
      return
    }
    if (!authorizedHosts.some(host => req.headers.host?.includes(host))) {
      res.status(401).json({ message: ERROR_MESSAGE_CODE.NOT_AUTHORIZED })
      return
    }
    if (!req.body) {
      res.status(401).json({ message: ERROR_MESSAGE_CODE.NO_BODY_GIVEN })
      return
    }
    const { email, first, last, message } = req.body as ContactBody
    if (!email || !first || !last || !message) {
      res.status(401).json({ message: ERROR_MESSAGE_CODE.BODY_INCOMPLETE })
      return
    }

    const slackResponse = await axios({
      method: "POST",
      url: "https://slack.com/api/chat.postMessage",
      headers: { Authorization: `Bearer ${process.env.SLACK_TOKEN}` },
      data: {
        channel: "feed-get-in-touch",
        blocks: getSlackBodyObject({ email, first, last, message }),
      },
    })

    if (!slackResponse.data.ok) {
      res.status(500).json({ message: slackResponse.data.error })
      return
    }

    res.status(200).json({ message: "message-sent" })
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}
