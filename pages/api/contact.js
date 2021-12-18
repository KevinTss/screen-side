/**
 * Resources:
 * - https://api.slack.com/methods/chat.postMessage
 * - https://api.slack.com/tutorials/tracks/posting-messages-with-curl?app_id_from_manifest=A02QUN5ACUF
 * - https://api.slack.com/apps/A02QUN5ACUF/general
 * - https://screenside.slack.com/admin/settings
 */
const axios = require("axios")

const { COLOR, ERROR_MESSAGE_CODE } = require("../../utils/constants")

const authorizedHosts = ["localhost:3000", "screenside.be"]

const getSlackBodyObject = ({ email, first, last, message }) => [
  {
    type: `section`,
    text: {
      type: `mrkdwn`,
      text: `New message from website:`,
    },
  },
  {
    type: "divider",
  },
  {
    type: `section`,
    fields: [
      {
        type: `mrkdwn`,
        text: `*First Name:*\n${first}`,
      },
      {
        type: `mrkdwn`,
        text: `*Last Name:*\n${last}`,
      },
      {
        type: `mrkdwn`,
        text: `*Email:*\n${email}`,
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: `section`,
    text: {
      type: `mrkdwn`,
      text: `*Message:*\n${message}`,
    },
  },
]

export default async function handler(req, res) {
  try {
    if (!process.env.SLACK_TOKEN) {
      res.status(500).json({ message: ERROR_MESSAGE_CODE.NO_TOKEN })

      return
    }
    if (req.method !== "POST") {
      res.status(401).json({ message: ERROR_MESSAGE_CODE.NOT_AUTHORIZED })

      return
    }
    if (!authorizedHosts.some(host => req.headers.host.includes(host))) {
      res.status(401).json({ message: ERROR_MESSAGE_CODE.NOT_AUTHORIZED })

      return
    }
    if (!req.body) {
      res.status(401).json({ message: ERROR_MESSAGE_CODE.NO_BODY_GIVEN })

      return
    }
    if (
      !req.body.email ||
      !req.body.first ||
      !req.body.last ||
      !req.body.message
    ) {
      res.status(401).json({ message: ERROR_MESSAGE_CODE.BODY_INCOMPLETE })

      return
    }

    const slackResponse = await axios({
      method: "POST",
      url: "https://slack.com/api/chat.postMessage",
      headers: { Authorization: `Bearer ${process.env.SLACK_TOKEN}` },
      data: {
        channel: "feed-get-in-touch",
        blocks: getSlackBodyObject(req.body),
      },
    })

    if (!slackResponse.data.ok) {
      res.status(500).json({ message: slackResponse.data.error })

      return
    }

    res.status(200).json({
      message: "message-sent",
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
