__d("WAWebFontLoader", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "bx",
    "err",
    "gkx",
    "nullthrows",
    "webfontloader"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = (u = r("bx")).getURL(u("9544"));
    const d = u.getURL(u("9545"));
    const m = n("$InternalEnum")({
        SANS_SERIF: 0,
        SERIF: 1,
        NORICAN_REGULAR: 2,
        BRYNDAN_WRITE: 3,
        BEBASNEUE_REGULAR: 4,
        OSWALD_HEAVY: 5,
        NOTO_EMOJI: 6
    });
    const p = {};
    p[m.SERIF] = {
        google: {
            families: [
                "Roboto"
            ]
        }
    };
    p[m.SANS_SERIF] = {
        google: {
            families: [
                "Droid Serif"
            ]
        }
    };
    p[m.NORICAN_REGULAR] = {
        google: {
            families: [
                "Norican"
            ]
        }
    };
    p[m.BRYNDAN_WRITE] = {
        custom: {
            families: [
                "Bryndan-Write"
            ]
        }
    };
    p[m.OSWALD_HEAVY] = {
        google: {
            families: [
                "Oswald:bold"
            ]
        }
    };
    const _ = {};
    _[m.BRYNDAN_WRITE] = `@font-face {font-family:"Bryndan-Write"; src:url("${c}") format("truetype");}`;
    _[m.NOTO_EMOJI] = `@font-face {font-family:"Noto-Emoji"; src:url("${d}") format("truetype");}`;
    class f {
        constructor(){
            this.loadedFonts = {};
            this.loadingPromise = {};
        }
        load(t) {
            const e = this;
            if (this.loadedFonts[t]) {
                return (s || (s = n("Promise"))).resolve();
            }
            if (this.loadingPromise[t]) {
                return this.loadingPromise[t];
            }
            const o = p[t];
            const a = _[t];
            let i;
            if (a) {
                i = new (s || (s = n("Promise")))(function(e, t) {
                    const n = document.createElement("style");
                    n.appendChild(document.createTextNode(a));
                    n.onload = e;
                    n.onerror = t;
                    if (document.head) {
                        document.head.appendChild(n);
                    }
                });
            } else {
                i = (s || (s = n("Promise"))).resolve();
            }
            const l = i.then(()=>new (s || (s = n("Promise")))(function(n, a) {
                    const i = babelHelpers.extends({}, o, {
                        active: function() {
                            e.loadedFonts[t] = true;
                            n();
                        },
                        inactive: function() {
                            e.loadingPromise[t] = undefined;
                            a(r("err")(`Failed to load font: ${m.getName(t)}`));
                        }
                    });
                    r("webfontloader").load(i);
                }));
            this.loadingPromise[t] = l;
            return l;
        }
        loadMessageFont(n) {
            if (r("gkx")("26256") && !n) {
                return this.load(r("nullthrows")(m.cast(0)));
            }
            const t = m.cast(n);
            if (t == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Unsupported font: ",
                    ""
                ])), n);
                return this.load(m.SANS_SERIF);
            }
            return this.load(t);
        }
        loadAllFonts() {
            const e = this;
            return (s || (s = n("Promise"))).all(Array.from(m.members(), function(t) {
                return e.load(t);
            }));
        }
    }
    const g = new f;
    l.Font = m;
    l.FontLoader = g;
}, 98);