__d("WAWebVoipHardwareInfo", [
    "Promise",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebNullFunc"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 3000;
    let u = {};
    let c = null;
    const d = [
        {
            keywords: [
                "intel"
            ],
            name: "Intel"
        },
        {
            keywords: [
                "amd",
                "advanced micro devices",
                "ati technologies",
                "radeon"
            ],
            name: "AMD"
        },
        {
            keywords: [
                "nvidia"
            ],
            name: "NVIDIA"
        },
        {
            keywords: [
                "qualcomm",
                "adreno"
            ],
            name: "Qualcomm"
        },
        {
            keywords: [
                "apple"
            ],
            name: "Apple"
        },
        {
            keywords: [
                "microsoft"
            ],
            name: "Microsoft"
        },
        {
            keywords: [
                "mesa",
                "swiftshader"
            ],
            name: "Software"
        }
    ];
    function m(e) {
        const r = (e == null ? undefined : e.trim().toLowerCase()) ?? "";
        if (r === "") {
            return null;
        }
        const o = d.find(({ keywords })=>keywords.some((e)=>r.includes(e)));
        return o?.name ?? null;
    }
    function p(e) {
        return m(e) ?? e?.trim() ?? "";
    }
    function _(gpuName, gpuVendorRaw) {
        return m(gpuVendorRaw) ?? m(gpuName) ?? p(gpuVendorRaw);
    }
    function f() {
        const t = {};
        const r = ()=>{
            u = babelHelpers.extends({}, t);
        };
        const a = o("WAWebBrowserApi").getCpuArchitecture().then((e)=>{
            if (e != null && e !== "") {
                t.cpuArch = e;
                r();
            }
        });
        const i = o("WAPromiseDelays").withTimeout(o("WAWebBackendApi").frontendSendAndReceive("detectGpuInfo").catch(o("WAWebNullFunc").returnNull), s, o("WAWebNullFunc").returnNull).then((e)=>{
            if (e != null) {
                if (e.gpuName !== "") {
                    t.gpuName = e.gpuName;
                }
                const n = _(e.gpuName, e.gpuVendorRaw);
                if (n !== "") {
                    t.gpuVendor = n;
                }
                t.gpuCount = 1;
                r();
            }
        });
        return (e || (e = n("Promise"))).all([
            a,
            i
        ]).then(()=>{});
    }
    function g() {
        if (c == null) {
            try {
                c = f().catch((e)=>{});
            } catch (t) {
                c = (e || (e = n("Promise"))).resolve();
            }
        }
    }
    function h() {
        return u;
    }
    function y() {
        u = {};
        c = null;
    }
    function C() {
        return c;
    }
    l.normalizeGpuVendor = p;
    l.ensureHardwareInfoDetected = g;
    l.getCachedHardwareInfo = h;
    l.resetHardwareInfoForTest = y;
    l.getDetectionPromiseForTest = C;
}, 98);