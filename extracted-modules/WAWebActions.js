__d("WAWebActions", [
    "fbt",
    "$InternalEnum",
    "WAWebFbtCommon"
], function(t, n, r, o, a, i, l, s) {
    const e = n("$InternalEnum").Mirrored([
        "CONTACT_US",
        "DECREASE_PTT_SPEED",
        "GO_TO_NEXT_CHAT",
        "GO_TO_PREV_CHAT",
        "INCREASE_PTT_SPEED",
        "LOGOUT",
        "OPEN_NEW_CHAT",
        "OPEN_NEW_GROUP",
        "OPEN_PROFILE",
        "OPEN_SETTINGS",
        "CLOSE_CHAT",
        "SEARCH",
        "SEARCH_IN_CHAT",
        "TOGGLE_ARCHIVE",
        "TOGGLE_MUTE",
        "TOGGLE_PIN",
        "TOGGLE_UNREAD",
        "OPEN_EMOJI_PANEL",
        "OPEN_GIF_PANEL",
        "OPEN_STICKER_PANEL",
        "TOGGLE_STICKER_MAKER",
        "TOGGLE_COMMAND_PALETTE",
        "LOCK_SCREEN",
        "LABEL_CHAT",
        "TOGGLE_BOLD",
        "TOGGLE_ITALIC",
        "TOGGLE_STRIKETHROUGH",
        "TOGGLE_CODE",
        "TOGGLE_INLINE_CODE",
        "TOGGLE_NUMBERED_LIST",
        "TOGGLE_BULLETED_LIST",
        "TOGGLE_QUOTE",
        "TOGGLE_THEME",
        "ZOOM_IN",
        "ZOOM_OUT",
        "ZOOM_RESET",
        "OPEN_CHAT_INFO",
        "BLOCK_CHAT",
        "REPLY",
        "REPLY_PRIVATE",
        "FORWARD",
        "STAR_MESSAGE",
        "OPEN",
        "OPEN_ATTACHMENT_DROPDOWN",
        "START_PTT_RECORDING",
        "PAUSE_PTT_RECORDING",
        "SEND_PTT",
        "EDIT_LAST_MESSAGE",
        "OPEN_NTH_CHAT",
        "TOGGLE_PRIVACY_MODE",
        "TOGGLE_CALL_CAMERA",
        "TOGGLE_CALL_MUTE",
        "SHOW_CALL_REACTIONS",
        "TOGGLE_RAISE_HAND",
        "START_SCREEN_SHARE",
        "END_CALL"
    ]);
    function u(t) {
        switch(t){
            case e.TOGGLE_UNREAD:
                return s._("Mark as unread");
            case e.TOGGLE_MUTE:
                return s._("Mute");
            case e.TOGGLE_ARCHIVE:
                return s._("Archive chat");
            case e.TOGGLE_PIN:
                return s._("Pin chat");
            case e.SEARCH:
                return r("WAWebFbtCommon")("Search");
            case e.SEARCH_IN_CHAT:
                return s._("Search chat");
            case e.OPEN_NEW_CHAT:
                return s._("New chat");
            case e.GO_TO_NEXT_CHAT:
                return s._("Next chat");
            case e.GO_TO_PREV_CHAT:
                return s._("Previous chat");
            case e.CLOSE_CHAT:
                return s._("Close chat");
            case e.OPEN_NEW_GROUP:
                return s._("New group");
            case e.OPEN_PROFILE:
                return s._("Profile and About");
            case e.INCREASE_PTT_SPEED:
                return s._("Increase speed of selected voice message");
            case e.DECREASE_PTT_SPEED:
                return s._("Decrease speed of selected voice message");
            case e.OPEN_SETTINGS:
                return s._("Settings");
            case e.OPEN_EMOJI_PANEL:
                return s._("Emoji panel");
            case e.OPEN_GIF_PANEL:
                return s._("GIF panel");
            case e.OPEN_STICKER_PANEL:
                return s._("Sticker panel");
            case e.LOCK_SCREEN:
                return s._("Lock app");
            case e.LABEL_CHAT:
                return s._("Add chat to list");
            case e.TOGGLE_COMMAND_PALETTE:
                return s._("Extended search");
            case e.ZOOM_IN:
                return s._("Zoom in");
            case e.ZOOM_OUT:
                return s._("Zoom out");
            case e.ZOOM_RESET:
                return s._("Zoom reset");
            case e.OPEN_CHAT_INFO:
                return s._("Open chat info");
            case e.BLOCK_CHAT:
                return s._("Block chat");
            case e.REPLY:
                return s._("Reply");
            case e.REPLY_PRIVATE:
                return s._("Reply privately");
            case e.FORWARD:
                return s._("Forward");
            case e.STAR_MESSAGE:
                return s._("Star message");
            case e.OPEN_ATTACHMENT_DROPDOWN:
                return s._("Open attachment dropdown");
            case e.START_PTT_RECORDING:
                return s._("Start PTT recording");
            case e.PAUSE_PTT_RECORDING:
                return s._("Pause PTT recording");
            case e.SEND_PTT:
                return s._("Send PTT");
            case e.EDIT_LAST_MESSAGE:
                return s._("Edit last message");
            case e.OPEN_NTH_CHAT:
                return s._("Open chat");
            case e.TOGGLE_PRIVACY_MODE:
                return s._("Toggle privacy screen");
            case e.TOGGLE_CALL_CAMERA:
                return s._("Toggle camera");
            case e.TOGGLE_CALL_MUTE:
                return s._("Toggle mute");
            case e.SHOW_CALL_REACTIONS:
                return s._("Reactions");
            case e.TOGGLE_RAISE_HAND:
                return s._("Raise hand");
            case e.START_SCREEN_SHARE:
                return s._("Screen share");
            case e.END_CALL:
                return s._("End call");
            default:
                return "";
        }
    }
    l.Action = e;
    l.getLabel = u;
}, 226);