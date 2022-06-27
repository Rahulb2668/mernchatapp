import { Box } from "@chakra-ui/react";
import { ChatState } from "../../context/chatProvider";
import { SideDrawer, MyChats, ChatBox } from "../../components";
import { useState } from "react";
const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent={"space-between"} w="100%" height="91vh" padding="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Box>
    </div>
  );
};

export default Chatpage;
