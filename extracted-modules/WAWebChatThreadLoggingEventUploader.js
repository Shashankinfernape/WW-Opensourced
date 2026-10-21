__d("WAWebChatThreadLoggingEventUploader", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatThreadLoggingUtils",
    "WAWebThreadLoggingAi",
    "WAWebThreadLoggingBiz",
    "WAWebThreadLoggingCoreConsumer",
    "WAWebThreadLoggingFalco",
    "WAWebThreadLoggingIntegrity",
    "WAWebThreadLoggingNotification",
    "WAWebThreadLoggingVoip",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = (()=>{
        function t(e, t) {
            this.eventStore = t;
            this.metadataStore = e;
        }
        const a = t.prototype;
        a.uploadEvents = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const i = t?.purgeAfter ?? true;
                const l = yield this.metadataStore.getOffset();
                if (l == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatThreadLoggingBatchEventUploader: offset not in store!"
                    ])));
                    return -1;
                }
                const d = t?.lastStartTs ?? o("WAWebChatThreadLoggingUtils").computeStartTs(l, o("WATimeUtils").unixTime() - o("WATimeUtils").DAY_SECONDS);
                if (this.secret == null) {
                    const m = yield this.metadataStore.getSecret();
                    if (m == null) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "ChatThreadLoggingBatchEventUploader: secret not in store!"
                        ])));
                        return -1;
                    }
                    this.secret = m;
                }
                if (!(t == null || t.onStage == null)) {
                    t.onStage("read-events");
                }
                const _ = yield this.eventStore.getBeforeInclusive(d);
                let f = true;
                try {
                    f = yield p(_, r("nullthrows")(this.secret));
                } catch (e) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "CTLV2: Error uploading all events"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("ctlv2-upload-failure");
                    f = false;
                }
                if (i && f) {
                    if (!(t == null || t.onStage == null)) {
                        t.onStage("purge");
                    }
                    const g = yield this.eventStore.deleteBeforeInclusive(d);
                    if (g !== _.length) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "uploadEvents: uploaded=",
                            " deleted=",
                            " mismatch!"
                        ])), _.length, g);
                    }
                }
                if (!(t == null || t.onStage == null)) {
                    t.onStage("save-progress");
                }
                yield this.metadataStore.setLastUploadedStartTs(d);
                return _.length;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return t;
    })();
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield (d || (d = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = o("WAWebChatThreadLoggingUtils").getThreadDsForDb(e.startTs);
                    const r = yield o("WAWebChatThreadLoggingUtils").generateThreadID(t, e.chatId, o("WAWebChatThreadLoggingUtils").getThreadMonthDs(e.startTs));
                    return {
                        event: e,
                        threadDs: n,
                        threadId: r
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            if (r.length === 0) {
                return true;
            }
            const a = o("WAWebABProps").getABPropConfigValue("thread_interactions_falco_native_logging_enabled");
            if (a && !(yield o("WAWebThreadLoggingFalco").canLoadThreadLoggingFalcoCanonicals())) {
                return false;
            }
            yield d.all([
                o("WAWebThreadLoggingCoreConsumer").ThreadInteractionCoreConsumerWamTrigger(r, a),
                o("WAWebThreadLoggingVoip").ThreadInteractionVoipWamTrigger(r, a),
                o("WAWebThreadLoggingBiz").ThreadInteractionBizWamTrigger(r, a),
                o("WAWebThreadLoggingAi").ThreadInteractionAiWamTrigger(r, a),
                o("WAWebThreadLoggingNotification").ThreadInteractionNotificationWamTrigger(r, a),
                o("WAWebThreadLoggingIntegrity").ThreadInteractionIntegrityWamTrigger(r, a)
            ]);
            return true;
        });
        return _.apply(this, arguments);
    }
    l.ChatThreadLoggingEventUploaderImpl = m;
}, 98);