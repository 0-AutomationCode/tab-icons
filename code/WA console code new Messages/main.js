const titleText = "9-13 5 PM | ";
const title = $(`title`);
title.text(titleText + title.text());

console.log(titleText);
// ! ===================

const mainDiv = $("#pane-side");

const entireChat = mainDiv.children().children().children().children();

let allNewMessagesNumbers = "";

const allNewMessages = entireChat.map((i, oneChat) => {
  // console.log(oneChat);
  const [phoneNumber, time] = $(
    $($(oneChat).children().children().children().children()[1]).children()[0]
  ).children();
  const phoneNumberArray = $(phoneNumber).text().split(" ");
  timeText = $(time).text();

  let phoneNumberText = "";

  if (phoneNumberArray[0] === "+962") {
    phoneNumberText =
      phoneNumberArray[1][0] +
      phoneNumberArray[phoneNumberArray.length - 2] +
      phoneNumberArray[phoneNumberArray.length - 1];
  } else {
    // console.log(phoneNumberArray);
    phoneNumberText = phoneNumberArray.join("").split("\n").join("").slice(1);
  }
  allNewMessagesNumbers = allNewMessagesNumbers + "\n" + phoneNumberText;

  phoneNumberText = phoneNumberText;
  const newMessage = {
    phoneNumber: phoneNumberText,
    time: timeText,
  };
  return newMessage;
});

console.log("allNewMessages: ", allNewMessages);

console.log("allNewMessagesNumbers: ", allNewMessagesNumbers);

//  ! Test ===================

const testChat = $(
  $(
    $(entireChat[2]).children().children().children().children()[1]
  ).children()[0]
).children();

const [pn, t] = testChat;

const textPhoneNumber = "+962 7\n                                    7739 6184";
//  ! Test ===================
