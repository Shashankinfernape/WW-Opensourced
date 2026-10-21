__d("StyleXSheet", [
    "invariant",
    "ExecutionEnvironment",
    "Locale",
    "gkx"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = "__fb-light-mode";
    const c = "__fb-dark-mode";
    function d(e, t) {
        const n = [];
        n.push(`${e} {`);
        for(const r in t){
            const o = t[r];
            n.push(`  --${r}: ${o};`);
        }
        n.push("}");
        return n.join("\n");
    }
    function m() {
        const e = document.createElement("style");
        e.setAttribute("type", "text/css");
        e.setAttribute("data-styled", "true");
        const t = document.head || document.getElementsByTagName("head")[0];
        if (!t) {
            s(0, 2655);
        }
        t.appendChild(e);
        return e;
    }
    function p() {
        return window.CSS != null && window.CSS.supports != null && window.CSS.supports("--fake-var:0");
    }
    const _ = /var\(--(.*?)\)/g;
    class f {
        constructor(e){
            this.tag = null;
            this.injected = false;
            this.ruleForPriority = new Map;
            this.rules = [];
            this.rootTheme = e.rootTheme;
            this.rootDarkTheme = e.rootDarkTheme;
            this.isSlow = e.isSlow ?? (typeof location === "object" && typeof location.search === "string" ? location.search.includes("stylex-slow") : false);
            this.supportsVariables = e.supportsVariables ?? p();
            this.$1 = o("Locale").isRTL();
            this.externalRules = new Set;
        }
        getVariableMatch() {
            return _;
        }
        isHeadless() {
            return this.tag == null || !(e || (e = r("ExecutionEnvironment"))).canUseDOM;
        }
        getTag() {
            const tag = this.tag;
            if (tag == null) {
                s(0, 11103);
            }
            return tag;
        }
        getCSS() {
            return this.rules.join("\n");
        }
        getRulePosition(t) {
            return this.rules.indexOf(t);
        }
        getRuleCount() {
            return this.rules.length;
        }
        inject() {
            if (!this.injected) {
                this.injected = true;
                if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                    this.injectTheme();
                    return;
                }
                this.tag = m();
                this.injectTheme();
            }
        }
        injectTheme() {
            if (!r("gkx")("21106")) {
                if (this.rootTheme != null) {
                    this.insert(d(`:root, .${u}`, this.rootTheme), 0);
                }
                if (this.rootDarkTheme != null) {
                    this.insert(d(`.${c}:root, .${c}`, this.rootDarkTheme), 0);
                }
            }
        }
        __injectCustomThemeForTesting(t, n) {
            if (n != null) {
                this.insert(d(t, n), 0);
            }
        }
        delete(t) {
            const e = this.rules.indexOf(t);
            if (!(e >= 0)) {
                s(0, 2656, t);
            }
            this.rules.splice(e, 1);
            if (!this.isHeadless()) {
                const n = this.getTag();
                if (this.isSlow) {
                    n.removeChild(n.childNodes[e + 1]);
                } else {
                    const r = n.sheet;
                    if (!r) {
                        s(0, 2657);
                    }
                    r.deleteRule(e);
                }
            }
        }
        normalizeRule(t) {
            const rootTheme = this.rootTheme;
            if (this.supportsVariables || rootTheme == null) {
                return t;
            }
            return t.replace(_, (t, n)=>rootTheme[n]);
        }
        getInsertPositionForPriority(t) {
            const e = this.ruleForPriority.get(t);
            if (e != null) {
                return this.rules.indexOf(e) + 1;
            }
            const n = Array.from(this.ruleForPriority.keys()).sort((e, t)=>t - e).filter((e)=>{
                if (e > t) {
                    return 1;
                }
                return 0;
            });
            if (n.length === 0) {
                return this.getRuleCount();
            }
            const r = n.pop();
            return this.rules.indexOf(this.ruleForPriority.get(r));
        }
        insert(t, n, r) {
            if (this.injected === false) {
                this.inject();
            }
            const e = t.replace(/\.([a-zA-Z0-9]+), \.\1:root/g, ".$1.$1, .$1.$1:root");
            let o = r;
            if (o != null) {
                o = o.replace(/\.([a-zA-Z0-9]+), \.\1:root/g, ".$1.$1, .$1.$1:root");
            }
            const a = this.$1 && o != null ? o : e;
            if (!this.externalRules.has(a.slice(0, a.indexOf("{")).trim()) && !this.rules.includes(a)) {
                const i = this.normalizeRule(a);
                if (!this.externalRules.has(i.slice(0, i.indexOf("{")).trim())) {
                    const l = this.getInsertPositionForPriority(n);
                    this.rules.splice(l, 0, i);
                    this.ruleForPriority.set(n, i);
                    if (!this.isHeadless()) {
                        const s = this.getTag();
                        if (this.isSlow) {
                            const u = document.createTextNode(i);
                            s.insertBefore(u, s.childNodes[l]);
                        } else {
                            const c = s.sheet;
                            if (c != null) {
                                try {
                                    c.insertRule(i, Math.min(l, c.cssRules.length));
                                } catch (e) {}
                            }
                        }
                    }
                }
            }
        }
    }
    f.LIGHT_MODE_CLASS_NAME = u;
    f.DARK_MODE_CLASS_NAME = c;
    l.default = f;
}, 98);