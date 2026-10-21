__d("WAWebChatLastMsg.react", [
    "fbt",
    "WALogger",
    "WAReplaceRepeatingWhitespace",
    "WAWebAck",
    "WAWebBroadcastNotification.react",
    "WAWebChatLastMsgMediaThumb.react",
    "WAWebChatMsgAck.react",
    "WAWebChatMsgSymbol.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFormatMsgText",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowResponseLastMsg.react",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMessageGroupNotification.react",
    "WAWebMessageNewsletterNotification.react",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgMentionMap",
    "WAWebMsgModelPropUtils",
    "WAWebMsgReply",
    "WAWebMsgType",
    "WAWebName.react",
    "WAWebPreviewFormatGating",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionEmoji.react",
    "WAWebServerPropConstants",
    "WAWebSpoilerGating",
    "WAWebSpoilerNotificationMask",
    "WAWebStateUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWidFactory",
    "WDSIconIcHelp.react",
    "WDSIconWdsIcStatus.react",
    "react",
    "useWAWebAssociatedMessages",
    "useWAWebChatValues",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        center: {
            alignSelf: "xamitd3",
            $$css: true
        },
        marginEnd2: {
            marginInlineEnd: "x16q7b9a",
            $$css: true
        },
        statusIcon: {
            verticalAlign: "x16dsc37",
            $$css: true
        }
    };
    function p(t) {
        "use no forget";
        let i;
        let c;
        let p;
        const f = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
            (c = o("WAWebMsgGetters")).getAck,
            (p = o("WAWebFrontendMsgGetters")).getAsBroadcastNotification,
            p.getAsGroupNotification,
            p.getAsProduct,
            p.getAsRevoked,
            p.getDir,
            c.getIsGroupMsg,
            c.getIsMetaBotInvokeResponse,
            c.getIsNotification,
            c.getIsSentByMe,
            c.getItemCount,
            c.getLatestEditMsgKey,
            p.getRtl,
            c.getSender,
            c.getSize,
            c.getType,
            p.getMediaData,
            c.getMessage,
            c.getIsSpoiler,
            c.getIsVcardOverMmsDocument,
            c.getSmbClientCampaignId,
            c.getIsQuestion,
            c.getNewsletterAdminProfile,
            c.getMediaPngThumbnail,
            c.getHasPaymentQr
        ]);
        const g = f[0];
        const h = f[1];
        const y = f[2];
        const C = f[3];
        const b = f[4];
        const direction = f[5];
        const S = f[6];
        const R = f[7];
        const L = f[8];
        const E = f[9];
        const k = f[10];
        const I = f[11];
        const rtl = f[12];
        const D = f[13];
        const x = f[14];
        const $ = f[15];
        const P = f[16];
        const N = f[17];
        const M = f[18];
        const w = f[19];
        const A = f[20];
        const F = f[21];
        const O = f[22];
        const mediaPngThumbnail = f[23];
        const hasPaymentQr = f[24];
        const { msg, searchQuery } = t;
        const V = searchQuery === undefined ? [] : searchQuery;
        const { msgType, lastAddOnPreview, elevatedPushNamesEnabled } = t;
        const j = elevatedPushNamesEnabled === undefined ? false : elevatedPushNamesEnabled;
        const t_fromCommunity = t.fromCommunity;
        const Q = t_fromCommunity === undefined ? false : t_fromCommunity;
        const X = O?.name ?? t.author;
        const Y = lastAddOnPreview?.type === o("WAWebMsgType").MSG_TYPE.COMMENT || lastAddOnPreview?.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE;
        const J = msgType === "AddOnParentMsg" && !Y;
        const Z = '"';
        const ee = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const te = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled();
        const ne = te && S && o("WAWebMiscGatingUtils").isDropLastNameEnabled();
        const re = o("useWAWebChatValues").useOptionalChatValues(ne && t.groupMetadata == null ? t.msg.id.remote : null, [
            o("WAWebFrontendChatGetters").getGroupMetadata
        ]) ?? [
            null
        ];
        const oe = re[0];
        const ae = ne && (i = t.groupMetadata ?? oe) != null ? i : undefined;
        if ($ === o("WAWebMsgType").MSG_TYPE.DOCUMENT && w && (!P || !P.mediaBlob) && o("WAWebMsgModelPropUtils").isTrusted(msg.unsafe()) && x <= o("WAWebServerPropConstants").MMS_VCARD_AUTODOWNLOAD_SIZE_KB * 1024) {
            msg.downloadMedia({
                downloadEvenIfExpensive: true,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
                isUserInitiated: false
            }).catch((n)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat-last-msg] vcard over mms download failed msgId=",
                    " error=",
                    ""
                ])), t.msg.id, n).tags("messaging").sendLogs("chat-last-message-vcard-download-failed");
            });
        }
        o("useWAWebListener").useListener(A != null ? msg : null, [
            "change:body",
            "change:caption"
        ], ee);
        o("useWAWebListener").useListener($ === o("WAWebMsgType").MSG_TYPE.DOCUMENT && P && w ? P : null, "change:parsedVcards", ee);
        o("useWAWebListener").useListener($ === o("WAWebMsgType").MSG_TYPE.REVOKED ? o("WAWebContactCollection").ContactCollection : null, [
            "add",
            "remove",
            "change:name"
        ], ee);
        const associatedMessages = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(msg.id, o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST);
        const le = [];
        const se = msg.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && (g ?? o("WAWebAck").ACK.CLOCK) < o("WAWebAck").ACK.SENT;
        const ue = E && !b && !Q && msg.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG && !se;
        if (ue && msgType !== "AddOnParentMsg") {
            le.push(d.jsx(r("WAWebChatMsgAck.react"), {
                msg: msg.unsafe(),
                associatedMessages
            }, "symbol"));
        }
        if (msg.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE && msg.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) {
            le.push(d.jsx(r("WAWebGalaxyFlowResponseLastMsg.react"), {
                msg: msg.unsafe()
            }, "galaxy-flow-response"));
        }
        const ce = msgType !== "Search" && (S || R || O != null) && !L && !Q && msg.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG;
        const de = X != null && X !== "" && msgType === "Search";
        if (S && Q) {
            const me = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
            const pe = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(me.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._("Announcements") : me.title();
            le.push(<span className="x78zum5 xeq5yr9 x16q51m2">{d.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: pe,
                direction: "auto",
                ellipsify: true
            }, "group-name")}</span>);
            le.push(<span {...babelHelpers.extends({}, {
                0: {},
                1: {
                    className: "xpk2tj9"
                }
            }[!!r("WAWebL10N").isRTL() << 0], {
                key: "group-divider"
            })}> ▶ </span>);
        }
        if (msg.type === o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION) {
            le.push(d.jsx(r("WAWebMessageNewsletterNotification.react"), {
                msgKey: msg.id
            }, "newsletter-notification"));
        }
        if (msgType === "AddOnParentMsg" && lastAddOnPreview != null) {
            const _e = o("WAWebContactCollection").ContactCollection.gadd(o("WAWebWidFactory").createUserWidOrThrow(lastAddOnPreview.sender));
            if (o("WAWebContactGetters").getIsMe(_e)) {
                switch(lastAddOnPreview.type){
                    case "poll_vote":
                        le.push(<span key="poll_vote_preview_string">{s._("You voted in:")} </span>);
                        break;
                    case "reaction":
                        le.push(<span key="reaction_preview_string">{s._("You reacted {emoji} to:", [
                            s._param("emoji", d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                                reaction: lastAddOnPreview.reactionText
                            }))
                        ])}</span>);
                        break;
                    case "comment":
                        le.push(<span key="comment_preview_string">{s._("You replied to an announcement")}</span>);
                        break;
                    case o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE:
                        {
                            const fe = lastAddOnPreview.eventResponse;
                            if (fe === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING) {
                                const Component = r("WAWebChatMsgSymbol.react");
                                le.push(<span key="event_response_going">{s._("You: {=m1} going to", [
                                    s._implicitParam("=m1", <Component key="msg-symbol" msg={msg.unsafe()}>{s._("")}</Component>)
                                ])}</span>);
                            } else if (fe === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING) {
                                const Component = r("WAWebChatMsgSymbol.react");
                                le.push(<span key="event_response_cant_go">{s._("You: {=m1} not going to", [
                                    s._implicitParam("=m1", <Component key="msg-symbol" msg={msg.unsafe()}>{s._("")}</Component>)
                                ])}</span>);
                            } else if (fe === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE) {
                                const Component = r("WAWebChatMsgSymbol.react");
                                le.push(<span key="event_response_maybe">{s._("You: {=m1} maybe going to", [
                                    s._implicitParam("=m1", <Component key="msg-symbol" msg={msg.unsafe()}>{s._("")}</Component>)
                                ])}</span>);
                            }
                        }
                }
            } else if (S) {
                switch(lastAddOnPreview.type){
                    case "poll_vote":
                        if (lastAddOnPreview.pollHideVoterNames === true) {
                            le.push(<span key="poll_vote_preview_string">{s._("Someone voted in:")} </span>);
                        } else {
                            le.push(<span key="poll_vote_preview_string">{s._("{user-name} voted in:", [
                                s._param("user-name", d.jsx(o("WAWebName.react").Name, {
                                    contact: _e,
                                    useShortName: true,
                                    showNotifyName: j,
                                    elevatedPushNamesEnabled: j
                                }, "author"))
                            ])} </span>);
                        }
                        break;
                    case "reaction":
                        le.push(<span key="reaction_preview_string">{s._("{user-name} reacted {emoji} to:", [
                            s._param("user-name", d.jsx(o("WAWebName.react").Name, {
                                contact: _e,
                                useShortName: true,
                                showNotifyName: j,
                                elevatedPushNamesEnabled: j
                            }, "author")),
                            s._param("emoji", d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                                reaction: lastAddOnPreview.reactionText
                            }))
                        ])}</span>);
                        break;
                    case "comment":
                        le.push(<span key="comment_preview_string">{s._("{user-name} replied to an announcement", [
                            s._param("user-name", d.jsx(o("WAWebName.react").Name, {
                                contact: _e,
                                showNotifyName: j,
                                elevatedPushNamesEnabled: j
                            }, "author"))
                        ])}</span>);
                        break;
                    case "event_response":
                        {
                            const ge = lastAddOnPreview.eventResponse;
                            if (ge === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING) {
                                const Component = r("WAWebChatMsgSymbol.react");
                                le.push(<span key="event_response_going">{s._("{user-name}: {=m2} going to", [
                                    s._param("user-name", d.jsx(o("WAWebName.react").Name, {
                                        contact: _e,
                                        showNotifyName: j,
                                        elevatedPushNamesEnabled: j
                                    }, "author")),
                                    s._implicitParam("=m2", <Component key="msg-symbol" msg={msg.unsafe()}>{s._("")}</Component>)
                                ])}</span>);
                            } else if (ge === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING) {
                                const Component = r("WAWebChatMsgSymbol.react");
                                le.push(<span key="event_response_cant_go">{s._("{user-name}: {=m2} not going to", [
                                    s._param("user-name", d.jsx(o("WAWebName.react").Name, {
                                        contact: _e,
                                        showNotifyName: j,
                                        elevatedPushNamesEnabled: j
                                    }, "author")),
                                    s._implicitParam("=m2", <Component key="msg-symbol" msg={msg.unsafe()}>{s._("")}</Component>)
                                ])}</span>);
                            } else if (ge === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE) {
                                const Component = r("WAWebChatMsgSymbol.react");
                                le.push(<span key="event_response_maybe">{s._("{user-name}: {=m2} maybe going to", [
                                    s._param("user-name", d.jsx(o("WAWebName.react").Name, {
                                        contact: _e,
                                        showNotifyName: j,
                                        elevatedPushNamesEnabled: j
                                    }, "author")),
                                    s._implicitParam("=m2", <Component key="msg-symbol" msg={msg.unsafe()}>{s._("")}</Component>)
                                ])}</span>);
                            }
                        }
                }
            } else {
                switch(lastAddOnPreview.type){
                    case "poll_vote":
                        le.push(<span key="poll_vote_preview_string">{s._("Voted in:")} </span>);
                        break;
                    case "reaction":
                        le.push(<span key="reaction_preview_string">{s._("Reacted {emoji} to:", [
                            s._param("emoji", d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                                reaction: lastAddOnPreview.reactionText
                            }))
                        ])}</span>);
                        break;
                    case "event_response":
                        {
                            const he = lastAddOnPreview.eventResponse;
                            if (he === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING) {
                                le.push(<span key="event_response_going">{d.jsx(r("WAWebChatMsgSymbol.react"), {
                                    msg: msg.unsafe()
                                }, "msg-symbol")}{s._("Going to")}</span>);
                            } else if (he === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING) {
                                le.push(<span key="event_response_cant_go">{d.jsx(r("WAWebChatMsgSymbol.react"), {
                                    msg: msg.unsafe()
                                }, "msg-symbol")}{s._("Not going to")}</span>);
                            } else if (he === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE) {
                                le.push(<span key="event_response_maybe">{d.jsx(r("WAWebChatMsgSymbol.react"), {
                                    msg: msg.unsafe()
                                }, "msg-symbol")}{s._("Maybe going to")}</span>);
                            }
                        }
                }
            }
            le.push(<span key="add_on_space_after_preview"> </span>);
        }
        const ye = D ? o("WAWebContactCollection").ContactCollection.get(D) : null;
        if ((ce || de) && msgType !== "AddOnParentMsg") {
            if (ce) {
                if (O) {
                    le.push(d.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: X,
                        direction: "auto"
                    }, "author-text"));
                } else if (ye) {
                    le.push(d.jsx(o("WAWebName.react").Name, {
                        contact: ye,
                        useShortName: true,
                        showNotifyName: j,
                        elevatedPushNamesEnabled: j
                    }, "author-name"));
                } else {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[chat-last-msg] sender null msgId=",
                        " getSender=",
                        ""
                    ])), t.msg.id, D?.toLogString()).tags("messaging").sendLogs("chat-last-message-missing-sender");
                }
            } else if (de) {
                le.push(d.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: X,
                    direction: "auto"
                }, "author-text"));
            }
            if (ce && (ye || O) || de) {
                le.push(<span key="divider">: </span>);
            }
        }
        if (J) {
            le.push(Z);
        }
        if (o("WAWebMsgReply").isStatusReplyMsg(msg.unsafe())) {
            le.push(d.jsx(r("WDSIconWdsIcStatus.react"), {
                height: 16,
                width: 16,
                displayInline: true,
                xstyle: [
                    m.center,
                    m.marginEnd2,
                    m.statusIcon
                ]
            }, "status-reply"));
        }
        if (F) {
            le.push(d.jsx(r("WAWebChatMsgSymbol.react"), {
                msg: msg.unsafe(),
                overrideIcon: d.jsx(r("WDSIconIcHelp.react"), {
                    width: 18,
                    height: 20
                })
            }, "question-symbol"));
        }
        if (o("WAWebMsgModelPropUtils").hasSymbol(msg.unsafe()) && !Y) {
            le.push(d.jsx(r("WAWebChatLastMsgMediaThumb.react"), {
                type: $,
                mediaData: P,
                mediaPngThumbnail,
                hasPaymentQr,
                isChatListRow: msgType === "LastMessage" || msgType === "AddOnParentMsg",
                fallback: d.jsx(r("WAWebChatMsgSymbol.react"), {
                    msg: msg.unsafe()
                })
            }, "msg-symbol"));
        }
        if ($ === "order" && k != null) {
            le.push(<div key="item-count">{s._("_j{\"*\":\"{count} items\",\"_1\":\"1 item\"}", [
                s._plural(k || 0, "count")
            ])}{N ? <span key="item-divider">: </span> : null}</div>);
        }
        if (y != null) {
            le.push(d.jsx(r("WAWebMessageGroupNotification.react"), {
                msg: y,
                clickable: false,
                isLastMsg: true
            }, "status-group-notification"));
        } else if (h != null) {
            le.push(d.jsx(r("WAWebBroadcastNotification.react"), {
                msgKey: h.id,
                clickable: false,
                isLastMsg: true
            }, "broadcast_notification"));
        } else if (lastAddOnPreview?.type !== "comment") {
            const Ce = b;
            const be = {
                0: "",
                1: "x1k4tb9n"
            }[(Ce != null) << 0];
            const ve = msgType === "AddOnParentMsg" ? "LastMessage" : msgType;
            const mentions = o("WAWebMsgMentionMap").calculateMsgMentionMap(msg);
            let Re = r("WAWebFormatMsgText")({
                msg: o("WAWebStateUtils").unproxy(msg.unsafe()),
                associatedMessages,
                options: {
                    unformat: !te,
                    formatAsLastMsg: lastAddOnPreview == null,
                    formatAsSearchResult: msgType === "Search",
                    searchQuery: V
                }
            }).toString();
            if (J) {
                Re = rtl !== r("WAWebL10N").isRTL() && !o("WAWebMsgModelPropUtils").hasSymbol(msg.unsafe()) ? `${Z}${Re}` : `${Re}${Z}`;
            }
            const Le = {
                className: be,
                direction,
                text: r("WAReplaceRepeatingWhitespace")(Re, true),
                dirMismatch: rtl !== r("WAWebL10N").isRTL(),
                formatters: o("WAWebFormatConfiguration")[ve](babelHelpers.extends({
                    mentions,
                    groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(msg),
                    groupMetadata: ae,
                    terms: V,
                    selectable: false,
                    messageHasSpoiler: M
                }, ve === "Search" ? {
                    previewRichFormat: true
                } : {})),
                inlineblock: true,
                ellipsify: true,
                previewMode: te
            };
            le.push(d.createElement(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, Le, {
                key: "status-text"
            })));
        }
        const Ee = _({
            associatedMessages,
            isSpoiler: M,
            msg: o("WAWebStateUtils").unproxy(msg.unsafe()),
            msgType,
            rtl
        });
        return <span className="x78zum5 x1cy8zhl" title={Ee} data-testid="last-msg-status">{le}</span>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _({ associatedMessages, isSpoiler, msg, msgType, rtl }) {
        const s = isSpoiler && o("WAWebSpoilerGating").isSpoilerReceiverEnabled();
        const u = r("WAWebFormatMsgText")({
            msg,
            associatedMessages,
            options: {
                formatAsSearchResult: msgType === "Search",
                spoilerReplacement: s ? o("WAWebSpoilerNotificationMask").BRAILLE_MASK : undefined
            }
        }).toString() || "";
        return r("WAWebL10N").embedDir(u, rtl);
    }
    l.default = p;
}, 226);