__d("WAWebBotNux.react", [
    "fbt",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WAWebMetaAiRingAssetResolver",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSIconIcLockFilled.react",
    "WDSIconWdsIcAiChat.react",
    "WDSIconWdsIcAiFilled.react",
    "WDSIconWdsIcPhotoAi.react",
    "WDSIllustrationWdsPictoAiChatsAndroid.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebDisclosureShownTracking",
    "useWAWebFocusOnMount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useState } = d;
    const _ = {
        headerText: {
            textAlign: "x2b8uid",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        },
        sectionIcon: {
            width: "xvy4d1p",
            $$css: true
        },
        sectionTitle: {
            width: "x1cvmir6",
            lineHeight: "x1o2sk6j",
            $$css: true
        },
        divider: {
            width: "xw90zxv",
            height: "xjm9jq1",
            backgroundColor: "x3x0x6p",
            $$css: true
        },
        aiChatsIllustration: {
            zoom: "x1ev0dbn",
            $$css: true
        },
        aiChatsIllustrationSlot: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            height: "x1nbnut7",
            $$css: true
        }
    };
    function f() {
        return {
            headerText: s._("Introducing Meta AI in chats"),
            sections: [
                {
                    icon: c.jsx(r("WDSIconWdsIcAiChat.react"), {
                        width: 24,
                        height: 24,
                        iconXstyle: _.icon
                    }),
                    title: s._("Bring the group together"),
                    subtitle: s._("Get ideas for your next gathering, generate fun images or help settle debates.")
                },
                {
                    icon: c.jsx(r("WDSIconIcLockFilled.react"), {
                        width: 24,
                        height: 24,
                        iconXstyle: _.icon,
                        testid: "lock"
                    }),
                    title: s._("Your personal messages stay private"),
                    subtitle: s._("Meta AI can only read messages people share with it. Messages sent to Meta AI may be used to improve AI at Meta. Meta can't read any other messages in your personal chats, as your personal messages remain end-to-end encrypted.")
                }
            ]
        };
    }
    function g() {
        return {
            headerText: s._("Introducing AI Studio"),
            sections: [
                {
                    icon: c.jsx(r("WDSIconWdsIcAiChat.react"), {
                        width: 24,
                        height: 24,
                        iconXstyle: _.icon
                    }),
                    title: s._("Chat with different AIs"),
                    subtitle: s._("Explore a variety of helpful and fun AIs, created by Meta and others.")
                },
                {
                    icon: c.jsx(r("WDSIconIcLockFilled.react"), {
                        width: 24,
                        height: 24,
                        iconXstyle: _.icon,
                        testid: "lock"
                    }),
                    title: s._("Personal messages stay private"),
                    subtitle: s._("Meta may use your AI messages to improve AI quality. Personal messages are never sent to Meta, can't be read, and remain end-to-end encrypted.")
                }
            ]
        };
    }
    function h() {
        return {
            headerText: s._("Ask Meta AI anything"),
            sections: [
                {
                    icon: c.jsx(r("WDSIconWdsIcAiFilled.react"), {
                        width: 24,
                        height: 24,
                        iconXstyle: _.icon
                    }),
                    title: s._("Get answers to any questions"),
                    subtitle: s._("See recommendations, find information and learn new skills.")
                },
                {
                    icon: c.jsx(r("WDSIconWdsIcPhotoAi.react"), {
                        width: 24,
                        height: 24,
                        iconXstyle: _.icon
                    }),
                    title: s._("Express yourself"),
                    subtitle: s._("Generate unique images to share with anyone you want.")
                },
                {
                    icon: c.jsx(r("WDSIconIcLockFilled.react"), {
                        width: 24,
                        height: 24,
                        iconXstyle: _.icon,
                        testid: "lock"
                    }),
                    title: s._("Personal messages stay private"),
                    subtitle: s._("Meta AI can only read messages people share with it. Messages sent to Meta AI may be used to improve AI at Meta. Meta can't read any other messages in your personal chats, as your personal messages remain end-to-end encrypted.")
                }
            ]
        };
    }
    function y(origin) {
        switch(origin){
            case "agent":
                return o("WAWebBotTosIds").getBotAgentTosId();
            case "invoke":
                return o("WAWebBotTosIds").getBotInvokeTosId();
            case "shortcut":
                return o("WAWebBotTosIds").getBotShortcutTosId();
        }
    }
    function C(t) {
        const a = o("react-compiler-runtime").c(71);
        const { onCancel, onOK, origin } = t;
        const d = useState(false);
        const C = d[0];
        const S = d[1];
        let R;
        if (a[0] !== origin) {
            R = y(origin);
            a[0] = origin;
            a[1] = R;
        } else {
            R = a[1];
        }
        let L;
        if (a[2] !== R) {
            L = {
                noticeId: R
            };
            a[2] = R;
            a[3] = L;
        } else {
            L = a[3];
        }
        const E = r("useWAWebDisclosureShownTracking")(L);
        const k = v;
        let I;
        if (a[4] !== onOK || a[5] !== origin) {
            I = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!o("WAWebBotTos").hasSeenBotTos()) {
                        S(true);
                        yield k(origin);
                        S(false);
                    }
                    o("WAWebModalManager").ModalManager.close();
                    onOK?.();
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            a[4] = onOK;
            a[5] = origin;
            a[6] = I;
        } else {
            I = a[6];
        }
        const T = I;
        let D;
        if (a[7] !== onCancel) {
            D = function() {
                o("WAWebModalManager").ModalManager.close();
                onCancel?.();
            };
            a[7] = onCancel;
            a[8] = D;
        } else {
            D = a[8];
        }
        const x = D;
        const $ = r("useWAWebFocusOnMount")();
        let P;
        let N;
        if (a[9] !== origin) {
            P = function() {
                if (o("WAWebBotTos").hasSeenBotTos()) {
                    k(origin);
                }
            };
            N = [
                origin
            ];
            a[9] = origin;
            a[10] = P;
            a[11] = N;
        } else {
            P = a[10];
            N = a[11];
        }
        useEffect(P, N);
        const M = origin === "agent" && _.aiChatsIllustrationSlot;
        let w;
        if (a[12] !== origin) {
            const Component = r("WAWebImg.react");
            w = origin === "agent" ? c.jsx(r("WDSIllustrationWdsPictoAiChatsAndroid.react"), {
                xstyle: _.aiChatsIllustration
            }) : <Component src={o("WAWebMetaAiRingAssetResolver").getBotAssistantURL()} style={{
                width: 168,
                height: 168
            }}/>;
            a[12] = origin;
            a[13] = w;
        } else {
            w = a[13];
        }
        let A;
        if (a[14] !== M || a[15] !== w) {
            const Component = o("WAWebFlex.react").FlexItem;
            A = <Component xstyle={M}>{w}</Component>;
            a[14] = M;
            a[15] = w;
            a[16] = A;
        } else {
            A = a[16];
        }
        const F = A;
        let O;
        let B;
        let W;
        let q;
        let U;
        let V;
        let H;
        let G;
        let z;
        let j;
        let K;
        let Q;
        let X;
        let Y;
        let J;
        let Z;
        if (a[17] !== x || a[18] !== T || a[19] !== F || a[20] !== C || a[21] !== origin || a[22] !== $ || a[23] !== E) {
            let ee;
            e: switch(origin){
                case "invoke":
                    {
                        ee = f();
                        break e;
                    }
                case "shortcut":
                    {
                        ee = h();
                        break e;
                    }
                default:
                    ee = g();
            }
            const te = ee;
            const { headerText, sections } = te;
            let oe;
            if (a[40] !== origin) {
                const Component = o("WAWebExternalLink.react").ExternalLink;
                const Component_1 = o("WAWebExternalLink.react").ExternalLink;
                const Component_2 = o("WAWebExternalLink.react").ExternalLink;
                const Component_3 = o("WAWebExternalLink.react").ExternalLink;
                const Component_4 = o("WAWebExternalLink.react").ExternalLink;
                const Component_5 = o("WAWebExternalLink.react").ExternalLink;
                oe = origin === "agent" ? s._("AI Studio is an optional service. It is subject to Meta's {=m2}. By clicking Continue, you agree to Meta's {=m5}. {=m8}", [
                    s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getBotPrivacyPolicyUrl()}>{s._("Privacy Policy")}</Component>),
                    s._implicitParam("=m5", <Component_1 href={o("WAWebFaqUrl").getBotTermsUrl()}>{s._("AI Terms")}</Component_1>),
                    s._implicitParam("=m8", <Component_2 href={o("WAWebFaqUrl").getBotLearnMoreUrl()}>{s._("Learn more")}</Component_2>)
                ]) : s._("Meta AI is an optional service. Meta AI is subject to Meta's {=m2}. By clicking Continue, you agree to Meta's {=m5}. {=m8}", [
                    s._implicitParam("=m2", <Component_3 href={o("WAWebFaqUrl").getBotPrivacyPolicyUrl()}>{s._("Privacy Policy")}</Component_3>),
                    s._implicitParam("=m5", <Component_4 href={o("WAWebFaqUrl").getBotTermsUrl()}>{s._("AI Terms")}</Component_4>),
                    s._implicitParam("=m8", <Component_5 href={o("WAWebFaqUrl").getBotLearnMoreUrl()}>{s._("Learn more")}</Component_5>)
                ]);
                a[40] = origin;
                a[41] = oe;
            } else {
                oe = a[41];
            }
            W = oe;
            J = E;
            B = o("WAWebConfirmPopup.react").ConfirmPopup;
            G = $;
            z = o("WAWebModal.react").ModalTheme.BotNut;
            if (a[42] === Symbol.for("react.memo_cache_sentinel")) {
                j = s._("Continue");
                a[42] = j;
            } else {
                j = a[42];
            }
            K = T;
            Q = C === true;
            if (a[43] === Symbol.for("react.memo_cache_sentinel")) {
                X = s._("Cancel");
                a[43] = X;
            } else {
                X = a[43];
            }
            Y = x;
            O = o("WAWebFlex.react").FlexColumn;
            Z = "center";
            if (a[44] === Symbol.for("react.memo_cache_sentinel")) {
                q = [
                    o("WDSMargins.stylex").wdsMargins.marginVerAuto,
                    o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
                ];
                a[44] = q;
            } else {
                q = a[44];
            }
            U = F;
            let ae;
            if (a[45] === Symbol.for("react.memo_cache_sentinel")) {
                ae = [
                    _.headerText,
                    o("WDSMargins.stylex").wdsMargins.marginHor8,
                    o("WDSMargins.stylex").wdsMargins.marginTop16,
                    o("WDSMargins.stylex").wdsMargins.marginBottom8
                ];
                a[45] = ae;
            } else {
                ae = a[45];
            }
            const Component = o("WAWebText.react").WAWebTextLarge;
            const Component_1 = r("WAWebBox.react");
            V = <Component_1 xstyle={ae}><Component weight="bold">{headerText}</Component></Component_1>;
            H = sections.map(b);
            a[17] = x;
            a[18] = T;
            a[19] = F;
            a[20] = C;
            a[21] = origin;
            a[22] = $;
            a[23] = E;
            a[24] = O;
            a[25] = B;
            a[26] = W;
            a[27] = q;
            a[28] = U;
            a[29] = V;
            a[30] = H;
            a[31] = G;
            a[32] = z;
            a[33] = j;
            a[34] = K;
            a[35] = Q;
            a[36] = X;
            a[37] = Y;
            a[38] = J;
            a[39] = Z;
        } else {
            O = a[24];
            B = a[25];
            W = a[26];
            q = a[27];
            U = a[28];
            V = a[29];
            H = a[30];
            G = a[31];
            z = a[32];
            j = a[33];
            K = a[34];
            Q = a[35];
            X = a[36];
            Y = a[37];
            J = a[38];
            Z = a[39];
        }
        let ie;
        if (a[46] === Symbol.for("react.memo_cache_sentinel")) {
            ie = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.divider, o("WDSMargins.stylex").wdsMargins.marginVer16))}/>;
            a[46] = ie;
        } else {
            ie = a[46];
        }
        let le;
        if (a[47] === Symbol.for("react.memo_cache_sentinel")) {
            le = [
                o("WDSMargins.stylex").wdsMargins.marginHor8,
                o("WDSMargins.stylex").wdsMargins.marginVer8
            ];
            a[47] = le;
        } else {
            le = a[47];
        }
        let se;
        if (a[48] !== W) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = r("WAWebBox.react");
            se = <Component_1 xstyle={le}><Component>{W}</Component></Component_1>;
            a[48] = W;
            a[49] = se;
        } else {
            se = a[49];
        }
        let ue;
        if (a[50] !== O || a[51] !== q || a[52] !== U || a[53] !== V || a[54] !== H || a[55] !== se || a[56] !== Z) {
            ue = <O align={Z} xstyle={q}>{U}{V}{H}{ie}{se}</O>;
            a[50] = O;
            a[51] = q;
            a[52] = U;
            a[53] = V;
            a[54] = H;
            a[55] = se;
            a[56] = Z;
            a[57] = ue;
        } else {
            ue = a[57];
        }
        let ce;
        if (a[58] !== B || a[59] !== G || a[60] !== z || a[61] !== j || a[62] !== K || a[63] !== Q || a[64] !== X || a[65] !== Y || a[66] !== ue) {
            ce = <B ref={G} type={z} okText={j} onOK={K} okSpinner={Q} cancelText={X} onCancel={Y}>{ue}</B>;
            a[58] = B;
            a[59] = G;
            a[60] = z;
            a[61] = j;
            a[62] = K;
            a[63] = Q;
            a[64] = X;
            a[65] = Y;
            a[66] = ue;
            a[67] = ce;
        } else {
            ce = a[67];
        }
        let de;
        if (a[68] !== J || a[69] !== ce) {
            de = <div ref={J}>{ce}</div>;
            a[68] = J;
            a[69] = ce;
            a[70] = de;
        } else {
            de = a[70];
        }
        return de;
    }
    function b({ icon, subtitle, title }, t) {
        const Component = o("WAWebFlex.react").FlexItem;
        const Component_1 = o("WAWebText.react").WAWebTextTitle;
        const Component_2 = o("WAWebText.react").WAWebTextMuted;
        const Component_3 = o("WAWebFlex.react").FlexItem;
        const Component_4 = o("WAWebFlex.react").FlexRow;
        return <Component_4 key={t} xstyle={[
            o("WDSMargins.stylex").wdsMargins.marginHor8,
            o("WDSMargins.stylex").wdsMargins.marginVer16
        ]}><Component xstyle={[
            o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
            _.sectionIcon
        ]}>{icon}</Component><Component_3 xstyle={[
            o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
            _.sectionTitle
        ]}><Component_1>{title}</Component_1><Component_2>{subtitle}</Component_2></Component_3></Component_4>;
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            e: switch(e){
                case "agent":
                    {
                        yield o("WAWebBotTos").markSeenAgentTos();
                        break e;
                    }
                case "invoke":
                    {
                        yield o("WAWebBotTos").markSeenInvokeTos();
                        break e;
                    }
                case "shortcut":
                    yield o("WAWebBotTos").markSeenShortcutTos();
            }
        });
        return S.apply(this, arguments);
    }
    l.default = C;
}, 226);