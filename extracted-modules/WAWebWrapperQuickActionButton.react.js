__d("WAWebWrapperQuickActionButton.react", [
    "fbt",
    "WAWebABProps",
    "WAWebRound.react",
    "WDSButton.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcInfo.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = {
        svgColorRefreshed: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(20);
        const { onOpenBizEncStateMissmatchInfoPopup, onOpenBizPrivacyInfoPopup, onOpenEphemeralExemptionInfoPopup, onOpenForwardFlow, onOpenMarketingMessagesFeedback, showHostedBizEncStateMismatchInfoAction, showQuickBizPrivacyInfoAction, showQuickEphemeralExemptionInfoAction, showQuickForwardAction, showQuickMarketingMessagesFeedbackAction } = e;
        const y = e_useState(false);
        const C = y[0];
        const b = y[1];
        let v;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            v = o("WAWebABProps").getABPropConfigValue("wa_web_quick_reactions");
            t[0] = v;
        } else {
            v = t[0];
        }
        const S = v === true;
        let R = null;
        const d_svgColorRefreshed = d.svgColorRefreshed;
        if (showQuickBizPrivacyInfoAction) {
            let E;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                E = s._("Privacy info");
                t[1] = E;
            } else {
                E = t[1];
            }
            let k;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                k = u.jsx(r("WDSIconIcInfo.react"), {
                    height: 25,
                    width: 25,
                    xstyle: d_svgColorRefreshed,
                    testid: "info-alt"
                });
                t[2] = k;
            } else {
                k = t[2];
            }
            let I;
            if (t[3] !== onOpenBizPrivacyInfoPopup) {
                const Component = o("WAWebRound.react").Round;
                I = <Component onClick={onOpenBizPrivacyInfoPopup} label={E} theme={o("WAWebRound.react").RoundTheme.QuickActionRefreshed}>{k}</Component>;
                t[3] = onOpenBizPrivacyInfoPopup;
                t[4] = I;
            } else {
                I = t[4];
            }
            R = I;
        } else if (showQuickMarketingMessagesFeedbackAction) {
            let T;
            let D;
            if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                T = s._("Message feedback");
                D = s._("Feedback");
                t[5] = T;
                t[6] = D;
            } else {
                T = t[5];
                D = t[6];
            }
            let x;
            if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                x = u.jsx(r("WDSIconIcInfo.react"), {
                    height: 25,
                    width: 25,
                    xstyle: d_svgColorRefreshed,
                    testid: "info-alt"
                });
                t[7] = x;
            } else {
                x = t[7];
            }
            let $;
            if (t[8] !== onOpenMarketingMessagesFeedback) {
                const Component = o("WAWebRound.react").Round;
                $ = <Component label={T} title={D} theme={o("WAWebRound.react").RoundTheme.QuickActionRefreshed} onClick={onOpenMarketingMessagesFeedback}>{x}</Component>;
                t[8] = onOpenMarketingMessagesFeedback;
                t[9] = $;
            } else {
                $ = t[9];
            }
            R = $;
        } else if (showQuickForwardAction) {
            let P;
            if (t[10] !== C || t[11] !== onOpenForwardFlow) {
                const Component = r("WDSButton.react");
                const Component_1 = r("WDSTooltip.react");
                const Component_2 = o("WAWebRound.react").Round;
                P = S ? <div className="x6s0dn4 x3nfvp2 xc8icb0 xl56j7k x1n2onr6" onPointerDownCapture={function() {
                    return b(true);
                }} onPointerUpCapture={function() {
                    return b(false);
                }} onPointerCancelCapture={function() {
                    return b(false);
                }} onPointerLeave={function() {
                    return b(false);
                }}><div {...babelHelpers.extends({}, {
                    0: {
                        className: "x1honnu5 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13vifvy xtijo5x x1ey2m1c x1o0tod x47corl x10l6tqk x3oybdh x13t8fmb x11xpdln xum2xem x1ja2u2z"
                    },
                    1: {
                        className: "x1honnu5 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13vifvy xtijo5x x1ey2m1c x1o0tod x47corl x10l6tqk x13t8fmb x11xpdln xum2xem x1ja2u2z x9f2ct2"
                    }
                }[!!C << 0])}/><span className="x78zum5 x1n2onr6 x1vjfegm"><Component_1 label={s._("Forward")}><Component type="media" variant="borderless" size="small" directional Icon={r("WDSIconIcFastForward.react")} onPress={function() {
                    return onOpenForwardFlow(false);
                }} aria-label={s._("Forward media")} testid="forward-refreshed"/></Component_1></span></div> : <Component_2 label={s._("Forward media")} theme={o("WAWebRound.react").RoundTheme.QuickActionRefreshed} onClick={function() {
                    return onOpenForwardFlow(false);
                }}>{u.jsx(r("WDSIconIcFastForward.react"), {
                    directional: true,
                    xstyle: d_svgColorRefreshed,
                    height: 20,
                    width: 20,
                    testid: "forward-refreshed"
                })}</Component_2>;
                t[10] = C;
                t[11] = onOpenForwardFlow;
                t[12] = P;
            } else {
                P = t[12];
            }
            R = P;
        } else if (showQuickEphemeralExemptionInfoAction) {
            let N;
            if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
                N = s._("Ephemeral info");
                t[13] = N;
            } else {
                N = t[13];
            }
            let M;
            if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
                M = u.jsx(r("WDSIconIcInfo.react"), {
                    height: 25,
                    width: 25,
                    xstyle: d_svgColorRefreshed,
                    testid: "info-alt"
                });
                t[14] = M;
            } else {
                M = t[14];
            }
            let w;
            if (t[15] !== onOpenEphemeralExemptionInfoPopup) {
                const Component = o("WAWebRound.react").Round;
                w = <Component label={N} theme={o("WAWebRound.react").RoundTheme.QuickActionRefreshed} onClick={onOpenEphemeralExemptionInfoPopup}>{M}</Component>;
                t[15] = onOpenEphemeralExemptionInfoPopup;
                t[16] = w;
            } else {
                w = t[16];
            }
            R = w;
        } else if (showHostedBizEncStateMismatchInfoAction) {
            let A;
            if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
                A = u.jsx(r("WDSIconIcInfo.react"), {
                    height: 25,
                    width: 25,
                    xstyle: d_svgColorRefreshed,
                    testid: "info-alt"
                });
                t[17] = A;
            } else {
                A = t[17];
            }
            let F;
            if (t[18] !== onOpenBizEncStateMissmatchInfoPopup) {
                const Component = o("WAWebRound.react").Round;
                F = <Component theme={o("WAWebRound.react").RoundTheme.QuickActionRefreshed} onClick={onOpenBizEncStateMissmatchInfoPopup}>{A}</Component>;
                t[18] = onOpenBizEncStateMissmatchInfoPopup;
                t[19] = F;
            } else {
                F = t[19];
            }
            R = F;
        }
        return R;
    }
    l.default = m;
}, 226);