__d("WAWebChatThreadLoggingLocalstorageMetadataHandler", [
    "Promise",
    "WABase64",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t() {}
        const r = t.prototype;
        r.setOffset = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebUserPrefsMultiDevice").setChatThreadLoggingOffset(e);
                return true;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getOffset = function() {
            return (e || (e = n("Promise"))).resolve(o("WAWebUserPrefsMultiDevice").getChatThreadLoggingOffset());
        };
        r.setSecret = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebUserPrefsMultiDevice").setChatThreadLoggingSecretB64(o("WABase64").encodeB64(e));
                return true;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getSecret = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebUserPrefsMultiDevice").getChatThreadLoggingSecretB64();
                if (e == null) {
                    return null;
                }
                return o("WABase64").decodeB64(e);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.setLastUploadedStartTs = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebUserPrefsMultiDevice").setChatThreadLoggingLastUploadedStartTs(e);
                return true;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getLastUploadedStartTs = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebUserPrefsMultiDevice").getChatThreadLoggingLastUploadedStartTs();
                return e ?? 0;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    l.ChatThreadLoggingMetadataLocalStorage = s;
}, 98);