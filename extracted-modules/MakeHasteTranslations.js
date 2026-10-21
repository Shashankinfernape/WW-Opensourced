__d("MakeHasteTranslations", [
    "BootloaderConfig",
    "BootloaderRetryTracker",
    "ExecutionEnvironment",
    "FBLogger",
    "MakeHasteTranslationsMap",
    "Promise",
    "TimeSlice",
    "err",
    "fb-error",
    "getErrorSafe",
    "getSameOriginTransport",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let c;
    let d;
    const m = {};
    const p = new (r("BootloaderRetryTracker"))({
        retries: r("BootloaderConfig").translationRetries ?? r("BootloaderConfig").jsRetries,
        abortNum: r("BootloaderConfig").translationRetryAbortNum ?? r("BootloaderConfig").jsRetryAbortNum,
        abortTime: r("BootloaderConfig").translationRetryAbortTime ?? r("BootloaderConfig").jsRetryAbortTime,
        abortCallback: function() {
            r("FBLogger")("binary_transparency").warn("Translations retry abort");
        }
    });
    function _(e) {
        const t = JSON.parse(e);
        if (t != null && typeof t === "object" && typeof t.translations === "object" && Array.isArray(t.virtual_modules)) {
            return t;
        }
        throw r("err")("Invalid response shape");
    }
    function f(e) {
        return new (d || (d = n("Promise")))(function(t, n) {
            const o = r("TimeSlice").getGuardedContinuation("MakeHasteTranslationsFetcher genSendRequest");
            const a = r("getSameOriginTransport")();
            a.open("GET", e, true);
            a.onreadystatechange = function(i) {
                if (a.readyState === 4) {
                    o(function() {
                        r("fb-error").ErrorXFBDebug.addFromXHR(a);
                        try {
                            if (a.status !== 200) {
                                throw r("err")("Received non-200 response");
                            }
                            t(_(a.responseText));
                        } catch (error) {
                            p.maybeScheduleRetry(e, function() {
                                return t(f(e));
                            }, function() {
                                return n(r("err")("Error processing response. XHR Error: %s, XHR status: %s, Response Text: %s", r("getErrorSafe")(error).toString(), a.status, a.responseText.length > 300 ? `${a.responseText.slice(0, 300)}...` : a.responseText));
                            });
                        }
                    });
                }
            };
            a.send();
        });
    }
    const g = "data:application/json;base64";
    function h(e) {
        if (!e.includes(g)) {
            throw r("err")("Invalid data uri mime type");
        }
        const t = e.split(",");
        const n = t[0];
        const o = t[1];
        if (o == null) {
            throw r("err")("Data uri contains no contents");
        }
        return _(atob(o));
    }
    function y(e, a) {
        if (!(c || (c = r("ExecutionEnvironment"))).isInBrowser || m[e] === "inprogress" || m[e] === "complete") {
            return (d || (d = n("Promise"))).resolve();
        }
        m[e] = "inprogress";
        return (a.includes(g) ? (d || (d = n("Promise"))).resolve(h(a)) : f(a)).then((n)=>{
            o("MakeHasteTranslationsMap").setBatch(n.translations);
            n.virtual_modules.forEach((e)=>t.define(e, {}));
            m[e] = "complete";
        }).catch((t)=>{
            m[e] = "failed";
            r("FBLogger")("binary_transparency", "translation_download_error").catching(r("getErrorSafe")(t)).warn("Unable to download and process translation map. Url: %s", a);
        });
    }
    function C(e) {
        for (const [n, o] of Object.entries(e)){
            r("promiseDone")(y(n, o));
        }
    }
    l.genFetchAndProcessTranslations = y;
    l.fetchTranslationsForEarlyFlush = C;
}, 98);