__d("WAWebSharableEventInviteParseEventInviteMessageProto", [
    "WALongInt",
    "WAWebMsgType",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventInviteCoerceTimestampSeconds",
    "WAWebSharableEventInviteValidationError",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const a = n.eventInviteMessage;
        if (a == null) {
            return null;
        }
        if (!o("WAWebSharableEventGatingUtils").shouldRenderSharableEventInviteBubble()) {
            const l = a.contextInfo ?? null;
            if (o("WAWebSharableEventGatingUtils").isSharableEventInviteReceiveEnabled()) {
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        futureproofType: o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE
                    }),
                    contextInfo: l
                };
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: o("WAWebMsgType").MsgKind.Unknown
                }),
                contextInfo: l
            };
        }
        const { callLink: s, caption: u, contextInfo: c, endTime: d, eventId: m, eventTitle: p, isCanceled: _, jpegThumbnail: f, startTime: g } = a;
        if (m == null || m === "") {
            throw new (o("WAWebSharableEventInviteValidationError")).SharableEventInviteValidationError(o("WAWebSharableEventInviteValidationError").SharableEventInviteValidationErrorCode.SHARABLE_EVENT_INVITE_MISSING_EVENT_ID, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (p == null || p === "") {
            throw new (o("WAWebSharableEventInviteValidationError")).SharableEventInviteValidationError(o("WAWebSharableEventInviteValidationError").SharableEventInviteValidationErrorCode.SHARABLE_EVENT_INVITE_MISSING_EVENT_TITLE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const h = o("WAWebSharableEventGatingUtils").isSharableEventInviteDatetimeEnabled();
        const y = h ? r("WAWebSharableEventInviteCoerceTimestampSeconds")(o("WALongInt").maybeNumberOrThrowIfTooLarge(g)) : null;
        const C = h ? r("WAWebSharableEventInviteCoerceTimestampSeconds")(o("WALongInt").maybeNumberOrThrowIfTooLarge(d)) : null;
        const b = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE,
            kind: o("WAWebMsgType").MsgKind.SharableEventInvite,
            sharableEventInviteId: m,
            sharableEventInviteTitle: p,
            sharableEventInviteStartTime: y ?? void 0,
            sharableEventInviteEndTime: C ?? void 0,
            sharableEventInviteCaption: u ?? void 0,
            sharableEventInviteIsCanceled: _ ?? void 0,
            sharableEventInviteJpegThumbnail: f ?? void 0,
            sharableEventInviteCallLink: s ?? void 0
        });
        return {
            msgData: b,
            contextInfo: c
        };
    }
    l.default = e;
}, 98);