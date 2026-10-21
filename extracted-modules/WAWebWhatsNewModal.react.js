__d("WAWebWhatsNewModal.react", [
    "fbt",
    "WATimeUtils",
    "WAWebConfirmPopup.react",
    "WAWebEnvironment",
    "WAWebModalManager",
    "WAWebWhatsNewContent",
    "WAWebWhatsNewLogging",
    "WAWebWhatsNewNux",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIllustrationWdsPictoWhatsappOutline.react",
    "react",
    "react-compiler-runtime",
    "useVisibility"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect, useRef } = c;
    function _(e) {
        const t = o("react-compiler-runtime").c(32);
        const { bizAgentEligible, cooldownDays } = e;
        const bizAgentEligible_1 = bizAgentEligible === undefined ? true : bizAgentEligible;
        const l = cooldownDays === undefined ? 30 : cooldownDays;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = o("WATimeUtils").monotonicTime();
            t[0] = c;
        } else {
            c = t[0];
        }
        const dRef = useRef(c);
        const _RefRef = useRef(false);
        let g;
        if (t[1] !== l) {
            g = {
                onVisible: function() {
                    if (!_RefRef.current) {
                        o("WAWebWhatsNewLogging").logModalImpression(l);
                        _RefRef.current = true;
                    }
                }
            };
            t[1] = l;
            t[2] = g;
        } else {
            g = t[2];
        }
        const h = r("useVisibility")(g);
        const y = h[0];
        let C;
        let b;
        if (t[3] !== l) {
            C = function() {
                return function() {
                    o("WAWebWhatsNewNux").createWhatsNewNux(l).dismiss();
                };
            };
            b = [
                l
            ];
            t[3] = l;
            t[4] = C;
            t[5] = b;
        } else {
            C = t[4];
            b = t[5];
        }
        useEffect(C, b);
        let v;
        if (t[6] !== l) {
            v = function() {
                const e = o("WATimeUtils").monotonicTimeSince(dRef.current);
                o("WAWebWhatsNewLogging").logModalDismissButton(l, e);
                o("WAWebModalManager").ModalManager.close();
            };
            t[6] = l;
            t[7] = v;
        } else {
            v = t[7];
        }
        const S = v;
        let R;
        if (t[8] !== l) {
            R = function() {
                const e = o("WATimeUtils").monotonicTimeSince(dRef.current);
                o("WAWebWhatsNewLogging").logModalDismissOverlay(l, e);
                o("WAWebModalManager").ModalManager.close();
            };
            t[8] = l;
            t[9] = R;
        } else {
            R = t[9];
        }
        const onOverlayClick = R;
        let E;
        let k;
        let I;
        let T;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            T = {
                className: "x1n2onr6 xb0esv5 xyo0t3i x1p57kb1 x2b8uid"
            };
            E = <div className="x78zum5 xl56j7k x12xbjc7">{u.jsx(r("WDSIllustrationWdsPictoWhatsappOutline.react"), {
                "aria-hidden": true
            })}</div>;
            k = <span>{r("WAWebEnvironment").isWindows ? s._("What’s new on WhatsApp for Windows") : s._("What’s new on WhatsApp Web")}</span>;
            I = {
                className: "x10l6tqk x12c0h9u x18zu7yx"
            };
            t[10] = E;
            t[11] = k;
            t[12] = I;
            t[13] = T;
        } else {
            E = t[10];
            k = t[11];
            I = t[12];
            T = t[13];
        }
        let D;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            D = s._("Close");
            t[14] = D;
        } else {
            D = t[14];
        }
        let x;
        if (t[15] !== S) {
            const Component = r("WDSButton.react");
            x = <div {...babelHelpers.extends({}, T, {
                children: [
                    E,
                    k,
                    <div {...babelHelpers.extends({}, I, {
                        children: <Component variant="borderless" size="medium" Icon={r("WDSIconIcClose.react")} onPress={S} aria-label={D}/>
                    })}/>
                ]
            })}/>;
            t[15] = S;
            t[16] = x;
        } else {
            x = t[16];
        }
        let $;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            $ = {
                className: "x78zum5 xdt5ytf x1f0uite xs2akgl x13jy36j x64bnmy x16ovd2e xv6tirj"
            };
            t[17] = $;
        } else {
            $ = t[17];
        }
        let P;
        if (t[18] !== bizAgentEligible_1) {
            P = o("WAWebWhatsNewContent").getWhatsNewFeatures({
                bizAgentEligible: bizAgentEligible_1
            }).map(f);
            t[18] = bizAgentEligible_1;
            t[19] = P;
        } else {
            P = t[19];
        }
        let N;
        if (t[20] !== P || t[21] !== y) {
            N = <div {...babelHelpers.extends({
                ref: y
            }, $, {
                children: P
            })}/>;
            t[20] = P;
            t[21] = y;
            t[22] = N;
        } else {
            N = t[22];
        }
        let M;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            M = {
                className: "x78zum5 xl56j7k xvpt6g3"
            };
            t[23] = M;
        } else {
            M = t[23];
        }
        let w;
        if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
            w = s._("Continue");
            t[24] = w;
        } else {
            w = t[24];
        }
        let A;
        if (t[25] !== S) {
            const Component = r("WDSButton.react");
            A = <div {...babelHelpers.extends({}, M, {
                children: <Component variant="filled" size="medium" label={w} onPress={S} testid="whats_new_continue_button"/>
            })}/>;
            t[25] = S;
            t[26] = A;
        } else {
            A = t[26];
        }
        let F;
        if (t[27] !== onOverlayClick || t[28] !== x || t[29] !== N || t[30] !== A) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            F = <Component title={x} onOverlayClick={onOverlayClick}>{N}{A}</Component>;
            t[27] = onOverlayClick;
            t[28] = x;
            t[29] = N;
            t[30] = A;
            t[31] = F;
        } else {
            F = t[31];
        }
        return F;
    }
    function f(e, t) {
        return <div key={t} className="x78zum5 x1q0g3np x6s0dn4 x1f0uite xs2akgl"><div className="x2lah0s x14ug900"><e.Icon width={24} height={24}/></div><div className="x1f6kntn x1fc57z9 x14ug900">{e.description()}</div></div>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.default = _;
}, 226);