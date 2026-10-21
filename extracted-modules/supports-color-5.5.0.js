__d("supports-color-5.5.0", [
    "has-flag-3.0.0"
], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e && typeof e === "object" && "default" in e) {
            return e.default;
        }
        return e;
    }
    const l = e(n("has-flag-3.0.0"));
    const s = {};
    const u = {
        exports: s
    };
    function c() {
        const e = {};
        const t = l();
        const process_env = process.env;
        let r;
        if (t("no-color") || t("no-colors") || t("color=false")) {
            r = false;
        } else if (t("color") || t("colors") || t("color=true") || t("color=always")) {
            r = true;
        }
        if ("FORCE_COLOR" in process_env) {
            r = process_env.FORCE_COLOR.length === 0 || parseInt(process_env.FORCE_COLOR, 10) !== 0;
        }
        function o(level) {
            if (level === 0) {
                return false;
            }
            return {
                level,
                hasBasic: true,
                has256: level >= 2,
                has16m: level >= 3
            };
        }
        function a(o) {
            if (r === false) {
                return 0;
            }
            if (t("color=16m") || t("color=full") || t("color=truecolor")) {
                return 3;
            }
            if (t("color=256")) {
                return 2;
            }
            if (o && !o.isTTY && r !== true) {
                return 0;
            }
            const a = r ? 1 : 0;
            if (process.platform === "win32") {
                const i = e.release().split(".");
                if (Number(process.versions.node.split(".")[0]) >= 8 && Number(i[0]) >= 10 && Number(i[2]) >= 10586) {
                    if (Number(i[2]) >= 14931) {
                        return 3;
                    }
                    return 2;
                }
                return 1;
            }
            if ("CI" in process_env) {
                if ([
                    "TRAVIS",
                    "CIRCLECI",
                    "APPVEYOR",
                    "GITLAB_CI"
                ].some((e)=>e in process_env) || process_env.CI_NAME === "codeship") {
                    return 1;
                }
                return a;
            }
            if ("TEAMCITY_VERSION" in process_env) {
                if (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(process_env.TEAMCITY_VERSION)) {
                    return 1;
                }
                return 0;
            }
            if (process_env.COLORTERM === "truecolor") {
                return 3;
            }
            if ("TERM_PROGRAM" in process_env) {
                const l = parseInt((process_env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                switch(process_env.TERM_PROGRAM){
                    case "iTerm.app":
                        if (l >= 3) {
                            return 3;
                        }
                        return 2;
                    case "Apple_Terminal":
                        return 2;
                }
            }
            if (/-256(color)?$/i.test(process_env.TERM)) {
                return 2;
            }
            if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(process_env.TERM) || "COLORTERM" in process_env) {
                return 1;
            }
            process_env.TERM === "dumb";
            return a;
        }
        function supportsColor(e) {
            const t = a(e);
            return o(t);
        }
        u.exports = {
            supportsColor,
            stdout: supportsColor(process.stdout),
            stderr: supportsColor(process.stderr)
        };
    }
    let d = false;
    function m() {
        if (!d) {
            d = true;
            c();
        }
        return u.exports;
    }
    function p(e) {
        switch(e){
            case undefined:
                return m();
        }
    }
    a.exports = p;
}, null);