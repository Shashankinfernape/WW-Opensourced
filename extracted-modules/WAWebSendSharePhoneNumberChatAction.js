__d("WAWebSendSharePhoneNumberChatAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebContactBlockedErrorAction",
    "WAWebContactGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = t.id;
            if (!n.isLid()) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSharePhoneNumber should not be called for non lid chat ",
                    ""
                ])), n);
                throw r("err")("sendSharePhoneNumber should not be called for non lid chat");
            }
            const t_contact = t.contact;
            if (o("WAWebContactGetters").getIsUser(t_contact) && t_contact.isContactBlocked) {
                throw new (r("WAWebContactBlockedErrorAction"))("share phone number for a blocked contact", t_contact);
            }
            const i = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            if (t_contact.shareOwnPn !== true) {
                yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                    {
                        lid: n,
                        data: {
                            shareOwnPn: true
                        }
                    }
                ]);
            }
            const l = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: t.id,
                fromMe: true
            });
            const u = {
                id: l,
                from: i,
                to: t.id,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.Protocol,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                subtype: "share_phone_number",
                local: true,
                isNewMsg: true,
                messageSecret: self.crypto.getRandomValues(new Uint8Array(32))
            };
            yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, u)[1];
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "chat.sendSharePhoneNumber updated chatId=",
                ""
            ])), n);
        });
        return c.apply(this, arguments);
    }
    l.sendSharePhoneNumber = u;
}, 98);