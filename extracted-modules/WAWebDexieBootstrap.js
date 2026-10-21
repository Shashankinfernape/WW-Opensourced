__d("WAWebDexieBootstrap", [
    "WAWeb-dexie",
    "WAWebNoop"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        r("WAWeb-dexie").Promise.PSD.onunhandled = r("WAWebNoop");
        r("WAWeb-dexie").Promise.PSD.txRelaxedDurabilityEnabled = true;
    }
    l.patchDexie = e;
}, 98);