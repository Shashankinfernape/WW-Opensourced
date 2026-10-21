__d("PerfXSharedFields", [
    "CurrentLocale",
    "Locale",
    "SiteData",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    const e = typeof window !== "undefined" ? window : self;
    var s = {
        addCommonValues: function(n) {
            const t = e?.navigator;
            try {
                if (t && typeof t.hardwareConcurrency === "number") {
                    n.num_cores = Math.floor(t.hardwareConcurrency);
                }
                const a = t;
                const i = a?.deviceMemory;
                if (typeof i === "number" && i !== 0) {
                    n.ram_gb = i;
                }
                const l = t;
                const s = l?.connection;
                if (s != null) {
                    if (typeof s.downlink === "number") {
                        n.downlink_megabits = s.downlink;
                    }
                    if (typeof s.effectiveType === "string") {
                        n.effective_connection_type = s.effectiveType;
                    }
                    if (typeof s.rtt === "number") {
                        n.rtt_ms = s.rtt;
                    }
                }
            } catch (error) {
                if (r("getErrorSafe")(error).message !== "can't access dead object") {
                    throw r("getErrorSafe")(error);
                }
            }
            n.client_push_phase = r("SiteData").push_phase;
            n.client_revision = r("SiteData").client_revision;
            if (r("SiteData").server_revision != null) {
                n.server_revision = r("SiteData").server_revision;
            }
            n.locale = r("CurrentLocale").get();
            n.isRTL = Number(o("Locale").isRTL());
            return n;
        },
        getCommonData: function() {
            const e = {};
            s.addCommonValues(e);
            return e;
        }
    };
    l.default = s;
}, 98);