__d("WAWebQueryGroupActionMaybeQueryGroupDevice", [
    "WALogger",
    "WAWebGroupMetadataGetters",
    "WAWebPnhCagUtils",
    "WAWebSyncDeviceAdvDeviceListJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.deviceStale) {
                if (t.deviceQueryPromise) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "maybeQueryGroupDevice: ",
                        " - skip duplicate query"
                    ])), t.id);
                    return t.deviceQueryPromise;
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeQueryGroupDevice: ",
                    " - start query device"
                ])), t.id);
                const n = o("WAWebGroupMetadataGetters").getIsCag(t) ? o("WAWebPnhCagUtils").augmentedCagGroupMetadataParticipantList(t) : t.participants.map((e)=>e.id);
                t.deviceQueryPromise = o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(n);
                try {
                    yield t.deviceQueryPromise;
                    t.deviceStale = false;
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "maybeQueryGroupDevice: ",
                        " - complete query device"
                    ])), t.id);
                } finally{
                    t.deviceQueryPromise = null;
                }
            }
        });
        return d.apply(this, arguments);
    }
    l.maybeQueryGroupDevice = c;
}, 98);