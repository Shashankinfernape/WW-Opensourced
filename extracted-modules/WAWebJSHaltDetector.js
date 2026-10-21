__d("WAWebJSHaltDetector", [
    "WAWebBaseJSHaltDetector"
], function(t, n, r, o, a, i, l) {
    const e = 3000;
    const s = 10000;
    const u = new (o("WAWebBaseJSHaltDetector")).BaseJsHaltDetector(s, e);
    u.startDetection();
    l.DEFAULT_THRESHOLD = e;
    l.jsHaltDetector = u;
}, 98);