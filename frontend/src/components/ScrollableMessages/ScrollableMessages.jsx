import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../../config/chatFunctions";
import { ChatState } from "../../context/chatProvider";
import { Avatar, Tooltip } from "@chakra-ui/react";
import { m } from "framer-motion";
const ScrollableMessages = ({ messages }) => {
  const { user } = ChatState();
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((msg, i) => {
          return (
            <div style={{ display: "flex" }} key={msg._id}>
              {(isSameSender(messages, msg, i, user._id) ||
                isLastMessage(messages, i, user._id)) && (
                <Tooltip label={msg.sender.name} placement="bottom-start" hasArrow>
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    cursor={"pointer"}
                    name={msg.sender.name}
                    src={msg.sender.picture}
                  />
                </Tooltip>
              )}

              <span
                style={{
                  backgroundColor: `${msg.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"}`,
                  marginLeft: isSameSenderMargin(messages, msg, i, user._id),
                  marginTop: isSameUser(messages, msg, i, user._id) ? 3 : 10,
                  borderRadius: "20px",
                  padding: "5px 15px",
                  maxWidth: "75%",
                }}
              >
                {msg.content}
              </span>
            </div>
          );
        })}
    </ScrollableFeed>
  );
};

export default ScrollableMessages;
