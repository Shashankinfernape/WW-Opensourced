__d("WAWebMediaHubMessageActionHandlers", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebEnvironment",
    "WAWebFileSaver",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatActions",
    "WAWebMessageHandlers",
    "WAWebModalManager",
    "WAWebMsgModelUtils",
    "WAWebMultiSelectUtils",
    "WAWebNavBarTypes",
    "WAWebReplyToMsgChatAction",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumKicEntryPointType",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "cr:7565",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    const S = v || (v = o("react"));
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[MediaHub] downloadMessages ",
                " msg(s)"
            ])), e.length);
            if (e.length !== 0) {
                if (r("WAWebEnvironment").isWindows && n("cr:7565") != null) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] Windows bulk save ",
                        " msg(s)"
                    ])), e.length);
                    try {
                        yield n("cr:7565").selectFolderAndSaveFiles(e);
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[MediaHub] Windows bulk save done ",
                            " msg(s)"
                        ])), e.length);
                    } catch (error) {
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[MediaHub] Windows bulk save failed ",
                            ""
                        ])), e.length).catching(error);
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[MediaHub] fallback→FileSaver ",
                            " msg(s)"
                        ])), e.length);
                        o("WAWebFileSaver").FileSaver.initDownload(e);
                    }
                } else {
                    const t = n("cr:7565") != null ? "yes" : "no";
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] FileSaver ",
                        " msg(s) win=",
                        " helpers=",
                        ""
                    ])), e.length, r("WAWebEnvironment").isWindows, t);
                    o("WAWebFileSaver").FileSaver.initDownload(e);
                }
            }
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        const t = o("WAWebFrontendMsgGetters").getChat(e);
        const n = o("WAWebThreadMsgUtils").getMsgAiThread(e);
        if (n != null && o("WAWebBotGating").isAiChatThreadsEnabled()) {
            o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                type: "MessageSearch",
                msg: e
            });
            o("WAWebModalManager").ModalManager.close();
            return;
        }
        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
        o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
        o("WAWebCmd").Cmd.openChatAt({
            chat: t,
            msgContext: o("WAWebChatMessageSearch").getSearchContext({
                chat: t,
                msgKey: e.id
            }),
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MediaHub
        }).then((t)=>{
            if (t) {
                o("WAWebModalManager").ModalManager.close();
                o("WAWebComposeBoxActions").ComposeBoxActions.focus(o("WAWebFrontendMsgGetters").getChat(e));
            }
        });
    }
    function k(t, r, a) {
        const i = t.filter((e)=>e.mediaData);
        if (i.length) {
            const l = i.filter((e)=>!e.mediaData.isDownloadable());
            const d = (t)=>{
                o("WAWebToastManager").ToastManager.open(S.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("_j{\"*\":\"Downloading {number_of_messages} items\",\"_1\":\"Downloading 1 item\"}", [
                        s._plural(t, "number_of_messages")
                    ])
                }));
            };
            if (a === "media_hub") {
                d(t.length);
            }
            if (l.length > 0) {
                if (a !== "media_hub") {
                    o("WAWebToastManager").ToastManager.open(S.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Downloading…")
                    }));
                }
                (b || (b = n("Promise"))).all(l.map((e)=>e.downloadMedia({
                        downloadEvenIfExpensive: true,
                        rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MULTI_SELECT_DOWNLOAD,
                        isUserInitiated: true
                    }))).then(()=>{
                    const t = i.filter((e)=>e.mediaData.isDownloadable());
                    if (i.length > t.length) {
                        o("WAWebToastManager").ToastManager.open(S.jsx(o("WAWebToast.react").Toast, {
                            msg: s._("_j{\"*\":\"{count} files couldn't be downloaded because they're no longer on your phone.\",\"_1\":\"1 file couldn't be downloaded because it's no longer on your phone.\"}", [
                                s._plural(i.length - t.length, "count")
                            ])
                        }));
                    }
                    if (t.length) {
                        R(t).catch((t)=>{
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[MediaHub] download failed"
                            ]))).catching(t);
                        });
                    }
                }).catch((e)=>{
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] phone download failed ",
                        ""
                    ])), e);
                });
            } else {
                R(i).catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] download failed"
                    ]))).catching(e);
                });
            }
            r?.();
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN);
        }
    }
    function I(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        const n = o("WAWebFrontendMsgGetters").getChat(t);
        o("WAWebCmd").Cmd.sendUnstarMsgs(n, [
            t
        ]);
        o("WAWebMultiSelectUtils").logMessageActionClickMetric([
            e
        ], o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebKeepInChatActions").runKeepInChatUX(o("WAWebStateUtils").unproxy(e), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA, true);
                o("WAWebToastManager").ToastManager.open(S.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("_j{\"*\":\"Kept {number_of_messages} items\",\"_1\":\"Kept 1 item\"}", [
                        s._plural(1, "number_of_messages")
                    ])
                }));
            } catch (error) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "Keep operation not complete. Reason: ",
                    ""
                ])), error.reason ?? "unknown");
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebKeepInChatActions").runUndoKeepInChatUX(o("WAWebStateUtils").unproxy(e), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA, true);
                o("WAWebToastManager").ToastManager.open(S.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("_j{\"*\":\"Unkept {number_of_messages} items\",\"_1\":\"Unkept 1 item\"}", [
                        s._plural(1, "number_of_messages")
                    ])
                }));
            } catch (error) {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "UndoKeep operation not complete. Reason: ",
                    ""
                ])), error.reason ?? "unknown");
            }
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        const n = o("WAWebFrontendMsgGetters").getChat(t);
        o("WAWebCmd").Cmd.sendStarMsgs(n, [
            t
        ]);
        o("WAWebMultiSelectUtils").logMessageActionClickMetric([
            e
        ], o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR);
    }
    function N(e, handleSelectClick) {
        o("WAWebMessageHandlers").handleOpenForwardFlow({
            multiSelect: false,
            msg: o("WAWebStateUtils").unproxy(e),
            handleSelectClick,
            handleBack: function() {
                o("WAWebModalManager").ModalManager.closeSupportModal();
            },
            openAsSupportModal: true,
            onForward: function() {
                const e = s._("_j{\"*\":\"Forwarded {number_of_messages} items\",\"_1\":\"Forwarded 1 item\"}", [
                    s._plural(1, "number_of_messages")
                ]);
                o("WAWebToastManager").ToastManager.open(S.jsx(o("WAWebToast.react").Toast, {
                    id: o("WAWebActionToast.react").genId(),
                    msg: e,
                    duration: 4000
                }));
            }
        });
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebFrontendMsgGetters").getChat(e);
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
            o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
            const n = yield o("WAWebCmd").Cmd.openChatBottom({
                chat: t,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MediaHub
            });
            if (!n) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[MediaHub] reply failed"
                ])));
                return;
            }
            t.set("composeQuotedMsg", o("WAWebMsgModelUtils").createMsgSnapshot(e));
            o("WAWebModalManager").ModalManager.close();
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(o("WAWebFrontendMsgGetters").getChat(e));
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
            o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
            yield r("WAWebReplyToMsgChatAction")(e);
            o("WAWebModalManager").ModalManager.close();
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(o("WAWebFrontendMsgGetters").getChat(e));
        });
        return F.apply(this, arguments);
    }
    l.goToMessageFromModal = E;
    l.handleMessageDownloadClick = k;
    l.handleMessageUnstarClick = I;
    l.handleKeepClick = T;
    l.handleUndoKeepClick = x;
    l.handleMessageStarClick = P;
    l.handleForwardClick = N;
    l.replyToMessageFromModal = M;
    l.replyPrivatelyToMessageFromModal = A;
}, 226);