__d("WAWebMessageGroupedSticker.react", [
    "fbt",
    "WALogger",
    "WAWebAuraGating",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebCopyStickerToClipboard",
    "WAWebCopyToClipboard",
    "WAWebDisplayType",
    "WAWebDropdown.react",
    "WAWebFavoriteStickerAction",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFocusTracer",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentParticipant",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMessageMenu.react",
    "WAWebMessageStickerBubble.react",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgReply",
    "WAWebNoop",
    "WAWebOpenGroupedStickerContactChat",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsPanel.react",
    "WAWebReactionsUtils",
    "WAWebReplyToMsgChatAction",
    "WAWebRevokeMetricUtils",
    "WAWebRound.react",
    "WAWebSendReactionMsgAction",
    "WAWebSendReactionsTray.react",
    "WAWebSendReactionsTrayContainer.react",
    "WAWebSoundStickerUtils",
    "WAWebStateUtils",
    "WAWebStickerUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "WAWebWrapperListeners.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDelete.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcFavoriteFilled.react",
    "WDSIconIcGrade.react",
    "WDSIconIcInfo.react",
    "WDSIconIcMood.react",
    "WDSIconIcPersonReply.react",
    "WDSIconIcReply.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSIconWdsIcSticker.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "cr:7237",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
    "useWAWebIsHoverBarEnabled",
    "useWAWebMessageHoverBar",
    "useWAWebMsgValues",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "ref"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useRef, useState } = m;
    function h(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "reply_privately_icon";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = d.jsx(r("WDSIconIcPersonReply.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    const y = {
        reactIconRefreshed: {
            color: "xhslqc4",
            $$css: true
        }
    };
    const C = {
        REACTION_BUTTON: 75
    };
    function BComponent(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, u);
        const { displayType, menuTransition, msg, onModalClosed, onOpenDeleteFlow, onOpenForwardFlow, rowIsKeyboardFocused } = i;
        const contextOwnerIsKeyboardFocused = rowIsKeyboardFocused === undefined ? false : rowIsKeyboardFocused;
        const ERef = useRef(null);
        const kRef = useRef();
        const IRef = useRef(null);
        const TRef = useRef(null);
        const D = useState(null);
        const x = D[0];
        const $ = D[1];
        const P = useState(false);
        const N = P[0];
        const M = P[1];
        const w = r("useWAWebMessageHoverBar")();
        const A = r("useWAWebIsHoverBarEnabled")();
        const F = useState(null);
        const O = F[0];
        const B = F[1];
        const W = useState(null);
        const q = W[0];
        const U = W[1];
        const V = useState(false);
        const H = V[0];
        const G = V[1];
        const zRef = useRef(null);
        const jRef = useRef(false);
        const KRef = useRef(false);
        const Q = msg.unsafe();
        const X = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebFrontendMsgGetters").getAsRevoked
        ]);
        const Y = X[0];
        if (Y) {
            o("WAWebCmd").Cmd.refreshMessages();
        }
        const J = (t)=>{
            if (zRef.current) {
                r("WAWebFocusTracer").focus(zRef.current, t);
            }
        };
        const Z = r("useWAWebStableCallback")(function() {
            J({
                preventScroll: true
            });
        });
        const ee = r("useWAWebDebouncedCallback")(G, C.REACTION_BUTTON);
        useEffect(function() {
            ee(N || O != null || contextOwnerIsKeyboardFocused);
        }, [
            N,
            O,
            ee,
            contextOwnerIsKeyboardFocused
        ]);
        const te = function(t) {
            M(true);
        };
        const ne = function() {
            M(false);
        };
        const re = function() {
            ee(N || O != null || contextOwnerIsKeyboardFocused);
        };
        const oe = function() {
            o("WAWebCmd").Cmd.msgInfoDrawer(o("WAWebStateUtils").unproxy(Q));
        };
        const ae = function() {
            const e = o("WAWebStateUtils").unproxy(Q);
            const t = o("WAWebFrontendMsgGetters").getChat(e);
            t.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(e);
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
        };
        const ie = function() {
            const t = o("WAWebStateUtils").unproxy(Q);
            r("WAWebReplyToMsgChatAction")(t).catch(()=>o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[private msg reply] failed to privately reply to msg"
                ]))).sendLogs("private-msg-reply-failed"));
        };
        const le = function() {
            const e = o("WAWebStateUtils").unproxy(Q);
            o("WAWebCmd").Cmd.sendStarMsgs(o("WAWebFrontendMsgGetters").getChat(e), [
                e
            ]);
        };
        const se = function() {
            const e = o("WAWebStateUtils").unproxy(Q);
            o("WAWebCmd").Cmd.sendUnstarMsgs(o("WAWebFrontendMsgGetters").getChat(e), [
                e
            ]);
        };
        const ue = function() {
            o("WAWebFavoriteStickerAction").addStickerMsgsToFavorites([
                o("WAWebStateUtils").unproxy(Q)
            ]);
        };
        const ce = function() {
            o("WAWebFavoriteStickerAction").removeStickerMsgFromFavorites(o("WAWebStateUtils").unproxy(Q));
        };
        const de = function() {
            onOpenDeleteFlow(true, Q);
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession();
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
        };
        const me = function() {
            r("WAWebOpenGroupedStickerContactChat")(msg);
        };
        const pe = function() {
            onModalClosed?.();
            B(null);
            Z();
            if (!KRef.current) {
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose();
            }
        };
        const _e = function() {
            onModalClosed?.();
            U(null);
            Z();
            o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose();
            KRef.current = false;
        };
        const fe = r("useWAWebStableCallback")(function(e) {
            if (o("WAWebReactionsUtils").canReactToMessage(e)) {
                const t = function(n) {
                    o("WAWebSendReactionMsgAction").sendReactionToMsg(e, n).then(()=>{
                        o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(n);
                    }).catch((e)=>{});
                    _e();
                };
                const Component = r("WAWebReactionsPanel.react");
                U({
                    dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                    dirX: o("WAWebMsgGetters").getIsSentByMe(e) ? o("WAWebDropdown.react").DirX.LEFT : o("WAWebDropdown.react").DirX.RIGHT,
                    type: o("WAWebDropdown.react").MenuType.ReactionPicker,
                    menu: <Component msgId={e.id.toString()} onSelection={t}/>,
                    flipOnRTL: true,
                    anchor: kRef.current
                });
            }
        });
        const GeComponent = (t, userJourneyEntryPoint)=>{
            if (o("WAWebReactionsUtils").canReactToMessage(t)) {
                const e = function(n) {
                    KRef.current = n === o("WAWebSendReactionsTray.react").MORE_REACTIONS;
                    if (n !== o("WAWebSendReactionsTray.react").MORE_REACTIONS) {
                        o("WAWebSendReactionMsgAction").sendReactionToMsg(t, n).then(()=>{
                            o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(n);
                        }).catch((e)=>{});
                    } else {
                        self.setTimeout(function() {
                            fe(t);
                        }, 150);
                    }
                    pe();
                };
                const Component = o("WAWebSendReactionsTrayContainer.react").SendReactionsTrayContainer;
                const r = {
                    dirY: o("WAWebDropdown.react").DirY.TOP,
                    dirX: o("WAWebDropdown.react").DirX.CENTER,
                    type: o("WAWebDropdown.react").MenuType.ReactionSendTray,
                    menu: <Component msg={Q} selectedCallback={e} onMouseEnter={te} onMouseOver={te} onMouseLeave={ne} userJourneyEntryPoint={userJourneyEntryPoint}/>,
                    flipOnRTL: false,
                    anchor: kRef.current
                };
                B(r);
            }
        };
        const he = function() {
            onModalClosed?.();
            $(null);
            if (jRef.current) {
                jRef.current = false;
                w.onMessageMenuClose(Q.id.toString());
            }
        };
        const Component = r("WDSMenu.react");
        const ye = <Component useMaxWidth={false}>{((e, t, a)=>{
            const i = [];
            const l = o("WAWebStateUtils").unproxy(msg);
            if (o("WAWebMsgGetters").getIsSentByMe(l) && !o("WAWebFrontendMsgGetters").getAsRevoked(l.unsafe())) {
                const Component = r("WDSMenuItem.react");
                i.push(<Component key="info" Icon={r("WDSIconIcInfo.react")} title={s._("Message info")} onPress={oe} testid="mi-msg-info"/>);
            }
            if (o("WAWebMsgReply").canReplyMsg(l.unsafe())) {
                const Component = r("WDSMenuItem.react");
                i.push(<Component key="reply" Icon={r("WDSIconIcReply.react")} title={s._("Reply")} onPress={ae} testid="mi-msg-reply"/>);
            }
            if (o("WAWebMsgReply").canPrivateReply(l.unsafe()) || o("WAWebMsgReply").canPrivateReplyInRestrictedGrp(l.unsafe())) {
                const Component = r("WDSMenuItem.react");
                i.push(<Component key="private_reply" Icon={h} title={s._("Reply privately")} onPress={ie} testid="mi-msg-reply"/>);
            }
            if (o("WAWebMsgGetters").getIsGroupMsg(Q) && Q.author != null && !o("WAWebMsgGetters").getIsSentByMe(Q) && !o("WAWebGroupAgentParticipant").isBotAuthorDirectMessagingBlocked(Q.author, o("WAWebFrontendMsgGetters").getChat(Q))) {
                const Component = r("WDSMenuItem.react");
                i.push(<Component key="author" Icon={r("WDSIconWdsIcChat.react")} title={s._("Message {author}", [
                    s._param("author", o("WAWebMsgModelUtils").getMsgDisplayName(Q))
                ])} onPress={me} testid="mi-msg-author" truncateText/>);
            }
            if (!A && o("WAWebReactionsUtils").canReactToMessage(Q)) {
                const Component = r("WDSMenuItem.react");
                i.push(<Component key="sendReaction" Icon={r("WDSIconIcMood.react")} title={s._("React")} onPress={function() {
                    GeComponent(Q, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_MENU_ITEM_REACTION);
                }} testid="send-reaction-btn"/>);
            }
            if (o("WAWebMsgActionCapability").canForwardMsg(l.unsafe())) {
                const Component = r("WDSMenuItem.react");
                i.push(<Component key="forward" Icon={r("WDSIconIcFastForward.react")} iconDirectional title={s._("_j{\"*\":\"Forward messages\",\"_1\":\"Forward\"}", [
                    s._plural(1)
                ])} onPress={function() {
                    onOpenForwardFlow(true, Q);
                }} testid="mi-msg-forward"/>);
            }
            const Component = r("WDSMenuItem.react");
            const Component_1 = r("WDSMenuItem.react");
            if (o("WAWebMsgActionCapability").canStarMsg(l.unsafe())) {
                if (l.star) {
                    i.push(<Component key="star" Icon={r("WDSIconWdsIcGradeSlash.react")} title={s._("_j{\"*\":\"Unstar messages\",\"_1\":\"Unstar message\"}", [
                        s._plural(1)
                    ])} onPress={se} testid="mi-msg-unstar"/>);
                } else {
                    i.push(<Component_1 key="star" Icon={r("WDSIconIcGrade.react")} title={s._("_j{\"*\":\"Star\"}", [
                        s._plural(1)
                    ])} onPress={le} testid="mi-msg-star"/>);
                }
            }
            if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()) {
                if (o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(msg.filehash)) {
                    const Component = r("WDSMenuItem.react");
                    i.push(<Component key="remove-favorite-sticker" Icon={r("WDSIconIcFavoriteFilled.react")} title={s._("Remove from Favourites")} onPress={ce} testid="mi-remove-favorite-sticker"/>);
                } else if (o("WAWebSoundStickerUtils").canFavoriteStickerMsg(Q) && r("WAWebAuraGating").canUsePremiumSticker(Q.stickerPremiumStatus) && r("WAWebAuraGating").canUsePremiumSticker(Q.mediaData?.stickerPremiumStatus)) {
                    const Component = r("WDSMenuItem.react");
                    i.push(<Component key="favorite-sticker" Icon={r("WDSIconIcFavorite.react")} title={s._("Add to favourites")} onPress={ue} testid="mi-favorite-sticker"/>);
                }
            }
            const c = s._("Copy sticker image");
            const p = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(msg.filehash);
            if (o("WAWebStickerUtils").getStickerFileType((e = msg.mediaData) == null ? undefined : e.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE) {
                const _ = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(msg.filehash);
                if (_ != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard()) {
                    const Component = r("WDSMenuItem.react");
                    i.push(<Component key="copy-favorite-sticker" Icon={r("WDSIconIcContentCopy.react")} title={c} onPress={function() {
                        o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(_);
                    }} testid="mi-copy-favorite-sticker"/>);
                }
            } else {
                if (p != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard()) {
                    const Component = r("WDSMenuItem.react");
                    i.push(<Component key="copy-favorite-sticker" Icon={r("WDSIconIcContentCopy.react")} title={c} onPress={function() {
                        o("WAWebCopyToClipboard").copyImageToClipboard(p);
                    }} testid="mi-copy-favorite-sticker"/>);
                }
            }
            t = msg.mediaData;
            const f = t?.isFirstParty;
            a = msg.mediaData;
            const g = a?.stickerPackId;
            if (g != null && f === true) {
                const Component = r("WDSMenuItem.react");
                i.push(<Component key="open-sticker-pack" Icon={r("WDSIconWdsIcSticker.react")} title={s._("View pack")} onPress={function() {
                    return o("WAWebCmd").Cmd.openStickerPack(g);
                }} testid="mi-open-sticker-pack"/>);
            }
            i.push(d.jsx(r("WDSMenuItem.react"), {
                type: "separator"
            }, "separator"));
            const Component_2 = r("WDSMenuItem.react");
            i.push(<Component_2 key="delete" Icon={r("WDSIconIcDelete.react")} title={s._("_j{\"*\":\"Delete\"}", [
                s._plural(1)
            ])} onPress={de} testid="mi-msg-delete" destructive/>);
            if (n("cr:7237") != null) {
                i.push(d.jsx(r("WDSMenuItem.react"), {
                    type: "separator"
                }, "debug-separator"));
                i.push(...n("cr:7237").getWAWebMessageDebugMenuItems(Q));
            }
            return i;
        })()}</Component>;
        const Ce = r("useWDSMenu")({
            targetRef: TRef,
            menu: ye,
            enableUIM: true,
            onClose: he
        });
        const { menuPortal, openMenu } = Ce;
        const Se = function() {
            if (A) {
                w.onHoverEnd();
                w.onMessageMenuOpen(Q.id.toString());
                jRef.current = true;
            }
            openMenu();
        };
        const Re = r("useWAWebStableCallback")(function() {
            return {
                onReply: ae,
                onEdit: r("WAWebNoop"),
                onMoreOptions: Se,
                menuContent: ye,
                displayType: displayType ?? o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
                returnFocusToMessage: Z
            };
        });
        const Le = function(t) {
            te(t);
            const zRef_current = zRef.current;
            if (!(!A || zRef_current == null || !o("WAWebReactionsBEUtils").canHaveReactions(Q))) {
                const n = o("WAWebStateUtils").unproxy(Q);
                w.onHoverStart(zRef_current, n, o("WAWebMsgGetters").getIsSentByMe(n), Re());
            }
        };
        const Ee = function() {
            ne();
            if (A) {
                w.onHoverEnd();
            }
        };
        const keRef = useRef(null);
        const w_menuOwnerMsgId = w.menuOwnerMsgId;
        useEffect(function() {
            const keRef_current = keRef.current;
            keRef.current = w_menuOwnerMsgId;
            const zRef_current = zRef.current;
            if (!(!A || keRef_current == null || w_menuOwnerMsgId != null || !w.isBarPointerRaised() || zRef_current == null || zRef_current.matches(":hover") !== true || !o("WAWebReactionsBEUtils").canHaveReactions(Q))) {
                const n = o("WAWebStateUtils").unproxy(Q);
                w.onHoverStart(zRef_current, n, o("WAWebMsgGetters").getIsSentByMe(n), Re());
            }
        }, [
            Re,
            w,
            A,
            w_menuOwnerMsgId,
            Q
        ]);
        const TeRef = useRef(false);
        useEffect(function() {
            const e = contextOwnerIsKeyboardFocused && i.isFocused === true;
            if (A) {
                if (!e) {
                    if (TeRef.current) {
                        TeRef.current = false;
                        w.onFocusEnd(Q.id.toString());
                    }
                    return;
                }
                if (!TeRef.current) {
                    const t = zRef.current;
                    if (!(t == null || !o("WAWebReactionsBEUtils").canHaveReactions(Q))) {
                        const n = o("WAWebStateUtils").unproxy(Q);
                        TeRef.current = true;
                        w.onFocusStart(t, n, o("WAWebMsgGetters").getIsSentByMe(n), Re());
                    }
                }
            }
        }, [
            Re,
            w,
            A,
            Q,
            i.isFocused,
            contextOwnerIsKeyboardFocused
        ]);
        r("useWAWebOnUnmount")(function() {
            if (A) {
                if (jRef.current) {
                    jRef.current = false;
                    w.onMessageMenuClose(Q.id.toString());
                }
                if (TeRef.current) {
                    TeRef.current = false;
                    w.onFocusEnd(Q.id.toString());
                }
            }
        });
        const De = function(t) {
            if (A) {
                t.preventDefault();
                Se();
            }
        };
        const xe = function(t, n) {
            i.scrollMsg(t, n);
        };
        const parent = {
            scrollMsg: xe
        };
        useImperativeHandle(t_ref, function() {
            return {
                scrollMsg: xe
            };
        });
        let Pe;
        if (!A && (N || x || contextOwnerIsKeyboardFocused)) {
            const Component = r("WAWebMessageMenu.react");
            Pe = <Component key="icon-context" msg={Q} hasAuthor={false} displayType={i.displayType} ref={ERef} onToggle={function(t) {
                Se();
            }} isGroupedSticker role="button" ariaLabel={s._("Open message options")} isMenuOpen={!!x} tabIndex={0} contextOwnerIsKeyboardFocused={contextOwnerIsKeyboardFocused}/>;
        }
        let Ne;
        if (i.isFocused === true) {
            Ne = d.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, {
                parent
            });
        }
        let Me;
        if (O) {
            const Component = o("WAWebUimUie.react").UIE;
            Me = <Component displayName="MsgReaction" escapable popable dismissOnWindowResize requestDismiss={pe}>{d.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: O
            })}</Component>;
        } else if (q) {
            const Component = o("WAWebUimUie.react").UIE;
            Me = <Component displayName="MsgReactionPicker" escapable popable dismissOnWindowResize requestDismiss={_e}>{d.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: q
            })}</Component>;
        }
        const Component_1 = r("WAWebMessageStickerBubble.react");
        const we = <Component_1 key="sticker-bubble" mediaData={msg.mediaData} msgKey={msg.id} displayAuthor={false} forwardRef={i.forwardRef} animateOnView displayType={i.displayType} onDetailsPaneClosed={onModalClosed} isGroupedSticker/>;
        const Ae = ()=>{
            if (O) {
                pe();
            } else {
                GeComponent(Q, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_REACTION_BUTTON);
            }
        };
        const Fe = [
            we
        ];
        if (!A && o("WAWebReactionsUtils").canReactToMessage(Q)) {
            let Oe = null;
            if (H) {
                const Component = o("WAWebRound.react").Round;
                const Component_1 = r("WAWebFlexItem.react");
                Oe = <Component_1><Component testid="reaction-entry-point" label={s._("React")} theme={o("WAWebRound.react").RoundTheme.QuickActionRefreshed} onClick={function() {
                    return Ae(Q);
                }} small>{d.jsx(r("WDSIconIcMood.react"), {
                    xstyle: y.reactIconRefreshed,
                    height: 20
                })}</Component></Component_1>;
            }
            const Be = <div key="reaction-entry-point" ref={kRef} className="x1n2onr6 xzi7r1p xezl2tj">{Oe}</div>;
            if (o("WAWebMsgGetters").getIsSentByMe(msg)) {
                Fe.unshift(Be);
            } else {
                Fe.push(Be);
            }
        }
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const Component_3 = r("WAWebVelocityTransitionGroup");
        return <div className="x78zum5" data-testid="grouped-sticker-item" onMouseEnter={Le} onFocus={re} onBlur={re} onContextMenu={De} tabIndex={A ? -1 : undefined} ref={zRef} onMouseLeave={Ee}><Component_2>{Fe}</Component_2><div className="x1n2onr6 xe2zdcy" ref={IRef}><Component_3 transitionName={menuTransition}>{Pe}</Component_3><div ref={TRef}/></div>{menuPortal}{Me}{Ne}</div>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    l.default = BComponent;
}, 226);