__d("WAWebSchemaMediaPlaybackEvent", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addAutoIncrementingPrimaryKey: n, addColumn: r } = t;
        e.add("media-playback-event").version(o("WAWebModelStorageVersions").mediaPlaybackEventCreateTable(), [
            n("id"),
            r("event")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("media-playback-event");
    }
    l.addTable = e;
    l.getMediaPlaybackEventTable = s;
}, 98);