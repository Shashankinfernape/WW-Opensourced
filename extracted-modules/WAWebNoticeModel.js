__d("WAWebNoticeModel", [
    "Promise",
    "WAAbortError",
    "WABackoffDelay",
    "WACcToIso",
    "WACustomError",
    "WALogger",
    "WAPhoneFindCC",
    "WAPromiseBackoffs",
    "WAWebBaseModel",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebHttpErrors",
    "WAWebL10N",
    "WAWebNoticeGetters",
    "WAWebPonyfillsFetch",
    "WAWebURLUtils",
    "WAWebUserNoticeErrorWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumUserNoticeErrorEvent",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isNonZeroNumber",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = "https://www.whatsapp.com/user-notice/v1/";
    const g = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "NoticeJsonParseError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const h = "whatsapp:user-notice?action=";
    const y = [
        "logout",
        "refresh"
    ];
    const delay = 720 * 60 * 1000;
    const b = 2;
    const v = o("WAPromiseBackoffs").createTimer({
        algo: {
            type: "constant",
            delay
        }
    });
    const S = 3600 * 1000;
    const R = 300 * 60 * 1000;
    const L = 8;
    const E = o("WAPromiseBackoffs").createTimer({
        algo: {
            type: "fibonacci",
            first: 0,
            second: 1
        },
        max: R
    });
    const lg = "zz";
    const lc = "ZZ";
    const T = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.noticeId = o("WAWebBaseModel").prop();
            e.blocking = o("WAWebBaseModel").prop();
            e.policyVersion = o("WAWebBaseModel").prop();
            e.banner = o("WAWebBaseModel").prop();
            e.blockingModal = o("WAWebBaseModel").prop();
            e.shouldShowButterBar = o("WAWebBaseModel").session(true);
            e.backgroundFetches = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            this.listenTo(r("WAWebL10N"), "locale_change", function() {
                e.fetchNoticeData();
            });
        };
        a_prototype.delete = function() {
            this.resetNotice();
            t.prototype.delete.call(this);
            o("WAWebNoticeGetters").clearNoticeGetterCacheFor(this);
        };
        a_prototype.sanitizeBlockingModal = function(n) {
            if (!n) {
                return null;
            }
            const t = (n)=>{
                if (!n) {
                    return null;
                }
                const n_action = n.action;
                if (n_action) {
                    const r = y.find((e)=>`${h}${e}` === n_action);
                    if (r != null) {
                        n.action = r;
                        return n;
                    }
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Notice: Unknown action type ",
                        ""
                    ])), n_action);
                }
                return null;
            };
            n.primaryButton = t(n.primaryButton);
            n.secondaryButton = t(n.secondaryButton);
            return n;
        };
        a_prototype.$Notice$p_1 = function(t) {
            const e = parseInt(t, 10);
            const n = r("WACcToIso")[e];
            return r("nullthrows")(n);
        };
        a_prototype.validateResponseFields = function(t, n) {
            t.forEach((e)=>{
                if (!(e in n)) {
                    throw r("err")(`Missing field ${e} in notice content.`);
                }
            });
        };
        a_prototype.extractBlockingModal = function(t) {
            if (t) {
                this.validateResponseFields([
                    "icon",
                    "iconDescription",
                    "title",
                    "body",
                    "primaryButton"
                ], t);
                this.validateResponseFields([
                    "light",
                    "dark"
                ], t.icon);
                return {
                    icon: {
                        light: t.icon.light,
                        dark: t.icon.dark
                    },
                    iconSvg: {
                        light: "",
                        dark: ""
                    },
                    iconDescription: t.iconDescription,
                    title: t.title,
                    body: t.body,
                    primaryButton: t.primaryButton,
                    secondaryButton: t.secondaryButton
                };
            }
        };
        a_prototype.extractBanner = function(t) {
            if (t) {
                this.validateResponseFields([
                    "icon",
                    "iconDescription",
                    "text"
                ], t);
                this.validateResponseFields([
                    "light",
                    "dark"
                ], t.icon);
                return {
                    icon: {
                        light: t.icon.light,
                        dark: t.icon.dark
                    },
                    iconDescription: t.iconDescription,
                    text: t.text,
                    iconSvg: {
                        light: "",
                        dark: ""
                    }
                };
            }
        };
        a_prototype.extractUserNoticeContent = function(t) {
            const t_policyVersion = t.policyVersion;
            if (t_policyVersion == null || t_policyVersion === "") {
                throw r("err")("Missing field policyVersion in notice content.");
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Notice:fetchNoticeData successful for policyVersion ",
                ""
            ])), t_policyVersion);
            const n = t.banner && this.extractBanner(t.banner);
            const a = t["blocking-modal"] && this.extractBlockingModal(t["blocking-modal"]);
            const i = a && this.sanitizeBlockingModal(a);
            this.set({
                policyVersion: t_policyVersion,
                blockingModal: i,
                banner: n
            });
            this.makeIconFetch(n, i);
        };
        a_prototype.resetBackgroundFetches = function() {
            const backgroundFetches = this.backgroundFetches;
            if (backgroundFetches != null && backgroundFetches.length > 0) {
                backgroundFetches.forEach((e)=>{
                    e.abort();
                });
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Notice: aborting ",
                    " fetches"
                ])), backgroundFetches.length);
            }
        };
        a_prototype.resetNotice = function() {
            this.resetBackgroundFetches();
            this.unset([
                "banner",
                "blocking",
                "blockingModal",
                "noticeId",
                "policyVersion"
            ]);
            this.shouldShowButterBar = true;
        };
        a_prototype.fetchNoticeData = function() {
            if (o("isNonZeroNumber").isNonZeroNumber(this.noticeId)) {
                this.resetBackgroundFetches();
                this.set({
                    blockingModal: undefined,
                    banner: undefined
                });
                const e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                if (!e) {
                    return;
                }
                const t = o("WAPhoneFindCC").findCC(e.user);
                const cc = this.$Notice$p_1(t);
                const a = r("WAWebURLUtils").build(f, {
                    id: this.noticeId,
                    lg,
                    lc,
                    cc,
                    platform: o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ? "smbweb" : "web"
                });
                this.makeContentFetch(a);
            }
        };
        a_prototype.makeContentFetch = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    const t = yield this.attemptFirstFetchAndRetriesAfter(e);
                    try {
                        const n = t != null && t !== "" ? JSON.parse(t) : null;
                        if (n) {
                            this.extractUserNoticeContent(n);
                        }
                    } catch (e) {
                        const a = new (o("WAWebUserNoticeErrorWamEvent")).UserNoticeErrorWamEvent({
                            userNoticeId: this.noticeId,
                            userNoticeContentVersion: this.policyVersion,
                            userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent").USER_NOTICE_ERROR_EVENT.JSON_PARSE
                        });
                        a.commit();
                        throw new g(`Received invalid User Notice content for id ${this.noticeId}`);
                    }
                } catch (error) {
                    const i = r("getErrorSafe")(error);
                    if (i.name === o("WAAbortError").ABORT_ERROR) {
                        return;
                    }
                    if (i.name !== "NoticeJsonParseError") {
                        const l = new (o("WAWebUserNoticeErrorWamEvent")).UserNoticeErrorWamEvent({
                            userNoticeId: this.noticeId,
                            userNoticeContentVersion: this.policyVersion,
                            userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent").USER_NOTICE_ERROR_EVENT.JSON_FETCH
                        });
                        l.commit();
                    }
                    this.resetNotice();
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Notice: Error Message"
                    ]))).catching(i).sendLogs("notice-content-error");
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.makeIconFetch = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = this;
                const i = [
                    e?.icon.light,
                    e?.icon.dark,
                    t?.icon.light,
                    t?.icon.dark
                ];
                const l = i.map((e)=>{
                    if (e != null && e !== "") {
                        return a.attemptFirstFetchAndRetriesAfter(e);
                    }
                    return (_ || (_ = n("Promise"))).resolve(null);
                });
                try {
                    const s = yield (_ || (_ = n("Promise"))).all(l);
                    const u = s[0];
                    const c = s[1];
                    const m = s[2];
                    const p = s[3];
                    let f = this.banner;
                    let g = this.blockingModal;
                    if (this.banner && u && c) {
                        f = babelHelpers.extends({}, this.banner, {
                            iconSvg: {
                                light: u,
                                dark: c
                            }
                        });
                    }
                    if (this.blockingModal && m && p) {
                        g = babelHelpers.extends({}, this.blockingModal, {
                            iconSvg: {
                                light: m,
                                dark: p
                            }
                        });
                    }
                    this.set({
                        banner: f,
                        blockingModal: g
                    });
                } catch (error) {
                    const h = r("getErrorSafe")(error);
                    if (h.name === o("WAAbortError").ABORT_ERROR) {
                        return;
                    }
                    const y = new (o("WAWebUserNoticeErrorWamEvent")).UserNoticeErrorWamEvent({
                        userNoticeId: this.noticeId,
                        userNoticeContentVersion: this.policyVersion,
                        userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent").USER_NOTICE_ERROR_EVENT.IMAGE_FETCH
                    });
                    y.commit();
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Notice: Icon fetch error"
                    ]))).catching(h).sendLogs("notice-icon-fetch-error");
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.shouldRetry = function(t) {
            return t === 404 || t === 429 || t >= 500;
        };
        a_prototype.attemptFirstFetchAndRetriesAfter = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = new AbortController;
                const n_signal = n.signal;
                const i = this.backgroundFetches ?? [];
                this.backgroundFetches = [].concat(i, [
                    n
                ]);
                try {
                    const l = yield r("WAWebPonyfillsFetch")(e, {
                        signal: n_signal
                    });
                    if (!l.ok) {
                        const s = l.status;
                        throw this.shouldRetry(s) ? new (o("WAWebHttpErrors")).HttpStatusCodeError(s, "noticeFetchErr") : r("err")("contentResponseUnhandledError");
                    }
                    return l.text();
                } catch (error) {
                    if (error instanceof o("WAWebHttpErrors").HttpStatusCodeError) {
                        return this.retryFetch(e, error.status);
                    }
                    throw error;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.retryFetch = function(t, a) {
            const i = this;
            const l = new AbortController;
            const l_signal = l.signal;
            const u = this.backgroundFetches ?? [];
            this.backgroundFetches = [].concat(u, [
                l
            ]);
            const c = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Notice: Fetch Retry attempt"
                    ])));
                    const n = yield r("WAWebPonyfillsFetch")(t, {
                        signal: l_signal
                    });
                    if (!n.ok) {
                        o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "Notice: Could Not download"
                        ])));
                        if (i.shouldRetry(n.status)) {
                            return e(r("err")("retryFailed"));
                        }
                        throw r("err")("contentResponseUnhandledError");
                    }
                    return n.text();
                });
                return function(n) {
                    return e.apply(this, arguments);
                };
            })();
            let delay_1;
            let _;
            if (a === 404) {
                _ = b;
                delay_1 = function({ taskDuration }) {
                    const n = v();
                    return Math.max(n - taskDuration, 0);
                };
            } else {
                _ = L;
                delay_1 = function({ taskDuration }) {
                    const n = S * E();
                    return Math.max(n - taskDuration, 0);
                };
            }
            return o("WABackoffDelay").backoff({
                delay: delay_1,
                retries: _,
                signal: l_signal
            }, c);
        };
        return a;
    })(o("WAWebBaseModel").BaseModel);
    T.Proxy = "notice";
    const D = o("WAWebBaseModel").defineModel(T);
    const x = new D({
        id: "default_notice_id"
    });
    l.default = x;
}, 98);