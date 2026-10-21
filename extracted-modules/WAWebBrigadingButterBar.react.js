__d("WAWebBrigadingButterBar.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebTabOrder",
    "WAWebUserPrefsGeneral",
    "WDSBanner.react",
    "WDSIconIcCheckCircle.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebButterbarVisibilityReport",
    "useWAWebFocusOnMount"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(20);
        const { onDismiss, onVisibilityChange, ref, state } = e;
        const c = r("useWAWebFocusOnMount")();
        const m = r("useMergeRefs")(c, ref);
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
            t[0] = p;
        } else {
            p = t[0];
        }
        const f = p?.messages;
        const g = state === "ENFORCED" && f === "contacts";
        const h = state === "DETECTED" && f === "all";
        const y = state === "NOT_ENFORCED";
        const C = g || h || y;
        r("useWAWebButterbarVisibilityReport")(C, onVisibilityChange);
        if (!C) {
            return null;
        }
        let b;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("Your device is receiving a high volume of messages");
            t[1] = b;
        } else {
            b = t[1];
        }
        const v = b;
        const S = d;
        let R;
        let L;
        let E;
        let k;
        let I = "warning";
        e: switch(state){
            case "DETECTED":
                {
                    R = v;
                    let T;
                    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                        T = s._("Block messages from unknown accounts.");
                        t[2] = T;
                    } else {
                        T = t[2];
                    }
                    L = T;
                    let D;
                    if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                        D = s._("Turn on in settings");
                        t[3] = D;
                    } else {
                        D = t[3];
                    }
                    E = D;
                    k = S;
                    break e;
                }
            case "ENFORCED":
                {
                    R = v;
                    let x;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        x = s._("Messages from unknown accounts are being blocked.");
                        t[4] = x;
                    } else {
                        x = t[4];
                    }
                    L = x;
                    let $;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        $ = s._("Turn off in settings");
                        t[5] = $;
                    } else {
                        $ = t[5];
                    }
                    E = $;
                    k = S;
                    break e;
                }
            case "NOT_ENFORCED":
                {
                    let P;
                    if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                        P = s._("Message blocking turned off");
                        t[6] = P;
                    } else {
                        P = t[6];
                    }
                    R = P;
                    let N;
                    if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                        N = s._("Messages from unknown accounts aren't being blocked anymore.");
                        t[7] = N;
                    } else {
                        N = t[7];
                    }
                    L = N;
                    I = "default";
                    break e;
                }
            default:
        }
        if (L == null) {
            return null;
        }
        let M;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            M = {
                className: "x1380le5 xefnzgg x1uvdrpn x14mko6t"
            };
            t[8] = M;
        } else {
            M = t[8];
        }
        const w = I === "default" ? r("WDSIconIcCheckCircle.react") : undefined;
        let A;
        if (t[9] !== I || t[10] !== k || t[11] !== E || t[12] !== onDismiss || t[13] !== L || t[14] !== w || t[15] !== R) {
            const Component = r("WDSBanner.react");
            A = <Component type={I} title={R} body={L} actionText={E} onAction={k} onDismiss={onDismiss} icon={w} tabOrder={o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR}/>;
            t[9] = I;
            t[10] = k;
            t[11] = E;
            t[12] = onDismiss;
            t[13] = L;
            t[14] = w;
            t[15] = R;
            t[16] = A;
        } else {
            A = t[16];
        }
        let F;
        if (t[17] !== m || t[18] !== A) {
            F = <div {...babelHelpers.extends({
                ref: m,
                role: "alert",
                tabIndex: -1
            }, M, {
                children: A
            })}/>;
            t[17] = m;
            t[18] = A;
            t[19] = F;
        } else {
            F = t[19];
        }
        return F;
    }
    function d() {
        const Component = o("WAWebSettingsFlowLoadable").SettingsFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "settings",
            initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings
        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft} initialStep={o("WAWebSettingsConst").SettingsSteps.PrivacySettings}/>);
    }
    l.default = c;
}, 226);