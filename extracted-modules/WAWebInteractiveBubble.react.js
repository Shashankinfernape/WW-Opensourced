__d("WAWebInteractiveBubble.react", [
    "WAWebBizSuspiciousLabel.react",
    "WAWebBotTypes",
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebErrorBoundary.react",
    "WAWebExpandableText.react",
    "WAWebFlex.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveFooterText",
    "WAWebHsmGatingUtils",
    "WAWebInAppSignupConfirmation",
    "WAWebInteractiveBloksWidget.react",
    "WAWebInteractiveBloksWidgetLogger",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageCropping",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "WAWebOrderStatusButton",
    "WAWebShowMessageActionFallbackErrorAction",
    "WDSText.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebHasA2uiReplyBelow",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const c = "im_a2ui";
    const d = {
        marginTop6: {
            marginTop: "x1k70j0n",
            $$css: true
        }
    };
    const m = {
        width: function(t) {
            return [
                {
                    width: t != null ? "x5lhr3w" : t,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        bubble: {
            width: "x3orp4s",
            maxWidth: "x193iq5w",
            $$css: true
        },
        footer: {
            display: "x1lliihq",
            fontSize: "x1nxh6w3",
            lineHeight: "xwn7fz2",
            overflowWrap: "x1mzt3pk",
            whiteSpace: "x126k92a",
            color: "xhslqc4",
            $$css: true
        },
        footerSpacer: {
            display: "x78zum5",
            $$css: true
        }
    };
    function p({ actions, displayAuthor, displayFooter = true, displayType, header, hideMeta, minTextHeight, msgKey }) {
        const C = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getDir,
            o("WAWebFrontendMsgGetters").getText,
            o("WAWebMsgGetters").getSender,
            o("WAWebMsgGetters").getInitialPageSize,
            o("WAWebMsgGetters").getBizBotType,
            o("WAWebMsgGetters").getBloksWidget,
            o("WAWebMsgGetters").getNativeFlowName,
            o("WAWebFrontendMsgGetters").getCarouselCards,
            o("WAWebMsgGetters").getIsCarouselCard,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getIsGroupMsg,
            o("WAWebFrontendMsgGetters").getShouldShowForwarded,
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getInteractivePayload,
            o("WAWebMsgGetters").getFooter,
            o("WAWebMsgGetters").getSupportsMessageFooterLinks,
            o("WAWebMsgGetters").getInteractiveType
        ]);
        const b = C[0];
        const v = C[1];
        const S = C[2];
        const R = C[3];
        const L = C[4];
        const E = C[5];
        const bloksWidget = C[6];
        const I = C[7];
        const T = C[8];
        const D = C[9];
        const x = C[10];
        const $ = C[11];
        const P = C[12];
        const N = C[13];
        const M = C[14];
        const w = C[15];
        const A = C[16];
        const F = C[17];
        const O = r("useWAWebIsMsgTrusted")(msgKey);
        const B = {
            selectable: O,
            dirMismatch: b !== r("WAWebL10N").isRTL(),
            direction: v,
            inferLinesDirection: true
        };
        const W = bloksWidget != null && o("WAWebHsmGatingUtils").isBloksWidgetEnabled();
        const isBizBot1pMessage = E === o("WAWebBotTypes").BizBotType.BIZ_1P;
        const U = W && bloksWidget?.type === c;
        const hasReply = r("useWAWebHasA2uiReplyBelow")(msgKey, U);
        let H = S;
        if (I === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP && H != null) {
            const G = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfoFor({
                interactivePayload: M,
                interactiveType: F,
                nativeFlowName: I,
                type: N
            });
            if (G != null) {
                H = o("WAWebInAppSignupConfirmation").applyBoldToPromoCode(H, G.promoCode);
            }
        }
        if (W && H === bloksWidget?.fallback) {
            H = null;
        }
        const Component = o("WAWebExpandableText.react").ExpandableText;
        const Component_1 = r("WAWebMessageSpacerText.react");
        const z = r("isStringNullOrEmpty")(H) ? null : <Component_1 msgKey={msgKey} data-id={msgKey} spacer={T != null}><Component text={H} textLimit={L}>{function({ textLimit }) {
            return s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, B, {
                text: H,
                formatters: o("WAWebFormatConfigurationConversation").Conversation({
                    links: S == null ? [] : o("WAWebMsgLinks").getLinksFromText(S, R, textLimit),
                    phoneNumbers: S == null ? [] : o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(S, L + 1),
                    trusted: O,
                    selectable: O,
                    fromMe: msgKey.fromMe
                }),
                textLimit,
                minTextHeight,
                inlineblock: minTextHeight != null ? true : undefined
            }));
        }}</Component></Component_1>;
        const j = o("WAWebGetInteractiveFooterText").getInteractiveFooterTextFor({
            footer: w,
            interactivePayload: M,
            nativeFlowName: I,
            type: N
        });
        const spacer = o("WAWebOrderStatusButton").getOrderStatusButtonFor({
            interactivePayload: M,
            type: N
        }) != null;
        const Component_2 = r("WAWebMessageSpacerText.react");
        const Q = displayFooter && j != null ? <Component_2 msgKey={msgKey} xstyle={m.footerSpacer} spacer={spacer}>{s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, B, {
            text: j,
            formatters: o("WAWebFormatConfigurationConversation").Conversation({
                links: A && w != null ? o("WAWebMsgLinks").getLinksFromText(w, R) : [],
                phoneNumbers: A && w != null ? o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(w) : [],
                selectable: O,
                trusted: O,
                fromMe: msgKey.fromMe
            }),
            xstyle: [
                m.footer,
                d.marginTop6
            ]
        }))}</Component_2> : null;
        const X = actions != null && actions.length && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ? <div className="xwib8y2 x7coems x1bjonze x9otpla">{s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            direction: "vertical",
            items: actions.map((e)=>({
                    testid: e.testid,
                    label: e.label,
                    onClick: e.onClick ?? function() {
                        return r("WAWebShowMessageActionFallbackErrorAction")();
                    },
                    disabled: e.disabled,
                    Icon: e.Icon
                }))
        })}</div> : null;
        const Y = o("WAWebBizSuspiciousLabel.react").useSuspiciousLabel({
            msgKey,
            displayType
        });
        const { ctwaContext, text } = Y;
        const ee = text != null;
        const te = displayAuthor !== false ? !x && $ : null;
        const ne = P || te === true || ee;
        const Component_3 = o("WAWebErrorBoundary.react").ErrorBoundary;
        const re = W ? <Component_3 name="interactive-bloks-widget" onError={function() {
            return o("WAWebInteractiveBloksWidgetLogger").logInteractiveBloksWidgetFallback(bloksWidget);
        }} fallback={function({ error }) {
            return <_ error={error} fallback={bloksWidget?.fallback}/>;
        }}>{s.jsx(r("WAWebInteractiveBloksWidget.react"), {
            bloksWidget,
            chatJid: msgKey.remote?.toString(),
            hasReply,
            isBizBot1pMessage,
            isFromMe: U && msgKey.fromMe === true,
            messageId: msgKey.id
        })}</Component_3> : null;
        const oe = e_useCallback(function(e) {
            const t = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (t != null) {
                const n = o("WAWebFrontendMsgGetters").getChat(t);
                if (o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMm(n, t)) {
                    o("WAWebMmSignalSharingUIUtils").manageMmSignalSharingBodyClick(e, n, t);
                }
            }
        }, [
            msgKey
        ]);
        const Component_4 = r("WAWebMessageTextBubble.react");
        const Component_5 = o("WAWebFlex.react").FlexColumn;
        return <Component_5 align="stretch" xstyle={[
            m.bubble,
            D === true && m.width(o("WAWebMessageCropping").CAROUSEL_MEDIA_DIMS.bubbleWidth)
        ]}><Component_4 msgKey={msgKey} displayAuthor={displayAuthor} hideMeta={hideMeta ?? false}>{ee ? s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabelView, {
            ctwaContext,
            isLink: false,
            text
        }) : null}<div {...babelHelpers.extends({}, {
            0: {},
            2: {
                className: "xyorhqc"
            },
            1: {
                className: "x1ok221b"
            },
            3: {
                className: "xyorhqc x1ok221b"
            }
        }[(hideMeta === false) << 1 | !!ne << 0], {
            onClick: oe,
            role: "none",
            children: [
                header,
                z,
                re,
                Q
            ]
        })}/></Component_4>{X}</Component_5>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e) {
        const t = o("react-compiler-runtime").c(2);
        const { error, fallback } = e;
        const i = fallback != null && fallback !== "" ? fallback : error?.message;
        let l;
        if (t[0] !== i) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            l = <Component_1 align="center" justify="center"><Component type="Body2" colorName="contentDeemphasized">{i}</Component></Component_1>;
            t[0] = i;
            t[1] = l;
        } else {
            l = t[1];
        }
        return l;
    }
    l.default = p;
}, 98);