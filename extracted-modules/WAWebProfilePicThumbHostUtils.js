__d("WAWebProfilePicThumbHostUtils", [
    "WALogger",
    "WAWebMediaHosts",
    "WAWebMediaHostsRouteSelection",
    "WAWebMmsClientSelectHost",
    "WAWebMmsMediaTypes",
    "WAWebProfilePicConstants"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        const o = n?.hostname ?? d(t);
        return `https://${o}${e}`;
    }
    function c(t, attemptCount, lastHostUsed) {
        try {
            const i = m(t);
            const { fallbackHost, selectedHost } = i;
            return r("WAWebMmsClientSelectHost")({
                selectedHost,
                fallbackHost,
                attemptCount,
                lastHostUsed,
                lastFetchMadeProgress: attemptCount === 0
            });
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "profile-pic host resolve failed, using fallback: ",
                ""
            ])), error).tags("mms4");
            return null;
        }
    }
    function d(e) {
        try {
            return m(e).selectedHost.hostname;
        } catch (error) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "profile-pic host resolve failed, using fallback: ",
                ""
            ])), error).tags("mms4");
            return o("WAWebProfilePicConstants").DEFAULT_HOSTNAME;
        }
    }
    function m(encFilehash) {
        return o("WAWebMediaHosts").mediaHosts.getCachedHostsInfo({
            encFilehash,
            operation: o("WAWebMediaHostsRouteSelection").OPERATIONS.DOWNLOAD,
            type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PPIC
        });
    }
    l.buildMms4DownloadUrl = u;
    l.selectMms4Host = c;
}, 98);