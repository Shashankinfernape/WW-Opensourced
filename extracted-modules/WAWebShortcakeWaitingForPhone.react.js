__d("WAWebShortcakeWaitingForPhone.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebLinkDeviceScreenPrimaryButton.react",
    "WAWebSpinner.react",
    "WDSIllustrationWdsPictoPasskey.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        textSection: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x1cy8zhl",
            rowGap: "x1kb72lq",
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        buttonSpacing: {
            marginTop: "x1anpbxc",
            $$css: true
        },
        spinnerStroke: {
            stroke: "xscos2w",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(5);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                className: "x78zum5 x1q0g3np x6s0dn4 x1qgv0r9"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = <span className="xngnso2 xo1l8bm x1mqxbix">{s._("Complete instructions on your phone")}</span>;
            a = <span className="x1f6kntn xo1l8bm x1mqxbix x1fc57z9">{s._("Make sure WhatsApp is open on your phone.")}</span>;
            e[1] = n;
            e[2] = a;
        } else {
            n = e[1];
            a = e[2];
        }
        let i;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            i = u.jsx(o("WAWebSpinner.react").Spinner, {
                size: 16,
                stroke: 2,
                color: c.spinnerStroke
            });
            e[3] = i;
        } else {
            i = e[3];
        }
        let l;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebLinkDeviceScreenPrimaryButton.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            l = <div {...babelHelpers.extends({}, t, {
                "data-testid": "shortcake_waiting_for_phone_card",
                children: [
                    <Component_1 xstyle={c.textSection}>{n}{a}<Component animate={false} disabled icon={i} onClick={m} testId="shortcake_waiting_continue_button" text={s._("Waiting for phone")} xstyle={c.buttonSpacing}/></Component_1>,
                    <div className="x78zum5 x6s0dn4 xl56j7k x2lah0s">{u.jsx(r("WDSIllustrationWdsPictoPasskey.react"), {
                        testid: "wds-picto-passkey"
                    })}</div>
                ]
            })}/>;
            e[4] = l;
        } else {
            l = e[4];
        }
        return l;
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
        return p.apply(this, arguments);
    }
    l.default = d;
}, 226);