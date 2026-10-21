__d("WAWebMessagePluginGenerateWebMessageInfo", [
    "WAWebE2EProtoUtils",
    "WAWebMessagePluginGenerateWebMessageInfoRegistry",
    "WAWebPluginCreateRegistryLookup",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsWeb.pb"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginGenerateWebMessageInfoRegistry"));
    function s(t, n) {
        let i;
        const l = babelHelpers.extends({
            key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(t.id),
            labels: t.labels ?? [],
            status: o("WAWebProtobufsWeb.pb").WebMessageInfo$Status.PENDING,
            messageTimestamp: t.t
        }, n);
        if (t.ephemeralStartTimestamp != null) {
            l.ephemeralStartTimestamp = t.ephemeralStartTimestamp;
        }
        const s = o("WAWebE2EProtoUtils").encodeJid(t.originalSelfAuthor);
        if (s != null) {
            l.originalSelfAuthorUserJidString = s;
        }
        if (t.revokeTimestamp != null) {
            l.revokeMessageTimestamp = t.revokeTimestamp;
        }
        if (t.id.participant) {
            l.participant = o("WAWebE2EProtoUtils").encodeJid(t.id.participant);
        }
        return ((i = e(t.type, t.subtype)) == null || i.generateWebMessageInfo == null ? undefined : i.generateWebMessageInfo(t, l)) ?? null;
    }
    l.generateWebMessageInfo = s;
}, 98);