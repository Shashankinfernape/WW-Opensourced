__d("WAWebDBChatSerialization", [
    "WAWebProtobufsMdStorageChatRowOpaqueData.pb",
    "decodeProtobuf",
    "encodeProtobuf"
], function(t, n, r, o, a, i, l) {
    const e = [
        "draftMessage"
    ];
    const s = [
        "draftMessage"
    ];
    function u(e) {
        const t = babelHelpers.extends({}, e);
        c(t);
        return t;
    }
    function c(e) {
        const t = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsMdStorageChatRowOpaqueData.pb").ChatRowOpaqueDataSpec, e.chatRowOpaqueData);
        s.forEach((n)=>{
            if (t?.[n] != null) {
                e[n] = t?.[n];
            }
        });
    }
    function d(e) {
        return m(babelHelpers.extends({}, e));
    }
    function m(t) {
        const n = {};
        s.forEach((e)=>{
            n[e] = t[e];
        });
        const t_draftMessage = t.draftMessage;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const i = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsMdStorageChatRowOpaqueData.pb").ChatRowOpaqueDataSpec, n);
        a.chatRowOpaqueData = i.readBuffer();
        return a;
    }
    l.CHAT_OPAQUE_DATA_KEYS = s;
    l.deserializeChat = u;
    l.serializeChat = d;
}, 98);