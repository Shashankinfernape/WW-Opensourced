__d("WAWebBizAiThreadControlExtraJson", [
    "WAWebBizAiHandoffActor",
    "WAWebBoolFunc",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ raw: t, isSmartComposerEnabled: r = o("WAWebBoolFunc").returnFalse, notificationTimestampMs: i = null }) {
        if (t == null) {
            return null;
        }
        const l = s(t);
        if (l == null || l.is_global_thread_state_update !== true) {
            return null;
        }
        const c = l.thread_states;
        if (!Array.isArray(c)) {
            return null;
        }
        const d = r();
        const m = [];
        for (const p of c){
            const _ = u({
                entry: p,
                smartComposerEnabled: d,
                notificationTimestampMs: i
            });
            if (_ != null) {
                m.push(_);
            }
        }
        return m;
    }
    function s(e) {
        try {
            return JSON.parse(e);
        } catch (e) {
            return null;
        }
    }
    function u({ entry: r, notificationTimestampMs: a, smartComposerEnabled: i }) {
        const l = c(r.ai_reply_status, i);
        if (l == null) {
            return null;
        }
        const s = r.consumer_uid?.lid;
        const u = r.consumer_uid?.pn;
        if (s == null && u == null) {
            return null;
        }
        const d = r.ai_reply_status_update_ts;
        const m = i ? r.ai_reply_status === "suggested_replies" : void 0;
        return {
            consumerLid: s,
            consumerPhoneNumber: u,
            lastHandoffActor: {
                actor: o("WAWebBizAiHandoffActor").parseBizAiHandoffActor(r.last_handoff_actor)
            },
            status: l,
            suggestedRepliesEnabled: m,
            timestampMs: d != null && d > 0 ? d : a
        };
    }
    function c(e, t) {
        if (e === "unmuted") {
            return o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN;
        }
        if (e === "muted" || t && e === "suggested_replies") {
            return o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED;
        }
        return null;
    }
    function d(e) {
        if (e == null) {
            return null;
        }
        const n = s(e);
        const r = n?.update_state?.suggested_replies_enabled;
        if (typeof r === "boolean") {
            return r;
        }
        return null;
    }
    function m(e) {
        if (e == null) {
            return null;
        }
        const n = s(e)?.last_handoff_actor;
        if (typeof n === "string") {
            return o("WAWebBizAiHandoffActor").parseBizAiHandoffActor(n);
        }
        return null;
    }
    l.parseBulkThreadControl = e;
    l.parseSuggestedRepliesFromUpdateState = d;
    l.parseLastHandoffActor = m;
}, 98);