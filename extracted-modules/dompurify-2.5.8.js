__d("dompurify-2.5.8", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        function e(t) {
            "@babel/helpers - typeof";
            e = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
                return typeof e;
            } : function(e) {
                if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                    return "symbol";
                }
                return typeof e;
            };
            return e(t);
        }
        function t(e, n) {
            t = Object.setPrototypeOf || function(t, n) {
                t.__proto__ = n;
                return t;
            };
            return t(e, n);
        }
        function n() {
            if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        }
        function r(e, o, a) {
            if (n()) {
                r = Reflect.construct;
            } else {
                r = function(n, r, o) {
                    const e = [
                        null
                    ];
                    e.push(...r);
                    const a = Function.bind.apply(n, e);
                    const i = new a;
                    if (o) {
                        t(i, o.prototype);
                    }
                    return i;
                };
            }
            return r(...arguments);
        }
        function o(e) {
            return a(e) || i(e) || s(e) || c();
        }
        function a(e) {
            if (Array.isArray(e)) {
                return u(e);
            }
        }
        function i(e) {
            if (typeof Symbol !== "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
                return Array.from(e);
            }
        }
        function s(e, t) {
            if (e) {
                if (typeof e === "string") {
                    return u(e, t);
                }
                let n = Object.prototype.toString.call(e).slice(8, -1);
                if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                }
                if (n === "Map" || n === "Set") {
                    return Array.from(e);
                }
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return u(e, t);
                }
            }
        }
        function u(e, t) {
            if (t == null || t > e.length) {
                t = e.length;
            }
            for(var n = 0, r = new Array(t); n < t; n++){
                r[n] = e[n];
            }
            return r;
        }
        function c() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        let Object_freeze = Object.freeze;
        let Object_seal = Object.seal;
        const C = typeof Reflect !== "undefined" && Reflect;
        let C_apply = C.apply;
        let C_construct = C.construct;
        if (!C_apply) {
            C_apply = function(t, n, r) {
                return t.apply(n, r);
            };
        }
        if (!Object_freeze) {
            Object_freeze = function(t) {
                return t;
            };
        }
        if (!Object_seal) {
            Object_seal = function(t) {
                return t;
            };
        }
        if (!C_construct) {
            C_construct = function(t, n) {
                return r(t, o(n));
            };
        }
        const S = N(Array.prototype.forEach);
        const R = N(Array.prototype.pop);
        const L = N(Array.prototype.push);
        const E = N(String.prototype.toLowerCase);
        const k = N(String.prototype.toString);
        const I = N(String.prototype.match);
        const T = N(String.prototype.replace);
        const D = N(String.prototype.indexOf);
        const x = N(String.prototype.trim);
        const $ = N(RegExp.prototype.test);
        const P = M(TypeError);
        function N(e) {
            return function(t, ...r) {
                return C_apply(e, t, r);
            };
        }
        function M(TypeError) {
            return function(...n) {
                return C_construct(TypeError, n);
            };
        }
        function w(e, t, n) {
            n = n ?? E;
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(e, null);
            }
            for(let o = t.length; o--;){
                let a = t[o];
                if (typeof a === "string") {
                    const i = n(a);
                    if (i !== a) {
                        if (!Object.isFrozen(t)) {
                            t[o] = i;
                        }
                        a = i;
                    }
                }
                e[a] = true;
            }
            return e;
        }
        function A(e) {
            const t = Object.create(null);
            let n;
            for(n in e){
                if (C_apply(Object.hasOwnProperty, e, [
                    n
                ]) === true) {
                    t[n] = e[n];
                }
            }
            return t;
        }
        function F(e, t) {
            while(e !== null){
                const n = Object.getOwnPropertyDescriptor(e, t);
                if (n) {
                    if (n.get) {
                        return N(n.get);
                    }
                    if (typeof n.value === "function") {
                        return N(n.value);
                    }
                }
                e = Object.getPrototypeOf(e);
            }
            function r(e) {
                return null;
            }
            return r;
        }
        const O = Object_freeze([
            "a",
            "abbr",
            "acronym",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "bdi",
            "bdo",
            "big",
            "blink",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "center",
            "cite",
            "code",
            "col",
            "colgroup",
            "content",
            "data",
            "datalist",
            "dd",
            "decorator",
            "del",
            "details",
            "dfn",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "element",
            "em",
            "fieldset",
            "figcaption",
            "figure",
            "font",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "main",
            "map",
            "mark",
            "marquee",
            "menu",
            "menuitem",
            "meter",
            "nav",
            "nobr",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "section",
            "select",
            "shadow",
            "small",
            "source",
            "spacer",
            "span",
            "strike",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "tr",
            "track",
            "tt",
            "u",
            "ul",
            "var",
            "video",
            "wbr"
        ]);
        const B = Object_freeze([
            "svg",
            "a",
            "altglyph",
            "altglyphdef",
            "altglyphitem",
            "animatecolor",
            "animatemotion",
            "animatetransform",
            "circle",
            "clippath",
            "defs",
            "desc",
            "ellipse",
            "filter",
            "font",
            "g",
            "glyph",
            "glyphref",
            "hkern",
            "image",
            "line",
            "lineargradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialgradient",
            "rect",
            "stop",
            "style",
            "switch",
            "symbol",
            "text",
            "textpath",
            "title",
            "tref",
            "tspan",
            "view",
            "vkern"
        ]);
        const W = Object_freeze([
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence"
        ]);
        const q = Object_freeze([
            "animate",
            "color-profile",
            "cursor",
            "discard",
            "fedropshadow",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "foreignobject",
            "hatch",
            "hatchpath",
            "mesh",
            "meshgradient",
            "meshpatch",
            "meshrow",
            "missing-glyph",
            "script",
            "set",
            "solidcolor",
            "unknown",
            "use"
        ]);
        const U = Object_freeze([
            "math",
            "menclose",
            "merror",
            "mfenced",
            "mfrac",
            "mglyph",
            "mi",
            "mlabeledtr",
            "mmultiscripts",
            "mn",
            "mo",
            "mover",
            "mpadded",
            "mphantom",
            "mroot",
            "mrow",
            "ms",
            "mspace",
            "msqrt",
            "mstyle",
            "msub",
            "msup",
            "msubsup",
            "mtable",
            "mtd",
            "mtext",
            "mtr",
            "munder",
            "munderover"
        ]);
        const V = Object_freeze([
            "maction",
            "maligngroup",
            "malignmark",
            "mlongdiv",
            "mscarries",
            "mscarry",
            "msgroup",
            "mstack",
            "msline",
            "msrow",
            "semantics",
            "annotation",
            "annotation-xml",
            "mprescripts",
            "none"
        ]);
        const H = Object_freeze([
            "#text"
        ]);
        const G = Object_freeze([
            "accept",
            "action",
            "align",
            "alt",
            "autocapitalize",
            "autocomplete",
            "autopictureinpicture",
            "autoplay",
            "background",
            "bgcolor",
            "border",
            "capture",
            "cellpadding",
            "cellspacing",
            "checked",
            "cite",
            "class",
            "clear",
            "color",
            "cols",
            "colspan",
            "controls",
            "controlslist",
            "coords",
            "crossorigin",
            "datetime",
            "decoding",
            "default",
            "dir",
            "disabled",
            "disablepictureinpicture",
            "disableremoteplayback",
            "download",
            "draggable",
            "enctype",
            "enterkeyhint",
            "face",
            "for",
            "headers",
            "height",
            "hidden",
            "high",
            "href",
            "hreflang",
            "id",
            "inputmode",
            "integrity",
            "ismap",
            "kind",
            "label",
            "lang",
            "list",
            "loading",
            "loop",
            "low",
            "max",
            "maxlength",
            "media",
            "method",
            "min",
            "minlength",
            "multiple",
            "muted",
            "name",
            "nonce",
            "noshade",
            "novalidate",
            "nowrap",
            "open",
            "optimum",
            "pattern",
            "placeholder",
            "playsinline",
            "poster",
            "preload",
            "pubdate",
            "radiogroup",
            "readonly",
            "rel",
            "required",
            "rev",
            "reversed",
            "role",
            "rows",
            "rowspan",
            "spellcheck",
            "scope",
            "selected",
            "shape",
            "size",
            "sizes",
            "span",
            "srclang",
            "start",
            "src",
            "srcset",
            "step",
            "style",
            "summary",
            "tabindex",
            "title",
            "translate",
            "type",
            "usemap",
            "valign",
            "value",
            "width",
            "xmlns",
            "slot"
        ]);
        const z = Object_freeze([
            "accent-height",
            "accumulate",
            "additive",
            "alignment-baseline",
            "ascent",
            "attributename",
            "attributetype",
            "azimuth",
            "basefrequency",
            "baseline-shift",
            "begin",
            "bias",
            "by",
            "class",
            "clip",
            "clippathunits",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "cx",
            "cy",
            "d",
            "dx",
            "dy",
            "diffuseconstant",
            "direction",
            "display",
            "divisor",
            "dur",
            "edgemode",
            "elevation",
            "end",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "filterunits",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyph-name",
            "glyphref",
            "gradientunits",
            "gradienttransform",
            "height",
            "href",
            "id",
            "image-rendering",
            "in",
            "in2",
            "k",
            "k1",
            "k2",
            "k3",
            "k4",
            "kerning",
            "keypoints",
            "keysplines",
            "keytimes",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "kernelmatrix",
            "kernelunitlength",
            "lighting-color",
            "local",
            "marker-end",
            "marker-mid",
            "marker-start",
            "markerheight",
            "markerunits",
            "markerwidth",
            "maskcontentunits",
            "maskunits",
            "max",
            "mask",
            "media",
            "method",
            "mode",
            "min",
            "name",
            "numoctaves",
            "offset",
            "operator",
            "opacity",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "paint-order",
            "path",
            "pathlength",
            "patterncontentunits",
            "patterntransform",
            "patternunits",
            "points",
            "preservealpha",
            "preserveaspectratio",
            "primitiveunits",
            "r",
            "rx",
            "ry",
            "radius",
            "refx",
            "refy",
            "repeatcount",
            "repeatdur",
            "restart",
            "result",
            "rotate",
            "scale",
            "seed",
            "shape-rendering",
            "specularconstant",
            "specularexponent",
            "spreadmethod",
            "startoffset",
            "stddeviation",
            "stitchtiles",
            "stop-color",
            "stop-opacity",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke",
            "stroke-width",
            "style",
            "surfacescale",
            "systemlanguage",
            "tabindex",
            "targetx",
            "targety",
            "transform",
            "transform-origin",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "type",
            "u1",
            "u2",
            "unicode",
            "values",
            "viewbox",
            "visibility",
            "version",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "width",
            "word-spacing",
            "wrap",
            "writing-mode",
            "xchannelselector",
            "ychannelselector",
            "x",
            "x1",
            "x2",
            "xmlns",
            "y",
            "y1",
            "y2",
            "z",
            "zoomandpan"
        ]);
        const j = Object_freeze([
            "accent",
            "accentunder",
            "align",
            "bevelled",
            "close",
            "columnsalign",
            "columnlines",
            "columnspan",
            "denomalign",
            "depth",
            "dir",
            "display",
            "displaystyle",
            "encoding",
            "fence",
            "frame",
            "height",
            "href",
            "id",
            "largeop",
            "length",
            "linethickness",
            "lspace",
            "lquote",
            "mathbackground",
            "mathcolor",
            "mathsize",
            "mathvariant",
            "maxsize",
            "minsize",
            "movablelimits",
            "notation",
            "numalign",
            "open",
            "rowalign",
            "rowlines",
            "rowspacing",
            "rowspan",
            "rspace",
            "rquote",
            "scriptlevel",
            "scriptminsize",
            "scriptsizemultiplier",
            "selection",
            "separator",
            "separators",
            "stretchy",
            "subscriptshift",
            "supscriptshift",
            "symmetric",
            "voffset",
            "width",
            "xmlns"
        ]);
        const K = Object_freeze([
            "xlink:href",
            "xml:id",
            "xlink:title",
            "xml:space",
            "xmlns:xlink"
        ]);
        const Q = Object_seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
        const X = Object_seal(/<%[\w\W]*|[\w\W]*%>/gm);
        const Y = Object_seal(/\${[\w\W]*}/gm);
        const J = Object_seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
        const Z = Object_seal(/^aria-[\-\w]+$/);
        const ee = Object_seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
        const te = Object_seal(/^(?:\w+script|data):/i);
        const ne = Object_seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
        const re = Object_seal(/^html$/i);
        const oe = Object_seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
        const ae = ()=>{
            if (typeof window === "undefined") {
                return null;
            }
            return window;
        };
        const ie = (trustedTypes, r)=>{
            if (e(trustedTypes) !== "object" || typeof trustedTypes.createPolicy !== "function") {
                return null;
            }
            let t = null;
            const o = "data-tt-policy-suffix";
            if (r.currentScript && r.currentScript.hasAttribute(o)) {
                t = r.currentScript.getAttribute(o);
            }
            const a = `dompurify${t ? `#${t}` : ""}`;
            try {
                return trustedTypes.createPolicy(a, {
                    createHTML: function(t) {
                        return t;
                    },
                    createScriptURL: function(t) {
                        return t;
                    }
                });
            } catch (e) {
                `${a}`;
                return null;
            }
        };
        function le(t = ae()) {
            const n = function(t) {
                return le(t);
            };
            n.version = "2.5.8";
            n.removed = [];
            if (!t || !t.document || t.document.nodeType !== 9) {
                n.isSupported = false;
                return n;
            }
            const t_document = t.document;
            let t_document_1 = t.document;
            const { DocumentFragment, HTMLTemplateElement, Node, Element, NodeFilter, NamedNodeMap } = t;
            const m = NamedNodeMap === undefined ? t.NamedNodeMap || t.MozNamedAttrMap : NamedNodeMap;
            const { HTMLFormElement, DOMParser, trustedTypes } = t;
            const Element_prototype = Element.prototype;
            const y = F(Element_prototype, "cloneNode");
            const C = F(Element_prototype, "nextSibling");
            const b = F(Element_prototype, "childNodes");
            const v = F(Element_prototype, "parentNode");
            if (typeof HTMLTemplateElement === "function") {
                const N = t_document_1.createElement("template");
                if (N.content && N.content.ownerDocument) {
                    t_document_1 = N.content.ownerDocument;
                }
            }
            const M = ie(trustedTypes, t_document);
            const se = M ? M.createHTML("") : "";
            const ue = t_document_1;
            const { implementation, createNodeIterator, createDocumentFragment, getElementsByTagName } = ue;
            const r_importNode = t_document.importNode;
            let fe = {};
            try {
                fe = A(t_document_1).documentMode ? t_document_1.documentMode : {};
            } catch (e) {}
            let ge = {};
            n.isSupported = typeof v === "function" && implementation && implementation.createHTMLDocument !== undefined && fe !== 9;
            const he = Q;
            const ye = X;
            const Ce = Y;
            const be = J;
            const ve = Z;
            const Se = te;
            const Re = ne;
            const Le = oe;
            let Ee = ee;
            let allowedTags = null;
            const Ie = w({}, [].concat(o(O), o(B), o(W), o(U), o(H)));
            let allowedAttributes = null;
            const De = w({}, [].concat(o(G), o(z), o(j), o(K)));
            let xe = Object.seal(Object.create(null, {
                tagNameCheck: {
                    writable: true,
                    configurable: false,
                    enumerable: true,
                    value: null
                },
                attributeNameCheck: {
                    writable: true,
                    configurable: false,
                    enumerable: true,
                    value: null
                },
                allowCustomizedBuiltInElements: {
                    writable: true,
                    configurable: false,
                    enumerable: true,
                    value: false
                }
            }));
            let $e = null;
            let Pe = null;
            let Ne = true;
            let Me = true;
            let we = false;
            let Ae = true;
            let Fe = false;
            let Oe = true;
            let Be = false;
            let We = false;
            let qe = false;
            let Ue = false;
            let Ve = false;
            let He = false;
            let Ge = true;
            let ze = false;
            const je = "user-content-";
            let Ke = true;
            let Qe = false;
            let Xe = {};
            let Ye = null;
            const Je = w({}, [
                "annotation-xml",
                "audio",
                "colgroup",
                "desc",
                "foreignobject",
                "head",
                "iframe",
                "math",
                "mi",
                "mn",
                "mo",
                "ms",
                "mtext",
                "noembed",
                "noframes",
                "noscript",
                "plaintext",
                "script",
                "style",
                "svg",
                "template",
                "thead",
                "title",
                "video",
                "xmp"
            ]);
            let Ze = null;
            const et = w({}, [
                "audio",
                "video",
                "img",
                "source",
                "image",
                "track"
            ]);
            let tt = null;
            const nt = w({}, [
                "alt",
                "class",
                "for",
                "id",
                "label",
                "name",
                "pattern",
                "placeholder",
                "role",
                "summary",
                "title",
                "value",
                "style",
                "xmlns"
            ]);
            const rt = "http://www.w3.org/1998/Math/MathML";
            const ot = "http://www.w3.org/2000/svg";
            const at = "http://www.w3.org/1999/xhtml";
            let namespaceURI = at;
            let lt = false;
            let st = null;
            const ut = w({}, [
                rt,
                ot,
                at
            ], k);
            let ct;
            const dt = [
                "application/xhtml+xml",
                "text/html"
            ];
            const mt = "text/html";
            let pt;
            let _t = null;
            const ft = t_document_1.createElement("form");
            const gt = (t)=>t instanceof RegExp || t instanceof Function;
            const ht = (n)=>{
                if (!(_t && _t === n)) {
                    if (!n || e(n) !== "object") {
                        n = {};
                    }
                    n = A(n);
                    ct = dt.indexOf(n.PARSER_MEDIA_TYPE) === -1 ? ct = mt : ct = n.PARSER_MEDIA_TYPE;
                    pt = ct === "application/xhtml+xml" ? k : E;
                    allowedTags = "ALLOWED_TAGS" in n ? w({}, n.ALLOWED_TAGS, pt) : Ie;
                    allowedAttributes = "ALLOWED_ATTR" in n ? w({}, n.ALLOWED_ATTR, pt) : De;
                    st = "ALLOWED_NAMESPACES" in n ? w({}, n.ALLOWED_NAMESPACES, k) : ut;
                    tt = "ADD_URI_SAFE_ATTR" in n ? w(A(nt), n.ADD_URI_SAFE_ATTR, pt) : nt;
                    Ze = "ADD_DATA_URI_TAGS" in n ? w(A(et), n.ADD_DATA_URI_TAGS, pt) : et;
                    Ye = "FORBID_CONTENTS" in n ? w({}, n.FORBID_CONTENTS, pt) : Je;
                    $e = "FORBID_TAGS" in n ? w({}, n.FORBID_TAGS, pt) : {};
                    Pe = "FORBID_ATTR" in n ? w({}, n.FORBID_ATTR, pt) : {};
                    Xe = "USE_PROFILES" in n ? n.USE_PROFILES : false;
                    Ne = n.ALLOW_ARIA_ATTR !== false;
                    Me = n.ALLOW_DATA_ATTR !== false;
                    we = n.ALLOW_UNKNOWN_PROTOCOLS || false;
                    Ae = n.ALLOW_SELF_CLOSE_IN_ATTR !== false;
                    Fe = n.SAFE_FOR_TEMPLATES || false;
                    Oe = n.SAFE_FOR_XML !== false;
                    Be = n.WHOLE_DOCUMENT || false;
                    Ue = n.RETURN_DOM || false;
                    Ve = n.RETURN_DOM_FRAGMENT || false;
                    He = n.RETURN_TRUSTED_TYPE || false;
                    qe = n.FORCE_BODY || false;
                    Ge = n.SANITIZE_DOM !== false;
                    ze = n.SANITIZE_NAMED_PROPS || false;
                    Ke = n.KEEP_CONTENT !== false;
                    Qe = n.IN_PLACE || false;
                    Ee = n.ALLOWED_URI_REGEXP || Ee;
                    namespaceURI = n.NAMESPACE || at;
                    xe = n.CUSTOM_ELEMENT_HANDLING || {};
                    if (n.CUSTOM_ELEMENT_HANDLING && gt(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
                        xe.tagNameCheck = n.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
                    }
                    if (n.CUSTOM_ELEMENT_HANDLING && gt(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
                        xe.attributeNameCheck = n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
                    }
                    if (n.CUSTOM_ELEMENT_HANDLING && typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
                        xe.allowCustomizedBuiltInElements = n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
                    }
                    if (Fe) {
                        Me = false;
                    }
                    if (Ve) {
                        Ue = true;
                    }
                    if (Xe) {
                        allowedTags = w({}, o(H));
                        allowedAttributes = [];
                        if (Xe.html === true) {
                            w(allowedTags, O);
                            w(allowedAttributes, G);
                        }
                        if (Xe.svg === true) {
                            w(allowedTags, B);
                            w(allowedAttributes, z);
                            w(allowedAttributes, K);
                        }
                        if (Xe.svgFilters === true) {
                            w(allowedTags, W);
                            w(allowedAttributes, z);
                            w(allowedAttributes, K);
                        }
                        if (Xe.mathMl === true) {
                            w(allowedTags, U);
                            w(allowedAttributes, j);
                            w(allowedAttributes, K);
                        }
                    }
                    if (n.ADD_TAGS) {
                        if (allowedTags === Ie) {
                            allowedTags = A(allowedTags);
                        }
                        w(allowedTags, n.ADD_TAGS, pt);
                    }
                    if (n.ADD_ATTR) {
                        if (allowedAttributes === De) {
                            allowedAttributes = A(allowedAttributes);
                        }
                        w(allowedAttributes, n.ADD_ATTR, pt);
                    }
                    if (n.ADD_URI_SAFE_ATTR) {
                        w(tt, n.ADD_URI_SAFE_ATTR, pt);
                    }
                    if (n.FORBID_CONTENTS) {
                        if (Ye === Je) {
                            Ye = A(Ye);
                        }
                        w(Ye, n.FORBID_CONTENTS, pt);
                    }
                    if (Ke) {
                        allowedTags["#text"] = true;
                    }
                    if (Be) {
                        w(allowedTags, [
                            "html",
                            "head",
                            "body"
                        ]);
                    }
                    if (allowedTags.table) {
                        w(allowedTags, [
                            "tbody"
                        ]);
                        delete $e.tbody;
                    }
                    if (Object_freeze) {
                        Object_freeze(n);
                    }
                    _t = n;
                }
            };
            const yt = w({}, [
                "mi",
                "mo",
                "mn",
                "ms",
                "mtext"
            ]);
            const Ct = w({}, [
                "annotation-xml"
            ]);
            const bt = w({}, [
                "title",
                "style",
                "font",
                "a",
                "script"
            ]);
            const vt = w({}, B);
            w(vt, W);
            w(vt, q);
            const St = w({}, U);
            w(St, V);
            const Rt = (t)=>{
                let e = v(t);
                if (!e || !e.tagName) {
                    e = {
                        namespaceURI,
                        tagName: "template"
                    };
                }
                const n = E(t.tagName);
                const r = E(e.tagName);
                if (st[t.namespaceURI]) {
                    if (t.namespaceURI === ot) {
                        if (e.namespaceURI === at) {
                            return n === "svg";
                        }
                        if (e.namespaceURI === rt) {
                            return n === "svg" && (r === "annotation-xml" || yt[r]);
                        }
                        return !!vt[n];
                    }
                    if (t.namespaceURI === rt) {
                        if (e.namespaceURI === at) {
                            return n === "math";
                        }
                        if (e.namespaceURI === ot) {
                            return n === "math" && Ct[r];
                        }
                        return !!St[n];
                    }
                    if (t.namespaceURI === at) {
                        if (e.namespaceURI === ot && !Ct[r] || e.namespaceURI === rt && !yt[r]) {
                            return false;
                        }
                        return !St[n] && (bt[n] || !vt[n]);
                    }
                    return !!(ct === "application/xhtml+xml" && st[t.namespaceURI]);
                }
                return false;
            };
            const Lt = (t)=>{
                L(n.removed, {
                    element: t
                });
                try {
                    t.parentNode.removeChild(t);
                } catch (e) {
                    try {
                        t.outerHTML = se;
                    } catch (e) {
                        t.remove();
                    }
                }
            };
            const Et = (name, from)=>{
                try {
                    L(n.removed, {
                        attribute: from.getAttributeNode(name),
                        from
                    });
                } catch (e) {
                    L(n.removed, {
                        attribute: null,
                        from
                    });
                }
                from.removeAttribute(name);
                if (name === "is" && !allowedAttributes[name]) {
                    if (Ue || Ve) {
                        try {
                            Lt(from);
                        } catch (e) {}
                    } else {
                        try {
                            from.setAttribute(name, "");
                        } catch (e) {}
                    }
                }
            };
            const kt = (t)=>{
                let e;
                let n;
                if (qe) {
                    t = `<remove></remove>${t}`;
                } else {
                    const r = I(t, /^[\r\n\t ]+/);
                    n = r && r[0];
                }
                if (ct === "application/xhtml+xml" && namespaceURI === at) {
                    t = `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${t}</body></html>`;
                }
                const o = M ? M.createHTML(t) : t;
                if (namespaceURI === at) {
                    try {
                        e = new DOMParser().parseFromString(o, ct);
                    } catch (e) {}
                }
                if (!e || !e.documentElement) {
                    e = implementation.createDocument(namespaceURI, "template", null);
                    try {
                        e.documentElement.innerHTML = lt ? se : o;
                    } catch (e) {}
                }
                const i = e.body || e.documentElement;
                if (t && n) {
                    i.insertBefore(t_document_1.createTextNode(n), i.childNodes[0] || null);
                }
                if (namespaceURI === at) {
                    return getElementsByTagName.call(e, Be ? "html" : "body")[0];
                }
                if (Be) {
                    return e.documentElement;
                }
                return i;
            };
            const It = (t)=>createNodeIterator.call(t.ownerDocument || t, t, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null, false);
            const Tt = (t)=>t instanceof HTMLFormElement && (typeof t.nodeName !== "string" || typeof t.textContent !== "string" || typeof t.removeChild !== "function" || !(t.attributes instanceof m) || typeof t.removeAttribute !== "function" || typeof t.setAttribute !== "function" || typeof t.namespaceURI !== "string" || typeof t.insertBefore !== "function" || typeof t.hasChildNodes !== "function");
            const Dt = (n)=>{
                if (e(Node) === "object") {
                    return n instanceof Node;
                }
                return n && e(n) === "object" && typeof n.nodeType === "number" && typeof n.nodeName === "string";
            };
            const xt = (t, r, o)=>{
                if (ge[t]) {
                    S(ge[t], function(e) {
                        e.call(n, r, o, _t);
                    });
                }
            };
            const $t = (t)=>{
                let e;
                xt("beforeSanitizeElements", t, null);
                if (Tt(t) || $(/[\u0080-\uFFFF]/, t.nodeName)) {
                    Lt(t);
                    return true;
                }
                const tagName = pt(t.nodeName);
                xt("uponSanitizeElement", t, {
                    tagName,
                    allowedTags
                });
                if (t.hasChildNodes() && !Dt(t.firstElementChild) && (!Dt(t.content) || !Dt(t.content.firstElementChild)) && $(/<[/\w]/g, t.innerHTML) && $(/<[/\w]/g, t.textContent) || tagName === "select" && $(/<template/i, t.innerHTML) || t.nodeType === 7 || Oe && t.nodeType === 8 && $(/<[/\w]/g, t.data)) {
                    Lt(t);
                    return true;
                }
                if (!allowedTags[tagName] || $e[tagName]) {
                    if (!$e[tagName] && Nt(tagName) && (xe.tagNameCheck instanceof RegExp && $(xe.tagNameCheck, tagName) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(tagName))) {
                        return false;
                    }
                    if (Ke && !Ye[tagName]) {
                        const o = v(t) || t.parentNode;
                        const a = b(t) || t.childNodes;
                        if (a && o) {
                            const i = a.length;
                            for(let l = i - 1; l >= 0; --l){
                                const s = y(a[l], true);
                                s.__removalCount = (t.__removalCount || 0) + 1;
                                o.insertBefore(s, C(t));
                            }
                        }
                    }
                    Lt(t);
                    return true;
                }
                if (t instanceof Element && !Rt(t) || (tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && $(/<\/no(script|embed|frames)/i, t.innerHTML)) {
                    Lt(t);
                    return true;
                }
                if (Fe && t.nodeType === 3) {
                    e = t.textContent;
                    e = T(e, he, " ");
                    e = T(e, ye, " ");
                    e = T(e, Ce, " ");
                    if (t.textContent !== e) {
                        L(n.removed, {
                            element: t.cloneNode()
                        });
                        t.textContent = e;
                    }
                }
                xt("afterSanitizeElements", t, null);
                return false;
            };
            const Pt = (t, n, r)=>{
                if (Ge && (n === "id" || n === "name") && (r in t_document_1 || r in ft)) {
                    return false;
                }
                if (!(Me && !Pe[n] && $(be, n))) {
                    if (!(Ne && $(ve, n))) {
                        if (!allowedAttributes[n] || Pe[n]) {
                            if (!(Nt(t) && (xe.tagNameCheck instanceof RegExp && $(xe.tagNameCheck, t) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(t)) && (xe.attributeNameCheck instanceof RegExp && $(xe.attributeNameCheck, n) || xe.attributeNameCheck instanceof Function && xe.attributeNameCheck(n)) || n === "is" && xe.allowCustomizedBuiltInElements && (xe.tagNameCheck instanceof RegExp && $(xe.tagNameCheck, r) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(r)))) {
                                return false;
                            }
                        } else if (!tt[n]) {
                            if (!$(Ee, T(r, Re, ""))) {
                                if (!((n === "src" || n === "xlink:href" || n === "href") && t !== "script" && D(r, "data:") === 0 && Ze[t])) {
                                    if (!(we && !$(Se, T(r, Re, "")))) {
                                        if (r) {
                                            return false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return true;
            };
            var Nt = (t)=>t !== "annotation-xml" && I(t, Le);
            const Mt = (r)=>{
                let t;
                let o;
                let a;
                let i;
                xt("beforeSanitizeAttributes", r, null);
                const r_attributes = r.attributes;
                if (!(!r_attributes || Tt(r))) {
                    const s = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: true,
                        allowedAttributes
                    };
                    for(i = r_attributes.length; i--;){
                        t = r_attributes[i];
                        const u = t;
                        const { name, namespaceURI } = u;
                        o = name === "value" ? t.value : x(t.value);
                        a = pt(name);
                        s.attrName = a;
                        s.attrValue = o;
                        s.keepAttr = true;
                        s.forceKeepAttr = undefined;
                        xt("uponSanitizeAttribute", r, s);
                        o = s.attrValue;
                        if (!s.forceKeepAttr && (Et(name, r), !!s.keepAttr)) {
                            if (!Ae && $(/\/>/i, o)) {
                                Et(name, r);
                                continue;
                            }
                            if (Fe) {
                                o = T(o, he, " ");
                                o = T(o, ye, " ");
                                o = T(o, Ce, " ");
                            }
                            const m = pt(r.nodeName);
                            if (Pt(m, a, o)) {
                                if (ze && (a === "id" || a === "name")) {
                                    Et(name, r);
                                    o = je + o;
                                }
                                if (Oe && $(/((--!?|])>)|<\/(style|title)/i, o)) {
                                    Et(name, r);
                                    continue;
                                }
                                if (M && e(trustedTypes) === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) {
                                    switch(trustedTypes.getAttributeType(m, a)){
                                        case "TrustedHTML":
                                            {
                                                o = M.createHTML(o);
                                                break;
                                            }
                                        case "TrustedScriptURL":
                                            {
                                                o = M.createScriptURL(o);
                                                break;
                                            }
                                    }
                                }
                                try {
                                    if (namespaceURI) {
                                        r.setAttributeNS(namespaceURI, name, o);
                                    } else {
                                        r.setAttribute(name, o);
                                    }
                                    if (Tt(r)) {
                                        Lt(r);
                                    } else {
                                        R(n.removed);
                                    }
                                } catch (e) {}
                            }
                        }
                    }
                    xt("afterSanitizeAttributes", r, null);
                }
            };
            const wt = function e(content) {
                let n;
                const r = It(content);
                xt("beforeSanitizeShadowDOM", content, null);
                while(n = r.nextNode()){
                    xt("uponSanitizeShadowNode", n, null);
                    $t(n);
                    Mt(n);
                    if (n.content instanceof DocumentFragment) {
                        e(n.content);
                    }
                }
                xt("afterSanitizeShadowDOM", content, null);
            };
            n.sanitize = function(o, a = {}) {
                let l;
                let u;
                let c;
                let d;
                let m;
                lt = !o;
                if (lt) {
                    o = "<!-->";
                }
                if (typeof o !== "string" && !Dt(o)) {
                    if (typeof o.toString === "function") {
                        o = o.toString();
                        if (typeof o !== "string") {
                            throw P("dirty is not a string, aborting");
                        }
                    } else {
                        throw P("toString is not a function");
                    }
                }
                if (!n.isSupported) {
                    if (e(t.toStaticHTML) === "object" || typeof t.toStaticHTML === "function") {
                        if (typeof o === "string") {
                            return t.toStaticHTML(o);
                        }
                        if (Dt(o)) {
                            return t.toStaticHTML(o.outerHTML);
                        }
                    }
                    return o;
                }
                if (!We) {
                    ht(a);
                }
                n.removed = [];
                if (typeof o === "string") {
                    Qe = false;
                }
                if (Qe) {
                    if (o.nodeName) {
                        const p = pt(o.nodeName);
                        if (!allowedTags[p] || $e[p]) {
                            throw P("root node is forbidden and cannot be sanitized in-place");
                        }
                    }
                } else if (o instanceof Node) {
                    l = kt("<!---->");
                    u = l.ownerDocument.importNode(o, true);
                    if (u.nodeType === 1 && u.nodeName === "BODY" || u.nodeName === "HTML") {
                        l = u;
                    } else {
                        l.appendChild(u);
                    }
                } else {
                    if (!Ue && !Fe && !Be && o.indexOf("<") === -1) {
                        if (M && He) {
                            return M.createHTML(o);
                        }
                        return o;
                    }
                    l = kt(o);
                    if (!l) {
                        if (Ue) {
                            return null;
                        }
                        if (He) {
                            return se;
                        }
                        return "";
                    }
                }
                if (l && qe) {
                    Lt(l.firstChild);
                }
                for(const _ = It(Qe ? o : l); c = _.nextNode();){
                    if (!(c.nodeType === 3 && c === d)) {
                        $t(c);
                        Mt(c);
                        if (c.content instanceof DocumentFragment) {
                            wt(c.content);
                        }
                        d = c;
                    }
                }
                d = null;
                if (Qe) {
                    return o;
                }
                if (Ue) {
                    if (Ve) {
                        for(m = createDocumentFragment.call(l.ownerDocument); l.firstChild;){
                            m.appendChild(l.firstChild);
                        }
                    } else {
                        m = l;
                    }
                    if (allowedAttributes.shadowroot || allowedAttributes.shadowrootmod) {
                        m = r_importNode.call(t_document, m, true);
                    }
                    return m;
                }
                let f = Be ? l.outerHTML : l.innerHTML;
                if (Be && allowedTags["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && $(re, l.ownerDocument.doctype.name)) {
                    f = `<!DOCTYPE ${l.ownerDocument.doctype.name}>
${f}`;
                }
                if (Fe) {
                    f = T(f, he, " ");
                    f = T(f, ye, " ");
                    f = T(f, Ce, " ");
                }
                if (M && He) {
                    return M.createHTML(f);
                }
                return f;
            };
            n.setConfig = function(e) {
                ht(e);
                We = true;
            };
            n.clearConfig = function() {
                _t = null;
                We = false;
            };
            n.isValidAttribute = function(e, t, n) {
                if (!_t) {
                    ht({});
                }
                const r = pt(e);
                const o = pt(t);
                return Pt(r, o, n);
            };
            n.addHook = function(e, t) {
                if (typeof t === "function") {
                    ge[e] = ge[e] || [];
                    L(ge[e], t);
                }
            };
            n.removeHook = function(e) {
                if (ge[e]) {
                    return R(ge[e]);
                }
            };
            n.removeHooks = function(e) {
                if (ge[e]) {
                    ge[e] = [];
                }
            };
            n.removeAllHooks = function() {
                ge = {};
            };
            return n;
        }
        const se = le();
        l.exports = se;
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    function d(e) {
        switch(e){
            case undefined:
                return c();
        }
    }
    a.exports = d;
}, null);