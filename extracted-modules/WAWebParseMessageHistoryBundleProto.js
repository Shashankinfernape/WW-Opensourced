__d("WAWebParseMessageHistoryBundleProto", [
    "WALogger",
    "WAWebE2EProtoParserApi",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebMessageHistoryValidation",
    "WAWebMessageHistoryValidationError",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebProtobufsWeb.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ baseMessage: i, messageProtobuf: l }) {
        const s = l.messageHistoryBundle;
        if (s == null) {
            return null;
        }
        o("WAWebMessageHistoryValidation").validateMessageHistoryBundle(s);
        const d = s.messageHistoryMetadata?.historyReceivers.some(function(e) {
            return o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e));
        });
        const m = d === true || i.id.fromMe === true ? o("WAWebViewMode.flow").ViewModeType.VISIBLE : o("WAWebViewMode.flow").ViewModeType.HIDDEN;
        const p = u(s);
        const _ = babelHelpers.extends({}, i, {
            type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE,
            kind: "messageHistoryBundle",
            subtype: "message_history_bundle",
            viewMode: m,
            groupHistoryBundleMetadata: s.messageHistoryMetadata ? babelHelpers.extends({}, s.messageHistoryMetadata, {
                historyReceivers: s.messageHistoryMetadata.historyReceivers.map(o("WAWebWidFactory").createWid),
                processState: c(i.groupHistoryBundleInfo),
                nonHistoryReceivers: s.messageHistoryMetadata?.nonHistoryReceivers?.map(o("WAWebWidFactory").createWid) ?? []
            }) : null,
            directPath: p?.directPath,
            encFilehash: p?.encFilehash,
            filehash: p?.filehash,
            mediaKey: p?.mediaKey
        });
        return {
            msgData: _,
            contextInfo: s.contextInfo ?? null
        };
    }
    function u({ directPath: n, fileEncSha256: r, fileSha256: a, mediaKey: i }) {
        try {
            const l = o("WAWebE2EProtoParserApi").decodeBytes(a);
            if (l == null) {
                throw new (o("WAWebMessageHistoryValidationError")).MessageHistoryValidationError(o("WAWebMessageHistoryValidationError").MessageHistoryValidationErrorCode.MISSING_FILE_SHA256, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (n == null) {
                throw new (o("WAWebMessageHistoryValidationError")).MessageHistoryValidationError(o("WAWebMessageHistoryValidationError").MessageHistoryValidationErrorCode.MISSING_DIRECT_PATH, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            return {
                directPath: n,
                encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(r),
                filehash: l,
                mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(i),
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                signal: new AbortController().signal,
                userDownloadAttemptCount: 0,
                downloadOrigin: o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.MESSAGE_HISTORY_SYNC
            };
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[GroupHistory] Failed to download message history bundle"
            ]))).sendLogs("group-history-failed-to-download-bundle");
        }
    }
    function c(e) {
        return ((e)=>{
            if (e === o("WAWebProtobufsWeb.pb").GroupHistoryBundleInfo$ProcessState.NOT_INJECTED) {
                return o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE;
            }
            if (e === o("WAWebProtobufsWeb.pb").GroupHistoryBundleInfo$ProcessState.INJECTED) {
                return o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED;
            }
            if (e === o("WAWebProtobufsWeb.pb").GroupHistoryBundleInfo$ProcessState.INJECTED_PARTIAL) {
                return o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED_PARTIAL;
            }
            if (e === o("WAWebProtobufsWeb.pb").GroupHistoryBundleInfo$ProcessState.INJECTION_FAILED) {
                return o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED;
            }
            if (e === o("WAWebProtobufsWeb.pb").GroupHistoryBundleInfo$ProcessState.INJECTION_FAILED_NO_RETRY) {
                return o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED_NO_RETRY;
            }
            return o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE;
        })(e?.processState);
    }
    l.default = s;
}, 98);