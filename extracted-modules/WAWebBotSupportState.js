__d("WAWebBotSupportState", [
    "$InternalEnum",
    "WAWebBotProduct"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "UNRESOLVED",
        "DELETED",
        "DEPRECATED",
        "UNSUPPORTED",
        "SUPPORTED"
    ]);
    function s(t, n) {
        if (t == null) {
            return {
                kind: e.UNRESOLVED
            };
        }
        if (t.isDeprecated === true) {
            return {
                kind: e.DEPRECATED
            };
        }
        if (t.product == null || t.product === "") {
            return {
                kind: e.DEPRECATED
            };
        }
        const r = o("WAWebBotProduct").botProductFromServerValue(t.product);
        if (r === o("WAWebBotProduct").BotProduct.SUPPORT && t.isSynced === true) {
            return {
                kind: e.UNSUPPORTED,
                rawProduct: t.product
            };
        }
        if (r == null) {
            return {
                kind: e.UNSUPPORTED,
                rawProduct: t.product
            };
        }
        if (n(r)) {
            if (t.isDeleted === true) {
                return {
                    kind: e.DELETED,
                    product: r
                };
            }
            return {
                kind: e.SUPPORTED,
                product: r
            };
        }
        return {
            kind: e.UNSUPPORTED,
            rawProduct: t.product
        };
    }
    function u(t) {
        return t.kind === e.DELETED && t.product === o("WAWebBotProduct").BotProduct.THIRD_PARTY;
    }
    l.BotSupportStateKind = e;
    l.evaluateBotSupport = s;
    l.hasCustomDeletedTombstone = u;
}, 98);