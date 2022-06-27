import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
      <Skeleton height="45px" mb={"5px"} />
    </Stack>
  );
};

export default ChatLoading;
