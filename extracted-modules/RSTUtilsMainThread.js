__d("RSTUtilsMainThread", [
    "AirwaveAppIdUtils",
    "CurrentUser",
    "RSTConfig",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    function s(t) {
        if (e.has(t)) {
            const r = e.get(t) ?? 0;
            if (r <= 0) {
                e.delete(t);
                return false;
            }
            e.set(t, r - 1);
            return true;
        }
        e.set(t, Math.floor(Math.random() * 10));
        return true;
    }
    const u = r("gkx")("22276");
    function c(e) {
        return e === `${167028690535322}` || u || window.location.hostname === "web.whatsapp.com" || window.location.hostname.endsWith(".web.whatsapp.com") || window.location.hostname.endsWith(".dev-web.whatsapp.com");
    }
    const d = r("CurrentUser").getAppID();
    function m(e) {
        if (c(e)) {
            return "WhatsApp_Web";
        }
        if (o("AirwaveAppIdUtils").isAirwaveWebAppId(e)) {
            return "instagram_airwave";
        }
        switch(e){
            case `${119211728144504}`:
                return "Ads";
            case `${2220391788200892}`:
                return "Comet";
            case `${2094176354154603}`:
                return "Business";
            default:
                return "(Unset-in-RST)";
        }
    }
    const p = new Set([
        119211728144504,
        2094176354154603,
        514771569228061
    ].map((e)=>`${e}`));
    const _ = d != null && p.has(d);
    const f = m(d);
    function g(e) {
        if (e == null) {
            return null;
        }
        for (const t of e){
            if (!r("RSTConfig").isReactComponentNameBlocked(t)) {
                return t;
            }
        }
        return null;
    }
    function h(e, t, n = r("RSTConfig").DEFAULT_REACT_COMPONENT_CONTEXT_SIZE) {
        if (e == null) {
            return null;
        }
        const o = new Set;
        const a = [];
        for (const i of e){
            if (a.length >= n) {
                break;
            }
            if (!o.has(i) && !t(i)) {
                a.push(i);
                o.add(i);
            }
        }
        return a;
    }
    l.shouldSkipProcessingIncident = s;
    l.isMonetizationApp = _;
    l.appName = f;
    l.getAllowListedComponentName = g;
    l.getReactComponentContext = h;
}, 98);