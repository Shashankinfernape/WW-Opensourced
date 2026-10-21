__d("BaseEventEmitter", [
    "EmitterSubscription",
    "ErrorGuard",
    "EventSubscriptionVendor",
    "FBLogger",
    "emptyFunction"
], function(t, n, r, o, a, i) {
    let e;
    class l {
        constructor(){
            this.$2 = new (n("EventSubscriptionVendor"));
            this.$1 = null;
        }
        addListener(t, r, o) {
            return this.$2.addSubscription(t, new (n("EmitterSubscription"))(this.$2, r, o));
        }
        removeListener(t) {
            this.$2.removeSubscription(t);
        }
        once(t, n, r) {
            const e = this;
            return this.addListener(t, function() {
                e.removeCurrentListener();
                n.apply(r, arguments);
            });
        }
        removeAllListeners(t) {
            this.$2.removeAllSubscriptions(t);
        }
        removeCurrentListener() {
            if (!this.$1) {
                throw n("FBLogger")("emitter").mustfixThrow("Not in an emitting cycle; there is no current subscription");
            }
            this.$2.removeSubscription(this.$1);
        }
        listeners(t) {
            const e = this.$2.getSubscriptionsForType(t);
            if (e) {
                return e.filter(n("emptyFunction").thatReturnsTrue).map((e)=>e.listener);
            }
            return [];
        }
        emit(t) {
            const e = this.$2.getSubscriptionsForType(t);
            if (e) {
                let r;
                for(let n = Object.keys(e), o = 0; o < n.length; o++){
                    const a = n[o];
                    const i = e[a];
                    if (i) {
                        this.$1 = i;
                        if (r == null) {
                            r = [
                                i,
                                t
                            ];
                            for(let l = 0, s = arguments.length <= 1 ? 0 : arguments.length - 1; l < s; l++){
                                r[l + 2] = l + 1 < 1 || arguments.length <= l + 1 ? undefined : arguments[l + 1];
                            }
                        } else {
                            r[0] = i;
                        }
                        this.__emitToSubscription(...r);
                    }
                }
                this.$1 = null;
            }
        }
        __emitToSubscription(r, o, ...a) {
            (e || (e = n("ErrorGuard"))).applyWithGuard(r.listener, r.context, a, {
                name: `EventEmitter ${o} event`
            });
        }
    }
    a.exports = l;
}, null);