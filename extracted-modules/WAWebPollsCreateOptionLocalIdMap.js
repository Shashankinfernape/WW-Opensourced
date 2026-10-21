__d("WAWebPollsCreateOptionLocalIdMap", [
    "Promise",
    "WAHex",
    "WAWebPollOptionHashUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = yield (e || (e = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const hash = yield c(e);
                    const hexHash = o("WAHex").toHex(new Uint8Array(hash));
                    return {
                        hash,
                        hexHash,
                        localId: e.localId
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const i = new Map;
            const l = new Map;
            for (const s of a){
                const { hash, hexHash, localId } = s;
                i.set(hexHash, localId);
                l.set(localId, hash);
            }
            return {
                getLocalIdForHexHash: function(t) {
                    return r("nullthrows")(i.get(t));
                },
                getLocalIdForHash: function(t) {
                    return r("nullthrows")(i.get(o("WAHex").toHex(new Uint8Array(t))));
                },
                getHashForLocalId: function(t) {
                    return r("nullthrows")(l.get(t));
                },
                includesHashes: function(t) {
                    return t.every((e)=>i.has(o("WAHex").toHex(new Uint8Array(e))));
                }
            };
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return o("WAWebPollOptionHashUtils").getHashBufferForString(e.name);
    }
    l.createOptionLocalIdMap = s;
}, 98);