__d("WAWebHandleHatchMetadataSync", [
    "WALogger",
    "WAWebAIHatchIdentityStore",
    "WAWebCurrentUser",
    "WAWebHandleHatchAgentStatus",
    "WAWebHandleHatchApproval",
    "WAWebHandleHatchChannelNotification",
    "WAWebHatchChannelNotificationDecoder",
    "WAWebHatchMetadataExchangeManager",
    "WAWebHatchPayloadDecoder",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = new Map;
    function c(t, n) {
        try {
            e: {
                const a = t;
                if ((typeof a === "object" && a !== null || typeof a === "function") && a.type === "res" && "requestId" in a && "response" in a) {
                    const { requestId: i, response: l } = a;
                    if (i != null) {
                        r("WAWebHatchMetadataExchangeManager").resolveRequest(i, l);
                    }
                    break e;
                }
                if ((typeof a === "object" && a !== null || typeof a === "function") && a.type === "event" && "event" in a) {
                    const s = a.event;
                    d(s, n);
                    break e;
                }
                break e;
            }
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: handler failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("hatch-metadata-handler-error");
        }
    }
    function d(e, t) {
        const n = o("WAWebHatchPayloadDecoder").decodeHatchPayload(e);
        if (!o("WAWebHatchPayloadDecoder").bypassesLastWriteWins(e.opKey)) {
            const a = e.seq ?? e.timestamp;
            if (a != null) {
                const i = u.get(e.index);
                if (i != null && a <= i) {
                    return;
                }
                u.set(e.index, a);
            }
        }
        m(t, e, n);
        if (e.operation === "REMOVE") {
            if (n.kind === "approval_record") {
                o("WAWebHandleHatchApproval").handleRemovedHatchApprovalRecord(n.event);
            }
            return;
        }
        if (n.kind === "agent_status") {
            o("WAWebHandleHatchAgentStatus").handleHatchAgentStatus(n.status);
        } else if (n.kind === "identity") {
            o("WAWebAIHatchIdentityStore").applyHatchIdentity(n.identity);
        } else if (n.kind === "approval_record") {
            o("WAWebHandleHatchApproval").handleHatchApprovalRecord(n.event);
        } else if (n.kind === "channel_notification") {
            o("WAWebHandleHatchChannelNotification").handleHatchChannelNotification(n.notification);
        }
    }
    function m(e, t, n) {
        if (o("WAWebCurrentUser").isEmployee()) {
            const a = n.kind === "agent_status" ? n.status.activityCode ?? "none" : "n/a";
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: decoded msgId=",
                " op=",
                " action=",
                " kind=",
                " code=",
                ""
            ])), e ?? "unknown", t.opKey, t.operation, n.kind, a);
        }
    }
    function p(e) {
        if (e.kind === "channel_notification") {
            return {
                kind: e.kind,
                notification: o("WAWebHatchChannelNotificationDecoder").summarizeHatchChannelNotification(e.notification)
            };
        }
        return e;
    }
    l.handleHatchMetadataSync = c;
}, 98);