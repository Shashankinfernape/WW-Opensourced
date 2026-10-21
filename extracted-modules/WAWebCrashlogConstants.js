__d("WAWebCrashlogConstants", [
    "WAWebBuildConstants",
    "WAWebEnvironment"
], function(t, n, r, o, a, i, l) {
    const e = "https://crashlogs.whatsapp.net/wa_fls_upload_check";
    const s = "1063127757113399|745146ffa34413f9dbb5469f5370b7af";
    const u = "https://crashlogs.whatsapp.net/wa_clb_data";
    const c = "web";
    let d = "web";
    if (r("WAWebEnvironment").isWindows) {
        d = "win_hybrid";
    }
    if (r("WAWebEnvironment").isGuest) {
        d = "guest";
    }
    const m = d;
    const p = 167028690535322..toString();
    const _ = "0";
    const f = `${o("WAWebBuildConstants").DYN_ORIGIN}web-contact-us`;
    const g = 0;
    l.CLB_CHECK_URL = e;
    l.CLB_TOKEN = s;
    l.CLB_URL = u;
    l.CLB_PLATFORM = c;
    l.CLB_SUBPLATFORM = m;
    l.FB_APP_ID = p;
    l.BUILD_ID = _;
    l.TICKET_URL = f;
    l.UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE = g;
}, 98);