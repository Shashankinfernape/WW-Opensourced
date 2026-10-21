__d("ReactStrictDomWeb", [
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    const s = [
        "for",
        "style"
    ];
    let u;
    let c;
    const jsx = (c || (c = o("react"))).jsx;
    const m = {};
    function p(e) {
        if (!(process.env.NODE_ENV !== "test" && m[e])) {
            m[e] = true;
            `${e}`;
        }
    }
    const _ = new Set([
        "alt",
        "aria-activedescendant",
        "aria-atomic",
        "aria-autocomplete",
        "aria-busy",
        "aria-checked",
        "aria-colcount",
        "aria-colindex",
        "aria-colindextext",
        "aria-colspan",
        "aria-controls",
        "aria-current",
        "aria-describedby",
        "aria-details",
        "aria-disabled",
        "aria-errormessage",
        "aria-expanded",
        "aria-flowto",
        "aria-haspopup",
        "aria-hidden",
        "aria-invalid",
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-level",
        "aria-live",
        "aria-modal",
        "aria-multiline",
        "aria-multiselectable",
        "aria-orientation",
        "aria-owns",
        "aria-placeholder",
        "aria-posinset",
        "aria-pressed",
        "aria-readonly",
        "aria-required",
        "aria-roledescription",
        "aria-rowcount",
        "aria-rowindex",
        "aria-rowindextext",
        "aria-rowspan",
        "aria-selected",
        "aria-setsize",
        "aria-sort",
        "aria-valuemax",
        "aria-valuemin",
        "aria-valuenow",
        "aria-valuetext",
        "autoCapitalize",
        "autoComplete",
        "autoFocus",
        "checked",
        "children",
        "crossOrigin",
        "decoding",
        "defaultChecked",
        "defaultValue",
        "dir",
        "disabled",
        "download",
        "draggable",
        "elementTiming",
        "enterKeyHint",
        "fetchPriority",
        "for",
        "height",
        "hidden",
        "href",
        "id",
        "inert",
        "inputMode",
        "label",
        "lang",
        "loading",
        "max",
        "maxLength",
        "min",
        "minLength",
        "multiple",
        "name",
        "onAuxClick",
        "onBeforeInput",
        "onBlur",
        "onChange",
        "onClick",
        "onContextMenu",
        "onCopy",
        "onCut",
        "onError",
        "onFocus",
        "onFocusIn",
        "onFocusOut",
        "onFullscreenChange",
        "onFullscreenError",
        "onGotPointerCapture",
        "onInput",
        "onInvalid",
        "onKeyDown",
        "onKeyUp",
        "onLoad",
        "onLostPointerCapture",
        "onPaste",
        "onPointerCancel",
        "onPointerDown",
        "onPointerEnter",
        "onPointerLeave",
        "onPointerMove",
        "onPointerOut",
        "onPointerOver",
        "onPointerUp",
        "onScroll",
        "onSelect",
        "onSelectionChange",
        "onWheel",
        "placeholder",
        "readOnly",
        "referrerPolicy",
        "rel",
        "required",
        "role",
        "rows",
        "selected",
        "spellCheck",
        "src",
        "srcSet",
        "step",
        "style",
        "tabIndex",
        "target",
        "type",
        "value",
        "width",
        "suppressHydrationWarning",
        "onMouseDown",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseOut",
        "onMouseOver",
        "onMouseUp",
        "onTouchCancel",
        "onTouchEnd",
        "onTouchMove",
        "onTouchStart"
    ]);
    function f(e) {
        return _.has(e) || e.indexOf("data-") > -1;
    }
    const g = {};
    Object.defineProperty(g, "__esModule", {
        value: true
    });
    let h = g.styleq = undefined;
    const y = new WeakMap;
    const C = "$$css";
    function b(e) {
        let t;
        let n;
        let r;
        if (e != null) {
            t = e.disableCache === true;
            n = e.disableMix === true;
            r = e.transform;
        }
        return function(...args) {
            const e = [];
            let o = "";
            let a = null;
            let i = "";
            let l = t ? null : y;
            const s = new Array(args.length);
            for(let u = 0; u < args.length; u++){
                s[u] = args[u];
            }
            while(s.length > 0){
                const c = s.pop();
                if (!(c == null || c === false)) {
                    if (Array.isArray(c)) {
                        for(let d = 0; d < c.length; d++){
                            s.push(c[d]);
                        }
                        continue;
                    }
                    const m = r != null ? r(c) : c;
                    if (m.$$css != null) {
                        let p = "";
                        if (l != null && l.has(m)) {
                            const _ = l.get(m);
                            if (_ != null) {
                                p = _[0];
                                i = _[2];
                                e.push(..._[1]);
                                l = _[3];
                            }
                        } else {
                            const f = [];
                            for(const g in m){
                                const h = m[g];
                                if (g === C) {
                                    const b = m[g];
                                    if (b !== true) {
                                        i = i ? `${b}; ${i}` : b;
                                    }
                                    continue;
                                }
                                if (typeof h === "string" || h === null) {
                                    if (!e.includes(g)) {
                                        e.push(g);
                                        if (l != null) {
                                            f.push(g);
                                        }
                                        if (typeof h === "string") {
                                            p += p ? ` ${h}` : h;
                                        }
                                    }
                                } else {
                                    `styleq: ${g} typeof ${String(h)} is not "string" or "null".`;
                                }
                            }
                            if (l != null) {
                                const v = new WeakMap;
                                l.set(m, [
                                    p,
                                    f,
                                    i,
                                    v
                                ]);
                                l = v;
                            }
                        }
                        if (p) {
                            o = o ? `${p} ${o}` : p;
                        }
                    } else if (n) {
                        if (a == null) {
                            a = {};
                        }
                        a = {
                            ...m,
                            ...a
                        };
                    } else {
                        let S = null;
                        for(const R in m){
                            const L = m[R];
                            if (L !== undefined) {
                                if (!e.includes(R)) {
                                    if (L != null) {
                                        if (a == null) {
                                            a = {};
                                        }
                                        if (S == null) {
                                            S = {};
                                        }
                                        S[R] = L;
                                    }
                                    e.push(R);
                                    l = null;
                                }
                            }
                        }
                        if (S != null) {
                            a = Object.assign(S, a);
                        }
                    }
                }
            }
            const E = [
                o,
                a,
                i
            ];
            return E;
        };
    }
    const v = h = g.styleq = b();
    v.factory = b;
    const S = h.factory({
        disableMix: true
    });
    function R(...t) {
        const r = S(t);
        const o = r[0];
        const a = r[1];
        const i = r[2];
        const l = {};
        if (o != null && o !== "") {
            l.className = o;
        }
        if (a != null) {
            l.style = a;
        }
        if (i != null && i !== "") {
            const s = i.split(";");
            const u = {};
            for (const c of s){
                const d = c.trim();
                const m = d.split(":");
                const p = m[0];
                const _ = m[1];
                if (_ != null) {
                    u[p] = u[p] != null ? `${u[p]},${_}` : _;
                }
            }
            l["data-style-src"] = Object.keys(u).map((e)=>`${e}:${u[e]}`).join("; ");
        }
        return l;
    }
    function L(e) {
        Object.keys(e).forEach((t)=>{
            const n = f(t);
            if (!n) {
                p(`invalid prop "${t}"`);
                delete e[t];
            }
        });
    }
    function E(t, n) {
        const r = {
            $$css: true,
            "debug::name": `html-${t}`
        };
        function o(o) {
            const o_ref = o.ref;
            const i = babelHelpers.objectWithoutPropertiesLoose(o, e);
            const { for: _for, style } = i;
            const c = babelHelpers.objectWithoutPropertiesLoose(i, s);
            const m = c;
            L(m);
            if (_for != null) {
                m.htmlFor = _for;
            }
            if (i.role != null) {
                m.role = i.role === "none" ? "presentation" : i.role;
            }
            if (t === "button") {
                m.type = m.type ? m.type : "button";
            } else if (t === "input" || t === "textarea") {
                m.dir = m.dir ? m.dir : "auto";
            }
            const p = R([
                r,
                n,
                style
            ]);
            const _ = jsx(t, babelHelpers.extends({}, m, p, {
                ref: o_ref
            }));
            return _;
        }
        o.displayName = `html.${t}`;
        return o;
    }
    const k = {
        block: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        inline: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            textDecoration: "x1hl2dhg",
            textAlign: "x16tdsg8",
            wordWrap: "x1vvkbs",
            $$css: true
        },
        inlineblock: {
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        button: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            $$css: true
        },
        codePre: {
            fontFamily: "x1lxnp44",
            fontSize: "xrv4cvt",
            overflowX: "xw2csxc",
            overflowY: "x1odjw0f",
            $$css: true
        },
        heading: {
            fontSize: "xngnso2",
            wordWrap: "x1vvkbs",
            $$css: true
        },
        hr: {
            backgroundColor: "x42x0ya",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            boxSizing: "x9f619",
            height: "xjm9jq1",
            $$css: true
        },
        img: {
            aspectRatio: "xuw900x",
            height: "xt7dq6l",
            maxWidth: "x193iq5w",
            $$css: true
        },
        input: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            $$css: true
        },
        list: {
            listStyleType: "x3ct3a4",
            listStylePosition: null,
            listStyleImage: null,
            $$css: true
        },
        strong: {
            fontWeight: "x117nqv4",
            $$css: true
        },
        textarea: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            resize: "x288g5",
            $$css: true
        }
    };
    const { inline, block, block: block_1, inline: inline_1, inline: inline_2, inline: inline_3, block: block_2 } = k;
    const M = null;
    const w = [
        k.inlineblock,
        k.button
    ];
    const A = [
        k.inline,
        k.codePre
    ];
    const F = null;
    const { block: block_3, inline: inline_4, block: block_4, block: block_5, block: block_6 } = k;
    const V = [
        k.block,
        k.heading
    ];
    const k_block = k.block;
    const G = [
        k.block,
        k.hr
    ];
    const { inline: inline_5, img } = k;
    const K = [
        k.inlineblock,
        k.input
    ];
    const Q = null;
    const X = null;
    const { inline: inline_6, block: block_7, block: block_8, inline: inline_7, block: block_9 } = k;
    const ne = [
        k.list,
        k.block
    ];
    const re = null;
    const oe = null;
    const k_block_1 = k.block;
    const ie = [
        k.block,
        k.codePre
    ];
    const le = null;
    const { block: block_10, inlineblock, inline: inline_8 } = k;
    const de = [
        k.inline,
        k.strong
    ];
    const { inline: inline_9, inline: inline_10 } = k;
    const _e = [
        k.inlineblock,
        k.textarea
    ];
    const fe = null;
    const ge = [
        k.list,
        k.block
    ];
    const he = {
        a: inline,
        article: block,
        aside: block_1,
        b: inline_1,
        bdi: inline_2,
        bdo: inline_3,
        blockquote: block_2,
        br: M,
        button: w,
        code: A,
        del: F,
        div: block_3,
        em: inline_4,
        fieldset: block_4,
        footer: block_5,
        form: block_6,
        h1: V,
        h2: V,
        h3: V,
        h4: V,
        h5: V,
        h6: V,
        header: k_block,
        hr: G,
        i: inline_5,
        img,
        input: K,
        ins: Q,
        kbd: X,
        label: inline_6,
        li: block_7,
        main: block_8,
        mark: inline_7,
        nav: block_9,
        ol: ne,
        optgroup: re,
        option: oe,
        p: k_block_1,
        pre: ie,
        s: le,
        section: block_10,
        select: inlineblock,
        span: inline_8,
        strong: de,
        sub: inline_9,
        sup: inline_10,
        textarea: _e,
        u: fe,
        ul: ge
    };
    const a_1 = E("a", he.a);
    const article = E("article", he.article);
    const aside = E("aside", he.aside);
    const b_1 = E("b", he.b);
    const bdi = E("bdi", he.bdi);
    const bdo = E("bdo", he.bdo);
    const blockquote = E("blockquote", he.blockquote);
    const Ee = E("br", he.br);
    const ke = E("button", he.button);
    const Ie = E("code", he.code);
    const Te = E("del", he.del);
    const div = E("div", he.div);
    const em = E("em", he.em);
    const fieldset = E("fieldset", he.fieldset);
    const footer = E("footer", he.footer);
    const form = E("form", he.form);
    const h1 = E("h1", he.h1);
    const h2 = E("h2", he.h2);
    const h3 = E("h3", he.h3);
    const h4 = E("h4", he.h4);
    const h5 = E("h5", he.h5);
    const h6 = E("h6", he.h6);
    const header = E("header", he.header);
    const qe = E("hr", he.hr);
    const i_1 = E("i", he.i);
    const img_1 = E("img", he.img);
    const He = E("input", he.input);
    const Ge = E("ins", he.ins);
    const ze = E("kbd", he.kbd);
    const label = E("label", he.label);
    const li = E("li", he.li);
    const main = E("main", he.main);
    const mark = E("mark", he.mark);
    const nav = E("nav", he.nav);
    const Je = E("ol", he.ol);
    const Ze = E("optgroup", he.optgroup);
    const et = E("option", he.option);
    const p_1 = E("p", he.p);
    const nt = E("pre", he.pre);
    const rt = E("s", he.s);
    const section = E("section", he.section);
    const select = E("select", he.select);
    const span = E("span", he.span);
    const lt = E("strong", he.strong);
    const sub = E("sub", he.sub);
    const sup = E("sup", he.sup);
    const ct = E("textarea", he.textarea);
    const dt = E("u", he.u);
    const mt = E("ul", he.ul);
    const pt = Object.freeze({
        __proto__: null,
        a: a_1,
        article,
        aside,
        b: b_1,
        bdi,
        bdo,
        blockquote,
        br: Ee,
        button: ke,
        code: Ie,
        del: Te,
        div,
        em,
        fieldset,
        footer,
        form,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        header,
        hr: qe,
        i: i_1,
        img: img_1,
        input: He,
        ins: Ge,
        kbd: ze,
        label,
        li,
        main,
        mark,
        nav,
        ol: Je,
        optgroup: Ze,
        option: et,
        p: p_1,
        pre: nt,
        s: rt,
        section,
        select,
        span,
        strong: lt,
        sub,
        sup,
        textarea: ct,
        u: dt,
        ul: mt
    });
    l.css = u || (u = r("stylex"));
    l.html = pt;
}, 98);