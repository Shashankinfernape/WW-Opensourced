__d("WAWebMessageRow.react", [
    "WAWebBizAiMessageEditPostEditHintSlot.react",
    "WAWebGetDisplayType",
    "WAWebMBSInboxOrderNotice.react",
    "WAWebMessagePosition",
    "WAWebMessageWrapper.react",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebPrivacyModeBlurConfig",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useRef } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(38);
        const { groupedWithNext, groupedWithPrev, handleMsgRendered, isFocusedMsg, isFollowUpReply, isMsgVisible, msg, onMessageSelect, selectable, selectedMessages, setFocusedMessage, showProfilePicture } = e;
        let position;
        if (groupedWithNext && !groupedWithPrev) {
            position = o("WAWebMessagePosition").MsgPosition.FRONT;
        } else if (groupedWithNext && groupedWithPrev) {
            position = o("WAWebMessagePosition").MsgPosition.MID;
        } else if (!groupedWithNext && groupedWithPrev) {
            position = o("WAWebMessagePosition").MsgPosition.END;
        } else {
            position = o("WAWebMessagePosition").MsgPosition.SINGLE;
        }
        let C;
        if (t[0] !== msg || t[1] !== setFocusedMessage) {
            C = function() {
                setFocusedMessage(msg.unsafe());
            };
            t[0] = msg;
            t[1] = setFocusedMessage;
            t[2] = C;
        } else {
            C = t[2];
        }
        const onMsgFocus = C;
        let v;
        if (t[3] !== setFocusedMessage) {
            v = function() {
                setFocusedMessage(null);
            };
            t[3] = setFocusedMessage;
            t[4] = v;
        } else {
            v = t[4];
        }
        const onMsgBlur = v;
        let R;
        if (t[5] !== handleMsgRendered || t[6] !== msg.id) {
            R = function(t) {
                handleMsgRendered(t, msg.id.toString());
            };
            t[5] = handleMsgRendered;
            t[6] = msg.id;
            t[7] = R;
        } else {
            R = t[7];
        }
        const L = R;
        const E = msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE || msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO || msg.type === o("WAWebMsgType").MSG_TYPE.AUDIO || msg.carouselCards != null;
        const kRef = useRef(null);
        const category = E ? o("WAWebPrivacyModeBlurConfig").BlurCategory.Media : o("WAWebPrivacyModeBlurConfig").BlurCategory.General;
        let T;
        if (t[8] !== msg) {
            T = msg.unsafe();
            t[8] = msg;
            t[9] = T;
        } else {
            T = t[9];
        }
        let D;
        if (t[10] !== msg) {
            D = o("WAWebGetDisplayType").getDisplayType(msg.unsafe());
            t[10] = msg;
            t[11] = D;
        } else {
            D = t[11];
        }
        const isMsgVisible_1 = E || msg.selectedCarouselCardIndex != null ? isMsgVisible : r("WAWebNoop");
        let $;
        if (t[12] !== isFocusedMsg || t[13] !== isFollowUpReply || t[14] !== onMsgBlur || t[15] !== onMsgFocus || t[16] !== onMessageSelect || t[17] !== position || t[18] !== L || t[19] !== selectable || t[20] !== selectedMessages || t[21] !== showProfilePicture || t[22] !== T || t[23] !== D || t[24] !== isMsgVisible_1) {
            const Component = r("WAWebMessageWrapper.react");
            $ = <Component onMsgFocus={onMsgFocus} onMsgBlur={onMsgBlur} showProfilePicture={showProfilePicture} ref={L} msg={T} displayType={D} isMsgVisible={isMsgVisible_1} selectable={selectable} selectedMessages={selectedMessages} onMessageSelect={onMessageSelect} position={position} isFocusedMsg={isFocusedMsg} isFocusable errorBoundaryName="message-row" isFollowUpReply={isFollowUpReply}/>;
            t[12] = isFocusedMsg;
            t[13] = isFollowUpReply;
            t[14] = onMsgBlur;
            t[15] = onMsgFocus;
            t[16] = onMessageSelect;
            t[17] = position;
            t[18] = L;
            t[19] = selectable;
            t[20] = selectedMessages;
            t[21] = showProfilePicture;
            t[22] = T;
            t[23] = D;
            t[24] = isMsgVisible_1;
            t[25] = $;
        } else {
            $ = t[25];
        }
        let P;
        if (t[26] !== msg) {
            P = s.jsx(r("WAWebBizAiMessageEditPostEditHintSlot.react"), {
                msg
            });
            t[26] = msg;
            t[27] = P;
        } else {
            P = t[27];
        }
        let N;
        if (t[28] !== msg.id || t[29] !== msg.type) {
            N = msg.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ? s.jsx(r("WAWebMBSInboxOrderNotice.react"), {
                msgKey: msg.id
            }) : null;
            t[28] = msg.id;
            t[29] = msg.type;
            t[30] = N;
        } else {
            N = t[30];
        }
        let M;
        if (t[31] !== $ || t[32] !== P || t[33] !== N) {
            M = <div ref={kRef}>{$}{P}{N}</div>;
            t[31] = $;
            t[32] = P;
            t[33] = N;
            t[34] = M;
        } else {
            M = t[34];
        }
        let w;
        if (t[35] !== category || t[36] !== M) {
            const Component = r("WAWebPrivacyBlurWrapper.react");
            w = <Component containerRef={kRef} category={category}>{M}</Component>;
            t[35] = category;
            t[36] = M;
            t[37] = w;
        } else {
            w = t[37];
        }
        return w;
    }
    const p = s.memo(m);
    l.WAWebMessageRow = p;
}, 98);