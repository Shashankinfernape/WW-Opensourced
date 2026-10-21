__d("WAWebEventsParseEventCreationMessageProto", [
    "WALongInt",
    "WAWebApiParse",
    "WAWebEventsGatingUtils",
    "WAWebEventsValidationError",
    "WAWebMsgType",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: n, messageProtobuf: r, msgContext: a }) {
        const i = r.eventMessage;
        if (i == null) {
            return null;
        }
        const { contextInfo: l, description: s, endTime: u, extraGuestsAllowed: c, isCanceled: d, isScheduleCall: m, joinLink: p, location: _, name: f, startTime: g } = i;
        const h = o("WALongInt").maybeNumberOrThrowIfTooLarge(g);
        const y = o("WALongInt").maybeNumberOrThrowIfTooLarge(u);
        if (p != null && o("WAWebApiParse").isValidCallLink(p) === false) {
            throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_INVALID_JOIN_LINK, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (f == null || f === "" || f.length > o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) {
            throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_INVALID_NAME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (h == null) {
            throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_MISSING_DATE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (s != null && s.length > o("WAWebEventsGatingUtils").getEventsDescriptionLengthLimit()) {
            throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_INVALID_DESCRIPTION, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (d == null) {
            throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_INVALID_CANCELED_STATUS, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (_ != null) {
            const { address: C, degreesLatitude: b, degreesLongitude: v, name: S } = _;
            if (S != null && S.length > o("WAWebEventsGatingUtils").getEventsDescriptionLengthLimit()) {
                throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_INVALID_LOCATION_NAME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (C != null && C.length > o("WAWebEventsGatingUtils").getEventsDescriptionLengthLimit()) {
                throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_INVALID_LOCATION_ADDRESS, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (b == null && v != null || b != null && v == null) {
                throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_INVALID_LOCATION, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
        }
        if (y != null && y < h) {
            throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_INVALID_END_TIME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const R = babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
            kind: o("WAWebMsgType").MsgKind.EventCreation,
            eventName: f,
            eventDescription: s,
            eventJoinLink: p,
            eventStartTime: h,
            isEventCanceled: !!d,
            eventLocation: _,
            eventEndTime: y ?? void 0,
            eventIsScheduledCall: m ?? void 0,
            eventExtraGuestsAllowed: c ?? void 0
        });
        if (a === "quoted" || a === "history_quoted" || a === "history") {
            return {
                msgData: R,
                contextInfo: l
            };
        }
        const L = r.messageContextInfo?.messageSecret;
        if (L == null) {
            throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.MISSING_MESSAGE_SECRET, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MISSING_MESSAGE_SECRET);
        }
        if (L.byteLength !== 32) {
            throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.INVALID_MESSAGE_SECRET, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MESSAGE_SECRET_INVALID);
        }
        return {
            msgData: R,
            contextInfo: l
        };
    }
    l.default = e;
}, 98);