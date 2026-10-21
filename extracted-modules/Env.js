__d("Env", [], function(t, n, r, o, a, i) {
    let e = {
        ajaxpipe_token: null,
        compat_iframe_token: null,
        iframeKey: "",
        iframeTarget: "",
        iframeToken: "",
        isCQuick: false,
        jssp_header_sent: false,
        jssp_targeting_enabled: false,
        loadHyperion: false,
        start: Date.now(),
        nocatch: false,
        ig_server_override: "",
        barcelona_server_override: "",
        ig_mqtt_wss_endpoint: "",
        ig_mqtt_polling_endpoint: ""
    };
    if (t.Env) {
        e = babelHelpers.extends({}, e, t.Env);
    }
    t.Env = e;
    i.default = e;
}, 66);