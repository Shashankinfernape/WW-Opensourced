__d("WAWebBroadcastSenderKeyManager", [
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastDeviceClassifier",
    "WAWebBroadcastKeyDistribution",
    "WAWebModelStorageUtils",
    "WAWebSchemaBroadcastMetadata",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const r = yield o("WAWebSchemaBroadcastMetadata").getBroadcastMetadataTable().get(e);
            return {
                rotateKey: r?.senderKeyRotate ?? false,
                senderKey: new Set(r?.senderKeyDevices ?? [])
            };
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, senderKeyRotate, a = []) {
            if (!(!senderKeyRotate && a.length === 0)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:senderkey] updateBroadcastSenderKeyState: broadcastListId=",
                    ", isRotation=",
                    ", devices=",
                    ""
                ])), t, String(senderKeyRotate), a.length);
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "broadcast-metadata"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([u]) {
                        const c = yield u.get(t);
                        if (!(senderKeyRotate && c != null && c.senderKeyRotate)) {
                            let senderKeyDevices;
                            if (senderKeyRotate) {
                                senderKeyDevices = [];
                            } else {
                                const p = c != null && c.senderKeyRotate ? new Set : new Set(c?.senderKeyDevices ?? []);
                                a.forEach((e)=>p.add(e.toString()));
                                senderKeyDevices = Array.from(p);
                            }
                            yield u.createOrReplace({
                                id: t,
                                audienceExpression: c?.audienceExpression ?? o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
                                customAudienceFbid: c?.customAudienceFbid,
                                recipients: c?.recipients ?? [],
                                labels: c?.labels ?? [],
                                senderKeyDevices,
                                senderKeyRotate
                            });
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[broadcast:senderkey] updateBroadcastSenderKeyState: ",
                                ""
                            ])), senderKeyRotate ? "marked for rotation" : `updated ${a.length} devices, total=${senderKeyDevices.length}`);
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield _(t, false, e);
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = e.toString();
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "broadcast-metadata"
            ], (()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*([i]) {
                    const l = yield i.get(t);
                    const s = l?.senderKeyDevices ?? [];
                    if (s.includes(r)) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[broadcast:senderkey] Removing device from sender key tracking (retry received), deviceType=",
                            ""
                        ])), o("WAWebBroadcastDeviceClassifier").classifyBroadcastDevice(e));
                        yield i.merge(t, {
                            senderKeyDevices: s.filter((e)=>e !== r)
                        });
                    }
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            })());
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n, r) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(allDeviceList, t, n, r) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:senderkey] getBroadcastSkDistribList: broadcastListId=",
                ", recipients=",
                ", devices=",
                ""
            ])), n, t.length, allDeviceList.length);
            const extendedRecipients = [].concat(t, [
                r
            ]);
            const i = yield m(n);
            if (i.rotateKey || i.senderKey.size === 0) {
                return o("WAWebBroadcastKeyDistribution").handleFullDistribution(allDeviceList, extendedRecipients, i);
            }
            const l = o("WAWebBroadcastKeyDistribution").handlePartialDistribution(allDeviceList, extendedRecipients, i);
            const { participantList, senderKeyHitCount, skDistribList } = l;
            const f = o("WAWebBroadcastKeyDistribution").checkAndHandleSecurityRotation({
                allDeviceList,
                extendedRecipients,
                senderKeyHitCount,
                storedKeyCount: i.senderKey.size
            });
            if (f != null) {
                yield _(n, true);
                return f;
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:senderkey] getBroadcastSkDistribList: distributing to ",
                " devices, ",
                " already have keys"
            ])), skDistribList.length, participantList.length);
            return {
                rotateKey: i.rotateKey,
                skDistribList,
                participantList
            };
        });
        return v.apply(this, arguments);
    }
    l.getBroadcastSenderKeyMap = m;
    l.markBroadcastHasSenderKey = g;
    l.markForgetBroadcastSenderKey = y;
    l.getBroadcastSkDistribList = b;
}, 98);