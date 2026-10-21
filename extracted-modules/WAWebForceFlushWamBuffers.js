__d("WAWebForceFlushWamBuffers", [
    "WALogger",
    "WAWebCanonicalUtils",
    "WAWebCanonicalWamFalcoBuffer",
    "WAWebWamFalcoLogger",
    "WAWebWebWamForceFlushWamEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t = true) {
        new (o("WAWebWebWamForceFlushWamEvent")).WebWamForceFlushWamEvent().commitAndWaitForFlush(true).finally(()=>o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "force flushed all wam buffers"
            ]))).tags("wam"));
        if (t) {
            o("WAWebWamFalcoLogger").flushFalcoForLogout();
        } else if (o("WAWebCanonicalUtils").isCanonicalPresent()) {
            o("WAWebCanonicalWamFalcoBuffer").drainCanonicalWamFalcoBuffer();
        }
    }
    l.forceFlushAllWamAndQplBuffers = s;
}, 98);