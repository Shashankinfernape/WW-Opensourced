__d("WAWebUim", [
    "$InternalEnum",
    "Keys",
    "WALogger",
    "WAWebABProps",
    "WAWebUimUtils",
    "compactMap",
    "gkx",
    "maxBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = n("$InternalEnum").Mirrored([
        "ACTIVE",
        "PASSIVE",
        "INACTIVE",
        "DEAD"
    ]);
    const m = n("$InternalEnum").Mirrored([
        "LIFECYCLE",
        "UIM_INTERACTION"
    ]);
    const p = (()=>{
        function e() {
            this.verbose = !r("gkx")("26258");
        }
        const t = e.prototype;
        t.setTop = function(t) {
            let e;
            if (t) {
                t.lastActive = Date.now();
            }
            if (t && this.$1 !== t && t.getState() !== d.INACTIVE && t.getState() !== d.DEAD && t.shouldRequestFocus) {
                t.requestFocus();
            }
            if (t) {
                t.shouldRequestFocus = true;
            }
            if ((e = this.$1) != null && e.popable) {
                window.removeEventListener("wheel", _, {
                    capture: true
                });
            }
            if (t != null && t.popable) {
                window.addEventListener("wheel", _, {
                    capture: true
                });
            }
            this.$1 = t;
        };
        t.getTop = function() {
            return this.$1;
        };
        t.refocusTopUie = function() {
            const e = this;
            self.setTimeout(function() {
                if (e.$1 != null && document.activeElement === document.body) {
                    e.$1.requestFocus();
                }
            }, 0);
        };
        return e;
    })();
    function _(e) {
        const n = f.Manager.getTop()?.getNode();
        if ((o("WAWebUimUtils").isCrossWindowHTMLElement(e.target) || e.target instanceof HTMLElement) && n && !n.contains(e.target)) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    var f = (()=>{
        function t(n, r) {
            this.shouldRequestFocus = true;
            this.dismissEvent = null;
            this.parent = r || this;
            if (!r) {
                if (t.Manager.root && t.Manager.root?.displayName !== n.displayName) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[uim] multiple roots: existing=",
                        " new=",
                        ""
                    ])), t.Manager.root.displayName, n.displayName).sendLogs("multiple-uim-roots", {
                        sampling: 0.01
                    });
                }
                t.Manager.root = this;
            }
            this.displayName = n.displayName;
            this.popable = n.popable;
            this.escapable = n.escapable;
            this.requestFocus = n.requestFocus;
            this.$2 = n.requestDismiss;
            this.getNode = n.getNode;
            this.dismissOnWindowResize = n.dismissOnWindowResize;
            this.children = [];
            this.setState(n.uimState);
        }
        const n = t.prototype;
        n.getState = function() {
            return this.$1;
        };
        n.setState = function(n) {
            switch(n){
                case d.ACTIVE:
                    this.lastActive = Date.now();
                    t.Manager.setTop(this);
                    break;
                case d.PASSIVE:
                    this.lastActive = Date.now();
                    if (this.$1 !== d.ACTIVE) {
                        t.Manager.setTop(t.findMostRecentlyActiveFocusable());
                    }
                    break;
                case d.INACTIVE:
                    if (this.$1 && this.$1 !== n) {
                        t.Manager.setTop(t.findMostRecentlyActiveFocusable());
                    }
                    break;
                case d.DEAD:
                    break;
            }
            this.$1 = n;
        };
        n.activate = function() {
            this.setState(this.$1);
        };
        n.register = function() {
            if (this.parent !== this) {
                this.parent.children.push(this);
            }
            t.pprint();
        };
        n.pop = function(n = m.UIM_INTERACTION, r = true) {
            if (this.getState() === d.DEAD) {
                if (o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup")) {
                    const e = this.parent.children.indexOf(this);
                    if (e !== -1) {
                        this.parent.children.splice(e, 1);
                    }
                }
                return;
            }
            this.$3(this.children, n);
            const a = this.parent.children.indexOf(this);
            if (a !== -1) {
                this.parent.children.splice(a, 1);
            }
            if (t.Manager.root === this) {
                t.Manager.root = void 0;
            }
            const i = t.findMostRecentlyActiveFocusable(this);
            if (i) {
                i.shouldRequestFocus = r;
            }
            t.Manager.setTop(i);
            t.pprint();
        };
        n.requestDismiss = function(t, n) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[uim] request dismiss: ",
                ""
            ])), this.displayName);
            this.dismissEvent = n;
            this.$2(t, n);
        };
        n.$3 = function(t, n) {
            const e = this;
            t.forEach((t)=>{
                t.setState(d.DEAD);
                t.requestDismiss(n);
                e.$3(t.children, n);
            });
        };
        t.findMostRecentlyActiveFocusable = function(n) {
            const e = t.Manager.root;
            if (e) {
                return g({
                    excludingNode: n,
                    node: e,
                    stateFilter: function(t) {
                        const e = t.getState();
                        return e === d.ACTIVE || e === d.PASSIVE;
                    }
                });
            }
        };
        t.findMostRecentlyActiveDismissable = function(n) {
            const e = t.Manager.root;
            if (e) {
                return g({
                    excludingNode: n,
                    node: e,
                    stateFilter: function(t) {
                        return t.getState() === d.ACTIVE;
                    }
                }) || g({
                    excludingNode: n,
                    node: e,
                    stateFilter: function(t) {
                        return t.getState() === d.PASSIVE;
                    }
                });
            }
        };
        t.pprint = function(n) {
            if (!(n !== true && t.Manager.verbose !== true)) {
                const e = t.Manager.root;
                if (e) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[uim] ",
                        ""
                    ])), E(e, []));
                }
            }
        };
        return t;
    })();
    f.State = d;
    f.Manager = new p;
    function g({ excludingNode: t, node: n, stateFilter: o }) {
        if (!n.children.length) {
            return n;
        }
        const a = n.children.filter((e)=>e !== t);
        const i = r("compactMap")(a, function(e) {
            return g({
                excludingNode: t,
                node: e,
                stateFilter: o
            });
        });
        i.push(n);
        const l = i.filter(o);
        return r("maxBy")(l, function(e) {
            return e.lastActive;
        });
    }
    var h = "▶";
    var y = "│";
    var C = "└──";
    var b = "└─┬";
    var v = "├──";
    var S = "├─┬";
    function R(e) {
        switch(e){
            case d.ACTIVE:
                return "A";
            case d.PASSIVE:
                return "P";
            case d.INACTIVE:
                return "I";
            case d.DEAD:
                return "D";
        }
    }
    function L({ ancestors: t, hasChild: n, hasSibling: r, node: o }) {
        let a;
        if (r === true && n) {
            a = S;
        } else if (r === true && !n) {
            a = v;
        } else if (r !== true && n) {
            a = b;
        } else {
            a = C;
        }
        if (o === f.Manager.root) {
            a = h;
        }
        let i = o.displayName;
        if (o === f.Manager.getTop()) {
            i = `${i} ⬥`;
        }
        const l = `(${R(o.getState())})${n ? "\n" : ""}`;
        return `${t.join("")}${a} ${i} ${l}`;
    }
    function E(e, t, n) {
        const r = L({
            ancestors: t,
            hasChild: !!e.children.length,
            hasSibling: n,
            node: e
        });
        return r + e.children.map((r, o)=>{
            const a = n;
            const i = o < e.children.length - 1;
            const l = a === true ? t.concat([
                `${y} `
            ]) : t.concat([
                "  "
            ]);
            return E(r, l, i);
        }).join("\n");
    }
    let k = false;
    function I() {
        return k;
    }
    function T(e = window) {
        const t = new WeakSet;
        let n = null;
        const a = function(t) {
            if (t.keyCode === r("Keys").ESC) {
                const e = f.Manager.getTop();
                const n = e?.getState() === d.ACTIVE ? x(e) || e : f.findMostRecentlyActiveDismissable();
                if (n) {
                    if (n.escapable) {
                        t.stopPropagation();
                        t.preventDefault();
                        n.requestDismiss(m.UIM_INTERACTION, t);
                    } else {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[uim] non-escapable item cannot be dismissed: ",
                            ""
                        ])), n.displayName);
                    }
                }
            }
        };
        e.addEventListener("keydown", a, {
            capture: true
        });
        const i = function() {
            if (!r("gkx")("26256")) {
                const e = f.Manager.getTop();
                const n = e?.getState() === d.ACTIVE ? e : f.findMostRecentlyActiveDismissable();
                if (n?.dismissOnWindowResize && n?.escapable && !t.has(n)) {
                    n.requestDismiss(m.UIM_INTERACTION);
                    t.add(n);
                }
            }
        };
        e.addEventListener("resize", i);
        const l = function(t) {
            k = t.metaKey || t.ctrlKey;
            n = null;
            if (!(!t.screenX || !t.screenY)) {
                const e = D(f.Manager.getTop(), t);
                if (e && t.button === 2) {
                    e.requestDismiss(m.UIM_INTERACTION);
                } else {
                    n = e;
                }
            }
        };
        e.addEventListener("mousedown", l, {
            capture: true
        });
        const s = function(t) {
            if (!t.screenX || !t.screenY) {
                n = null;
                return;
            }
            const e = D(f.Manager.getTop(), t);
            if (e && e === n) {
                self.setTimeout(function() {
                    return e.requestDismiss(m.UIM_INTERACTION, t);
                }, 0);
            }
            n = null;
        };
        e.addEventListener("mouseup", s, {
            capture: true
        });
        return function() {
            e.removeEventListener("keydown", a, {
                capture: true
            });
            e.removeEventListener("resize", i);
            e.removeEventListener("mousedown", l, {
                capture: true
            });
            e.removeEventListener("mouseup", s, {
                capture: true
            });
        };
    }
    function D(e, t) {
        const n = e && e.getState() === d.ACTIVE && e.popable ? e : f.findMostRecentlyActiveDismissable();
        if (!n || !n.popable) {
            return null;
        }
        const r = n.getNode();
        if (r && (o("WAWebUimUtils").isTargetAnElementNode(t.target) || t.target instanceof Node) && r.contains(t.target)) {
            return null;
        }
        return n;
    }
    function x(e) {
        if (!e) {
            return null;
        }
        let t;
        for (const n of e.children){
            t = x(n);
            if (t) {
                return t;
            }
        }
        if (e.getState() === d.ACTIVE) {
            return e;
        }
        return null;
    }
    l.UIMState = d;
    l.DismissReason = m;
    l.UIM = f;
    l.isCmdPressed = I;
    l.setupUimListeners = T;
}, 98);