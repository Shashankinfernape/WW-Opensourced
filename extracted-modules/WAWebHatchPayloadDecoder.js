__d("WAWebHatchPayloadDecoder", [
    "WAWebHatchApprovalRecordDecoder",
    "WAWebHatchChannelNotificationDecoder",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureMediaDecoder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "agent.status";
    const s = "hitl.approval_record";
    const u = "identity.updated";
    const c = "notification";
    function d(e) {
        return e === s || e === u || e === c;
    }
    function m({ opKey: n, payload: r }) {
        if (n === e) {
            return {
                kind: "agent_status",
                status: g(r)
            };
        }
        if (n === s) {
            return _(r);
        }
        if (n === u) {
            return p(r);
        }
        if (n === c) {
            return f(r);
        }
        return {
            kind: "unknown"
        };
    }
    function p(e) {
        const t = h(e);
        if (t.name != null && !o("WAWebHatchJsonReaders").isBlankText(t.name) || t.secureImage != null || t.secureVideoVariants != null) {
            return {
                kind: "identity",
                identity: t
            };
        }
        return {
            kind: "unknown"
        };
    }
    function _(e) {
        const t = o("WAWebHatchApprovalRecordDecoder").decodeHatchApprovalRecordEvent(e);
        if (t != null) {
            return {
                kind: "approval_record",
                event: t
            };
        }
        return {
            kind: "unknown"
        };
    }
    function f(e) {
        const t = o("WAWebHatchChannelNotificationDecoder").decodeHatchChannelNotification(e);
        if (t != null) {
            return {
                kind: "channel_notification",
                notification: t
            };
        }
        return {
            kind: "unknown"
        };
    }
    function g(e) {
        const t = o("WAWebHatchJsonReaders").readString(e, "activity_emoji");
        return babelHelpers.extends({
            activityCode: o("WAWebHatchJsonReaders").readString(e, "activity_code")
        }, t != null && t !== "" ? {
            activityEmoji: t
        } : null, {
            activityText: o("WAWebHatchJsonReaders").readString(e, "activity_text")
        });
    }
    function h(e) {
        const t = o("WAWebHatchJsonReaders").readField(e, "avatar");
        return {
            name: o("WAWebHatchJsonReaders").readString(e, "name"),
            secureImage: o("WAWebHatchSecureMediaDecoder").readSecureMediaField(t, "secure_image"),
            secureVideoVariants: y(o("WAWebHatchJsonReaders").readField(t, "secure_video_variants"))
        };
    }
    function y(e) {
        if (!Array.isArray(e)) {
            return null;
        }
        const t = {};
        let n = false;
        for (const r of e){
            const a = o("WAWebHatchJsonReaders").readString(r, "variant");
            const i = o("WAWebHatchSecureMediaDecoder").readSecureMediaField(r, "media");
            if (a != null && a !== "" && i != null) {
                t[a] = i;
                n = true;
            }
        }
        if (n) {
            return t;
        }
        return null;
    }
    l.bypassesLastWriteWins = d;
    l.decodeHatchPayload = m;
}, 98);