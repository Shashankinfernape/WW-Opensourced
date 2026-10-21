__d("WAWebHandleDeferredMessages", [
    "WALogger",
    "WAPromiseEach",
    "WAWebApiDeferredMessagesStorage",
    "WAWebApiHydrateWidsUtil",
    "WAWebHandleHistorySyncNotification",
    "WAWebKeyManagementHandleKeyRequestApi",
    "WAWebKeyManagementHandleKeyShareApi",
    "WAWebMsgProcessingApiUtils",
    "WAWebNonMessageDataRequestHandler",
    "WAWebParsedProtocolMsgType",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebApiDeferredMessagesStorage").getDeferredMessages();
            yield o("WAPromiseEach").promiseEach(t, (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                    if (t) {
                        const { bizInfo, info, paymentInfo, plaintext, type } = t;
                        const c = o("WAWebApiHydrateWidsUtil").hydrateWids(info);
                        const d = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, plaintext);
                        const m = o("WAWebMsgProcessingApiUtils").getFrom(c);
                        const p = yield o("WAWebMsgProcessingApiUtils").parseProtocolMessage({
                            info: c,
                            msgProtobuf: d,
                            paymentInfo,
                            bizInfo,
                            hsmInfo: null
                        });
                        if (p == null) {
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[push-notification] deferred: parseProtocolMessage failed"
                            ])));
                            return;
                        }
                        e: {
                            if (type === o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY) {
                                yield o("WAWebHandleHistorySyncNotification").handleHistorySyncNotification(r("nullthrows")(p?.history), m, c.externalId);
                                break e;
                            }
                            if (type === o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE) {
                                yield o("WAWebKeyManagementHandleKeyShareApi").handleAppStateSyncKeyShare(r("nullthrows")(p?.appStateSyncKeyShare), m);
                                break e;
                            }
                            if (type === o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST) {
                                yield o("WAWebKeyManagementHandleKeyRequestApi").handleAppStateSyncKeyRequest(r("nullthrows")(p?.appStateSyncKeyRequest), m);
                                break e;
                            }
                            if (type === o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE) {
                                yield o("WAWebNonMessageDataRequestHandler").handlePeerDataOperationRequestResponse(c.externalId, r("nullthrows")(p?.peerDataOperationRequestResponseMessage));
                                break e;
                            }
                            if (type === o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_MESSAGE) {
                                yield o("WAWebNonMessageDataRequestHandler").handlePeerDataOperationRequest(c.externalId, r("nullthrows")(p?.peerDataOperationRequestMessage));
                                break e;
                            }
                            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${type}`);
                        }
                        yield o("WAWebApiDeferredMessagesStorage").deleteDeferredMessage(t.id);
                    }
                });
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            })());
        });
        return u.apply(this, arguments);
    }
    l.default = s;
}, 98);