__d("WAWebPinnedMessagesBanner.react", [
    "fbt",
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebConversationBanner.react",
    "WAWebDashes.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebMsgCollection",
    "WAWebPinInChatCollection",
    "WAWebPinInChatMetricUtils",
    "WAWebPinMsgGatingUtils",
    "WAWebPinNotches.react",
    "WAWebPinnedMessagesBannerBody.react",
    "WAWebPinnedMessagesUserJourneyLogger",
    "WAWebProtobufsE2E.pb",
    "WAWebSendPinMessageAction",
    "WAWebUimUie.react",
    "WDSHoverStateStyles",
    "WDSIconIcArrowForward.react",
    "WDSIconIcPushPin.react",
    "WDSIconWdsIcPushPinSlash.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener",
    "useWAWebPinnedMessages"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "ref"
    ];
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useMemo, useState } = p;
    const g = {
        paddingInlineStart6: {
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        paddingInlineStart14: {
            paddingInlineStart: "x1onr9mi",
            $$css: true
        },
        paddingInlineStart13: {
            paddingInlineStart: "xbmws1g",
            $$css: true
        },
        paddingEnd10: {
            paddingInlineEnd: "x2vl965",
            $$css: true
        }
    };
    const h = {
        banner: {
            minHeight: "xuwdbiy",
            $$css: true
        },
        bannerUiRefresh: {
            backgroundColor: "x1h3rtpe",
            $$css: true
        },
        iconWrapper: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        icon: {
            display: "x1rg5ohu",
            color: "xhslqc4",
            $$css: true
        },
        bannerBody: {
            height: "xsdox4t",
            width: "xh8yej3",
            $$css: true
        },
        clearMinWidth: {
            minWidth: "xaaagfd",
            $$css: true
        },
        dashContainer: {
            width: "xfo62xy",
            $$css: true
        },
        notchContainer: {
            width: "x1g8rjiy",
            $$css: true
        }
    };
    function Y1Component() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = m.jsx(r("WDSIconIcPushPin.react"), {
                xstyle: h.icon,
                "aria-hidden": true,
                testid: "pin-refreshed"
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = o("WAWebPinMsgGatingUtils").isNotchIndicatorEnabled();
            e[1] = a;
        } else {
            a = e[1];
        }
        const i = a;
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = <div {...babelHelpers.extends({}, (c || (c = r("stylex"))).props(h.iconWrapper, i ? g.paddingInlineStart13 : g.paddingInlineStart6, i ? g.paddingEnd10 : o("WDSPaddings.stylex").wdsPaddings.paddingEnd8), {
                children: i ? <div className="x6s0dn4 x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 xl56j7k x1tiyuxx x1uc92m x1nbhmlj x181vq82">{n}</div> : n
            })}/>;
            e[2] = l;
        } else {
            l = e[2];
        }
        return l;
    }
    function C(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, u);
        const a_chat = a.chat;
        const l = r("useWAWebPinnedMessages")(a_chat);
        const c = useState(function() {
            if (l.length > 0) {
                return l.length - 1;
            }
            return null;
        });
        const d = c[0];
        const p = c[1];
        const C = useState(false);
        const v = C[0];
        const S = C[1];
        const R = useState(l.length);
        const L = R[0];
        const E = R[1];
        if (L !== l.length) {
            E(l.length);
            if (l.length > 0) {
                p(l.length - 1);
            }
        }
        const k = d == null ? null : l[d];
        o("useWAWebListener").useListener(o("WAWebPinInChatCollection").PinInChatCollection, [
            "add",
            "remove",
            "change"
        ], function() {
            if (l.length > 0) {
                p(l.length - 1);
            }
        });
        const I = useMemo(function() {
            if (l.length > 0 && k != null) {
                const e = k?.parentMsgKey;
                if (e) {
                    return o("WAWebMsgCollection").MsgCollection.get(e);
                }
            }
        }, [
            l,
            k
        ]);
        const T = ()=>{
            const l_length = l.length;
            const pinIndex = l_length - 1 - (d ?? 0);
            o("WAWebPinInChatMetricUtils").logPinInChatTapOnBanner({
                msg: I,
                chat: a_chat,
                pin: k,
                pinCount: l_length,
                pinIndex
            });
        };
        const D = ()=>{
            if (l.length > 0) {
                p(function(e) {
                    if (e == null) {
                        return l.length - 1;
                    }
                    return (e + 1) % l.length;
                });
            }
        };
        const x = function() {
            if (k != null) {
                const t = k.parentMsgKey;
                const msgContext = o("WAWebChatMessageSearch").getSearchContext({
                    chat: a_chat,
                    msgKey: I?.id ?? t,
                    rootMsg: null
                });
                if (msgContext) {
                    msgContext.slideToMsg = true;
                }
                o("WAWebCmd").Cmd.openChatAt({
                    chat: a_chat,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.PinnedMessage,
                    msgContext,
                    onSuccess: {
                        mediaMsgToOpenInMediaViewer: I
                    }
                });
            }
        };
        const $ = function() {
            D();
            if (k != null) {
                const t = o("WAWebMsgCollection").MsgCollection.get(k.parentMsgKey);
                if (t) {
                    new (o("WAWebPinnedMessagesUserJourneyLogger")).PinnedMessagesUserJourneyLogger(a_chat).pinBannerClickUnpin(t, k);
                    o("WAWebSendPinMessageAction").sendPinInChatMsg(t, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Error while unpinning a message: ",
                            ""
                        ])), t);
                    });
                }
            }
        };
        const Component = r("WDSMenuItem.react");
        const Component_1 = r("WDSMenuItem.react");
        const Component_2 = r("WDSMenu.react");
        const wdsMenuContent = <Component_2><Component testid="pinned-message-menu-unpin" Icon={r("WDSIconWdsIcPushPinSlash.react")} title={s._("Unpin")} onPress={$}/><Component_1 testid="pinned-message-menu-go-to-message" Icon={r("WDSIconIcArrowForward.react")} title={s._("Go to message")} onPress={x}/></Component_2>;
        const N = function(t) {
            t.stopPropagation();
            x();
            D();
            T();
        };
        const M = l.length > 1;
        const Component_3 = r("WAWebFlexItem.react");
        const w = <Component_3 xstyle={o("WAWebPinMsgGatingUtils").isNotchIndicatorEnabled() ? h.notchContainer : h.dashContainer}>{M ? <B1 activeIndex={d ?? 0} count={l.length}/> : null}</Component_3>;
        if (k == null) {
            return null;
        }
        const Component_4 = r("WAWebFlexItem.react");
        const Component_5 = r("WAWebFlexItem.react");
        const Component_6 = o("WAWebFlex.react").FlexRow;
        const Component_7 = r("WAWebConversationBanner.react");
        const Component_8 = o("WAWebUimUie.react").UIE;
        return <Component_8 displayName="PinnedMessagesBanner"><Component_7 ref={t_ref} xstyle={[
            h.banner,
            h.bannerUiRefresh,
            o("WAWebPinMsgGatingUtils").isNotchIndicatorEnabled() ? o("WDSPaddings.stylex").wdsPaddings.paddingStart12 : o("WDSPaddings.stylex").wdsPaddings.paddingStart16,
            o("WDSPaddings.stylex").wdsPaddings.paddingVer0,
            o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
            v && o("WDSHoverStateStyles").WDSHoverStateStyles.genericHoverPersistent
        ]} onClick={N} onHoverChange={S} wdsMenuContent={wdsMenuContent}><Component_6 align="center" grow={1}>{m.jsx(r("WAWebFlexItem.react"), {
            "aria-label": s._("Pinned message")
        })}{w}<Component_4 xstyle={h.clearMinWidth} align="center" justify="center"><Y1Component/></Component_4><Component_5 xstyle={[
            !o("WAWebPinMsgGatingUtils").isNotchIndicatorEnabled() && g.paddingInlineStart14,
            h.bannerBody
        ]}>{m.jsx(r("WAWebPinnedMessagesBannerBody.react"), {
            pinInChat: k
        })}</Component_5></Component_6></Component_7></Component_8>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function B1(e) {
        const t = o("react-compiler-runtime").c(3);
        const { activeIndex, count } = e;
        let i;
        if (t[0] !== activeIndex || t[1] !== count) {
            i = o("WAWebPinMsgGatingUtils").isNotchIndicatorEnabled() ? m.jsx(r("WAWebPinNotches.react"), {
                activeIndex,
                count
            }) : m.jsx(r("WAWebDashes.react"), {
                activeIndex,
                count
            });
            t[0] = activeIndex;
            t[1] = count;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    function v(e) {
        const t = r("useWAWebPinnedMessages")(e);
        return t.length > 0;
    }
    l.PinnedMessagesBanner = C;
    l.useWAWebPinnedMessagesBanner = v;
}, 226);