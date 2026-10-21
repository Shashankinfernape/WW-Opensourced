__d("WAWebShortcakeCodeMatching.react", [
    "fbt",
    "WALogger",
    "WAWebFlex.react",
    "WAWebLinkDeviceScreenPrimaryButton.react",
    "WAWebSpinner.react",
    "WDSIconIcArrowForward.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useState } = d;
    const _ = 4;
    const f = {
        textSection: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x1cy8zhl",
            rowGap: "x1kb72lq",
            $$css: true
        },
        buttonSpacing: {
            marginTop: "x1anpbxc",
            $$css: true
        },
        spinnerStroke: {
            stroke: "xscos2w",
            $$css: true
        },
        codeRow: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            columnGap: "xmixu3c",
            $$css: true
        }
    };
    function g(t) {
        const a = o("react-compiler-runtime").c(47);
        const { autoConfirming, onConfirm, verificationCode } = t;
        const d = autoConfirming === undefined ? false : autoConfirming;
        const m = useState(false);
        const _ = m[0];
        const g = m[1];
        const y = _ || d;
        let C;
        if (a[0] !== onConfirm) {
            C = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    g(true);
                    onConfirm().catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Shortcake UI: code confirmation failed"
                        ]))).catching(r("getErrorSafe")(t)).sendLogs("shortcake-code-confirm-fail");
                        g(false);
                    });
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            a[0] = onConfirm;
            a[1] = C;
        } else {
            C = a[1];
        }
        const b = C;
        let v;
        let S;
        let R;
        let L;
        let E;
        let k;
        let I;
        let T;
        let D;
        let role;
        let $;
        let P;
        if (a[2] !== verificationCode) {
            const N = verificationCode.split("");
            S = o("WAWebFlex.react").FlexColumn;
            P = f.textSection;
            R = "shortcake_code_matching_card";
            if (a[15] === Symbol.for("react.memo_cache_sentinel")) {
                L = <span className="xngnso2 xo1l8bm x1mqxbix">{s._("Confirm on your phone to link device")}</span>;
                E = <span className="x1f6kntn xo1l8bm x1mqxbix x1fc57z9">{s._("To link your device to this phone number, confirm that the code matches on both devices.")}</span>;
                T = {
                    className: "xh8yej3 xf39lq1 xlr9sxt xvvg52n xwd4zgb xq8v1ta xz9dl7a xsag5q8"
                };
                a[15] = L;
                a[16] = E;
                a[17] = T;
            } else {
                L = a[15];
                E = a[16];
                T = a[17];
            }
            D = "shortcake_verification_code_display";
            role = "status";
            $ = s._("Verification code: {code}", [
                s._param("code", verificationCode.split("").join(" "))
            ]);
            v = o("WAWebFlex.react").FlexRow;
            k = f.codeRow;
            I = N.map(h);
            a[2] = verificationCode;
            a[3] = v;
            a[4] = S;
            a[5] = R;
            a[6] = L;
            a[7] = E;
            a[8] = k;
            a[9] = I;
            a[10] = T;
            a[11] = D;
            a[12] = role;
            a[13] = $;
            a[14] = P;
        } else {
            v = a[3];
            S = a[4];
            R = a[5];
            L = a[6];
            E = a[7];
            k = a[8];
            I = a[9];
            T = a[10];
            D = a[11];
            role = a[12];
            $ = a[13];
            P = a[14];
        }
        let M;
        if (a[18] !== v || a[19] !== k || a[20] !== I) {
            M = c.jsx(v, {
                xstyle: k,
                children: I
            });
            a[18] = v;
            a[19] = k;
            a[20] = I;
            a[21] = M;
        } else {
            M = a[21];
        }
        let w;
        if (a[22] !== M || a[23] !== T || a[24] !== D || a[25] !== role || a[26] !== $) {
            w = <div {...babelHelpers.extends({}, T, {
                "data-testid": D,
                role,
                "aria-label": $,
                children: M
            })}/>;
            a[22] = M;
            a[23] = T;
            a[24] = D;
            a[25] = role;
            a[26] = $;
            a[27] = w;
        } else {
            w = a[27];
        }
        let A;
        if (a[28] === Symbol.for("react.memo_cache_sentinel")) {
            A = <span className="x1nxh6w3 x1v8dydz xd4r4e8">{s._("Only continue if codes match. This is important to ensure your chats remain private.")}</span>;
            a[28] = A;
        } else {
            A = a[28];
        }
        const animate = !y;
        let O;
        if (a[29] !== y) {
            O = y ? c.jsx(o("WAWebSpinner.react").Spinner, {
                size: 16,
                stroke: 2,
                color: f.spinnerStroke
            }) : c.jsx(r("WDSIconIcArrowForward.react"), {});
            a[29] = y;
            a[30] = O;
        } else {
            O = a[30];
        }
        let B;
        if (a[31] !== y) {
            B = y ? s._("Waiting for phone") : s._("Confirm");
            a[31] = y;
            a[32] = B;
        } else {
            B = a[32];
        }
        let W;
        if (a[33] !== b || a[34] !== y || a[35] !== animate || a[36] !== O || a[37] !== B) {
            const Component = r("WAWebLinkDeviceScreenPrimaryButton.react");
            W = <Component animate={animate} disabled={y} icon={O} onClick={b} testId="shortcake_code_confirm_button" text={B} xstyle={f.buttonSpacing}/>;
            a[33] = b;
            a[34] = y;
            a[35] = animate;
            a[36] = O;
            a[37] = B;
            a[38] = W;
        } else {
            W = a[38];
        }
        let q;
        if (a[39] !== S || a[40] !== R || a[41] !== L || a[42] !== E || a[43] !== w || a[44] !== W || a[45] !== P) {
            q = <S xstyle={P} testid={R}>{L}{E}{w}{A}{W}</S>;
            a[39] = S;
            a[40] = R;
            a[41] = L;
            a[42] = E;
            a[43] = w;
            a[44] = W;
            a[45] = P;
            a[46] = q;
        } else {
            q = a[46];
        }
        return q;
    }
    function h(e, t) {
        return <c.Fragment key={t}>{t === _ && <span className="x78zum5 x6s0dn4 xl56j7k x579bpy xk50ysn x1618xya x1djpfga x1im30kd" aria-hidden="true">-</span>}<span className="x78zum5 x6s0dn4 xl56j7k x10h3iyq xsdox4t x12peec7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xkf4vw5 xwfngxx xoop1me x1lylb4u xyi3aci xwf5gio x1p453bz x1suzm8a x1aueamr xk50ysn x1jzgpr8 x1618xya" aria-hidden="true">{e}</span></c.Fragment>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.default = g;
}, 226);