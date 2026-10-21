__d("WAWebMessageVcard.react", [
    "fbt",
    "WALogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddContactToGroupEligibility",
    "WAWebAddContactToGroupFlowLoadable",
    "WAWebBizBotLogging",
    "WAWebBizCtwaContext.react",
    "WAWebBotBaseGating",
    "WAWebBotProfileCollection",
    "WAWebBusinessProfileGetters",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactEditUtils",
    "WAWebContactLogging",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebContactViewer.react",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebFbtAppName",
    "WAWebFbtCommon",
    "WAWebFileSaver",
    "WAWebFindChatAction",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebInfoFlowLoadable",
    "WAWebInitialsFromNameUtils",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebMediaMissingModal.react",
    "WAWebMediaTypes",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageComponentContext.react",
    "WAWebMessageLogQplEvents",
    "WAWebMessageMeta.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNonEmptyString",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebQueryExistsJob",
    "WAWebStringTruncation",
    "WAWebText.react",
    "WAWebUim",
    "WAWebUseBusinessProfile.react",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebVcardGetNameFromParsed",
    "WAWebVcardParsingUtils",
    "WAWebVcardWidChoiceModal.react",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WAWebWamEnumProfileEntryPoint",
    "WDSButton.react",
    "WDSIconIcDownload.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconWdsIcAiFilled.react",
    "WDSIconWdsIcChat.react",
    "WDSProfilePhoto.react",
    "err",
    "fbs",
    "react",
    "react-compiler-runtime",
    "useWAWebBusinessProfileValues",
    "useWAWebChatValues",
    "useWAWebDefaultProfileColors",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMsgValues",
    "useWAWebProfilePicThumbValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useContext, useEffect, useState } = m;
    const g = "xmeooa7-B";
    const h = {
        subtitleContainer: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            $$css: true
        },
        nameEmoji: {
            verticalAlign: "xg49k01",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function y(t) {
        "use no forget";
        let l;
        let c;
        const { downloadMedia, mediaStage, msgKey, onMessageClick, vcard } = t;
        const E = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (l = o("WAWebMsgGetters")).getVcardFormattedName,
            (c = o("WAWebFrontendMsgGetters")).getRtl,
            c.getDir,
            l.getIsSentByMe,
            l.getIsGroupMsg,
            c.getSenderObj,
            l.getIsVcardOverMmsDocument,
            l.getType,
            l.getIsNewsletterMsg
        ]);
        const T = E[0];
        const D = E[1];
        const x = E[2];
        const $ = E[3];
        const P = E[4];
        const N = E[5];
        const M = E[6];
        const w = E[7];
        const A = E[8];
        const F = c.getMaybeChatByMsgKey(msgKey, A);
        const O = o("useWAWebChatValues").useOptionalChatValues(msgKey.remote, [
            o("WAWebFrontendChatGetters").getTrusted
        ]) ?? [
            false
        ];
        const B = O[0];
        const W = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(vcard);
        const q = o("WAWebVcardParsingUtils").vcardLidWid(vcard);
        const U = !!vcard && o("WAWebVcardParsingUtils").vcardIsBiz(vcard);
        let V = null;
        if (U && o("WAWebBotBaseGating").isBizBot3pEnabled()) {
            V = W.length > 0 ? W[0] : q;
        }
        o("WAWebUseBusinessProfile.react").useBusinessProfile(V);
        const H = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(V, [
            o("WAWebBusinessProfileGetters").getIsBizBot3p
        ])?.[0] === true;
        const G = o("WAWebContactUtils").getContactDataFromVcard(vcard);
        const z = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, [
            "add",
            "remove"
        ], function() {
            if (o("WAWebContactManagementGating").contactManagementEnabled() && G) {
                z();
            }
        });
        const j = useContext(o("WAWebMessageComponentContext.react").MessageComponentContext);
        const j_onSaveContact = j.onSaveContact;
        const Q = w === o("WAWebMsgType").MSG_TYPE.VCARD ? T : null;
        const X = vcard ? o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(vcard) : null;
        const Y = o("WAWebNonEmptyString").asMaybeNonEmptyString(Q) != null || o("WAWebNonEmptyString").asMaybeNonEmptyString(X) != null;
        const J = q != null && !Y ? o("WAWebContactCollection").ContactCollection.get(q)?.username : null;
        const Z = o("WAWebUsernameTypes").isPresentUsername(J) ? o("WAWebUsernameTypes").displayUsername(J) : null;
        const ee = useState(null);
        const te = ee[0];
        const ne = ee[1];
        useEffect(function() {
            if (!(q == null || Y || Z != null)) {
                let t = false;
                o("WAWebQueryExistsJob").queryWidUsernameExists(q).then((e)=>{
                    const n = o("WAWebUsernameTypes").asMaybeUsername(e?.username);
                    if (!t && n != null) {
                        ne(o("WAWebUsernameTypes").displayUsername(n));
                    }
                }).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMessageVcard] vCard title username resolution failed"
                    ]))).catching(t instanceof Error ? t : r("err")(String(t))).sendLogs("vcard-title-username-query-failed", {
                        sampling: 0.01
                    });
                });
                return function() {
                    t = true;
                };
            }
        }, [
            q,
            Y,
            Z
        ]);
        const re = Z ?? te;
        const oe = (t, n)=>{
            const e = (t, n)=>{
                const e = U && n;
                if (e) {
                    o("WAWebMessageLogQplEvents").qplStartProfileView("VCard");
                }
                const forceUsync = U;
                o("WAWebFindChatAction").findOrCreateLatestChat(t, "messageVCard", {
                    forceUsync
                }).then(({ chat })=>{
                    onMessageClick?.();
                    o("WAWebModalManager").ModalManager.close();
                    o("WAWebCmd").Cmd.openChatFromUnread({
                        chat,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Vcard
                    }).then((t)=>{
                        if (!t) {
                            if (e) {
                                o("WAWebMessageLogQplEvents").qplEndProfileView(3);
                            }
                            return;
                        }
                        if (n) {
                            o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                                descriptorType: "info_flow",
                                chat,
                                profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CONTACT_CARD
                            } : d.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                                chat,
                                profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CONTACT_CARD
                            }, `info-${chat.id.toString()}`), {
                                transition: "slide-left",
                                uim: o("WAWebUim").UIM.Manager.getTop(),
                                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                            });
                        }
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
                    }).catch(()=>{
                        if (e) {
                            o("WAWebMessageLogQplEvents").qplEndProfileView(3);
                        }
                    });
                }).catch(()=>{
                    if (e) {
                        o("WAWebMessageLogQplEvents").qplEndProfileView(3);
                    }
                });
            };
            if (!o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() || !t.isLid()) {
                e(t, n);
            } else {
                o("WAWebQueryExistsJob").queryWidUsernameExists(t).then((r)=>{
                    if (r?.username == null) {
                        LComponent();
                    } else {
                        e(t, n);
                    }
                });
            }
        };
        const AeComponent = (t)=>{
            const Component = r("WAWebVcardWidChoiceModal.react");
            if (vcard) {
                if (W.length > 1) {
                    o("WAWebModalManager").ModalManager.open(<Component icon={d.jsx(r("WDSIconWdsIcChat.react"), {
                        directional: true,
                        xstyle: h.icon
                    })} vcard={vcard} onCancel={o("WAWebModalManager").closeModalManager} onSelect={function(n) {
                        return oe(n, t);
                    }}/>);
                } else if (q) {
                    oe(q, t);
                } else if (W.length > 0) {
                    oe(W[0], t);
                }
            }
        };
        const ie = function() {
            if (G) {
                if (G != null && G.lid) {
                    o("WAWebQueryExistsJob").queryWidUsernameExists(G?.lid).then((e)=>{
                        if (e?.username == null) {
                            LComponent();
                        } else if (j_onSaveContact) {
                            j_onSaveContact(G);
                        } else {
                            o("WAWebContactEditUtils").openContactEditDrawer(G, o("WAWebContactLogging").ContactSourceType.VCard);
                        }
                    });
                } else if (j_onSaveContact) {
                    j_onSaveContact(G);
                } else {
                    o("WAWebContactEditUtils").openContactEditDrawer(G, o("WAWebContactLogging").ContactSourceType.VCard);
                }
                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (e != null && F != null) {
                    o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                        msg: e,
                        chat: F,
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.ADD_CONTACT,
                        messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                    });
                }
            }
        };
        const LeComponent = ()=>{
            if (vcard) {
                const e = q ?? W[0];
                if (o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() && e != null) {
                    const t = e.isLid() ? o("WAWebQueryExistsJob").queryWidUsernameExists(e) : o("WAWebQueryExistsJob").queryWidExists(e);
                    t.then((e)=>{
                        if (q != null && e?.username == null) {
                            LComponent();
                            return;
                        }
                        const Component = r("WAWebContactViewer.react");
                        o("WAWebModalManager").ModalManager.open(<Component vcard={vcard} onSaveContact={ie} username={e?.username}/>);
                    }).catch((e)=>{
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAWebMessageVcard] usync query failed"
                        ]))).catching(e instanceof Error ? e : r("err")(String(e))).sendLogs("vcard-username-query-failed", {
                            sampling: 0.01
                        });
                        LComponent();
                    });
                } else {
                    const Component = r("WAWebContactViewer.react");
                    o("WAWebModalManager").ModalManager.open(<Component vcard={vcard} onSaveContact={ie}/>);
                }
            } else {
                const Component = o("WAWebFbtAppName").WAWebAppShortName;
                const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component_1 tsNavigationData={{
                    surface: "unknown",
                    viewName: "vcard-download"
                }} onCancel={o("WAWebModalManager").closeModalManager} onOK={function() {
                    o("WAWebModalManager").ModalManager.close();
                    const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                    if (e != null) {
                        o("WAWebFileSaver").FileSaver.initDownload(e);
                    }
                }} okText={s._("Download")} cancelText={r("WAWebFbtCommon")("Cancel")} title={s._("Download contact?")}>{s._("This contact can't be displayed in {=m1}. Download it to open it with another app on your computer?", [
                    s._implicitParam("=m1", <Component>{s._("")}</Component>)
                ])}</Component_1>);
            }
        };
        const se = (t, n, a)=>{
            const e = {
                label: r("WAWebFbtCommon")("Message"),
                onClick: function() {
                    AeComponent(false);
                    if (H) {
                        o("WAWebBizBotLogging").logBizBot3pContactCardJourneyEvent("message_click");
                    }
                },
                title: o("WAWebNonEmptyString").asMaybeNonEmptyString(t) != null ? s._("Message {author}", [
                    s._param("author", t)
                ]) : r("WAWebFbtCommon")("Message"),
                testid: "message-author-bubble-action"
            };
            if (n === true) {
                const i = {
                    label: s._("View AI"),
                    onClick: function(t) {
                        AeComponent(true);
                        o("WAWebBizBotLogging").logBizBot3pContactCardJourneyEvent("view_ai_click");
                    }
                };
                return [
                    e,
                    i
                ];
            }
            if (U === true) {
                const l = {
                    label: s._("View business"),
                    onClick: function(t) {
                        return AeComponent(true);
                    }
                };
                return [
                    e,
                    l
                ];
            }
            if (o("WAWebContactManagementGating").contactManagementEnabled() && G?.isExistingContact === false) {
                const u = {
                    label: s._("Save contact"),
                    onClick: ie
                };
                return [
                    e,
                    u
                ];
            }
            if (a === true) {
                return [
                    e
                ];
            }
            const c = k(vcard);
            const d = c == null ? null : o("WAWebContactCollection").ContactCollection.get(c);
            if (d == null || F == null || !o("WAWebAddContactToGroupEligibility").isContactAddableToGroup(d, F)) {
                return [
                    e
                ];
            }
            const m = {
                label: s._("Add to group"),
                onClick: function() {
                    IComponent(vcard, F);
                },
                testid: "add-to-group-bubble-action"
            };
            return [
                e,
                m
            ];
        };
        const ue = function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebMediaMissingModal.react"), {
                    msg: e
                }));
            }
        };
        let ce;
        let de;
        let me;
        if (vcard) {
            ce = o("WAWebStringTruncation").truncateAtCodepoints(o("WAWebNonEmptyString").asMaybeNonEmptyString(Q) ?? o("WAWebNonEmptyString").asMaybeNonEmptyString(X) ?? re ?? r("fbs")._("Contact").toString(), 120);
            const ge = W.find((e)=>e.isBot());
            if (ge != null) {
                const ye = o("WAWebBotProfileCollection").BotProfileCollection.get(ge)?.name;
                if (ye != null) {
                    ce = ye;
                }
                me = <div className="x78zum5 x1nxh6w3 x6s0dn4">{s._("AI")}{d.jsx(r("WDSIconWdsIcAiFilled.react"), {
                    width: 13,
                    height: 13,
                    colorName: "contentDeemphasized"
                })}</div>;
            }
            const Ce = q != null;
            if (Ce && o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() || W.length > 0) {
                const be = o("WAWebUserPrefsMeUser").isMeAccount(q) || W.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e));
                de = d.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                    items: se(ce, ge != null || H, be)
                });
            }
        }
        const ve = o("WAWebDisplayType").isWideDisplay(t.displayType);
        const Se = t.quotedMsg ? <div {...babelHelpers.extends({}, {
            0: {
                className: "x1198e8h x1lxpwgx xwoyzhm xw01apr"
            },
            1: {
                className: "x1lxpwgx xwoyzhm xw01apr xdj266r"
            }
        }[!!t.displayAuthor << 0], {
            children: t.quotedMsg
        })}/> : null;
        const Re = t.displayAuthor ? <div {...babelHelpers.extends({}, {
            0: {
                className: "xs9asl8 xzueoph xso031l x1q0q8m5 x120ee7l"
            },
            1: {
                className: "xs9asl8 xso031l x120ee7l xat24cr x1sy0etr"
            }
        }[(Se != null) << 0], {
            children: d.jsx(r("WAWebMessageAuthor.react"), {
                msgKey,
                contact: N,
                displayType: t.displayType
            })
        })}/> : null;
        const Le = t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONTACT_CARD || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
        const Ee = {
            0: "x9f619 x3orp4s x1yrsyyn x1bjonze xwib8y2 x7coems",
            2: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems xh8yej3 x13nahy2",
            1: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x1yuel0x",
            3: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 x1yuel0x"
        }[!!Le << 1 | !!ve << 0];
        const ke = w === o("WAWebMsgType").MSG_TYPE.DOCUMENT && !!M && mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING;
        const Ie = ke || !t.placeholder && (vcard || B);
        const Te = function() {
            if (Ie) {
                if (ke) {
                    ue();
                    return;
                }
                if (H) {
                    AeComponent(true);
                    o("WAWebBizBotLogging").logBizBot3pContactCardJourneyEvent("card_click");
                    return;
                }
                LeComponent();
            }
        };
        const De = true;
        const xe = o("WAWebFormatConfiguration").Compatibility({
            selectable: De,
            emojiXstyle: h.nameEmoji
        });
        const $e = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.getThumbnailWidFromVcard(vcard);
        let Pe;
        if (t.placeholder) {
            Pe = <C downloadMedia={downloadMedia} mediaStage={mediaStage}/>;
        } else {
            Pe = <B2Component name={ce ?? ""} thumbnail={o("WAWebVcardParsingUtils").vcardThumbnail(vcard)} wid={$e}/>;
        }
        let Ne;
        if (t.placeholder === true) {
            Ne = <V2Component mediaStage={mediaStage}/>;
        } else {
            const Component = o("WAWebEmojiText.react").EmojiText;
            const Me = <Component text={ce} element="div" className="x6ikm8r x10wlt62 x1f6kntn x1s688f x19v9tvf x14ug900 xlyipyv xuxw1ft" selectable={De} dirMismatch={D !== r("WAWebL10N").isRTL()} direction={x} formatters={xe}/>;
            Ne = Me;
            if (H) {
                const Component = o("WAWebText.react").WAWebTextMuted;
                Ne = <div>{Me}<Component xstyle={h.subtitleContainer} color="secondary">{s._("AI")}</Component></div>;
            }
        }
        if (t.placeholder) {
            if (mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING) {
                de = d.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                    items: se().map((e)=>babelHelpers.extends({}, e, {
                            onClick: ue
                        }))
                });
            } else {
                de = d.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                    items: [],
                    placeholder: true
                });
            }
        }
        const Component = r("WAWebMessageBubbleHiddenText.react");
        return <Component className={Ee} contact={N} msgKey={msgKey}>{Re}{Se}{d.jsx(r("WAWebBizCtwaContext.react"), {
            msgKey,
            wrapperClass: "x1198e8h x1lxpwgx xahult9 xw01apr"
        })}<div className="x1n2onr6 x78zum5 x6s0dn4 xng8ra x1xegmmw xdzw4kq" data-testid="vcard-msg" role={Ie ? "button" : null} onClick={Te}><div className="x1okw0bk x1g6eq07">{Pe}</div><div className="x12lumcd x6ikm8r x10wlt62">{Ne}{me}</div><div className="x10l6tqk x13niomq x1o583il">{d.jsx(o("WAWebMessageMeta.react").Meta, {
            msgKey
        })}</div></div>{de}</Component>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C(e) {
        const t = o("react-compiler-runtime").c(8);
        const { downloadMedia, mediaStage } = e;
        if (!mediaStage) {
            let i;
            if (t[0] !== downloadMedia) {
                i = <R downloadMedia={downloadMedia}/>;
                t[0] = downloadMedia;
                t[1] = i;
            } else {
                i = t[1];
            }
            return i;
        }
        switch(mediaStage){
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
            case o("WAWebMediaTypes").MediaDataStage.INIT:
                {
                    let l;
                    if (t[2] !== downloadMedia) {
                        l = <R downloadMedia={downloadMedia}/>;
                        t[2] = downloadMedia;
                        t[3] = l;
                    } else {
                        l = t[3];
                    }
                    return l;
                }
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
                {
                    let s;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        s = <S animate type="profileImage"/>;
                        t[4] = s;
                    } else {
                        s = t[4];
                    }
                    return s;
                }
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                {
                    let u;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        u = <S type="profileImage"/>;
                        t[5] = u;
                    } else {
                        u = t[5];
                    }
                    return u;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                {
                    let c;
                    if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                        c = <R downloadMedia={r("WAWebNoop")}/>;
                        t[6] = c;
                    } else {
                        c = t[6];
                    }
                    return c;
                }
            default:
                {
                    let m;
                    if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                        m = <S animate type="profileImage"/>;
                        t[7] = m;
                    } else {
                        m = t[7];
                    }
                    return m;
                }
        }
    }
    function B2Component(e) {
        const n = o("react-compiler-runtime").c(25);
        const { name, thumbnail, wid } = e;
        let s;
        if (n[0] !== wid) {
            s = wid != null ? o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(wid) : null;
            n[0] = wid;
            n[1] = s;
        } else {
            s = n[1];
        }
        const u = s;
        let c;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebProfilePicThumbGetters").getImg
            ];
            n[2] = c;
        } else {
            c = n[2];
        }
        const m = o("useWAWebProfilePicThumbValues").useOptionalProfilePicThumbValues(u?.id, c);
        let p;
        let f;
        if (n[3] !== wid) {
            p = function() {
                if (wid != null) {
                    o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(wid).catch(r("WAWebNoop"));
                }
            };
            f = [
                wid
            ];
            n[3] = wid;
            n[4] = p;
            n[5] = f;
        } else {
            p = n[4];
            f = n[5];
        }
        useEffect(p, f);
        let g;
        if (n[6] !== name || n[7] !== wid) {
            const h = wid != null ? o("WAWebContactCollection").ContactCollection.get(wid) : null;
            g = h != null ? o("WAWebInitialsFromNameUtils").getInitialsFromContact(h) : o("WAWebInitialsFromNameUtils").getInitialsFromNames({
                name,
                shortName: name.split(" ")[0],
                pushname: null
            });
            n[6] = name;
            n[7] = wid;
            n[8] = g;
        } else {
            g = n[8];
        }
        const y = g;
        let C;
        if (n[9] !== y.firstInitial || n[10] !== y.secondInitial) {
            C = [
                y.firstInitial,
                y.secondInitial
            ].filter(Boolean).join("") || undefined;
            n[9] = y.firstInitial;
            n[10] = y.secondInitial;
            n[11] = C;
        } else {
            C = n[11];
        }
        const initials = C;
        const v = m?.[0] ?? thumbnail;
        let color;
        if (n[12] !== wid) {
            color = wid != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(wid) : undefined;
            n[12] = wid;
            n[13] = color;
        } else {
            color = n[13];
        }
        let customColor;
        if (n[14] !== wid) {
            customColor = wid != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(wid) : undefined;
            n[14] = wid;
            n[15] = customColor;
        } else {
            customColor = n[15];
        }
        let L;
        if (n[16] !== wid) {
            L = wid != null ? o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(wid) : undefined;
            n[16] = wid;
            n[17] = L;
        } else {
            L = n[17];
        }
        let E;
        if (n[18] !== initials || n[19] !== name || n[20] !== L || n[21] !== v || n[22] !== color || n[23] !== customColor) {
            E = d.jsx(r("WDSProfilePhoto.react"), {
                type: "person",
                name,
                src: v,
                size: "medium",
                color,
                customColor,
                placeholderIcon: L,
                isDecorative: true,
                initials,
                testid: "vcard_msg_avatar_photo"
            });
            n[18] = initials;
            n[19] = name;
            n[20] = L;
            n[21] = v;
            n[22] = color;
            n[23] = customColor;
            n[24] = E;
        } else {
            E = n[24];
        }
        return E;
    }
    function V2Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_mediaStage = e.mediaStage;
        if (!e_mediaStage) {
            let r;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                r = <S type="body"/>;
                t[0] = r;
            } else {
                r = t[0];
            }
            return r;
        }
        switch(e_mediaStage){
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
            case o("WAWebMediaTypes").MediaDataStage.INIT:
                {
                    let a;
                    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                        a = <S type="body"/>;
                        t[1] = a;
                    } else {
                        a = t[1];
                    }
                    return a;
                }
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
                {
                    let i;
                    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                        i = <S animate type="body"/>;
                        t[2] = i;
                    } else {
                        i = t[2];
                    }
                    return i;
                }
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                {
                    let l;
                    if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                        l = <S type="body"/>;
                        t[3] = l;
                    } else {
                        l = t[3];
                    }
                    return l;
                }
            default:
                {
                    let s;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        s = <S type="body"/>;
                        t[4] = s;
                    } else {
                        s = t[4];
                    }
                    return s;
                }
        }
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(5);
        const { animate, type } = e;
        let a;
        if (t[0] !== animate || t[1] !== type) {
            a = ({
                0: {
                    className: "x1525y1v x1db4oza xg0jo4d xlup9mm xrlxcrs x7g1fbw xxl59ln xmw6rta"
                },
                2: {
                    className: "x1525y1v x1db4oza x1g3ev5e x3ffywh x1c9tyrk xeusxvb x1pahc9y x1ertn4p"
                },
                1: {
                    className: "x1525y1v x1db4oza xg0jo4d xlup9mm xrlxcrs x7g1fbw xxl59ln xmw6rta x7ewcki x1h468ly xrp5g2y x1debuo4 x10e4vud xa4qsjk"
                },
                3: {
                    className: "x1525y1v x1db4oza x1g3ev5e x3ffywh x1c9tyrk xeusxvb x1pahc9y x1ertn4p x7ewcki x1h468ly xrp5g2y x1debuo4 x10e4vud xa4qsjk"
                }
            })[(type === "profileImage") << 1 | !!animate << 0];
            t[0] = animate;
            t[1] = type;
            t[2] = a;
        } else {
            a = t[2];
        }
        let i;
        if (t[3] !== a) {
            i = <div {...babelHelpers.extends({}, a)}/>;
            t[3] = a;
            t[4] = i;
        } else {
            i = t[4];
        }
        return i;
    }
    function R(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_downloadMedia = e.downloadMedia;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Download");
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e_downloadMedia) {
            const Component = r("WDSButton.react");
            i = <Component aria-label={a} Icon={r("WDSIconIcDownload.react")} onPress={function() {
                e_downloadMedia?.();
            }} variant="borderless"/>;
            t[1] = e_downloadMedia;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    var LComponent = ()=>{
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
            surface: "unknown",
            viewName: "vcard-download"
        }} onOK={o("WAWebModalManager").closeModalManager}>{s._("Couldn't load contact information. Please try again later.")}</Component>);
    };
    var E = (t, n)=>{
        const e = (t)=>{
            o("WAWebContactCollection").ContactCollection.find(t).then((e)=>{
                o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebAddContactToGroupFlowLoadable").AddContactToGroupFlowLoadable, {
                    contact: e,
                    chat: n
                }), {
                    transition: "modal-flow"
                });
            });
        };
        if (!o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() || !t.isLid()) {
            e(t);
        } else {
            o("WAWebQueryExistsJob").queryWidUsernameExists(t).then((n)=>{
                if (n?.username == null) {
                    LComponent();
                } else {
                    e(t);
                }
            });
        }
    };
    function k(vcard) {
        const n = o("WAWebVcardParsingUtils").vcardLidWid(vcard);
        return n ?? o("WAWebVcardParsingUtils").vcardPhoneNumberWids(vcard)[0] ?? null;
    }
    function IComponent(vcard, t) {
        const n = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(vcard);
        const a = o("WAWebVcardParsingUtils").vcardLidWid(vcard);
        if (n.length > 1 && vcard) {
            const Component = r("WAWebVcardWidChoiceModal.react");
            o("WAWebModalManager").ModalManager.open(<Component icon={d.jsx(r("WDSIconIcPersonAdd.react"), {
                directional: true
            })} vcard={vcard} onCancel={o("WAWebModalManager").closeModalManager} onSelect={function(n) {
                return E(n, t);
            }}/>);
        } else if (a) {
            E(a, t);
        } else if (n.length > 0) {
            E(n[0], t);
        }
    }
    l.default = y;
}, 226);