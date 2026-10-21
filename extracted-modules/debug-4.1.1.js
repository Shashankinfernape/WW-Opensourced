__d("debug-4.1.1", [
    "ms-2.1.1",
    "supports-color-5.5.0"
], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e && typeof e === "object" && "default" in e) {
            return e.default;
        }
        return e;
    }
    const l = e(n("ms-2.1.1"));
    const s = e(n("supports-color-5.5.0"));
    const u = {};
    const c = {
        exports: u
    };
    function d() {
        function e(e) {
            n.debug = n;
            n.default = n;
            n.coerce = c;
            n.disable = i;
            n.enable = a;
            n.enabled = s;
            n.humanize = l();
            Object.keys(e).forEach((t)=>{
                n[t] = e[t];
            });
            n.instances = [];
            n.names = [];
            n.skips = [];
            n.formatters = {};
            function t(e) {
                let t = 0;
                for(let r = 0; r < e.length; r++){
                    t = (t << 5) - t + e.charCodeAt(r);
                    t |= 0;
                }
                return n.colors[Math.abs(t) % n.colors.length];
            }
            n.selectColor = t;
            function n(e) {
                let a;
                function i() {
                    const e = arguments;
                    if (i.enabled) {
                        const t = i;
                        const r = Number(new Date);
                        const o = r - (a || r);
                        t.diff = o;
                        t.prev = a;
                        t.curr = r;
                        a = r;
                        e[0] = n.coerce(e[0]);
                        if (typeof e[0] !== "string") {
                            e.unshift("%O");
                        }
                        let l = 0;
                        e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, o)=>{
                            if (r === "%%") {
                                return r;
                            }
                            l++;
                            const a = n.formatters[o];
                            if (typeof a === "function") {
                                const i = e[l];
                                r = a.call(t, i);
                                e.splice(l, 1);
                                l--;
                            }
                            return r;
                        });
                        n.formatArgs.call(t, e);
                        const s = t.log || n.log;
                        s.apply(t, e);
                    }
                }
                i.namespace = e;
                i.enabled = n.enabled(e);
                i.useColors = n.useColors();
                i.color = t(e);
                i.destroy = r;
                i.extend = o;
                if (typeof n.init === "function") {
                    n.init(i);
                }
                n.instances.push(i);
                return i;
            }
            function r() {
                const e = n.instances.indexOf(this);
                if (e !== -1) {
                    n.instances.splice(e, 1);
                    return true;
                }
                return false;
            }
            function o(e, t) {
                const r = n(this.namespace + (typeof t === "undefined" ? ":" : t) + e);
                r.log = this.log;
                return r;
            }
            function a(e) {
                n.save(e);
                n.names = [];
                n.skips = [];
                let t;
                const r = (typeof e === "string" ? e : "").split(/[\s,]+/);
                const r_length = r.length;
                for(t = 0; t < r_length; t++){
                    if (r[t]) {
                        e = r[t].replace(/\*/g, ".*?");
                        if (e[0] === "-") {
                            n.skips.push(new RegExp(`^${e.substr(1)}\$`));
                        } else {
                            n.names.push(new RegExp(`^${e}\$`));
                        }
                    }
                }
                for(t = 0; t < n.instances.length; t++){
                    const a = n.instances[t];
                    a.enabled = n.enabled(a.namespace);
                }
            }
            function i() {
                const e = [].join(",");
                n.enable("");
                return e;
            }
            function s(e) {
                if (e[e.length - 1] === "*") {
                    return true;
                }
                let r;
                let t = 0;
                for(r = n.skips.length; t < r; t++){
                    if (n.skips[t].test(e)) {
                        return false;
                    }
                }
                t = 0;
                for(r = n.names.length; t < r; t++){
                    if (n.names[t].test(e)) {
                        return true;
                    }
                }
                return false;
            }
            function u(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            function c(e) {
                if (e instanceof Error) {
                    return e.stack || e.message;
                }
                return e;
            }
            n.enable(n.load());
            return n;
        }
        c.exports = e;
    }
    let m = false;
    function p() {
        if (!m) {
            m = true;
            d();
        }
        return c.exports;
    }
    const _ = {};
    const f = {
        exports: _
    };
    function g() {
        _.log = n;
        _.formatArgs = t;
        _.save = r;
        _.load = o;
        _.useColors = e;
        _.storage = a();
        _.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33"
        ];
        function e() {
            if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
                return true;
            }
            if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
                return false;
            }
            return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }
        function t(e) {
            e[0] = `${(this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ")}+${f.exports.humanize(this.diff)}`;
            if (this.useColors) {
                const t = `color: ${this.color}`;
                e.splice(1, 0, t, "color: inherit");
                let n = 0;
                let r = 0;
                e[0].replace(/%[a-zA-Z%]/g, (e)=>{
                    if (e !== "%%") {
                        n++;
                        if (e === "%c") {
                            r = n;
                        }
                    }
                });
                e.splice(r, 0, t);
            }
        }
        function n() {
            return typeof console === "object" && console.log && console.log(...arguments);
        }
        function r(e) {
            try {
                if (e) {
                    _.storage.setItem("debug", e);
                } else {
                    _.storage.removeItem("debug");
                }
            } catch (e) {}
        }
        function o() {
            let e;
            try {
                e = _.storage.getItem("debug");
            } catch (e) {}
            if (!e && typeof process !== "undefined" && "env" in process) {
                e = process.env.DEBUG;
            }
            return e;
        }
        function a() {
            try {
                return localStorage;
            } catch (e) {}
        }
        f.exports = p()(_);
        const formatters = f.exports.formatters;
        formatters.j = function(e) {
            try {
                return JSON.stringify(e);
            } catch (error) {
                return `[UnexpectedJSONParseError]: ${error.message}`;
            }
        };
    }
    let h = false;
    function y() {
        if (!h) {
            h = true;
            g();
        }
        return f.exports;
    }
    const C = {};
    const b = {
        exports: C
    };
    function v() {
        const e = {};
        C.init = u;
        C.log = a;
        C.formatArgs = r;
        C.save = i;
        C.load = l;
        C.useColors = n;
        C.colors = [
            6,
            2,
            3,
            4,
            5,
            1
        ];
        try {
            const t = s();
            if (t && (t.stderr || t).level >= 2) {
                C.colors = [
                    20,
                    21,
                    26,
                    27,
                    32,
                    33,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44,
                    45,
                    56,
                    57,
                    62,
                    63,
                    68,
                    69,
                    74,
                    75,
                    76,
                    77,
                    78,
                    79,
                    80,
                    81,
                    92,
                    93,
                    98,
                    99,
                    112,
                    113,
                    128,
                    129,
                    134,
                    135,
                    148,
                    149,
                    160,
                    161,
                    162,
                    163,
                    164,
                    165,
                    166,
                    167,
                    168,
                    169,
                    170,
                    171,
                    172,
                    173,
                    178,
                    179,
                    184,
                    185,
                    196,
                    197,
                    198,
                    199,
                    200,
                    201,
                    202,
                    203,
                    204,
                    205,
                    206,
                    207,
                    208,
                    209,
                    214,
                    215,
                    220,
                    221
                ];
            }
        } catch (e) {}
        C.inspectOpts = Object.keys(process.env).filter((e)=>/^debug_/i.test(e)).reduce((acc, key)=>{
            const n = key.substring(6).toLowerCase().replace(/_([a-z])/g, (e, t)=>t.toUpperCase());
            let r = process.env[key];
            if (/^(yes|on|true|enabled)$/i.test(r)) {
                r = true;
            } else if (/^(no|off|false|disabled)$/i.test(r)) {
                r = false;
            } else if (r === "null") {
                r = null;
            } else {
                r = Number(r);
            }
            acc[n] = r;
            return acc;
        }, {});
        function n() {
            if ("colors" in C.inspectOpts) {
                return !!C.inspectOpts.colors;
            }
            return false;
        }
        function r(e) {
            const namespace = this.namespace;
            const useColors = this.useColors;
            if (useColors) {
                const r = this.color;
                const a = `[3${r < 8 ? r : `8;5;${r}`}`;
                const i = `${a};1m\$${namespace}[0m`;
                e[0] = i + e[0].split("\n").join(`
${i}`);
                e.push(`${a}m+${b.exports.humanize(this.diff)}[0m`);
            } else {
                e[0] = `${o() + namespace} ${e[0]}`;
            }
        }
        function o() {
            if (C.inspectOpts.hideDate) {
                return "";
            }
            return `${new Date().toISOString()} `;
        }
        function a() {
            return process.stderr.write(`${e.format(...arguments)}
`);
        }
        function i(e) {
            if (e) {
                process.env.DEBUG = e;
            } else {
                delete process.env.DEBUG;
            }
        }
        function l() {
            return process.env.DEBUG;
        }
        function u(e) {
            e.inspectOpts = {};
            for(let t = Object.keys(C.inspectOpts), n = 0; n < t.length; n++){
                e.inspectOpts[t[n]] = C.inspectOpts[t[n]];
            }
        }
        b.exports = p()(C);
        const formatters = b.exports.formatters;
        formatters.o = function(t) {
            this.inspectOpts.colors = this.useColors;
            return e.inspect(t, this.inspectOpts).replace(/\s*\n\s*/g, " ");
        };
        formatters.O = function(t) {
            this.inspectOpts.colors = this.useColors;
            return e.inspect(t, this.inspectOpts);
        };
    }
    let S = false;
    function R() {
        if (!S) {
            S = true;
            v();
        }
        return b.exports;
    }
    const L = {};
    const E = {
        exports: L
    };
    function k() {
        if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
            E.exports = y();
        } else {
            E.exports = R();
        }
    }
    let I = false;
    function T() {
        if (!I) {
            I = true;
            k();
        }
        return E.exports;
    }
    function D(e) {
        switch(e){
            case undefined:
                return T();
        }
    }
    a.exports = D;
}, null);