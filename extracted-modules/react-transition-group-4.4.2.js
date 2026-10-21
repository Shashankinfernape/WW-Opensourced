__d("react-transition-group-4.4.2", [
    "prop-types-15.7.2",
    "dom-helpers-5.2.0",
    "react-0.0.0",
    "react-dom-0.0.0",
    "shallowEqual"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("prop-types-15.7.2");
    const l = n("dom-helpers-5.2.0");
    const s = n("react-0.0.0");
    const u = n("react-dom-0.0.0");
    const c = n("shallowEqual");
    const d = {};
    const m = {
        exports: d
    };
    function p() {
        d.__esModule = true;
        d.default = void 0;
        const e = {
            disabled: false
        };
        d.default = e;
        m.exports = d.default;
    }
    let _ = false;
    function f() {
        if (!_) {
            _ = true;
            p();
        }
        return m.exports;
    }
    const g = {};
    const h = {
        exports: g
    };
    function y() {
        g.__esModule = true;
        g.classNamesShape = g.timeoutsShape = void 0;
        t(e());
        function t(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        const n = null;
        g.timeoutsShape = n;
        const r = null;
        g.classNamesShape = r;
    }
    let C = false;
    function b() {
        if (!C) {
            C = true;
            y();
        }
        return h.exports;
    }
    const v = {};
    const S = {
        exports: v
    };
    function R() {
        v.__esModule = true;
        v.default = void 0;
        const e = t(s());
        function t(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        const n = e.default.createContext(null);
        v.default = n;
        S.exports = v.default;
    }
    let L = false;
    function E() {
        if (!L) {
            L = true;
            R();
        }
        return S.exports;
    }
    const k = {};
    const I = {
        exports: k
    };
    function T() {
        k.__esModule = true;
        k.default = k.EXITING = k.ENTERED = k.ENTERING = k.EXITED = k.UNMOUNTED = void 0;
        a(e());
        const t = a(s());
        const n = a(u());
        const r = a(f());
        b();
        const o = a(E());
        function a(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        function i(e, t) {
            if (e == null) {
                return {};
            }
            const n = {};
            const r = Object.keys(e);
            let o;
            let a;
            for(a = 0; a < r.length; a++){
                o = r[a];
                if (!(t.indexOf(o) >= 0)) {
                    n[o] = e[o];
                }
            }
            return n;
        }
        function l(e, t) {
            e.prototype = Object.create(t.prototype);
            e.prototype.constructor = e;
            e.__proto__ = t;
        }
        const d = "unmounted";
        k.UNMOUNTED = d;
        const m = "exited";
        k.EXITED = m;
        const p = "entering";
        k.ENTERING = p;
        const _ = "entered";
        k.ENTERED = _;
        const g = "exiting";
        k.EXITING = g;
        const h = ((e)=>{
            l(a, e);
            function a(t, n) {
                let r;
                r = e.call(this, t, n) || this;
                const o = n;
                const a = o && !o.isMounting ? t.enter : t.appear;
                let i;
                r.appearStatus = null;
                if (t.in) {
                    if (a) {
                        i = m;
                        r.appearStatus = p;
                    } else {
                        i = _;
                    }
                } else if (t.unmountOnExit || t.mountOnEnter) {
                    i = d;
                } else {
                    i = m;
                }
                r.state = {
                    status: i
                };
                r.nextCallback = null;
                return r;
            }
            a.getDerivedStateFromProps = function({ in: e }, n) {
                if (e && n.status === d) {
                    return {
                        status: m
                    };
                }
                return null;
            };
            const s = a.prototype;
            s.componentDidMount = function() {
                this.updateStatus(true, this.appearStatus);
            };
            s.componentDidUpdate = function(t) {
                let e = null;
                if (!c(this.props, t)) {
                    const n = this.state.status;
                    if (this.props.in) {
                        if (n !== p && n !== _) {
                            e = p;
                        }
                    } else if (n === p || n === _) {
                        e = g;
                    }
                }
                this.updateStatus(false, e);
            };
            s.componentWillUnmount = function() {
                this.cancelNextCallback();
            };
            s.getTimeouts = function() {
                const e = this.props.timeout;
                let t;
                let n;
                let r;
                r = e;
                n = e;
                t = e;
                if (e != null && typeof e !== "number") {
                    t = e.exit;
                    n = e.enter;
                    r = e.appear !== void 0 ? e.appear : n;
                }
                return {
                    exit: t,
                    enter: n,
                    appear: r
                };
            };
            s.updateStatus = function(t = false, n) {
                if (n !== null) {
                    this.cancelNextCallback();
                    if (n === p) {
                        this.performEnter(t);
                    } else {
                        this.performExit();
                    }
                } else if (this.props.unmountOnExit && this.state.status === m) {
                    this.setState({
                        status: d
                    });
                }
            };
            s.performEnter = function(t) {
                const e = this;
                const o = this.props.enter;
                const a = this.context ? this.context.isMounting : t;
                const i = this.props.nodeRef ? [
                    a
                ] : [
                    n.default.findDOMNode(this),
                    a
                ];
                const l = i[0];
                const s = i[1];
                const u = this.getTimeouts();
                const c = a ? u.appear : u.enter;
                if (!t && !o || r.default.disabled) {
                    this.safeSetState({
                        status: _
                    }, function() {
                        e.props.onEntered(l);
                    });
                    return;
                }
                this.props.onEnter(l, s);
                this.safeSetState({
                    status: p
                }, function() {
                    e.props.onEntering(l, s);
                    e.onTransitionEnd(c, function() {
                        e.safeSetState({
                            status: _
                        }, function() {
                            e.props.onEntered(l, s);
                        });
                    });
                });
            };
            s.performExit = function() {
                const e = this;
                const t = this.props.exit;
                const o = this.getTimeouts();
                const a = this.props.nodeRef ? void 0 : n.default.findDOMNode(this);
                if (!t || r.default.disabled) {
                    this.safeSetState({
                        status: m
                    }, function() {
                        e.props.onExited(a);
                    });
                    return;
                }
                this.props.onExit(a);
                this.safeSetState({
                    status: g
                }, function() {
                    e.props.onExiting(a);
                    e.onTransitionEnd(o.exit, function() {
                        e.safeSetState({
                            status: m
                        }, function() {
                            e.props.onExited(a);
                        });
                    });
                });
            };
            s.cancelNextCallback = function() {
                if (this.nextCallback !== null) {
                    this.nextCallback.cancel();
                    this.nextCallback = null;
                }
            };
            s.safeSetState = function(t, n) {
                n = this.setNextCallback(n);
                this.setState(t, n);
            };
            s.setNextCallback = function(t) {
                const e = this;
                let n = true;
                this.nextCallback = function(r) {
                    if (n) {
                        n = false;
                        e.nextCallback = null;
                        t(r);
                    }
                };
                this.nextCallback.cancel = function() {
                    n = false;
                };
                return this.nextCallback;
            };
            s.onTransitionEnd = function(t, r) {
                this.setNextCallback(r);
                const e = this.props.nodeRef ? this.props.nodeRef.current : n.default.findDOMNode(this);
                const o = t == null && !this.props.addEndListener;
                if (!e || o) {
                    setTimeout(this.nextCallback, 0);
                    return;
                }
                if (this.props.addEndListener) {
                    const a = this.props.nodeRef ? [
                        this.nextCallback
                    ] : [
                        e,
                        this.nextCallback
                    ];
                    const i = a[0];
                    const l = a[1];
                    this.props.addEndListener(i, l);
                }
                if (t != null) {
                    setTimeout(this.nextCallback, t);
                }
            };
            s.render = function() {
                const e = this.state.status;
                if (e === d) {
                    return null;
                }
                const n = this.props;
                const r = n.children;
                n.in;
                n.mountOnEnter;
                n.unmountOnExit;
                n.appear;
                n.enter;
                n.exit;
                n.timeout;
                n.addEndListener;
                n.onEnter;
                n.onEntering;
                n.onEntered;
                n.onExit;
                n.onExiting;
                n.onExited;
                n.nodeRef;
                const a = i(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef"
                ]);
                return t.default.createElement(o.default.Provider, {
                    value: null
                }, typeof r === "function" ? r(e, a) : t.default.cloneElement(t.default.Children.only(r), a));
            };
            return a;
        })(t.default.Component);
        h.contextType = o.default;
        h.propTypes = {};
        function y() {}
        h.defaultProps = {
            in: false,
            mountOnEnter: false,
            unmountOnExit: false,
            appear: false,
            enter: true,
            exit: true,
            onEnter: y,
            onEntering: y,
            onEntered: y,
            onExit: y,
            onExiting: y,
            onExited: y
        };
        h.UNMOUNTED = d;
        h.EXITED = m;
        h.ENTERING = p;
        h.ENTERED = _;
        h.EXITING = g;
        k.default = h;
    }
    let D = false;
    function x() {
        if (!D) {
            D = true;
            T();
        }
        return I.exports;
    }
    const $ = {};
    const P = {
        exports: $
    };
    function N() {
        $.__esModule = true;
        $.default = void 0;
        a(e());
        const t = a(l("/class/addClass"));
        const n = a(l("/class/removeClass"));
        const r = a(s());
        const o = a(x());
        b();
        function a(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        function i() {
            i = Object.assign || function(e) {
                for(let t = 1; t < arguments.length; t++){
                    const n = arguments[t];
                    for(const r in n){
                        if (Object.prototype.hasOwnProperty.call(n, r)) {
                            e[r] = n[r];
                        }
                    }
                }
                return e;
            };
            return i.apply(this, arguments);
        }
        function u(e, t) {
            if (e == null) {
                return {};
            }
            const n = {};
            const r = Object.keys(e);
            let o;
            let a;
            for(a = 0; a < r.length; a++){
                o = r[a];
                if (!(t.indexOf(o) >= 0)) {
                    n[o] = e[o];
                }
            }
            return n;
        }
        function c(e, t) {
            e.prototype = Object.create(t.prototype);
            e.prototype.constructor = e;
            e.__proto__ = t;
        }
        const d = function(n, r) {
            return n && r && r.split(" ").forEach((e)=>t.default(n, e));
        };
        const m = function(t, r) {
            return t && r && r.split(" ").forEach((e)=>n.default(t, e));
        };
        const p = ((e)=>{
            c(t, e);
            function t(...r_1) {
                let t;
                t = e.call(this, ...r_1) || this;
                t.appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                };
                t.onEnter = function(e, n) {
                    const r = t.resolveArguments(e, n);
                    const o = r[0];
                    const a = r[1];
                    t.removeClasses(o, "exit");
                    t.addClass(o, a ? "appear" : "enter", "base");
                    if (t.props.onEnter) {
                        t.props.onEnter(e, n);
                    }
                };
                t.onEntering = function(e, n) {
                    const r = t.resolveArguments(e, n);
                    const o = r[0];
                    const a = r[1];
                    const i = a ? "appear" : "enter";
                    t.addClass(o, i, "active");
                    if (t.props.onEntering) {
                        t.props.onEntering(e, n);
                    }
                };
                t.onEntered = function(e, n) {
                    const r = t.resolveArguments(e, n);
                    const o = r[0];
                    const a = r[1];
                    const i = a ? "appear" : "enter";
                    t.removeClasses(o, i);
                    t.addClass(o, i, "done");
                    if (t.props.onEntered) {
                        t.props.onEntered(e, n);
                    }
                };
                t.onExit = function(e) {
                    const n = t.resolveArguments(e);
                    const r = n[0];
                    t.removeClasses(r, "appear");
                    t.removeClasses(r, "enter");
                    t.addClass(r, "exit", "base");
                    if (t.props.onExit) {
                        t.props.onExit(e);
                    }
                };
                t.onExiting = function(e) {
                    const n = t.resolveArguments(e);
                    const r = n[0];
                    t.addClass(r, "exit", "active");
                    if (t.props.onExiting) {
                        t.props.onExiting(e);
                    }
                };
                t.onExited = function(e) {
                    const n = t.resolveArguments(e);
                    const r = n[0];
                    t.removeClasses(r, "exit");
                    t.addClass(r, "exit", "done");
                    if (t.props.onExited) {
                        t.props.onExited(e);
                    }
                };
                t.resolveArguments = function(e, n) {
                    if (t.props.nodeRef) {
                        return [
                            t.props.nodeRef.current,
                            e
                        ];
                    }
                    return [
                        e,
                        n
                    ];
                };
                t.getClassNames = function(e) {
                    const n = t.props.classNames;
                    const r = typeof n === "string";
                    const o = r && n ? `${n}-` : "";
                    const a = r ? `${o}${e}` : n[e];
                    const i = r ? `${a}-active` : n[`${e}Active`];
                    const l = r ? `${a}-done` : n[`${e}Done`];
                    return {
                        baseClassName: a,
                        activeClassName: i,
                        doneClassName: l
                    };
                };
                return t;
            }
            const n = t.prototype;
            n.addClass = function(t, n, r) {
                let e = this.getClassNames(n)[`${r}ClassName`];
                const o = this.getClassNames("enter");
                const a = o.doneClassName;
                if (n === "appear" && r === "done" && a) {
                    e += ` ${a}`;
                }
                r === "active" && t && t.scrollTop;
                if (e) {
                    this.appliedClasses[n][r] = e;
                    d(t, e);
                }
            };
            n.removeClasses = function(t, n) {
                const e = this.appliedClasses[n];
                const { base: r, active: o, done: a } = e;
                this.appliedClasses[n] = {};
                if (r) {
                    m(t, r);
                }
                if (o) {
                    m(t, o);
                }
                if (a) {
                    m(t, a);
                }
            };
            n.render = function() {
                const e = this.props;
                e.classNames;
                const t = u(e, [
                    "classNames"
                ]);
                return r.default.createElement(o.default, i({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }));
            };
            return t;
        })(r.default.Component);
        p.defaultProps = {
            classNames: ""
        };
        p.propTypes = {};
        $.default = p;
        P.exports = $.default;
    }
    let M = false;
    function w() {
        if (!M) {
            M = true;
            N();
        }
        return P.exports;
    }
    const A = {};
    const F = {
        exports: A
    };
    function O() {
        A.__esModule = true;
        A.getChildMapping = t;
        A.mergeChildMappings = n;
        A.getInitialChildMapping = o;
        A.getNextChildMapping = a;
        var e = s();
        function t(t, n) {
            const r = function(r) {
                if (n && e.isValidElement(r)) {
                    return n(r);
                }
                return r;
            };
            const o = Object.create(null);
            if (t) {
                e.Children.map(t, function(e) {
                    return e;
                }).forEach((e)=>{
                    o[e.key] = r(e);
                });
            }
            return o;
        }
        function n(e, t) {
            e = e || {};
            t = t || {};
            function n(n) {
                if (n in t) {
                    return t[n];
                }
                return e[n];
            }
            const r = Object.create(null);
            let o = [];
            for(const a in e){
                if (a in t) {
                    if (o.length) {
                        r[a] = o;
                        o = [];
                    }
                } else {
                    o.push(a);
                }
            }
            let i;
            const l = {};
            for(const s in t){
                if (r[s]) {
                    for(i = 0; i < r[s].length; i++){
                        const u = r[s][i];
                        l[r[s][i]] = n(u);
                    }
                }
                l[s] = n(s);
            }
            for(i = 0; i < o.length; i++){
                l[o[i]] = n(o[i]);
            }
            return l;
        }
        function r(e, t, n) {
            return n[t] ?? e.props[t];
        }
        function o(n, o) {
            return t(n.children, function(t) {
                return e.cloneElement(t, {
                    onExited: o.bind(null, t),
                    in: true,
                    appear: r(t, "appear", n),
                    enter: r(t, "enter", n),
                    exit: r(t, "exit", n)
                });
            });
        }
        function a(o, a, i) {
            const l = t(o.children);
            const s = n(a, l);
            Object.keys(s).forEach((t)=>{
                const n = s[t];
                if (e.isValidElement(n)) {
                    const u = t in a;
                    const c = t in l;
                    const d = a[t];
                    const m = e.isValidElement(d) && !d.props.in;
                    if (c && (!u || m)) {
                        s[t] = e.cloneElement(n, {
                            onExited: i.bind(null, n),
                            in: true,
                            exit: r(n, "exit", o),
                            enter: r(n, "enter", o)
                        });
                    } else if (!c && u && !m) {
                        s[t] = e.cloneElement(n, {
                            in: false
                        });
                    } else if (c && u && e.isValidElement(d)) {
                        s[t] = e.cloneElement(n, {
                            onExited: i.bind(null, n),
                            in: d.props.in,
                            exit: r(n, "exit", o),
                            enter: r(n, "enter", o)
                        });
                    }
                }
            });
            return s;
        }
    }
    let B = false;
    function W() {
        if (!B) {
            B = true;
            O();
        }
        return F.exports;
    }
    const q = {};
    const U = {
        exports: q
    };
    function V() {
        q.__esModule = true;
        q.default = void 0;
        o(e());
        const t = o(s());
        const n = o(E());
        const r = W();
        function o(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        function a(e, t) {
            if (e == null) {
                return {};
            }
            const n = {};
            const r = Object.keys(e);
            let o;
            let a;
            for(a = 0; a < r.length; a++){
                o = r[a];
                if (!(t.indexOf(o) >= 0)) {
                    n[o] = e[o];
                }
            }
            return n;
        }
        function i() {
            i = Object.assign || function(e) {
                for(let t = 1; t < arguments.length; t++){
                    const n = arguments[t];
                    for(const r in n){
                        if (Object.prototype.hasOwnProperty.call(n, r)) {
                            e[r] = n[r];
                        }
                    }
                }
                return e;
            };
            return i.apply(this, arguments);
        }
        function l(e) {
            if (e === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        }
        function u(e, t) {
            e.prototype = Object.create(t.prototype);
            e.prototype.constructor = e;
            e.__proto__ = t;
        }
        const c = Object.values || function(e) {
            return Object.keys(e).map((t)=>e[t]);
        };
        const d = {
            component: "div",
            childFactory: function(t) {
                return t;
            }
        };
        const m = ((e)=>{
            u(o, e);
            function o(t, n) {
                let r;
                r = e.call(this, t, n) || this;
                const o = r.handleExited.bind(l(r));
                r.state = {
                    contextValue: {
                        isMounting: true
                    },
                    handleExited: o,
                    firstRender: true
                };
                return r;
            }
            const s = o.prototype;
            s.componentDidMount = function() {
                this.mounted = true;
                this.setState({
                    contextValue: {
                        isMounting: false
                    }
                });
            };
            s.componentWillUnmount = function() {
                this.mounted = false;
            };
            o.getDerivedStateFromProps = function(t, { children: e, handleExited: o, firstRender: a }) {
                return {
                    children: a ? r.getInitialChildMapping(t, o) : r.getNextChildMapping(t, e, o),
                    firstRender: false
                };
            };
            s.handleExited = function(t, n) {
                const e = r.getChildMapping(this.props.children);
                if (!(t.key in e)) {
                    if (t.props.onExited) {
                        t.props.onExited(n);
                    }
                    if (this.mounted) {
                        this.setState(function(e) {
                            const n = i({}, e.children);
                            delete n[t.key];
                            return {
                                children: n
                            };
                        });
                    }
                }
            };
            s.render = function() {
                const e = this.props;
                const { component: r, childFactory: o } = e;
                const i = a(e, [
                    "component",
                    "childFactory"
                ]);
                const l = this.state.contextValue;
                const s = c(this.state.children).map(o);
                delete i.appear;
                delete i.enter;
                delete i.exit;
                if (r === null) {
                    return t.default.createElement(n.default.Provider, {
                        value: l
                    }, s);
                }
                return t.default.createElement(n.default.Provider, {
                    value: l
                }, t.default.createElement(r, i, s));
            };
            return o;
        })(t.default.Component);
        m.propTypes = {};
        m.defaultProps = d;
        q.default = m;
        U.exports = q.default;
    }
    let H = false;
    function G() {
        if (!H) {
            H = true;
            V();
        }
        return U.exports;
    }
    const z = {};
    const j = {
        exports: z
    };
    function K() {
        z.__esModule = true;
        z.default = void 0;
        o(e());
        const t = o(s());
        const n = o(u());
        const r = o(G());
        function o(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        function a(e, t) {
            if (e == null) {
                return {};
            }
            const n = {};
            const r = Object.keys(e);
            let o;
            let a;
            for(a = 0; a < r.length; a++){
                o = r[a];
                if (!(t.indexOf(o) >= 0)) {
                    n[o] = e[o];
                }
            }
            return n;
        }
        function i(e, t) {
            e.prototype = Object.create(t.prototype);
            e.prototype.constructor = e;
            e.__proto__ = t;
        }
        const l = ((e)=>{
            i(o, e);
            function o(...r) {
                let t;
                t = e.call(this, ...r) || this;
                t.handleEnter = function(...n) {
                    return t.handleLifecycle("onEnter", 0, n);
                };
                t.handleEntering = function(...n) {
                    return t.handleLifecycle("onEntering", 0, n);
                };
                t.handleEntered = function(...n) {
                    return t.handleLifecycle("onEntered", 0, n);
                };
                t.handleExit = function(...n) {
                    return t.handleLifecycle("onExit", 1, n);
                };
                t.handleExiting = function(...n) {
                    return t.handleLifecycle("onExiting", 1, n);
                };
                t.handleExited = function(...n) {
                    return t.handleLifecycle("onExited", 1, n);
                };
                return t;
            }
            const l = o.prototype;
            l.handleLifecycle = function(r, o, a) {
                const i = this.props.children;
                const l = t.default.Children.toArray(i)[o];
                if (l.props[r]) {
                    l.props[r](...a);
                }
                if (this.props[r]) {
                    const s = l.props.nodeRef ? void 0 : n.default.findDOMNode(this);
                    this.props[r](s);
                }
            };
            l.render = function() {
                const e = this.props;
                const { children: n, in: o } = e;
                const i = a(e, [
                    "children",
                    "in"
                ]);
                const l = t.default.Children.toArray(n);
                const s = l[0];
                const u = l[1];
                delete i.onEnter;
                delete i.onEntering;
                delete i.onEntered;
                delete i.onExit;
                delete i.onExiting;
                delete i.onExited;
                return t.default.createElement(r.default, i, o ? t.default.cloneElement(s, {
                    key: "first",
                    onEnter: this.handleEnter,
                    onEntering: this.handleEntering,
                    onEntered: this.handleEntered
                }) : t.default.cloneElement(u, {
                    key: "second",
                    onEnter: this.handleExit,
                    onEntering: this.handleExiting,
                    onEntered: this.handleExited
                }));
            };
            return o;
        })(t.default.Component);
        l.propTypes = {};
        z.default = l;
        j.exports = z.default;
    }
    let Q = false;
    function X() {
        if (!Q) {
            Q = true;
            K();
        }
        return j.exports;
    }
    const Y = {};
    const J = {
        exports: Y
    };
    function Z() {
        Y.__esModule = true;
        Y.default = Y.modes = void 0;
        const t = i(s());
        i(e());
        const n = x();
        const r = i(E());
        function i(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        function l(e, t) {
            e.prototype = Object.create(t.prototype);
            e.prototype.constructor = e;
            e.__proto__ = t;
        }
        function u(e, n) {
            return !(e === n || t.default.isValidElement(e) && t.default.isValidElement(n) && e.key != null && e.key === n.key);
        }
        const c = {
            out: "out-in",
            in: "in-out"
        };
        Y.modes = c;
        const d = function(t, n, r) {
            return function() {
                if (t.props[n]) {
                    t.props[n](...arguments);
                }
                r();
            };
        };
        const m = {
            [c.out]: function({ current: r, changeState: o }) {
                return t.default.cloneElement(r, {
                    in: false,
                    onExited: d(r, "onExited", function() {
                        o(n.ENTERING, null);
                    })
                });
            },
            [c.in]: function({ current: r, changeState: o, children: a }) {
                return [
                    r,
                    t.default.cloneElement(a, {
                        in: true,
                        onEntered: d(a, "onEntered", function() {
                            o(n.ENTERING);
                        })
                    })
                ];
            }
        };
        const p = {
            [c.out]: function({ children: r, changeState: o }) {
                return t.default.cloneElement(r, {
                    in: true,
                    onEntered: d(r, "onEntered", function() {
                        o(n.ENTERED, t.default.cloneElement(r, {
                            in: true
                        }));
                    })
                });
            },
            [c.in]: function({ current: r, children: o, changeState: a }) {
                return [
                    t.default.cloneElement(r, {
                        in: false,
                        onExited: d(r, "onExited", function() {
                            a(n.ENTERED, t.default.cloneElement(o, {
                                in: true
                            }));
                        })
                    }),
                    t.default.cloneElement(o, {
                        in: true
                    })
                ];
            }
        };
        const _ = ((e)=>{
            l(o, e);
            function o(...o) {
                let t;
                t = e.call(this, ...o) || this;
                t.state = {
                    status: n.ENTERED,
                    current: null
                };
                t.appeared = false;
                t.changeState = function(e, n = t.state.current) {
                    t.setState({
                        status: e,
                        current: n
                    });
                };
                return t;
            }
            const a = o.prototype;
            a.componentDidMount = function() {
                this.appeared = true;
            };
            o.getDerivedStateFromProps = function(r, o) {
                if (r.children == null) {
                    return {
                        current: null
                    };
                }
                if (o.status === n.ENTERING && r.mode === c.in) {
                    return {
                        status: n.ENTERING
                    };
                }
                if (o.current && u(o.current, r.children)) {
                    return {
                        status: n.EXITING
                    };
                }
                return {
                    current: t.default.cloneElement(r.children, {
                        in: true
                    })
                };
            };
            a.render = function() {
                const e = this.props;
                const { children: o, mode: a } = e;
                const i = this.state;
                const { status: l, current: s } = i;
                const u = {
                    children: o,
                    current: s,
                    changeState: this.changeState,
                    status: l
                };
                let c;
                switch(l){
                    case n.ENTERING:
                        c = p[a](u);
                        break;
                    case n.EXITING:
                        c = m[a](u);
                        break;
                    case n.ENTERED:
                        c = s;
                }
                return t.default.createElement(r.default.Provider, {
                    value: {
                        isMounting: !this.appeared
                    }
                }, c);
            };
            return o;
        })(t.default.Component);
        _.propTypes = {};
        _.defaultProps = {
            mode: c.out
        };
        Y.default = _;
    }
    let ee = false;
    function te() {
        if (!ee) {
            ee = true;
            Z();
        }
        return J.exports;
    }
    const ne = {};
    const re = {
        exports: ne
    };
    function oe() {
        ne.__esModule = true;
        ne.config = ne.Transition = ne.TransitionGroup = ne.SwitchTransition = ne.ReplaceTransition = ne.CSSTransition = void 0;
        const e = i(w());
        ne.CSSTransition = e.default;
        const t = i(X());
        ne.ReplaceTransition = t.default;
        const n = i(te());
        ne.SwitchTransition = n.default;
        const r = i(G());
        ne.TransitionGroup = r.default;
        const o = i(x());
        ne.Transition = o.default;
        const a = i(f());
        ne.config = a.default;
        function i(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
    }
    let ae = false;
    function ie() {
        if (!ae) {
            ae = true;
            oe();
        }
        return re.exports;
    }
    function le(e) {
        switch(e){
            case void 0:
                return ie();
            case "/Transition":
                return x();
        }
    }
    a.exports = le;
}, null);