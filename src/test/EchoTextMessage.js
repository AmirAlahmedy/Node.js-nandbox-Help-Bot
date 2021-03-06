"use strict";
const Nand = require("../NandBoxClient");
const NandBoxClient = Nand.NandBoxClient;
const NandBox = require("../NandBox");


const TOKEN = "90091783927225986:0:DVi21J0RFyVv0zZrDMxkYbmN1V74x1"; // replace it with your token


const config = {
    URI: "wss://d1.nandbox.net:5020/nandbox/api/",
    DownloadServer: "https://d1.nandbox.net:5020/nandbox/download/",
    UploadServer: "https://d1.nandbox.net:5020/nandbox/upload/"
}
var client = NandBoxClient.get(config);



var nandbox = new NandBox();
var nCallBack = nandbox.Callback;
var api = null;

nCallBack.onConnect = (_api) => {
    // it will go here if the bot connected to the server successfuly 

    api = _api;
    console.log("Authenticated");

}



nCallBack.onReceive = incomingMsg => {
    console.log("Message Received");

    if (incomingMsg.isTextMsg()) {
        let chatId = incomingMsg.chat.id; // get your chat Id
        let text = incomingMsg.text; // get your text message
        api.sendText(chatId, text); // Sending message back as an Echo
    }

}

// implement other nandbox.Callback() as per your bot need
nCallBack.onReceiveObj = obj => {
    console.log("received object: ", obj);
}

nCallBack.onClose = () => {
    // TODO Auto-generated method stub

}

nCallBack.onError = () => {
    // TODO Auto-generated method stub

}

nCallBack.onChatMenuCallBack = chatMenuCallback => {
    // TODO Auto-generated method stub

}

nCallBack.onInlineMessageCallback = inlineMsgCallback => {
    // TODO Auto-generated method stub

}

nCallBack.onMessagAckCallback = msgAck => {
    // TODO Auto-generated method stub

}

nCallBack.onUserJoinedBot = user => {
    // TODO Auto-generated method stub

}

nCallBack.onChatMember = chatMember => {
    // TODO Auto-generated method stub

}

nCallBack.onChatAdministrators = chatAdministrators => {
    // TODO Auto-generated method stub

}

nCallBack.userStartedBot = user => {
    // TODO Auto-generated method stub

}

nCallBack.onMyProfile = user => {
    // TODO Auto-generated method stub

}

nCallBack.onUserDetails = user => {
    // TODO Auto-generated method stub

}

nCallBack.userStoppedBot = user => {
    // TODO Auto-generated method stub

}

nCallBack.userLeftBot = user => {
    // TODO Auto-generated method stub

}

nCallBack.permanentUrl = permenantUrl => {
    // TODO Auto-generated method stub

}

nCallBack.onChatDetails = chat => {
    // TODO Auto-generated method stub

}

nCallBack.onInlineSearh = inlineSearch => {
    // TODO Auto-generated method stub

}


client.connect(TOKEN, nCallBack);