__d("WAWebGuestCoreDownloadCTAClickAction", [
    "WABase64",
    "WAWebGuestCoreCommonUtils",
    "WAWebGuestCoreConsts",
    "WAWebGuestCoreRoutes",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "https://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8&pt=217218";
    const s = "https://www.whatsapp.com/download";
    const u = "invite_g";
    const c = "event_invite_link";
    function d() {
        const e = window.location.pathname;
        return e.startsWith(o("WAWebGuestCoreRoutes").GUEST_EVENTS_PATH) || `${e}/` === o("WAWebGuestCoreRoutes").GUEST_EVENTS_PATH;
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
                if (!e || !e.recoveryToken) {
                    return "";
                }
                return o("WABase64").encodeB64UrlSafe(e.recoveryToken);
            } catch (e) {
                return "";
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n, r) {
        if (e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP || e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER) {
            return C(u);
        }
        if (e === o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER) {
            if (n) {
                return `https://www.whatsapp.com/dl/?mode=gr&sc=${t}${r !== "" ? `&bct=${r}` : ""}`;
            }
            return `https://www.whatsapp.com/dl/code=${t}?mode=gr${r !== "" ? `&bct=${r}` : ""}`;
        }
        if (e === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN) {
            return s;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function f(e, t, n, r) {
        if (e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP || e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER) {
            return C(c);
        }
        if (e === o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER) {
            return b(t, n, r);
        }
        if (e === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN) {
            return s;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function g(e, t) {
        h(e, t);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const i = new URLSearchParams(window.location.search);
            const l = yield m();
            const s = t ?? o("WAWebGuestCoreCommonUtils").getInviteCodeFromUrlParams(i) ?? "";
            const u = i.get("sc");
            const c = i.get("token") ?? "";
            const p = d() && c !== "" ? f(e, c, i.get("ic") ?? "", l) : _(e, s, u != null, l);
            window.location.assign(p);
        });
        return y.apply(this, arguments);
    }
    function C(t) {
        return `${e}&ct=${t}`;
    }
    function b(e, t, n) {
        const r = new URLSearchParams;
        r.set("mode", "gr");
        r.set("event_code", e);
        if (t !== "") {
            r.set("ic", t);
        }
        if (n !== "") {
            r.set("bct", n);
        }
        return `https://www.whatsapp.com/dl/?${r.toString()}`;
    }
    l.isGuestEventsSurface = d;
    l.getGuestDownloadUrl = _;
    l.getGuestEventsDownloadUrl = f;
    l.downloadCTAClickAction = g;
}, 98);