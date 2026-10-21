__d("useWAWebBizAiMessageEditCoachingLog", [
    "WALogger",
    "WATimeUtils",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebMessageEditUtils",
    "WAWebMsgActionCapability",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const { useEffect, useRef, useState } = c;
    function _(e, t) {
        const n = o("react-compiler-runtime").c(20);
        let a;
        if (n[0] !== e) {
            a = o("WAWebMsgActionCapability").shouldCoachAgentEdit(e);
            n[0] = e;
            n[1] = a;
        } else {
            a = n[1];
        }
        const i = a;
        const l = useState(f);
        const s = l[0];
        const uRef = useRef(0);
        const cRef = useRef(t);
        const _RefRef = useRef(false);
        const CRef = useRef(false);
        let b;
        let v;
        if (n[2] !== i || n[3] !== e) {
            b = function() {
                if (i && !CRef.current) {
                    CRef.current = true;
                    const t = g(e);
                    h(t);
                    y(o("WATimeUtils").unixTimeMs() - e.t * 1000, t);
                }
            };
            v = [
                i,
                e
            ];
            n[2] = i;
            n[3] = e;
            n[4] = b;
            n[5] = v;
        } else {
            b = n[4];
            v = n[5];
        }
        useEffect(b, v);
        let S;
        if (n[6] !== i || n[7] !== e || n[8] !== s) {
            S = function() {
                if (i && !_RefRef.current) {
                    o("WAWebBizAILargeScreensLogEvents").logClickBizAiMessageEditCancel(uRef.current, Date.now() - s, g(e));
                }
            };
            n[6] = i;
            n[7] = e;
            n[8] = s;
            n[9] = S;
        } else {
            S = n[9];
        }
        r("useWAWebOnUnmount")(S);
        let onEditorResolved;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            onEditorResolved = function() {
                _RefRef.current = true;
            };
            n[10] = onEditorResolved;
        } else {
            onEditorResolved = n[10];
        }
        let onSaveConfirmed;
        if (n[11] !== i || n[12] !== e || n[13] !== s) {
            onSaveConfirmed = function() {
                if (i) {
                    o("WAWebBizAILargeScreensLogEvents").logClickBizAiMessageEditSave(uRef.current, Date.now() - s, g(e));
                }
            };
            n[11] = i;
            n[12] = e;
            n[13] = s;
            n[14] = onSaveConfirmed;
        } else {
            onSaveConfirmed = n[14];
        }
        let onTextChanged;
        if (n[15] !== i) {
            onTextChanged = function(t) {
                if (i && t !== cRef.current) {
                    cRef.current = t;
                    uRef.current = uRef.current + 1;
                }
            };
            n[15] = i;
            n[16] = onTextChanged;
        } else {
            onTextChanged = n[16];
        }
        let k;
        if (n[17] !== onSaveConfirmed || n[18] !== onTextChanged) {
            k = {
                onEditorResolved,
                onSaveConfirmed,
                onTextChanged
            };
            n[17] = onSaveConfirmed;
            n[18] = onTextChanged;
            n[19] = k;
        } else {
            k = n[19];
        }
        return k;
    }
    function f() {
        return Date.now();
    }
    function g(e) {
        return o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
            msgKey: e.id,
            parentTsInSeconds: e.t
        });
    }
    function h(t) {
        try {
            o("WAWebBizAILargeScreensLogEvents").logClickBizAiMessageEditStartEditing(t);
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI message edit telemetry failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-message-edit-telemetry-fail");
        }
    }
    function y(e, t) {
        try {
            o("WAWebBizAILargeScreensLogEvents").logViewBizAiMessageEditEditor(e, t);
        } catch (error) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI message edit telemetry failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-message-edit-telemetry-fail");
        }
    }
    l.default = _;
}, 98);