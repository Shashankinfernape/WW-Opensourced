__d("WAWebTextMentionWrapperMutatorComponent.react", [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDisplayType",
    "WAWebFbtAppName",
    "WAWebFindChatAction",
    "WAWebGroupAgentProfileErrorMessage",
    "WAWebGroupAgentProfileRouting",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebTextMentionMutatorComponent.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWrapperDisplayTypeContext",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useContext = c.useContext;
    const p = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebOpenGroupAgentProfile.react").__setRef("WAWebTextMentionWrapperMutatorComponent.react").load();
    }, "OpenGroupAgentProfile");
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            try {
                const i = yield p();
                const { openGroupAgentProfile, openMuseAgentProfileOutsideGroup } = i;
                if (a == null) {
                    openMuseAgentProfileOutsideGroup(n, "textMentionWrapper");
                    return;
                }
                openGroupAgentProfile(t, n, a, "textMentionWrapper");
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load group agent profile action"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("group-agent-profile-action-load-fail");
                o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                    msg: o("WAWebGroupAgentProfileErrorMessage").getRetryProfileErrorMessage()
                }));
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield o("WAWebFindChatAction").findOrCreateLatestChat(e, "textMentionWrapper");
                const n = t.chat;
                if (o("WAWebBotUtils").isMetaAiBot(e) && o("WAWebBotGating").isAiChatThreadsEnabled()) {
                    o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(n, {
                        type: "MetaAiMention"
                    });
                } else {
                    o("WAWebCmd").Cmd.openChatBottom({
                        chat: n,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Mention
                    });
                }
            } catch (error) {
                if (error instanceof Error) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to open chat from mention"
                    ]))).catching(error).sendLogs("text-mention-open-chat-fail");
                }
            }
        });
        return h.apply(this, arguments);
    }
    function YComponent(e) {
        const t = o("react-compiler-runtime").c(10);
        const { chatWid, contact, groupMetadata, lastMessage, selectable, theme } = e;
        const p = c_useContext(r("WAWebWrapperDisplayTypeContext"));
        let f;
        if (t[0] !== chatWid || t[1] !== contact) {
            f = function() {
                const r = chatWid != null ? o("WAWebChatCollection").ChatCollection.get(chatWid) : null;
                const i = r != null && o("WAWebChatGetters").getIsGroup(r) ? r : null;
                const l = i == null ? o("WAWebGroupAgentProfileRouting").getMuseAgentProfileDestinationOutsideGroup(contact.id) : o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(contact.id, i);
                if (l != null) {
                    _(l, contact, i);
                    return;
                }
                const u = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidInvoke(contact.id) ?? contact.id;
                const c = o("WAWebBotProfileCollection").BotProfileCollection.getDefaultBot()?.id;
                if (u.isBot() && !u.equals(c) && !o("WAWebChatCollection").ChatCollection.get(u)) {
                    const Component = o("WAWebFbtAppName").WAWebAppShortName;
                    const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
                    o("WAWebModalManager").ModalManager.open(<Component_1 onOK={o("WAWebModalManager").closeModalManager}>{s._("Starting a new chat with a bot is currently not supported on {=m1}.", [
                        s._implicitParam("=m1", <Component>{s._("")}</Component>)
                    ])}</Component_1>);
                    return;
                }
                const m = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(u, "text_mention");
                if (m != null) {
                    g(m);
                }
            };
            t[0] = chatWid;
            t[1] = contact;
            t[2] = f;
        } else {
            f = t[2];
        }
        const h = f;
        let y;
        if (p !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING) {
            y = h;
        }
        let C;
        if (t[3] !== contact || t[4] !== groupMetadata || t[5] !== lastMessage || t[6] !== y || t[7] !== selectable || t[8] !== theme) {
            const Component = r("WAWebTextMentionMutatorComponent.react");
            C = <Component contact={contact} groupMetadata={groupMetadata} theme={theme} selectable={selectable} onClick={y} lastMessage={lastMessage}/>;
            t[3] = contact;
            t[4] = groupMetadata;
            t[5] = lastMessage;
            t[6] = y;
            t[7] = selectable;
            t[8] = theme;
            t[9] = C;
        } else {
            C = t[9];
        }
        return C;
    }
    l.default = YComponent;
}, 226);