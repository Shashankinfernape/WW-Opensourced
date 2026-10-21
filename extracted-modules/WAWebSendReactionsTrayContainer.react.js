__d("WAWebSendReactionsTrayContainer.react", [
    "WAWebChatGetters",
    "WAWebErrorBoundary.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebReactionActionsWamEvent",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebSendReactionsTray.react",
    "WAWebSendReactionsTrayNewsletterContainer.react",
    "WAWebWamEnumReactionActionType",
    "WAWebWamMsgUtils",
    "react",
    "react-compiler-runtime",
    "useVisibility",
    "useWAWebReactionTrayState"
], function(t, n, r, o, a, i, l) {
    const e = [
        "userJourneyEntryPoint"
    ];
    let s;
    const u = s || (s = o("react"));
    const s_useEffect = s.useEffect;
    function d(t) {
        const n = o("react-compiler-runtime").c(6);
        const t_userJourneyEntryPoint = t.userJourneyEntryPoint;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const l = r("useVisibility")({
            onVisible: function() {
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayOpen(o("WAWebFrontendMsgGetters").getChat(i.msg).id, i.msg, t_userJourneyEntryPoint);
            }
        });
        const s = l[0];
        if (o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(i.msg))) {
            let c;
            if (n[0] !== i || n[1] !== s) {
                c = o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled() ? u.jsx(o("WAWebSendReactionsTrayNewsletterContainer.react").SendReactionsTrayNewsletterContainer, babelHelpers.extends({
                    ref: s
                }, i)) : null;
                n[0] = i;
                n[1] = s;
                n[2] = c;
            } else {
                c = n[2];
            }
            return c;
        }
        let d;
        if (n[3] !== i || n[4] !== s) {
            d = <M2Component {...babelHelpers.extends({
                ref: s
            }, i)}/>;
            n[3] = i;
            n[4] = s;
            n[5] = d;
        } else {
            d = n[5];
        }
        return d;
    }
    function M2Component(e) {
        const t = o("react-compiler-runtime").c(26);
        const { disableAutoFocus, isInlineMode, msg, onMouseEnter, onMouseLeave, onMouseOver, onShiftTabToMenu, onTabToMenu, ref, rotateFocusArrowsRef, selectedCallback } = e;
        let h;
        let y;
        if (t[0] !== msg) {
            h = function() {
                new (o("WAWebReactionActionsWamEvent")).ReactionActionsWamEvent({
                    mediaType: o("WAWebWamMsgUtils").getWamMediaType(msg),
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(msg),
                    reactionAction: o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE.OPEN_TRAY
                }).commit();
            };
            y = [
                msg
            ];
            t[0] = msg;
            t[1] = h;
            t[2] = y;
        } else {
            h = t[1];
            y = t[2];
        }
        s_useEffect(h, y);
        let C;
        if (t[3] !== msg.id) {
            C = msg.id.toString();
            t[3] = msg.id;
            t[4] = C;
        } else {
            C = t[4];
        }
        const b = r("useWAWebReactionTrayState")(C);
        const { handleSelection, reactionOptions, selectedIndex } = b;
        let L;
        if (t[5] !== handleSelection || t[6] !== selectedCallback) {
            L = function(t) {
                const e = handleSelection(t);
                if (e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                    selectedCallback(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
                    return;
                }
                selectedCallback(t);
            };
            t[5] = handleSelection;
            t[6] = selectedCallback;
            t[7] = L;
        } else {
            L = t[7];
        }
        const E = L;
        let k;
        if (t[8] !== msg) {
            k = o("WAWebMsgGetters").getIsSentByMe(msg);
            t[8] = msg;
            t[9] = k;
        } else {
            k = t[9];
        }
        let I;
        if (t[10] !== disableAutoFocus || t[11] !== isInlineMode || t[12] !== onShiftTabToMenu || t[13] !== onTabToMenu || t[14] !== reactionOptions || t[15] !== rotateFocusArrowsRef || t[16] !== selectedIndex || t[17] !== E || t[18] !== k) {
            const Component = o("WAWebSendReactionsTray.react").SendReactionsTray;
            const Component_1 = o("WAWebErrorBoundary.react").ErrorBoundary;
            I = <Component_1 name="SendReactionsTrayContainer"><Component isInlineMode={isInlineMode} selectedIndex={selectedIndex} selectedCallback={E} reactions={reactionOptions} showMoreOption isParentMsgSentByMe={k} disableAutoFocus={disableAutoFocus} onShiftTabToMenu={onShiftTabToMenu} onTabToMenu={onTabToMenu} rotateFocusArrowsRef={rotateFocusArrowsRef}/></Component_1>;
            t[10] = disableAutoFocus;
            t[11] = isInlineMode;
            t[12] = onShiftTabToMenu;
            t[13] = onTabToMenu;
            t[14] = reactionOptions;
            t[15] = rotateFocusArrowsRef;
            t[16] = selectedIndex;
            t[17] = E;
            t[18] = k;
            t[19] = I;
        } else {
            I = t[19];
        }
        let T;
        if (t[20] !== onMouseEnter || t[21] !== onMouseLeave || t[22] !== onMouseOver || t[23] !== ref || t[24] !== I) {
            T = <div ref={ref} onMouseEnter={onMouseEnter} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>{I}</div>;
            t[20] = onMouseEnter;
            t[21] = onMouseLeave;
            t[22] = onMouseOver;
            t[23] = ref;
            t[24] = I;
            t[25] = T;
        } else {
            T = t[25];
        }
        return T;
    }
    l.SendReactionsTrayContainer = d;
}, 98);