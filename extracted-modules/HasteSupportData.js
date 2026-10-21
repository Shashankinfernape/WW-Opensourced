__d("HasteSupportData", [
    "ix",
    "MetaConfigMap",
    "QPLHasteSupportDataStorage",
    "bx",
    "getFalcoLogPolicy_DO_NOT_USE",
    "gkx",
    "justknobx",
    "qex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e({ bxData, clpData, gkxData, ixData, justknobxData, metaconfigData, qexData, qplData }, t) {
        if (bxData != null) {
            r("bx").add(bxData, t);
        }
        if (clpData != null) {
            r("getFalcoLogPolicy_DO_NOT_USE").add(clpData, t);
        }
        if (gkxData != null) {
            r("gkx").add(gkxData, t);
        }
        if (ixData != null) {
            s.add(ixData, t);
        }
        if (metaconfigData != null) {
            r("MetaConfigMap").add(metaconfigData, t);
        }
        if (qexData != null) {
            r("qex").add(qexData, t);
        }
        if (qplData != null) {
            r("QPLHasteSupportDataStorage").add(qplData, t);
        }
        if (justknobxData != null) {
            r("justknobx").add(justknobxData, t);
        }
    }
    l.handle = e;
}, 98);