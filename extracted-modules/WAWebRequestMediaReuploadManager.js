__d("WAWebRequestMediaReuploadManager", [
    "Promise",
    "WALogger",
    "WAWebGetUserMediaErrors",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebSendServerErrorReceiptJob",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    class c {
        constructor(){
            var t = this;
            this.$1 = new Map;
            this.$2 = new Set;
            this.requestMediaReupload = (()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(a) {
                    const i = a.id.id;
                    if (o("WAWebMsgGetters").getIsNewsletterMsg(a)) {
                        throw new (o("WAWebGetUserMediaErrors")).RMRNotSupportedOnNewsletterMessagesError(o("WAWebMmsMediaTypes").getMsgMediaType(a));
                    }
                    if (a.mediaKey == null) {
                        if (!t.$2.has(i)) {
                            t.$2.add(i);
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[media][rmr] Called RMR with null mediaKey, type ",
                                ""
                            ])), a.type).tags("media", "non-sad").sendLogs("rmr-called-with-null-media-key", {
                                sampling: 0.01
                            });
                        }
                        throw new (o("WAWebGetUserMediaErrors")).RMRWithoutMediaKeyError(a.type);
                    }
                    const l = t.$1.get(i);
                    if (l) {
                        return r("nullthrows")(l.request);
                    }
                    const s = new (u || (u = n("Promise")))(function(e, n) {
                        t.$1.set(i, {
                            resolve: e,
                            reject: n,
                            msg: a
                        });
                    });
                    r("nullthrows")(t.$1.get(i)).request = s;
                    yield r("WAWebSendServerErrorReceiptJob")(a);
                    return s;
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            })();
            this.resolveMediaReupload = function({ directPath, msgId, result }) {
                const i = t.$1.get(msgId);
                if (i != null) {
                    i.resolve({
                        result,
                        directPath
                    });
                    t.$1.delete(msgId);
                } else {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "resolveMediaReupload: msgId (",
                        ") is not found in _rmrRequests"
                    ])), msgId);
                }
            };
            this.getMediaKey = function(e) {
                return t.$1.get(e)?.msg.mediaKey;
            };
        }
        rmrRequests_TESTONLY() {
            return this.$1;
        }
    }
    const d = new c;
    l.RequestMediaReuploadManagerImpl = c;
    l.RequestMediaReuploadManager = d;
}, 98);