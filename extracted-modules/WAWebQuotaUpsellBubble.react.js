__d("WAWebQuotaUpsellBubble.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMetaOneUpsellLogger",
    "WAWebModalManager",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect } = c;
    function p(e) {
        const t = o("react-compiler-runtime").c(35);
        const { benefitType, metaSlot, msgId, body, bodyLine1, bodyLine2, buttons, title } = e;
        let f;
        let g;
        if (t[0] !== benefitType || t[1] !== msgId) {
            f = function() {
                o("WAWebMetaOneUpsellLogger").logQuotaUpsellView(msgId, benefitType);
            };
            g = [
                benefitType,
                msgId
            ];
            t[0] = benefitType;
            t[1] = msgId;
            t[2] = f;
            t[3] = g;
        } else {
            f = t[2];
            g = t[3];
        }
        useEffect(f, g);
        let h;
        if (t[4] !== benefitType) {
            h = function() {
                o("WAWebMetaOneUpsellLogger").logQuotaUpsellCtaClick(benefitType);
                o("WAWebModalManager").ModalManager.openAlert(<_/>);
            };
            t[4] = benefitType;
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = h;
        const C = body != null && body !== "";
        const content = C ? body : bodyLine1;
        const v = buttons != null && buttons.length > 0 ? buttons[0] : null;
        const S = v != null && v.label != null && v.label !== "" ? v.label : null;
        let R;
        if (t[6] !== bodyLine2 || t[7] !== content || t[8] !== C || t[9] !== title) {
            R = [];
            if (title != null && title !== "") {
                let L;
                if (t[11] !== title) {
                    L = {
                        colorName: "contentDefault",
                        content: title,
                        key: "title",
                        type: "Body2Emphasized"
                    };
                    t[11] = title;
                    t[12] = L;
                } else {
                    L = t[12];
                }
                R.push(L);
            }
            if (content != null && content !== "") {
                let E;
                if (t[13] !== content) {
                    E = {
                        colorName: "contentDeemphasized",
                        content,
                        key: "body",
                        type: "Body2"
                    };
                    t[13] = content;
                    t[14] = E;
                } else {
                    E = t[14];
                }
                R.push(E);
            }
            if (bodyLine2 != null && bodyLine2 !== "" && !C) {
                let k;
                if (t[15] !== bodyLine2) {
                    k = {
                        colorName: "contentDeemphasized",
                        content: bodyLine2,
                        key: "bodyLine2",
                        type: "Body2"
                    };
                    t[15] = bodyLine2;
                    t[16] = k;
                } else {
                    k = t[16];
                }
                R.push(k);
            }
            t[6] = bodyLine2;
            t[7] = content;
            t[8] = C;
            t[9] = title;
            t[10] = R;
        } else {
            R = t[10];
        }
        let I;
        if (t[17] !== metaSlot) {
            I = metaSlot != null ? <span className="xtrg13t x1wbi8v6" data-testid="quota-upsell-meta-inline">{metaSlot}</span> : null;
            t[17] = metaSlot;
            t[18] = I;
        } else {
            I = t[18];
        }
        const T = I;
        let D;
        if (t[19] !== R.length) {
            D = ({
                0: {
                    className: "x78zum5 xdt5ytf"
                },
                1: {
                    className: "x78zum5 xdt5ytf x16ovd2e"
                }
            })[(R.length > 0) << 0];
            t[19] = R.length;
            t[20] = D;
        } else {
            D = t[20];
        }
        let x;
        if (t[21] !== T || t[22] !== R) {
            x = R.length > 0 && <div className="x78zum5 xdt5ytf x1qvou4u x1s70e7g" data-testid="quota-upsell-text-block">{R.map((e, t)=>{
                const Component = r("WDSText.react");
                return <Component key={e.key} type={e.type} colorName={e.colorName}>{e.content}{t === R.length - 1 ? T : null}</Component>;
            })}</div>;
            t[21] = T;
            t[22] = R;
            t[23] = x;
        } else {
            x = t[23];
        }
        let $;
        if (t[24] !== metaSlot || t[25] !== R.length) {
            $ = R.length === 0 && metaSlot != null && <div className="x78zum5 x13a6bvl" data-testid="quota-upsell-meta-row">{metaSlot}</div>;
            t[24] = metaSlot;
            t[25] = R.length;
            t[26] = $;
        } else {
            $ = t[26];
        }
        let P;
        if (t[27] !== S || t[28] !== y) {
            P = S != null && u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: S,
                        onClick: y,
                        testid: "quota-upsell-cta"
                    }
                ]
            });
            t[27] = S;
            t[28] = y;
            t[29] = P;
        } else {
            P = t[29];
        }
        let N;
        if (t[30] !== D || t[31] !== x || t[32] !== $ || t[33] !== P) {
            N = <div {...babelHelpers.extends({}, D, {
                "data-testid": "quota-upsell-bubble",
                children: [
                    x,
                    $,
                    P
                ]
            })}/>;
            t[30] = D;
            t[31] = x;
            t[32] = $;
            t[33] = P;
            t[34] = N;
        } else {
            N = t[34];
        }
        return N;
    }
    function _() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("You reached the limit");
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            n = <Component testid="quota-upsell-companion-alert" title={t} onOK={f}>{s._("You reached the limit for using this AI feature. You can manage these limits from Meta One settings on your primary device.")}</Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function f() {
        return o("WAWebModalManager").ModalManager.closeAlert();
    }
    l.default = p;
}, 226);