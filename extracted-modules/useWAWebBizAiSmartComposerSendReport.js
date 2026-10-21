__d("useWAWebBizAiSmartComposerSendReport", [
    "WATimeUtils",
    "WAWebBizAiSmartComposerImpressionContext",
    "WAWebBizAiSmartComposerLogEvents",
    "WAWebChatThreadLogging",
    "WAWebNoop",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useRef } = s;
    const m = 500;
    function useP(e, hasComposerText, n) {
        const a = o("react-compiler-runtime").c(16);
        const i = o("WAWebBizAiSmartComposerImpressionContext").useWAWebBizAiSmartComposerImpressions();
        let l;
        if (a[0] !== e) {
            l = e.toString();
            a[0] = e;
            a[1] = l;
        } else {
            l = a[1];
        }
        const chatKey = l;
        let u;
        if (a[2] !== chatKey || a[3] !== hasComposerText) {
            u = {
                chatKey,
                hasComposerText
            };
            a[2] = chatKey;
            a[3] = hasComposerText;
            a[4] = u;
        } else {
            u = a[4];
        }
        const mRef = useRef(u);
        let p;
        let g;
        if (a[5] !== chatKey || a[6] !== hasComposerText || a[7] !== i || a[8] !== n) {
            p = function() {
                const mRef_current = mRef.current;
                mRef.current = {
                    chatKey,
                    hasComposerText
                };
                if (n && mRef_current.chatKey === chatKey && mRef_current.hasComposerText && !hasComposerText) {
                    o("WAWebBizAiSmartComposerImpressionContext").forgetSmartComposerPendingSuggestion(i, chatKey);
                }
                return r("WAWebNoop");
            };
            g = [
                chatKey,
                hasComposerText,
                i,
                n
            ];
            a[5] = chatKey;
            a[6] = hasComposerText;
            a[7] = i;
            a[8] = n;
            a[9] = p;
            a[10] = g;
        } else {
            p = a[9];
            g = a[10];
        }
        useEffect(p, g);
        let h;
        if (a[11] !== e || a[12] !== chatKey || a[13] !== i || a[14] !== n) {
            h = function(a, l) {
                if (n) {
                    const t = o("WAWebBizAiSmartComposerImpressionContext").getSmartComposerPendingSuggestion(i, chatKey);
                    if (t != null) {
                        o("WAWebBizAiSmartComposerImpressionContext").forgetSmartComposerPendingSuggestion(i, chatKey, t);
                        const u = f(t.text, a);
                        l.then((n)=>{
                            if (n) {
                                o("WAWebBizAiSmartComposerLogEvents").logSendSuggestion(t.trigger, t.cardType, u);
                                _(e, u.wasEdited);
                                t.reportSent(babelHelpers.extends({}, u, {
                                    editDistanceRatio: u.suggestionWordCount === 0 ? null : u.editDistanceRatio
                                }));
                            }
                        }, r("WAWebNoop"));
                    }
                }
            };
            a[11] = e;
            a[12] = chatKey;
            a[13] = i;
            a[14] = n;
            a[15] = h;
        } else {
            h = a[15];
        }
        return h;
    }
    function _(e, wasEdited) {
        o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
            {
                activityType: wasEdited ? "bizAiSuggestedRepliesSentWithEdits" : "bizAiSuggestedRepliesSentWithoutEdits",
                chatId: e,
                ts: o("WATimeUtils").unixTime()
            }
        ]);
    }
    function f(text, t) {
        const n = g(text);
        const r = g(t);
        const n_length = n.length;
        if (h(n, r)) {
            return {
                editDistance: 0,
                editDistanceRatio: 0,
                suggestionWordCount: n_length,
                wasEdited: false
            };
        }
        if (n_length > m || r.length > m) {
            return {
                editDistance: null,
                editDistanceRatio: null,
                suggestionWordCount: n_length,
                wasEdited: true
            };
        }
        const editDistance = y(n, r);
        return {
            editDistance,
            editDistanceRatio: n_length === 0 ? 0 : Math.min(editDistance / n_length, 1),
            suggestionWordCount: n_length,
            wasEdited: true
        };
    }
    function g(e) {
        const t = e.trim();
        if (t === "") {
            return [];
        }
        return t.split(/\s+/);
    }
    function h(e, t) {
        return e.length === t.length && e.every((e, n)=>e === t[n]);
    }
    function y(e, t) {
        if (e.length === 0) {
            return t.length;
        }
        if (t.length === 0) {
            return e.length;
        }
        let n = Array.from({
            length: t.length + 1
        }, function(e, t) {
            return t;
        });
        for(let r = 1; r <= e.length; r++){
            const o = [
                r
            ];
            for(let a = 1; a <= t.length; a++){
                const i = n[a - 1] + (e[r - 1] === t[a - 1] ? 0 : 1);
                o[a] = Math.min(i, n[a] + 1, o[a - 1] + 1);
            }
            n = o;
        }
        return n[t.length];
    }
    l.default = useP;
}, 98);