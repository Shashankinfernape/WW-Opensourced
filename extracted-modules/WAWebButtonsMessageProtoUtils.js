__d("WAWebButtonsMessageProtoUtils", [
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebParseDocumentMessageProto",
    "WAWebParseImageMessageProto",
    "WAWebParseLocationMessageProto",
    "WAWebParseVideoMessageProto",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, buttonsMessage: n, msgContext: a }) {
        const { contentText: i, documentMessage: l, footerText: s, headerType: u, imageMessage: c, locationMessage: d, text: m, videoMessage: p } = n;
        const _ = function() {
            const e = babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.CHAT,
                kind: o("WAWebMsgType").MsgKind.Chat,
                title: m == null ? t.title : o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(m),
                body: i == null ? t.body : o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(i)
            });
            if (c) {
                return r("WAWebParseImageMessageProto")({
                    messageProtobuf: {
                        imageMessage: c
                    },
                    baseMessage: t,
                    msgContext: a
                })?.msgData ?? e;
            }
            if (l) {
                return r("WAWebParseDocumentMessageProto")({
                    messageProtobuf: {
                        documentMessage: l
                    },
                    baseMessage: t,
                    msgContext: a
                })?.msgData ?? e;
            }
            if (d) {
                return r("WAWebParseLocationMessageProto")({
                    messageProtobuf: {
                        locationMessage: babelHelpers.extends({}, d, {
                            name: void 0,
                            address: void 0
                        })
                    },
                    baseMessage: t,
                    msgContext: a
                })?.msgData ?? e;
            }
            if (p) {
                return r("WAWebParseVideoMessageProto")({
                    messageProtobuf: {
                        videoMessage: p
                    },
                    baseMessage: t,
                    msgContext: a
                })?.msgData ?? e;
            }
            return e;
        };
        const f = _();
        return babelHelpers.extends({}, f, {
            headerType: u,
            caption: i != null ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(i) : f.caption,
            footer: s != null ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(s) : f.footer
        });
    }
    function s(e, t, n) {
        const { documentMessage: r, imageMessage: a, locationMessage: i, videoMessage: l } = e;
        if (t.isForwarded && (r || a || i || l)) {
            return e;
        }
        const s = {
            buttons: t.isForwarded === true ? void 0 : t.dynamicReplyButtons,
            footerText: t.footer,
            contextInfo: n
        };
        if (r) {
            s.documentMessage = r;
            s.headerType = o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.DOCUMENT;
            s.contentText = t.caption;
        } else if (a) {
            s.imageMessage = a;
            s.headerType = o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.IMAGE;
            s.contentText = t.caption;
        } else if (i) {
            s.locationMessage = i;
            s.headerType = o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.LOCATION;
            s.contentText = t.caption;
        } else if (l) {
            s.videoMessage = l;
            s.headerType = o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.VIDEO;
            s.contentText = t.caption;
        } else if (t.title) {
            s.text = t.title;
            s.headerType = o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.TEXT;
            s.contentText = t.body;
        } else {
            s.contentText = t.body;
            s.headerType = o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.EMPTY;
        }
        return {
            buttonsMessage: s
        };
    }
    l.parseButtonsMessageProto = e;
    l.createDynamicReplyButtonsMessage = s;
}, 98);