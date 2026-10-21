__d("WAWebRestoreProfilePictures", [
    "WALogger",
    "WAWebApiHydrateWidsUtil",
    "WAWebProfilePicThumbCollection",
    "WAWebQplFlowWrapper",
    "WAWebSchemaProfilePicThumb",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = r("qpl")._(891431279, "3267");
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = self.performance.now();
            o("WAWebQplFlowWrapper").QPL.markerPoint(s, "RestoreProfilePictures_start");
            const n = yield o("WAWebSchemaProfilePicThumb").getProfilePicThumbTable().all();
            const a = [];
            const i = [];
            n.forEach((e)=>{
                const t = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(e.id);
                if (t != null || o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.isProfilePicRefreshNeeded(e.timestamp)) {
                    i.push(e.id);
                } else {
                    a.push(e);
                }
            });
            if (i.length > 0) {
                o("WAWebSchemaProfilePicThumb").getProfilePicThumbTable().bulkRemove(i).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[restoreProfilePictures]: failed to bulk-remove outdated profile pics"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("restore-profile-pics-bulk-remove-failed");
                });
            }
            const l = a.map((e)=>babelHelpers.extends({}, o("WAWebApiHydrateWidsUtil").hydrateWids(e), {
                    stale: false,
                    eurlStale: false
                }));
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(l, {
                silent: true,
                merge: false
            });
            o("WAWebQplFlowWrapper").QPL.markerPoint(s, "RestoreProfilePictures_end");
        });
        return c.apply(this, arguments);
    }
    l.restoreProfilePictures = u;
}, 98);