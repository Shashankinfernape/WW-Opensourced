__d("WAWebBBAudienceLogs", [
    "WAWebBBLoggerTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: t,
            extraAttributes: {
                is_edit: n
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE
        });
    }
    function s({ entryPoint, log, totalSelectedCount }) {
        log({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint,
            extraAttributes: {
                total_selected_count: totalSelectedCount
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONTACT_CHECKBOX
        });
    }
    function u(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BACK_BUTTON
        });
    }
    function c(e, t, n, r, a, i) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: i,
            extraAttributes: babelHelpers.extends({
                audience_id: t,
                contact_count: n,
                is_edit: r
            }, a != null ? {
                suggested_audience_card_id: a
            } : undefined),
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON
        });
    }
    function d({ entryPoint, floorMinimum, log, recipientCount, validationSucceeded }) {
        log({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
            entryPoint,
            extraAttributes: babelHelpers.extends({
                floor_check_point: "creation",
                floor_minimum: floorMinimum,
                recipient_count: recipientCount,
                validation_succeeded: validationSucceeded
            }, validationSucceeded ? undefined : {
                validation_error_type: "below_minimum"
            }),
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON
        });
    }
    function m({ entryPoint, floorMinimum, log, recipientCount }) {
        log({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint,
            extraAttributes: babelHelpers.extends({
                floor_check_point: "send",
                floor_minimum: floorMinimum
            }, recipientCount != null ? {
                recipient_count: recipientCount
            } : undefined),
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.AUDIENCE_BELOW_FLOOR_BANNER
        });
    }
    function p(e, t, n, r, a, i, l) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
            entryPoint: l,
            extraAttributes: babelHelpers.extends({
                audience_id: t,
                contact_count: n,
                is_edit: r,
                save_result: a
            }, i != null ? {
                errorType: i
            } : undefined),
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON
        });
    }
    function _(e, t, n, r, a, i) {
        const l = r != null ? babelHelpers.extends({}, i, {
            contact_count: t,
            errorType: r,
            save_result: n
        }) : babelHelpers.extends({}, i, {
            contact_count: t,
            save_result: n
        });
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
            entryPoint: a,
            extraAttributes: l,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON
        });
    }
    l.createAudienceViewed = e;
    l.createAudienceContactCheckboxClicked = s;
    l.createAudienceBackClicked = u;
    l.createAudienceSaveClicked = c;
    l.proAudienceFloorChecked = d;
    l.proAudienceBelowFloorBannerViewed = m;
    l.createAudienceSaveResult = p;
    l.importAudienceSaveResult = _;
}, 98);