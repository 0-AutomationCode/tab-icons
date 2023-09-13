const titleText = "2023-9-13 5 PM";
const title = $(`title`);
title.text(titleText);

// ! ===================

console.log(titleText);

const entireChat = $(`#pane-side`);

const AllNewMessages = entireChat.map((chat) => {
  const newMessage = {
    phoneNumber: ``,
    time: ``,
  };
  return newMessage;
});

console.log("ALLNEWMESSAGES: ", AllNewMessages);
