__d("WAWebKeyboardRun", [
    "fbt",
    "WALogger",
    "WAWebActions",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCallCollection",
    "WAWebCallUserJourneyInCallAction",
    "WAWebCallUserJourneyLogger",
    "WAWebChatCollection",
    "WAWebChatPinBridge",
    "WAWebCmd",
    "WAWebCommandPaletteUtils",
    "WAWebComposeBoxActions",
    "WAWebComposeBoxPanelTypes",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebFbtCommon",
    "WAWebKeyboardTabUtils",
    "WAWebLockScreenResolver",
    "WAWebManageLabelFlowLoadable",
    "WAWebMeTabFlowLoadable",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMuteGetters",
    "WAWebMuteUtils",
    "WAWebNavBarTypes",
    "WAWebNewChatFlowLoadable",
    "WAWebNewGroupFlowLoadable",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNoop",
    "WAWebPrivacyModeGating",
    "WAWebPrivacyModeToast",
    "WAWebProfilePicThumbCollection",
    "WAWebScreenLockDrawerLoadable",
    "WAWebSendLogsPopupLoadable",
    "WAWebSettingGatingUtils",
    "WAWebSettingsFlowLoadable",
    "WAWebSocketModel",
    "WAWebTextStatusCollection",
    "WAWebThemeContext",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsPrivacyMode",
    "WAWebUserPrefsScreenLock",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipMicrophonePermissionDeniedGuideLoadable.react",
    "WAWebVoipMicrophoneToggle",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoStateUtils",
    "WAWebWamEnumMuteEntryPoint",
    "asyncToGeneratorRuntime",
    "cr:13920",
    "cr:1923",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = _ || (_ = o("react"));
    function g(e, t) {
        switch(e){
            case o("WAWebActions").Action.OPEN_NTH_CHAT:
                return r("WAWebNoop");
            case o("WAWebActions").Action.CONTACT_US:
                return N;
            case o("WAWebActions").Action.GO_TO_NEXT_CHAT:
                return $;
            case o("WAWebActions").Action.GO_TO_PREV_CHAT:
                return P;
            case o("WAWebActions").Action.CLOSE_CHAT:
                return S;
            case o("WAWebActions").Action.LOGOUT:
                return R;
            case o("WAWebActions").Action.OPEN_NEW_CHAT:
                return C;
            case o("WAWebActions").Action.OPEN_NEW_GROUP:
                return b;
            case o("WAWebActions").Action.OPEN_PROFILE:
                return v;
            case o("WAWebActions").Action.OPEN_SETTINGS:
                return y;
            case o("WAWebActions").Action.SEARCH:
                return L;
            case o("WAWebActions").Action.SEARCH_IN_CHAT:
                return x;
            case o("WAWebActions").Action.TOGGLE_ARCHIVE:
                return E;
            case o("WAWebActions").Action.TOGGLE_MUTE:
                return k;
            case o("WAWebActions").Action.TOGGLE_PIN:
                return I;
            case o("WAWebActions").Action.TOGGLE_UNREAD:
                return T;
            case o("WAWebActions").Action.TOGGLE_THEME:
                return D;
            case o("WAWebActions").Action.OPEN_EMOJI_PANEL:
                return M;
            case o("WAWebActions").Action.OPEN_GIF_PANEL:
                return G;
            case o("WAWebActions").Action.OPEN_STICKER_PANEL:
                return z;
            case o("WAWebActions").Action.TOGGLE_STICKER_MAKER:
                return K;
            case o("WAWebActions").Action.TOGGLE_COMMAND_PALETTE:
                return Q;
            case o("WAWebActions").Action.LOCK_SCREEN:
                return X;
            case o("WAWebActions").Action.LABEL_CHAT:
                return Y;
            case o("WAWebActions").Action.ZOOM_IN:
                return J();
            case o("WAWebActions").Action.ZOOM_OUT:
                return Z();
            case o("WAWebActions").Action.ZOOM_RESET:
                return ee();
            case o("WAWebActions").Action.TOGGLE_PRIVACY_MODE:
                return se;
            case o("WAWebActions").Action.INCREASE_PTT_SPEED:
            case o("WAWebActions").Action.DECREASE_PTT_SPEED:
            case o("WAWebActions").Action.TOGGLE_BOLD:
            case o("WAWebActions").Action.TOGGLE_ITALIC:
            case o("WAWebActions").Action.TOGGLE_STRIKETHROUGH:
            case o("WAWebActions").Action.TOGGLE_CODE:
            case o("WAWebActions").Action.TOGGLE_INLINE_CODE:
            case o("WAWebActions").Action.TOGGLE_NUMBERED_LIST:
            case o("WAWebActions").Action.TOGGLE_BULLETED_LIST:
            case o("WAWebActions").Action.TOGGLE_QUOTE:
                return null;
            case o("WAWebActions").Action.OPEN_CHAT_INFO:
                return w();
            case o("WAWebActions").Action.BLOCK_CHAT:
                return A();
            case o("WAWebActions").Action.REPLY:
                return F();
            case o("WAWebActions").Action.REPLY_PRIVATE:
                return O();
            case o("WAWebActions").Action.FORWARD:
                return B();
            case o("WAWebActions").Action.STAR_MESSAGE:
                return W();
            case o("WAWebActions").Action.OPEN:
                return r("WAWebNoop")();
            case o("WAWebActions").Action.OPEN_ATTACHMENT_DROPDOWN:
                return j();
            case o("WAWebActions").Action.START_PTT_RECORDING:
                return U();
            case o("WAWebActions").Action.PAUSE_PTT_RECORDING:
                return V();
            case o("WAWebActions").Action.SEND_PTT:
                return H();
            case o("WAWebActions").Action.EDIT_LAST_MESSAGE:
                return undefined;
            case o("WAWebActions").Action.TOGGLE_CALL_CAMERA:
                return te();
            case o("WAWebActions").Action.TOGGLE_CALL_MUTE:
                return ne(t);
            case o("WAWebActions").Action.SHOW_CALL_REACTIONS:
                return oe();
            case o("WAWebActions").Action.TOGGLE_RAISE_HAND:
                return ae();
            case o("WAWebActions").Action.START_SCREEN_SHARE:
                return ie();
            case o("WAWebActions").Action.END_CALL:
                return le();
        }
    }
    function h(t, n) {
        const r = g(t, n);
        if (r) {
            try {
                r();
                if (t !== o("WAWebActions").Action.TOGGLE_COMMAND_PALETTE) {
                    o("WAWebCmd").Cmd.closeCommandPalette();
                }
            } catch (n) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "keyboard:error occurred running action ",
                    "."
                ])), t);
            }
        }
    }
    function y() {
        const n = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.existsDrawer() ?? false;
        if (n) {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
        }
        if (o("WAWebSettingGatingUtils").isMeTabEnabled()) {
            const Component = o("WAWebMeTabFlowLoadable").MeTabFlowLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                descriptorType: "profile"
            } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>, {
                disableRotateFocus: true
            });
        } else {
            const Component = o("WAWebSettingsFlowLoadable").SettingsFlowLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                descriptorType: "settings"
            } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>);
        }
    }
    function C() {
        const n = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.existsDrawer() ?? false;
        if (n) {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
        }
        const Component = o("WAWebNewChatFlowLoadable").NewChatFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "new_chat"
        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    function b() {
        const r = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.existsDrawer() ?? false;
        if (r) {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
        }
        const Component = o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "new_group",
            isSubFlow: false
        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft} onCreateGroup={(()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    const t = yield e;
                    if (t != null) {
                        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                    }
                } catch (e) {}
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()}/>);
    }
    function v() {
        const r = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.existsDrawer() ?? false;
        if (r) {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
        }
        const a = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        const i = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(a);
        const l = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(a);
        const s = o("WAWebContactCollection").ContactCollection.assertGet(a);
        o("WAWebCmd").Cmd.closeActiveChat();
        const Component = n("cr:1923");
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component status={i} profilePicThumb={l} contact={s} conn={o("WAWebConnModel").Conn} onClose={o("WAWebDrawerManager").closeDrawerLeft} isInitialStep/>, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            transition: "pop-drawer-fast",
            focusOnUnMount: true
        });
        o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Profile);
    }
    function S() {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e) {
            o("WAWebCmd").Cmd.closeChat(e);
            return;
        }
        if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
            const t = r("WAWebNewsletterCollection") == null ? undefined : r("WAWebNewsletterCollection").getActive();
            if (t) {
                o("WAWebCmd").Cmd.closeChat(t);
                return;
            }
        }
        r("WAWebVoipCallsTabPanelManager").trigger("closeCallLogInfoPanel");
    }
    function R() {
        if (!o("WAWebMsgCollection").MsgCollection.hasUnsentMessages()) {
            return o("WAWebSocketModel").Socket.logout();
        }
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
            surface: "unknown",
            viewName: "keyboard-run"
        }} title={s._("Log out?")} onOK={function() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Keyboard: user inputs logout"
            ])));
            o("WAWebSocketModel").Socket.logout();
        }} okText={s._("Log out")} onCancel={o("WAWebModalManager").closeModalManager} cancelText={r("WAWebFbtCommon")("Cancel")}>{s._("Some of your messages are still sending.")}</Component>);
    }
    function L() {
        o("WAWebCmd").Cmd.focusChatSearch();
    }
    function E() {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e) {
            const t = e.archive;
            o("WAWebCmd").Cmd.archiveChat(e, !t);
        }
    }
    function k() {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e && o("WAWebMuteUtils").canMute(e.mute)) {
            const t = o("WAWebMuteGetters").getIsMuted(e.mute);
            o("WAWebCmd").Cmd.muteChatFromEntryPoint(e, !t, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN);
        }
    }
    function I() {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e && (e.pin != null || o("WAWebChatCollection").ChatCollection.countWhere(function(e) {
            return !!e.pin;
        }) < o("WAWebChatPinBridge").getPinLimit(e.id))) {
            const t = !!e.pin;
            o("WAWebCmd").Cmd.pinChat(e, !t);
        }
    }
    function T() {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e) {
            const t = e.markedUnread;
            o("WAWebCmd").Cmd.markChatUnread(e, !t);
        }
    }
    function D() {}
    function x() {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e) {
            o("WAWebCmd").Cmd.chatSearch(e);
        }
    }
    function $() {
        o("WAWebCmd").Cmd.focusNextChat(true);
    }
    function P() {
        o("WAWebCmd").Cmd.focusPrevChat(true);
    }
    function N() {
        o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebSendLogsPopupLoadable").SendLogsPopupLoadable, {}));
    }
    function M() {
        o("WAWebCmd").Cmd.openComposeBoxExpressionPanel(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
    }
    function w() {
        o("WAWebCmd").Cmd.openCurrentChatInfo();
    }
    function A() {
        o("WAWebCmd").Cmd.blockCurrentChat();
    }
    function F() {
        o("WAWebCmd").Cmd.replyCurrentMessageKeyboardShortcut();
    }
    function O() {
        o("WAWebCmd").Cmd.replyCurrentMessagePrivate();
    }
    function B() {
        o("WAWebCmd").Cmd.forwardCurrentMessage();
    }
    function W() {
        o("WAWebCmd").Cmd.starCurrentMessage();
    }
    function q() {}
    function U() {
        o("WAWebCmd").Cmd.startPttRecording();
    }
    function V() {
        o("WAWebCmd").Cmd.pausePttRecording();
    }
    function H() {
        o("WAWebCmd").Cmd.sendPttRecording();
    }
    function G() {
        o("WAWebCmd").Cmd.openComposeBoxExpressionPanel(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF);
    }
    function z() {
        o("WAWebCmd").Cmd.openComposeBoxExpressionPanel(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER);
    }
    function j() {
        if (!o("WAWebComposeBoxActions").ComposeBoxActions.hasText()) {
            o("WAWebCmd").Cmd.openAttachmentDropdown();
        }
    }
    function K() {
        o("WAWebCmd").Cmd.toggleStickerMaker();
    }
    function Q() {
        if (o("WAWebCommandPaletteUtils").isCommandPaletteOpen()) {
            o("WAWebCmd").Cmd.closeCommandPalette();
        } else {
            o("WAWebCmd").Cmd.openCommandPalette();
        }
    }
    function X() {
        if (o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) {
            o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
        } else {
            const Component = o("WAWebScreenLockDrawerLoadable").ScreenLockDrawerLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onCancel={o("WAWebDrawerManager").closeDrawerLeft}/>);
        }
    }
    function Y() {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e) {
            const Component = o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable;
            o("WAWebModalManager").ModalManager.open(<Component modelsToUpdate={[
                e
            ]} onClose={o("WAWebModalManager").closeModalManager} entryPoint={null}/>);
        }
    }
    function J() {
        if (n("cr:13920") != null && n("cr:13920").isHybridAppZoomingEnabled) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[scaling control] Requesting zoom in from keyboard shortcut"
            ])));
            if (n("cr:13920") != null) {
                n("cr:13920").trigger("requestZoomIn");
            }
        }
    }
    function Z() {
        if (n("cr:13920") != null && n("cr:13920").isHybridAppZoomingEnabled) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[scaling control] Requesting zoom out from keyboard shortcut"
            ])));
            if (n("cr:13920") != null) {
                n("cr:13920").trigger("requestZoomOut");
            }
        }
    }
    function ee() {
        if (n("cr:13920") != null && n("cr:13920").isHybridAppZoomingEnabled) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[scaling control] Requesting zoom reset from keyboard shortcut"
            ])));
            if (n("cr:13920") != null) {
                n("cr:13920").trigger("requestZoomReset");
            }
        }
    }
    function te() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall != null) {
            o("WAWebCallUserJourneyInCallAction").logInCallAction(o("WAWebVoipVideoStateUtils").isVideoEnabled(activeCall.selfVideoState) ? o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TURN_OFF_CAMERA : o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TURN_ON_CAMERA);
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                if (t?.type === "web") {
                    const n = !o("WAWebVoipVideoStateUtils").isVideoEnabled(activeCall.selfVideoState);
                    yield t.setCallVideoMute(!n);
                }
            })();
        }
    }
    function ne(e) {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall != null) {
            const a = activeCall.selfMicMuted;
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = e?.isDocPip === true;
                const n = e?.targetWindow;
                let r = false;
                const i = yield o("WAWebVoipMicrophoneToggle").toggleActiveCallMicrophone({
                    onPermissionPrompt: t && n != null ? function() {
                        r = o("WAWebVoipPopoutWindowState").focusMainWindowForMediaPrompt(n, "keyboard mute toggle", "microphone");
                    } : undefined,
                    onToggleStarted: function() {
                        return o("WAWebCallUserJourneyInCallAction").logInCallAction(a ? o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_UNMUTE : o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_MUTE);
                    },
                    targetWindow: t ? null : n
                });
                if (i === "permission_denied") {
                    ReComponent(n, r);
                }
            })().catch((e)=>{
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "keyboard: microphone toggle failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-keyboard-microphone-toggle-failed");
            });
        }
    }
    function ReComponent(e, t) {
        const n = e == null || t ? o("WAWebModalManager").ModalManager : o("WAWebVoipPopoutModalManager").VoipPopoutModalManager;
        const Component = o("WAWebVoipMicrophonePermissionDeniedGuideLoadable.react").WAWebVoipMicrophonePermissionDeniedGuideLoadable;
        n.open(<Component onConfirm={function() {
            return n.close();
        }}/>);
    }
    function oe() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall != null) {
            o("WAWebCmd").Cmd.trigger("voip_show_reactions");
        }
    }
    function ae() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall != null) {
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                if (t?.type === "web") {
                    const n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                    const r = activeCall.isHandRaisedForParticipant(n);
                    o("WAWebCallUserJourneyInCallAction").logInCallAction(r ? o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_LOWER_HAND : o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_RAISE_HAND);
                    yield t.raiseHand(!r);
                }
            })();
        }
    }
    function ie() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall != null) {
            const t = activeCall.isSelfScreenSharing();
            if (!t && activeCall.isVideo === true && o("WAWebVoipCallStateUtils").isCallActive(activeCall.getState())) {
                o("WAWebCallUserJourneyInCallAction").logInCallAction(o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.START_SCREEN_SHARE);
            }
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                if (e?.type === "web") {
                    if (t) {
                        yield e.stopScreenShare();
                    } else {
                        yield e.startScreenShare();
                    }
                }
            })();
        }
    }
    function le() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall != null) {
            o("WAWebCallUserJourneyInCallAction").logInCallAction(o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.END_CALL);
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                yield e?.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, true);
            })();
        }
    }
    function se() {
        if (o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) {
            const e = o("WAWebUserPrefsPrivacyMode").isPrivacyScreenEnabled();
            o("WAWebCmd").Cmd.trigger("toggle_privacy_mode");
            o("WAWebPrivacyModeToast").showPrivacyModeToast(!e, function() {
                o("WAWebCmd").Cmd.trigger("toggle_privacy_mode");
            });
        }
    }
    l.default = h;
}, 226);