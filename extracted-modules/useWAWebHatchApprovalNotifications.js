__d("useWAWebHatchApprovalNotifications", [
    "WALogger",
    "WAWebClock",
    "WAWebHatchApprovalManager",
    "WAWebHatchApprovalNotification",
    "WAWebHatchChannelNotificationBus",
    "WAWebHatchFrontendGating",
    "WAWebNotificationController",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebPendingHatchApprovals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const useEffect = (_ || (_ = o("react"))).useEffect;
    const g = new Map;
    const h = new Set;
    function useY() {
        const e = o("react-compiler-runtime").c(4);
        const t = r("useWAWebPendingHatchApprovals")();
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [];
            e[0] = n;
        } else {
            n = e[0];
        }
        useEffect(C, n);
        let a;
        let i;
        if (e[1] !== t) {
            a = function() {
                for (const e of t){
                    h.add(e.approvalId);
                }
                for (const n of Array.from(g.values())){
                    const { state, subjectId } = n;
                    if (state === "live" && v(subjectId)) {
                        S(subjectId);
                    }
                }
            };
            i = [
                t
            ];
            e[1] = t;
            e[2] = a;
            e[3] = i;
        } else {
            a = e[2];
            i = e[3];
        }
        useEffect(a, i);
    }
    function C() {
        return r("WAWebHatchChannelNotificationBus").subscribe(b);
    }
    function b(t) {
        const { deduplicationKey, subjectId } = t;
        const i = o("WAWebHatchApprovalNotification").hatchApprovalNotificationKey(subjectId);
        if (R(t)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval-notif: skip ",
                ", expired"
            ])), subjectId);
            return;
        }
        if (v(subjectId)) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval-notif: skip ",
                ", already decided"
            ])), subjectId);
            return;
        }
        if (g.has(deduplicationKey)) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval-notif: skip ",
                ", already raised"
            ])), subjectId);
            return;
        }
        if (!o("WAWebHatchFrontendGating").isHatchApprovalNotificationEnabled()) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval-notif: skip ",
                ", not enabled"
            ])), subjectId);
            return;
        }
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-approval-notif: raising ",
            ""
        ])), subjectId);
        g.set(deduplicationKey, {
            state: "reserved",
            subjectId
        });
        const l = new (o("WAWebHatchApprovalNotification")).WAWebHatchApprovalNotification(t, v);
        o("WAWebNotificationController").WANotificationController.triggerNotification(l).then(()=>{
            if (l.notificationBanner == null) {
                g.delete(deduplicationKey);
                return;
            }
            g.set(deduplicationKey, {
                state: "live",
                subjectId
            });
            if (v(subjectId)) {
                S(subjectId);
            }
        }, (e)=>{
            if (l.notificationBanner != null) {
                g.set(deduplicationKey, {
                    state: "live",
                    subjectId
                });
                if (v(subjectId)) {
                    S(subjectId);
                }
            } else {
                g.delete(deduplicationKey);
                if (o("WAWebNotificationController").WANotificationController.getNotification(i) === l) {
                    o("WAWebNotificationController").WANotificationController.closeOrCancelNotification(i);
                }
            }
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: notification failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("hatch-approval-notification-fail");
        });
    }
    function v(e) {
        if (r("WAWebHatchApprovalManager").getApproval(e) != null) {
            return false;
        }
        return r("WAWebHatchApprovalManager").isSettled(e) || h.has(e);
    }
    function S(subjectId) {
        let t = false;
        for (const [r, a] of Array.from(g)){
            if (a.subjectId === subjectId && a.state === "live") {
                g.set(r, {
                    state: "closed",
                    subjectId
                });
                t = true;
            }
        }
        if (t) {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval-notif: withdrawing ",
                ""
            ])), subjectId);
            o("WAWebNotificationController").WANotificationController.closeOrCancelNotification(o("WAWebHatchApprovalNotification").hatchApprovalNotificationKey(subjectId));
        }
    }
    function R({ expiresAtMs }) {
        return expiresAtMs != null && expiresAtMs > 0 && o("WAWebClock").Clock.getServerTimeMs() >= expiresAtMs;
    }
    function L() {
        g.clear();
        h.clear();
    }
    l.useWAWebHatchApprovalNotifications = useY;
    l.resetHatchApprovalNotificationStateForTesting = L;
}, 98);