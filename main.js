"use strict";
const NandBox = require("./src/NandBox");
const Nand = require("./src/NandBoxClient");
const NandBoxClient = Nand.NandBoxClient;
import MenuHelper from './menuHelper';
import Constant from './constant.json';
const Utils = require("./src/util/Utility");
const Utility = Utils.Utility;

const TOKEN = "90091942869252185:0:Ye7bvRvxTDtnLj3fOwucJ4uiKFC1V7";
const config = {
    URI: "wss://w1.nandbox.net:5020/nandbox/api/",
    DownloadServer: "https://w1.nandbox.net:5020/nandbox/download/",
    UploadServer: "https://w1.nandbox.net:5020/nandbox/upload/"
}


var client = NandBoxClient.get(config);
var nandbox = new NandBox();
var nCallBack = nandbox.Callback;
var api = null;

nCallBack.onConnect = (_api) => {
    // it will go here if the bot connected to the server successfuly 
    api = _api;
    console.log("Authenticated and Connected Successfully!");
}

nCallBack.onReceive = incomingMsg => {
    console.log("Message Received");

    sendBotMenuWithNavigationButton(incomingMsg.chat.id);
	api.sendText(incomingMsg.chat.id, "Please use Bot Menu");
        


}


// implement other nandbox.Callback() as per your bot need
nCallBack.onReceiveObj = obj => {}
nCallBack.onClose = () => console.log("ONCLOSE");
nCallBack.onError = () => console.log("ONERROR");
nCallBack.onChatMenuCallBack = chatMenuCallback => {

                console.log(chatMenuCallback.toJsonObject());
				let chatId = chatMenuCallback.getChat().getId();

				// Group And Channel

				if (chatMenuCallback.button_callback === "CreateChannelCB") {

					api.sendText(chatId, Constant.CREATE_CHANNEL_MEDIA_LINK);

				}

                if (chatMenuCallback.button_callback === "CreateGroupCB") {

					api.sendText(chatId, Constant.CREATE_GROUP_MEDIA_LINK);
				}

				if (chatMenuCallback.button_callback === "DeleteGroupCB") {

					api.sendText(chatId, Constant.DELETE_GROUP_MEDIA_LINK);
				}

				// Stickers
				if (chatMenuCallback.button_callback === "UseStickersCB") {

					api.sendText(chatId, Constant.USE_STICKERS_MEDIA_LINK);

				}

				if (chatMenuCallback.button_callback === "DownloadStickersCB") {

					api.sendText(chatId, Constant.DOWNLOAD_STICKERS_MEDIA_LINK);

				}

				// Recall
				if (chatMenuCallback.button_callback === "RecallMessageCB") {

					api.sendText(chatId, Constant.RECALL_MSG_MEDIA_LINK);
				}

				// ShareLocation
				if (chatMenuCallback.button_callback === "ShareLocationCB") {

					api.sendText(chatId, Constant.SHARE_LOCATION_MEDIA_LINK);
				}
 }
nCallBack.onInlineMessageCallback = inlineMsgCallback => { }
nCallBack.onMessagAckCallback = msgAck => { }
nCallBack.onUserJoinedBot = user => { 
	sendBotMenuWithNavigationButton(user.id);
}
nCallBack.onChatMember = chatMember => { }
nCallBack.onChatAdministrators = chatAdministrators => { }
nCallBack.userStartedBot = user => {
	sendBotMenuWithNavigationButton(user.id);
 }
nCallBack.onMyProfile = user => { }
nCallBack.onUserDetails = user => { }
nCallBack.userStoppedBot = user => { }
nCallBack.userLeftBot = user => { }
nCallBack.permanentUrl = permenantUrl => { }
nCallBack.onChatDetails = chat => { }
nCallBack.onInlineSearh = inlineSearch => { }



let sendBotMenuWithNavigationButton = (chatId) => {
	let utility = new Utility();
	utility.setNavigationButton(chatId, Constant.MAIN_MENU_REF, api);
    api.send(JSON.stringify(MenuHelper.createMainMenuMessage(chatId)));
}


client.connect(TOKEN, nCallBack);