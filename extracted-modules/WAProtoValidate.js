__d("WAProtoValidate", [
    "WAHasProperty",
    "WALogger",
    "WAProtoCompile",
    "WAProtoConst"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = Number.MAX_SAFE_INTEGER;
    function p(e, t) {
        const n = f(e, t);
        if (n) {
            n.reverse();
            const r = new TypeError(`Message missing required value ${n.join(".")}`);
            r.stack;
            throw r;
        }
    }
    function _(e, t) {
        p(e, t);
        const n = v(t, e);
        if (n) {
            n.path.reverse();
            const r = new TypeError(`Invalid value at ${n.path.join(".")}: ${n.error}`);
            r.stack;
            throw r;
        }
    }
    function f(e, t) {
        const n = o("WAProtoCompile").compileSpec(e);
        const { meta: a, names: i } = n;
        for(var l = n.types, s = void 0, u = 0; u < l.length && !s; u++){
            const c = l[u];
            const d = i[u];
            const m = r("WAHasProperty")(t, d) ? t[d] : void 0;
            if (c & o("WAProtoConst").FLAGS.REQUIRED && m == null) {
                s = [
                    d
                ];
            } else if ((c & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.MESSAGE && c & o("WAProtoConst").FLAGS.REPEATED && m != null) {
                const p = a[u];
                let _ = void 0;
                for(_ = 0; _ < m.length && !s; _++){
                    s = f(p, m[_]);
                }
                if (s) {
                    s.push(`${d}[${_}]`);
                }
            } else {
                if ((c & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.MESSAGE && m != null) {
                    s = f(a[u], m);
                    if (s) {
                        s.push(d);
                    }
                }
            }
        }
        return s;
    }
    function g(t, n, r) {
        if (typeof t === "string") {
            if (/^-?0x[0-9a-f]{16}$/i.test(t)) {
                return false;
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                '"',
                '" is not a valid long'
            ])), C(t)).color("red");
            return {
                path: [],
                error: "value must be a hex string of the form '0x123...' or '-0x123...' where the tail is always 16 characters long"
            };
        }
        return h(t, n, r);
    }
    function h(e, t, n) {
        if (typeof e !== "number" || e !== e || Math.floor(e) !== e) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                '"',
                '" is not a valid int'
            ])), C(e)).color("red");
            return {
                path: [],
                error: "value must be an int"
            };
        }
        if (e < t || e >= n) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                '"',
                '" is out of range'
            ])), C(e)).color("red");
            return {
                path: [],
                error: "value is out of range"
            };
        }
        return false;
    }
    function y(e, t, n) {
        if (!e) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                '"',
                '" is not ',
                ""
            ])), C(n), t).color("red");
            return {
                path: [],
                error: "value is invalid"
            };
        }
    }
    function C(e) {
        if (typeof e === "string") {
            return `"${e}"`;
        }
        if (Array.isArray(e)) {
            return `[${e.join(", ")}]`;
        }
        return `${e}`;
    }
    var b = [
        void 0,
        function(e) {
            return h(e, -2147483648, 2147483648);
        },
        function(e) {
            return g(e, -m, m + 1);
        },
        function(e) {
            return h(e, 0, 4294967296);
        },
        function(e) {
            return g(e, 0, m + 1);
        },
        function(e) {
            return h(e, -2147483648, 2147483648);
        },
        function(e) {
            return g(e, -m, m + 1);
        },
        function(e) {
            return y(typeof e === "boolean", "boolean", e);
        },
        function(e, t) {
            return y(typeof e === "number" && (t[e] || t.cast(e) !== void 0), "in enum", e);
        },
        function(e) {
            return g(e, 0, m + 1);
        },
        function(e) {
            return g(e, -m, m + 1);
        },
        function(e) {
            return y(typeof e === "number", "number", e);
        },
        function(e) {
            return y(typeof e === "string", "string", e);
        },
        function(e) {
            return y(e instanceof ArrayBuffer || e instanceof Uint8Array, "ArrayBuffer or Uint8Array", e);
        },
        v,
        function(e) {
            return h(e, 0, 4294967296);
        },
        function(e) {
            return h(e, -2147483648, 2147483648);
        },
        function(e) {
            return y(typeof e === "number", "number", e);
        }
    ];
    function v(e, t) {
        const n = o("WAProtoCompile").compileSpec(t);
        const { fields: r, fieldToOneof: a, meta: i } = n;
        let f;
        for(var l = n.names, s = n.oneofToFields, u = n.reservedFields, c = n.reservedTags, m = n.types, p = void 0, _ = function() {
            const t = l[g];
            const n = m[g];
            const _ = e[t];
            const f = n & o("WAProtoConst").TYPE_MASK;
            const h = b[f];
            const y = (n & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.MAP;
            if (h === void 0 && !y) {
                const v = new Error(`Can not find the validator for type ${f}`);
                v.stack;
                throw v;
            }
            if (n & (o("WAProtoConst").FLAGS.PACKED | o("WAProtoConst").FLAGS.REPEATED) && _ != null) {
                if (!Array.isArray(_)) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        '"',
                        '" is not an array'
                    ])), C(_)).color("red");
                    p = {
                        path: [
                            t
                        ],
                        error: "repeated field must be array"
                    };
                } else {
                    const S = i[g];
                    for(let R = 0; R < _.length && !p; R++){
                        p = h(_[R], S);
                        if (p) {
                            p.path.push(`${t}[${R}]`);
                        }
                    }
                }
            } else if (y && _ != null) {
                const L = i[g];
                const E = L[0];
                const k = L[1];
                const I = typeof k === "object" ? o("WAProtoConst").TYPES.MESSAGE : k;
                const T = b[E];
                const D = b[I];
                if (T === void 0 || D === void 0) {
                    const x = new Error(`Can not find the validator for Map with key type ${E}, value type ${I}`);
                    x.stack;
                    throw x;
                }
                for (const [P, N] of _){
                    p = T(P, E);
                    if (p) {
                        p.path.push(`${t}'s key [${P}]`);
                        return {
                            v: p
                        };
                    }
                    p = D(N, k);
                    if (p) {
                        p.path.push(`${t}[${P}]'s value`);
                        return {
                            v: p
                        };
                    }
                }
            } else if (_ != null) {
                p = h(_, i[g]);
                if (p) {
                    p.path.push(t);
                }
                const M = a[t];
                if (M) {
                    M.forEach((n)=>{
                        const r = s[n].filter((e)=>e !== t);
                        r.forEach((r)=>{
                            if (typeof e[r] !== "undefined") {
                                p = {
                                    path: [
                                        n
                                    ],
                                    error: `oneof '${n}' has fields '${t}' and '${r}' set`
                                };
                            }
                        });
                    });
                }
                if (c[r[g]]) {
                    p = {
                        path: [
                            t
                        ],
                        error: `tag ${r[g]} is reserved`
                    };
                }
                if (u[t]) {
                    p = {
                        path: [
                            t
                        ],
                        error: `field ${t} is reserved`
                    };
                }
            }
        }, g = 0; g < l.length && !p; g++){
            f = _();
            if (f) {
                return f.v;
            }
        }
        return p;
    }
    l.checkRequirements = p;
    l.checkValid = _;
}, 98);