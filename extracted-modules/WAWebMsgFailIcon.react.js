__d("WAWebMsgFailIcon.react", [
    "WAWebAcp2SendFailIcon.react",
    "WAWebErrorType",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIndividualNewChatMessageCappingLogEvents",
    "WAWebLimitSharingGatingUtils",
    "WAWebMediaMsgFailIcon.react",
    "WAWebMsgSendFailIcon.react",
    "WAWebNewChatMsgCappingSendFailIcon.react",
    "WAWebWamEnumSurfaceType",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const n = o("react-compiler-runtime").c(19);
        const { associatedMessages, displayType, msg } = e;
        let u;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            n[0] = u;
        } else {
            u = n[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msg.id, u);
        const m = d[0];
        const p = o("useWAWebChatValues").useOptionalChatValues(msg.id.remote, [
            o("WAWebFrontendChatGetters").getAcp2Setting
        ])?.[0];
        if (m && !associatedMessages) {
            let _;
            if (n[1] !== displayType || n[2] !== m || n[3] !== msg.id) {
                _ = s.jsx(r("WAWebMediaMsgFailIcon.react"), {
                    displayType,
                    msgKey: msg.id,
                    mediaData: m
                });
                n[1] = displayType;
                n[2] = m;
                n[3] = msg.id;
                n[4] = _;
            } else {
                _ = n[4];
            }
            return _;
        }
        const msg_errorCode = msg.errorCode;
        if (msg_errorCode === o("WAWebErrorType").SendFailureErrorCode.UserReachedMaxMonthlyLimitForNewMessages && o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped()) {
            o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD, "message_nack", JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {}));
            let g;
            if (n[5] !== displayType) {
                g = s.jsx(r("WAWebNewChatMsgCappingSendFailIcon.react"), {
                    displayType
                });
                n[5] = displayType;
                n[6] = g;
            } else {
                g = n[6];
            }
            return g;
        }
        if (msg_errorCode === o("WAWebErrorType").SendFailureErrorCode.Acp2Restricted && o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(msg.id.remote) && p?.enabled === true) {
            let h;
            if (n[7] !== displayType) {
                h = s.jsx(r("WAWebAcp2SendFailIcon.react"), {
                    displayType
                });
                n[7] = displayType;
                n[8] = h;
            } else {
                h = n[8];
            }
            return h;
        }
        let y;
        if (n[9] !== msg) {
            y = msg.safe();
            n[9] = msg;
            n[10] = y;
        } else {
            y = n[10];
        }
        let C;
        if (n[11] !== associatedMessages) {
            C = associatedMessages ?? [];
            n[11] = associatedMessages;
            n[12] = C;
        } else {
            C = n[12];
        }
        let b;
        if (n[13] !== y || n[14] !== C) {
            b = [
                y
            ].concat(C.map(c));
            n[13] = y;
            n[14] = C;
            n[15] = b;
        } else {
            b = n[15];
        }
        let v;
        if (n[16] !== displayType || n[17] !== b) {
            v = s.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
                msgs: b,
                showForMessages: true,
                showForAddOns: true,
                displayType
            });
            n[16] = displayType;
            n[17] = b;
            n[18] = v;
        } else {
            v = n[18];
        }
        return v;
    }
    function c(e) {
        return e.safe();
    }
    l.default = u;
}, 98);