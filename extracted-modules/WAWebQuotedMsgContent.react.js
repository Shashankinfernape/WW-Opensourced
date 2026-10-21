__d("WAWebQuotedMsgContent.react", [
    "fbt",
    "WAWebBizOrderPreview.react",
    "WAWebChatMsgSymbol.react",
    "WAWebClock",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFormatMsgText",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgMentionMap",
    "WAWebMsgModelPropUtils",
    "WAWebMsgType",
    "WAWebPaymentType.react",
    "WAWebQuotedMsgModelUtils",
    "WAWebQuotedMsgUtils",
    "WAWebReleaseToEventLoop",
    "WAWebServerPropConstants",
    "WAWebSpoilerRevealLogger",
    "WAWebSticker.react",
    "WAWebViewMode.flow",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSIconIcHelp.react",
    "isNonZeroNumber",
    "nullthrows",
    "promiseDone",
    "react",
    "useWAWebAssociatedMessages",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(e) {
        "use no forget";
        const e_excludeSymbol = e.excludeSymbol;
        const n = e_excludeSymbol === undefined ? false : e_excludeSymbol;
        const { rootMsg, shouldHideQuotedMsgCaption } = e;
        const l = shouldHideQuotedMsgCaption === undefined ? false : shouldHideQuotedMsgCaption;
        const e_theme = e.theme;
        let e_msg = e.msg;
        const associatedMessages = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(e_msg.id, o("WAWebViewMode.flow").ViewModeSurface.CHAT);
        if (rootMsg && (e_msg.unsafe().fromQuotedMsg || o("WAWebMsgGetters").getIsEdited(e_msg.unsafe()))) {
            e_msg = r("nullthrows")(o("WAWebQuotedMsgModelUtils").createQuotedMsgObj(rootMsg.unsafe()));
        }
        if (rootMsg != null && rootMsg.selectedCarouselCardIndex != null && e_msg.carouselCards != null) {
            const _ = e_msg.carouselCards.at(rootMsg.selectedCarouselCardIndex);
            if (_ != null) {
                e_msg = _.safe();
            }
        }
        const f = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const g = r("useWAWebStableCallback")(function() {
            if (e_msg.type === o("WAWebMsgType").MSG_TYPE.STICKER) {
                r("promiseDone")(e_msg.downloadMedia({
                    downloadEvenIfExpensive: false,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
                    isUserInitiated: false
                }));
            }
            if (e_msg.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && e_msg.isVcardOverMmsDocument && (!e_msg.mediaData || !e_msg.mediaData.mediaBlob) && o("WAWebMsgModelPropUtils").isTrusted(e_msg.unsafe()) && e_msg.size <= o("WAWebServerPropConstants").MMS_VCARD_AUTODOWNLOAD_SIZE_KB * 1024) {
                r("promiseDone")(e_msg.downloadMedia({
                    downloadEvenIfExpensive: true,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
                    isUserInitiated: false
                }).then(()=>o("WAWebReleaseToEventLoop").releaseToEventLoop()));
            }
        });
        e_useEffect(function() {
            g();
        }, [
            g
        ]);
        o("useWAWebListener").useListener(e_msg.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && e_msg.mediaData && e_msg.isVcardOverMmsDocument ? e_msg.mediaData : null, "change:parsedVcards", function() {
            f();
        });
        const downloadMedia = function() {
            return e_msg.downloadMedia({
                downloadEvenIfExpensive: false,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
                isUserInitiated: false
            });
        };
        const y = [];
        if (o("WAWebMsgGetters").getIsQuestion(e_msg)) {
            y.push(u.jsx(r("WAWebChatMsgSymbol.react"), {
                msg: e_msg.unsafe(),
                overrideIcon: u.jsx(r("WDSIconIcHelp.react"), {
                    width: 18,
                    height: 20
                })
            }, "question-symbol"));
        }
        if (!n && o("WAWebMsgModelPropUtils").hasSymbol(e_msg.unsafe()) && e_msg.type !== o("WAWebMsgType").MSG_TYPE.STICKER && e_msg.type !== o("WAWebMsgType").MSG_TYPE.ORDER) {
            y.push(u.jsx(r("WAWebChatMsgSymbol.react"), {
                msg: e_msg.unsafe(),
                viewOnceStatic: true
            }, "msg-symbol"));
        }
        if ((e_msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO && !e_msg.isGif && (e_msg.caption == null || e_msg.caption === "" || l === true) && !e_msg.isViewOnce || e_msg.type === o("WAWebMsgType").MSG_TYPE.AUDIO) && Number(e_msg.duration) > 0) {
            y.push(`${o("WAWebClock").Clock.durationStr(Number(e_msg.duration))} `);
        }
        const C = o("WAWebFormatConfiguration").QuotedMention({
            mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(e_msg),
            groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(e_msg),
            messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(e_msg.unsafe()),
            spoilerRevealContext: o("WAWebSpoilerRevealLogger").getSpoilerRevealContext(e_msg)
        });
        if (e_msg.type === o("WAWebMsgType").MSG_TYPE.CHAT || e_msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE || e_msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO || e_msg.type === o("WAWebMsgType").MSG_TYPE.PTT || e_msg.isFromTemplate || e_msg.isDynamicReplyButtonsMsg) {
            let b;
            let v;
            if ((b = o("WAWebFrontendMsgGetters").getAsViewOnce(e_msg)) != null && b.isViewOnce) {
                switch(e_msg.type){
                    case o("WAWebMsgType").MSG_TYPE.IMAGE:
                        v = s._("Photo");
                        break;
                    case o("WAWebMsgType").MSG_TYPE.VIDEO:
                        v = s._("Video");
                        break;
                    case o("WAWebMsgType").MSG_TYPE.PTT:
                        v = s._("Voice message");
                        break;
                }
            } else {
                if (l === true) {
                    v = "";
                } else {
                    v = e_msg.isFromTemplate && e_msg.type === o("WAWebMsgType").MSG_TYPE.CHAT && e_msg.title != null && e_msg.title !== "" ? `*${e_msg.title}*
${e_msg.body}` : r("WAWebFormatMsgText")({
                        msg: e_msg.unsafe(),
                        associatedMessages,
                        options: {
                            unformat: false
                        }
                    });
                }
            }
            const Component = o("WAWebEmojiText.react").EmojiText;
            y.push(<Component key="status" selectable formatters={C} className="quoted-mention" text={v} textLimit={o("WAWebMsgGetters").getInitialPageSize(e_msg)} direction="auto"/>);
        } else if (e_msg.type === o("WAWebMsgType").MSG_TYPE.STICKER) {
            const S = e.theme === "composeBox" ? "composeBoxQuoted" : "quoted";
            y.push(u.jsx(r("WAWebSticker.react"), {
                mediaData: e_msg.mediaData,
                theme: S,
                downloadMedia
            }, "sticker"));
        } else {
            const Component = o("WAWebEmojiText.react").EmojiText;
            if (e_msg.type === o("WAWebMsgType").MSG_TYPE.PAYMENT) {
                if (o("isNonZeroNumber").isNonZeroNumber(e_msg.paymentAmount1000) && e_msg.paymentCurrency || e_msg.subtype === "invite") {
                    y.push(u.jsx(r("WAWebPaymentType.react"), {
                        msgKey: e_msg.id,
                        subtype: e_msg.subtype,
                        receiverJid: e_msg.paymentMessageReceiverJid,
                        isQuoted: true
                    }, "payment"));
                } else {
                    y.push(s._("Payment message • Amount unavailable"));
                }
            } else if (e_msg.type === o("WAWebMsgType").MSG_TYPE.ORDER) {
                y.push(u.jsx(o("WAWebBizOrderPreview.react").OrderDescription, {
                    msg: e_msg.unsafe(),
                    showMessage: true
                }, "order"));
            } else {
                y.push(<Component key="status" selectable formatters={C} className="quoted-mention" text={o("WAWebQuotedMsgUtils").formatQuotedMsg(e_msg)} preformatted={e_msg.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && (e_msg.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS || e_msg.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO)} textLimit={o("WAWebMsgGetters").getInitialPageSize(e_msg)} direction="auto"/>);
            }
        }
        const role = e_theme === "conversation" || e_theme === "starred" ? "button" : null;
        return <div {...babelHelpers.extends({}, {
            0: {
                className: "x104kibb x1x01jpy x6ikm8r x10wlt62 x1ezpfd3 x1o168i8 xhslqc4 xlyipyv xj0a0fe x126k92a x1h7i4cw x1ua5tub"
            },
            2: {
                className: "x104kibb x6ikm8r x10wlt62 x1ezpfd3 x1o168i8 xhslqc4 xlyipyv xj0a0fe x126k92a x1h7i4cw x1ua5tub x18wx58x"
            },
            1: {
                className: "x104kibb x1x01jpy x6ikm8r x10wlt62 x1ezpfd3 x1o168i8 xhslqc4 xlyipyv xj0a0fe x126k92a x1ua5tub xh0615m"
            },
            3: {
                className: "x104kibb x6ikm8r x10wlt62 x1ezpfd3 x1o168i8 xhslqc4 xlyipyv xj0a0fe x126k92a x1ua5tub x18wx58x xh0615m"
            }
        }[(e.theme === "composeBox") << 1 | (e.theme === "questions") << 0], {
            dir: o("WAWebFrontendMsgGetters").getDir(e_msg),
            role,
            children: y
        })}/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);