__d("WAWebEmailConfirmationModal.react", [
    "fbt",
    "WAWebConfirmationModal.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
    "useWAWebConfirmationActions"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useRef, useState } = c;
    const _ = {
        marginTop10: {
            marginTop: "x1anpbxc",
            $$css: true
        }
    };
    const f = {
        error: {
            color: "x30a034",
            fontSize: "x1nxh6w3",
            $$css: true
        }
    };
    function g(e) {
        const t = o("react-compiler-runtime").c(37);
        const { actions, actionText, actionType, contentText, onCancel, onCompletion, successText, tsNavigationData } = e;
        const y = r("useWAWebConfirmationActions")(actions, onCompletion, successText);
        const { actionFailure, failureText, isRunningAction, runActions } = y;
        const R = useState(false);
        const L = R[0];
        const E = R[1];
        const k = useState("");
        const I = k[0];
        const T = k[1];
        const D = useState(false);
        const x = D[0];
        const $ = D[1];
        const PRef = useRef(null);
        let N;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            N = function(t) {
                E(false);
                T(t.target.value);
            };
            t[0] = N;
        } else {
            N = t[0];
        }
        const M = N;
        let w;
        if (t[1] !== runActions) {
            w = function() {
                runActions();
            };
            t[1] = runActions;
            t[2] = w;
        } else {
            w = t[2];
        }
        const A = w;
        let F;
        if (t[3] !== A) {
            F = function(t) {
                if (t.key === "Enter") {
                    A();
                }
            };
            t[3] = A;
            t[4] = F;
        } else {
            F = t[4];
        }
        const O = F;
        let B;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            B = function() {
                $(true);
            };
            t[5] = B;
        } else {
            B = t[5];
        }
        const W = B;
        let q;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            q = function() {
                $(false);
            };
            t[6] = q;
        } else {
            q = t[6];
        }
        const U = q;
        let V;
        if (t[7] !== I) {
            V = I.trim();
            t[7] = I;
            t[8] = V;
        } else {
            V = t[8];
        }
        const H = V === "";
        let G;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            G = {
                className: "x1n2onr6 x14ug900 x1ed109x"
            };
            t[9] = G;
        } else {
            G = t[9];
        }
        let z;
        if (t[10] !== x || t[11] !== L) {
            z = ({
                0: {
                    className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x1g83kfv x3qq2k7 x2x8art x1qor8vf"
                },
                2: {
                    className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf xlze6vy x47fsot x1rrvw3c x18djku1"
                },
                1: {
                    className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f"
                },
                3: {
                    className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f"
                }
            })[!!x << 1 | !!L << 0];
            t[10] = x;
            t[11] = L;
            t[12] = z;
        } else {
            z = t[12];
        }
        let j;
        let K;
        let Q;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            j = s._("Email");
            K = s._("Email");
            Q = {
                className: "x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xjbqb8w xh8yej3 x6prxxf x1heor9g xexx8yu xyri2b x18d9i69 x1c1uobl"
            };
            t[13] = j;
            t[14] = K;
            t[15] = Q;
        } else {
            j = t[13];
            K = t[14];
            Q = t[15];
        }
        let X;
        if (t[16] !== I || t[17] !== O) {
            X = <input {...babelHelpers.extends({
                ref: PRef,
                type: "text",
                value: I,
                onChange: M,
                onFocus: W,
                onBlur: U,
                onKeyDown: O,
                "data-testid": "email-confirmation-input",
                "aria-label": j,
                placeholder: K
            }, Q)}/>;
            t[16] = I;
            t[17] = O;
            t[18] = X;
        } else {
            X = t[18];
        }
        let Y;
        if (t[19] !== X || t[20] !== z) {
            Y = <label {...babelHelpers.extends({}, G, {
                children: <div {...babelHelpers.extends({}, z, {
                    children: X
                })}/>
            })}/>;
            t[19] = X;
            t[20] = z;
            t[21] = Y;
        } else {
            Y = t[21];
        }
        let J;
        if (t[22] !== L) {
            const Component = o("WAWebFlex.react").FlexRow;
            J = L && <Component testid="email-confirmation-modal-email-mismatch" xstyle={[
                _.marginTop10,
                f.error
            ]}>{s._("The email you entered doesn't match your account.")}</Component>;
            t[22] = L;
            t[23] = J;
        } else {
            J = t[23];
        }
        let Z;
        if (t[24] !== actionFailure || t[25] !== actionText || t[26] !== actionType || t[27] !== contentText || t[28] !== failureText || t[29] !== A || t[30] !== isRunningAction || t[31] !== onCancel || t[32] !== Y || t[33] !== J || t[34] !== H || t[35] !== tsNavigationData) {
            const Component = r("WAWebConfirmationModal.react");
            Z = <Component actionFailure={actionFailure} actionText={actionText} actionType={actionType} contentText={contentText} failureText={failureText} isInputEmpty={H} isRunningAction={isRunningAction} onCancel={onCancel} onSubmit={A} testidPrefix="email-confirmation-modal" tsNavigationData={tsNavigationData}>{Y}{J}</Component>;
            t[24] = actionFailure;
            t[25] = actionText;
            t[26] = actionType;
            t[27] = contentText;
            t[28] = failureText;
            t[29] = A;
            t[30] = isRunningAction;
            t[31] = onCancel;
            t[32] = Y;
            t[33] = J;
            t[34] = H;
            t[35] = tsNavigationData;
            t[36] = Z;
        } else {
            Z = t[36];
        }
        return Z;
    }
    l.default = g;
}, 226);