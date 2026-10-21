__d("WAWebBookingConfirmation", [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        try {
            const h = JSON.parse(e);
            if (h.start_datetime == null || h.location == null && h.booking_url == null && h.phone_number == null) {
                return null;
            }
            const y = h.display_content != null ? {
                displayLanguage: h.display_content.display_language ?? null,
                displayMeetingType: h.display_content.display_meeting_type ?? null,
                displayBottomSheetHeader: h.display_content.display_bottom_sheet_header ?? null,
                displayAddToCalendarCtaText: h.display_content.display_add_to_calendar_cta_text ?? null,
                displayViewOnMapsCtaText: h.display_content.display_view_on_maps_cta_text ?? null,
                displayManageBookingCtaText: h.display_content.display_manage_booking_cta_text ?? null,
                displayManageBookingNotSupportedText: h.display_content.display_manage_booking_not_supported_text ?? null,
                displayReadMore: h.display_content.display_read_more ?? null
            } : null;
            return {
                startDatetime: h.start_datetime,
                endDatetime: h.end_datetime ?? null,
                location: h.location ?? null,
                bookingUrl: h.booking_url ?? null,
                phoneNumber: h.phone_number ?? null,
                bookingManagementUrl: h.booking_management_url ?? null,
                description: h.description ?? null,
                email: h.email ?? null,
                displayText: h.display_text ?? null,
                displayContent: y
            };
        } catch (e) {
            return null;
        }
    }
    function s(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        return u({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type
        });
    }
    function u({ interactivePayload: a, interactiveType: i, nativeFlowName: l, type }) {
        if (l !== r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION || type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || i !== r("WAWebInteractiveMessageType").NATIVE_FLOW || !(a != null && a.buttons)) {
            return null;
        }
        const u = a.buttons[0]?.buttonParamsJson;
        if (u == null) {
            return null;
        }
        return e(u);
    }
    function c(t) {
        if (t?.name !== r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION) {
            return null;
        }
        const n = t.buttonParamsJson;
        if (n == null) {
            return null;
        }
        return e(n);
    }
    l.getBookingConfirmationInfo = s;
    l.getBookingConfirmationInfoFor = u;
    l.parseBookingConfirmationButton = c;
}, 98);