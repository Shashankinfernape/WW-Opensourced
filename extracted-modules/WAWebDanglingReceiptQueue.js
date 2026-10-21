__d("WAWebDanglingReceiptQueue", [
    "WALogger",
    "WAWebCommsSendPing",
    "WAWebNetworkStatus",
    "WAWebSchemaDanglingReceipt",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = {
        clear
    };
    function clear() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!r("WAWebNetworkStatus").online) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[dangling-receipt-queue] clear: skip, offline"
                ])));
                return;
            }
            const t = yield o("WAWebSchemaDanglingReceipt").getTable().allPrimaryKeys();
            if (t.length !== 0) {
                if (!(yield o("WAWebCommsSendPing").blockSendPing())) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[dangling-receipt-queue] clear: skip, no ping response"
                    ])));
                    return;
                }
                yield o("WAWebSchemaDanglingReceipt").getTable().bulkRemove(t);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[dangling-receipt-queue] clear: removed ",
                    " rows"
                ])), t.length);
            }
        });
        return m.apply(this, arguments);
    }
    l.danglingReceiptQueue = c;
}, 98);