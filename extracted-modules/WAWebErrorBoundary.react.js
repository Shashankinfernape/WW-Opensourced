__d("WAWebErrorBoundary.react", [
    "fbt",
    "WALogger",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnstyledButton.react",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c.PureComponent;
    const p = {
        paddingBottom10: {
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    const _ = {
        redBox: {
            height: "x5yr21d",
            width: "xh8yej3",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            textAlign: "x2b8uid",
            backgroundColor: "x76b9fu",
            color: "xfungia",
            pointerEvents: "x71s49j",
            flexDirection: "xdt5ytf",
            cursor: "x1ypdohk",
            $$css: true
        }
    };
    function F2(e) {
        const t = o("react-compiler-runtime").c(13);
        const { boundaryName: a, error: i } = e;
        let l;
        if (t[0] !== i) {
            l = i ?? {};
            t[0] = i;
            t[1] = l;
        } else {
            l = t[1];
        }
        const c = l.stack;
        let m;
        if (t[2] !== c) {
            m = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (c != null) {
                        yield navigator.clipboard.writeText(c);
                        o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                            msg: "Stack copied"
                        }));
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[2] = c;
            t[3] = m;
        } else {
            m = t[3];
        }
        const _ = m;
        let f;
        if (t[4] !== a) {
            f = function() {
                const e = `Uncaught render error at ${a}`;
                o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", {
                    prefilledDescription: e
                });
            };
            t[4] = a;
            t[5] = f;
        } else {
            f = t[5];
        }
        const g = f;
        const h = `Error stack from ${a}`;
        let y;
        if (t[6] !== _ || t[7] !== g || t[8] !== c) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            const Component_1 = o("WAWebButton.react").WAWebButtonSecondary;
            const Component_2 = o("WAWebButton.react").WAWebButtonSecondary;
            const Component_3 = o("WAWebFlex.react").FlexRow;
            y = c != null ? <><div className="x126k92a x1hu6azw x190qgfh xqt63rz xw2csxc x1odjw0f x889kno x2vl965 x1a8lsjc xe2zdcy"><code>{c}</code></div><div className="x889kno x1a8lsjc"><Component xstyle={p.paddingBottom10}>{s._("Check the console for more information")}</Component><Component_3 columnGap={8} justify="end" marginTop={16}><Component_1 onClick={_}>{s._("Copy error stack")}</Component_1>{r("gkx")("9092") ? <Component_2 onClick={g}>{s._("Report this bug")}</Component_2> : null}</Component_3></div></> : "No error stack found, check console";
            t[6] = _;
            t[7] = g;
            t[8] = c;
            t[9] = y;
        } else {
            y = t[9];
        }
        let C;
        if (t[10] !== h || t[11] !== y) {
            const Component = o("WAWebModal.react").Modal;
            C = <Component title={h} type={o("WAWebModal.react").ModalTheme.Multiline}>{y}</Component>;
            t[10] = h;
            t[11] = y;
            t[12] = C;
        } else {
            C = t[12];
        }
        return C;
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(5);
        const { boundaryName: n, handleClick: a } = e;
        if (!r("gkx")("26258")) {
            let i;
            if (t[0] !== n) {
                i = s._("Uncaught error at {boundaryName} [Click for more info]", [
                    s._param("boundaryName", n)
                ]);
                t[0] = n;
                t[1] = i;
            } else {
                i = t[1];
            }
            let l;
            if (t[2] !== a || t[3] !== i) {
                const Component = r("WAWebUnstyledButton.react");
                l = <Component xstyle={_.redBox} onClick={a} testid="redbox">{i}</Component>;
                t[2] = a;
                t[3] = i;
                t[4] = l;
            } else {
                l = t[4];
            }
            return l;
        }
    }
    const h = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.state = {
                error: null
            };
            e.$1 = function() {
                o("WAWebModalManager").ModalManager.open(<F2 error={e.state.error} boundaryName={e.props.name}/>);
            };
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        n.getDerivedStateFromError = function(t) {
            return {
                error: t
            };
        };
        const r = n.prototype;
        r.componentDidCatch = function(n, r) {
            const t = this.props;
            const { onError: a, sendLogs: i } = t;
            const l = i === void 0 ? true : i;
            const s = t.type;
            if (l === true) {
                if (this.props.description != null) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[ErrorBoundary][",
                        "] description: ",
                        ""
                    ])), this.props.name, this.props.description);
                }
                const c = s === "fatal" ? {
                    sendLogsType: o("WALogger").SendLogsType.EXTREMELY_BAD_USER_EXPERIENCE_SAD
                } : {};
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    "\n",
                    "\n",
                    ""
                ], [
                    "",
                    "\\n",
                    "\\n",
                    ""
                ])), n, n.stack, r.componentStack).sendLogs(`[ErrorBoundary][${this.props.name}] ${n.message}`, c).tags("error-boundary");
            }
            a?.(n);
        };
        r.render = function() {
            const t = this.state.error;
            const n = this.props.fallback;
            const R = n === void 0 ? g : n;
            if (t != null) {
                return <R boundaryName={this.props.name} error={t} handleClick={this.$1}/>;
            }
            return this.props.children ?? null;
        };
        return n;
    })(m);
    l.ErrorBoundary = h;
}, 226);