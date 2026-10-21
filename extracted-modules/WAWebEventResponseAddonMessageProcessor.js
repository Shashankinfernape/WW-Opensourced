__d("WAWebEventResponseAddonMessageProcessor", [
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebCreateEncryptedEventResponseMsgData",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebEventResponseMsgDataConversion",
    "WAWebEventsParseWebMsgInfoEventResponse",
    "WAWebMsgType",
    "WAWebPrepareEventResponsesToUpsert",
    "WAWebProcessEncryptedEventResponseMsgs",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessorDualEncrypted({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
            fromHistorySyncMsg: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    return o("WAWebEventsParseWebMsgInfoEventResponse").parseWebMsgInfoEventResponses(e);
                });
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            toDualEncryptedMsgData: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    if (e.kind === o("WAWebMsgType").MsgKind.EventResponseEncrypted) {
                        return e;
                    }
                    return o("WAWebCreateEncryptedEventResponseMsgData").createEncryptedEventResponseMsgData(e, t);
                });
                function t(t, n) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            toDualDecryptedMsgData: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    if (e.kind === o("WAWebMsgType").MsgKind.EventResponseDecrypted) {
                        return e;
                    }
                    return o("WAWebProcessEncryptedEventResponseMsgs").decryptEncryptedEventResponseMsg(e, t);
                });
                function t(t, n) {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        },
        updateCollection: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebBackendApi").frontendSendAndReceive("upsertEventResponsesModelCollection", {
                    eventResponses: e.add,
                    eventResponsesToRemove: e.remove
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        beforeUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { parents: n }) {
                const r = yield o("WAWebProcessEncryptedEventResponseMsgs").processEncryptedEventResponseMsgs(e, n);
                const a = yield o("WAWebPrepareEventResponsesToUpsert").prepareEventResponsesToUpsert(r);
                return a;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        afterUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { processMode: n }) {
                const r = e.map(o("WAWebEventResponseMsgDataConversion").eventResponseMsgDataToResponseData);
                yield o("WAWebShouldUpdateLastAddOnPreview").filterAndUpdateChatPreviews(r);
                if (n !== o("WAWebAddonConstants").AddonProcessMode.HistorySync && n === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive) {
                    yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(e.map((e)=>e.id.toString()));
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        manageNotifications: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    });
    l.default = e;
}, 98);