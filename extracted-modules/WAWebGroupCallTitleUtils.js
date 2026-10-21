__d("WAWebGroupCallTitleUtils", [
    "WAWebGroupMetadataGetters",
    "WAWebParticipantListUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = e?.groupMetadata;
        if (!(t == null || !o("WAWebGroupMetadataGetters").getIsUnnamed(t))) {
            return o("WAWebParticipantListUtils").calculateUnnamedGroupParticipantsList(t);
        }
    }
    l.getUnnamedGroupCallNameOverride = e;
}, 98);