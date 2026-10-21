__d("WAWebHistorySyncScheduledMsgInnerProtoBuilder", [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ body: t, ephemeral: n, sourceProto: r }) {
        const o = u(r);
        if (o != null) {
            return o;
        }
        const a = m(r) && t != null ? t : "";
        const i = p(n);
        if (i == null) {
            return {
                conversation: a
            };
        }
        return {
            extendedTextMessage: {
                text: a,
                contextInfo: i
            }
        };
    }
    function u(e) {
        const t = e ?? {};
        const { imageMessage: n, videoMessage: r } = t;
        if (n != null) {
            return {
                imageMessage: n
            };
        }
        if (r != null) {
            return {
                videoMessage: r
            };
        }
        return null;
    }
    const c = 3;
    function d(e) {
        let t = e;
        for(let n = 0; n < c; n++){
            const a = t;
            const { botInvokeMessage: i, ephemeralMessage: l, groupMentionedMessage: s } = a;
            const u = (i ?? s ?? l)?.message;
            if (u == null) {
                return t;
            }
            t = u;
        }
        return t;
    }
    function m(t) {
        if (t == null) {
            return true;
        }
        const n = d(t);
        if (n.conversation != null || n.extendedTextMessage != null) {
            return true;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg][history_sync] unsupported scheduled content, revealing empty body"
        ]))).sendLogs("scheduled-msg-history-sync-unsupported-content");
        return false;
    }
    function p({ afterReadDuration: t, disappearingModeInitiatedByMe: n, disappearingModeInitiator: r, disappearingModeTrigger: a, ephemeralDuration: i, ephemeralSettingTimestamp: l }) {
        const s = i != null && i > 0 || l != null || t != null && t > 0 && o("WAWebAfterReadUtils").isAfterReadEnabled() || r != null;
        if (!s) {
            return null;
        }
        const u = {};
        if (i != null && i > 0) {
            u.expiration = i;
        }
        if (l != null) {
            u.ephemeralSettingTimestamp = l;
        }
        if (t != null && t > 0 && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            u.afterReadDuration = t;
        }
        if (r != null) {
            u.disappearingMode = o("WAWebE2EProtoUtils").disappearingModeInitiatorToProto(r, a ?? void 0, n ?? void 0);
        }
        return u;
    }
    l.buildHistorySyncInnerProto = s;
}, 98);