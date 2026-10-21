__d("WAWebMessageAlbumWrapperGroupedSticker.react", [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebMessageGroupedSticker.react",
    "WAWebMessageGroupedStickerCheckbox.react",
    "WAWebMessageUiUtils",
    "WAWebMsgSendFailIcon.react",
    "WAWebReactionsListeners.react",
    "WAWebReactionsUtils",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebVelocityTransitionGroup",
    "WAWebWrapperListeners.react",
    "nullthrows",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useRef = e.useRef;
    function c(e) {
        const t = o("react-compiler-runtime").c(100);
        const { albumId, albumWrapperClass, albumWrapperRef, author, containerClass, displayType, focusedMsgIndex, groupProfilePicture, handleModalClosed, handleOpenDeleteFlow, handleOpenForwardFlow, handleReactionChange, handleSelectChange, handleSelectClick, isAlbumWrapperKeyboardFocused, isFocusedAlbum, isWide, leftStickerBubbleRef, menuTransition, msgs, rightStickerBubbleRef, scrollMsg, selectable, selected, selectedMessages, setIsFocused, tail } = e;
        const w = e_useRef(null);
        const A = e_useRef(null);
        const F = msgs[0];
        const O = msgs[1];
        let B;
        if (t[0] !== handleSelectChange || t[1] !== msgs || t[2] !== selectedMessages) {
            let W;
            if (t[4] !== handleSelectChange || t[5] !== selectedMessages) {
                W = function(t) {
                    return s.jsx(o("WAWebWrapperListeners.react").SelectionListener, {
                        parent: {
                            onSelectChange: handleSelectChange
                        },
                        msgId: t.id.toString(),
                        selectedMessages
                    }, t.id.toString());
                };
                t[4] = handleSelectChange;
                t[5] = selectedMessages;
                t[6] = W;
            } else {
                W = t[6];
            }
            B = msgs.map(W);
            t[0] = handleSelectChange;
            t[1] = msgs;
            t[2] = selectedMessages;
            t[3] = B;
        } else {
            B = t[3];
        }
        const q = B;
        let U;
        if (t[7] !== F.mediaData || t[8] !== F.type) {
            U = F.type === "sticker" ? o("WAWebMessageUiUtils").getStickerCustomLabel(F.mediaData.accessibilityLabel, F.mediaData.emojis?.join(" ")) : null;
            t[7] = F.mediaData;
            t[8] = F.type;
            t[9] = U;
        } else {
            U = t[9];
        }
        const H = U;
        let G;
        if (t[10] !== O.mediaData || t[11] !== O.type) {
            G = O.type === "sticker" ? o("WAWebMessageUiUtils").getStickerCustomLabel(O.mediaData.accessibilityLabel, O.mediaData.emojis?.join(" ")) : null;
            t[10] = O.mediaData;
            t[11] = O.type;
            t[12] = G;
        } else {
            G = t[12];
        }
        const j = G;
        let K;
        if (t[13] !== F || t[14] !== H || t[15] !== handleSelectClick || t[16] !== selectable || t[17] !== selectedMessages) {
            const Component = r("WAWebMessageGroupedStickerCheckbox.react");
            K = selectable ? <Component checked={selectedMessages.isSelected(o("WAWebStateUtils").unproxy(F.unsafe()))} onClick={function(t) {
                handleSelectClick({
                    selectedMsg: F.unsafe()
                });
            }} ariaLabel={H}/> : null;
            t[13] = F;
            t[14] = H;
            t[15] = handleSelectClick;
            t[16] = selectable;
            t[17] = selectedMessages;
            t[18] = K;
        } else {
            K = t[18];
        }
        const Q = K;
        let X;
        if (t[19] !== handleSelectClick || t[20] !== O || t[21] !== j || t[22] !== selectable || t[23] !== selectedMessages) {
            const Component = r("WAWebMessageGroupedStickerCheckbox.react");
            X = selectable ? <Component checked={selectedMessages.isSelected(o("WAWebStateUtils").unproxy(O.unsafe()))} onClick={function(t) {
                handleSelectClick({
                    selectedMsg: O.unsafe()
                });
            }} ariaLabel={j}/> : null;
            t[19] = handleSelectClick;
            t[20] = O;
            t[21] = j;
            t[22] = selectable;
            t[23] = selectedMessages;
            t[24] = X;
        } else {
            X = t[24];
        }
        const Y = X;
        let J;
        if (t[25] !== msgs) {
            J = msgs.some(m) ? s.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
                msgs,
                showForMessages: false,
                showForAddOns: true,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION
            }) : null;
            t[25] = msgs;
            t[26] = J;
        } else {
            J = t[26];
        }
        const Z = J;
        let ee;
        if (t[27] !== isWide) {
            ee = ({
                0: "x78zum5 x1q0g3np x1a02dak",
                1: "x78zum5 x1q0g3np x1a02dak xl56j7k"
            })[!!isWide << 0];
            t[27] = isWide;
            t[28] = ee;
        } else {
            ee = t[28];
        }
        const te = ee;
        let ne;
        let re;
        if (t[29] !== setIsFocused) {
            ne = function() {
                setIsFocused(true);
            };
            re = function() {
                setIsFocused(false);
            };
            t[29] = setIsFocused;
            t[30] = ne;
            t[31] = re;
        } else {
            ne = t[30];
            re = t[31];
        }
        let oe;
        if (t[32] !== selected) {
            const Component = r("WAWebVelocityTransitionGroup");
            oe = <Component transitionName="delay-leave">{selected}</Component>;
            t[32] = selected;
            t[33] = oe;
        } else {
            oe = t[33];
        }
        let ae;
        if (t[34] === Symbol.for("react.memo_cache_sentinel")) {
            ae = function() {
                return w.current?.startAnimation();
            };
            t[34] = ae;
        } else {
            ae = t[34];
        }
        let ie;
        if (t[35] === Symbol.for("react.memo_cache_sentinel")) {
            ie = {
                className: "x1n2onr6"
            };
            t[35] = ie;
        } else {
            ie = t[35];
        }
        let le;
        if (t[36] !== Q) {
            const Component = r("WAWebVelocityTransitionGroup");
            le = <Component transitionName="delay-leave">{Q}</Component>;
            t[36] = Q;
            t[37] = le;
        } else {
            le = t[37];
        }
        let se;
        if (t[38] !== F) {
            se = r("nullthrows")(o("WAWebFrontendMsgGetters").getAsGroupedSticker(F.unsafe()));
            t[38] = F;
            t[39] = se;
        } else {
            se = t[39];
        }
        const ue = isFocusedAlbum && focusedMsgIndex === 0;
        let ce;
        if (t[40] !== displayType || t[41] !== handleModalClosed || t[42] !== handleOpenDeleteFlow || t[43] !== handleOpenForwardFlow || t[44] !== isAlbumWrapperKeyboardFocused || t[45] !== menuTransition || t[46] !== scrollMsg || t[47] !== se || t[48] !== ue) {
            const Component = r("WAWebMessageGroupedSticker.react");
            ce = <Component msg={se} menuTransition={menuTransition} onOpenForwardFlow={handleOpenForwardFlow} onOpenDeleteFlow={handleOpenDeleteFlow} scrollMsg={scrollMsg} isFocused={ue} forwardRef={w} displayType={displayType} rowIsKeyboardFocused={isAlbumWrapperKeyboardFocused} onModalClosed={handleModalClosed}/>;
            t[40] = displayType;
            t[41] = handleModalClosed;
            t[42] = handleOpenDeleteFlow;
            t[43] = handleOpenForwardFlow;
            t[44] = isAlbumWrapperKeyboardFocused;
            t[45] = menuTransition;
            t[46] = scrollMsg;
            t[47] = se;
            t[48] = ue;
            t[49] = ce;
        } else {
            ce = t[49];
        }
        let de;
        if (t[50] !== leftStickerBubbleRef || t[51] !== le || t[52] !== ce) {
            de = <div {...babelHelpers.extends({
                onMouseEnter: ae,
                role: "img"
            }, ie, {
                ref: leftStickerBubbleRef,
                children: [
                    le,
                    ce
                ]
            })}/>;
            t[50] = leftStickerBubbleRef;
            t[51] = le;
            t[52] = ce;
            t[53] = de;
        } else {
            de = t[53];
        }
        let me;
        if (t[54] === Symbol.for("react.memo_cache_sentinel")) {
            me = function() {
                return A.current?.startAnimation();
            };
            t[54] = me;
        } else {
            me = t[54];
        }
        let pe;
        if (t[55] === Symbol.for("react.memo_cache_sentinel")) {
            pe = {
                className: "x1n2onr6"
            };
            t[55] = pe;
        } else {
            pe = t[55];
        }
        let _e;
        if (t[56] !== Y) {
            const Component = r("WAWebVelocityTransitionGroup");
            _e = <Component transitionName="delay-leave">{Y}</Component>;
            t[56] = Y;
            t[57] = _e;
        } else {
            _e = t[57];
        }
        let fe;
        if (t[58] !== O) {
            fe = r("nullthrows")(o("WAWebFrontendMsgGetters").getAsGroupedSticker(O.unsafe()));
            t[58] = O;
            t[59] = fe;
        } else {
            fe = t[59];
        }
        const ge = isFocusedAlbum && focusedMsgIndex === 1;
        let he;
        if (t[60] !== displayType || t[61] !== handleModalClosed || t[62] !== handleOpenDeleteFlow || t[63] !== handleOpenForwardFlow || t[64] !== isAlbumWrapperKeyboardFocused || t[65] !== menuTransition || t[66] !== scrollMsg || t[67] !== fe || t[68] !== ge) {
            const Component = r("WAWebMessageGroupedSticker.react");
            he = <Component msg={fe} menuTransition={menuTransition} onOpenForwardFlow={handleOpenForwardFlow} onOpenDeleteFlow={handleOpenDeleteFlow} scrollMsg={scrollMsg} isFocused={ge} forwardRef={A} displayType={displayType} rowIsKeyboardFocused={isAlbumWrapperKeyboardFocused} onModalClosed={handleModalClosed}/>;
            t[60] = displayType;
            t[61] = handleModalClosed;
            t[62] = handleOpenDeleteFlow;
            t[63] = handleOpenForwardFlow;
            t[64] = isAlbumWrapperKeyboardFocused;
            t[65] = menuTransition;
            t[66] = scrollMsg;
            t[67] = fe;
            t[68] = ge;
            t[69] = he;
        } else {
            he = t[69];
        }
        let ye;
        if (t[70] !== rightStickerBubbleRef || t[71] !== _e || t[72] !== he) {
            ye = <div {...babelHelpers.extends({
                onMouseEnter: me,
                role: "img"
            }, pe, {
                ref: rightStickerBubbleRef,
                children: [
                    _e,
                    he
                ]
            })}/>;
            t[70] = rightStickerBubbleRef;
            t[71] = _e;
            t[72] = he;
            t[73] = ye;
        } else {
            ye = t[73];
        }
        let msgIds;
        if (t[74] !== msgs) {
            msgIds = msgs.map(d);
            t[74] = msgs;
            t[75] = msgIds;
        } else {
            msgIds = t[75];
        }
        let be;
        if (t[76] !== handleReactionChange || t[77] !== msgIds) {
            const Component = r("WAWebReactionsListeners.react");
            be = <Component msgIds={msgIds} onReactionChange={handleReactionChange}/>;
            t[76] = handleReactionChange;
            t[77] = msgIds;
            t[78] = be;
        } else {
            be = t[78];
        }
        let ve;
        if (t[79] !== te || t[80] !== de || t[81] !== ye || t[82] !== be) {
            ve = <div className={te}>{de}{ye}{be}</div>;
            t[79] = te;
            t[80] = de;
            t[81] = ye;
            t[82] = be;
            t[83] = ve;
        } else {
            ve = t[83];
        }
        let Se;
        if (t[84] !== author || t[85] !== containerClass || t[86] !== groupProfilePicture || t[87] !== Z || t[88] !== ve || t[89] !== tail) {
            Se = <div className={containerClass} role="group" onContextMenu={o("WAWebStopEvent").stopPropagation}>{tail}{groupProfilePicture}{author}{ve}{Z}</div>;
            t[84] = author;
            t[85] = containerClass;
            t[86] = groupProfilePicture;
            t[87] = Z;
            t[88] = ve;
            t[89] = tail;
            t[90] = Se;
        } else {
            Se = t[90];
        }
        let Re;
        if (t[91] !== albumId || t[92] !== albumWrapperClass || t[93] !== albumWrapperRef || t[94] !== q || t[95] !== Se || t[96] !== ne || t[97] !== re || t[98] !== oe) {
            const Le = <div className={albumWrapperClass} data-id={albumId} ref={albumWrapperRef} onFocus={ne} onBlur={re} tabIndex={-1}>{oe}{Se}{q}</div>;
            const Component = r("WAWebKeyboardRotateFocusArrows.react");
            Re = <Component role="row">{Le}</Component>;
            t[91] = albumId;
            t[92] = albumWrapperClass;
            t[93] = albumWrapperRef;
            t[94] = q;
            t[95] = Se;
            t[96] = ne;
            t[97] = re;
            t[98] = oe;
            t[99] = Re;
        } else {
            Re = t[99];
        }
        return Re;
    }
    function d(e) {
        return e.id.toString();
    }
    function m(e) {
        return o("WAWebReactionsUtils").canReactToMessage(e.unsafe());
    }
    l.default = c;
}, 98);