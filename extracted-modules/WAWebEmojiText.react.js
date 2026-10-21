__d("WAWebEmojiText.react", [
    "WABidi",
    "WADeepEquals",
    "WAUnicodeUtils",
    "WAWebABProps",
    "WAWebBlockQuoteMutatorComponent.react",
    "WAWebBulletedListMutatorComponent.react",
    "WAWebClassnames",
    "WAWebCopyPasteSelectable.react",
    "WAWebDebounce",
    "WAWebEmoji",
    "WAWebFormat",
    "WAWebFormatConfiguration",
    "WAWebFormatParse",
    "WAWebJsxSerializer.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebNonEmptyString",
    "WAWebNumberedListMutatorComponent.react",
    "WAWebUA",
    "nullthrows",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { PureComponent, createRef } = c;
    const p = [
        r("WAWebBulletedListMutatorComponent.react"),
        r("WAWebNumberedListMutatorComponent.react"),
        r("WAWebBlockQuoteMutatorComponent.react")
    ];
    const _ = '[data-ellipsifiable="true"]';
    const f = /^(?:[\t\n\f\r \xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])*$/;
    const g = {
        breakWord: {
            wordBreak: "x13faqbe",
            $$css: true
        },
        clickable: {
            cursor: "x1ypdohk",
            ":hover_textDecoration": "xt0b8zv",
            $$css: true
        },
        dirMismatch: {
            display: "x1lliihq",
            width: "xh8yej3",
            textAlign: "xp4054r",
            $$css: true
        },
        ellipsify: {
            flexGrow: "x1iyjqo2",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        inlineblock: {
            display: "x1rg5ohu",
            $$css: true
        },
        displayBlock: {
            display: "x1lliihq",
            $$css: true
        },
        multiline: {
            whiteSpace: "x1fj9vlw",
            $$css: true
        },
        preserveWhitespace: {
            whiteSpace: "x126k92a",
            $$css: true
        },
        preformatted: {
            whiteSpace: "x1sdyfia",
            width: "xm6i5cn",
            display: "x1rg5ohu",
            $$css: true
        }
    };
    const h = {
        SMALL: "SMALL",
        LARGE: "LARGE"
    };
    const y = 4096;
    const C = 12;
    function b(text) {
        return o("WAWebEmoji").EmojiUtil.containsEmoji(o("WAUnicodeUtils").firstNCodepoints(text, y));
    }
    function v(e, t) {
        if (e.length <= t) {
            return false;
        }
        return o("WAUnicodeUtils").numCodepoints(o("WAUnicodeUtils").firstNCodepoints(e, t + 1)) > t;
    }
    function S(e, t) {
        return [
            e.breakWord,
            e.className,
            e.direction,
            e.dirMismatch,
            e.displayBlock,
            e.element,
            e.ellipsify,
            e.emojiSize,
            e.inferLinesDirection,
            e.inlineblock,
            e.minTextHeight,
            e.multiline,
            e.preformatted,
            e.previewMode,
            e.preserveWhitespace,
            e.selectable,
            e.textLimit,
            t
        ];
    }
    function R(e, props, text, r) {
        if (!o("WADeepEquals").deepEqual(e.formatters, props.formatters) || !o("WADeepEquals").deepEqual(e.xstyle, props.xstyle) || !o("WADeepEquals").deepEqual(e.emojiXstyle, props.emojiXstyle)) {
            return true;
        }
        const a = S(e, text);
        const i = S(props, r);
        return a.some((e, t)=>e !== i[t]);
    }
    const L = ((PureComponent_1)=>{
        function n(...i_1) {
            let n;
            n = PureComponent_1.call(this, ...i_1) || this;
            n.state = {
                text: String(n.props.text || ""),
                ellipsified: null,
                ellipsifiedLimits: null
            };
            n.refContainer = createRef();
            n.$1 = false;
            n.$2 = null;
            n.$3 = r("WAWebDebounce")(function() {
                n.setState({
                    ellipsified: null,
                    ellipsifiedLimits: null
                }, n.ellipsify);
            }, 10);
            n.$4 = function(e) {
                const t = [];
                const n = r("WAWebL10N").LR("ltr", "rtl");
                const a = (t)=>{
                    if (t == null) {
                        return n;
                    }
                    if (typeof t === "string") {
                        return o("WABidi").bidiDir(t) ?? n;
                    }
                    return a(t?.props?.children?.[0]);
                };
                let i = [];
                const l = ()=>{
                    if (i.length !== 0) {
                        t.push({
                            dir: a(i[0]),
                            content: i
                        });
                        i = [];
                    }
                };
                for (const s of e){
                    if (typeof s === "string") {
                        const u = s.split(/(\r?\n)/);
                        u.forEach((e)=>{
                            if (e !== "") {
                                i.push(e);
                            }
                            if (e.match(/\r?\n/)) {
                                l();
                            }
                        });
                    } else {
                        if (p.includes(s.type)) {
                            l();
                            t.push({
                                dir: n,
                                content: [
                                    s
                                ]
                            });
                        } else {
                            i.push(s);
                        }
                    }
                }
                l();
                return t;
            };
            n.$5 = function() {
                if (n.props.formatters != null) {
                    return n.props.formatters;
                }
                const emojiXstyle = n.props.emojiXstyle;
                const t = !!n.props.selectable;
                if (n.$2 == null || n.$2.emojiXstyle !== emojiXstyle || n.$2.selectable !== t) {
                    n.$2 = {
                        emojiXstyle,
                        formatters: o("WAWebFormatConfiguration").EmojiOnly({
                            emojiXstyle,
                            selectable: t
                        }),
                        selectable: t
                    };
                }
                return n.$2.formatters;
            };
            n.ellipsify = function() {
                const current = n.refContainer.current;
                if (current) {
                    const t = r("nullthrows")(current.parentElement);
                    const a = o("WAWebABProps").getABPropConfigValue("is_preview_rich_format_enabled");
                    const i = a ? I(current) : [];
                    const l = a ? null : Array.from(current.querySelectorAll("img"));
                    if (!(i.length === 0 && (l == null || l.length === 0))) {
                        const s = current.clientWidth;
                        current.style.overflow = "visible";
                        const u = current.clientWidth !== s;
                        current.style.overflow = "hidden";
                        if (u) {
                            const c = !!r("WAWebL10N").isRTL() == !!n.props.dirMismatch;
                            const d = c ? t.clientWidth - P(t, current) - C : C;
                            if (l != null) {
                                const m = $(l, d, c);
                                n.setState({
                                    ellipsified: o("WAWebNonEmptyString").asMaybeNonEmptyString(D(current, l[m]))
                                });
                                return;
                            }
                            const p = $(i, d, c);
                            const _ = i[p];
                            if (_ != null && x(current, _)) {
                                const f = n.state.text;
                                const g = N(f, n.props.textLimit, true, null);
                                const h = g.parseLimit;
                                const ellipsifiedLimits = o("WAWebFormatParse").getLimitsBeforeEllipsifiableMutator(f, n.$5(), p, h);
                                if (ellipsifiedLimits != null) {
                                    n.setState({
                                        ellipsifiedLimits
                                    });
                                }
                            }
                        }
                    }
                }
            };
            n.$6 = function() {
                return b(n.state.text) && n.ellipsify();
            };
            n.$7 = function(e, t) {
                const direction = n.props.direction;
                const a = n.$4(e);
                return a.map((e, n)=>{
                    const i = direction == null || e.dir === direction || e.dir === "rtl" === r("WAWebL10N").isRTL();
                    const l = i ? null : e.dir;
                    const s = a.length - 1 === n;
                    const c = {
                        0: "",
                        2: "x1lliihq xh8yej3 xp4054r",
                        1: "x1lliihq",
                        3: "xh8yej3 xp4054r x1lliihq"
                    }[!i << 1 | !!(!s && i) << 0];
                    return <span key={n} dir={l} className={c}>{e.content}{s && t ? String.fromCodePoint(8230) : null}</span>;
                });
            };
            n.$8 = function() {
                if (!n.$1) {
                    n.$1 = true;
                    n.props.listeners.add(window, "resize", n.$3);
                }
            };
            n.componentDidMount = function() {
                if (!o("WAWebUA").UA.supportsEmojiEllipsification && n.props.ellipsify && b(n.state.text)) {
                    n.$8();
                }
                if (!(o("WAWebUA").UA.supportsEmojiEllipsification || !n.props.ellipsify)) {
                    n.$6();
                }
            };
            n.$9 = function() {
                if (n.$1) {
                    n.$1 = false;
                    n.props.listeners.remove(window, "resize", n.$3);
                }
            };
            n.render = function() {
                if (!n.state.text) {
                    return null;
                }
                const n_props = n.props;
                const { breakWord, direction, dirMismatch, displayBlock, ellipsify, inferLinesDirection, inlineblock, multiline, onClick, preformatted, preserveWhitespace, tabIndex, textLimit } = n_props;
                const L = function(t) {
                    if (onClick != null && r("WAWebKeyboardIsKeyActivation")(t)) {
                        t.preventDefault();
                        onClick(t);
                    }
                };
                const text = n.state.text;
                const k = direction === "inherit" ? null : direction || "auto";
                const I = !!n.props.selectable;
                const T = n.$5();
                const n_state = n.state;
                const { ellipsified, ellipsifiedLimits } = n_state;
                const P = o("WAWebABProps").getABPropConfigValue("is_preview_rich_format_enabled");
                const M = N(text, textLimit, ellipsify, P ? ellipsifiedLimits : null);
                const { parseLimit, textLimit: textLimit_1 } = M;
                const F = dirMismatch === true && !inferLinesDirection;
                const O = o("WAWebClassnames").classnamesConvertMeToStylexPlease(n.props.className, (e || (e = r("stylex")))(ellipsify && g.ellipsify, inlineblock && g.inlineblock, displayBlock && g.displayBlock, onClick && g.clickable, F && g.dirMismatch, multiline && g.multiline, preserveWhitespace === true && g.preserveWhitespace, preformatted === true && g.preformatted, breakWord && g.breakWord, n.props.xstyle));
                const B = P ? text : ellipsified ?? text;
                const W = r("WAWebFormat")(B, T, r("WAWebJsxSerializer.react"), {
                    parseLimit,
                    serializerOptions: {
                        markEllipsifiableEmojis: P && ellipsify && !o("WAWebUA").UA.supportsEmojiEllipsification,
                        previewMode: n.props.previewMode
                    },
                    textLimit: P ? textLimit_1 : undefined
                });
                const q = P ? ellipsifiedLimits != null || v(text, textLimit_1) : ellipsified != null || text.length > parseLimit;
                const U = n.props.inferLinesDirection ? n.$7(W, q) : W;
                const V = n.props.title ?? n.state.text;
                const Component = o("WAWebCopyPasteSelectable.react").Selectable;
                return <Component data-testid={n.props.testid} className={O} dir={k} element={n.props.element} onClick={onClick} onKeyDown={onClick != null ? L : undefined} ref={n.refContainer} role={n.props.role} selectable={I} tabIndex={tabIndex != null ? Number(tabIndex) : undefined} aria-label={n.props.ariaLabel ?? undefined} title={n.props.titlify ? V : undefined} style={{
                    minHeight: `${n.props.minTextHeight ?? 0}px`
                }}>{U}</Component>;
            };
            return babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
        }
        babelHelpers.inheritsLoose(n, PureComponent_1);
        const n_prototype = n.prototype;
        n_prototype.getElement = function() {
            return this.refContainer.current;
        };
        n.getDerivedStateFromProps = function(t, n) {
            let r = null;
            const o = String(t.text ?? "");
            if (o !== n.text) {
                r = {
                    ellipsified: null,
                    ellipsifiedLimits: null,
                    text: o
                };
            }
            return r;
        };
        n_prototype.getWidth = function() {
            const current = this.refContainer.current;
            if (current) {
                return current.getBoundingClientRect().width;
            }
            return 0;
        };
        n_prototype.componentDidUpdate = function(t, n) {
            if (!o("WAWebUA").UA.supportsEmojiEllipsification) {
                if (!this.props.ellipsify) {
                    if (t.ellipsify) {
                        this.$3.cancel();
                        this.$9();
                        if (this.state.ellipsified != null || this.state.ellipsifiedLimits != null) {
                            this.setState({
                                ellipsified: null,
                                ellipsifiedLimits: null
                            });
                        }
                    }
                    return;
                }
                if (R(t, this.props, n.text, this.state.text)) {
                    if (b(this.state.text)) {
                        this.$3();
                        this.$8();
                    } else {
                        this.$9();
                    }
                }
            }
        };
        n_prototype.componentWillUnmount = function() {
            this.$3.cancel();
        };
        return n;
    })(PureComponent);
    L.defaultProps = {
        element: "span",
        emojiSize: h.SMALL,
        textLimit: Infinity
    };
    const E = o("WAWebListenerHoc_DEPRECATED").ListenerHOC(L);
    const k = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.getElement = function() {
                return t.getComponent().getElement();
            };
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getWidth = function() {
            return this.getComponent().getWidth();
        };
        return t;
    })(E);
    function I(e) {
        const t = [];
        for (const n of e.querySelectorAll(_)){
            if (n instanceof HTMLElement) {
                t.push(n);
            }
        }
        return t;
    }
    var T = {
        CODE: [
            "```",
            "```"
        ],
        DEL: [
            "~",
            "~"
        ],
        EM: [
            "_",
            "_"
        ],
        LI: [
            "* ",
            ""
        ],
        STRONG: [
            "*",
            "*"
        ]
    };
    function D(e, t, n = {
        found: false
    }) {
        if (e === t) {
            n.found = true;
            return "";
        }
        if (e instanceof HTMLImageElement) {
            return e.alt;
        }
        if (e.nodeType === Node.TEXT_NODE) {
            return e.nodeValue ?? "";
        }
        const o = e instanceof Element ? T[e.tagName] : null;
        let a = "";
        for (const i of e.childNodes){
            a += D(i, t, n);
            if (n.found) {
                break;
            }
        }
        if (o == null) {
            return a;
        }
        return `${o[0]}${a}${o[1]}`;
    }
    function x(e, t, n = {
        found: false
    }) {
        if (e === t) {
            n.found = true;
            return false;
        }
        if (e instanceof HTMLImageElement || e instanceof HTMLElement && e.matches(_)) {
            return true;
        }
        if (e.nodeType === Node.TEXT_NODE) {
            return e.nodeValue != null && !f.test(e.nodeValue);
        }
        for (const r of e.childNodes){
            if (x(r, t, n)) {
                return true;
            }
            if (n.found) {
                break;
            }
        }
        return false;
    }
    function $(e, t, n) {
        for(var r = 0; r < e.length;){
            const o = e[r];
            if (n && o.offsetLeft + o.clientWidth >= t || !n && o.offsetLeft <= t) {
                break;
            }
            r++;
        }
        return r;
    }
    function P(e, t) {
        let n = 0;
        for(let r = e.childNodes, o = 0; o < r.length; o++){
            const a = r[o];
            if (a === t) {
                break;
            }
            n += a instanceof Element ? a.clientWidth : 0;
        }
        return n;
    }
    function N(e, t, n, r) {
        let o = t ?? Infinity;
        let textLimit = t ?? Infinity;
        if (n === true && o > y && v(e, y)) {
            o = y;
            textLimit = y;
        }
        if (n === true && r != null) {
            o = Math.min(o, r.parseLimit);
            textLimit = Math.min(textLimit, r.textLimit);
        }
        return {
            parseLimit: o,
            textLimit
        };
    }
    l.EMOJI_SIZE = h;
    l.EmojiText = k;
}, 98);