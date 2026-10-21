__d("WAWebMutePopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebModalManager",
    "WAWebMuteExpirations",
    "WAWebMuteGetters",
    "WAWebRadio.react",
    "WAWebText.react",
    "WAWebUserPrefsGeneral",
    "react",
    "react-compiler-runtime",
    "useWAWebMuteValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useState } = c;
    function p(e) {
        const t = o("react-compiler-runtime").c(29);
        const { children, onMute } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMuteGetters").getExpiration,
                o("WAWebMuteGetters").getCallExpiration
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMuteValues").useMuteValues(e.mute.id, a);
        const l = i[0];
        const c = i[1];
        const p = useState(null);
        const _ = p[0];
        const f = p[1];
        let g;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            g = function(t) {
                f(t);
            };
            t[1] = g;
        } else {
            g = t[1];
        }
        const h = g;
        let y;
        if (t[2] !== _) {
            y = function() {
                if (_ != null && _ !== 0) {
                    return _;
                }
                return o("WAWebUserPrefsGeneral").getLastChatMuteDuration() || o("WAWebMuteExpirations").getDefaultMuteDuration();
            };
            t[2] = _;
            t[3] = y;
        } else {
            y = t[3];
        }
        const C = y;
        let b;
        if (t[4] !== C || t[5] !== onMute || t[6] !== e.entryPoint) {
            b = function() {
                o("WAWebModalManager").ModalManager.close();
                const t = C();
                o("WAWebUserPrefsGeneral").setLastChatMuteDuration(t);
                onMute(o("WAWebMuteExpirations").calculateMuteExpiration(t), t, e.entryPoint ?? 0);
            };
            t[4] = C;
            t[5] = onMute;
            t[6] = e.entryPoint;
            t[7] = b;
        } else {
            b = t[7];
        }
        const v = b;
        let S;
        let R;
        if (t[8] !== c || t[9] !== l) {
            S = function() {
                if (l != null && l !== 0 && c != null && c !== 0) {
                    o("WAWebModalManager").closeModalManager();
                }
            };
            R = [
                c,
                l
            ];
            t[8] = c;
            t[9] = l;
            t[10] = S;
            t[11] = R;
        } else {
            S = t[10];
            R = t[11];
        }
        useEffect(S, R);
        const L = e.onCancel || o("WAWebModalManager").closeModalManager;
        let E;
        if (t[12] !== C) {
            E = C();
            t[12] = C;
            t[13] = E;
        } else {
            E = t[13];
        }
        const checkedValue = E;
        let I;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            I = o("WAWebMuteExpirations").ALL_MUTE_DURATIONS.map(({ duration, getLabel, radioId })=>({
                    value: duration,
                    label: getLabel(),
                    testid: radioId,
                    onChange: function() {
                        return h(duration);
                    }
                }));
            t[14] = I;
        } else {
            I = t[14];
        }
        let T;
        if (t[15] !== checkedValue) {
            T = u.jsx(o("WAWebRadio.react").RadioGroup, {
                name: "ractionMuteDuration",
                theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
                checkedValue,
                options: I
            });
            t[15] = checkedValue;
            t[16] = T;
        } else {
            T = t[16];
        }
        const D = T;
        let x;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            x = {
                surface: "unknown",
                viewName: "mute-chat"
            };
            t[17] = x;
        } else {
            x = t[17];
        }
        let $;
        if (t[18] !== e.title) {
            $ = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: e.title
            });
            t[18] = e.title;
            t[19] = $;
        } else {
            $ = t[19];
        }
        let P;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            P = s._("Mute");
            t[20] = P;
        } else {
            P = t[20];
        }
        let N;
        if (t[21] !== children) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            N = children != null && <Component paddingBottom={12}>{children}</Component>;
            t[21] = children;
            t[22] = N;
        } else {
            N = t[22];
        }
        let M;
        if (t[23] !== v || t[24] !== L || t[25] !== D || t[26] !== $ || t[27] !== N) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            M = <Component tsNavigationData={x} title={$} okText={P} onOK={v} onCancel={L} testid="mute-popup">{N}{D}</Component>;
            t[23] = v;
            t[24] = L;
            t[25] = D;
            t[26] = $;
            t[27] = N;
            t[28] = M;
        } else {
            M = t[28];
        }
        return M;
    }
    l.default = p;
}, 226);