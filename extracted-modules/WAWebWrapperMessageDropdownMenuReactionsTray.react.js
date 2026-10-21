__d("WAWebWrapperMessageDropdownMenuReactionsTray.react", [
    "WAWebChatGetters",
    "WAWebDropdown.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebPrepareMessageSendingAction",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsPanel.react",
    "WAWebReactionsUtils",
    "WAWebSendReactionMsgAction",
    "WAWebSendReactionsTray.react",
    "WAWebSendReactionsTrayContainer.react",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "WDSGlobalContext",
    "react",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    function c({ anchor, isSentByMe, isWideDisplay, msg, onMouseEnter, onMouseLeave, onMouseOver, onReactionPickerOpen, onReactionSent }) {
        const _ = e_useContext(o("WDSGlobalContext").WDSContext);
        const __closeAllMenus = _.closeAllMenus;
        const g = function(t) {
            o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t);
            o("WAWebSendReactionMsgAction").sendReactionToMsg(msg, t).catch((e)=>{}).finally(()=>{
                onReactionSent();
                __closeAllMenus();
            });
        };
        const h = r("useWAWebStableCallback")(function(e, i) {
            if (o("WAWebReactionsUtils").canReactToMessage(e)) {
                const Component = r("WAWebReactionsPanel.react");
                onReactionPickerOpen({
                    dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                    dirX: isSentByMe && !isWideDisplay ? o("WAWebDropdown.react").DirX.LEFT : o("WAWebDropdown.react").DirX.RIGHT,
                    type: o("WAWebDropdown.react").MenuType.ReactionPicker,
                    menu: <Component msgId={e.id.toString()} onSelection={g}/>,
                    flipOnRTL: true,
                    anchor
                });
            }
        });
        const y = r("useWAWebStableCallback")(function(e) {
            if (o("WAWebReactionsUtils").canReactToMessage(msg)) {
                if (e !== o("WAWebSendReactionsTray.react").MORE_REACTIONS) {
                    g(e);
                } else {
                    __closeAllMenus();
                    self.setTimeout(function() {
                        h(msg, anchor);
                    }, 150);
                }
            }
        });
        if (!o("WAWebReactionsUtils").isContextMenuReactiondEnabled() || !o("WAWebReactionsUtils").canReactToMessage(msg)) {
            return null;
        }
        const Component = o("WAWebSendReactionsTrayContainer.react").SendReactionsTrayContainer;
        if (!o("WAWebFrontendChatGetters").getIsCAG(o("WAWebFrontendMsgGetters").getChat(msg)) && !o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(msg))) {
            o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(o("WAWebFrontendMsgGetters").getChat(msg));
        }
        return <><Component isInlineMode selectedCallback={y} msg={msg} onMouseEnter={onMouseEnter} onMouseOver={onMouseLeave} onMouseLeave={onMouseOver} userJourneyEntryPoint={o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_MENU_ITEM_REACTION}/>{s.jsx(r("WAWebDropdownItemSeparator.react"), {})}</>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);