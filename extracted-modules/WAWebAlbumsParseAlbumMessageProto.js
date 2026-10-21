__d("WAWebAlbumsParseAlbumMessageProto", [
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.albumMessage;
        if (r == null) {
            return null;
        }
        const { contextInfo: a, expectedImageCount: i, expectedVideoCount: l } = r;
        return {
            msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.ALBUM,
                kind: o("WAWebMsgType").MsgKind.Album,
                expectedImageCount: i,
                expectedVideoCount: l
            }),
            contextInfo: a
        };
    }
    l.default = e;
}, 98);