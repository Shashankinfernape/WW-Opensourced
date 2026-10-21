__d("WAWebMarkBroadcastSenderKeyRotateForUser", [
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, n) {
        try {
            const r = o("WAWebWidFactory").createWid(t);
            return r.isSameAccountAndAddressingMode(n);
        } catch (n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:senderkey] Failed to parse device WID: ",
                ""
            ])), t).verbose();
            return false;
        }
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebWidFactory").asUserWidOrThrow(e);
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "broadcast-metadata"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const r = yield n.all();
                    const a = r.filter((e)=>{
                        if (e.senderKeyRotate) {
                            return false;
                        }
                        const r = e.senderKeyDevices ?? [];
                        return r.some((e)=>u(e, t));
                    });
                    if (a.length !== 0) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[broadcast:senderkey] markBroadcastSenderKeyRotateForUser: marking ",
                            " broadcast lists for rotation due to identity change of ",
                            ""
                        ])), a.length, t.toString());
                        yield n.bulkCreateOrReplace(a.map((e)=>({
                                id: e.id,
                                audienceExpression: e.audienceExpression ?? o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
                                customAudienceFbid: e.customAudienceFbid,
                                recipients: e.recipients,
                                labels: e.labels,
                                senderKeyDevices: [],
                                senderKeyRotate: true
                            })));
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        });
        return d.apply(this, arguments);
    }
    l.markBroadcastSenderKeyRotateForUser = c;
}, 98);