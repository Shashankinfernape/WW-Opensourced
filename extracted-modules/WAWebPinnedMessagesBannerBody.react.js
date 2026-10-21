__d("WAWebPinnedMessagesBannerBody.react", [
    "WAFilteredCatch",
    "WALogger",
    "WAReplaceRepeatingWhitespace",
    "WAWebBaseCollection",
    "WAWebChatMsgSymbol.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFormatMsgText",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaDataGetters",
    "WAWebMediaMsgPreview.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgMentionMap",
    "WAWebMsgModelPropUtils",
    "WAWebName.react",
    "WAWebPinInChatCollection",
    "WAWebPinMsgGatingUtils",
    "WAWebSpoilerRevealLogger",
    "WAWebText.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebListener",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useState } = d;
    function Component({ pinInChat }) {
        const i = r("useWAWebAsync")(function() {
            return o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages([
                pinInChat.parentMsgKey.toString()
            ]).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBaseCollection").CollectionSilentQueryError, function(t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Removing pin in chat with id '",
                    "': ",
                    ""
                ])), pinInChat.id, t.message);
                o("WAWebPinInChatCollection").PinInChatCollection.remove(pinInChat.id);
                return [];
            }));
        }, [
            pinInChat
        ]);
        const l = useState(null);
        const u = l[0];
        const d = l[1];
        const m = i.loading || i.error != null ? null : i.value?.[0];
        if (m != null && m !== u) {
            d(m);
        }
        if (i.error) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to hydrate pin in chat parent message with id '",
                "': ",
                ""
            ])), pinInChat.parentMsgKey, i.error.message);
            return null;
        }
        return u != null && <G9Component msg={u}/>;
    }
    Component.displayName = `${Component.name} [from ${i.id}]`;
    var f = {
        text: {
            fontSize: "x1f6kntn",
            lineHeight: "x1fc57z9",
            display: "x1rg5ohu",
            color: "xhslqc4",
            $$css: true
        },
        content: {
            height: "x5yr21d",
            whiteSpace: "xuxw1ft",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            $$css: true
        },
        mediaPreview: {
            minWidth: "x900493",
            width: "x1useyqa",
            height: "xsdox4t",
            $$css: true
        },
        authorName: {
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        paddingEnd28: {
            paddingInlineEnd: "x5s3kwk",
            $$css: true
        }
    };
    function G9Component(e) {
        let t;
        const e_msg = e.msg;
        const a = o("useWAWebMsgValues").useMsgValues(e_msg.id, [
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebFrontendMsgGetters").getDir,
            o("WAWebFrontendMsgGetters").getRtl,
            (t = o("WAWebMsgGetters")).getIsGroupMsg,
            t.getLatestEditMsgKey,
            t.getAck,
            t.getType
        ]);
        const i = a[0];
        const l = a[1];
        const s = a[2];
        const u = a[3];
        const d = a[4];
        const m = a[5];
        const p = a[6];
        o("useWAWebListener").useListener(e_msg, "change:msgKey", function({ oldKey }) {
            o("WAWebPinInChatCollection").PinInChatCollection.deleteByParentMessageKey(oldKey);
        });
        const _ = [];
        if (u && i != null) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebText.react").WAWebTextMuted;
            _.push(<div className="x78zum5 x11lfxj5"><Component key={i.id.toString()} color="wdsContentDeemphasized" weight="semibold">{c.jsx(o("WAWebName.react").ContactName, {
                xstyle: f.authorName,
                contact: i,
                useShortName: true
            })}</Component><Component_1>:</Component_1></div>);
        }
        if (o("WAWebMsgModelPropUtils").hasSymbol(e_msg.unsafe())) {
            _.push(c.jsx(r("WAWebChatMsgSymbol.react"), {
                msg: e_msg.unsafe()
            }, "msg-symbol"));
        }
        const g = r("WAWebFormatMsgText")({
            msg: e_msg,
            options: {
                unformat: false
            }
        }).toString();
        _.push(c.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: [
                f.text,
                f.paddingEnd28
            ],
            direction: l,
            text: r("WAReplaceRepeatingWhitespace")(g, true),
            dirMismatch: s !== r("WAWebL10N").isRTL(),
            ellipsify: true,
            inlineblock: true,
            formatters: o("WAWebFormatConfiguration").InlineMessage({
                mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(e_msg),
                groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(e_msg),
                messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(e_msg),
                spoilerRevealContext: o("WAWebSpoilerRevealLogger").getSpoilerRevealContext(e_msg)
            })
        }, "text"));
        if (o("WAWebMediaMsgPreview.react").isMediaTypeWithImage(p)) {
            _.push(<H2Component msg={e_msg}/>);
        }
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = r("WAWebVelocityTransitionGroup");
        return <Component_1 transitionName={o("WAWebPinMsgGatingUtils").isNotchIndicatorEnabled() ? "pin-message-refresh" : "pin-message"}><Component key={e_msg.id.toString()} xstyle={f.content} align="center">{_}</Component></Component_1>;
    }
    G9Component.displayName = `${G9Component.name} [from ${i.id}]`;
    function H2Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_msg = e.msg;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e_msg.id, r);
        const mediaData = a[0];
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMediaDataGetters").getPreview,
                o("WAWebMediaDataGetters").getFullPreviewData
            ];
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = o("useWAWebMediaDataValues").useOptionalMediaDataValues(mediaData, l);
        let u;
        let d;
        if (t[2] !== mediaData || t[3] !== e_msg) {
            u = function() {
                if (mediaData != null) {
                    e_msg.downloadMedia({
                        downloadEvenIfExpensive: false,
                        isUserInitiated: false,
                        rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.OTHER
                    });
                }
            };
            d = [
                mediaData,
                e_msg
            ];
            t[2] = mediaData;
            t[3] = e_msg;
            t[4] = u;
            t[5] = d;
        } else {
            u = t[4];
            d = t[5];
        }
        useEffect(u, d);
        if (mediaData == null || s == null) {
            return null;
        }
        const p = s[0];
        const _ = s[1];
        const g = p != null || _ != null;
        if (!g) {
            return null;
        }
        let h;
        if (t[6] !== mediaData) {
            const Component = o("WAWebFlex.react").FlexItem;
            h = <Component xstyle={f.mediaPreview}>{c.jsx(o("WAWebMediaMsgPreview.react").MediaMsgPreview, {
                mediaData
            }, "media-preview")}</Component>;
            t[6] = mediaData;
            t[7] = h;
        } else {
            h = t[7];
        }
        return h;
    }
    l.default = Component;
}, 98);