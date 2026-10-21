__d("WAWebMessageNotification.react", [
    "fbt",
    "invariant",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebBizBot1pLearnMore.react",
    "WAWebBizBotConsumerContentVariant",
    "WAWebBotGroupGatingUtils",
    "WAWebBotPrivacyNoticeNotification",
    "WAWebBotProfileGetters",
    "WAWebBrazilPaymentReceiptAddedNotification",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCAPIGroupAboutModal.react",
    "WAWebCagPhoneNumberPrivacyNux.react",
    "WAWebCallLogIcceBubble.react",
    "WAWebChatAssignmentGatingUtils",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatCollection",
    "WAWebChatConstants",
    "WAWebChatEntryPoint",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebConsumerTransparencyModalDialog.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDOIntroPopup.react",
    "WAWebDailyAggregatedStats",
    "WAWebDefaultEphemeralityDrawerLoadable",
    "WAWebDotTwoLoopsIntersectedIcon.react",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebEventsFormatEventEditNotification",
    "WAWebFaqUrl",
    "WAWebFeatureFlagName",
    "WAWebFormatCTAText",
    "WAWebFormatE2ENotification",
    "WAWebFormatEphemeralSetting",
    "WAWebFormatNotificationTemplateModalText",
    "WAWebFormatNotificationTemplateText",
    "WAWebFormatPinInChatNotification",
    "WAWebFormatSharePhoneNumber",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentPrivacyNoticeKind",
    "WAWebGroupAgentPrivacyNoticeLearnMore",
    "WAWebL10N",
    "WAWebLid1X1MigrationGating",
    "WAWebLimitSharingUIUtils",
    "WAWebLogRequestPhoneNumber",
    "WAWebLogSystemMessageClick",
    "WAWebMarketingMessagesFeedbackResumeConfirmationLoadable",
    "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
    "WAWebMessageNotificationHelpers.react",
    "WAWebMiscGatingUtils",
    "WAWebMmSignalSharingUIUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNotificationTemplateFaq",
    "WAWebNux",
    "WAWebOpenCoexSystemMessageModal.react",
    "WAWebOpenSystemMessageModal",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebPnhCagDailyUtils",
    "WAWebPollsFormatPollAddOptionNotification",
    "WAWebPrinaUtils",
    "WAWebPrivacyHighlightDailyUtils",
    "WAWebSagaModal.react",
    "WAWebSagaV1Modal.react",
    "WAWebScheduledMsgCreatedNotification",
    "WAWebSessionTransparencyNotification",
    "WAWebSharePhoneNumberModal.react",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebSupportAIInfoNuxLoadable",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessageWithSingleCTA.react",
    "WAWebTeeBotGroupTeeAddedModal.react",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumDisappearingModeEntryPointType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWamEnumPnhActionType",
    "WAWebWamEnumPnhChatTypeType",
    "WAWebWamEnumPnhEntryPointType",
    "WAWebWamEnumPnhMessageChatParty",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWid",
    "WAWebWidFactory",
    "WDSFontTokenStyles",
    "WDSIconIcDialpad.react",
    "WDSIconIcErrorFilled.react",
    "WDSIconIcInfo.react",
    "WDSIconIcSyncAlt.react",
    "WDSIconWdsIcMetaDataChevron.react",
    "WDSIconWdsIcMetaDataDoubleChevron.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSToast.react",
    "nullthrows",
    "react",
    "stylex",
    "useWAWebContactValues",
    "useWAWebGetFeatureFlag",
    "useWAWebIsWinHybridJoinableCallsEnabled",
    "useWAWebMsgValues",
    "useWAWebNux",
    "useWAWebOptionalBotProfileValues"
], function(t, n, r, o, a, i, l, s, u) {
    let e;
    const c = [
        "ref"
    ];
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = m;
    const { useEffect, useImperativeHandle, useRef } = _;
    function y(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, c);
        const i_msg = i.msg;
        const m = o("useWAWebContactValues").useOptionalContactValues(i.contact?.id, [
            o("WAWebFrontendContactGetters").getShareOwnPn,
            o("WAWebContactGetters").getId,
            o("WAWebContactGetters").getIsEnterprise,
            o("WAWebFrontendContactGetters").getIsContactBlocked,
            o("WAWebContactGetters").getVerifiedLevel,
            o("WAWebContactGetters").getVerifiedName
        ]);
        const _ = m?.[0];
        const y = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL);
        const C = y[1];
        const bRef = useRef(null);
        const v = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
            o("WAWebMsgGetters").getId,
            o("WAWebMsgGetters").getBody,
            o("WAWebMsgGetters").getFrom,
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getSubtype,
            o("WAWebMsgGetters").getTemplateParams,
            o("WAWebMsgGetters").getEphemeralDuration,
            o("WAWebMsgGetters").getEphemeralSettingUser
        ]);
        const S = v[0];
        const R = v[1];
        const L = v[2];
        const E = v[3];
        const k = v[4];
        const I = v[5];
        const T = v[6];
        const D = v[7];
        const x = o("WAWebFrontendMsgGetters").getChat(i_msg.unsafe());
        const botGroupParticipant = i_msg.unsafe().botGroupParticipant;
        const PRef = useRef(null);
        const N = function(t) {
            bRef.current?.click();
            PRef.current?.handleKeyActivation(t);
        };
        useImperativeHandle(t_ref, function() {
            return {
                handleKeyActivation: N
            };
        });
        useEffect(function() {
            if (E === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION && k === "encrypt" && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && o("WAWebPrinaUtils").chatContainsGoldenBox(x)) {
                const e = o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(x.id);
                if (e != null) {
                    o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(e, o("WAWebDailyAggregatedStats").PrinaDailyActionType.NARRATIVE_APPEAR);
                }
            }
        }, []);
        const M = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(x.contact.id, [
            o("WAWebBotProfileGetters").getPosingAsProfessional,
            o("WAWebBotProfileGetters").getProduct,
            o("WAWebBotProfileGetters").getIsDeprecated,
            o("WAWebBotProfileGetters").getIsDeleted
        ]);
        const w = M[0];
        o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(k === "group_transition_to_bot_group" ? o("WAWebGroupAgentPrivacyNoticeKind").getGroupAgentPrivacyNoticeProfileAgent(I) : null, [
            o("WAWebBotProfileGetters").getProduct,
            o("WAWebBotProfileGetters").getName
        ]);
        const enabled = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled;
        const winHybridJoinableCallsEnabled = o("useWAWebIsWinHybridJoinableCallsEnabled").useIsWinHybridJoinableCallsEnabled();
        const O = o("WDSToast.react").useWDSToast();
        const O_showToast = O.showToast;
        let W;
        let q;
        let U;
        let V;
        let H;
        let G;
        let z;
        let j;
        let systemMessageType;
        switch(E){
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
                q = R;
                if (k === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated) {
                    const Q = o("WAWebScheduledMsgCreatedNotification").getScheduledMsgCreatedNotification(x, O_showToast);
                    q = Q.text;
                    U = Q.ctaText;
                    W = Q.icon;
                    j = Q.handleClick;
                } else if (k === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BrazilPaymentReceiptAdded) {
                    const X = o("WAWebBrazilPaymentReceiptAddedNotification").getBrazilPaymentReceiptAddedNotification(x, I);
                    q = X.text;
                    V = X.inlineCtaText;
                    j = X.handleClick;
                }
                break;
            case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
                {
                    const Y = o("WAWebStateUtils").unproxy(i_msg);
                    if (Y.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION) {
                        u(0, 69177);
                    }
                    q = o("WAWebFormatE2ENotification").formatE2ENotification(Y);
                    systemMessageType = o("WAWebFormatE2ENotification").getE2ENotificationEnum(Y);
                    U = r("WAWebFormatCTAText")({
                        type: E,
                        id: Y.id
                    });
                    const e2eSubtype = k;
                    const participantJid = R ? o("WAWebWidFactory").createWid(R) : null;
                    const ee = S.remote;
                    const te = o("WAWebMsgGetters").getIsCAPISupport(i_msg.unsafe());
                    if (te || ee.isSupportAgentBot()) {
                        j = function() {
                            if (o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() && te) {
                                o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable, {}), {
                                    transition: "modal-flow"
                                });
                            } else {
                                const e = o("WAWebFormatNotificationTemplateModalText").formatFbModalText(false, true);
                                const t = o("WAWebFaqUrl").getSupportChatSafetyFaqUrl();
                                o("WAWebOpenSystemMessageModal").openSystemMessageModal(e, t);
                            }
                        };
                    } else if (e2eSubtype === "group_transition_to_tee_bot_group") {
                        j = function() {
                            o("WAWebModalManager").ModalManager.open(p.jsx(r("WAWebTeeBotGroupTeeAddedModal.react"), {}));
                        };
                        W = p.jsx(o("WAWebMessageNotificationHelpers.react").TeeBotE2ENotificationIcon, {
                            msg: Y
                        });
                    } else {
                        j = function() {
                            o("WAWebMessageNotificationHelpers.react").handleSecurityClick({
                                accountLid: x.accountLid,
                                chatId: ee,
                                e2eSubtype,
                                msg: i_msg,
                                participantJid
                            });
                        };
                        W = p.jsx(o("WAWebMessageNotificationHelpers.react").E2ENotificationIcon, {
                            msg: Y
                        });
                    }
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
                return p.jsx(r("WAWebCallLogIcceBubble.react"), {
                    chat: x,
                    contact: i.contact,
                    displayAuthor: i.displayAuthor,
                    elRef: bRef,
                    forwardClickRef: PRef,
                    msg: i_msg,
                    winHybridJoinableCallsEnabled
                });
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
                {
                    let ne;
                    if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                        ne = x.accountLid;
                    }
                    if (k === "change_number") {
                        const re = I[0];
                        const oe = I[1];
                        const ae = I[2];
                        const ie = I[3];
                        const le = o("WAWebFrontendContactGetters").getFormattedName(o("WAWebContactCollection").ContactCollection.gadd(re));
                        const se = r("WAWebWid").equals(x.id, re);
                        const ue = r("WAWebWid").equals(x.id, ae);
                        q = ue || se ? s._("{name} changed their phone number to a new number. Click to message the new number.", [
                            s._param("name", le)
                        ]) : s._("{name} changed their phone number. You're currently chatting with their new number.", [
                            s._param("name", le)
                        ]);
                        if (ue || se) {
                            j = function() {
                                return o("WAWebMessageNotificationHelpers.react").handleChangeNumberClick(oe, re);
                            };
                        }
                    } else if (k === "chat_assignment" || k === "chat_assignment_unassign") {
                        const ce = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = ce.text;
                        U = ce.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        W = <div className="x1rg5ohu x1gslohp xbelrpt x16dsc37">{p.jsx(r("WDSIconWdsIcTransferOwnership.react"), {
                            width: 18,
                            height: 18
                        })}</div>;
                        if (enabled && o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
                            j = function() {
                                const e = o("WAWebChatCollection").ChatCollection.get(S.remote);
                                if (e != null) {
                                    o("WAWebCmd").Cmd.assignChat(e, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.SYSTEM_MESSAGE);
                                }
                            };
                        }
                    } else if (k === "masked_thread_created") {
                        const de = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                        const me = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = me.text;
                        U = me.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconIcDialpad.react"), {
                            width: 16,
                            height: 16,
                            testid: "dialpad-small"
                        })}</div>;
                        H = "masked_thread_created_system_message";
                        j = function() {
                            o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
                                action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR,
                                chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
                                chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                                entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE
                            });
                            if (_ !== true) {
                                o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebSharePhoneNumberModal.react").SharePhoneNumberModal, {
                                    entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE
                                }));
                            } else if (de != null) {
                                o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebSharePhoneNumberModal.react").PostSharePhoneNumberModal, {
                                    entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE,
                                    mePnUser: de
                                }));
                            }
                        };
                    } else if (k === "cag_masked_thread_created") {
                        const _e = o("WAWebChatCollection").ChatCollection.get(S.remote);
                        const fe = _e?.groupMetadata?.parentGroup;
                        const ge = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = ge.text;
                        U = ge.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconIcDialpad.react"), {
                            width: 16,
                            height: 16,
                            testid: "dialpad-small"
                        })}</div>;
                        j = function() {
                            if (fe) {
                                o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(fe, o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType.PNH_INDICATOR_CLICKS_CHAT);
                            }
                            const e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                            if (e) {
                                let t;
                                o("WAWebModalManager").ModalManager.open(_e != null && (t = _e.groupMetadata) != null && t.participants.iAmAdmin() ? p.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberSharedNux, {}) : p.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberHiddenNux, {}));
                            }
                        };
                    } else if (i_msg.subtype === "disappearing_mode" || i_msg.subtype === "disappearing_mode_update" || i_msg.subtype === "disappearing_mode_unsupported") {
                        const he = o("WAWebChatEphemerality").shouldShowEphemeralSetting(x);
                        W = o("WAWebMessageNotificationHelpers.react").renderDisappearingIcon();
                        if (k === "disappearing_mode") {
                            const ye = he ? o("WAWebFormatEphemeralSetting").getDefaultDisappearingModeParts(o("WAWebStateUtils").unproxy(i_msg.unsafe())) : null;
                            if (ye != null) {
                                q = ye.text;
                                V = ye.ctaText;
                            } else {
                                q = o("WAWebFormatEphemeralSetting").getDefaultDisappearingModeSystemMessageText(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                            }
                            if (he) {
                                j = function() {
                                    const Component = o("WAWebDefaultEphemeralityDrawerLoadable").DefaultEphemeralityDrawerLoadable;
                                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onClose={o("WAWebDrawerManager").closeDrawerLeft} entryPoint={o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.SYSTEM_MESSAGE}/>);
                                };
                            }
                        } else if (k === "disappearing_mode_update") {
                            const Ce = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(i_msg.id.remote));
                            if (he) {
                                const be = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateParts(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                                q = be.text;
                                V = be.ctaText;
                                j = function() {
                                    return o("WAWebMessageNotificationHelpers.react").handleEphemeralClick(Ce);
                                };
                            } else {
                                q = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateSystemMessageText(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                            }
                        } else {
                            if (k === "disappearing_mode_unsupported") {
                                q = o("WAWebFormatEphemeralSetting").getDMUnsupportedSystemMessageText();
                            }
                        }
                    } else if (k === "sender_invite") {
                        const ve = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = ve.text;
                        U = ve.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                    } else if (k === "biz_bot_1p_disclosure") {
                        const Se = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = Se.text;
                        U = Se.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        const Re = o("WAWebBizBotConsumerContentVariant").getBizBotConsumerContentVariant();
                        W = Re === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconIcInfo.react"), {
                            width: 16,
                            height: 16
                        })}</div> : <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
                            width: 16,
                            height: 16,
                            testid: "double-chevron-in-circle"
                        })}</div>;
                        j = function() {
                            o("WAWebModalManager").ModalManager.open(p.jsx(r("WAWebBizBot1pLearnMore.react"), {}));
                        };
                    } else if (k === "bot_init" || k === "bot_invoke_disclaimer") {
                        const Le = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()), false, w);
                        q = Le.text;
                        U = Le.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        j = o("WAWebBotPrivacyNoticeNotification").getBotPrivacyNoticeClickHandler(botGroupParticipant, S.remote, k);
                    } else if (k === "change_username") {
                        const Ee = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = Ee.text;
                        U = Ee.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        H = "change_username_system_message";
                    } else if (k === "change_lid") {
                        const ke = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = ke.text;
                        U = ke.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        H = "change_lid_system_message";
                        const Ie = I.find((e)=>r("WAWebWid").isWid(e));
                        const Te = Ie != null && typeof Ie === "string" ? o("WAWebWidFactory").createWid(Ie) : Ie;
                        if (Te && Te.isLid()) {
                            j = function() {
                                o("WAWebMessageNotificationHelpers.react").handleChangeLidClick(Te);
                            };
                        }
                    } else if (k === "saga_init") {
                        const De = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = De.text;
                        U = De.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        j = function() {
                            o("WAWebModalManager").ModalManager.open(o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() ? p.jsx(r("WAWebSagaV1Modal.react"), {}) : p.jsx(r("WAWebSagaModal.react"), {}));
                        };
                    } else if (k === "biz_account_type_is_hosted" || k === "biz_account_type_changed_to_hosted") {
                        const xe = S.remote;
                        const $e = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = $e.text;
                        U = $e.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        j = function() {
                            o("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal({
                                faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
                                lid: ne,
                                shouldHideVerificationButton: o("WAWebABProps").getABPropConfigValue("coex_calling_enabled"),
                                text: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalText(true),
                                textLast: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextLastParagraph(),
                                wid: xe
                            });
                        };
                    } else if (k === "biz_me_account_type_is_hosted" || k === "biz_me_account_type_is_hosted_transition") {
                        const Pe = S.remote;
                        const Ne = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = Ne.text;
                        U = Ne.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        j = function() {
                            o("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal({
                                faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
                                lid: ne,
                                shouldHideVerificationButton: o("WAWebABProps").getABPropConfigValue("coex_calling_enabled"),
                                text: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextForYourBusiness(),
                                textLast: null,
                                wid: Pe
                            });
                        };
                    } else if (k === "is_capi_hosted_group") {
                        const Me = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = Me.text;
                        U = Me.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        z = o("WAWebFormatNotificationTemplateModalText").formatNotificationTemplateModalText(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        if (z != null) {
                            j = function() {
                                o("WAWebOpenSystemMessageModal").openSystemMessageModal(p.jsx(o("WAWebCAPIGroupAboutModal.react").CAPIGroupAboutModalContent, {}), o("WAWebCAPIGroupAboutModal.react").CAPI_GROUP_ABOUT_MODAL_LEARN_MORE_URL);
                            };
                        }
                    } else if (o("WAWebMsgGetters").getIsCAPISupport(i_msg) && o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() && (k === "biz_privacy_mode_init_fb" || k === "support_system_message")) {
                        const we = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = we.text;
                        U = we.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        j = function() {
                            o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable, {}), {
                                transition: "modal-flow"
                            });
                        };
                    } else if (k === "marketing_messages_from_business_stopped") {
                        const Ae = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = Ae.text;
                        U = Ae.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        j = function() {
                            if (x.contact.isContactOptedOut) {
                                o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebMarketingMessagesFeedbackResumeConfirmationLoadable").WAWebMarketingMessagesFeedbackResumeConfirmationLoadable, {
                                    chat: x,
                                    logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.SYSTEM_MESSAGE
                                }), {
                                    transition: "default"
                                });
                            }
                        };
                    } else if (k === "marketing_messages_from_business_resumed") {
                        const Fe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = Fe.text;
                        U = Fe.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        j = function() {
                            if (!x.contact.isContactOptedOut) {
                                o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable").WAWebMarketingMessagesFeedbackStopConfirmationLoadable, {
                                    chat: x,
                                    logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.SYSTEM_MESSAGE
                                }), {
                                    transition: "modal-flow"
                                });
                            }
                        };
                    } else if (k === "marketing_messages_post_send_opt_out") {
                        const Oe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = Oe.text;
                        U = s._("Stop");
                        j = function() {
                            if (!x.contact.isContactOptedOut) {
                                o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable").WAWebMarketingMessagesFeedbackStopConfirmationLoadable, {
                                    chat: x,
                                    logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.POST_SEND_SYSTEM_MESSAGE
                                }), {
                                    transition: "modal-flow"
                                });
                            }
                        };
                    } else if (k === "limit_sharing_system_message") {
                        const Be = o("WAWebLimitSharingUIUtils").getLimitSharingMessageNotification(x, i_msg);
                        q = Be.text;
                        U = Be.ctaText;
                        j = Be.handleClick;
                    } else if (k === "acp2_system_message") {
                        const We = o("WAWebLimitSharingUIUtils").getAcp2MessageNotification(x, i_msg);
                        q = We.text;
                        V = We.ctaText;
                        j = We.handleClick;
                    } else if (k === "mm_signal_sharing_system_message") {
                        const qe = o("WAWebMmSignalSharingUIUtils").getMmSignalSharingMessageNotification(x);
                        q = qe.text;
                        U = qe.ctaText;
                        j = qe.handleClick;
                        W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconWdsIcMetaDataChevron.react"), {
                            testid: "single-chevron-in-circle",
                            width: 16,
                            height: 16
                        })}</div>;
                    } else if (k === "bot_session_transparency_notice") {
                        const Ue = r("nullthrows")(i_msg.botSessionTransparencyType, "botSessionTransparencyType should not be null for bot_session_transparency_notice subtype");
                        const Ve = o("WAWebSessionTransparencyNotification").getBotSessionTransparencySystemMessageNotification(Ue);
                        q = Ve.text;
                        j = Ve.handleClick;
                    } else if (k === "biz_automatically_labeled_chat_system_message") {
                        const He = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = He.text;
                        U = He.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        G = "xd4r4e8 x1tawftj x14ug900";
                        const Component = o("WAWebText.react").WAWebClickableText;
                        U = <Component weight="bold" color="primary">{r("WAWebFormatCTAText")({
                            type: E,
                            subtype: k,
                            id: i_msg.id
                        })}</Component>;
                        W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(o("WAWebDotTwoLoopsIntersectedIcon.react").DotTwoLoopsIntersectedIcon, {
                            width: 16,
                            height: 16,
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: 24,
                                height: 24
                            }
                        })}</div>;
                        j = function() {
                            const Component = r("WAWebDOIntroPopup.react");
                            o("WAWebModalManager").ModalManager.open(<Component onContinue={function() {
                                C();
                                o("WAWebModalManager").ModalManager.close();
                            }} surfaceType={o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT}/>);
                        };
                    } else if (k === "biz_per_customer_3pd_data_share_opt_in" || k === "biz_per_customer_3pd_data_share_opt_out") {
                        H = "per_customer_data_sharing_system_message";
                        const je = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = je.text;
                        G = "xd4r4e8 x1tawftj x14ug900";
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        const Component = o("WAWebText.react").WAWebClickableText;
                        U = <Component weight="bold" color="primary">{r("WAWebFormatCTAText")({
                            type: E,
                            subtype: k,
                            id: i_msg.id
                        })}</Component>;
                        W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconIcSyncAlt.react"), {
                            width: 16,
                            height: 16,
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: 24,
                                height: 24
                            }
                        })}</div>;
                        const accountLid = x.accountLid?.toString() ?? "";
                        j = function() {
                            o("WAWebPerCustomerDataSharingUtils").getModalForPerCustomerDataSharing({
                                accountLid,
                                chat: x,
                                entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.DATA_SHARING_SYSTEM_MESSAGE,
                                perCustomerEntryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SYSTEM_MESSAGE
                            });
                        };
                    } else if (k === "ctwa_consumer_data_sharing_disclosure_system_message") {
                        H = "ctwa_consumer_data_sharing_disclosure_system_message";
                        const Qe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = Qe.text;
                        G = "xd4r4e8 x1tawftj x14ug900";
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        const Component = o("WAWebText.react").WAWebClickableText;
                        U = <Component weight="bold" color="primary">{r("WAWebFormatCTAText")({
                            type: E,
                            subtype: k,
                            id: i_msg.id
                        })}</Component>;
                        W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconWdsIcMetaDataChevron.react"), {
                            testid: "single-chevron-in-circle",
                            width: 16,
                            height: 16
                        })}</div>;
                        j = function() {
                            o("WAWebConsumerTransparencyModalDialog.react").showConsumerTransparencyModalDialog();
                        };
                    } else if ((o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) && k === "group_transition_to_bot_group") {
                        const Xe = o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        const Ye = r("WAWebFormatNotificationTemplateText")(Xe);
                        q = Ye.text;
                        U = Ye.ctaText;
                        if (o("WAWebGroupAgentPrivacyNoticeLearnMore").hasGroupTransitionToBotGroupLearnMore(Xe.templateParams)) {
                            j = function() {
                                return o("WAWebGroupAgentPrivacyNoticeLearnMore").openGroupTransitionToBotGroupLearnMore(Xe.templateParams);
                            };
                        }
                    } else if (k === "biz_broadcast_status") {
                        const Ze = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = Ze.text;
                        U = s._("View");
                        const et = i_msg.templateParams?.[0] != null ? Number(i_msg.templateParams[0].toString()) : 0;
                        if (et > 0) {
                            W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(o("WAWebSpinner.react").Spinner, {
                                size: 16
                            })}</div>;
                        } else {
                            W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconIcErrorFilled.react"), {
                                width: 19,
                                height: 19,
                                colorName: "secondaryNegative"
                            })}</div>;
                        }
                        j = function() {
                            o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.bbThreadSystemMessageCtaClicked();
                            const Component = o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable;
                            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(<Component entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD} onClose={function() {
                                return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
                            }}/>);
                        };
                        H = "biz_broadcast_status_system_message";
                    } else {
                        const tt = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        q = tt.text;
                        U = tt.ctaText;
                        o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        z = o("WAWebFormatNotificationTemplateModalText").formatNotificationTemplateModalText(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        if (z != null) {
                            const nt = r("WAWebNotificationTemplateFaq")(k, i_msg.id.remote);
                            j = function() {
                                o("WAWebOpenSystemMessageModal").openSystemMessageModal(z, nt);
                            };
                        }
                    }
                    if (o("WAWebMessageNotificationHelpers.react").showInfoIcon(E, k)) {
                        W = <div className="x1rg5ohu x1gslohp x2fvf9 x16dsc37 xhslqc4">{p.jsx(r("WDSIconIcInfo.react"), {
                            width: 12,
                            height: 15
                        })}</div>;
                    }
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
                {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebMessageNotification: protocol"
                    ])));
                    const rt = L;
                    const ot = S.remote;
                    const at = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                    if (k === "ephemeral_setting") {
                        if (o("WAWebChatEphemerality").shouldShowEphemeralSetting(x)) {
                            const it = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateParts(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                            q = it.text;
                            V = it.ctaText;
                            j = function() {
                                o("WAWebMessageNotificationHelpers.react").handleEphemeralClick(x);
                            };
                        } else {
                            q = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateSystemMessageText(o("WAWebStateUtils").unproxy(i_msg.unsafe()));
                        }
                        W = o("WAWebMessageNotificationHelpers.react").renderDisappearingIcon();
                        H = "ephemeral_system_message";
                    } else if (k === "share_phone_number") {
                        q = r("WAWebFormatSharePhoneNumber")(rt, ot, S.fromMe);
                        j = function() {
                            if (at != null) {
                                o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebSharePhoneNumberModal.react").PostSharePhoneNumberModal, {
                                    mePnUser: at
                                }));
                            }
                        };
                        W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconIcDialpad.react"), {
                            width: 16,
                            height: 16,
                            testid: "dialpad-small"
                        })}</div>;
                        H = "share_phone_number_system_message";
                    } else if (k === "event_edit_decrypted") {
                        const lt = o("WAWebStateUtils").unproxy(i_msg.unsafe());
                        const st = o("WAWebMsgCollection").MsgCollection.get(lt.protocolMessageKey);
                        q = o("WAWebEventsFormatEventEditNotification").formatEventEditNotification(lt);
                        U = st ? r("WAWebFormatCTAText")({
                            type: E,
                            subtype: k
                        }) : "";
                        j = function() {
                            if (st != null) {
                                const e = o("WAWebFrontendMsgGetters").getAsEventCreation(st);
                                if (e != null) {
                                    o("WAWebCmd").Cmd.openEventInfoDrawer(x, e);
                                }
                            }
                        };
                    } else if (k === "limit_sharing_system_message") {
                        const ut = o("WAWebLimitSharingUIUtils").getLimitSharingMessageNotification(x, i_msg);
                        q = ut.text;
                        U = ut.ctaText;
                        j = ut.handleClick;
                    } else if (k === "acp2_system_message") {
                        const ct = o("WAWebLimitSharingUIUtils").getAcp2MessageNotification(x, i_msg);
                        q = ct.text;
                        V = ct.ctaText;
                        j = ct.handleClick;
                    } else if (k === "mm_signal_sharing_system_message") {
                        const dt = o("WAWebMmSignalSharingUIUtils").getMmSignalSharingMessageNotification(x);
                        q = dt.text;
                        U = dt.ctaText;
                        j = dt.handleClick;
                        W = <div className="x1rg5ohu x2fvf9 xg49k01">{p.jsx(r("WDSIconWdsIcMetaDataChevron.react"), {
                            testid: "single-chevron-in-circle",
                            width: 16,
                            height: 16
                        })}</div>;
                    }
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED:
                {
                    q = o("WAWebPollsFormatPollAddOptionNotification").formatPollAddOptionNotification(o("WAWebStateUtils").unproxy(i_msg).unsafe());
                    U = r("WAWebFormatCTAText")({
                        type: E
                    });
                    H = "poll_add_option_system_message";
                    const mt = o("WAWebStateUtils").unproxy(i_msg.unsafe()).parentMsgKey;
                    j = function() {
                        const e = mt != null ? o("WAWebMsgCollection").MsgCollection.get(mt) : null;
                        if (e != null && o("WAWebFrontendMsgGetters").getAsPollCreation(e) != null) {
                            const msgContext = o("WAWebChatMessageSearch").getSearchContext({
                                chat: x,
                                msgKey: e.id
                            });
                            o("WAWebCmd").Cmd.openChatAt({
                                chat: x,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatPollNotification,
                                msgContext
                            });
                        }
                    };
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE:
                {
                    q = o("WAWebFormatPinInChatNotification").formatPinInChatNotification(o("WAWebStateUtils").unproxy(i_msg).unsafe());
                    H = "pinned_message_system_message";
                    break;
                }
        }
        const pt = p.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
            text: q,
            breakWord: true
        });
        const _t = ()=>{
            const isANewThread = !(x.msgs.some((e)=>o("WAWebMsgGetters").isRealMessage(e)) || x.endOfHistoryTransferType === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE);
            const systemMessageCategory = o("WAWebSystemMessageWithSingleCTA.react").getSystemMessageCategoryType(E);
            if (systemMessageCategory != null && systemMessageType != null) {
                o("WAWebLogSystemMessageClick").logSystemMessageClick({
                    isAGroup: o("WAWebChatGetters").getIsGroup(x),
                    isANewThread,
                    systemMessageCategory,
                    systemMessageType
                });
            }
        };
        let ft;
        if (o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() && U != null) {
            const Component = o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA;
            ft = <Component bodyText={pt} ctaText={U} className={G} icon={W} onClick={function() {
                _t();
                j?.();
            }} onclickRef={bRef} testid={H ?? "system_message"}/>;
        } else if (V != null) {
            const gt = <span data-testid={H ?? "system_message"}>{W}{pt} <span {...babelHelpers.extends({}, (d || (d = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized), {
                children: V
            })}/></span>;
            if (j) {
                return <div role="button" ref={bRef} onClick={function() {
                    _t();
                    j?.();
                }}>{gt}</div>;
            }
            ft = gt;
        } else {
            ft = <span data-testid={H ?? "system_message"}>{W}{pt}</span>;
            if (j) {
                return <div role="button" ref={bRef} onClick={function() {
                    if (o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled()) {
                        _t();
                    }
                    j?.();
                }}>{ft}</div>;
            }
        }
        return <span>{ft}</span>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    l.default = y;
}, 226);