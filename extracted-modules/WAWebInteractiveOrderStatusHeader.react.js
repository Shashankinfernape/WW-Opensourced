__d("WAWebInteractiveOrderStatusHeader.react", [
    "fbt",
    "WALogger",
    "WAWebBizOpenOrderStatusDrawer.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveOrderQuotedMessage.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "WAWebMediaDataGetters",
    "WAWebMediaOpaqueData",
    "WAWebMediaUrlProvider",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebRichOrderStatusLogger",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "sumBy",
    "useWAWebEventTargetValue",
    "useWAWebMediaDataValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
    "useWAWebSourceSnapshot"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = {
        wrapper: {
            marginTop: "x7r5mf7",
            marginInlineEnd: "x2fvf9",
            marginBottom: "xat24cr",
            marginInlineStart: "xdzw4kq",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            cursor: "x1ypdohk",
            paddingTop: "x96k8nx",
            paddingInlineEnd: "xrw5ot4",
            paddingBottom: "xdvlbce",
            paddingInlineStart: "x7coems",
            flexDirection: "x1q0g3np",
            columnGap: "xlrrn2g",
            $$css: true
        },
        textWrapper: {
            justifyContent: "xl56j7k",
            maxHeight: "x1upyj8d",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            lineHeight: "x17fgdl5",
            $$css: true
        },
        bubbleIn: {
            backgroundColor: "x6egj2d",
            $$css: true
        },
        bubbleOut: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        description: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontSize: "x1nxh6w3",
            color: "xhslqc4",
            lineHeight: "xd4r4e8",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            width: "xh8yej3",
            $$css: true
        },
        imageContainer: {
            width: "x1useyqa",
            height: "xsdox4t",
            $$css: true
        }
    };
    const _ = "add bulk_add remove reset sort change:type change:interactivePayload";
    function f(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e.msgKey) {
            n = e.msgKey.toString();
            t[0] = e.msgKey;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] !== e || t[3] !== n) {
            r = <G5Component key={n} {...babelHelpers.extends({}, e)}/>;
            t[2] = e;
            t[3] = n;
            t[4] = r;
        } else {
            r = t[4];
        }
        return r;
    }
    function G5Component(t) {
        let i;
        const t_msgKey = t.msgKey;
        const d = o("useWAWebMsgValues").useMsgValues(t_msgKey, [
            (i = o("WAWebMsgGetters")).getType,
            i.getInteractivePayload,
            i.getIsSentByMe,
            i.getIsNewsletterMsg
        ]);
        const f = d[0];
        const interactivePayload = d[1];
        const y = d[2];
        const v = d[3];
        const S = o("WAWebFrontendMsgGetters").getChatByMsgKey(t_msgKey, v);
        const R = r("useWAWebEventTargetValue")(S, "change:msgs", function() {
            return S.msgs;
        }, [
            S
        ]);
        const L = o("WAWebOrderStatusButton").getOrderStatusButtonFor({
            type: f,
            interactivePayload
        });
        const E = r("useWAWebSourceSnapshot")(R, _, function() {
            return L && o("WAWebOrderStatus").getMergedOrderStatus(S, L);
        }, C) ?? {};
        const { firstMessage, messageBubbleButton } = E;
        if (!L || !messageBubbleButton) {
            return m.jsx(r("WAWebInteractiveOrderQuotedMessage.react"), {
                displayType: t.displayType,
                msgKey: t_msgKey,
                quotedMsg: t.quotedMsg
            });
        }
        const items = messageBubbleButton.order.items;
        const D = items === undefined ? [] : items;
        const x = s._("Order #{order-number}", [
            s._param("order-number", messageBubbleButton.reference_id)
        ]);
        const $ = ()=>{
            const e = r("sumBy")(D, function(e) {
                return e.quantity;
            });
            if (e === 0) {
                return x;
            }
            if (e === 1) {
                return D[0].name;
            }
            const t = r("WAWebL10N").n(e);
            return s._("_j{\"*\":\"{number} Items\",\"_1\":\"1 Item\"}", [
                s._plural(e, "number", t)
            ]);
        };
        const P = ()=>{
            if (D.length === 0) {
                return s._("View details");
            }
            return x;
        };
        const N = $();
        const M = P();
        const w = function() {
            const t = o("WAWebMsgCollection").MsgCollection.get(t_msgKey);
            if (t == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[order-status] header click skipped, message left the collection"
                ])));
                return;
            }
            const n = b(t.safe());
            if (n == null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[order-status] header click skipped, unexpected message type ",
                    ""
                ])), t.type);
                return;
            }
            o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(t, o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.MESSAGE_HEADER_CLICK);
            o("WAWebBizOpenOrderStatusDrawer.react").openOrderStatusDrawer(L, o("WAWebFrontendMsgGetters").getChat(t), n);
        };
        const Component = o("WAWebFlex.react").FlexColumn;
        const Component_1 = o("WAWebFlex.react").FlexColumn;
        const Component_2 = o("WAWebFlex.react").FlexRow;
        return <div {...babelHelpers.extends({
            onClick: w,
            onKeyDown: function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    w();
                }
            },
            role: "button",
            tabIndex: 0
        }, (c || (c = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), {
            children: <Component_2 xstyle={[
                p.wrapper,
                y ? p.bubbleOut : p.bubbleIn
            ]} align="center"><Component shrink={0} xstyle={p.imageContainer}><H2Component msgKey={firstMessage?.id ?? t_msgKey}/></Component><Component_1 xstyle={p.textWrapper} grow={1}><div className="x104kibb x1h7i4cw x1ua5tub x6ikm8r x10wlt62 x14ug900 xlyipyv x1s688f x6prxxf x1fc57z9 x1w2d6ul">{m.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: N
            })}</div>{m.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: M,
                xstyle: p.description
            })}</Component_1></Component_2>
        })}/>;
    }
    G5Component.displayName = `${G5Component.name} [from ${i.id}]`;
    function H2Component(e) {
        const n = o("react-compiler-runtime").c(7);
        const e_msgKey = e.msgKey;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(e_msgKey, i);
        const mediaData = l[0];
        const c = o("useWAWebMediaDataValues").useOptionalMediaDataValues(mediaData, [
            o("WAWebMediaDataGetters").getPreview
        ]) ?? [
            null
        ];
        const d = c[0];
        const downloadMedia = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(e_msgKey);
        if (mediaData == null) {
            return null;
        }
        let _;
        if (n[1] !== d) {
            _ = function() {
                return <img src={d instanceof r("WAWebMediaOpaqueData") ? d.url() : d} alt={s._("Order image")} className="xh8yej3 x5yr21d xl1xv1r x1i282gy xx9ypkp xd15eu0 x11ecxm0"/>;
            };
            n[1] = d;
            n[2] = _;
        } else {
            _ = n[2];
        }
        let f;
        if (n[3] !== downloadMedia || n[4] !== mediaData || n[5] !== _) {
            const Component = r("WAWebMediaUrlProvider");
            f = <Component mediaData={mediaData} downloadMedia={downloadMedia} placeholderRenderer={_}>{y}</Component>;
            n[3] = downloadMedia;
            n[4] = mediaData;
            n[5] = _;
            n[6] = f;
        } else {
            f = n[6];
        }
        return f;
    }
    function y(src) {
        return <img src={src} alt={s._("Order image")} className="xh8yej3 x5yr21d xl1xv1r x1i282gy xx9ypkp xd15eu0 x11ecxm0"/>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C(e, t) {
        return e?.firstMessage === t?.firstMessage && e?.lastMessage === t?.lastMessage;
    }
    function b(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
            return e;
        }
        return null;
    }
    l.InteractiveOrderStatusHeader = f;
    l.InteractiveOrderStatusHeaderImage = H2Component;
}, 226);