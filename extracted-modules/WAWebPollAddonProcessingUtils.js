__d("WAWebPollAddonProcessingUtils", [
    "Promise",
    "WAWebAddonEncryption",
    "WAWebAddonInfraError",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 1000;
    function u(e, t, n) {
        const r = new Map;
        e.forEach((e)=>{
            if (e.kind !== n) {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType);
            }
            r.set(e, t.getForAddon(e));
        });
        return r;
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, o) {
            const a = yield (e || (e = n("Promise"))).allSettled(t);
            return r("compactMap")(a, function(e) {
                switch(e.status){
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        o(e.reason);
                        return;
                }
            });
        });
        return d.apply(this, arguments);
    }
    function m(e, t, n) {
        if (e != null && t != null && t * s > e) {
            throw n();
        }
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = {
                type: e,
                encryptedAddOn: t
            };
            const a = yield o("WAWebAddonEncryption").decryptAddOn(r, n);
            return {
                arrayBuffer: a,
                protobuf: o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, a)
            };
        });
        return _.apply(this, arguments);
    }
    l.buildAddonParentMap = u;
    l.settleAddonResults = c;
    l.assertPollNotPastEndTime = m;
    l.decryptPollAddonPayload = p;
}, 98);