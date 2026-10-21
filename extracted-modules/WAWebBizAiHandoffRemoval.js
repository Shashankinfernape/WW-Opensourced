__d("WAWebBizAiHandoffRemoval", [
    "WALogger",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHandoffRemovalTimingModel",
    "WAWebBizAiHandoffResponseUtils",
    "WAWebBotTypes",
    "WAWebDBUpdateChatTable",
    "WAWebFrontendChatGetters",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 86400;
    const u = 1000;
    function c(e) {
        if (y(e)) {
            return false;
        }
        const t = o("WAWebFrontendChatGetters").getPreviewMessage(e);
        if (o("WAWebBizAiHandoffRemovalTimingModel").getHandoffRemovalTiming() !== "AFTER_24H_REPLY") {
            return !b(t);
        }
        const e_aiHandoffRemovalExpiry = e.aiHandoffRemovalExpiry;
        if (e_aiHandoffRemovalExpiry != null && e_aiHandoffRemovalExpiry !== 0) {
            return o("WATimeUtils").unixTimeWithoutClockSkewCorrection() < e_aiHandoffRemovalExpiry;
        }
        if (!b(t)) {
            return true;
        }
        const r = t?.t;
        return r != null && o("WATimeUtils").unixTimeWithoutClockSkewCorrection() < r + s;
    }
    function d(e) {
        const aiHandoffRemovalExpiry = m(e);
        if (aiHandoffRemovalExpiry === undefined) {
            _(e);
            return false;
        }
        e.set({
            aiHandoffRemovalExpiry
        });
        _(e);
        return true;
    }
    function m(e) {
        if (e.isAiHandoff === true) {
            if (o("WAWebBizAiHandoffRemovalTimingModel").getHandoffRemovalTiming() !== "AFTER_24H_REPLY") {
                if (h(e)) {
                    return null;
                }
                return undefined;
            }
            const t = o("WAWebFrontendChatGetters").getPreviewMessage(e);
            if (b(t)) {
                const n = t?.t;
                if (n != null) {
                    const r = n + s;
                    if (e.aiHandoffRemovalExpiry !== r) {
                        return r;
                    }
                }
            }
        }
    }
    function p(e) {
        r("WAWebAlarm").clearTimeout(e.aiHandoffRemovalEvictionTimer);
        e.aiHandoffRemovalEvictionTimer = null;
        if (h(e)) {
            e.set({
                aiHandoffRemovalExpiry: null
            });
            return true;
        }
        return false;
    }
    function _(e) {
        if (!(!h(e) && e.aiHandoffRemovalEvictionTimer == null)) {
            r("WAWebAlarm").clearTimeout(e.aiHandoffRemovalEvictionTimer);
            e.aiHandoffRemovalEvictionTimer = null;
            const t = e.aiHandoffRemovalExpiry;
            if (!(o("WAWebBizAiHandoffRemovalTimingModel").getHandoffRemovalTiming() !== "AFTER_24H_REPLY" || t == null || t === 0)) {
                if (g(e, o("WATimeUtils").unixTimeWithoutClockSkewCorrection())) {
                    f(e);
                    return;
                }
                e.aiHandoffRemovalEvictionTimer = r("WAWebAlarm").setGlobalTimeout(function() {
                    return f(e);
                }, t * u);
            }
        }
    }
    function f(t) {
        if (!g(t, o("WATimeUtils").unixTimeWithoutClockSkewCorrection())) {
            _(t);
            return;
        }
        r("WAWebAlarm").clearTimeout(t.aiHandoffRemovalEvictionTimer);
        t.aiHandoffRemovalEvictionTimer = null;
        t.set({
            aiHandoffRemovalExpiry: null,
            isAiHandoff: false
        });
        o("WAWebDBUpdateChatTable").updateChatTable(t.id, {
            aiHandoffRemovalExpiry: null,
            isAiHandoff: false
        }).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "biz ai handoff eviction failed to persist"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-handoff-evict-persist");
        });
    }
    function g({ aiHandoffRemovalExpiry }, t) {
        return aiHandoffRemovalExpiry != null && aiHandoffRemovalExpiry !== 0 && t >= aiHandoffRemovalExpiry;
    }
    function h(e) {
        return e.aiHandoffRemovalExpiry != null && e.aiHandoffRemovalExpiry !== 0;
    }
    function y({ aiHandoffStartedAt }) {
        if (aiHandoffStartedAt == null) {
            return false;
        }
        return o("WATimeUtils").unixTimeWithoutClockSkewCorrection() >= aiHandoffStartedAt + o("WAWebBizAiAgentGating").getHandoffListExpireDays() * s;
    }
    function C(e) {
        const e_aiHandoffStartedAt = e.aiHandoffStartedAt;
        if (e_aiHandoffStartedAt == null) {
            return b(o("WAWebFrontendChatGetters").getPreviewMessage(e));
        }
        return e.msgs.findLast((e)=>e.t >= e_aiHandoffStartedAt && o("WAWebBizAiHandoffResponseUtils").isHumanBusinessReply(e)) != null;
    }
    function b(e) {
        return e != null && e.bizBotType !== o("WAWebBotTypes").BizBotType.BIZ_1P && e.id.fromMe === true;
    }
    l.isHandoffChatRetained = c;
    l.maybeSetHandoffRemovalExpiry = d;
    l.computeHandoffRemovalExpiry = m;
    l.clearHandoffRemovalExpiry = p;
    l.armHandoffRemovalEvictionTimer = _;
    l.hasBusinessRepliedSinceHandoffStart = C;
}, 98);