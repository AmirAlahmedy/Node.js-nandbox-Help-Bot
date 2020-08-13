import './src/outmessages/setChatMenuOutMessage';
import SetChatMenuOutMessage from './src/outmessages/setChatMenuOutMessage';
import Button from './src/data/Button';
import Row from './src/data/Row';
import  Menu from './src/data/Menu';
import Constant from './constant.json';

export default class MenuHelper {
  

    static createMainMenuMessage = chatId => {

        let setChatMainMenuMsg = new SetChatMenuOutMessage();
        
        let channelsBtn = createButton("Channels and Groups", "channelsCB", 1, "#b8e986", "Black", null, Constant.CHANNELS_MENU_REF, null);
        channelsBtn.button_icon = "ic_outline_rss_feed_24dp";
        channelsBtn.button_bgcolor = '#2F573F';
    
        let stickersBtn = createButton("Stickers", "stickersCB", 2, "#b8e986", "Black", null, Constant.STICKERS_MENU_REF, null);
		stickersBtn.button_icon = "ic_mood_24dp";
		stickersBtn.button_icon_bgcolor = "#2F573F";
    
        let recallMsgBtn = createButton("Recall Message", "RecallMessageCB", 3, "#b8e986", "Black", null, Constant.MAIN_MENU_REF, Constant.RECALL_MSG_MEDIA_LINK);
		recallMsgBtn.button_icon = "ic_delete_forever_24dp";
		recallMsgBtn.button_icon_bgcolor = "#2F573F";

        let shareLocationBtn = createButton("Share Location", "ShareLocationCB", 4, "#b8e986", "Black", null, Constant.MAIN_MENU_REF, Constant.SHARE_LOCATION_MEDIA_LINK);
        shareLocationBtn.button_icon = "ic_room_24dp";
        shareLocationBtn.button_icon_bgcolor = "#2F573F";

        let faqBtn = createButton("FAQ", "FAQCB", 5, "#29ba65", "white", null, Constant.MAIN_MENU_REF, Constant.FAQ_LINK);
    
        let mainMenu = [];
        
        let btns = [];
        btns.push(channelsBtn);
        btns.push(stickersBtn);
        let firstRow = new Row(btns, 1);
    
        btns = [];
        btns.push(recallMsgBtn);
        btns.push(shareLocationBtn);
        let secondRow = new Row(btns, 2);

        btns = [];
        btns.push(faqBtn);
        let faqRow = new Row(btns, 3);

        let rows = [];
        rows.push(firstRow);
        rows.push(secondRow);
        rows.push(faqRow);
        let chatMainMenu = new Menu(rows, Constant.MAIN_MENU_REF);

        mainMenu.push(chatMainMenu);
        mainMenu.push(createChannelsSubMenus());
        mainMenu.push(createStickersSubMenus());

        setChatMainMenuMsg.menus = mainMenu;
        setChatMainMenuMsg.chat_id = chatId;
        console.log(setChatMainMenuMsg);
        return setChatMainMenuMsg;
    }

    

}

let createChannelsSubMenus = () => {
    
    let firstRow;
    let secondRow;
    let backRow;
    
    let createChannelBtn = createButton("Create Channel", "CreateChannelCB", 1, "#478de5", "White", null, Constant.CHANNELS_MENU_REF, Constant.CREATE_CHANNEL_MEDIA_LINK);
    let createGroupBtn = createButton("Create Group", "CreateGroupCB", 2, "#478de5", "White", null, Constant.CHANNELS_MENU_REF, Constant.CREATE_GROUP_MEDIA_LINK);
    let deleteGroupBtn = createButton("Delete Group", "DeleteGroupCB", 3, "#478de5", "White", null,Constant.CHANNELS_MENU_REF, Constant.DELETE_GROUP_MEDIA_LINK);
    
    let btns = [];
    btns.push(createChannelBtn);
    btns.push(createGroupBtn);
    let backBtn = createButton("Back", "BackCB", 4, "#33649d", "White", null, Constant.MAIN_MENU_REF, null);
    firstRow = new Row(btns, 1);
    btns = [];
    btns.push(deleteGroupBtn);
    secondRow = new Row(btns, 2);
    btns = [];
    btns.push(backBtn);
    backRow = new Row(backRow, 3);
    
    let rows = [];
    rows.push(firstRow);
    rows.push(secondRow);
    rows.push(backRow);

    return (new Menu(rows, 'ChannelsMenu'));
}

let createStickersSubMenus = () => {
    
    let row;
    let backRow;
   
    let useStickersBtn = createButton("Use Stickers", "UseStickersCB", 1, "#edad43", "White", null, Constant.STICKERS_MENU_REF, Constant.USE_STICKERS_MEDIA_LINK);
    let downloadStickersBtn = createButton("Download Stickers", "DownloadStickersCB", 2, "#edad43", "White", null, Constant.STICKERS_MENU_REF, Constant.DOWNLOAD_STICKERS_MEDIA_LINK);
    let backBtn = createButton("Back", "BackCB", 3, "#bd7700", "White", null, Constant.MAIN_MENU_REF, null);

    let btns = [];
    btns.push(useStickersBtn);
    btns.push(downloadStickersBtn );
    row = new Row(btns)
    btns = [];
    btns.push(backBtn);
    backRow = new Row(btns);
    let rows = [];
    rows.push(row);
    rows.push(backRow);


    return (new Menu(rows, "StickersMenu"));
}

let createButton = (label, callback, order, bgColor, txtColor, buttonQuery, nextMenuRef, buttonURL) => {
    let btn = new Button();

    btn.button_label = label;
    btn.button_order = order;
    btn.button_callback = callback;
    btn.button_bgcolor = bgColor;
    btn.button_textcolor = txtColor;
    btn.button_query = buttonQuery;
    btn.next_menu = nextMenuRef;
    btn.button_url = buttonURL;

    return btn;
 }