__d("WAWebMessageSmoothRangeInput", [
    "$InternalEnum",
    "WAWebMessageSmoothRangeInput.stylex",
    "WAWebPttComposerRangeInput.react",
    "clamp",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useState } = c;
    const p = n("$InternalEnum").Mirrored([
        "AUDIO_OUTGOING_UNPLAYED",
        "AUDIO_OUTGOING_PLAYED",
        "AUDIO_INCOMING_UNPLAYED",
        "AUDIO_INCOMING_PLAYED"
    ]);
    function _(t) {
        const n = o("react-compiler-runtime").c(68);
        const { ariaLabel, disabled, largeSkip, max, min, onChange, onCommit, smallSkip, theme, value, valueText } = t;
        const C = useState(null);
        const b = C[0];
        const v = C[1];
        let S;
        if (n[0] !== onChange) {
            S = function(t) {
                v(t);
                onChange?.(t);
            };
            n[0] = onChange;
            n[1] = S;
        } else {
            S = n[1];
        }
        const R = S;
        let L;
        if (n[2] !== onCommit) {
            L = function(t) {
                v(null);
                onCommit?.(t);
            };
            n[2] = onCommit;
            n[3] = L;
        } else {
            L = n[3];
        }
        const E = L;
        const k = b ?? value;
        const I = 100 * r("clamp")((k - min) / (max - min), 0, 1);
        const T = `${I}%`;
        let D;
        if (n[4] !== T) {
            D = {
                width: T
            };
            n[4] = T;
            n[5] = D;
        } else {
            D = n[5];
        }
        const x = D;
        const transform = `translateX(${I}%)`;
        let P;
        if (n[6] !== transform) {
            P = {
                transform
            };
            n[6] = transform;
            n[7] = P;
        } else {
            P = n[7];
        }
        const N = P;
        let M;
        let w;
        let A;
        let F;
        let O;
        let B;
        let W;
        let q;
        let min_1;
        let max_1;
        let smallSkip_1;
        let largeSkip_1;
        let z;
        let onCommit_1;
        let K;
        let Q;
        let X;
        let Y;
        if (n[8] !== ariaLabel || n[9] !== disabled || n[10] !== R || n[11] !== E || n[12] !== largeSkip || n[13] !== max || n[14] !== x || n[15] !== smallSkip || n[16] !== theme || n[17] !== N || n[18] !== value || n[19] !== valueText) {
            const J = f(theme);
            const { progressStyle, thumbStyle, trackStyle } = J;
            M = r("WAWebPttComposerRangeInput.react");
            B = ariaLabel;
            W = value;
            q = valueText;
            min_1 = 0;
            max_1 = max;
            smallSkip_1 = smallSkip;
            largeSkip_1 = largeSkip;
            z = R;
            onCommit_1 = E;
            K = disabled;
            if (n[38] === Symbol.for("react.memo_cache_sentinel")) {
                A = (e || (e = r("stylex"))).props(o("WAWebMessageSmoothRangeInput.stylex").styles.container);
                n[38] = A;
            } else {
                A = n[38];
            }
            F = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebMessageSmoothRangeInput.stylex").styles.track, trackStyle))}/>;
            O = <span {...babelHelpers.extends({}, e.props(o("WAWebMessageSmoothRangeInput.stylex").styles.progress, progressStyle, disabled === true && o("WAWebMessageSmoothRangeInput.stylex").styles.progressDisabled), {
                style: x
            })}/>;
            if (n[39] === Symbol.for("react.memo_cache_sentinel")) {
                w = {
                    className: "x78zum5 xh8yej3 xdj266r xmpx0yj xat24cr x1eiic4d"
                };
                X = {
                    className: "x1n2onr6 x1tcabb7 xh8yej3"
                };
                n[39] = w;
                n[40] = X;
            } else {
                w = n[39];
                X = n[40];
            }
            Y = N;
            Q = e.props(o("WAWebMessageSmoothRangeInput.stylex").styles.thumb, thumbStyle, disabled === true && o("WAWebMessageSmoothRangeInput.stylex").styles.thumbDisabled);
            n[8] = ariaLabel;
            n[9] = disabled;
            n[10] = R;
            n[11] = E;
            n[12] = largeSkip;
            n[13] = max;
            n[14] = x;
            n[15] = smallSkip;
            n[16] = theme;
            n[17] = N;
            n[18] = value;
            n[19] = valueText;
            n[20] = M;
            n[21] = w;
            n[22] = A;
            n[23] = F;
            n[24] = O;
            n[25] = B;
            n[26] = W;
            n[27] = q;
            n[28] = min_1;
            n[29] = max_1;
            n[30] = smallSkip_1;
            n[31] = largeSkip_1;
            n[32] = z;
            n[33] = onCommit_1;
            n[34] = K;
            n[35] = Q;
            n[36] = X;
            n[37] = Y;
        } else {
            M = n[20];
            w = n[21];
            A = n[22];
            F = n[23];
            O = n[24];
            B = n[25];
            W = n[26];
            q = n[27];
            min_1 = n[28];
            max_1 = n[29];
            smallSkip_1 = n[30];
            largeSkip_1 = n[31];
            z = n[32];
            onCommit_1 = n[33];
            K = n[34];
            Q = n[35];
            X = n[36];
            Y = n[37];
        }
        let ne;
        if (n[41] !== Q) {
            ne = <div {...babelHelpers.extends({}, Q)}/>;
            n[41] = Q;
            n[42] = ne;
        } else {
            ne = n[42];
        }
        let re;
        if (n[43] !== ne || n[44] !== X || n[45] !== Y) {
            re = <div {...babelHelpers.extends({}, X, {
                style: Y,
                children: ne
            })}/>;
            n[43] = ne;
            n[44] = X;
            n[45] = Y;
            n[46] = re;
        } else {
            re = n[46];
        }
        let oe;
        if (n[47] !== w || n[48] !== re) {
            oe = <div {...babelHelpers.extends({}, w, {
                children: re
            })}/>;
            n[47] = w;
            n[48] = re;
            n[49] = oe;
        } else {
            oe = n[49];
        }
        let ae;
        if (n[50] !== A || n[51] !== F || n[52] !== O || n[53] !== oe) {
            ae = <div {...babelHelpers.extends({}, A, {
                children: [
                    F,
                    O,
                    oe
                ]
            })}/>;
            n[50] = A;
            n[51] = F;
            n[52] = O;
            n[53] = oe;
            n[54] = ae;
        } else {
            ae = n[54];
        }
        let ie;
        if (n[55] !== M || n[56] !== B || n[57] !== W || n[58] !== q || n[59] !== min_1 || n[60] !== max_1 || n[61] !== smallSkip_1 || n[62] !== largeSkip_1 || n[63] !== z || n[64] !== onCommit_1 || n[65] !== K || n[66] !== ae) {
            ie = <M ariaLabel={B} value={W} valueText={q} min={min_1} max={max_1} smallSkip={smallSkip_1} largeSkip={largeSkip_1} onChange={z} onCommit={onCommit_1} disabled={K}>{ae}</M>;
            n[55] = M;
            n[56] = B;
            n[57] = W;
            n[58] = q;
            n[59] = min_1;
            n[60] = max_1;
            n[61] = smallSkip_1;
            n[62] = largeSkip_1;
            n[63] = z;
            n[64] = onCommit_1;
            n[65] = K;
            n[66] = ae;
            n[67] = ie;
        } else {
            ie = n[67];
        }
        return ie;
    }
    function f(theme) {
        switch(theme){
            case p.AUDIO_OUTGOING_UNPLAYED:
                return {
                    trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.trackOutgoing,
                    thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.thumbOutgoingUnplayed,
                    progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.progressOutgoingUnplayed
                };
            case p.AUDIO_OUTGOING_PLAYED:
                return {
                    trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.trackOutgoing,
                    thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.thumbOutgoingPlayed,
                    progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.progressOutgoingPlayed
                };
            case p.AUDIO_INCOMING_UNPLAYED:
                return {
                    trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.trackIncoming,
                    thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.thumbIncomingUnplayed,
                    progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.progressIncomingUnplayed
                };
            case p.AUDIO_INCOMING_PLAYED:
                return {
                    trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.trackIncoming,
                    thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.thumbIncomingPlayed,
                    progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles.progressIncomingPlayed
                };
        }
    }
    l.SmoothRangeInputTheme = p;
    l.SmoothRangeInput = _;
}, 98);