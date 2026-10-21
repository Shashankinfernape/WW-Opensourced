__d("WAWebInitChatThreadLogging", [
    "Promise",
    "WALogger",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingEventStore",
    "WAWebChatThreadLoggingEventUploader",
    "WAWebChatThreadLoggingLocalstorageMetadataHandler",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t = true) {
            const r = t;
            if ((yield o("WAWebUserPrefsMultiDevice").getChatThreadLoggingLastUploadedStartTs()) == null) {
                yield o("WAWebUserPrefsMultiDevice").setChatThreadLoggingLastUploadedStartTs(0);
            }
            const a = new (o("WAWebChatThreadLoggingLocalstorageMetadataHandler")).ChatThreadLoggingMetadataLocalStorage;
            const i = r ? new (o("WAWebChatThreadLoggingEventStore")).ChatThreadLoggingEventStoreImpl(a) : {
                handleMessages: function() {
                    return (s || (s = n("Promise"))).resolve();
                },
                getEvent: function() {
                    return (s || (s = n("Promise"))).resolve();
                },
                getBeforeInclusive: function() {
                    return (s || (s = n("Promise"))).resolve([]);
                },
                deleteBeforeInclusive: function() {
                    return (s || (s = n("Promise"))).resolve(0);
                }
            };
            const l = r ? new (o("WAWebChatThreadLoggingEventUploader")).ChatThreadLoggingEventUploaderImpl(a, i) : {
                uploadEvents: function() {
                    return (s || (s = n("Promise"))).resolve(0);
                }
            };
            const u = yield a.getOffset();
            if (u != null) {
                o("WAWebChatThreadLogging").initUploadTimer(u);
            }
            o("WAWebChatThreadLogging").setChatThreadLoggingState({
                metadataStore: a,
                eventStore: i,
                eventUploader: l
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "chat thread logging initialized"
            ])));
        });
        return c.apply(this, arguments);
    }
    l.initChatThreadLogging = u;
}, 98);