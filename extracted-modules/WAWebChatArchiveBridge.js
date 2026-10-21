__d("WAWebChatArchiveBridge", [
    "WALogger",
    "WATimeUtils",
    "WAWebApiAddActiveMessageRange",
    "WAWebArchiveChatSync",
    "WAWebDbErrors",
    "WAWebMessageRangeUtils",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, a, i) {
        const l = o("WATimeUtils").unixTimeMs();
        return r("WAWebArchiveChatSync").getMutationsForArchive(l, a, t).then((()=>{
            const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(i) {
                try {
                    yield o("WAWebMessageRangeUtils").lockForMessageRangeSync([
                        "chat"
                    ], i, (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                            if (i[0].action !== o("WAWebSyncdConst").Actions.Archive) {
                                throw r("err")("syncd: expected archive action from getMutationsForArchive");
                            }
                            yield o("WAWebApiAddActiveMessageRange").addActiveMessageRange(t.toString(), "archive", i[0].binarySyncAction);
                            return n.merge(t.toString(), u(a));
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })());
                    return {
                        status: 200
                    };
                } catch (error) {
                    throw error instanceof o("WAWebDbErrors").DbOnLogoutAbort ? error : (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "update chat table failed"
                    ]))).verbose().sendLogs("update chat table failed when send conversation to archive"), r("err")("update chat table failed"));
                }
            });
            return function(e) {
                return i.apply(this, arguments);
            };
        })());
    }
    function u(archive) {
        const t = {
            archive
        };
        if (archive) {
            t.pin = undefined;
        }
        return t;
    }
    l.sendConversationArchive = s;
}, 98);