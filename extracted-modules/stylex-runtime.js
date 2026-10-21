__d("stylex-runtime", [
    "styleq"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (t)=>new Error(`Unexpected 'stylex.${t}' call at runtime. Styles must be compiled by '@stylexjs/babel-plugin'.`);
    const u = (t)=>s(`types.${t}`);
    const c = function(t) {
        throw s("create");
    };
    const d = function(t, n) {
        throw s("createTheme");
    };
    const m = function(t) {
        throw s("defineConsts");
    };
    const p = function(t) {
        throw s("defineVars");
    };
    const _ = function(t) {
        throw s("unstable_conditional");
    };
    const f = function(t) {
        throw s("unstable_defineVarsNested");
    };
    const g = function(t) {
        throw s("unstable_defineConstsNested");
    };
    const h = function(t, n) {
        throw s("unstable_createThemeNested");
    };
    const y = function() {
        throw s("defineMarker");
    };
    const C = function() {
        throw s("firstThatWorks");
    };
    const b = function(t) {
        throw s("keyframes");
    };
    const v = function(t) {
        throw s("positionTry");
    };
    function S(...n) {
        const a = (e || (e = o("styleq"))).styleq(n);
        const i = a[0];
        const l = a[1];
        const s = a[2];
        const u = {};
        if (i != null && i !== "") {
            u.className = i;
        }
        if (l != null && Object.keys(l).length > 0) {
            u.style = l;
        }
        if (s != null && s !== "") {
            u["data-style-src"] = s;
        }
        return u;
    }
    const R = (t)=>t.replace(/([A-Z])/g, "-$1").toLowerCase();
    function L(...t_1) {
        const r = S.apply(this, t_1);
        const { className, style, "data-style-src": data_style_src } = r;
        const l = {};
        if (className != null) {
            l.class = className;
        }
        if (style != null) {
            l.style = Object.entries(style).map(([t, n])=>`${R(t)}:${n}`).join(";");
        }
        if (data_style_src != null) {
            l["data-style-src"] = data_style_src;
        }
        return l;
    }
    const E = function(t) {
        throw s("viewTransitionClass");
    };
    const k = function() {
        throw s("defaultMarker");
    };
    const I = {
        ancestor: function(t) {
            throw s("when.ancestor");
        },
        descendant: function(t) {
            throw s("when.descendant");
        },
        siblingBefore: function(t) {
            throw s("when.siblingBefore");
        },
        siblingAfter: function(t) {
            throw s("when.siblingAfter");
        },
        anySibling: function(t) {
            throw s("when.anySibling");
        }
    };
    const T = Object.freeze({});
    const D = {
        angle: function(t) {
            throw u("angle");
        },
        color: function(t) {
            throw u("color");
        },
        url: function(t) {
            throw u("url");
        },
        image: function(t) {
            throw u("image");
        },
        integer: function(t) {
            throw u("integer");
        },
        lengthPercentage: function(t) {
            throw u("lengthPercentage");
        },
        length: function(t) {
            throw u("length");
        },
        percentage: function(t) {
            throw u("percentage");
        },
        number: function(t) {
            throw u("number");
        },
        resolution: function(t) {
            throw u("resolution");
        },
        time: function(t) {
            throw u("time");
        },
        transformFunction: function(t) {
            throw u("transformFunction");
        },
        transformList: function(t) {
            throw u("transformList");
        }
    };
    class x {
        constructor(...n){
            var a = (e || (e = o("styleq"))).styleq(n);
            var i = a[0];
            return i;
        }
        static create = c;
        static createTheme = d;
        static defineConsts = m;
        static defineMarker = y;
        static defineVars = p;
        static defaultMarker = k;
        static firstThatWorks = C;
        static keyframes = b;
        static positionTry = v;
        static props = S;
        static attrs = L;
        static types = D;
        static when = I;
        static viewTransitionClass = E;
        static env = T;
        static unstable_conditional = _;
        static unstable_defineVarsNested = f;
        static unstable_defineConstsNested = g;
        static unstable_createThemeNested = h;
    }
    l.create = c;
    l.createTheme = d;
    l.defineConsts = m;
    l.defineVars = p;
    l.unstable_conditional = _;
    l.unstable_defineVarsNested = f;
    l.unstable_defineConstsNested = g;
    l.unstable_createThemeNested = h;
    l.defineMarker = y;
    l.firstThatWorks = C;
    l.keyframes = b;
    l.positionTry = v;
    l.props = S;
    l.attrs = L;
    l.viewTransitionClass = E;
    l.defaultMarker = k;
    l.when = I;
    l.env = T;
    l.types = D;
    l.legacyMerge = x;
}, 98);