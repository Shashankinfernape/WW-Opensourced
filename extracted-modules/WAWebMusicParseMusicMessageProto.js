__d("WAWebMusicParseMusicMessageProto", [
    "WAWebMsgType",
    "WAWebMusicParsingUtils"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.musicMessage;
        if (r != null) {
            const a = r.contextInfo;
            const i = o("WAWebMusicParsingUtils").toMusicData(r);
            if (i == null || !o("WAWebMusicParsingUtils").canRenderMusicMessage(i)) {
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        futureproofType: o("WAWebMsgType").MSG_TYPE.MUSIC
                    }),
                    contextInfo: a
                };
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    musicData: i,
                    type: o("WAWebMsgType").MSG_TYPE.MUSIC,
                    kind: o("WAWebMsgType").MsgKind.Music
                }),
                contextInfo: a
            };
        }
    }
    l.default = e;
}, 98);