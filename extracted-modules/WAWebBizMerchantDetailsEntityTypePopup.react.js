__d("WAWebBizMerchantDetailsEntityTypePopup.react", [
    "fbt",
    "WAWebBizComplianceUtil",
    "WAWebBusinessProfileTypes",
    "WAWebButton.react",
    "WAWebComplianceConstants",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "objectValues",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useState } = d;
    const _ = {
        cursorPointer: {
            cursor: "x1ypdohk",
            $$css: true
        },
        footer: {
            backgroundColor: "x1280gxy",
            borderTopColor: "xx42vgk",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x178xt8z",
            paddingTop: "x889kno",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "xe2zdcy",
            $$css: true
        },
        indentedOption: {
            marginInlineStart: "xvc51xn",
            $$css: true
        },
        inputWrapper: {
            alignSelf: "xamitd3",
            display: "x78zum5",
            paddingInlineEnd: "x1xnnf8n",
            $$css: true
        }
    };
    function FComponent(e) {
        const t = o("react-compiler-runtime").c(61);
        const { legalEntityDetails, onSave } = e;
        const i = useState(legalEntityDetails?.entityType);
        const l = i[0];
        const u = i[1];
        const d = useState(legalEntityDetails?.entityTypeCustom);
        const m = d[0];
        const f = d[1];
        const h = useState(legalEntityDetails?.isRegistered);
        const y = h[0];
        const C = h[1];
        let b;
        if (t[0] !== l || t[1] !== m || t[2] !== y || t[3] !== onSave) {
            b = function() {
                o("WAWebModalManager").ModalManager.close();
                onSave({
                    entityType: l,
                    entityTypeCustom: m,
                    isRegistered: y
                });
            };
            t[0] = l;
            t[1] = m;
            t[2] = y;
            t[3] = onSave;
            t[4] = b;
        } else {
            b = t[4];
        }
        const v = b;
        const S = legalEntityDetails?.entityType;
        let R;
        if (t[5] !== S) {
            R = function(t) {
                const value = t.target.value;
                const n = r("objectValues")(o("WAWebBusinessProfileTypes").businessTypeOptions).find((t)=>t === value);
                u(n);
                if (n !== S) {
                    f("");
                    C(false);
                }
            };
            t[5] = S;
            t[6] = R;
        } else {
            R = t[6];
        }
        const L = R;
        let E;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            E = function(t) {
                return C(t.target.checked);
            };
            t[7] = E;
        } else {
            E = t[7];
        }
        const k = E;
        let I;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            I = s._("Registered business");
            t[8] = I;
        } else {
            I = t[8];
        }
        let T;
        if (t[9] !== y) {
            T = <G1Component value={y} label={I} inputType="checkbox" xstyle={_.indentedOption} onChange={k} data-testid="registered"/>;
            t[9] = y;
            t[10] = T;
        } else {
            T = t[10];
        }
        const D = T;
        let x;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            x = {
                surface: "unknown",
                viewName: "biz-merchant-entity-type"
            };
            t[11] = x;
        } else {
            x = t[11];
        }
        let $;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            $ = <Component title={s._("Business type")} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP} onCancel={o("WAWebModalManager").closeModalManager}/>;
            t[12] = $;
        } else {
            $ = t[12];
        }
        let P;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            P = {
                className: "xqy66fx x5zjp28 xr1496l x162tt16"
            };
            t[13] = P;
        } else {
            P = t[13];
        }
        let N;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            N = s._("Limited liability partnership");
            t[14] = N;
        } else {
            N = t[14];
        }
        let M;
        if (t[15] !== l || t[16] !== L) {
            M = <G1Component id={o("WAWebBusinessProfileTypes").businessTypeOptions.limitedLiabilityPartnership} value={l} label={N} onChange={L} data-testid="limited-liability-partnership"/>;
            t[15] = l;
            t[16] = L;
            t[17] = M;
        } else {
            M = t[17];
        }
        let w;
        if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
            w = s._("Sole proprietorship");
            t[18] = w;
        } else {
            w = t[18];
        }
        let A;
        if (t[19] !== l || t[20] !== L) {
            A = <G1Component id={o("WAWebBusinessProfileTypes").businessTypeOptions.soleProprietorship} value={l} label={w} onChange={L} data-testid="sole-proprietorship"/>;
            t[19] = l;
            t[20] = L;
            t[21] = A;
        } else {
            A = t[21];
        }
        let F;
        if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
            F = s._("Partnership");
            t[22] = F;
        } else {
            F = t[22];
        }
        let O;
        if (t[23] !== l || t[24] !== L) {
            O = <G1Component id={o("WAWebBusinessProfileTypes").businessTypeOptions.partnership} value={l} label={F} onChange={L} data-testid="partnership"/>;
            t[23] = l;
            t[24] = L;
            t[25] = O;
        } else {
            O = t[25];
        }
        const B = l === o("WAWebBusinessProfileTypes").businessTypeOptions.partnership && D;
        let W;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
            W = s._("Public company");
            t[26] = W;
        } else {
            W = t[26];
        }
        let q;
        if (t[27] !== l || t[28] !== L) {
            q = <G1Component id={o("WAWebBusinessProfileTypes").businessTypeOptions.publicCompany} value={l} label={W} onChange={L} data-testid="public-company"/>;
            t[27] = l;
            t[28] = L;
            t[29] = q;
        } else {
            q = t[29];
        }
        let U;
        if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
            U = s._("Private company");
            t[30] = U;
        } else {
            U = t[30];
        }
        let V;
        if (t[31] !== l || t[32] !== L) {
            V = <G1Component id={o("WAWebBusinessProfileTypes").businessTypeOptions.privateCompany} value={l} label={U} onChange={L} data-testid="private-company"/>;
            t[31] = l;
            t[32] = L;
            t[33] = V;
        } else {
            V = t[33];
        }
        let H;
        if (t[34] === Symbol.for("react.memo_cache_sentinel")) {
            H = s._("Other");
            t[34] = H;
        } else {
            H = t[34];
        }
        let G;
        if (t[35] !== l || t[36] !== L) {
            G = <G1Component id={o("WAWebBusinessProfileTypes").businessTypeOptions.other} value={l} label={H} onChange={L} data-testid="other"/>;
            t[35] = l;
            t[36] = L;
            t[37] = G;
        } else {
            G = t[37];
        }
        let z;
        if (t[38] !== l || t[39] !== m || t[40] !== D) {
            const Component = o("WAWebRichTextField.react").RichTextField;
            z = l === o("WAWebBusinessProfileTypes").businessTypeOptions.other && <><div className="xvc51xn" data-testid="other-input"><Component value={m} editable maxLength={o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.ENTITY_TYPE_CUSTOM} inputPlaceholder={s._("Label")} showRemaining onChange={function({ text }) {
                return f(text);
            }} theme="text-input" lowProfile/></div>{D}</>;
            t[38] = l;
            t[39] = m;
            t[40] = D;
            t[41] = z;
        } else {
            z = t[41];
        }
        let j;
        if (t[42] !== M || t[43] !== A || t[44] !== O || t[45] !== B || t[46] !== q || t[47] !== V || t[48] !== G || t[49] !== z) {
            const Component = r("WAWebDrawerBody.react");
            j = <Component><form {...babelHelpers.extends({}, P, {
                children: <ol>{M}{A}{O}{B}{q}{V}{G}{z}</ol>
            })}/></Component>;
            t[42] = M;
            t[43] = A;
            t[44] = O;
            t[45] = B;
            t[46] = q;
            t[47] = V;
            t[48] = G;
            t[49] = z;
            t[50] = j;
        } else {
            j = t[50];
        }
        let K;
        if (t[51] !== l || t[52] !== m) {
            K = l === o("WAWebBusinessProfileTypes").businessTypeOptions.other && !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(m);
            t[51] = l;
            t[52] = m;
            t[53] = K;
        } else {
            K = t[53];
        }
        let Q;
        if (t[54] === Symbol.for("react.memo_cache_sentinel")) {
            Q = s._("Save");
            t[54] = Q;
        } else {
            Q = t[54];
        }
        let X;
        if (t[55] !== v || t[56] !== K) {
            const Component = o("WAWebButton.react").WAWebButtonPrimary;
            const Component_1 = r("WAWebFlexItem.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            X = <Component_2 justify="end" xstyle={_.footer}><Component_1><Component onClick={v} disabled={K}>{Q}</Component></Component_1></Component_2>;
            t[55] = v;
            t[56] = K;
            t[57] = X;
        } else {
            X = t[57];
        }
        let Y;
        if (t[58] !== j || t[59] !== X) {
            const Component = r("WAWebDrawer.react");
            const Component_1 = o("WAWebModal.react").Modal;
            Y = <Component_1 type={o("WAWebModal.react").ModalTheme.Box}><Component theme="settings" tsNavigationData={x}>{$}{j}{X}</Component></Component_1>;
            t[58] = j;
            t[59] = X;
            t[60] = Y;
        } else {
            Y = t[60];
        }
        return Y;
    }
    function G1Component(t) {
        const n = o("react-compiler-runtime").c(22);
        const { "data-testid": data_testid, id, inputType, label: label_1, onChange, value, xstyle } = t;
        const p = data_testid === undefined ? "merchant-details-entity-type-option-popup" : data_testid;
        const f = inputType === undefined ? "radio" : inputType;
        let g;
        if (n[0] !== id || n[1] !== label_1) {
            g = id || label_1.toString();
            n[0] = id;
            n[1] = label_1;
            n[2] = g;
        } else {
            g = n[2];
        }
        const h = g;
        let y;
        if (n[3] !== xstyle) {
            y = (e || (e = r("stylex"))).props(_.cursorPointer, xstyle);
            n[3] = xstyle;
            n[4] = y;
        } else {
            y = n[4];
        }
        const C = f === "radio" ? value === h : !!value;
        let b;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x1ypdohk"
            };
            n[5] = b;
        } else {
            b = n[5];
        }
        let v;
        if (n[6] !== h || n[7] !== f || n[8] !== onChange || n[9] !== C) {
            const Component = r("WAWebFlexItem.react");
            v = <Component xstyle={_.inputWrapper}><input {...babelHelpers.extends({
                id: h,
                value: h,
                type: f,
                name: "entityType",
                checked: C
            }, b, {
                onChange
            })}/></Component>;
            n[6] = h;
            n[7] = f;
            n[8] = onChange;
            n[9] = C;
            n[10] = v;
        } else {
            v = n[10];
        }
        let S;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                className: "x1lliihq x1lkfr7t x889kno xyri2b x1a8lsjc x1c1uobl x1ypdohk"
            };
            n[11] = S;
        } else {
            S = n[11];
        }
        const R = `${p}-label`;
        let L;
        if (n[12] !== h || n[13] !== label_1 || n[14] !== R) {
            const Component = r("WAWebFlexItem.react");
            L = <Component grow={1}><label {...babelHelpers.extends({
                htmlFor: h
            }, S, {
                "data-testid": R,
                children: label_1
            })}/></Component>;
            n[12] = h;
            n[13] = label_1;
            n[14] = R;
            n[15] = L;
        } else {
            L = n[15];
        }
        let E;
        if (n[16] !== L || n[17] !== v) {
            const Component = o("WAWebFlex.react").FlexRow;
            E = <Component align="center">{v}{L}</Component>;
            n[16] = L;
            n[17] = v;
            n[18] = E;
        } else {
            E = n[18];
        }
        let k;
        if (n[19] !== E || n[20] !== y) {
            k = <li {...babelHelpers.extends({}, y, {
                children: E
            })}/>;
            n[19] = E;
            n[20] = y;
            n[21] = k;
        } else {
            k = n[21];
        }
        return k;
    }
    l.default = FComponent;
}, 226);