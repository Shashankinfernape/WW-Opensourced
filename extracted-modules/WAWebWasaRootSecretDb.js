__d("WAWebWasaRootSecretDb", [
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageSerialization",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.isLid()) {
            return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        }
        return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
    }
    function s(t, n) {
        return new (r("WAWebMsgKey"))({
            from: e(t),
            to: t,
            id: n,
            selfDir: "out"
        });
    }
    function u(t, n, r) {
        return {
            id: n,
            from: e(t),
            to: t,
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
            count: null,
            t: o("WATimeUtils").unixTime(),
            ack: o("WAWebAck").ACK.CLOCK,
            local: true,
            messageSecret: r
        };
    }
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            yield o("WAWebSchemaMessage").getMessageTable().createOrReplace(o("WAWebDBMessageSerialization").dbRowFromMessage(u(e, s(e, t), n)));
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.length !== 0) {
                yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrReplace(t.map(({ secret: n, stanzaId: r })=>o("WAWebDBMessageSerialization").dbRowFromMessage(u(e, s(e, r), n))));
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = s(e, t);
            const r = yield o("WAWebSchemaMessage").getMessageTable().get(n.toString());
            if (r == null) {
                return null;
            }
            return o("WAWebDBMessageSerialization").messageFromDbRow(r).messageSecret;
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = s(e, t);
            yield o("WAWebSchemaMessage").getMessageTable().remove(n.toString());
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.length !== 0) {
                yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(t.map((t)=>s(e, t).toString()));
            }
        });
        return C.apply(this, arguments);
    }
    l.getWasaRootSecretMsgKeyForId = s;
    l.upsertWasaRootSecretForId = c;
    l.upsertWasaRootSecretsForIds = m;
    l.getWasaRootSecretForId = _;
    l.removeWasaRootSecretForId = g;
    l.removeWasaRootSecretsForIds = y;
}, 98);