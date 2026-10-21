__d("WAWebMmSignalSharingContextInfo", [
    "WALogger",
    "WAWebMmSignalSharingGatingUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 32;
    function u(e) {
        if (e == null || e.length <= s || !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingContextInfoMaxArrayLengthCapEnabled()) {
            return e;
        }
        return e.slice(0, s);
    }
    function c(t) {
        const n = t.urlTrackingMap;
        const r = n?.urlTrackingMapElements;
        if (n == null || r == null || r.length <= s || !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingContextInfoMaxArrayLengthCapEnabled()) {
            return t;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[mmSignalSharing] URL tracking map over protocol limit: ",
            ""
        ])), r.length).sendLogs("wa-mm-signal-sharing-url-tracking-map-over-limit");
        return babelHelpers.extends({}, t, {
            urlTrackingMap: babelHelpers.extends({}, n, {
                urlTrackingMapElements: r.slice(0, s)
            })
        });
    }
    function d(e) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return e?.dataSharingContext?.dataSharingFlags;
        }
    }
    function m(e) {
        return d(e) != null;
    }
    function p(e) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return u(e?.urlTrackingMap?.urlTrackingMapElements);
        }
        return null;
    }
    function _(e) {
        return p(e) != null;
    }
    l.MAX_URL_TRACKING_MAP_ELEMENTS = s;
    l.getCappedMmSignalSharingURLTrackingMapElements = u;
    l.getCappedMmSignalSharingContextInfo = c;
    l.getMmSignalSharingContextInfoDisclosureFlag = d;
    l.existsMmSignalSharingContextInfoDisclosureFlag = m;
    l.getMmSignalSharingURLTrackingMapElements = p;
    l.existsMmSignalSharingURlTrackingMapElements = _;
}, 98);