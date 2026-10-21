__d("WAWebFetchCommunityProfilePic", [
    "Promise",
    "WAWebGroupGetProfilePicsJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            const d = {
                id: t
            };
            const m = {
                groupId: t,
                photoId: a != null ? String(a) : null,
                isParentGroup: t.equals(r)
            };
            const p = yield (e || (e = n("Promise"))).all([
                o("WAWebGroupGetProfilePicsJob").getProfilePics([
                    m
                ], r, {
                    type: o("WAWebGroupGetProfilePicsJob").ProfilePicsTypeEnum.IMAGE
                }),
                o("WAWebGroupGetProfilePicsJob").getProfilePics([
                    m
                ], r, {
                    type: o("WAWebGroupGetProfilePicsJob").ProfilePicsTypeEnum.PREVIEW
                })
            ]);
            const _ = p[0];
            const f = p[1];
            if (!f[0] || !f[0].updatePicture || !_[0] || !_[0].updatePicture) {
                return d;
            }
            return babelHelpers.extends({}, d, {
                eurl: _[0].eurl ?? undefined,
                fullDirectPath: _[0].directPath ?? undefined,
                previewEurl: f[0].eurl ?? undefined,
                previewDirectPath: f[0].directPath ?? undefined,
                tag: _[0].tag ?? undefined,
                timestamp: Date.now(),
                eurlStale: false,
                stale: false
            });
        });
        return u.apply(this, arguments);
    }
    l.fetchCommunityProfilePic = s;
}, 98);