__d("WAWebStripBrazilPaymentState", [
    "WAWebBrazilPaymentState",
    "WAWebBrazilPaymentStateKeys",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = s(e, "string");
        if (typeof t === "symbol") {
            return t;
        }
        return `${t}`;
    }
    function s(e, t) {
        if (typeof e !== "object" || !e) {
            return e;
        }
        const n = e[typeof Symbol === "function" ? Symbol.toPrimitive : "@@toPrimitive"];
        if (n !== void 0) {
            const r = n.call(e, t || "default");
            if (typeof r !== "object") {
                return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
    }
    function u(e) {
        if (e != null) {
            const t = c(o("WAWebBrazilPaymentState").getPaymentRequestParamsJson(e));
            if (t == null || !Array.isArray(e.buttons) || !r("justknobx")._("6396")) {
                return e;
            }
            const n = e.buttons;
            const a = n[0];
            const i = babelHelpers.arrayLikeToArray(n).slice(1);
            return babelHelpers.extends({}, e, {
                buttons: [
                    babelHelpers.extends({}, a, {
                        buttonParamsJson: JSON.stringify(t)
                    })
                ].concat(i)
            });
        }
    }
    function c(t) {
        if (t == null) {
            return null;
        }
        try {
            const n = JSON.parse(t);
            if (n == null || typeof n !== "object" || Array.isArray(n) || !Object.hasOwn(n, o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY)) {
                return null;
            }
            const r = n[o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY];
            const a = babelHelpers.objectWithoutPropertiesLoose(n, [
                o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY
            ].map(e));
            return a;
        } catch (e) {
            return null;
        }
    }
    l.stripBrazilPaymentState = u;
}, 98);