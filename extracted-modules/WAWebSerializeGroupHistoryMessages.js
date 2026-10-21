__d("WAWebSerializeGroupHistoryMessages", [
    "Promise",
    "WAWebGroupHistorySerializationUtils",
    "WAWebProtobufsGroupHistory.pb",
    "asyncToGeneratorRuntime",
    "compactMap",
    "encodeProtobuf",
    "fflate"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = yield o("WAWebGroupHistorySerializationUtils").getAddonsDBRowFromParentMsgs(t);
            const { eventResponses, keepInChat, pinInChat, pollVotes, reactions } = a;
            const d = yield (e || (e = n("Promise"))).allSettled(t.map((msgData)=>o("WAWebGroupHistorySerializationUtils").serializeSingleMessage({
                    msgData,
                    reactions,
                    pollVotes,
                    pinInChat,
                    eventResponses,
                    keepInChat
                })));
            const m = r("compactMap")(d.filter((e)=>e.status === "fulfilled"), function(e) {
                return e.value;
            });
            return m;
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = yield (e || (e = n("Promise"))).all([
                s(t),
                r != null && r.length > 0 ? s(r) : undefined
            ]);
            const i = a[0];
            const outOfWindowPinnedMessages = a[1];
            const u = yield o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec, {
                messages: i,
                outOfWindowPinnedMessages
            });
            const c = u.readByteArrayView();
            return {
                compressedBundle: o("fflate").zlibSync(c).buffer,
                encodedBytes: new Uint8Array(c).buffer
            };
        });
        return d.apply(this, arguments);
    }
    l.getWebMessageInfos = s;
    l.serializeGroupHistoryMessages = c;
}, 98);