__d("WAWebAttachMenuBarItem.react", [
    "fbt",
    "WAWebAttachMenuPopup.react",
    "WAWebAttachmentMenuLogger",
    "WAWebBusinessProfileGetters",
    "WAWebCmd",
    "WAWebDrawerManagerContext",
    "WAWebDropdown.react",
    "WAWebMobilePlatforms",
    "WAWebPreCallUserJourneyLogger",
    "WAWebStateUtils",
    "WAWebTabOrder",
    "WAWebUim",
    "WAWebUseBusinessProfile.react",
    "WDSIconIcAdd.react",
    "WDSIconIcAttachFile.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBusinessProfileValues",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useImperativeHandle, useRef, useState } = d;
    function f(t) {
        let n;
        const a = o("react-compiler-runtime").c(36);
        let i;
        let l;
        if (a[0] !== t) {
            l = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
        } else {
            i = a[1];
            l = a[2];
        }
        const u = i;
        const { chat, questionReplyQuotedMessage, questionType, threadId } = u;
        const bRef = useRef(null);
        const vRef = useRef(null);
        const S = useState(null);
        const R = S[1];
        o("WAWebUseBusinessProfile.react").useBusinessProfile(chat.id);
        (n = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(chat.id, [
            o("WAWebBusinessProfileGetters").getIsBizBot3p
        ])) != null;
        const L = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid");
        let E;
        if (a[3] !== L) {
            E = function(t) {
                const n = L.existsDrawer() ?? false;
                if (n) {
                    t.preventDefault();
                }
            };
            a[3] = L;
            a[4] = E;
        } else {
            E = a[4];
        }
        const k = E;
        const onMenuOpen = g;
        let T;
        if (a[5] !== chat || a[6] !== k || a[7] !== i.getComposeBoxEditorRef || a[8] !== i.getComposeContents || a[9] !== i.onAlternateSendFlowStart || a[10] !== i.onMenuComplete || a[11] !== questionReplyQuotedMessage || a[12] !== questionType || a[13] !== threadId) {
            T = function(t) {
                if (t) {
                    k(t);
                }
                if (vRef.current) {
                    vRef.current.open();
                    return;
                }
                if (bRef.current) {
                    const Component = r("WAWebAttachMenuPopup.react");
                    R({
                        menu: <Component chat={o("WAWebStateUtils").unproxy(chat)} getComposeContents={i.getComposeContents} getComposeBoxEditorRef={i.getComposeBoxEditorRef} onAlternateSendFlowStart={i.onAlternateSendFlowStart} onMenuComplete={i.onMenuComplete} questionType={questionType} questionReplyQuotedMessage={questionReplyQuotedMessage} threadId={threadId}/>,
                        dirY: o("WAWebDropdown.react").DirY.TOP,
                        dirX: o("WAWebDropdown.react").DirX.CENTER,
                        type: o("WAWebDropdown.react").MenuType.AttachMenuPopup,
                        flipOnRTL: true,
                        testid: "attach-menu-popup",
                        anchor: bRef.current,
                        offsetY: -25
                    });
                }
                o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentMenuOpen(chat);
            };
            a[5] = chat;
            a[6] = k;
            a[7] = i.getComposeBoxEditorRef;
            a[8] = i.getComposeContents;
            a[9] = i.onAlternateSendFlowStart;
            a[10] = i.onMenuComplete;
            a[11] = questionReplyQuotedMessage;
            a[12] = questionType;
            a[13] = threadId;
            a[14] = T;
        } else {
            T = a[14];
        }
        const D = T;
        let x;
        if (a[15] !== D) {
            x = function() {
                return {
                    open: function() {
                        D();
                    }
                };
            };
            a[15] = D;
            a[16] = x;
        } else {
            x = a[16];
        }
        useImperativeHandle(l, x);
        let $;
        if (a[17] !== chat) {
            $ = function(t) {
                if (t === o("WAWebUim").DismissReason.UIM_INTERACTION) {
                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentMenuClose(chat);
                }
                R(null);
            };
            a[17] = chat;
            a[18] = $;
        } else {
            $ = a[18];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_context_menu", $);
        const N = o("WAWebMobilePlatforms").isAndroidPrimary() ? r("WDSIconIcAttachFile.react") : h;
        let M;
        if (a[19] !== chat) {
            M = o("WAWebStateUtils").unproxy(chat);
            a[19] = chat;
            a[20] = M;
        } else {
            M = a[20];
        }
        let w;
        if (a[21] !== i.getComposeBoxEditorRef || a[22] !== i.getComposeContents || a[23] !== i.onAlternateSendFlowStart || a[24] !== i.onMenuComplete || a[25] !== questionReplyQuotedMessage || a[26] !== questionType || a[27] !== M || a[28] !== threadId) {
            const Component = r("WAWebAttachMenuPopup.react");
            w = <Component chat={M} getComposeContents={i.getComposeContents} getComposeBoxEditorRef={i.getComposeBoxEditorRef} onAlternateSendFlowStart={i.onAlternateSendFlowStart} onMenuComplete={i.onMenuComplete} questionType={questionType} questionReplyQuotedMessage={questionReplyQuotedMessage} threadId={threadId}/>;
            a[21] = i.getComposeBoxEditorRef;
            a[22] = i.getComposeContents;
            a[23] = i.onAlternateSendFlowStart;
            a[24] = i.onMenuComplete;
            a[25] = questionReplyQuotedMessage;
            a[26] = questionType;
            a[27] = M;
            a[28] = threadId;
            a[29] = w;
        } else {
            w = a[29];
        }
        const A = w;
        let F;
        if (a[30] !== chat) {
            F = function() {
                o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentMenuOpen(chat);
            };
            a[30] = chat;
            a[31] = F;
        } else {
            F = a[31];
        }
        let O;
        if (a[32] === Symbol.for("react.memo_cache_sentinel")) {
            O = s._("Attach");
            a[32] = O;
        } else {
            O = a[32];
        }
        let B;
        if (a[33] !== A || a[34] !== F) {
            const Component = r("WDSMenuBarItem.react");
            B = <Component imperativeRef={vRef} ref={bRef} onClick={F} onMenuOpen={onMenuOpen} icon={N} tabOrder={o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_ATTACH_BUTTON} title={O} testid="conversation-clip" wdsMenuToRender={A} menuAlign="middle" menuPosition="above"/>;
            a[33] = A;
            a[34] = F;
            a[35] = B;
        } else {
            B = a[35];
        }
        return B;
    }
    function g() {
        new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger().openAttachmentTray();
    }
    function h(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "attach_icon";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = c.jsx(r("WDSIconIcAdd.react"), babelHelpers.extends({}, e, {
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
    l.default = f;
}, 226);