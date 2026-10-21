__d("WAWebHatchChannelNotificationDecoder", [
    "WALogger",
    "WAWebHatchJsonReaders"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "approval_request";
    function u(t) {
        let n;
        const r = (n = o("WAWebHatchJsonReaders")).readField(t, "presentation");
        const a = n.readTrimmedString(t, "deduplication_key");
        const i = n.readTrimmedString(t, "channel_notification_type");
        const l = n.readTrimmedString(t, "source_subject_id");
        const s = n.readTrimmedString(r, "title");
        const u = n.readTrimmedString(r, "body");
        const c = d([
            [
                "presentation",
                r == null ? "" : "present"
            ],
            [
                "deduplication_key",
                a
            ],
            [
                "channel_notification_type",
                i
            ],
            [
                "source_subject_id",
                l
            ],
            [
                "title",
                s
            ],
            [
                "body",
                u
            ]
        ]);
        if (c != null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-notification: dropping notification missing ",
                ""
            ])), c).sendLogs("hatch-notification-missing-field");
            return null;
        }
        return {
            deduplicationKey: a,
            notificationType: i,
            subjectId: l,
            title: s,
            body: u,
            expiresAtMs: o("WAWebHatchJsonReaders").readNumber(t, "notification_expires_at_ms")
        };
    }
    function c({ deduplicationKey: t, expiresAtMs: n, notificationType: r, subjectId: o }) {
        return {
            notificationType: r,
            subjectId: o,
            deduplicationKey: t,
            expiresAtMs: n
        };
    }
    function d(e) {
        return e.find(([, t])=>o("WAWebHatchJsonReaders").isBlankText(t))?.[0];
    }
    l.HATCH_NOTIFICATION_TYPE_APPROVAL_REQUEST = s;
    l.decodeHatchChannelNotification = u;
    l.summarizeHatchChannelNotification = c;
}, 98);