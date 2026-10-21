__d("WAWebQuotedMsg.react", [
    "fbt",
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebCatalogCollection",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebChatThemeModeContext",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactUtils",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebIsInThreadsViewContext",
    "WAWebJumpToQuotedMsgContextStack",
    "WAWebL10N",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageAuthor.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterQuotedMsgUtils",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebQuotedMsgContent.react",
    "WAWebQuotedMsgQuotedMedia.react",
    "WAWebQuotedMsgWrapper.react",
    "WAWebStateUtils",
    "WAWebStatusCollection",
    "WAWebStatusQuotedFlowLoadable",
    "WAWebStylesEnv",
    "WAWebThreadMsgUtils",
    "WAWebThreadsViewFocusMsgContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumStatusRowSection",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "nullthrows",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors",
    "useWAWebMsgValues",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useContext, useEffect } = d;
    const _ = {
        msgBody: {
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            alignItems: "x6s0dn4",
            minHeight: "xpcfgfb",
            maxHeight: "xnwavcm",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        basePadding: {
            paddingTop: "x1tiyuxx",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        macBasePadding: {
            paddingTop: "x123j3cw",
            paddingBottom: "x1ykpatu",
            $$css: true
        },
        elevatedPushNamesPadding: {
            paddingInlineEnd: "x1uc92m",
            $$css: true
        },
        composeBoxMsgBody: {
            maxHeight: "xpulllz",
            paddingTop: "xm7lytj",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x1iwz3mf",
            $$css: true
        },
        macComposeBoxMsgBody: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xdvlbce",
            $$css: true
        },
        composeBoxElevatedPushNamesPadding: {
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        authorRowReverse: {
            flexDirection: "x15zctf7",
            $$css: true
        },
        vibrantOutgoingBar: {
            backgroundColor: "x1p8t8ri",
            $$css: true
        },
        vibrantOutgoingName: {
            color: "x17t9dm2",
            $$css: true
        }
    };
    function f(t) {
        const { chat, composeQuotedMsgRemoteJid, displayType, isMsgVisible, msg, onClick, rootMsg, shouldHideQuotedMsgAuthor, t: t_1 } = t;
        const b = r("useWAWebUIM")();
        const v = useContext(r("WAWebIsInThreadsViewContext"));
        const S = useContext(r("WAWebThreadsViewFocusMsgContext"));
        const R = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebFrontendMsgGetters").getSenderForReplyMsg,
            o("WAWebMsgGetters").getIsGroupStatus
        ]);
        const L = R[0];
        const E = R[1];
        const k = r("useLazyRef")(function() {
            return new (o("WAWebProductCatalogSession")).ProductCatalogSession;
        });
        const I = o("WAWebChatCollection").ChatCollection.get(msg.author);
        const T = o("WAWebContactCollection").ContactCollection.get(msg.author);
        let D = L;
        let x = chat;
        if (E) {
            x = I ?? chat;
            D = T ?? L;
        }
        const $ = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(x);
        useEffect(function() {
            const e = o("WAWebFrontendMsgGetters").getAsProductInquiry(msg.unsafe());
            if (e != null) {
                const t = e.businessOwnerJid;
                const n = r("isStringNullOrEmpty")(t) ? null : o("WAWebWidFactory").createWid(t);
                if (n) {
                    if (t_1 != null) {
                        e.t = t_1;
                    }
                    o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(o("WAWebStateUtils").unproxy(e.unsafe()));
                }
            }
        }, []);
        const P = (t)=>{
            const t_businessOwnerJid = t.businessOwnerJid;
            const n = r("isStringNullOrEmpty")(t_businessOwnerJid) ? null : o("WAWebWidFactory").createWid(t_businessOwnerJid);
            if (n) {
                const a = o("WAWebCatalogCollection").CatalogCollection.get(n);
                if (a) {
                    const i = t.productId != null ? a.productCollection.get(t.productId) : null;
                    const l = t.productId != null ? a.msgProductCollection.get(t.productId) : null;
                    if (!(i == null && l == null)) {
                        let s = l;
                        if (i != null && t_1 != null && i.t >= t_1) {
                            s = i;
                            if (l != null) {
                                a.productCollection.remove(l);
                            }
                        }
                        if (s != null) {
                            const u = o("WAWebProductCatalogContext").buildProductCatalogContext(k.current, o("WAWebContactUtils").getMaybeBizPlatformForLogging(t.businessOwnerJid), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_MESSAGE);
                            o("WAWebProductCatalogLogEvents").logProductInquiryClick({
                                product: o("WAWebStateUtils").unproxy(s),
                                catalogContext: u
                            });
                            o("WAWebUtilsLogQplEvents").qplStartProductView("Message");
                            return o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                                product: s,
                                chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
                                refreshCarousel: true
                            }), {
                                transition: "slide-left",
                                uim: b,
                                newDrawerContext: u
                            });
                        }
                    }
                }
            }
        };
        const handleClick = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                onClick?.();
                if (!(msg.unsafe().local === true && !msg.id.fromMe)) {
                    if (o("WAWebMsgGetters").getIsStatus(msg)) {
                        if (!rootMsg || !rootMsg.isQuotedMsgAvailable) {
                            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                                msg: s._("Status update not found")
                            }));
                        } else {
                            const e = o("WAWebMsgGetters").getSender(msg);
                            if (e != null) {
                                o("WAWebStatusCollection").StatusCollection.find(o("WAWebLidStatusMigrationUtils").matWidConvert(e)).then((e)=>{
                                    const onMsgNotFound = function() {
                                        if (rootMsg) {
                                            rootMsg.unsafe().isQuotedMsgAvailable = false;
                                        }
                                    };
                                    const Component = o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable;
                                    o("WAWebModalManager").ModalManager.openMedia(<Component status={e} msgKey={o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(msg.id)} onMsgNotFound={onMsgNotFound} onClose={function() {
                                        return o("WAWebModalManager").ModalManager.closeMedia();
                                    }} rowSection={o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.QUOTED_MESSAGE_IN_CHAT}/>, {
                                        transition: "quoted-status-modal"
                                    });
                                });
                            }
                        }
                        return;
                    }
                    const t = o("WAWebFrontendMsgGetters").getAsProductInquiry(msg.unsafe());
                    if (t != null) {
                        return P(t);
                    }
                    if (rootMsg && !rootMsg.isQuotedMsgAvailable) {
                        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                            msg: s._("Couldn't find message")
                        }));
                        return;
                    }
                    const n = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
                    const r = yield o("WAWebNewsletterQuotedMsgUtils").getMsgDetailsForSearch(msg);
                    const { msgInStore, quotedMsgKey } = r;
                    if (v) {
                        const m = msgInStore?.id ?? quotedMsgKey;
                        if (S == null || !S(m.id)) {
                            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                                msg: s._("Couldn't find message")
                            }));
                        }
                        return;
                    }
                    g({
                        chat: n,
                        isMsgVisible,
                        msg,
                        msgInStore,
                        quotedMsgKey,
                        rootMsg
                    });
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const clickable = displayType != null && [
            o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
            o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS
        ].includes(displayType);
        const quotedRemoteJid = composeQuotedMsgRemoteJid || rootMsg?.quotedRemoteJid;
        const A = o("WAWebMsgGetters").getSender(msg);
        const F = 1;
        const O = o("useWAWebGroupColors").useGroupsColorStyle(F, "background");
        const B = o("useWAWebDefaultProfileColors").useDefaultProfileColors(A);
        const B_accent = B.accent;
        const q = useContext(r("WAWebChatThemeModeContext"));
        const q_isVibrant = q.isVibrant;
        const V = q_isVibrant && rootMsg != null && rootMsg.id.fromMe;
        const authorBackgroundStyle = V ? _.vibrantOutgoingBar : B_accent ?? O;
        const G = shouldHideQuotedMsgAuthor === true || o("WAWebBotUtils").isMetaAiBot(chat.id) && !(o("WAWebBotUtils").isMetaAiBot(msg.from) || o("WAWebBotUtils").isMetaAiBot(msg.to));
        const z = G === true ? null : c.jsx(r("WAWebMessageAuthor.react"), {
            msgKey: msg.id,
            contact: D ?? L,
            displayType: o("WAWebDisplayType").DISPLAY_TYPE.QUOTED_MSG,
            chat: x,
            quotedRemoteJid,
            disableClick: true,
            showMemberLabel: false,
            senderNameColorOverride: V ? _.vibrantOutgoingName : undefined,
            rootXstyle: r("WAWebL10N").isRTL() && t.theme === "composeBox" && $ ? _.authorRowReverse : undefined
        });
        const t_theme = t.theme;
        const K = (e || (e = r("stylex")))(_.msgBody, t_theme === "composeBox" ? _.composeBoxMsgBody : _.basePadding, t_theme === "composeBox" ? o("WAWebStylesEnv").isOSMac && _.macComposeBoxMsgBody : o("WAWebStylesEnv").isOSMac && _.macBasePadding, $ && (t_theme === "composeBox" ? _.composeBoxElevatedPushNamesPadding : _.elevatedPushNamesPadding));
        const Q = "x1iyjqo2 x6ikm8r x10wlt62 x193iq5w";
        const X = <div className={Q}>{z}{c.jsx(r("WAWebQuotedMsgContent.react"), {
            msg,
            rootMsg,
            shouldHideQuotedMsgCaption: t.shouldHideQuotedMsgCaption,
            theme: t.theme
        })}</div>;
        const Y = displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ? "starred" : t.theme;
        const Component = r("WAWebQuotedMsgWrapper.react");
        return <Component authorBackgroundStyle={authorBackgroundStyle} theme={t.theme} handleClick={handleClick} clickable={clickable} rootMsg={rootMsg}><div className={K} dir={clickable ? null : o("WAWebFrontendMsgGetters").getDir(msg)}>{X}</div>{c.jsx(o("WAWebQuotedMsgQuotedMedia.react").QuotedMediaUnsafe, {
            rootMsg: rootMsg != null ? rootMsg.unsafe() : null,
            msg: msg.unsafe(),
            theme: Y
        })}</Component>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g({ chat, isMsgVisible, msg, msgInStore, quotedMsgKey, rootMsg }) {
        let c;
        if (chat.id.isBot() && o("WAWebBotGating").isAiChatThreadsEnabled() && (c = o("WAWebThreadMsgUtils").getMsgAiThread(msg.unsafe()), c == null)) {
            const m = (msgInStore?.id ?? quotedMsgKey).remote;
            if (rootMsg != null && m.equals(chat.id)) {
                c = o("WAWebThreadMsgUtils").getMsgAiThread(rootMsg.unsafe());
            }
        }
        const p = o("WAWebChatMessageSearch").getSearchContext({
            chat,
            msgKey: msgInStore?.id ?? quotedMsgKey,
            rootMsg: rootMsg?.unsafe(),
            threadId: c
        });
        if (p) {
            p.slideToMsg = true;
        }
        const _ = rootMsg != null && rootMsg.selectedCarouselCardIndex != null;
        if (_) {
            p.highlightMsg = false;
        }
        const f = rootMsg != null ? o("WAWebFrontendMsgGetters").getChat(rootMsg.unsafe()) : null;
        if (f != null && o("WAWebBotUtils").isMetaAiBot(f.id) && c == null && o("WAWebBotGating").isAiChatThreadsEnabled()) {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
        }
        const g = o("WAWebCmd").Cmd.openChatAt({
            chat,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.QuotedMessage,
            msgContext: p,
            onSuccess: {
                mediaMsgToOpenInMediaViewer: o("WAWebMsgCollection").MsgCollection.get(quotedMsgKey),
                onScrollToQuotedCarouselCard: _ ? h(quotedMsgKey, r("nullthrows")(rootMsg?.selectedCarouselCardIndex), isMsgVisible) : undefined
            },
            threadId: c ?? undefined
        });
        if (o("WAWebJumpToQuotedMsgContextStack").isJumpBackToQuotedMsgContextEnabled() && rootMsg != null && rootMsg.id.remote.equals(chat.id)) {
            const y = rootMsg.id;
            g.then((e)=>{
                if (e) {
                    o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.push(chat.id, y);
                }
            });
        }
        if (!msgInStore) {
            p.collection.loadAroundPromise.catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, function() {
                const e = rootMsg?.unsafe();
                const t = e != null ? o("WAWebFrontendMsgGetters").getChat(e) : null;
                if (!(e == null || t == null)) {
                    o("WAWebCmd").Cmd.openChatAt({
                        chat: t,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.QuotedMessage,
                        msgContext: o("WAWebChatMessageSearch").getSearchContext({
                            chat: t,
                            msgKey: e.id,
                            threadId: c
                        }),
                        threadId: c ?? undefined
                    });
                }
            }));
        }
    }
    function h(quotedMsgKey, t, isMsgVisible) {
        if (isMsgVisible != null) {
            const r = isMsgVisible(quotedMsgKey);
            if (!(r == null || typeof r !== "object" || r.scrollToCard == null)) {
                const o = r.scrollToCard;
                o(t);
            }
        }
    }
    l.default = f;
}, 226);