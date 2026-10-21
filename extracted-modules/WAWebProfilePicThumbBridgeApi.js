__d("WAWebProfilePicThumbBridgeApi", [
    "WAWebProfilePicThumbCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = {
        removeProfilePicThumb: function({ wid }) {
            const n = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(wid);
            n.set({
                tag: undefined,
                eurl: undefined,
                previewEurl: undefined,
                previewDirectPath: undefined,
                fullDirectPath: undefined,
                filehash: undefined
            });
        },
        markProfilePicStale: function({ profilePicThumbWid }) {
            const n = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(profilePicThumbWid);
            if (n) {
                n.markStale();
            }
        },
        setProfilePicThumb: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ wid }) {
                const n = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(wid);
                yield o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.update(n.id);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.ProfilePicThumbBridgeApi = e;
}, 98);