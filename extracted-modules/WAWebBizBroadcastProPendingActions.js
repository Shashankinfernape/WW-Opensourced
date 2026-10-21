__d("WAWebBizBroadcastProPendingActions", [
    "$InternalEnum",
    "WAWebEventEmitter",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        UnsubscribeRecipients: "unsubscribe_recipients",
        DownloadSubscribedRecipients: "download_subscribed_recipients",
        RemoveFromDataSharing: "remove_from_data_sharing"
    });
    const s = "bb_pro_pending_customer_base_actions_change";
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.handleChange = function() {
            this.trigger(s);
        };
        return t;
    })(r("WAWebEventEmitter"));
    const c = new u;
    function d() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.BB_PRO_PENDING_CUSTOMER_BASE_ACTIONS);
        if (e instanceof Array) {
            return e.filter((e)=>typeof e === "string");
        }
        return [];
    }
    function m() {
        const t = new Set;
        d().forEach((n)=>{
            const r = e.cast(n);
            if (r != null) {
                t.add(r);
            }
        });
        return t;
    }
    function p(e) {
        if (e.length !== 0) {
            const t = new Set(d());
            e.forEach(({ action: n, pending: r })=>{
                if (r) {
                    t.add(n);
                } else {
                    t.delete(n);
                }
            });
            r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.BB_PRO_PENDING_CUSTOMER_BASE_ACTIONS, Array.from(t));
            c.handleChange();
        }
    }
    l.BizBroadcastProCustomerBaseAction = e;
    l.CHANGE_EVENT = s;
    l.PendingCustomerBaseActionsEvent = c;
    l.getPendingCustomerBaseActions = m;
    l.updatePendingCustomerBaseActions = p;
}, 98);