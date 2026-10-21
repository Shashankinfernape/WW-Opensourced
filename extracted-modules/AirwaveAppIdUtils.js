__d("AirwaveAppIdUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 2385360641951750;
    const l = 3091416277713978;
    const s = 1509803480261504;
    const u = 1636455547794985;
    const c = 2470881703402156;
    const d = 1315352273538439;
    const m = new Set([
        `${e}`,
        `${s}`,
        `${u}`,
        `${c}`,
        `${d}`
    ]);
    function p(e) {
        return e != null && m.has(`${e}`);
    }
    i.AIRWAVE_LG_APP_ID = e;
    i.AIRWAVE_ROKU_APP_ID = l;
    i.AIRWAVE_SAMSUNG_APP_ID = s;
    i.AIRWAVE_VEGA_APP_ID = u;
    i.AIRWAVE_VIZIO_APP_ID = c;
    i.AIRWAVE_WEB_APP_ID = d;
    i.isAirwaveWebAppId = p;
}, 66);