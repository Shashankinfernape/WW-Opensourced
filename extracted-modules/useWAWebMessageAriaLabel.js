__d("useWAWebMessageAriaLabel", [
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebMessageUiUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebQuotedMsgModelUtils",
    "react-compiler-runtime",
    "useWAWebMessageAriaDescription",
    "useWAWebMsgValues",
    "useWAWebReactions"
], function(t, n, r, o, a, i, l) {
    function e(isFromTemplate, isDynamicReplyButtonsMsg, caption, mediaStage) {
        const a = !!((isFromTemplate || isDynamicReplyButtonsMsg) && caption);
        return !(a || o("WAWebMessageUiUtils").ETA_SUPPORTED_STATES.has(mediaStage));
    }
    function s(t, n) {
        switch(t){
            case o("WAWebMsgType").MSG_TYPE.CHAT:
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
            case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
            case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
            case o("WAWebMsgType").MSG_TYPE.STICKER:
            case o("WAWebMsgType").MSG_TYPE.PTT:
            case o("WAWebMsgType").MSG_TYPE.REVOKED:
            case o("WAWebMsgType").MSG_TYPE.PTV:
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.ALBUM:
                return true;
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return e(n.isFromTemplate, n.isDynamicReplyButtonsMsg, n.caption, n.mediaStage);
            default:
                return false;
        }
    }
    function u(e, t, n) {
        const a = o("react-compiler-runtime").c(9);
        let i;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMsgGetters")).getT,
                l.getAck,
                l.getIsSentByMe,
                o("WAWebFrontendMsgGetters").getAsRevoked,
                l.getShouldShowEditedIndicator,
                l.getType,
                l.getSubtype,
                l.getSender,
                l.getIsFromTemplate,
                l.getIsDynamicReplyButtonsMsg,
                l.getCaption,
                o("WAWebFrontendMsgGetters").getMediaData,
                o("WAWebFrontendMsgGetters").getSenderObj,
                l.getHasReaction
            ];
            a[0] = i;
        } else {
            i = a[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(e.id, i);
        const m = u[0];
        const ack = u[1];
        const _ = u[2];
        const asRevoked = u[3];
        const shouldShowEditedIndicator = u[4];
        const h = u[5];
        const subtype = u[6];
        const senderWid = u[7];
        const b = u[8];
        const isDynamicReplyButtonsMsg = u[9];
        const caption = u[10];
        const R = u[11];
        const senderContact = u[12];
        const E = u[13];
        const messageDescription = o("useWAWebMessageAriaDescription").useMessageAriaDescription(e, t, n);
        const I = o("WAWebFrontendMsgGetters").getMaybeChat(e.unsafe());
        const isElevatedPushNamesEnabled = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(I);
        let D;
        if (a[1] !== e.id) {
            D = e.id.toString();
            a[1] = e.id;
            a[2] = D;
        } else {
            D = a[2];
        }
        let x;
        if (a[3] !== t || a[4] !== D) {
            x = [
                D
            ].concat(t.map(d));
            a[3] = t;
            a[4] = D;
            a[5] = x;
        } else {
            x = a[5];
        }
        const $ = x;
        let P;
        if (a[6] !== t || a[7] !== E) {
            P = E || t.some(c);
            a[6] = t;
            a[7] = E;
            a[8] = P;
        } else {
            P = a[8];
        }
        const N = r("useWAWebReactions")($, r("WAWebNoop"), P);
        const N_numberOfSenderReactions = N.numberOfSenderReactions;
        const w = {
            isDynamicReplyButtonsMsg,
            isFromTemplate: b,
            caption,
            mediaStage: R?.mediaStage
        };
        if (!s(h, w) || !n.atLeastOnceKeyboardUser) {
            return null;
        }
        let A = null;
        if (e.quotedMsg) {
            A = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e);
        }
        const F = {
            type: h,
            subtype,
            isGif: R?.isGif,
            quotedMsg: A,
            senderWid
        };
        return o("WAWebMessageUiUtils").getMessageAriaLabel({
            t: m,
            ack,
            asRevoked,
            isSentByMe: _,
            numberReactions: N_numberOfSenderReactions,
            ariaLabelMessageType: F,
            senderWid,
            senderContact,
            shouldShowEditedIndicator,
            isElevatedPushNamesEnabled,
            messageDescription
        });
    }
    function c(e) {
        return o("WAWebMsgGetters").getHasReaction(e);
    }
    function d(e) {
        return e.id.toString();
    }
    l.useMessageAriaLabel = u;
}, 98);