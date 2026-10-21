__d("WAWebChatContextMenuItemPin.react", [
    "fbt",
    "WAWebAuraGating",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatPinBridge",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebMetaAiChatActionLogger",
    "WAWebModalManager",
    "WAWebNewsletterCollection",
    "WAWebPinMenuItem.react",
    "WAWebPinnedChatsWamUtils",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebWamEnumChatActionType",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "requireDeferred"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("requireDeferred")("WAWebPinChatAuraUpsellModal.react").__setRef("WAWebChatContextMenuItemPin.react");
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const { cellRef, chat, metaAiChatListRow } = e;
        let d;
        if (t[0] !== cellRef || t[1] !== chat || t[2] !== metaAiChatListRow) {
            d = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = o("WAWebMetaAiChatActionLogger").startMetaAiChatListAction(chat.id, e ? o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.PIN : o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.UNPIN, metaAiChatListRow);
                    const d = !!(e && r("WAWebAuraGating").isPinnedChatsEnabled() && !r("WAWebAuraGating").isPinnedChatsBenefitActive());
                    const p = o("WAWebChatPinBridge").getPinLimit(chat.id);
                    const f = o("WAWebChatGetters").getIsNewsletter(chat) ? r("WAWebNewsletterCollection") : o("WAWebChatCollection").ChatCollection;
                    if (!e || (yield o("WAWebChatPinBridge").getNumConversationsPinned(chat.id)) < p) {
                        t?.commit();
                        o("WAWebCmd").Cmd.pinChat(o("WAWebStateUtils").unproxy(chat), e);
                    } else if (f.countWhere(m) >= p) {
                        o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert();
                        if (d) {
                            const G = yield c.load();
                            o("WAWebModalManager").ModalManager.openAlert(<G/>);
                        } else {
                            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                            o("WAWebModalManager").ModalManager.open(<Component onOK={function() {
                                o("WAWebModalManager").ModalManager.close();
                                cellRef?.focusOnContextMenuButton();
                            }} okText={r("WAWebFbtCommon")("OK")}>{_.getPinLimitExceededText(chat.id, p)}</Component>);
                        }
                    } else {
                        o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert();
                        const Component = o("WAWebText.react").WAWebTextMuted;
                        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
                        o("WAWebModalManager").ModalManager.open(<Component_1 title={_.getUnPinAllModalTitle(chat.id, p)} onOK={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            const e = o("WAWebChatPinBridge").unpinAllConversations(chat.id);
                            o("WAWebModalManager").ModalManager.close();
                            yield e;
                        })} okText={s._("Unpin all")} onCancel={o("WAWebModalManager").closeModalManager} cancelText={r("WAWebFbtCommon")("Cancel")}><Component>{_.getUnPinAllModalContent(chat.id)}</Component></Component_1>);
                    }
                });
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            })();
            t[0] = cellRef;
            t[1] = chat;
            t[2] = metaAiChatListRow;
            t[3] = d;
        } else {
            d = t[3];
        }
        const onPinOrUnpin = d;
        if (p(chat)) {
            let g;
            if (t[4] !== chat || t[5] !== onPinOrUnpin) {
                const Component = r("WAWebPinMenuItem.react");
                g = <Component key="pin" onPinOrUnpin={onPinOrUnpin} chat={chat}/>;
                t[4] = chat;
                t[5] = onPinOrUnpin;
                t[6] = g;
            } else {
                g = t[6];
            }
            return g;
        }
    }
    function m(e) {
        return o("WAWebFrontendChatGetters").getShouldAppearInList(e) && (e.pin ?? 0) > 0;
    }
    function p(chat) {
        if (chat.archive) {
            return false;
        }
        const n = o("WAWebStateUtils").unproxy(chat).promises?.setArchive?.archive === true;
        return !n;
    }
    var _ = {
        getPinLimitExceededText: function(t, n) {
            if (t.isNewsletter()) {
                return s._("_j{\"*\":\"You can only pin up to {number} channels.\",\"_1\":\"You can only pin up to 1 channel.\"}", [
                    s._plural(n, "number")
                ]);
            }
            return s._("_j{\"*\":\"You can only pin up to {number} chats.\",\"_1\":\"You can only pin up to 1 chat.\"}", [
                s._plural(n, "number")
            ]);
        },
        getUnPinAllModalTitle: function(t, n) {
            if (t.isNewsletter()) {
                return s._("_j{\"*\":\"You can only pin up to {number} channels\",\"_1\":\"You can only pin up to 1 channel\"}", [
                    s._plural(n, "number")
                ]);
            }
            return s._("_j{\"*\":\"You can only pin up to {number} chats\",\"_1\":\"You can only pin up to 1 chat\"}", [
                s._plural(n, "number")
            ]);
        },
        getUnPinAllModalContent: function(t) {
            if (t.isNewsletter()) {
                return s._("Some of your pinned channels can't be seen on this device. To pin a different channel, unpin all channels first.");
            }
            return s._("Some of your pinned chats can't be seen on this device. To pin a different chat, unpin all chats first.");
        }
    };
    l.default = d;
}, 226);