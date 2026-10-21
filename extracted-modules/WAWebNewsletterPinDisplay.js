__d("WAWebNewsletterPinDisplay", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e){
            this.items = e;
        }
        isEmpty() {
            return this.items.length === 0;
        }
        resolvedServerIdsDescending() {
            return this.items.filter((e)=>e.kind === "resolved").map((e)=>e.serverId).sort((e, t)=>t - e);
        }
        unavailableServerIds() {
            return this.items.filter((e)=>e.kind === "unavailable").map((e)=>e.serverId);
        }
        nextExpiryTs() {
            if (this.items.length === 0) {
                return null;
            }
            return o("WATimeUtils").castToUnixTime(this.items.reduce((acc, item)=>Math.min(acc, item.expiryTs), Infinity));
        }
    }
    const s = new e([]);
    function u(e, t) {
        return e.filter((e)=>e.expiryTs > t);
    }
    function c(t, n) {
        if (t.length === 0) {
            return s;
        }
        return new e(t.map((e)=>({
                kind: n(e.serverId) ? "resolved" : "unavailable",
                serverId: e.serverId,
                expiryTs: e.expiryTs
            })));
    }
    const d = 30 * o("WATimeUtils").DAY_SECONDS;
    function m(e) {
        return o("WATimeUtils").unixTime() - e.t > d;
    }
    l.EMPTY_NEWSLETTER_PIN_DISPLAY = s;
    l.filterActiveNewsletterPins = u;
    l.getNewsletterPinsToDisplay = c;
    l.NEWSLETTER_MAX_PINNABLE_MSG_AGE_SECONDS = d;
    l.isNewsletterMsgTooOldToPin = m;
}, 98);