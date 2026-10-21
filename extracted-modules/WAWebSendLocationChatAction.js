__d("WAWebSendLocationChatAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebMsgKey",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, lat, lng, loc, meUser }) {
            const u = yield c({
                chat,
                lat,
                lng,
                loc,
                meUser
            });
            try {
                const d = yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(chat, u)[1];
                if (!d || d.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                    throw r("err")("Location message SendMsgResult failure status");
                }
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Location message send to chat failure: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, lat, lng, loc, meUser }) {
            const s = babelHelpers.extends({
                type: "location",
                ack: o("WAWebAck").ACK.CLOCK,
                from: meUser,
                id: new (r("WAWebMsgKey"))({
                    from: meUser,
                    to: chat.id,
                    id: yield r("WAWebMsgKey").newId(),
                    participant: undefined,
                    selfDir: "out"
                }),
                local: true,
                isNewMsg: true,
                t: o("WATimeUtils").unixTime(),
                to: chat.id,
                lat,
                lng,
                loc
            }, o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(chat));
            return s;
        });
        return d.apply(this, arguments);
    }
    l.default = s;
}, 98);