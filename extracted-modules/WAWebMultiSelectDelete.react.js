__d("WAWebMultiSelectDelete.react", [
    "fbt",
    "WAArrayUtils",
    "WAWebABProps",
    "WAWebBizCtwaAGMUtils",
    "WAWebCmd",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebEnforcementActionLogging",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebIconButton.react",
    "WAWebL10nFilesize",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMultiSelectUtils",
    "WAWebRevokeMetricUtils",
    "WAWebStateUtils",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSBaseCheckbox.react",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "WDSIconIcDelete.react",
    "WDSMenuBarItem.react",
    "WDSText.react",
    "react",
    "sumBy"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = {
        btnMargin: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        },
        mediaHubIcon: {
            color: "xqnyt8g",
            width: "x1849jeq",
            ":disabled_color": "x9g49ws",
            $$css: true
        },
        capitalised: {
            textTransform: "xn80e1m",
            $$css: true
        },
        deleteHover: {
            ":hover_backgroundColor": "x1dulx1b",
            $$css: true
        },
        paddingEnd12: {
            paddingInlineEnd: "xde1mab",
            $$css: true
        }
    };
    function m(e) {
        "use no forget";
        const e_dataTab = e.dataTab;
        const tabOrder = e_dataTab === undefined ? o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR : e_dataTab;
        const { onCancel, onDeleteModalOpen, selectedMessages, theme, toastPosition } = e;
        const h = selectedMessages?.getSelected() ?? [];
        const b = r("sumBy")(h, function(e) {
            return e.mediaData?.size;
        });
        const v = h.every((e)=>(!o("WAWebMsgGetters").getIsNewsletterMsg(e) || o("WAWebMsgActionCapability").canRevokeNewsletterMsg(e)) && !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
                isAGMShown: e.ctwaContext?.automatedGreetingMessageShown,
                msgSource: e.ctwaContext?.sourceApp,
                msgSubtype: e.subtype,
                msgType: e.type
            }));
        const h_length = h.length;
        const RComponent = function() {
            const chats = h.map((e)=>o("WAWebFrontendMsgGetters").getChat(e));
            const t = chats.some(Boolean);
            if (t) {
                const msgList = h.map((e)=>o("WAWebStateUtils").unproxy(e));
                const revokable = p(msgList);
                const shouldShowDeleteMediaFileCheckbox = msgList.some((e)=>o("WAWebFrontendMsgGetters").getAsMms(e) && e.type !== o("WAWebMsgType").MSG_TYPE.STICKER);
                if (_({
                    msgList,
                    revokable,
                    theme
                })) {
                    o("WDSDialogBridge").openWDSDialog(<C msgList={msgList} onEnd={onCancel} revokable={revokable} toastPosition={toastPosition}/>);
                } else if (g({
                    revokable,
                    shouldShowDeleteMediaFileCheckbox,
                    theme
                })) {
                    o("WDSDialogBridge").openWDSDialog(<Y1Component msgList={msgList} onEnd={onCancel} toastPosition={toastPosition}/>);
                } else {
                    const Component = r("WAWebDeleteRevokeMsgFlow.react");
                    o("WAWebModalManager").ModalManager.openSupportModal(<Component chats={chats} msgList={msgList} toastPosition={toastPosition} onEnd={onCancel} theme={theme}/>);
                }
                o("WAWebRevokeMetricUtils").UiRevokeActionHelper.trashCanSelected();
                onDeleteModalOpen?.();
            }
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(h, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE);
        };
        const L = !h_length || !v;
        const Component = r("WDSMenuBarItem.react");
        const E = <Component icon={r("WDSIconIcDelete.react")} testid="multi-select-bar-delete" tabOrder={tabOrder} disabled={L} title={s._("_j{\"*\":\"Delete\"}", [
            s._plural(h_length)
        ])} onClick={RComponent} marginInlineXstyle={d.btnMargin}/>;
        const Component_1 = r("WDSButton.react");
        const k = <Component_1 aria-label={s._("_j{\"*\":\"Delete\"}", [
            s._plural(h_length)
        ])} disabled={L} Icon={r("WDSIconIcDelete.react")} onPress={RComponent} tabOrder={tabOrder} testid="multi-select-bar-delete" variant="borderless" xstyle={d.mediaHubIcon}/>;
        if (theme === "mediaHub") {
            const Component = o("WAWebText.react").WAWebTextTitleRefreshed;
            const Component_1 = r("WAWebIconButton.react");
            return <Component_1 onClick={L ? null : RComponent} icon={k} xstyle={!L && d.deleteHover}><Component weight="semibold" xstyle={[
                d.capitalised,
                d.paddingEnd12
            ]} color={L ? "wdsContentDisabled" : "wdsSecondaryNegativeEmphasized"}>{b > 0 ? o("WAWebL10nFilesize").getL10nFilesize(b) : null}</Component></Component_1>;
        }
        return E;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p(msgList) {
        const t = msgList.reduce((acc, item)=>{
            const n = o("WAWebMsgActionCapability").canSenderRevokeMsg(item);
            const r = o("WAWebMsgActionCapability").canAdminRevokeMsg(item);
            const a = o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(item);
            const i = acc.sender + (n || a ? 1 : 0);
            const admin_1 = acc.admin + (r && !a ? 1 : 0);
            const s = n || r || a;
            const canRevoke_1 = acc.canRevoke && s;
            return {
                sender: i,
                admin: admin_1,
                canRevoke: canRevoke_1
            };
        }, {
            sender: 0,
            admin: 0,
            canRevoke: true
        });
        const { admin, canRevoke, sender } = t;
        return {
            sender,
            admin,
            canRevoke
        };
    }
    function _({ msgList, revokable, theme }) {
        return revokable.canRevoke && revokable.admin === 0 && !f(msgList) && theme !== "mediaHub" && o("WAWebABProps").getABPropConfigValue("wds_web_dialog");
    }
    function f(msgList) {
        return msgList.length === 1 && o("WAWebMsgGetters").getIsEdited(msgList[0]) && o("WAWebMsgGetters").getIsFailed(msgList[0]);
    }
    function g({ revokable, shouldShowDeleteMediaFileCheckbox, theme }) {
        return !revokable.canRevoke && shouldShowDeleteMediaFileCheckbox && theme !== "mediaHub" && o("WAWebABProps").getABPropConfigValue("wds_web_dialog");
    }
    function h(e) {
        return s._("_j{\"*\":\"Delete messages?\",\"_1\":\"Delete message?\"}", [
            s._plural(e.length)
        ]);
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function Y1Component({ msgList, onEnd, toastPosition }) {
        const i = e_useState(true);
        const l = i[0];
        const d = i[1];
        const m = o("WAArrayUtils").groupBy(msgList, function(e) {
            return o("WAWebFrontendMsgGetters").getChat(e);
        });
        const p = function() {
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession();
            o("WDSDialogBridge").closeWDSDialog();
            onEnd();
        };
        const _ = function() {
            m.forEach((e, t)=>{
                if (t != null && e.length > 0) {
                    o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
                        type: "message",
                        list: e
                    }, l, null, toastPosition);
                }
            });
            o("WDSDialogBridge").closeWDSDialog();
            onEnd();
        };
        const f = s._("Delete file from your phone");
        const g = "delete-media-file-checkbox";
        const y = u.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            width: "fill",
            primaryButtonProps: {
                label: s._("Delete for me"),
                onPress: _,
                testid: "popup-controls-delete",
                type: "destructive",
                variant: "outline"
            },
            secondaryButtonProps: {
                label: r("WAWebFbtCommon")("Cancel"),
                onPress: p,
                variant: "borderless"
            }
        });
        const Component = r("WDSBaseCheckbox.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = r("WDSDialog.react");
        return <Component_2 closeButton={false} footer={y} headerType="expressive" layoutType="expressive" onDismiss={p} open size="sm" testid="delete-for-me-media-popup" title={h(msgList)}><div className="x6s0dn4 x1s70e7g x78zum5"><Component aria-label={f} id={g} onChange={function() {
            return d(function(e) {
                return !e;
            });
        }} testid="delete-media-file-checkbox" value={l}/><label htmlFor={g}><Component_1 colorName="contentDefault" type="Body2">{f}</Component_1></label></div></Component_2>;
    }
    Y1Component.displayName = `${Y1Component.name} [from ${i.id}]`;
    function C({ msgList, onEnd, revokable, toastPosition }) {
        const l = o("WAArrayUtils").groupBy(msgList, function(e) {
            return o("WAWebFrontendMsgGetters").getChat(e);
        });
        const c = function() {
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession();
            o("WDSDialogBridge").closeWDSDialog();
            onEnd();
        };
        const d = function() {
            l.forEach((e, t)=>{
                if (t != null && e.length > 0) {
                    o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
                        type: "message",
                        list: e
                    }, true, null, toastPosition);
                }
            });
            o("WDSDialogBridge").closeWDSDialog();
            onEnd();
        };
        const m = function() {
            if (revokable.sender > 0) {
                o("WAWebRevokeMetricUtils").UiRevokeActionHelper.senderRevoke();
            }
            if (r("WAWebEnforcementActionLogging").isSessionStarted()) {
                r("WAWebEnforcementActionLogging").logDeleteUpdateConfirmClick();
            }
            l.forEach((e, t)=>{
                if (t != null && e.length > 0) {
                    o("WAWebCmd").Cmd.sendRevokeMsgs(t, {
                        type: "message",
                        list: e
                    }, {
                        clearMedia: true,
                        toastPosition
                    });
                }
            });
            o("WDSDialogBridge").closeWDSDialog();
            onEnd();
        };
        const p = u.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            width: "fill",
            primaryButtonProps: {
                label: s._("Delete for everyone"),
                onPress: m,
                testid: "delete-revoke-dialog-confirm",
                type: "destructive",
                variant: "outline"
            },
            secondaryButtonProps: {
                label: s._("Delete for me"),
                onPress: d,
                testid: "delete-revoke-dialog-delete-for-me",
                variant: "outline"
            },
            tertiaryButtonProps: {
                label: r("WAWebFbtCommon")("Cancel"),
                onPress: c,
                testid: "delete-revoke-dialog-cancel",
                variant: "borderless"
            }
        });
        const Component = r("WDSDialog.react");
        return <Component closeButton={false} footer={p} headerType="expressive" layoutType="expressive" onDismiss={c} open size="sm" testid="delete-revoke-dialog" title={h(msgList)}/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.default = m;
}, 226);