__d("WAWebCommonQuantityControls.react", [
    "fbt",
    "WAWebBizCartConstants",
    "WAWebCommonToastMaxProductQuantityReached",
    "WAWebL10N",
    "WAWebStopEvent",
    "WDSIconIcAdd.react",
    "WDSIconIcRemove.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const d = {
        svg: {
            color: "xhslqc4",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function M6Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_onClick = e.onClick;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x1280gxy xuv73ul x1xeqo68 xpfj8cy xy5ipz4 xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xhslqc4 x1ypdohk x10w6t97 x1td3qas xajj3lu x1ss49kh xtj9sai xgak4ha x1lwdpx3 xb90sal x1rlzdi xrhz2io xysibl7 x4yb96v x1kylhsf xed3198 x12ln5q2"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Add 1 item");
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = u.jsx(r("WDSIconIcAdd.react"), {
                xstyle: d.svg,
                height: 20,
                width: 20
            });
            t[2] = l;
        } else {
            l = t[2];
        }
        let c;
        if (t[3] !== e_onClick) {
            c = <button {...babelHelpers.extends({}, a, {
                "data-testid": "quantity-controls-add-one-btn",
                title: i,
                onClick: e_onClick,
                children: l
            })}/>;
            t[3] = e_onClick;
            t[4] = c;
        } else {
            c = t[4];
        }
        return c;
    }
    function P2Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_onClick = e.onClick;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x1280gxy xuv73ul x1xeqo68 xpfj8cy xy5ipz4 xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xhslqc4 x1ypdohk x10w6t97 x1td3qas xajj3lu x1ss49kh xtj9sai xgak4ha x1lwdpx3 xb90sal x1rlzdi xrhz2io xysibl7 x4yb96v x1kylhsf xed3198 x12ln5q2"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Remove 1 item");
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = u.jsx(r("WDSIconIcRemove.react"), {
                xstyle: d.svg,
                height: 20,
                width: 20
            });
            t[2] = l;
        } else {
            l = t[2];
        }
        let c;
        if (t[3] !== e_onClick) {
            c = <button {...babelHelpers.extends({}, a, {
                "data-testid": "quantity-controls-remove-one-btn",
                title: i,
                onClick: e_onClick,
                children: l
            })}/>;
            t[3] = e_onClick;
            t[4] = c;
        } else {
            c = t[4];
        }
        return c;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(4);
        const { quantity, quantityTitle } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x6s0dn4 x78zum5 x1jchvi3 x10w6t97 xl56j7k x1td3qas xpfry4w xbrszos xea3l6g x18isctg x2q3nzr x17t9dm2"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== quantity || t[2] !== quantityTitle) {
            i = <div {...babelHelpers.extends({}, a, {
                title: quantityTitle,
                children: quantity
            })}/>;
            t[1] = quantity;
            t[2] = quantityTitle;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function f(e) {
        const t = o("react-compiler-runtime").c(30);
        const { quantity, quantityTitle, isCollapsed, onAddOneClick, onRemoveOneClick, maxQuantity } = e;
        let f = maxQuantity === undefined ? o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY : maxQuantity;
        if (t[0] !== quantityTitle) {
            f = quantityTitle === undefined ? s._("Selected items") : quantityTitle;
            t[0] = quantityTitle;
            t[1] = f;
        } else {
            f = t[1];
        }
        const g = f;
        const h = isCollapsed === undefined ? false : isCollapsed;
        const y = f;
        let C;
        if (t[2] !== onRemoveOneClick) {
            C = function(t) {
                o("WAWebStopEvent").stopEvent(t);
                onRemoveOneClick();
            };
            t[2] = onRemoveOneClick;
            t[3] = C;
        } else {
            C = t[3];
        }
        const b = C;
        let v;
        if (t[4] !== y || t[5] !== onAddOneClick || t[6] !== quantity) {
            v = function(t) {
                o("WAWebStopEvent").stopEvent(t);
                if (quantity < y) {
                    onAddOneClick();
                } else {
                    r("WAWebCommonToastMaxProductQuantityReached")(y, true);
                }
            };
            t[4] = y;
            t[5] = onAddOneClick;
            t[6] = quantity;
            t[7] = v;
        } else {
            v = t[7];
        }
        const S = v;
        let R;
        if (t[8] !== b) {
            R = <P2Component onClick={b}/>;
            t[8] = b;
            t[9] = R;
        } else {
            R = t[9];
        }
        let L;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x6s0dn4 x14ug900 x78zum5 x1jchvi3 x10w6t97 xl56j7k x1td3qas"
            };
            t[10] = L;
        } else {
            L = t[10];
        }
        let E;
        if (t[11] !== quantity) {
            E = r("WAWebL10N").n(quantity);
            t[11] = quantity;
            t[12] = E;
        } else {
            E = t[12];
        }
        let k;
        if (t[13] !== g || t[14] !== E) {
            k = <div {...babelHelpers.extends({}, L, {
                title: g,
                children: E
            })}/>;
            t[13] = g;
            t[14] = E;
            t[15] = k;
        } else {
            k = t[15];
        }
        let I;
        if (t[16] !== S) {
            I = <M6Component onClick={S}/>;
            t[16] = S;
            t[17] = I;
        } else {
            I = t[17];
        }
        let T;
        if (t[18] !== I || t[19] !== R || t[20] !== k) {
            T = <>{R}{k}{I}</>;
            t[18] = I;
            t[19] = R;
            t[20] = k;
            t[21] = T;
        } else {
            T = t[21];
        }
        let D = T;
        if (h) {
            let x;
            if (t[22] !== quantity || t[23] !== g) {
                x = <_ quantity={quantity} quantityTitle={g}/>;
                t[22] = quantity;
                t[23] = g;
                t[24] = x;
            } else {
                x = t[24];
            }
            D = x;
        }
        if (quantity === 0) {
            let $;
            if (t[25] !== S) {
                $ = <M6Component onClick={S}/>;
                t[25] = S;
                t[26] = $;
            } else {
                $ = t[26];
            }
            D = $;
        }
        let P;
        if (t[27] === Symbol.for("react.memo_cache_sentinel")) {
            P = {
                className: "x3nfvp2 x13a6bvl"
            };
            t[27] = P;
        } else {
            P = t[27];
        }
        let N;
        if (t[28] !== D) {
            N = <div {...babelHelpers.extends({}, P, {
                children: D
            })}/>;
            t[28] = D;
            t[29] = N;
        } else {
            N = t[29];
        }
        return N;
    }
    l.default = f;
}, 226);