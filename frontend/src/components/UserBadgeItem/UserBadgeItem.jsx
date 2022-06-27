import { Box } from "@chakra-ui/react";
import React from "react";
import { IoMdClose } from "react-icons/io";
const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="purple"
      color={"white"}
      cursor={"pointer"}
      onClick={handleFunction}
      textTransform="capitalize"
    >
      {user.name}
      <IoMdClose style={{ marginLeft: "5px" }} fontSize={15} />
    </Box>
  );
};

export default UserBadgeItem;
