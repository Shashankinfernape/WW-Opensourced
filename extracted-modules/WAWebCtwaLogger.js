__d("WAWebCtwaLogger", [
    "WAWebCtwaBizUserJourneyWamEvent",
    "WAWebWamEnumCtwaBizUserJourneyOperation"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const u = [
        "agm"
    ];
    const c = u.join(", ");
    const d = {
        injected: "injected",
        duplicated: "duplicated",
        null_greeting_message: "null_greeting_message",
        invalid_source_app: "invalid_source_app",
        bottomsheet_text_error: "bottomsheet_text_error",
        agm_cta_clicked: "agm_cta_clicked",
        agm_bottomsheet_external_navigation: "agm_bottomsheet_external_navigation",
        agm_view_details_clicked: "agm_view_details_clicked",
        agm_bottom_sheet_shown: "agm_bottom_sheet_shown",
        agm_bottom_sheet_closed: "agm_bottom_sheet_closed",
        agm_invalid_cta_payload: "agm_invalid_cta_payload",
        agm_bottom_sheet_image_error: "agm_bottom_sheet_image_error"
    };
    const m = {
        [d.injected]: "AGM_INJECTED",
        [d.duplicated]: "DUPLICATED_AGM_NOT_INJECTED",
        [d.null_greeting_message]: "AGM_WELCOME_MESSAGE_NULL",
        [d.bottomsheet_text_error]: "AGM_BOTTOMSHEET_TEXT_ERROR",
        [d.agm_cta_clicked]: "AGM_CTA_CLICKED",
        [d.agm_bottomsheet_external_navigation]: "AGM_BOTTOMSHEET_EXTERNAL_NAVIGATION",
        [d.agm_view_details_clicked]: "AGM_VIEW_DETAILS_CLICKED",
        [d.agm_bottom_sheet_shown]: "AGM_BOTTOMSHEET_SHOWN",
        [d.agm_bottom_sheet_closed]: "AGM_BOTTOMSHEET_CLOSED",
        [d.agm_bottom_sheet_image_error]: "AGM_BOTTOMSHEET_IMAGE_ERROR"
    };
    const p = babelHelpers.extends({}, m, {
        [d.invalid_source_app]: "AGM_INVALID_SOURCE_APP_FROM_MESSAGE",
        [d.agm_invalid_cta_payload]: "AGM_INVALID_CTA_PAYLOAD_FROM_MESSAGE"
    });
    function _({ adId: n, agmPayload: r, fromBusiness: a, operationType: i }) {
        if (a) {
            const l = p[i];
            f({
                ctaType: r?.ctaType ?? null,
                adID: n,
                operation: o("WAWebWamEnumCtwaBizUserJourneyOperation").CTWA_BIZ_USER_JOURNEY_OPERATION[l]
            });
        }
    }
    function f({ adID: t, ctaType: n, operation: r }) {
        new (o("WAWebCtwaBizUserJourneyWamEvent")).CtwaBizUserJourneyWamEvent({
            adId: String(t),
            ctwaBizUserJourneyOperation: r,
            bizFeatureEnabled: c,
            ctwaBizUserJourneyMetadata: JSON.stringify({
                agm_cta_type: n
            })
        }).commit();
    }
    l.AGM_OPERATION_TYPE = d;
    l.logAGMOperation = _;
}, 98);