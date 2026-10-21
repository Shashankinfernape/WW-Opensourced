__d("WAWebWaapiAnimate", [
    "Promise",
    "WAWebNoop",
    "WAWebUimUtils",
    "WAWebWaapiAnimateEasing",
    "WAWebWaapiAnimateKeyframes",
    "WAWebWaapiAnimateMerge",
    "WAWebWaapiAnimateOptions",
    "WAWebWaapiAnimatePresets",
    "WAWebWaapiAnimateScroll",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 400;
    const u = new Map;
    let c = false;
    const d = new WeakMap;
    const m = new WeakMap;
    const p = new WeakMap;
    const _ = new WeakMap;
    const f = new WeakMap;
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e) {
                const r = t;
                if (typeof r === "string") {
                    return x(e, r, n);
                }
                if (r != null && typeof r === "object" && !Array.isArray(r)) {
                    yield y(e, r, o("WAWebWaapiAnimateOptions").optionsObject(n));
                }
                return e;
            }
        });
        return h.apply(this, arguments);
    }
    function y(t, a, i) {
        const d = o("WAWebWaapiAnimateKeyframes").buildAnimationKeyframes(a);
        const { keyframes: m, staticStyles: p } = d;
        const _ = i.duration ?? s;
        const f = i.delay ?? 0;
        const g = i.stagger ?? 0;
        const h = o("WAWebWaapiAnimateEasing").resolveCssEasing(i.easing);
        const y = i.progress;
        const b = Y(t).map((e, t)=>{
            const n = f + t * g;
            return C(e, {
                keyframes: m,
                duration: _,
                delay: n,
                easing: h
            }, p, y, i.queue);
        });
        return (e || (e = n("Promise"))).all(b).then(r("WAWebNoop"));
    }
    function C(e, t, n, r, o) {
        return b(e, o, function() {
            return v(e, t, n, r);
        });
    }
    function b(t, r, o) {
        if (r === false) {
            return o();
        }
        const l = r ?? "";
        const s = _.get(t) ?? new Map;
        const u = s.get(l) ?? {
            generation: 0,
            tail: (e || (e = n("Promise"))).resolve()
        };
        const c = u.generation;
        const d = function() {
            if (u.generation === c) {
                return o();
            }
            return (e || (e = n("Promise"))).resolve();
        };
        const m = u.tail.then(d, d);
        u.tail = m;
        s.set(l, u);
        _.set(t, s);
        m.then(()=>{
            if (s.get(l) === u && u.tail === m) {
                s.delete(l);
                if (s.size === 0) {
                    _.delete(t);
                }
            }
        });
        return m;
    }
    function v(t, r, o, a) {
        return new (e || (e = n("Promise")))(function(e) {
            const i = u.get(t) ?? [];
            i.push({
                entry: r,
                staticStyles: o,
                progress: a,
                resolve: e
            });
            u.set(t, i);
            S();
        });
    }
    function S() {
        if (!c) {
            c = true;
            (e || (e = n("Promise"))).resolve().then(R);
        }
    }
    function R() {
        c = false;
        for (const e of Array.from(u.keys())){
            const t = u.get(e);
            u.delete(e);
            if (t != null && t.length > 0) {
                L(e, t);
            }
        }
    }
    function L(t, r) {
        for (const a of r){
            D(t, a.staticStyles);
        }
        const i = r.map(()=>[]);
        if (r.some((e)=>e.progress != null)) {
            o("WAWebWaapiAnimateScroll").cancelScrollTweens(t);
        }
        r.forEach((e, n)=>{
            const r = e.progress;
            if (r != null) {
                i[n].push(o("WAWebWaapiAnimateScroll").runProgressTween(t, e.entry.duration, e.entry.delay, r));
            }
        });
        const l = [];
        const s = [];
        r.forEach((e, t)=>{
            if (e.entry.keyframes.length > 0) {
                l.push(t);
                s.push(e.entry);
            }
        });
        for (const u of o("WAWebWaapiAnimateMerge").mergeNodeEntries(s)){
            const c = Q(u.keyframes);
            j(t, c);
            const d = t.animate(u.keyframes, {
                duration: u.duration,
                delay: u.delay,
                easing: u.easing,
                fill: "forwards"
            });
            V(t, d, c, u.keyframes);
            const m = E(t, d);
            for (const p of u.entryIndices){
                i[l[p]].push(m);
            }
        }
        r.forEach((t, r)=>{
            (e || (e = n("Promise"))).all(i[r]).then(t.resolve, t.resolve);
        });
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                yield t.finished;
                if (I(e, t, true)) {
                    G(e, t);
                }
            } catch (n) {
                r("WAWebNoop")(n);
                G(e, t);
            }
        });
        return k.apply(this, arguments);
    }
    function I(e, t, n = false) {
        try {
            t.commitStyles();
            if (n) {
                T(e, p.get(t));
            }
            t.cancel();
            return true;
        } catch (e) {
            r("WAWebNoop")(e);
            return false;
        }
    }
    function T(e, t) {
        if (!(t == null || !t.includes("translateZ(0px)"))) {
            const n = t.replace(/(?:^|\s)translateZ\(0px\)(?=\s|$)/g, "").trim();
            if (n === "") {
                e.style.removeProperty("transform");
            } else {
                e.style.transform = n;
            }
        }
    }
    function D(e, t) {
        for (const n of Object.keys(t)){
            const r = n.replace(/[A-Z]/g, (e)=>`-${e.toLowerCase()}`);
            e.style.setProperty(r, t[n]);
        }
    }
    function x(t, r, a) {
        if (r === "finish") {
            return B(t, a === true);
        }
        if (r === "stop") {
            return W(t, a === true);
        }
        if (r === "scroll") {
            return U(t, o("WAWebWaapiAnimateOptions").optionsObject(a));
        }
        if (o("WAWebWaapiAnimatePresets").isWaapiPreset(r)) {
            return $(t, r, o("WAWebWaapiAnimateOptions").optionsObject(a));
        }
        return (e || (e = n("Promise"))).resolve(t);
    }
    function $(t, r, o) {
        const a = {
            duration: o.duration,
            easing: o.easing
        };
        const i = Y(t);
        const l = i.map((e, t)=>b(e, o.queue, function() {
                return P(e, r, a, o, t, i.length);
            }));
        return (e || (e = n("Promise"))).all(l).then(()=>t);
    }
    function P(t, r, a, i, l, s) {
        if (r === "slideUp" || r === "slideDown") {
            j(t, N);
        }
        const c = o("WAWebWaapiAnimatePresets").buildPreset(r, t, a);
        if (c == null) {
            return (e || (e = n("Promise"))).resolve();
        }
        D(t, c.staticStyles);
        const d = [
            {
                keyframes: c.keyframes,
                easing: c.easing
            }
        ].concat(c.additionalAnimations ?? []);
        const m = new Set;
        for (const p of d){
            for (const _ of Q(p.keyframes)){
                m.add(_);
            }
        }
        if (r !== "slideUp" && r !== "slideDown") {
            j(t, m);
        }
        const f = d.map((e)=>{
            const o = t.animate(e.keyframes, {
                duration: M(c.duration, i.drag === true, l, s),
                delay: (i.delay ?? 0) + l * (i.stagger ?? 0),
                easing: e.easing,
                fill: "forwards"
            });
            V(t, o, Q(e.keyframes), e.keyframes);
            return o;
        });
        return w(t, f, c.onComplete);
    }
    var N = new Set([
        "height",
        "marginTop",
        "marginBottom",
        "paddingTop",
        "paddingBottom"
    ]);
    function M(e, t, n, r) {
        if (!t || r === 0) {
            return e;
        }
        return Math.max(e * ((n + 1) / r), e * 0.75, 200);
    }
    function w(e, t, n) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, o) {
            const a = o == null ? null : {
                completed: false,
                onComplete: function(n) {
                    return o(t, n);
                }
            };
            if (a != null) {
                for (const i of r){
                    f.set(i, a);
                }
            }
            const l = yield (e || (e = n("Promise"))).all(r.map((e)=>F(t, e, o != null)));
            if (a != null && !a.completed) {
                a.completed = true;
                a.onComplete(l.every(Boolean));
            }
        });
        return A.apply(this, arguments);
    }
    function F(e, t, n) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            try {
                yield t.finished;
                if (n) {
                    t.cancel();
                    G(e, t);
                } else if (I(e, t, true)) {
                    G(e, t);
                }
                return true;
            } catch (n) {
                r("WAWebNoop")(n);
                G(e, t);
                return false;
            }
        });
        return O.apply(this, arguments);
    }
    function B(t, a) {
        if (a) {
            q(t);
        }
        R();
        z(t, function(e, t) {
            return t.finish();
        });
        for (const i of Y(t)){
            o("WAWebWaapiAnimateScroll").cancelScrollTweens(i);
        }
        return new (e || (e = n("Promise")))(r("WAWebNoop"));
    }
    function W(t, r) {
        if (r) {
            q(t);
        }
        R();
        z(t, function(e, t) {
            K(t);
            I(e, t);
        });
        for (const a of Y(t)){
            o("WAWebWaapiAnimateScroll").cancelScrollTweens(a);
        }
        return (e || (e = n("Promise"))).resolve(t);
    }
    function q(e) {
        for (const t of Y(e)){
            const n = _.get(t);
            const r = n?.get("");
            if (r != null) {
                r.generation += 1;
                if (n != null) {
                    n.delete("");
                }
                if (n?.size === 0) {
                    _.delete(t);
                }
            }
        }
    }
    function U(t, r) {
        const c = Array.isArray(t) ? t[0] : t;
        const d = r.container ?? document.scrollingElement;
        if (c == null || !o("WAWebUimUtils").isCrossWindowHTMLElement(d)) {
            return (e || (e = n("Promise"))).resolve(t);
        }
        const m = r.axis ?? "y";
        const p = o("WAWebWaapiAnimateScroll").computeScrollTarget({
            axis: m,
            container: d,
            node: c,
            offset: r.offset ?? 0
        });
        return o("WAWebWaapiAnimateScroll").tweenScroll(c, d, m, p, r.duration ?? s, o("WAWebWaapiAnimateEasing").resolveEasingFn(r.easing)).then(()=>t);
    }
    function V(e, t, n, r) {
        const a = d.get(e) ?? new Set;
        a.add(t);
        d.set(e, a);
        m.set(t, n);
        const i = H(r[r.length - 1], "transform");
        if (typeof i === "string") {
            p.set(t, i);
        }
    }
    function H(e, t) {
        if (e == null) {
            return null;
        }
        const r = Object.getOwnPropertyDescriptor(e, t)?.value;
        if (typeof r === "string") {
            return r;
        }
        return null;
    }
    function G(e, t) {
        const n = d.get(e);
        if (n != null) {
            n.delete(t);
            if (n.size === 0) {
                d.delete(e);
            }
        }
    }
    function z(e, t) {
        for (const n of Y(e)){
            const o = d.get(n);
            if (o != null) {
                for (const a of Array.from(o)){
                    try {
                        t(n, a);
                    } catch (e) {
                        r("WAWebNoop")(e);
                    }
                }
            }
        }
    }
    function j(e, t) {
        const n = d.get(e);
        if (n != null) {
            for (const r of Array.from(n)){
                const o = m.get(r);
                if (o == null || X(o, t)) {
                    K(r);
                    I(e, r);
                }
            }
        }
    }
    function K(e) {
        const t = f.get(e);
        if (!(t == null || t.completed)) {
            t.completed = true;
            t.onComplete(false);
        }
    }
    function Q(e) {
        const t = new Set;
        for (const n of e){
            for (const r of Object.keys(n)){
                if (r !== "offset" && r !== "easing" && r !== "composite") {
                    t.add(r);
                }
            }
        }
        return t;
    }
    function X(e, t) {
        const n = e.size <= t.size ? [
            e,
            t
        ] : [
            t,
            e
        ];
        const r = n[0];
        const o = n[1];
        for (const a of r){
            if (o.has(a)) {
                return true;
            }
        }
        return false;
    }
    function Y(e) {
        if (Array.isArray(e)) {
            return e;
        }
        return [
            e
        ];
    }
    l.default = g;
}, 98);