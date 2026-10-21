__d("WAWebShortcakePasskeyScreen.react", [
    "fbt",
    "WALogger",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebLandingHeader.react",
    "WAWebLinkDeviceEvents",
    "WAWebShortcakeCodeMatching.react",
    "WAWebShortcakePasskeyPrompt.react",
    "WAWebShortcakeWaitingForPhone.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = p;
    const { useCallback, useState } = f;
    const y = {
        wrapper: {
            position: "xixxii4",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            width: "xn9wirt",
            height: "x1dr59a3",
            overflowX: "xw2csxc",
            overflowY: "x1odjw0f",
            paddingTop: "x1p57kb1",
            paddingBottom: "xvpt6g3",
            paddingInlineStart: "xu7uy1i",
            paddingInlineEnd: "x1t7qo4d",
            boxSizing: "x9f619",
            zIndex: "xfo81ep",
            $$css: true
        },
        wrapperWeb: {
            backgroundColor: "xq1354q",
            $$css: true
        },
        wrapperWindows: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        headerContainer: {
            width: "xh8yej3",
            height: "xwzfr38",
            $$css: true
        }
    };
    function C({ onCancel, onConfirmVerificationCode, onStartPasskeyPairing }) {
        const p = useState("passkey_prompt");
        const f = p[0];
        const C = p[1];
        const b = useState("");
        const verificationCode = b[0];
        const S = b[1];
        const R = useState(false);
        const L = R[0];
        const E = R[1];
        const k = useState(false);
        const autoConfirming = k[0];
        const T = k[1];
        o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:shortcake_prologue_sent", useCallback(function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake UI: prologue sent, showing waiting screen"
            ])));
            C("waiting_for_phone");
        }, []));
        o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:shortcake_verification_code_ready", useCallback(function(e, t) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake UI: verification code ready, skipHandoffUx=",
                ""
            ])), String(t));
            S(e);
            T(t);
            C("code_matching");
            if (t) {
                onConfirmVerificationCode().catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Shortcake UI: auto-confirm failed: ",
                        ""
                    ])), r("getErrorSafe")(e).message).catching(r("getErrorSafe")(e)).sendLogs("shortcake-autoconfirm-fail");
                    T(false);
                    E(true);
                    C("error");
                });
            }
        }, [
            onConfirmVerificationCode
        ]));
        o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:shortcake_error", useCallback(function(e) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake UI: error - ",
                ""
            ])), e).sendLogs("shortcake-passkey-error");
            T(false);
            E(true);
            C("error");
        }, []));
        const onContinue_1 = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            C("passkey_pending");
            T(false);
            onStartPasskeyPairing().catch((e)=>{
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake UI: passkey pairing failed: ",
                    ""
                ])), r("getErrorSafe")(e).message).catching(r("getErrorSafe")(e)).sendLogs("shortcake-passkey-start-fail");
                E(true);
                C("error");
            });
        }), [
            onStartPasskeyPairing
        ]);
        const x = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield onConfirmVerificationCode();
        }), [
            onConfirmVerificationCode
        ]);
        const onContinue = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            T(false);
            yield onContinue_1();
        }), [
            onContinue_1
        ]);
        const Component = r("WAWebShortcakePasskeyPrompt.react");
        const Component_1 = r("WAWebShortcakePasskeyPrompt.react");
        const Component_2 = r("WAWebShortcakeCodeMatching.react");
        const Component_3 = r("WAWebShortcakePasskeyPrompt.react");
        const P = f === "passkey_prompt" ? <Component isDisabled={false} onContinue={onContinue_1} passkeyStatus={L ? "retrying" : "initial"}/> : f === "passkey_pending" ? <Component_1 isDisabled onContinue={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {})} passkeyStatus={L ? "retrying" : "initial"}/> : f === "waiting_for_phone" ? _.jsx(r("WAWebShortcakeWaitingForPhone.react"), {}) : f === "code_matching" ? <Component_2 autoConfirming={autoConfirming} verificationCode={verificationCode} onConfirm={x}/> : f === "error" ? <Component_3 isDisabled={false} onContinue={onContinue} passkeyStatus="failed"/> : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${f}`);
        })();
        const Component_4 = o("WAWebFlex.react").FlexItem;
        const Component_5 = o("WAWebFlex.react").FlexColumn;
        const Component_6 = o("WAWebFlex.react").FlexColumn;
        return <Component_6 align="center" xstyle={[
            y.wrapper,
            r("WAWebEnvironment").isWeb ? y.wrapperWeb : y.wrapperWindows
        ]} testid="shortcake_passkey_screen"><Component_4 xstyle={y.headerContainer} shrink={0}>{_.jsx(r("WAWebLandingHeader.react"), {
            showAppDownloadButton: false,
            surface: "lock-screen"
        })}</Component_4><Component_5 align="center" justify="center" grow={1} shrink={0}><div className="xewp6mh x4i7bpe x1sgudl8 x1oiqv2n x15zmtp0 x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn xb1i3fl x15yb4d7">{P}</div><button className="x78zum5 x6s0dn4 xl56j7k xfex06f x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk xexx8yu x18d9i69 x1c1uobl xyri2b xqui205" data-testid="shortcake_cancel_button" onClick={onCancel} type="button"><span className="x1f6kntn xk50ysn xq5w6dx xujl8zx x1o9h5kx xewurvo x3pynha x15yb4d7">{s._("Cancel")}</span></button></Component_5>{_.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: y.headerContainer
        })}</Component_6>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.default = C;
}, 226);