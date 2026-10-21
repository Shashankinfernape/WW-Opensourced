__d("LexicalExtensionLexicalBuilder.prod", [
    "Lexical",
    "LexicalExtensionConfig",
    "LexicalExtensionInitialStateExtension"
], function $module_LexicalExtensionLexicalBuilder_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    const _excluded = [
        "$initialEditorState",
        "onError",
        "onWarn"
    ];
    function i(t, ...e_1) {
        throw ((t, ...e)=>{
            const n = new URL("https://lexical.dev/docs/error");
            const i = new URLSearchParams();
            i.append("code", t);
            for (const _t of e){
                i.append("v", _t);
            }
            n.search = i.toString();
            return new Error(`Minified Lexical error #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
        })(...[
            t
        ].concat(Array.from(e_1)));
    }
    function s() {
        let t;
        try {
            t = "0.52.0+prod.cjs";
        } catch (_unused) {}
        return t ?? '"<unknown>+source"';
    }
    const o = s();
    const r = new Set([
        "__proto__",
        "constructor",
        "prototype"
    ]);
    function a(t, e) {
        if (t && e && !Array.isArray(e) && typeof t === "object" && typeof e === "object") {
            const _n = t;
            const _i = e;
            for(const _t2 in _i){
                if (!r.has(_t2) && Object.prototype.hasOwnProperty.call(_i, _t2)) {
                    _n[_t2] = a(_n[_t2], _i[_t2]);
                }
            }
            return t;
        }
        return e;
    }
    function c(t) {
        return t.id === 0;
    }
    function d(t) {
        return t.id === 2;
    }
    const g = new Set();
    class _h {
        constructor(t, e){
            this.builder = t;
            this.extension = e;
            this.configs = new Set();
            this.state = {
                id: 0
            };
        }
        mergeConfigs() {
            let e = this.extension.config || {};
            const n = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : require("Lexical").shallowMergeConfig;
            for (const _t3 of this.configs){
                e = n(e, _t3);
            }
            return e;
        }
        init(t) {
            const state = this.state;
            if (!d(state)) {
                i(306, String(state.id));
            }
            const n = {
                getDependency: this.getInitDependency.bind(this),
                getDirectDependentNames: this.getDirectDependentNames.bind(this),
                getPeer: this.getInitPeer.bind(this),
                getPeerNameSet: this.getPeerNameSet.bind(this)
            };
            const s = babelHelpers.extends({}, n, {
                getDependency: this.getDependency.bind(this),
                getInitResult: this.getInitResult.bind(this),
                getPeer: this.getPeer.bind(this)
            });
            const o = ((t, e, n)=>Object.assign(t, {
                    config: e,
                    id: 3,
                    registerState: n
                }))(state, this.mergeConfigs(), n);
            let r;
            this.state = o;
            if (this.extension.init) {
                r = this.extension.init(t, o.config, n);
            }
            this.state = ((t, initResult, n)=>Object.assign(t, {
                    id: 4,
                    initResult,
                    registerState: n
                }))(o, r, s);
        }
        build(t) {
            const state = this.state;
            let n;
            if (state.id !== 4) {
                i(307, String(state.id), String(5));
            }
            if (this.extension.build) {
                n = this.extension.build(t, state.config, state.registerState);
            }
            const s = babelHelpers.extends({}, state.registerState, {
                getOutput: function getOutput() {
                    return n;
                },
                getSignal: this.getSignal.bind(this)
            });
            this.state = ((t, output, n)=>Object.assign(t, {
                    id: 5,
                    output,
                    registerState: n
                }))(state, n, s);
        }
        register(t, e) {
            const _this = this;
            this._signal = e;
            const state = this.state;
            if (state.id !== 5) {
                i(308, String(state.id), String(5));
            }
            const s = this.extension.register && this.extension.register(t, state.config, state.registerState);
            this.state = ((t)=>Object.assign(t, {
                    id: 6
                }))(state);
            return function() {
                const _this_state = _this.state;
                if (_this_state.id !== 7) {
                    i(309, String(state.id), String(7));
                }
                _this.state = ((t)=>Object.assign(t, {
                        id: 5
                    }))(_this_state);
                if (s) {
                    s();
                }
            };
        }
        afterRegistration(t) {
            const state = this.state;
            let n;
            if (state.id !== 6) {
                i(310, String(state.id), String(6));
            }
            if (this.extension.afterRegistration) {
                n = this.extension.afterRegistration(t, state.config, state.registerState);
            }
            this.state = ((t)=>Object.assign(t, {
                    id: 7
                }))(state);
            return n;
        }
        getSignal() {
            if (this._signal === undefined) {
                i(311);
            }
            return this._signal;
        }
        getInitResult() {
            if (this.extension.init === undefined) {
                i(312, this.extension.name);
            }
            const state = this.state;
            if (!((t)=>t.id >= 4)(state)) {
                i(313, String(state.id), String(4));
            }
            return state.initResult;
        }
        getInitPeer(t) {
            const e = this.builder.extensionNameMap.get(t);
            if (e) {
                return e.getExtensionInitDependency();
            }
        }
        getExtensionInitDependency() {
            const state = this.state;
            if (!((t)=>t.id >= 3)(state)) {
                i(314, String(state.id), String(3));
            }
            return {
                config: state.config
            };
        }
        getPeer(t) {
            const e = this.builder.extensionNameMap.get(t);
            if (e) {
                return e.getExtensionDependency();
            }
        }
        getInitDependency(t) {
            const e = this.builder.getExtensionRep(t);
            if (e === undefined) {
                i(315, this.extension.name, t.name);
            }
            return e.getExtensionInitDependency();
        }
        getDependency(t) {
            const e = this.builder.getExtensionRep(t);
            if (e === undefined) {
                i(315, this.extension.name, t.name);
            }
            return e.getExtensionDependency();
        }
        getState() {
            const state = this.state;
            if (!((t)=>t.id >= 7)(state)) {
                i(316, String(state.id), String(7));
            }
            return state;
        }
        getDirectDependentNames() {
            return this.builder.incomingEdges.get(this.extension.name) || g;
        }
        getPeerNameSet() {
            let _peerNameSet = this._peerNameSet;
            if (!_peerNameSet) {
                _peerNameSet = new Set((this.extension.peerDependencies || []).map(([t])=>t));
                this._peerNameSet = _peerNameSet;
            }
            return _peerNameSet;
        }
        getExtensionDependency() {
            if (!this._dependency) {
                const _t4 = this.state;
                if (!((_t4_1)=>_t4_1.id >= 5)(_t4)) {
                    i(317, this.extension.name);
                }
                this._dependency = {
                    config: _t4.config,
                    init: _t4.initResult,
                    output: _t4.output
                };
            }
            return this._dependency;
        }
    }
    const SYMBOL_LEXICAL_EXTENSION_LEXICAL_BUILDER = Symbol.for("LexicalExtensionLexicalBuilder");
    function u() {}
    function l(t) {
        throw t;
    }
    function p(t) {
        if (Array.isArray(t)) {
            return t;
        }
        return [
            t
        ];
    }
    const m = o;
    const _x = (()=>{
        function x(t) {
            this.outgoingConfigEdges = new Map();
            this.incomingEdges = new Map();
            this.extensionNameMap = new Map();
            this.conflicts = new Map();
            this.PACKAGE_VERSION = m;
            this.roots = t;
            for (const _e of t){
                this.addExtension(_e);
            }
        }
        x.fromExtensions = function fromExtensions(t) {
            const e = [
                p(require("LexicalExtensionInitialStateExtension").InitialStateExtension)
            ];
            for (const _n2 of t){
                e.push(p(_n2));
            }
            return new x(e);
        };
        x.maybeFromEditor = function maybeFromEditor(t) {
            const e = t[SYMBOL_LEXICAL_EXTENSION_LEXICAL_BUILDER];
            if (e) {
                if (e.PACKAGE_VERSION !== m) {
                    i(292, e.PACKAGE_VERSION, m);
                }
                if (!(e instanceof x)) {
                    i(293);
                }
            }
            return e;
        };
        x.fromEditor = function fromEditor(t) {
            const e = x.maybeFromEditor(t);
            if (e === undefined) {
                i(294);
            }
            return e;
        };
        const _proto2 = x.prototype;
        _proto2.constructEditor = function constructEditor() {
            const _this$buildCreateEdit = this.buildCreateEditorArgs();
            const { $initialEditorState, onError: onError_1, onWarn: onWarn_1 } = _this$buildCreateEdit;
            const s = babelHelpers.objectWithoutPropertiesLoose(_this$buildCreateEdit, _excluded);
            var o = Object.assign(require("Lexical").createEditor(babelHelpers.extends({}, s, onError_1 ? {
                onError: function onError(t) {
                    onError_1(t, o);
                }
            } : {}, onWarn_1 ? {
                onWarn: function onWarn(t) {
                    onWarn_1(t, o);
                }
            } : {})), {
                [SYMBOL_LEXICAL_EXTENSION_LEXICAL_BUILDER]: this
            });
            for (const _t5 of this.sortedExtensionReps()){
                _t5.build(o);
            }
            return o;
        };
        _proto2.buildEditor = function buildEditor() {
            let e = u;
            function dispose() {
                try {
                    e();
                } finally{
                    e = u;
                }
            }
            const i = Object.assign(this.constructEditor(), {
                dispose,
                [typeof Symbol === "function" ? Symbol.dispose : "@@dispose"]: dispose
            });
            e = require("Lexical").mergeRegister(this.registerEditor(i), function() {
                return i.setRootElement(null);
            });
            return i;
        };
        _proto2.hasExtensionByName = function hasExtensionByName(t) {
            return this.extensionNameMap.has(t);
        };
        _proto2.getExtensionRep = function getExtensionRep(t) {
            const e = this.extensionNameMap.get(t.name);
            if (e) {
                if (e.extension !== t) {
                    i(295, t.name);
                }
                return e;
            }
        };
        _proto2.addEdge = function addEdge(t, e, n) {
            const i = this.outgoingConfigEdges.get(t);
            if (i) {
                const _t6 = i.get(e);
                if (_t6) {
                    _t6.push(...Array.from(n));
                } else {
                    i.set(e, n);
                }
            } else {
                this.outgoingConfigEdges.set(t, new Map([
                    [
                        e,
                        n
                    ]
                ]));
            }
            const s = this.incomingEdges.get(e);
            if (s) {
                s.add(t);
            } else {
                this.incomingEdges.set(e, new Set([
                    t
                ]));
            }
        };
        _proto2.addExtension = function addExtension(t) {
            if (this._sortedExtensionReps !== undefined) {
                i(296);
            }
            const e = p(t);
            const n = e[0];
            if (typeof n.name !== "string") {
                i(297, typeof n.name);
            }
            let s = this.extensionNameMap.get(n.name);
            if (s !== undefined && s.extension !== n) {
                i(298, n.name);
            }
            if (!s) {
                s = new _h(this, n);
                this.extensionNameMap.set(n.name, s);
                const _t7 = this.conflicts.get(n.name);
                if (typeof _t7 === "string") {
                    i(299, n.name, _t7);
                }
                for (const _t8 of n.conflictsWith || []){
                    if (this.extensionNameMap.has(_t8)) {
                        i(299, n.name, _t8);
                    }
                    this.conflicts.set(_t8, n.name);
                }
                for (const _t9 of n.dependencies || []){
                    const _e2 = p(_t9);
                    this.addEdge(n.name, _e2[0].name, _e2.slice(1));
                    this.addExtension(_e2);
                }
                for (const [_t0, _e3] of n.peerDependencies || []){
                    this.addEdge(n.name, _t0, _e3 ? [
                        _e3
                    ] : []);
                }
            }
        };
        _proto2.sortedExtensionReps = function sortedExtensionReps() {
            const _this2 = this;
            if (this._sortedExtensionReps) {
                return this._sortedExtensionReps;
            }
            const t = [];
            const _e4 = function e(n, s) {
                let n_state = n.state;
                if (d(n_state)) {
                    return;
                }
                const name = n.extension.name;
                let a;
                if (!c(n_state)) {
                    i(300, name, s || "[unknown]");
                }
                if (!c(a = n_state)) {
                    i(304, String(a.id), String(0));
                }
                n_state = Object.assign(a, {
                    id: 1
                });
                n.state = n_state;
                const g = _this2.outgoingConfigEdges.get(name);
                if (g) {
                    for (const _t1 of g.keys()){
                        const _n3 = _this2.extensionNameMap.get(_t1);
                        if (_n3) {
                            _e4(_n3, name);
                        }
                    }
                }
                n_state = ((n_state_1)=>{
                    if (!((t)=>t.id === 1)(n_state_1)) {
                        i(305, String(n_state_1.id), String(1));
                    }
                    return Object.assign(n_state_1, {
                        id: 2
                    });
                })(n_state);
                n.state = n_state;
                t.push(n);
            };
            for (const _t10 of this.extensionNameMap.values()){
                if (c(_t10.state)) {
                    _e4(_t10);
                }
            }
            for (const _e5 of t){
                for (const [_t11, _n4] of this.outgoingConfigEdges.get(_e5.extension.name) || []){
                    if (_n4.length > 0) {
                        const _e6 = this.extensionNameMap.get(_t11);
                        if (_e6) {
                            for (const _t12 of _n4){
                                _e6.configs.add(_t12);
                            }
                        }
                    }
                }
            }
            for (const _ref7 of this.roots){
                const _t13 = _ref7[0];
                const _e7 = babelHelpers.arrayLikeToArray(_ref7).slice(1);
                if (_e7.length > 0) {
                    const _n5 = this.extensionNameMap.get(_t13.name);
                    if (_n5 === undefined) {
                        i(301, _t13.name);
                    }
                    for (const _t14 of _e7){
                        _n5.configs.add(_t14);
                    }
                }
            }
            this._sortedExtensionReps = t;
            return this._sortedExtensionReps;
        };
        _proto2.registerEditor = function registerEditor(e) {
            const n = this.sortedExtensionReps();
            const i = new AbortController();
            const s = [
                function() {
                    return i.abort();
                }
            ];
            const i_signal = i.signal;
            for (const _t15 of n){
                const _n6 = _t15.register(e, i_signal);
                if (_n6) {
                    s.push(_n6);
                }
            }
            for (const _t16 of n){
                const _n7 = _t16.afterRegistration(e);
                if (_n7) {
                    s.push(_n7);
                }
            }
            return require("Lexical").mergeRegister.apply(require("Lexical"), Array.from(s));
        };
        _proto2.buildCreateEditorArgs = function buildCreateEditorArgs() {
            const t = {};
            const n = new Set();
            const s = new Map();
            const o = new Map();
            const r = {};
            const c = {};
            const d = this.sortedExtensionReps();
            for (const _g of d){
                const _d = _g.extension;
                if (_d.onError !== undefined) {
                    t.onError = _d.onError;
                }
                if (_d.onWarn !== undefined) {
                    t.onWarn = _d.onWarn;
                }
                if (_d.disableEvents !== undefined) {
                    t.disableEvents = _d.disableEvents;
                }
                if (_d.parentEditor !== undefined) {
                    t.parentEditor = _d.parentEditor;
                }
                if (_d.editable !== undefined) {
                    t.editable = _d.editable;
                }
                if (_d.namespace !== undefined) {
                    t.namespace = _d.namespace;
                }
                if (_d.$initialEditorState !== undefined) {
                    t.$initialEditorState = _d.$initialEditorState;
                }
                if (_d.nodes) {
                    for (const _t17 of require("LexicalExtensionConfig").getNodeConfig(_d)){
                        if (typeof _t17 !== "function") {
                            const _e8 = s.get(_t17.replace);
                            if (_e8) {
                                i(302, _d.name, _t17.replace.name, _e8.extension.name);
                            }
                            s.set(_t17.replace, _g);
                        }
                        n.add(_t17);
                    }
                }
                if (_d.html) {
                    if (_d.html.export) {
                        for (const [_t18, _e9] of _d.html.export.entries()){
                            o.set(_t18, _e9);
                        }
                    }
                    if (_d.html.import) {
                        Object.assign(r, _d.html.import);
                    }
                }
                if (_d.theme) {
                    a(c, _d.theme);
                }
            }
            if (Object.keys(c).length > 0) {
                t.theme = c;
            }
            if (n.size) {
                t.nodes = Array.from(n);
            }
            const g = Object.keys(r).length > 0;
            const h = o.size > 0;
            if (g || h) {
                t.html = {};
                if (g) {
                    t.html.import = r;
                }
                if (h) {
                    t.html.export = o;
                }
            }
            for (const _e0 of d){
                _e0.init(t);
            }
            if (!t.onError) {
                t.onError = l;
            }
            return t;
        };
        return x;
    })();
    exports.LexicalBuilder = _x;
    exports.buildEditorFromExtensions = function(...t) {
        return _x.fromExtensions(t).buildEditor();
    };
    exports.builderSymbol = SYMBOL_LEXICAL_EXTENSION_LEXICAL_BUILDER;
}, null);