__d("WAWebSendButtonsMsgReplyChatAction", [
    "WATimeUtils",
    "WAWebAck",
    "WAWebHsmGatingUtils",
    "WAWebMsgKey",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const from = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            const i = e.msgContextInfo(n.id);
            const l = babelHelpers.extends({
                type: "buttons_response",
                kind: "buttonsResponse",
                ack: o("WAWebAck").ACK.CLOCK,
                from,
                id: new (r("WAWebMsgKey"))({
                    from,
                    to: n.id,
                    id: yield r("WAWebMsgKey").newId(),
                    participant: undefined,
                    selfDir: "out"
                }),
                local: true,
                isNewMsg: true,
                t: o("WATimeUtils").unixTime(),
                to: n.id
            }, i, {
                selectedButtonId: t.id
            }, o("WAWebHsmGatingUtils").shouldUseLegacyButtonsResponse() ? {
                buttonsResponse: {
                    selectedButtonId: t.id,
                    selectedDisplayText: t.displayText,
                    type: o("WAWebProtobufsE2E.pb").Message$ButtonsResponseMessage$Type.DISPLAY_TEXT
                }
            } : {}, {
                body: t.displayText || "",
                viewMode: "VISIBLE"
            });
            return o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, l)[1];
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);