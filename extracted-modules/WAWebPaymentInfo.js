__d("WAWebPaymentInfo", [
    "WAWebEventEmitter",
    "WAWebUserPrefsPaymentInfo"
], function(t, n, r, o, a, i, l) {
    const e = "cpi_info_change";
    const s = ((t)=>{
        function n() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.setCPIInfo = function(n) {
            const t = o("WAWebUserPrefsPaymentInfo").getCPIInfo();
            if (t !== n) {
                o("WAWebUserPrefsPaymentInfo").setCPIInfo(n);
                this.trigger(e);
            }
        };
        return n;
    })(r("WAWebEventEmitter"));
    const u = new s;
    l.CPI_INFO_CHANGE_EVENT = e;
    l.PaymentInfo = u;
}, 98);