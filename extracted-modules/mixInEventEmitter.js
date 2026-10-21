__d("mixInEventEmitter", [
    "invariant",
    "EventEmitterWithHolding",
    "EventEmitterWithValidation",
    "EventHolder"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
        if (!t) {
            s(0, 3159);
        }
        const r = e.prototype || e;
        if (r.__eventEmitter) {
            s(0, 3160);
        }
        const e_constructor = e.constructor;
        if (e_constructor) {
            if (!(e_constructor === Object || e_constructor === Function)) {
                s(0, 3161);
            }
        }
        r.__types = babelHelpers.extends({}, r.__types, t);
        r.__ignoreUnknownEvents = !!n;
        Object.assign(r, u);
    }
    var u = {
        emit: function(t, n, r, o, a, i, l) {
            return this.__getEventEmitter().emit(t, n, r, o, a, i, l);
        },
        emitAndHold: function(t, n, r, o, a, i, l) {
            return this.__getEventEmitter().emitAndHold(t, n, r, o, a, i, l);
        },
        addListener: function(t, n, r) {
            return this.__getEventEmitter().addListener(t, n, r);
        },
        once: function(t, n, r) {
            return this.__getEventEmitter().once(t, n, r);
        },
        addRetroactiveListener: function(t, n, r) {
            return this.__getEventEmitter().addRetroactiveListener(t, n, r);
        },
        listeners: function(t) {
            return this.__getEventEmitter().listeners(t);
        },
        removeAllListeners: function() {
            this.__getEventEmitter().removeAllListeners();
        },
        removeCurrentListener: function() {
            this.__getEventEmitter().removeCurrentListener();
        },
        releaseHeldEventType: function(t) {
            this.__getEventEmitter().releaseHeldEventType(t);
        },
        __getEventEmitter: function() {
            if (!this.__eventEmitter) {
                const e = new (r("EventEmitterWithValidation"))(this.__types, this.__ignoreUnknownEvents);
                const t = new (r("EventHolder"));
                this.__eventEmitter = new (r("EventEmitterWithHolding"))(e, t);
            }
            return this.__eventEmitter;
        }
    };
    l.default = e;
}, 98);