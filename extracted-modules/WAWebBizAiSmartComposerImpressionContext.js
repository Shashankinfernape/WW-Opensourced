__d("WAWebBizAiSmartComposerImpressionContext", [
    "WALogger",
    "WAWebBizAiSmartComposerLogEvents",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useContext, useRef } = c;
    const _ = {
        current: new Set
    };
    const f = new WeakMap;
    const GContext = u.createContext(_);
    const h = new WeakMap;
    const y = new WeakMap;
    const C = new WeakMap;
    const b = new WeakMap;
    function v(t) {
        const n = o("react-compiler-runtime").c(4);
        const t_children = t.children;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = new Set;
            n[0] = i;
        } else {
            i = n[0];
        }
        const lRef = useRef(i);
        let s;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            s = function() {
                const t = C.get(lRef);
                C.delete(lRef);
                for (const n of t ?? []){
                    try {
                        n();
                    } catch (error) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[SmartComposer] session-exit handler failed"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-smart-composer-session-exit-handler-failed");
                    }
                }
                const i = f.get(lRef);
                if (i != null) {
                    f.delete(lRef);
                    i.onExit(i.card);
                }
            };
            n[1] = s;
        } else {
            s = n[1];
        }
        r("useWAWebOnUnmount")(s);
        let c;
        if (n[2] !== t_children) {
            c = <GContext.Provider value={lRef}>{t_children}</GContext.Provider>;
            n[2] = t_children;
            n[3] = c;
        } else {
            c = n[3];
        }
        return c;
    }
    function S() {
        return useContext(GContext);
    }
    function R(e, t) {
        if (e === _) {
            return function() {};
        }
        let n = C.get(e);
        if (n == null) {
            n = new Set;
            C.set(e, n);
        }
        n.add(t);
        return function() {
            const n = C.get(e);
            n?.delete(t);
            if (n?.size === 0) {
                C.delete(e);
            }
        };
    }
    function L(e) {
        return f.get(e)?.card ?? null;
    }
    function E(e, t, onExit) {
        if (e === _) {
            return t;
        }
        const o = f.get(e)?.card;
        let card = t;
        if (o?.stanzaId != null && o.stanzaId === t.stanzaId) {
            let l = o.trigger ?? t.trigger;
            if (t.status === "quota_handoff") {
                l = null;
            }
            card = babelHelpers.extends({}, t, {
                trigger: l
            });
        }
        f.set(e, {
            card,
            onExit
        });
        return card;
    }
    function k(e, t) {
        if (f.get(e)?.card === t) {
            f.delete(e);
        }
    }
    function I(e) {
        f.delete(e);
    }
    function T(e, t) {
        if (e !== _) {
            const n = t.status;
            if (!B(n)) {
                b.delete(e);
                return;
            }
            const r = b.get(e);
            if (W(r, t)) {
                const a = q(t, n);
                b.set(e, a);
                a.actions.add("appear");
                o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
                    action: "appear",
                    cardStatus: a.status,
                    cardType: a.cardType,
                    errorCode: a.errorCode,
                    funnelId: a.funnelId
                });
                return;
            }
            if (r != null) {
                const i = r.status !== n;
                r.cardType = t.cardType;
                r.errorCode = t.errorCode;
                r.stanzaId = t.stanzaId;
                r.status = n;
                if (!(!i || r.actions.has("transition"))) {
                    r.actions.add("transition");
                    o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
                        action: "transition",
                        cardStatus: r.status,
                        cardType: r.cardType,
                        errorCode: r.errorCode,
                        funnelId: r.funnelId
                    });
                }
            }
        }
    }
    function D(e, dismissReason) {
        if (e === _) {
            return null;
        }
        const n = b.get(e);
        if (n == null) {
            return null;
        }
        if (dismissReason === "reply_message") {
            b.delete(e);
            return null;
        }
        if (n.actions.has("dismiss")) {
            return null;
        }
        n.actions.add("dismiss");
        o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
            action: "dismiss",
            cardStatus: n.status,
            cardType: n.cardType,
            dismissReason,
            errorCode: n.errorCode,
            funnelId: n.funnelId
        });
        const { cardType, funnelId, status } = n;
        if (dismissReason !== "tapped" || status !== "success" || cardType == null) {
            return null;
        }
        return function(editDistanceRatio) {
            if (!n.actions.has("sent")) {
                n.actions.add("sent");
                o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
                    action: "sent",
                    cardStatus: "success",
                    cardType,
                    editDistanceRatio,
                    funnelId
                });
            }
        };
    }
    function x(e) {
        if (e !== _) {
            b.delete(e);
        }
    }
    function $(e, t) {
        if (e === _ || e.current.has(t)) {
            return false;
        }
        e.current.add(t);
        return true;
    }
    function P(e, t) {
        if (e !== _) {
            e.current.delete(t);
            const n = h.get(e);
            if (n != null) {
                n.delete(t);
                if (n.size === 0) {
                    h.delete(e);
                }
            }
        }
    }
    function N(e, t) {
        if (e !== _) {
            for (const n of e.current){
                if (n.startsWith(t)) {
                    e.current.delete(n);
                }
            }
        }
    }
    function M(e, t, n) {
        if (e === _ || !e.current.delete(t)) {
            return false;
        }
        e.current.add(n);
        return true;
    }
    function w(e, t, n) {
        if (e === _) {
            return n;
        }
        let r = h.get(e);
        if (r == null) {
            r = new Map;
            h.set(e, r);
        }
        const o = r.get(t);
        return o ?? (r.set(t, n), n);
    }
    function A(e, t, n) {
        if (e !== _) {
            let r = y.get(e);
            if (r == null) {
                r = new Map;
                y.set(e, r);
            }
            r.set(t, n);
        }
    }
    function F(e, t) {
        if (e === _) {
            return null;
        }
        return y.get(e)?.get(t);
    }
    function O(e, t, n) {
        if (e !== _) {
            const r = y.get(e);
            if (!(r == null || n != null && r.get(t) !== n)) {
                r.delete(t);
                if (r.size === 0) {
                    y.delete(e);
                }
            }
        }
    }
    function B(e) {
        return e === "error" || e === "loading" || e === "success";
    }
    function W(e, t) {
        if (e == null) {
            return true;
        }
        if (e.actions.has("dismiss")) {
            return e.status !== t.status || e.stanzaId !== t.stanzaId;
        }
        return e.status !== "loading" && (e.stanzaId !== t.stanzaId || t.status === "loading");
    }
    function q(e, t) {
        return {
            actions: new Set,
            cardType: e.cardType,
            errorCode: e.errorCode,
            funnelId: Math.floor(self.crypto.getRandomValues(new Uint32Array(1))[0] / 2),
            stanzaId: e.stanzaId,
            status: t
        };
    }
    l.WAWebBizAiSmartComposerImpressionProvider = v;
    l.useWAWebBizAiSmartComposerImpressions = S;
    l.registerSmartComposerSessionExitHandler = R;
    l.getSmartComposerShownCard = L;
    l.registerSmartComposerShownCard = E;
    l.forgetSmartComposerShownCard = k;
    l.discardSmartComposerShownCardWithoutExit = I;
    l.recordSmartComposerFunnelCardState = T;
    l.dismissSmartComposerFunnel = D;
    l.resetSmartComposerFunnel = x;
    l.markSmartComposerImpression = $;
    l.forgetSmartComposerImpression = P;
    l.forgetSmartComposerImpressionsWithPrefix = N;
    l.moveSmartComposerImpression = M;
    l.rememberSmartComposerSuggestionAttribution = w;
    l.rememberSmartComposerPendingSuggestion = A;
    l.getSmartComposerPendingSuggestion = F;
    l.forgetSmartComposerPendingSuggestion = O;
}, 98);