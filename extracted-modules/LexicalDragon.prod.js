__d("LexicalDragon.prod", [
    "Lexical",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals",
    "LexicalExtensionWatchedSignal"
], function $module_LexicalDragon_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    const o = {
        bold: "bold",
        italic: "italic",
        strikeThrough: "strikethrough",
        subscript: "subscript",
        superscript: "superscript",
        underline: "underline"
    };
    const SYMBOL_LEXICALDRAGONWINDOW_STATE = Symbol.for("@lexical/dragon/WindowState");
    function r(e, t, n) {
        const i = ((e)=>{
            let t = e[SYMBOL_LEXICALDRAGONWINDOW_STATE];
            if (t === undefined) {
                t = {
                    dispose: function dispose() {},
                    editors: new Map(),
                    installs: new Set()
                };
                e[SYMBOL_LEXICALDRAGONWINDOW_STATE] = t;
            }
            return t;
        })(e);
        if (i.installs.size === 0) {
            const _t = c.bind(e);
            e.addEventListener("message", _t, true);
            i.dispose = function() {
                e.removeEventListener("message", _t, true);
            };
        }
        i.installs.add(t);
        if (n) {
            const _e = i.editors.get(n) || new Set();
            _e.add(t);
            i.editors.set(n, _e);
        }
        return a.bind(null, e, i, t, n);
    }
    function a(e, t, n, i) {
        if (i) {
            const _e2 = t.editors.get(i);
            if (_e2 && _e2.delete(n) && _e2.size === 0) {
                t.editors.delete(i);
            }
        }
        if (t.installs.delete(n) && t.installs.size === 0) {
            t.dispose();
            delete e[SYMBOL_LEXICALDRAGONWINDOW_STATE];
        }
    }
    function l(e) {
        return e && e.ownerDocument.defaultView;
    }
    function d(t) {
        const i = require("LexicalExtensionWatchedSignal").watchedSignal(function() {
            return l(t.getRootElement());
        }, function(e) {
            return t.registerRootListener(function(t) {
                e.value = l(t);
            });
        });
        return require("LexicalExtensionSignals").effect(function() {
            const i_value = i.value;
            if (i_value) {
                return r(i_value, Symbol("@lexical/dragon/editorInstall"), t);
            }
        });
    }
    function c(e) {
        if (e.origin !== this.location.origin) {
            return;
        }
        const t = ((e)=>{
            const t = e[SYMBOL_LEXICALDRAGONWINDOW_STATE];
            if (t === undefined) {
                return null;
            }
            const n = require("Lexical").getEditorPropertyFromDOMNode(require("Lexical").getActiveElementDeep(e.document));
            if (require("Lexical").isLexicalEditor(n) && t.editors.has(n)) {
                return n;
            }
            return null;
        })(this);
        if (t === null) {
            return;
        }
        const e_data = e.data;
        if (typeof e_data === "string") {
            let _s;
            try {
                _s = JSON.parse(e_data);
            } catch (e) {
                return;
            }
            if (_s && _s.protocol === "nuanria_messaging" && _s.type === "request") {
                const _n = _s.payload;
                if (_n && _n.functionId === "makeChanges") {
                    const _s2 = _n.args;
                    if (Array.isArray(_s2)) {
                        const _n2 = _s2[0];
                        const _r = _s2[1];
                        const _a = _s2[2];
                        const _l = _s2[3];
                        const _d = _s2[4];
                        const _c = _s2[5];
                        if (![
                            _n2,
                            _r,
                            _l,
                            _d
                        ].every(Number.isFinite) || typeof _a !== "string" && _a !== -1) {
                            return;
                        }
                        t.update(function() {
                            const t = require("Lexical").$getSelection();
                            if (require("Lexical").$isRangeSelection(t)) {
                                const _s3 = t.anchor;
                                let _u = _s3.getNode();
                                let g = 0;
                                let f = 0;
                                if (require("Lexical").$isTextNode(_u) && _n2 >= 0 && _r >= 0) {
                                    g = _n2;
                                    f = _n2 + _r;
                                    t.setTextNodeRange(_u, g, _u, f);
                                }
                                if (!(typeof _a !== "string" || g === f && _a === "")) {
                                    t.insertRawText(_a);
                                    _u = _s3.getNode();
                                }
                                if (require("Lexical").$isTextNode(_u)) {
                                    const _e3 = _u.getTextContentSize();
                                    g = Math.min(Math.max(_l, 0), _e3);
                                    f = _l < 0 || _d < 0 ? g : Math.min(_l + _d, _e3);
                                    t.setTextNodeRange(_u, g, _u, f);
                                }
                                if (typeof _c === "string" && _d > 0 && !t.isCollapsed()) {
                                    const _e4 = o[_c];
                                    if (_e4 !== undefined) {
                                        t.formatText(_e4);
                                    }
                                }
                                e.stopImmediatePropagation();
                            }
                        });
                    }
                }
            }
        }
    }
    const u = {
        build: function build(e, n, i) {
            return require("LexicalExtensionNamedSignals").namedSignals(n);
        },
        config: {
            disabled: typeof window === "undefined"
        },
        name: "LexicalDragon",
        register: function register(t, n, i) {
            return require("LexicalExtensionSignals").effect(function() {
                if (i.getOutput().disabled.value) {
                    return undefined;
                }
                return d(t);
            });
        }
    };
    exports.DragonExtension = u;
    exports.installDragonSupport = function(e = (()=>{
        if (typeof window !== "undefined") {
            return window;
        }
    })()) {
        if (e) {
            return r(e, Symbol("@lexical/dragon/globalInstall"), undefined);
        }
        return function() {};
    };
    exports.registerDragonSupport = d;
}, null);