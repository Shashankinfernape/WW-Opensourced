__d("WAWebBizAiEditLearnBanner.react", [
    "fbt",
    "WALogger",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebMessageEditUtils",
    "WAWebMsgActionCapability",
    "WDSText.react",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebCallbackOnce"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    function m(t) {
        const n = o("react-compiler-runtime").c(14);
        const t_msg = t.msg;
        let i;
        if (n[0] !== t_msg) {
            i = o("WAWebMsgActionCapability").shouldCoachAgentEdit(t_msg);
            n[0] = t_msg;
            n[1] = i;
        } else {
            i = n[1];
        }
        const l = i;
        let u;
        if (n[2] !== t_msg || n[3] !== l) {
            u = l && o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
                msgKey: t_msg.id,
                parentTsInSeconds: t_msg.t
            });
            n[2] = t_msg;
            n[3] = l;
            n[4] = u;
        } else {
            u = n[4];
        }
        const m = u;
        let p;
        if (n[5] !== m) {
            p = function() {
                try {
                    o("WAWebBizAILargeScreensLogEvents").logViewBizAiMessageEditComposerHint(m);
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "BizAI message edit composer hint telemetry failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-message-edit-composer-hint-telemetry-fail");
                }
            };
            n[5] = m;
            n[6] = p;
        } else {
            p = n[6];
        }
        const _ = r("useWAWebCallbackOnce")(p);
        let f;
        let g;
        if (n[7] !== _ || n[8] !== l) {
            f = function() {
                if (l) {
                    _();
                }
            };
            g = [
                _,
                l
            ];
            n[7] = _;
            n[8] = l;
            n[9] = f;
            n[10] = g;
        } else {
            f = n[9];
            g = n[10];
        }
        u_useEffect(f, g);
        if (!l) {
            return null;
        }
        let h;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x16ovd2e x12xbjc7 x1iw51ew xde1mab x1380le5 x150mmf0 xqf2s3x"
            };
            n[11] = h;
        } else {
            h = n[11];
        }
        let y;
        if (n[12] !== m) {
            const Component = r("WDSText.react");
            y = <div {...babelHelpers.extends({}, h, {
                "data-testid": "biz-ai-edit-learn-banner",
                children: <Component type="Body3" colorName="contentDeemphasized">{m ? s._("Your agent learns from your changes to improve future replies.") : s._("This message can no longer be changed for the customer, but your agent learns from your edit.")}</Component>
            })}/>;
            n[12] = m;
            n[13] = y;
        } else {
            y = n[13];
        }
        return y;
    }
    l.default = m;
}, 226);