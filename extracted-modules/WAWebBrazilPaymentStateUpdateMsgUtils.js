__d("WAWebBrazilPaymentStateUpdateMsgUtils", [
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    const e = 64;
    const s = new Map;
    function u(e) {
        if (s.size === 0) {
            return e;
        }
        return e.map((e)=>{
            if (e.type === o("WAWebMsgType").MSG_TYPE.IMAGE && p(e.id)) {
                return babelHelpers.extends({}, e, {
                    viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN
                });
            }
            return e;
        });
    }
    function c(t, n, o) {
        const a = new (r("WAWebMsgKey"))({
            fromMe: n,
            remote: t,
            id: o
        });
        s.set(a.toString(), _(a));
        for (const i of s.keys()){
            if (s.size <= e) {
                return;
            }
            s.delete(i);
        }
    }
    function d(e, t, n) {
        p(new (r("WAWebMsgKey"))({
            fromMe: t,
            remote: e,
            id: n
        }));
    }
    function m() {
        s.clear();
    }
    function p(e) {
        const t = new Set(_(e));
        for (const [r, o] of s){
            if (o.some((e)=>t.has(e))) {
                s.delete(r);
                return true;
            }
        }
        return false;
    }
    function _(e) {
        const t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
        if (t == null) {
            return [
                e.toString()
            ];
        }
        return [
            e.toString(),
            t.toString()
        ];
    }
    l.MAX_AWAITED_RECEIPTS = e;
    l.hideAwaitedBrazilPaymentReceipts = u;
    l.awaitBrazilPaymentReceipt = c;
    l.stopAwaitingBrazilPaymentReceipt = d;
    l.resetAwaitedBrazilPaymentReceiptsForTesting = m;
}, 98);