__d("WAWebSuspendedGroupUtils", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebChatGroupUtils",
    "WAWebContactFormWrapper.react",
    "WAWebDBGroupsGroupMetadata",
    "WAWebExitAndDeleteGroupDialogV2.react",
    "WAWebExitAndDeleteGroupPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebGroupAppealApprovedModalLoadable",
    "WAWebGroupAppealInReviewModalLoadable",
    "WAWebGroupAppealRejectedModalLoadable",
    "WAWebGroupGatingUtils",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupSuspensionAppealEventsWamEvent",
    "WAWebGroupSuspensionAppealMutation",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebLoggerDebugInfo",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSuspendedGroupMediaDownloadFailureModal.react",
    "WAWebSuspendedGroupModal.react",
    "WAWebSuspendedGroupModalV2.react",
    "WAWebSuspendedGroupRedesignModalLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WAWebWamEnumSupportAiEventType",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    function m({ chat, errorMessage, uiAction, uiSurface }) {
        const chat_groupMetadata = chat.groupMetadata;
        new (o("WAWebGroupSuspensionAppealEventsWamEvent")).GroupSuspensionAppealEventsWamEvent({
            groupSuspensionAppealUiAction: uiAction,
            groupSuspensionAppealUiSurface: uiSurface,
            groupTypeClient: o("WAWebGroupType").groupTypeToGroupTypeClient(o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat_groupMetadata)),
            isAdmin: (chat_groupMetadata == null ? undefined : chat_groupMetadata.participants.iAmAdmin()) ?? false,
            groupJid: o("WAWebGroupJoinRequestMetricUtils").getSanitizedJid(chat_groupMetadata?.id),
            groupSuspensionAppealErrorMessage: errorMessage
        }).commit();
    }
    function p(e) {
        if (e === "suspended_admin" || e === "suspended_member") {
            return o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER;
        }
        if (e === "in_review_admin") {
            return o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.IN_REVIEW_FOOTER;
        }
        if (e === "rejected_admin") {
            return o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_FOOTER;
        }
        if (e === "legacy") {
            return null;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function _(e, uiAction, n) {
        const r = o("react-compiler-runtime").c(5);
        let a;
        let i;
        if (r[0] !== e || r[1] !== uiAction || r[2] !== n) {
            a = function() {
                if (n != null && e != null) {
                    m({
                        chat: e,
                        uiAction,
                        uiSurface: n
                    });
                }
            };
            i = [
                e,
                uiAction,
                n
            ];
            r[0] = e;
            r[1] = uiAction;
            r[2] = n;
            r[3] = a;
            r[4] = i;
        } else {
            a = r[3];
            i = r[4];
        }
        u_useEffect(a, i);
    }
    const f = 1250;
    const g = "group-suspend-appeal";
    const h = "cxt/?entrypointid=group-no-longer-available&platform=web";
    function y() {
        return `${o("WAWebFaqUrl").FAQ_BASE_URL}/${h}&lang=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    const Component = o("WAWebExternalLink.react").ExternalLink;
    const C = <Component href={y()} testid="learn-more-link">{s._("Learn more")}</Component>;
    function BComponent(entityId) {
        const t = r("WAWebNoop");
        const onSend = r("WAWebNoop");
        const a = " ";
        const Component = r("WAWebSuspendedGroupModal.react");
        o("WAWebModalManager").ModalManager.open(<Component title={s._("Group unavailable")} onSupportClicked={function() {
            o("WAWebModalManager").ModalManager.close();
            if (o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
                new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                    supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED
                }).commit();
            }
            const Component = r("WAWebContactFormWrapper.react");
            o("WAWebModalManager").ModalManager.open(<Component onCancel={t} onSend={onSend} supportTag={g} entityId={entityId}/>, {
                transition: "modal-flow"
            });
        }} onDismissClicked={o("WAWebModalManager").closeModalManager} showSupportBtn>{s._("This group is no longer available. Please contact WhatsApp Support for help.")}{a}{C}</Component>, {
            transition: "modal-flow"
        });
    }
    function VComponent() {
        const e = " ";
        const Component = r("WAWebSuspendedGroupModal.react");
        o("WAWebModalManager").ModalManager.open(<Component title={s._("Group unavailable")} onDismissClicked={o("WAWebModalManager").closeModalManager} showSupportBtn={false}>{s._("This group is no longer available.")}{e}{C}</Component>, {
            transition: "modal-flow"
        });
    }
    function S(e) {
        o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebSuspendedGroupModalV2.react"), {
            chat: e
        }), {
            transition: "modal-flow"
        });
    }
    function R(e) {
        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSuspendedGroupRedesignModalLoadable").SuspendedGroupRedesignModalLoadable, {
            chat: e,
            isCommunity: false
        }), {
            transition: "modal-flow"
        });
    }
    function L(e) {
        const r = e.groupMetadata?.participants.iAmAdmin() === true;
        if (!r) {
            R(e);
            return;
        }
        const o = e.groupMetadata?.suspendAppealStatus;
        e: {
            if (o === "IN_REVIEW") {
                I(e);
                break e;
            }
            if (o === "REJECTED") {
                T(e);
                break e;
            }
            {
                R(e);
                break e;
            }
        }
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = t.id;
            const entityId = a.user.toString();
            let l;
            try {
                l = yield o("WAWebGroupSuspensionAppealMutation").submitGroupSuspensionAppeal(entityId, null, JSON.stringify((yield o("WAWebLoggerDebugInfo").getDebugInfo({
                    supportTag: "group-suspend-appeal",
                    convertFields: true,
                    addUserAgentDetails: true,
                    entityId
                }))));
            } catch (error) {
                const u = r("getErrorSafe")(error);
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[GROUP_SUSPEND] Failed to submit group suspension appeal"
                ]))).catching(u).tags("GROUP_SUSPEND").sendLogs("group-suspend-appeal-error");
                l = {
                    success: false,
                    appealCreationTime: null,
                    errorMessage: u.message || JSON.stringify(u)
                };
            }
            if (l.success) {
                m({
                    chat: t,
                    uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_SUBMIT_SUCCESS,
                    uiSurface: n
                });
                yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(a, {
                    suspendAppealStatus: "IN_REVIEW",
                    suspendAppealUpdateTime: l.appealCreationTime
                });
                t.groupMetadata?.set({
                    suspendAppealStatus: "IN_REVIEW",
                    suspendAppealUpdateTime: l.appealCreationTime
                });
                o("WAWebModalManager").closeModalManager();
                I(t);
            } else {
                m({
                    chat: t,
                    errorMessage: l.errorMessage ?? "Unknown error",
                    uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_SUBMIT_FAILURE,
                    uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REQUEST_REVIEW_ERROR_DIALOG
                });
                o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Something went wrong. Please try again later.")
                }));
            }
            return l;
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebGroupAppealInReviewModalLoadable").GroupAppealInReviewModalLoadable, {
            chat: e
        }), {
            transition: "modal-flow"
        });
    }
    function T(e) {
        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebGroupAppealRejectedModalLoadable").GroupAppealRejectedModalLoadable, {
            chat: e
        }), {
            transition: "modal-flow"
        });
    }
    function D(e) {
        let t;
        const l = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) && (t = e.groupMetadata?.getParentGroupChat()) != null ? t : e;
        return l.groupMetadata?.participants.iAmAdmin() === true && l.groupMetadata?.suspendAppealStatus === "APPROVED" && l.groupMetadata?.suspendAppealApprovedSeen !== true && o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled();
    }
    function x(e) {
        let t;
        const a = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) && (t = e.groupMetadata?.getParentGroupChat()) != null ? t : e;
        a.groupMetadata?.set({
            suspendAppealApprovedSeen: true
        });
        o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(a.id, {
            suspendAppealApprovedSeen: true
        });
        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebGroupAppealApprovedModalLoadable").GroupAppealApprovedModalLoadable, {
            chat: a
        }), {
            transition: "modal-flow"
        });
    }
    function $(e) {
        if (o("WAWebABProps").getABPropConfigValue("wds_web_dialog")) {
            o("WDSDialogBridge").openWDSDialog(c.jsx(r("WAWebExitAndDeleteGroupDialogV2.react"), {
                chat: e
            }));
        } else {
            o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebExitAndDeleteGroupPopup.react"), {
                chat: e
            }), {
                transition: "modal-flow"
            });
        }
    }
    function P() {
        o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebSuspendedGroupMediaDownloadFailureModal.react"), {}), {
            transition: "modal-flow"
        });
    }
    l.logGroupSuspensionAppealEvent = m;
    l.getFooterSurface = p;
    l.useSuspensionImpression = _;
    l.STACK_BUTTONS_WIDTH = f;
    l.SUSPENDED_GROUP_SUPPORT_TAG = g;
    l.getSuspendedFaqUrl = y;
    l.openSuspendedGroupModal = BComponent;
    l.openTerminatedGroupOrNotMemberModal = VComponent;
    l.openSuspendedGroupModalV2 = S;
    l.openSuspendedGroupRedesignModal = R;
    l.openSuspendedGroupModalByAppealStatus = L;
    l.submitGroupAppeal = E;
    l.openGroupAppealInReviewModal = I;
    l.openGroupAppealRejectedModal = T;
    l.shouldShowGroupAppealApprovedModal = D;
    l.openGroupAppealApprovedModal = x;
    l.openExitAndDeleteGroupModal = $;
    l.openSuspendedGroupMediaDownloadFailureModal = P;
}, 226);