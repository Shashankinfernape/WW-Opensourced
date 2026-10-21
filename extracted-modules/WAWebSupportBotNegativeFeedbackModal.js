__d("WAWebSupportBotNegativeFeedbackModal", [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportBotFeedbackKind",
    "WAWebText.react",
    "WAWebWamEnumSupportAiEventType",
    "WDSMargins.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useState } = d;
    const _ = {
        option: {
            display: "x78zum5",
            fontSize: "x1f6kntn",
            lineHeight: "x1fc57z9",
            $$css: true
        }
    };
    function f(t) {
        const a = o("react-compiler-runtime").c(20);
        const { msgKey, onSubmit } = t;
        let u;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [];
            a[0] = u;
        } else {
            u = a[0];
        }
        const d = useState(u);
        const f = d[0];
        const C = d[1];
        let b;
        if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
            b = [];
            a[1] = b;
        } else {
            b = a[1];
        }
        useEffect(y, b);
        const v = h;
        let S;
        if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
            S = function() {
                return o("WAWebSupportBotFeedbackKind").getNegativeSupportFeedbackKinds().map((e)=>({
                        value: e,
                        label: v(e)
                    }));
            };
            a[2] = S;
        } else {
            S = a[2];
        }
        const R = S;
        let L;
        if (a[3] !== f) {
            L = function(t) {
                if (f.includes(t)) {
                    C(f.filter((e)=>e !== t));
                } else {
                    C([].concat(f, [
                        t
                    ]));
                }
            };
            a[3] = f;
            a[4] = L;
        } else {
            L = a[4];
        }
        const E = L;
        let k;
        if (a[5] !== msgKey || a[6] !== onSubmit || a[7] !== f) {
            k = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (f.length > 0) {
                        yield onSubmit(msgKey, f);
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            a[5] = msgKey;
            a[6] = onSubmit;
            a[7] = f;
            a[8] = k;
        } else {
            k = a[8];
        }
        const I = k;
        let T;
        let D;
        let x;
        if (a[9] === Symbol.for("react.memo_cache_sentinel")) {
            T = {
                surface: "unknown",
                viewName: "support-negative-feedback"
            };
            D = s._("Add a reason");
            x = s._("Submit");
            a[9] = T;
            a[10] = D;
            a[11] = x;
        } else {
            T = a[9];
            D = a[10];
            x = a[11];
        }
        const $ = f.length < 1;
        let P;
        if (a[12] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            P = <Component paddingBottom={12}>{s._("Your feedback can help improve the quality of WhatsApp Support chat.")}</Component>;
            a[12] = P;
        } else {
            P = a[12];
        }
        let N;
        if (a[13] !== E || a[14] !== f) {
            N = R().map((t, n)=>{
                const Component = o("WAWebCheckBox.react").CheckBox;
                return <div key={t.value} {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.option, o("WDSMargins.stylex").wdsMargins.marginTop12, o("WDSMargins.stylex").wdsMargins.marginEnd0), {
                    children: [
                        <div className="x1rg5ohu xxymvpz x1sa5p1d"><Component key={t.value} checked={f.includes(t.value)} onChange={function() {
                            return E(t.value);
                        }} testid={`feedback-option-${n}`}/></div>,
                        <label>{t.label}</label>
                    ]
                })}/>;
            });
            a[13] = E;
            a[14] = f;
            a[15] = N;
        } else {
            N = a[15];
        }
        let M;
        if (a[16] !== I || a[17] !== N || a[18] !== $) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            M = <Component tsNavigationData={T} title={D} okText={x} onOK={I} okDisabled={$} onCancel={g}>{P}{N}</Component>;
            a[16] = I;
            a[17] = N;
            a[18] = $;
            a[19] = M;
        } else {
            M = a[19];
        }
        return M;
    }
    function g() {
        new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
            supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_CANCELLED
        }).commit();
        o("WAWebModalManager").ModalManager.close();
    }
    function h(e) {
        switch(e){
            case "negative_irrelevant":
                return s._("Not relevant");
            case "negative_inaccurate":
                return s._("Not accurate");
            case "negative_repetitive":
                return s._("Too repetitive");
            case "negative_harmful":
                return s._("Harmful or unsafe");
            case "negative_other":
                return s._("Something else");
            default:
                return "";
        }
    }
    function y() {
        new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
            supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_SHOWN
        }).commit();
    }
    l.default = f;
}, 226);