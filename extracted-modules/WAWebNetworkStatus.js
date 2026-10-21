__d("WAWebNetworkStatus", [
    "Promise",
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebBaseModel",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebNetworkGetResponseIfOnline",
    "WAWebNetworkStatusStateManager",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const url = `${o("WAWebBuildConstants").DYN_ORIGIN}status.json`;
    const h = false;
    const y = ((t)=>{
        function a(...l) {
            let a;
            a = t.call(this, ...l) || this;
            a.online = o("WAWebBaseModel").session(true);
            a.simulatedOfflineConditions = o("WAWebBaseModel").session(false);
            a.waitIfOffline = r("WAMemoizeConcurrent")(function() {
                return "all";
            }, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                if (!this.online) {
                    if (r("WAWebBrowserInfo")().name !== "Firefox" && navigator.onLine) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "waitIfOffline: XHR=offline, nav.onLine=true → resolve"
                        ])));
                        return;
                    }
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "waitIfOffline: Waiting..."
                    ])));
                    yield new (f || (f = n("Promise")))(function(e) {
                        t.listenToOnce(t, "change:online", function() {
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "waitIfOffline: Continuing..."
                            ])));
                            e();
                        });
                    });
                }
            }));
            a.checkOnline = r("WAMemoizeConcurrent")(function() {
                return "all";
            }, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "NetworkStatus:checkOnline checking"
                ])));
                if ((h || r("gkx")("26256")) && this.simulatedOfflineConditions) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline simulating offline behavior"
                    ])));
                    return;
                }
                try {
                    const e = yield r("WAWebNetworkGetResponseIfOnline")({
                        data: null,
                        method: "GET",
                        responseType: undefined,
                        url
                    });
                    this.online = !!e;
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline response ",
                        ""
                    ])), String(this.online));
                } catch (error) {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline errored! ",
                        ""
                    ])), String(error));
                }
            }));
            return babelHelpers.assertThisInitialized(a) || babelHelpers.assertThisInitialized(a);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            this.listenTo(this, "change:online", this.$NetworkStatus$p_1);
            this.$NetworkStatus$p_1();
        };
        a_prototype.$NetworkStatus$p_1 = function() {
            const online = this.online;
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] NetworkStatus ",
                ""
            ])), online ? "online" : "offline").tags("comms");
            o("WAWebNetworkStatusStateManager").networkStatusStateManager.set(online);
        };
        a_prototype.simulateNetworkStatus = function(t) {
            if (h || r("gkx")("26256")) {
                this.online = t;
                this.simulatedOfflineConditions = !t;
            }
        };
        return a;
    })(o("WAWebBaseModel").BaseModel);
    const C = o("WAWebBaseModel").defineModel(y);
    const b = new C;
    l.default = b;
}, 98);