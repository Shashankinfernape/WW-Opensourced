__d("WAWebRequestPhoneNumberMessage.react", [
    "fbt",
    "WAWebContactCollection",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebSharePhoneNumberModal.react",
    "WAWebWamEnumPnhEntryPointType",
    "WDSIconIcDialpad.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        paddingBottom5: {
            paddingBottom: "xs9asl8",
            $$css: true
        }
    };
    const d = {
        container: {
            textAlign: "x2b8uid",
            position: "x1n2onr6",
            alignItems: "x6s0dn4",
            marginTop: "x1198e8h",
            marginInlineEnd: "x1lxpwgx",
            marginBottom: "xz62fqu",
            marginInlineStart: "xw01apr",
            borderStartStartRadius: "x13t61ll",
            borderStartEndRadius: "x1kchd1x",
            borderEndEndRadius: "x1u0fnx4",
            borderEndStartRadius: "xbxn0j6",
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        icon: {
            marginTop: "x1ok221b",
            marginInlineEnd: "xf6vk7d",
            marginBottom: "xu06os2",
            marginInlineStart: "x1hm9lzh",
            $$css: true
        },
        text: {
            marginTop: "x1xmf6yo",
            marginInlineEnd: "x1xegmmw",
            marginBottom: "xyorhqc",
            marginInlineStart: "x1hm9lzh",
            $$css: true
        }
    };
    const m = function() {
        o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharePhoneNumberModal.react").SharePhoneNumberRestrictedActionModal, {
            entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.PN_REQUEST
        }));
    };
    function p(e) {
        const t = o("react-compiler-runtime").c(39);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getTo,
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebFrontendMsgGetters").getSenderObj
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const l = i[0];
        const p = i[1];
        const _ = i[2];
        let f;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            f = u.jsx(r("WDSIconIcDialpad.react"), {
                width: 24,
                height: 24,
                colorName: "contentDefault"
            });
            t[1] = f;
        } else {
            f = t[1];
        }
        const g = f;
        if (p) {
            let h;
            if (t[2] !== l) {
                const y = o("WAWebContactCollection").ContactCollection.gadd(l);
                h = o("WAWebFrontendContactGetters").getIsMyContact(y) ? o("WAWebFrontendContactGetters").getFormattedName(y) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(y);
                t[2] = l;
                t[3] = h;
            } else {
                h = t[3];
            }
            const C = h;
            let b;
            if (t[4] !== C) {
                let v;
                if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                    v = {
                        className: "xk50ysn"
                    };
                    t[6] = v;
                } else {
                    v = t[6];
                }
                b = s._("You requested {person-name} to share their phone number.", [
                    s._param("person-name", <span {...babelHelpers.extends({}, v, {
                        children: C
                    })}/>)
                ]);
                t[4] = C;
                t[5] = b;
            } else {
                b = t[5];
            }
            const S = b;
            let R;
            if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = r("WAWebFlexItem.react");
                R = <Component xstyle={d.icon}>{g}</Component>;
                t[7] = R;
            } else {
                R = t[7];
            }
            let L;
            if (t[8] !== S || t[9] !== e_msgKey) {
                const Component = r("WAWebMessageSpacerText.react");
                const Component_1 = r("WAWebFlexItem.react");
                const Component_2 = o("WAWebFlex.react").FlexRow;
                L = <Component_2 align="center" xstyle={d.container}>{R}<Component_1 xstyle={d.text}><Component msgKey={e_msgKey}>{S}</Component></Component_1></Component_2>;
                t[8] = S;
                t[9] = e_msgKey;
                t[10] = L;
            } else {
                L = t[10];
            }
            let E;
            if (t[11] !== e_msgKey || t[12] !== L) {
                const Component = r("WAWebMessageTextBubble.react");
                E = <Component msgKey={e_msgKey} displayAuthor={false} testid="request-phone-number-modal-sender">{L}</Component>;
                t[11] = e_msgKey;
                t[12] = L;
                t[13] = E;
            } else {
                E = t[13];
            }
            return E;
        }
        let k;
        let I;
        if (t[14] !== _) {
            k = o("WAWebContactCollection").ContactCollection.gadd(_);
            I = o("WAWebFrontendContactGetters").getIsMyContact(k) ? o("WAWebFrontendContactGetters").getFormattedName(k) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(k);
            t[14] = _;
            t[15] = k;
            t[16] = I;
        } else {
            k = t[15];
            I = t[16];
        }
        const T = I;
        let D;
        if (t[17] !== T) {
            let x;
            if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
                x = {
                    className: "xk50ysn"
                };
                t[19] = x;
            } else {
                x = t[19];
            }
            D = s._("{person-name} requested you to share your phone number.", [
                s._param("person-name", <span {...babelHelpers.extends({}, x, {
                    children: T
                })}/>)
            ]);
            t[17] = T;
            t[18] = D;
        } else {
            D = t[18];
        }
        const $ = D;
        let P;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            P = s._("Share phone number");
            t[20] = P;
        } else {
            P = t[20];
        }
        const N = P;
        const M = k.shareOwnPn || k.isContactBlocked;
        let w;
        if (t[21] !== M) {
            w = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: N,
                        onClick: m,
                        disabled: M,
                        testid: "share-phone-number-button"
                    }
                ],
                theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.NO_DIVIDER
            });
            t[21] = M;
            t[22] = w;
        } else {
            w = t[22];
        }
        const A = w;
        let F;
        let O;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            F = [
                d.container,
                c.paddingBottom5
            ];
            const Component = r("WAWebFlexItem.react");
            O = <Component xstyle={d.icon}>{g}</Component>;
            t[23] = F;
            t[24] = O;
        } else {
            F = t[23];
            O = t[24];
        }
        let B;
        if (t[25] !== $) {
            B = <div>{$}</div>;
            t[25] = $;
            t[26] = B;
        } else {
            B = t[26];
        }
        let W;
        if (t[27] === Symbol.for("react.memo_cache_sentinel")) {
            W = {
                className: "x10l6tqk xxx7yvo x1c7jfne"
            };
            t[27] = W;
        } else {
            W = t[27];
        }
        let q;
        if (t[28] !== e_msgKey) {
            q = <div {...babelHelpers.extends({}, W, {
                children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey: e_msgKey
                })
            })}/>;
            t[28] = e_msgKey;
            t[29] = q;
        } else {
            q = t[29];
        }
        let U;
        if (t[30] !== e_msgKey || t[31] !== _ || t[32] !== B || t[33] !== q) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            U = <Component_1 xstyle={F}>{O}<Component xstyle={d.text} contact={_} msgKey={e_msgKey}>{B}{q}</Component></Component_1>;
            t[30] = e_msgKey;
            t[31] = _;
            t[32] = B;
            t[33] = q;
            t[34] = U;
        } else {
            U = t[34];
        }
        let V;
        if (t[35] !== A || t[36] !== e_msgKey || t[37] !== U) {
            const Component = r("WAWebMessageTextBubble.react");
            V = <Component msgKey={e_msgKey} displayAuthor={false} hideMeta testid="request-phone-number-modal-receiver">{U}{A}</Component>;
            t[35] = A;
            t[36] = e_msgKey;
            t[37] = U;
            t[38] = V;
        } else {
            V = t[38];
        }
        return V;
    }
    l.default = p;
}, 226);