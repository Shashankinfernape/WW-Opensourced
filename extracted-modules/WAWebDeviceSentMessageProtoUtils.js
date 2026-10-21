__d("WAWebDeviceSentMessageProtoUtils", [
    "WAWebFutureproofProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        for(let t = [
            e
        ], n = t.pop(); n != null; n = t.pop()){
            if (n.deviceSentMessage != null) {
                return true;
            }
            const i = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(n)?.message;
            if (i != null) {
                t.push(i);
            }
            const l = n.groupStatusMessageV2?.message;
            if (l != null) {
                t.push(l);
            }
        }
        return false;
    }
    function s(e, t) {
        const n = e?.messageContextInfo;
        if (n == null) {
            const r = {
                deviceSentMessage: {
                    destinationJid: t.toString({
                        legacy: true
                    }),
                    message: e
                }
            };
            return r;
        }
        return {
            messageContextInfo: babelHelpers.extends({}, n),
            deviceSentMessage: {
                destinationJid: t.toString({
                    legacy: true
                }),
                message: babelHelpers.extends({}, e, {
                    messageContextInfo: void 0
                })
            }
        };
    }
    function u(e) {
        const C = e?.deviceSentMessage?.message;
        if (C == null) {
            return null;
        }
        const b = babelHelpers.extends({}, C.messageContextInfo, {
            messageSecret: C?.messageContextInfo?.messageSecret ?? e?.messageContextInfo?.messageSecret,
            messageAssociation: C?.messageContextInfo?.messageAssociation ?? e?.messageContextInfo?.messageAssociation,
            limitSharingV2: e?.messageContextInfo?.limitSharingV2,
            acp2Setting: C?.messageContextInfo?.acp2Setting ?? e?.messageContextInfo?.acp2Setting,
            threadId: C?.messageContextInfo?.threadId ?? e?.messageContextInfo?.threadId ?? [],
            botMetadata: C?.messageContextInfo?.botMetadata ?? e?.messageContextInfo?.botMetadata
        });
        return babelHelpers.extends({}, C, {
            messageContextInfo: b
        });
    }
    l.containsDeviceSentMessage = e;
    l.wrapDeviceSentMessage = s;
    l.unwrapDeviceSentMessage = u;
}, 98);