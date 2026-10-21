__d("WAWebBizAiMessageEditEducationState", [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebBizAiMessageEditEducationPolicy",
    "WAWebCmd",
    "WAWebEventEmitter",
    "WAWebUserPrefsStore",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = n("$InternalEnum").Mirrored([
        "BizAiMessageEditEducationState",
        "BizAiMessageEditDiscoveryTooltipViewed"
    ]);
    const m = "edit_started";
    const p = new (r("WAWebEventEmitter"));
    const { BizAiMessageEditEducationState, BizAiMessageEditDiscoveryTooltipViewed } = d;
    let g = null;
    let h = null;
    let y = null;
    let C = null;
    let b = false;
    let v = false;
    const S = new Set;
    function R() {
        if (r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null) {
            return H();
        }
        return M(r("WAWebUserPrefsStore").getUser(BizAiMessageEditEducationState));
    }
    function L(e = o("WATimeUtils").unixTime()) {
        return V(o("WAWebBizAiMessageEditEducationPolicy").withDiscoveryTooltipDismissed(R(), e));
    }
    function E() {
        if (r("WAWebUserPrefsStore").getMaybeMeDevicePn() != null) {
            r("WAWebUserPrefsStore").setUser(BizAiMessageEditDiscoveryTooltipViewed, true);
        }
    }
    function k() {
        return r("WAWebUserPrefsStore").getMaybeMeDevicePn() != null && r("WAWebUserPrefsStore").getUser(BizAiMessageEditDiscoveryTooltipViewed) === true;
    }
    function I(e, didSendEdit, isWithinEditingWindow, a = o("WATimeUtils").unixTime()) {
        const i = r("WAWebUserPrefsStore").getMaybeMeDevicePn();
        if (i == null) {
            return H();
        }
        const hint = {
            chatId: e.id.remote,
            didSendEdit,
            isWithinEditingWindow,
            messageId: e.id.id,
            startedAtSeconds: a
        };
        const s = e.getCollection();
        const u = function(n) {
            if (n.id.equals(e.id)) {
                $(hint);
            }
        };
        const c = function() {
            $(hint);
        };
        let d = false;
        let m = false;
        const targetCleanup = function() {
            if (d) {
                d = false;
                q(function() {
                    s.off("remove", u);
                });
            }
            if (m) {
                m = false;
                q(function() {
                    e.off("revoked", c);
                });
            }
        };
        try {
            d = true;
            s.on("remove", u);
            m = true;
            e.on("revoked", c);
            return w({
                hint,
                nowSeconds: a,
                ownerUserId: i.toString(),
                targetCleanup
            });
        } catch (error) {
            if (g === hint) {
                $(hint);
            } else {
                targetCleanup();
            }
            throw error;
        }
    }
    function T(e = o("WATimeUtils").unixTime()) {
        if (g == null || h == null || h !== U() || o("WAWebBizAiMessageEditEducationPolicy").isActivePostEditHintExpired(g, e)) {
            return null;
        }
        return g;
    }
    function D(e) {
        S.add(e);
        return function() {
            S.delete(e);
        };
    }
    function x() {
        F(null);
    }
    function $(e) {
        if (g === e) {
            x();
        }
    }
    function P(e) {
        if (T() !== e || b) {
            return null;
        }
        b = true;
        return e.isWithinEditingWindow;
    }
    function N() {
        if (r("WAWebUserPrefsStore").getMaybeMeDevicePn() != null) {
            r("WAWebUserPrefsStore").setUser(BizAiMessageEditEducationState, null);
            r("WAWebUserPrefsStore").setUser(BizAiMessageEditDiscoveryTooltipViewed, null);
        }
        x();
    }
    function M(e) {
        if (e == null || typeof e !== "object" || Array.isArray(e)) {
            return H();
        }
        return {
            hintLastShownAtSeconds: G(e.hintLastShownAtSeconds),
            tooltipLastDismissedAtSeconds: G(e.tooltipLastDismissedAtSeconds)
        };
    }
    function w({ hint, nowSeconds, ownerUserId, targetCleanup = null }) {
        A();
        const u = R();
        const c = V(o("WAWebBizAiMessageEditEducationPolicy").withPostEditHintShown(u, nowSeconds));
        try {
            F(hint, ownerUserId, targetCleanup);
        } catch (error) {
            try {
                V(u);
            } catch (err) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "BizAI message edit education state rollback failed"
                ]))).catching(r("getErrorSafe")(err)).sendLogs("biz-ai-message-edit-education-state-rollback-fail");
            }
            throw error;
        }
        return c;
    }
    function A() {
        if (!v) {
            o("WAWebCmd").Cmd.on("logout_from_bridge", x);
            v = true;
        }
    }
    function F(e, t = null, n = null) {
        if (!(g === e && h === t)) {
            const r = O(e);
            const o = y;
            const a = C;
            y = n;
            g = e;
            h = t;
            C = r;
            b = false;
            q(o);
            B(a);
            W();
        }
    }
    function O(e) {
        if (e == null) {
            return null;
        }
        return r("WAWebAlarm").setGlobalTimeout(function() {
            return $(e);
        }, o("WATimeUtils").castUnixTimeToMillisTime(o("WATimeUtils").castToUnixTime(o("WAWebBizAiMessageEditEducationPolicy").getPostEditHintExpirySeconds(e))));
    }
    function B(e) {
        if (e != null) {
            try {
                r("WAWebAlarm").clearTimeout(e);
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "BizAI message edit education expiry cleanup failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-message-edit-education-expiry-cleanup-fail");
            }
        }
    }
    function W() {
        S.forEach((e)=>{
            try {
                e();
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "BizAI message edit education observer failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-message-edit-education-observer-fail");
            }
        });
    }
    function q(e) {
        try {
            e?.();
        } catch (error) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI message edit education cleanup failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-message-edit-education-cleanup-fail");
        }
    }
    function U() {
        return r("WAWebUserPrefsStore").getMaybeMeDevicePn()?.toString() ?? null;
    }
    function V(e) {
        if (r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null) {
            return H();
        }
        const t = M(e);
        r("WAWebUserPrefsStore").setUser(BizAiMessageEditEducationState, t);
        return t;
    }
    function H() {
        return {
            hintLastShownAtSeconds: null,
            tooltipLastDismissedAtSeconds: null
        };
    }
    function G(e) {
        if (z(e)) {
            return e;
        }
        return null;
    }
    function z(e) {
        return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
    }
    l.BizAiMessageEditEducationUserPrefs = d;
    l.BIZ_AI_MESSAGE_EDIT_STARTED_EVENT = m;
    l.BizAiMessageEditEducationEventBus = p;
    l.loadMessageEditEducationState = R;
    l.recordDiscoveryTooltipDismissed = L;
    l.recordDiscoveryTooltipViewed = E;
    l.hasViewedDiscoveryTooltip = k;
    l.recordPostEditHintShownForMessage = I;
    l.getActivePostEditHint = T;
    l.subscribeToActivePostEditHint = D;
    l.clearActivePostEditHint = x;
    l.clearActivePostEditHintIfCurrent = $;
    l.takeActivePostEditHintViewIfCurrent = P;
    l.clearMessageEditEducationState = N;
    l.normalizeMessageEditEducationState = M;
}, 98);