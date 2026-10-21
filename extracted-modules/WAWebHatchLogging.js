__d("WAWebHatchLogging", [
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchUserJourneyWamEvent",
    "WAWebThreadJourneyLogger",
    "WAWebUnifiedSession",
    "WAWebWamEnumConnectorPermissionFlow",
    "WAWebWamEnumConnectorType",
    "WAWebWamEnumFeatureEntryPoint",
    "WAWebWamEnumHatchActionType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        _(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.BROWSER_CARD_IMPRESSION, e, JSON.stringify({
            browser_card_state: e.state
        }));
    }
    function u(e) {
        const e_terminalReason = e.terminalReason;
        const n = e_terminalReason != null && e_terminalReason.trim() !== "";
        _(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.BROWSER_CARD_IMPRESSION_ERROR, {
            isEligible: e.isEligible,
            taskID: e.taskID
        }, n ? JSON.stringify({
            browser_failure_reason: e_terminalReason
        }) : undefined);
    }
    function c() {
        m(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.BROWSER_CARD_TAP);
    }
    function d(e) {
        m(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.BROWSER_TAKE_CONTROL_TAP, e);
    }
    function m(e, browser_surface) {
        B(e, {
            hatchUserJourneyMetadata: browser_surface != null ? JSON.stringify({
                browser_surface
            }) : undefined
        });
    }
    const p = new Map;
    function _(e, t, hatchUserJourneyMetadata) {
        const o = t.taskID.slice(t.taskID.lastIndexOf(":") + 1);
        if (!(!t.isEligible || o.trim() === "")) {
            let a = p.get(e);
            if (a?.has(o) !== true && B(e, {
                hatchUserJourneyMetadata
            })) {
                if (a == null) {
                    a = new Set;
                    p.set(e, a);
                }
                a.add(o);
            }
        }
    }
    function f(e) {
        try {
            B(e === "surface_impression" ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.IDEA_SURFACE_IMPRESSION : e === "card_tap" ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.IDEA_CARD_TAP : e === "task_confirm_tap" ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.IDEA_TASK_CONFIRM_TAP : e === "prompt_sent" ? o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.IDEA_PROMPT_SENT : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })());
        } catch (e) {}
    }
    function g(e) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.REQUEST_WELCOME_MSG_SENT, e);
    }
    function h(e) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.TAP_UNLINK_BUTTON, e);
    }
    function y(e) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.UNLINK_SUCCESS, e);
    }
    function C(hitlIsMulti, t, n) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_BOTTOM_SHEET_IMPRESSION, babelHelpers.extends({}, n, {
            hitlIsMulti,
            hitlTypes: b(t)
        }));
    }
    function b(e) {
        return e.map((e)=>{
            if (e.trim() === "") {
                return "unknown";
            }
            return e;
        }).join(", ");
    }
    function v(e) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_DETAIL_IMPRESSION, babelHelpers.extends({}, e, {
            hitlIsMulti: false
        }));
    }
    function S(hitlLegalLink, t) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_LEGAL_LINK_TAP, babelHelpers.extends({}, t, {
            hitlLegalLink
        }));
    }
    function R(e, t) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_PAYMENT_DETAILS_IMPRESSION, babelHelpers.extends({}, t, {
            hitlIsMulti: false,
            hitlTypes: b([
                e
            ])
        }));
    }
    function L(e, t) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_CART_DETAILS_IMPRESSION, babelHelpers.extends({}, t, {
            hitlIsMulti: false,
            hitlTypes: b([
                e
            ])
        }));
    }
    function E(e, t) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_ORDER_SUMMARY_IMPRESSION, babelHelpers.extends({}, t, {
            hitlIsMulti: false,
            hitlTypes: b([
                e
            ])
        }));
    }
    function k(e, t) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_WALLET_PICKER_IMPRESSION, babelHelpers.extends({}, t, {
            hitlIsMulti: false,
            hitlTypes: b([
                e
            ])
        }));
    }
    function I(e, t) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_WALLET_CARD_SELECTED, babelHelpers.extends({}, t, {
            hitlIsMulti: false,
            hitlTypes: b([
                e
            ])
        }));
    }
    function T(rawHitlDecisionKind, rawHitlAlwaysScope, n) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.HITL_DECISION_TAP, babelHelpers.extends({}, n, {
            rawHitlAlwaysScope,
            rawHitlDecisionKind
        }));
    }
    const D = {
        card_impression: (e = o("WAWebWamEnumHatchActionType")).HATCH_ACTION_TYPE.SECURE_CREDENTIAL_CARD_IMPRESSION,
        card_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_CARD_TAP,
        sheet_impression: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SHEET_IMPRESSION,
        save_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SAVE_TAP,
        cancel_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_CANCEL_TAP,
        save_success: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SAVE_SUCCESS,
        setting_page_tap: e.HATCH_ACTION_TYPE.SETTING_PAGE_SECURE_CREDENTIAL_TAP,
        list_impression: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_LIST_IMPRESSION,
        null_state_impression: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_NULL_STATE_IMPRESSION,
        detail_impression: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DETAIL_IMPRESSION,
        edit_save_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_EDIT_SAVE_TAP,
        delete_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_TAP,
        delete_confirm: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_CONFIRM,
        delete_cancel_tap: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_CANCEL_TAP,
        delete_success: e.HATCH_ACTION_TYPE.SECURE_CREDENTIAL_DELETE_SUCCESS
    };
    const x = {
        chat: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.CHAT,
        settings: o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT.SETTINGS
    };
    function $(e, t) {
        B(D[e], {
            featureEntryPoint: x[t]
        });
    }
    function P(e, t) {
        B(o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.SECURE_CREDENTIAL_SAVE_ERROR, {
            featureEntryPoint: x[t],
            hatchUserJourneyMetadata: JSON.stringify({
                secure_credential_failure_reason: e.reason,
                secure_credential_failure_reason_raw: e.raw
            })
        });
    }
    const N = {
        connect_message_impression: e.HATCH_ACTION_TYPE.CONNECTOR_CONNECT_MESSAGE_IMPRESSION,
        connect_message_tapped: e.HATCH_ACTION_TYPE.CONNECTOR_CONNECT_MESSAGE_TAPPED,
        bottom_sheet_impression: e.HATCH_ACTION_TYPE.CONNECTOR_BOTTOM_SHEET_IMPRESSION,
        bottom_sheet_connect_tap: e.HATCH_ACTION_TYPE.CONNECTOR_BOTTOM_SHEET_CONNECT_TAP,
        cancel_tap: e.HATCH_ACTION_TYPE.CONNECTOR_CANCEL_TAP,
        auth_web_start: e.HATCH_ACTION_TYPE.CONNECTOR_AUTH_WEB_START,
        auth_success: e.HATCH_ACTION_TYPE.CONNECTOR_AUTH_SUCCESS,
        auth_error: e.HATCH_ACTION_TYPE.CONNECTOR_AUTH_ERROR,
        connectors_tap: e.HATCH_ACTION_TYPE.CONNECTORS_TAP,
        connect_tap: e.HATCH_ACTION_TYPE.CONNECT_TAP,
        add_account_tap: e.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_TAP,
        add_account_web_start: e.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_WEB_START,
        add_account_success: e.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_SUCCESS,
        add_account_error: e.HATCH_ACTION_TYPE.CONNECTOR_ADD_ACCOUNT_ERROR,
        search_tap: e.HATCH_ACTION_TYPE.CONNECTOR_SEARCH_TAP,
        search_success: e.HATCH_ACTION_TYPE.CONNECTOR_SEARCH_SUCCESS,
        permission_tap: e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_TAP,
        permission_web_start: e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_WEB_START,
        permission_success: e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_SUCCESS,
        permission_error: e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_ERROR,
        permission_decision_tap: e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_DECISION_TAP,
        permission_impression: e.HATCH_ACTION_TYPE.CONNECTOR_PERMISSION_IMPRESSION,
        legal_link_tap: e.HATCH_ACTION_TYPE.CONNECTOR_LEGAL_LINK_TAP,
        disconnect_tap: e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_TAP,
        disconnect_success: e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_SUCCESS,
        disconnect_error: e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_ERROR,
        disconnect_bottom_sheet_impression: e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_BOTTOM_SHEET_IMPRESSION,
        disconnect_confirm_tap: e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_CONFIRM_TAP,
        disconnect_cancel_tap: e.HATCH_ACTION_TYPE.CONNECTOR_DISCONNECT_CANCEL_TAP
    };
    const M = {
        web: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.WEB,
        device: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.DEVICE,
        custom: o("WAWebWamEnumConnectorType").CONNECTOR_TYPE.CUSTOM
    };
    const w = {
        new_auth_needed: o("WAWebWamEnumConnectorPermissionFlow").CONNECTOR_PERMISSION_FLOW.NEW_AUTH_NEEDED,
        device: o("WAWebWamEnumConnectorPermissionFlow").CONNECTOR_PERMISSION_FLOW.DEVICE
    };
    function A(e, t) {
        if (o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()) {
            const n = t?.connectorType;
            const r = t?.permissionFlow;
            B(N[e], {
                connectorId: t?.connectorId,
                connectorPermissionDecisionType: t?.permissionDecisionType,
                connectorPermissionFlow: r != null ? w[r] : undefined,
                connectorPermissionType: t?.permissionType,
                connectorType: n != null ? M[n] : undefined
            });
        }
    }
    const F = new Set;
    function O(e, t) {
        if (!(!o("WAWebHatchFrontendGating").isHatchConnectorsEnabled() || F.has(e))) {
            F.add(e);
            A("connect_message_impression", t);
        }
    }
    function B(hatchActionType, t) {
        if (!o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
            return false;
        }
        const s = new (o("WAWebHatchUserJourneyWamEvent")).HatchUserJourneyWamEvent({
            connectorId: t?.connectorId,
            connectorPermissionDecisionType: t?.connectorPermissionDecisionType,
            connectorPermissionFlow: t?.connectorPermissionFlow,
            connectorPermissionType: t?.connectorPermissionType,
            connectorType: t?.connectorType,
            featureEntryPoint: t?.featureEntryPoint,
            hatchActionType,
            hatchUserJourneyMetadata: t?.hatchUserJourneyMetadata,
            hitlIsMulti: t?.hitlIsMulti,
            hitlLegalLink: t?.hitlLegalLink,
            hitlTypes: t?.hitlTypes,
            rawHitlAlwaysScope: t?.rawHitlAlwaysScope,
            rawHitlDecisionKind: t?.rawHitlDecisionKind,
            unifiedSessionId: t?.unifiedSessionId ?? o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined,
            aiSessionId: t?.aiSessionId ?? o("WAWebThreadJourneyLogger").ThreadJourneyLogger.getAiSessionId() ?? undefined,
            rawBotEntryPoint: t?.rawBotEntryPoint ?? W(t?.botEntryPoint)
        });
        s.commit();
        return true;
    }
    function W(e) {
        const n = e ?? o("WAWebBotJourneyLogger").BotJourneyLogger.getEntryPoint();
        if (n != null) {
            const r = o("WAWebBotLoggingUtils").getBotMetricsEntryPointFromBotEntryPoint(n);
            if (r != null) {
                return o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(r) ?? undefined;
            }
        }
    }
    l.logHatchBrowserCardImpression = s;
    l.logHatchBrowserCardImpressionError = u;
    l.logHatchBrowserCardTap = c;
    l.logHatchBrowserTakeControlTap = d;
    l.logHatchBrowserActionType = m;
    l.logHatchIdeaAction = f;
    l.logHatchRequestWelcomeMsgSent = g;
    l.logHatchTapUnlinkButton = h;
    l.logHatchUnlinkSuccess = y;
    l.logHatchHitlBottomSheetImpression = C;
    l.logHatchHitlDetailImpression = v;
    l.logHatchHitlLegalLinkTap = S;
    l.logHatchHitlPaymentDetailsImpression = R;
    l.logHatchHitlCartDetailsImpression = L;
    l.logHatchHitlOrderSummaryImpression = E;
    l.logHatchHitlWalletPickerImpression = k;
    l.logHatchHitlWalletCardSelected = I;
    l.logHatchHitlDecisionTap = T;
    l.logHatchSecureCredential = $;
    l.logHatchSecureCredentialSaveError = P;
    l.logHatchConnector = A;
    l.logHatchConnectorCardImpression = O;
}, 98);