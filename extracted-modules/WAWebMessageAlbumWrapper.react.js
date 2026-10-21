__d("WAWebMessageAlbumWrapper.react", [
    "fbt",
    "invariant",
    "WALogger",
    "WAWebABProps",
    "WAWebAddOnBubblesContainer.react",
    "WAWebAppContext.react",
    "WAWebChatGetters",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeModeContext",
    "WAWebCheckBox.react",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDisplayType",
    "WAWebDomScroll",
    "WAWebFbtCommon",
    "WAWebFileSaver",
    "WAWebFocusTracer",
    "WAWebForwardMessageFlowLoadable",
    "WAWebForwardedNewsletterMessageInfoActionButton.react",
    "WAWebFrontendMsgGetters",
    "WAWebGroupChatProfilePicture.react",
    "WAWebKeyboardListHotKeys.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebMediaAlbumGrid.react",
    "WAWebMediaAlbumGridConstants",
    "WAWebMessageAlbumWrapperGroupedSticker.react",
    "WAWebMessageAlbumWrapperMenuContent.react",
    "WAWebMessageAuthor.react",
    "WAWebMessageCheckbox.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageListAlbums",
    "WAWebMessageMenu.react",
    "WAWebMessagePosition",
    "WAWebMessageUiUtils",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebMsgSendFailIcon.react",
    "WAWebMultiSelectBar.react",
    "WAWebNewsletterGatingUtils",
    "WAWebReactionsListeners.react",
    "WAWebReactionsUtils",
    "WAWebRevokeMetricUtils",
    "WAWebRound.react",
    "WAWebStateUtils",
    "WAWebStylesEnv",
    "WAWebThemeContext",
    "WAWebTypesMedia",
    "WAWebVelocityTransitionGroup",
    "WAWebVibrantOutgoingOverrides.stylex",
    "WAWebWrapperGetTailIcon",
    "WAWebWrapperListeners.react",
    "WAWebWrapperMessageActionButtonsRow",
    "WDSFocusStateStyles",
    "WDSIconIcFastForward.react",
    "compactMap",
    "countWhere",
    "cr:7565",
    "react",
    "stylex",
    "useWAWebIsKeyboardUser",
    "useWAWebMsgValues",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s, u) {
    let e;
    let c;
    const d = [
        "ref"
    ];
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = p;
    const { useCallback, useContext, useEffect, useImperativeHandle, useRef, useState } = f;
    const S = {
        svgColorRefreshed: {
            color: "xhslqc4",
            $$css: true
        },
        groupHistoryMessage: {
            "--WDS-systems-bubble-surface-incoming": "x9lmoot",
            "--WDS-systems-bubble-surface-outgoing": "x1ppz1d2",
            $$css: true
        },
        groupHistoryMessageRow: {
            position: "x1n2onr6",
            "::before_content": "x1cpjm7i",
            "::before_position": "x1hmns74",
            "::before_top": "x1y3wzot",
            "::before_bottom": "xhq5o37",
            "::before_insetInlineStart": "xfbisj7",
            "::before_transform": "xnyzbwf",
            "::before_width": "xkeh78v",
            "::before_zIndex": "xy5mcqj",
            $$css: true
        },
        groupHistoryMessageRowLight: {
            "::before_backgroundColor": "xd3jkiw",
            $$css: true
        },
        groupHistoryMessageRowDark: {
            "::before_backgroundColor": "x5cow8b",
            $$css: true
        },
        message: {
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            color: "x14ug900",
            flex: "x1okw0bk",
            fontSize: "x12lqup9",
            lineHeight: "x17fgdl5",
            position: "x1n2onr6",
            $$css: true
        },
        messageHighlightMention: {
            lineHeight: "x19v9tvf",
            $$css: true
        },
        messageTransparent: {
            backgroundColor: "xjbqb8w",
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            borderEndEndRadius: "x1e7945m",
            borderEndStartRadius: "x11o6v7j",
            boxShadow: "x1gnnqk1",
            lineHeight: "x1gwpirc",
            $$css: true
        },
        albumBubbleContainer: {
            maxWidth: "xdduh5l",
            paddingTop: "xyqdw3p",
            paddingInlineEnd: "x1im30kd",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x1djpfga",
            $$css: true
        },
        albumAnnouncementBubbleContainer: {
            maxWidth: "x145dklv",
            $$css: true
        },
        messageBackground: {
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            position: "x1n2onr6",
            zIndex: "x12xzxwr",
            $$css: true
        },
        messageBackgroundIncoming: {
            backgroundColor: "x1ew7x2d",
            $$css: true
        },
        messageBackgroundOutgoing: {
            backgroundColor: "x1g5lz36",
            $$css: true
        },
        bgTailFlatTopLeft: {
            borderStartStartRadius: "x1bczwif",
            $$css: true
        },
        bgTailFlatTopRight: {
            borderStartEndRadius: "x17un8ov",
            $$css: true
        },
        hasBorderBox: {
            boxShadow: "xgdw1sx",
            $$css: true
        },
        tail: {
            display: "x1lliihq",
            height: "x18gnavp",
            position: "x10l6tqk",
            top: "x13vifvy",
            width: "x1xc55vz",
            zIndex: "xupqr0c",
            $$css: true
        },
        tailColorIncoming: {
            color: "x1l1cedg",
            $$css: true
        },
        tailColorOutgoing: {
            color: "x1fa4crm",
            $$css: true
        },
        tailLeft: {
            insetInlineStart: "x7hj1vm",
            left: null,
            right: null,
            $$css: true
        },
        tailRight: {
            insetInlineEnd: "xgvahye",
            left: null,
            right: null,
            $$css: true
        },
        tailLeftSafari: {
            insetInlineStart: "xnj87uo",
            left: null,
            right: null,
            $$css: true
        },
        tailRightSafari: {
            insetInlineEnd: "x13niomq",
            left: null,
            right: null,
            $$css: true
        },
        tailHidden: {
            display: "x1s85apg",
            $$css: true
        }
    };
    function RComponent(t) {
        const t_ref = t.ref;
        const props = babelHelpers.objectWithoutPropertiesLoose(t, d);
        const { albumId, displayType, focusedMsgIndex, isFocusable, isFocusedAlbum, isMsgVisible, msgs, onMessageSelect, position, selectable, selectedMessages, showProfilePicture } = props;
        const M = showProfilePicture === undefined ? true : showProfilePicture;
        const w = o("useWAWebMsgValues").useMsgValues(msgs[0].id, [
            o("WAWebMsgGetters").getIsGroupHistoryMessageInOwnChat,
            o("WAWebMsgGetters").getNewsletterAdminProfile
        ]);
        const A = w[0];
        const F = w[1];
        const O = o("WAWebThemeContext").useIsDarkTheme();
        const B = useState();
        const W = B[0];
        const q = B[1];
        const U = useState(false);
        const V = U[0];
        const H = U[1];
        const G = useState(false);
        const z = G[0];
        const setIsFocused = G[1];
        const K = useState(r("countWhere")(msgs, function(e) {
            return selectedMessages.isSelected(o("WAWebStateUtils").unproxy(e.unsafe()));
        }));
        const Q = K[0];
        const X = K[1];
        const Y = useState();
        const J = Y[0];
        const Z = Y[1];
        const ee = r("useWAWebIsKeyboardUser")();
        const ee_isKeyboardUser = ee.isKeyboardUser;
        const neRef = useRef(true);
        const reRef = useRef();
        const oeRef = useRef({});
        const aeRef = useRef();
        const ieRef = useRef(null);
        const leRef = useRef(null);
        const seRef = useRef();
        const ueRef = useRef(null);
        const ceRef = useRef();
        const deRef = useRef();
        const me = useCallback(function(e) {
            Z(e);
        }, []);
        useEffect(function() {
            if (!neRef.current) {
                o("WAWebMessageUiUtils").getLegacyAlbumRowAriaLabel(msgs).then(me).catch(()=>{});
            }
            neRef.current = false;
        }, [
            me,
            msgs
        ]);
        const pe = useCallback(function(e) {
            if (!e.buttons && !V) {
                H(true);
            }
        }, [
            V
        ]);
        const onFocus = useCallback(function() {
            if (!V) {
                H(true);
            }
        }, [
            V
        ]);
        const fe = useCallback(function() {
            if (V) {
                H(false);
            }
        }, [
            V
        ]);
        const ge = useCallback(function(e) {
            if (reRef.current) {
                r("WAWebFocusTracer").focus(reRef.current, e);
            }
        }, []);
        const handleSelectClick = useCallback(function({ event, mode, selectedMsg }) {
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession();
            if (event) {
                event.stopPropagation();
            }
            if (selectedMsg) {
                onMessageSelect(o("WAWebStateUtils").unproxy(selectedMsg.unsafe()), !selectedMessages.isSelected(o("WAWebStateUtils").unproxy(selectedMsg)), mode, event);
                return;
            }
            const a = Q === 0;
            msgs.forEach((e)=>{
                onMessageSelect(o("WAWebStateUtils").unproxy(e.unsafe()), a, mode, event);
            });
        }, [
            msgs,
            Q,
            selectedMessages,
            onMessageSelect
        ]);
        const handleOpenForwardFlow = useCallback(function(e, t) {
            for(let n = 0; n < msgs.length; n++){
                if (o("WAWebFrontendMsgGetters").getIsUnsentMedia(msgs[n])) {
                    const a = s._("_j{\"*\":\"Wait until the messages finish sending and displays a checkmark before forwarding.\",\"_1\":\"Wait until the message finishes sending and displays a checkmark before forwarding.\"}", [
                        s._plural(1)
                    ]);
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                        surface: "unknown",
                        viewName: "message-album"
                    }} title={s._("Can't forward")} onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")}>{a}</Component>);
                    return;
                }
            }
            if (e) {
                handleSelectClick({
                    mode: o("WAWebMultiSelectBar.react").MultiSelectMode.FORWARD,
                    selectedMsg: t
                });
            } else {
                const Component = o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable;
                o("WAWebModalManager").ModalManager.open(<Component msgs={msgs.map((e)=>e.unsafe())} onClose={o("WAWebModalManager").closeModalManager}/>, {
                    transition: "modal-flow"
                });
            }
        }, [
            handleSelectClick,
            msgs
        ]);
        const handleStar = useCallback(function() {
            o("WAWebCmd").Cmd.sendStarMsgs(o("WAWebFrontendMsgGetters").getChat(msgs[0].unsafe()), msgs.map((e)=>e.unsafe()));
        }, [
            msgs
        ]);
        const handleUnstar = useCallback(function() {
            o("WAWebCmd").Cmd.sendUnstarMsgs(o("WAWebFrontendMsgGetters").getChat(msgs[0].unsafe()), msgs.map((e)=>e.unsafe()));
        }, [
            msgs
        ]);
        const ve = useCallback(function() {
            ge({
                preventScroll: true
            });
        }, [
            ge
        ]);
        const Se = useCallback(function() {
            ve();
        }, [
            ve
        ]);
        const Re = useCallback(function() {
            let e = 0;
            msgs.forEach((t)=>{
                if (selectedMessages.isSelected(o("WAWebStateUtils").unproxy(t.unsafe()))) {
                    e++;
                }
            });
            return e;
        }, [
            msgs,
            selectedMessages
        ]);
        const Le = useCallback(function() {
            const e = msgs[0];
            const t = msgs[1];
            return o("WAWebFrontendMsgGetters").getAsGroupedSticker(e.unsafe()) != null && o("WAWebFrontendMsgGetters").getAsGroupedSticker(t.unsafe()) != null;
        }, [
            msgs
        ]);
        const Ee = useCallback(function(e) {
            let t;
            if (Le()) {
                t = Re();
            } else {
                t = e ? msgs.length : 0;
            }
            if (Q !== t) {
                X(t);
            }
        }, [
            Re,
            Le,
            msgs.length,
            Q
        ]);
        const handleDownload = useCallback(function() {
            o("WAWebFileSaver").FileSaver.initDownload(msgs.map((e)=>e.unsafe()));
        }, [
            msgs
        ]);
        const handleSaveAll = useCallback(function() {
            if (msgs.length !== 0) {
                if (n("cr:7565") != null) {
                    n("cr:7565").selectFolderAndSaveFiles(msgs.map((e)=>e.unsafe())).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to save files: ",
                            ""
                        ])), t);
                    });
                }
            }
        }, [
            msgs
        ]);
        const handleOpenDeleteFlow = useCallback(function(e, t) {
            if (e) {
                handleSelectClick({
                    mode: o("WAWebMultiSelectBar.react").MultiSelectMode.DELETE,
                    selectedMsg: t
                });
            } else {
                o("WAWebModalManager").ModalManager.open(_.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                    chat: o("WAWebFrontendMsgGetters").getChat(msgs[0].unsafe()),
                    msgList: msgs.map((e)=>e.unsafe()),
                    isMsgVisible
                }));
            }
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession();
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
        }, [
            handleSelectClick,
            msgs,
            isMsgVisible
        ]);
        const De = useCallback(function() {
            Se();
            if (ee_isKeyboardUser) {
                H(false);
            }
            q(null);
        }, [
            Se,
            ee_isKeyboardUser
        ]);
        const xe = _.jsx(o("WAWebMessageAlbumWrapperMenuContent.react").WAWebMessageAlbumWrapperMenuContent, {
            msgs,
            handleDownload,
            handleOpenForwardFlow,
            handleStar,
            handleUnstar,
            handleSaveAll,
            handleOpenDeleteFlow
        });
        const $e = r("useWDSMenu")({
            targetRef: ieRef,
            menu: xe,
            contextMenuArea: true,
            enableUIM: true,
            onClose: De
        });
        const { menuPortal, openMenu } = $e;
        const Me = r("useWDSMenu")({
            targetRef: leRef,
            menu: xe,
            enableUIM: true,
            onClose: De
        });
        const { menuPortal: menuPortal_1, openMenu: openMenu_1 } = Me;
        const Fe = function(t) {
            if ((document.getSelection()?.toString() ?? "") === "") {
                t.stopPropagation();
                openMenu(t);
            }
        };
        const Oe = ()=>{
            openMenu_1();
        };
        const Be = useCallback(function() {
            const n = reRef.current?.contains(document.activeElement) ?? false;
            return ee_isKeyboardUser && n;
        }, [
            ee_isKeyboardUser
        ]);
        const We = useCallback(function(e, t) {
            if (e) {
                oeRef.current[t.id.toString()] = e;
            } else {
                delete oeRef.current[t.id.toString()];
            }
        }, []);
        const qe = useCallback(function(e, t) {
            const reRef_current = reRef.current;
            if (reRef_current) {
                const r = reRef_current.offsetParent;
                if (r) {
                    if (!(r instanceof HTMLElement)) {
                        u(0, 56542);
                    }
                    o("WAWebDomScroll").scrollAt(reRef_current, r, t).then(e);
                }
            }
        }, []);
        const highlight = useCallback(function(e) {
            let t;
            if (Le()) {
                if (focusedMsgIndex === 0) {
                    t = ceRef;
                } else if (focusedMsgIndex === 1) {
                    t = deRef;
                }
            } else {
                t = seRef;
            }
            if (t && isFocusable && e !== true) {
                ge({
                    preventScroll: true
                });
            }
        }, [
            Le,
            isFocusable,
            focusedMsgIndex,
            ge
        ]);
        const Ve = useCallback(function() {
            const e = msgs.map((e)=>e.id.toString());
            o("WAWebReactionsUtils").lastMessageReactionChange(e);
            o("WAWebMessageUiUtils").getLegacyAlbumRowAriaLabel(msgs).then(me).catch(()=>{});
        }, [
            msgs,
            me
        ]);
        useImperativeHandle(t_ref, function() {
            return {
                getContainerElement: function() {
                    return reRef.current;
                },
                props,
                refAlbumComponents: oeRef.current,
                isGroupedSticker: Le
            };
        });
        const He = msgs[0];
        const Ge = o("WAWebMsgGetters").getIsSentByMe(He);
        const ze = o("WAWebMsgGetters").getIsGroupMsg(He);
        const je = useContext(r("WAWebChatThemeModeContext"));
        const { bubbleStyle, isMinimalMode, isVibrant } = je;
        const Ye = o("WAWebChatThemeGatingUtils").shouldApplyVibrantOverride({
            isVibrant,
            isSentByMe: Ge,
            isNotification: false
        });
        const isAlbumWrapperKeyboardFocused = Be();
        const numAdditionalMedia = msgs.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? msgs.length - o("WAWebMessageListAlbums").ALBUM_MIN_SIZE + 1 : null;
        const isWide = o("WAWebDisplayType").isWideDisplay(displayType);
        const tt = o("WAWebAppContext.react").useAppContext();
        const tt_rightDrawerOpen = tt.rightDrawerOpen;
        const rt = Le();
        const ot = !isWide && (position === o("WAWebMessagePosition").MsgPosition.FRONT || position === o("WAWebMessagePosition").MsgPosition.SINGLE || rt);
        const at = ze && !Ge && !!ot && displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION && !selectable && He.senderObj?.id != null && M;
        const groupProfilePicture = at ? _.jsx(r("WAWebGroupChatProfilePicture.react"), {
            userContact: He.senderObj,
            chatWid: o("WAWebFrontendMsgGetters").getChat(He.unsafe()).id
        }) : null;
        const lt = rt && ot && (Ge || !ze);
        const st = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
            0: "x78zum5 xdt5ytf x1hx0egp x1h3r9g6 x1ld4j5a x1q6425o x1h2wzp9 x13bx8za xgmf7it xcjqink xg7f59e xxfb629 x141l45o x1n33gsf xa25jmb xg5uraw xt5wqpu x1utqab1 x1ijczrz xqxqsie x10amw33 x1cy8zhl",
            8: "x78zum5 xdt5ytf x1hx0egp x1wxbj4f xds8fti xh1vicy x1rzuvji x1cy8zhl",
            4: "x78zum5 xdt5ytf x1hx0egp x1h3r9g6 x1ld4j5a x1q6425o x1h2wzp9 x13bx8za xgmf7it xcjqink xg7f59e xxfb629 x141l45o x1n33gsf xa25jmb xg5uraw xt5wqpu x1utqab1 x1ijczrz xqxqsie x10amw33 xuk3077",
            12: "x78zum5 xdt5ytf x1hx0egp x1wxbj4f xds8fti xh1vicy x1rzuvji xuk3077",
            2: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl xvc5jky x11t971q x18b33ah x1c1uobl xyri2b x1yuel0x",
            10: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl xvc5jky x11t971q x18b33ah x1c1uobl xyri2b x1yuel0x",
            6: "x78zum5 xdt5ytf x1hx0egp xuk3077 xvc5jky x11t971q x18b33ah x1c1uobl xyri2b x1yuel0x",
            14: "x78zum5 xdt5ytf x1hx0egp xuk3077 xvc5jky x11t971q x18b33ah x1c1uobl xyri2b x1yuel0x",
            1: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl x14hj8or xfwifpm",
            9: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl x14hj8or xfwifpm",
            5: "x78zum5 xdt5ytf x1hx0egp xuk3077 x14hj8or xfwifpm",
            13: "x78zum5 xdt5ytf x1hx0egp xuk3077 x14hj8or xfwifpm",
            3: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl xvc5jky x11t971q x18b33ah x1yuel0x x14hj8or xfwifpm",
            11: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl xvc5jky x11t971q x18b33ah x1yuel0x x14hj8or xfwifpm",
            7: "x78zum5 xdt5ytf x1hx0egp xuk3077 xvc5jky x11t971q x18b33ah x1yuel0x x14hj8or xfwifpm",
            15: "x78zum5 xdt5ytf x1hx0egp xuk3077 xvc5jky x11t971q x18b33ah x1yuel0x x14hj8or xfwifpm"
        }[!o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(He.unsafe())) << 3 | !!Ge << 2 | !!isWide << 1 | !!(tt_rightDrawerOpen && isWide) << 0], {
            [o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME]: isFocusable
        }, "x1n2onr6", {
            0: "",
            1: "x1klvx2g xahtqtb"
        }[(displayType !== o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT) << 0], (m || (m = r("stylex")))(A && S.groupHistoryMessageRow, A && (O ? S.groupHistoryMessageRowDark : S.groupHistoryMessageRowLight)), "xscbp6u", {
            0: "",
            1: "xa0aww2"
        }[((position === o("WAWebMessagePosition").MsgPosition.FRONT || position === o("WAWebMessagePosition").MsgPosition.MID) && !isWide) << 0]);
        const hasAuthor = (!Ge || isWide) && ze || F != null && o("WAWebNewsletterGatingUtils").isNewsletterAdminProfilesReceiverEnabled();
        let ct;
        if (hasAuthor) {
            const dt = {
                0: "xyqdw3p xs9asl8 x25sj25",
                8: "x1ew7x2d x1bczwif xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x13nahy2 x1iorvi4 x2vl965 xg8j3zb x7coems",
                4: "xyqdw3p xs9asl8 x25sj25 x1liijdw x193iq5w x13sqnt3",
                12: "x1ew7x2d xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x1iorvi4 x2vl965 xg8j3zb x7coems x1liijdw x193iq5w x13sqnt3",
                2: "xyqdw3p xs9asl8 x25sj25 x1g5lz36",
                10: "x1bczwif xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x13nahy2 x1iorvi4 x2vl965 xg8j3zb x7coems x1g5lz36",
                6: "xyqdw3p xs9asl8 x25sj25 x1liijdw x193iq5w x13sqnt3 x1g5lz36",
                14: "xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x1iorvi4 x2vl965 xg8j3zb x7coems x1liijdw x193iq5w x13sqnt3 x1g5lz36",
                1: "xyqdw3p x25sj25 x18d9i69",
                9: "x1ew7x2d x1bczwif xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x13nahy2 x1iorvi4 x2vl965 x7coems x18d9i69",
                5: "xyqdw3p x25sj25 x1liijdw x193iq5w x13sqnt3 x18d9i69",
                13: "x1ew7x2d xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x1iorvi4 x2vl965 x7coems x1liijdw x193iq5w x13sqnt3 x18d9i69",
                3: "xyqdw3p x25sj25 x1g5lz36 x18d9i69",
                11: "x1bczwif xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x13nahy2 x1iorvi4 x2vl965 x7coems x1g5lz36 x18d9i69",
                7: "xyqdw3p x25sj25 x1liijdw x193iq5w x13sqnt3 x1g5lz36 x18d9i69",
                15: "xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x1iorvi4 x2vl965 x7coems x1liijdw x193iq5w x13sqnt3 x1g5lz36 x18d9i69"
            }[!!rt << 3 | !!isWide << 2 | !!Ge << 1 | !!(!rt && o("WAWebMsgSelectors").showForwarded(msgs[0])) << 0];
            ct = <div className={dt}>{_.jsx(r("WAWebMessageAuthor.react"), {
                msgKey: msgs[0].id,
                contact: msgs[0].senderObj,
                albumId,
                displayType
            })}</div>;
        }
        const mt = !rt;
        const pt = !A && (Ge || !isMinimalMode);
        const _t = o("WAWebClassnames").classnamesConvertMeToStylexPlease(m(S.message, o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") && S.messageHighlightMention, rt && S.messageTransparent, z && ee_isKeyboardUser && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, A && S.groupHistoryMessage, Ye && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingLiteralStyles.root), m(pt && bubbleStyle));
        const ft = o("WAWebClassnames").classnamesConvertMeToStylexPlease(m(mt && S.messageBackground, mt && !Ge && S.messageBackgroundIncoming, mt && Ge && S.messageBackgroundOutgoing, mt && ot && !Ge && S.bgTailFlatTopLeft, mt && ot && Ge && S.bgTailFlatTopRight, mt && S.hasBorderBox, S.albumBubbleContainer, isWide && S.albumAnnouncementBubbleContainer, Ye && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingTheme));
        let tail;
        if (ot) {
            const Ht = o("WAWebWrapperGetTailIcon").getTailIcon(Ge);
            tail = <Ht xstyle={[
                S.tail,
                Ge ? S.tailColorOutgoing : S.tailColorIncoming,
                Ge ? S.tailRight : S.tailLeft,
                o("WAWebStylesEnv").hasSafariFix && (Ge ? S.tailRightSafari : S.tailLeftSafari),
                lt && S.tailHidden
            ]} containerRef={ueRef} aria-hidden/>;
        }
        const yt = [];
        if (o("WAWebMsgActionCapability").canQuickForwardMsg(He.unsafe())) {
            const Component = o("WAWebRound.react").Round;
            const Ct = <Component label={s._("Forward media")} theme={o("WAWebRound.react").RoundTheme.QuickActionRefreshed} onClick={function() {
                handleOpenForwardFlow(false);
            }}>{_.jsx(r("WDSIconIcFastForward.react"), {
                directional: true,
                xstyle: S.svgColorRefreshed,
                height: 20,
                width: 20,
                testid: "forward-refreshed"
            })}</Component>;
            yt.push(Ct);
        }
        const bt = r("compactMap")(msgs, function(e) {
            return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
        });
        const vt = bt.some((e)=>e.hasReaction === true);
        let St;
        if (V || W || isAlbumWrapperKeyboardFocused) {
            const Component = r("WAWebMessageMenu.react");
            St = <Component key="icon-context" msg={He.unsafe()} hasAuthor={hasAuthor} ref={aeRef} onToggle={function(t) {
                Oe();
            }} role="button" ariaLabel={s._("Open message options")} tabIndex={0} displayType={displayType} isMenuOpen={!!W}/>;
        }
        let Rt;
        if (W) {
            Rt = "none";
        } else if (o("WAWebFrontendMsgGetters").getIsRTL(He)) {
            Rt = "pop-fast-reverse";
        } else {
            Rt = "pop-fast";
        }
        const Lt = s._("Checkbox, {checkbox-state} , for group of images", [
            s._param("checkbox-state", Q > 0 ? "selected" : "unselected")
        ]);
        const Component = r("WAWebMessageCheckbox.react");
        const selected = selectable ? <Component checked={Q > 0} theme={Q > 0 && Q < msgs.length ? o("WAWebCheckBox.react").CheckboxTheme.PARTIAL : undefined} onClick={function(event) {
            handleSelectClick({
                event
            });
        }} ariaLabel={Lt}/> : null;
        let kt;
        if (isFocusedAlbum) {
            kt = _.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, {
                parent: {
                    scrollMsg: qe,
                    highlight
                }
            });
        }
        if (rt) {
            return _.jsx(r("WAWebMessageAlbumWrapperGroupedSticker.react"), {
                msgs,
                albumId,
                albumWrapperClass: st,
                containerClass: _t,
                tail,
                groupProfilePicture,
                author: ct,
                selected,
                selectable,
                selectedMessages,
                menuTransition: Rt,
                isWide,
                isFocusedAlbum,
                focusedMsgIndex,
                isAlbumWrapperKeyboardFocused,
                displayType,
                albumWrapperRef: reRef,
                leftStickerBubbleRef: ceRef,
                rightStickerBubbleRef: deRef,
                handleSelectClick,
                handleSelectChange: Ee,
                handleOpenForwardFlow,
                handleOpenDeleteFlow,
                handleReactionChange: Ve,
                handleModalClosed: Se,
                scrollMsg: qe,
                setIsFocused
            });
        }
        if (bt.length !== msgs.length) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "Only ",
                "/",
                " were valid album messages"
            ])), bt.length, msgs.length).sendLogs("invalid-album-grid");
        }
        let It = null;
        if (bt.length > 0) {
            const parentIds = bt.map((e)=>e.id.toString());
            const Component = r("WAWebAddOnBubblesContainer.react");
            It = <Component isOutgoingMsg={Ge} displayType={displayType} hasReaction={vt} onDetailsPaneClosed={Se} parentIds={parentIds}/>;
        }
        const Dt = bt.length > 0 ? _.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
            msgs: bt,
            showForMessages: false,
            showForAddOns: true,
            displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION
        }) : null;
        const zoomMsg = bt.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? bt[0] : null;
        const Component_1 = r("WAWebMessageForwardedIndicator.react");
        const $t = o("WAWebMsgSelectors").showForwarded(msgs[0]) ? <Component_1 msgKey={msgs[0].id} className={{
            0: "xyqdw3p xg8j3zb x25sj25 xyri2b",
            1: "xg8j3zb x25sj25 xyri2b xexx8yu"
        }[!!hasAuthor << 0]}/> : null;
        const Component_2 = r("WAWebVelocityTransitionGroup");
        const Component_3 = r("WAWebVelocityTransitionGroup");
        const Component_4 = r("WAWebReactionsListeners.react");
        const Pt = <div className={st} data-id={albumId} data-testid="image-album" ref={reRef} aria-label={J} onFocus={function() {
            setIsFocused(true);
        }} onBlur={function() {
            setIsFocused(false);
        }} tabIndex={-1}><Component_2 transitionName="delay-leave">{selected}</Component_2><div className={_t} role="group" ref={ieRef} onContextMenu={Fe} onMouseOver={pe} onFocus={onFocus} onMouseDown={fe} onMouseUp={pe} onMouseLeave={fe}>{tail}{groupProfilePicture}<div className={ft} ref={seRef}>{ct}{$t}<div {...babelHelpers.extends({}, {
            0: {
                className: "xrvj5dj x3qb07v x1p9eum2 x1cdetwm xdduh5l xezivpi"
            },
            1: {
                className: "xrvj5dj x3qb07v x1p9eum2 xu318pe x145dklv x14atkfc"
            }
        }[!!isWide << 0], {
            children: msgs.slice(0, o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL).map((e, t)=>{
                const n = t === o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL - 1 ? {
                    numAdditionalMedia,
                    zoomMsg
                } : null;
                return _.jsx(r("WAWebMediaAlbumGrid.react"), babelHelpers.extends({
                    msgKey: e.id,
                    albumMsgs: bt,
                    albumPosition: o("WAWebMediaAlbumGridConstants").ALBUM_GRID_POSITIONS[t % o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL],
                    isMsgVisible,
                    displayType,
                    ref: function(n) {
                        We(n, e);
                    },
                    albumTheme: o("WAWebTypesMedia").DisplayTheme.Album,
                    currentAlbumMessageIndex: t
                }, n), e.id.toString());
            })
        })}/>{_.jsx(r("WAWebForwardedNewsletterMessageInfoActionButton.react"), {
            msg: msgs[0].unsafe(),
            isAlbum: true
        })}</div><Component_3 transitionName={Rt}>{St}</Component_3><div ref={leRef} className="x10l6tqk xyc4j8s xceh6e4"/>{Dt}{_.jsx(r("WAWebWrapperMessageActionButtonsRow"), {
            isOutgoingMsg: Ge,
            isMsgGallery: false,
            messageActionButtons: yt,
            positionLeft: Ge,
            positionRight: !Ge
        })}</div>{It}<Component_4 msgIds={msgs.map((e)=>e.id.toString())} onReactionChange={Ve}/>{menuPortal}{menuPortal_1}{kt}{_.jsx(o("WAWebWrapperListeners.react").SelectionListener, {
            parent: {
                onSelectChange: Ee
            },
            msgId: msgs[0].id.toString(),
            selectedMessages
        })}</div>;
        const Component_5 = r("WAWebKeyboardRotateFocusArrows.react");
        return <Component_5 role="row">{Pt}</Component_5>;
    }
    RComponent.displayName = `${RComponent.name} [from ${i.id}]`;
    l.default = RComponent;
}, 226);