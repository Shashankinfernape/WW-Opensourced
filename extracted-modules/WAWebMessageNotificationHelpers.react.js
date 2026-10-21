__d("WAWebMessageNotificationHelpers.react", [
    "WAWebBotGroupGatingUtils",
    "WAWebChangeNumberNotificationBanner.react",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebE2EInfoModal.react",
    "WAWebE2EInfoModalV2.react",
    "WAWebFrontendMsgGetters",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebOpenChatWithContactAction",
    "WAWebPrinaUtils",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WDSIconIcLockFilled.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ accountLid, chatId, e2eSubtype, msg, participantJid }) {
        if (e2eSubtype !== "e2e_identity_unavailable") {
            if (e2eSubtype === "encrypt" && o("WAWebPrinaUtils").shouldShowNewE2eInfoModal(o("WAWebFrontendMsgGetters").getChat(msg.unsafe()))) {
                const u = o("WAWebPrinaUtils").securityUrl();
                o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
                    highlightSurface: o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(chatId),
                    url: u,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg.unsafe())
                }));
                return;
            }
            if (e2eSubtype === "group_transition_to_tee_bot_group" && o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
                const c = o("WAWebPrinaUtils").securityUrl();
                o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
                    highlightSurface: o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(chatId),
                    url: c,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg.unsafe())
                }));
                return;
            }
            const highlightSurface = e2eSubtype === "encrypt" ? o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(chatId) : undefined;
            o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebE2EInfoModal.react"), {
                highlightSurface,
                e2eSubtype,
                jid: participantJid,
                chatId,
                msg,
                accountLid
            }));
        }
    }
    function c(e, t) {
        o("WAWebChangeNumberNotificationBanner.react").onChangeNumberNotificationClick(e, t);
    }
    function d(e) {
        o("WAWebCmd").Cmd.ephemeralDrawer(e, false, o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.SYSTEM_MESSAGE);
    }
    function m() {
        return <div className="x1rg5ohu x2fvf9 xg49k01">{s.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
            height: 16,
            width: 16
        })}</div>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p(e) {
        const t = o("react-compiler-runtime").c(1);
        const e_msg = e.msg;
        if (e_msg.subtype === "encrypt" || e_msg.subtype === "encrypt_now") {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = <div className="x1rg5ohu x1gslohp x2fvf9 x16dsc37 xhslqc4">{s.jsx(r("WDSIconIcLockFilled.react"), {
                    width: 12,
                    height: 12
                })}</div>;
                t[0] = a;
            } else {
                a = t[0];
            }
            return a;
        }
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(1);
        const e_msg = e.msg;
        if (e_msg.subtype === "group_transition_to_tee_bot_group") {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = <div className="x1rg5ohu x1gslohp x2fvf9 x16dsc37 xhslqc4">{s.jsx(r("WDSIconIcLockFilled.react"), {
                    width: 12,
                    height: 12
                })}</div>;
                t[0] = a;
            } else {
                a = t[0];
            }
            return a;
        }
    }
    const f = new Set([
        "blue_msg_bsp_fb_unverified",
        "blue_msg_bsp_fb_verified",
        "blue_msg_bsp_premise_unverified",
        "blue_msg_bsp_premise_verified",
        "blue_msg_self_fb_unverified",
        "blue_msg_self_fb_verified"
    ]);
    function g(e, t) {
        return e === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && f.has(t);
    }
    function h(targetId) {
        o("WAWebOpenChatWithContactAction").openChatWithContact({
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Notification,
            findChatOrigin: "changeLidNotification",
            targetId
        });
    }
    l.handleSecurityClick = u;
    l.handleChangeNumberClick = c;
    l.handleEphemeralClick = d;
    l.renderDisappearingIcon = m;
    l.E2ENotificationIcon = p;
    l.TeeBotE2ENotificationIcon = _;
    l.showInfoIcon = g;
    l.handleChangeLidClick = h;
}, 98);