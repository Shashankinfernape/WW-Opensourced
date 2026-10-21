__d("WAWebCrashlog", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAThrottle",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebBrokerGlobalAppState",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebCrashContextUtils",
    "WAWebCrashLogWamEvent",
    "WAWebCrashlogConstants",
    "WAWebCrashlogUserAgent",
    "WAWebCurrentUser",
    "WAWebEnvironment",
    "WAWebGlobals",
    "WAWebLogLineSanitizer",
    "WAWebLoggerImpl",
    "WAWebLoggerOptimizer",
    "WAWebLoggerUtils",
    "WAWebPriorLogs",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashType",
    "WAWebWamEnumLogType",
    "WAWebWebcMinorEventLogWamEvent",
    "asyncToGeneratorRuntime",
    "cr:17160",
    "cr:4722",
    "err",
    "gkx",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    const U = (t)=>new (q || (q = n("Promise")))(function(e) {
            return self.setTimeout(e, t);
        });
    let V;
    let H;
    let G;
    let z;
    const j = n("$InternalEnum")({
        CRASHLOG: "crashlog",
        SUPPORT: "support"
    });
    const K = "server-requested";
    const Q = "manual-upload";
    const X = "user-report";
    const Y = n("$InternalEnum")({
        ONLY_EXCEPTION: "only_exception"
    });
    const J = 100;
    const Z = new Map;
    const ee = {
        shouldHitCheckEndpoint: (W = o("WAWebBoolFunc")).returnFalse,
        expectedCodes: [],
        appendToFormDataForCheck: function(t) {},
        appendToFormDataForUpload: function(t, n) {},
        shouldUseLightWeightLogs: W.returnFalse
    };
    const te = {
        shouldHitCheckEndpoint: W.returnTrue,
        expectedCodes: [
            200,
            403
        ],
        appendToFormDataForCheck: function(t, n) {
            t.append("reason", n);
        },
        appendToFormDataForUpload: function(t, n) {},
        shouldUseLightWeightLogs: W.returnFalse
    };
    const ne = {
        shouldHitCheckEndpoint: W.returnTrue,
        expectedCodes: [
            200,
            403
        ],
        appendToFormDataForCheck: function(t, n) {
            t.append("support_exception_only_upload", "true");
            t.append("reason", n);
        },
        appendToFormDataForUpload: function(t, n) {
            if (n && n.upload === Y.ONLY_EXCEPTION) {
                t.append("exception_only_upload", "true");
            }
        },
        shouldUseLightWeightLogs: function(t) {
            if (t) {
                return t.upload === Y.ONLY_EXCEPTION;
            }
            return false;
        }
    };
    function re(sendLogsType) {
        if (sendLogsType === o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION || sendLogsType === o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION_SAD) {
            return [
                "uncaught_error"
            ];
        }
        if (sendLogsType === o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE || sendLogsType === o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE_SAD) {
            return [
                "unhandled_promise"
            ];
        }
        if (sendLogsType === o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD) {
            return [
                "logout"
            ];
        }
        if (sendLogsType === o("WALogger").SendLogsType.CRASH_OR_UNRECOVERABLE_ERROR_SAD || sendLogsType === o("WALogger").SendLogsType.PERFORMANCE_OBSERVER_LONGTASK_SAD || sendLogsType === o("WALogger").SendLogsType.UNCATEGORIZED_SAD || sendLogsType === o("WALogger").SendLogsType.EXTREMELY_BAD_USER_EXPERIENCE_SAD || sendLogsType === o("WALogger").SendLogsType.MINOR_ISSUE || sendLogsType === o("WALogger").SendLogsType.INVESTIGATION || sendLogsType === o("WALogger").SendLogsType.COUNTING_STAT || sendLogsType === o("WALogger").SendLogsType.UNCATEGORIZED) {
            return [];
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${sendLogsType}`);
        })();
    }
    function oe(e) {
        const t = [];
        if (e.voipActivity != null) {
            t.push(`voip_activity:${e.voipActivity}`);
        }
        if (e.voipActivityTimestampSec != null) {
            t.push(`voip_activity_ts_sec:${e.voipActivityTimestampSec}`);
        }
        if (e.voipUiActivity != null) {
            t.push(`voip_ui_activity:${e.voipUiActivity}`);
        }
        if (e.voipUiActivityTimestampSec != null) {
            t.push(`voip_ui_activity_ts_sec:${e.voipUiActivityTimestampSec}`);
        }
        return t;
    }
    function ae(sendLogsType) {
        switch(sendLogsType){
            case o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION_SAD:
                return o("WAWebWamEnumCrashType").CRASH_TYPE.UNHANDLED_EXCEPTION;
            case o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE_SAD:
                return o("WAWebWamEnumCrashType").CRASH_TYPE.UNHANDLED_EXCEPTION;
            case o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD:
                return o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH;
            case o("WALogger").SendLogsType.PERFORMANCE_OBSERVER_LONGTASK_SAD:
                return o("WAWebWamEnumCrashType").CRASH_TYPE.ANR;
            case o("WALogger").SendLogsType.CRASH_OR_UNRECOVERABLE_ERROR_SAD:
                return o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH;
            case o("WALogger").SendLogsType.UNCATEGORIZED_SAD:
                return o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH;
            default:
                return o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH;
        }
    }
    function ie(sendLogsType) {
        switch(sendLogsType){
            case o("WALogger").SendLogsType.COUNTING_STAT:
                return o("WAWebWamEnumLogType").LOG_TYPE.COUNTING_STAT;
            case o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION:
                return o("WAWebWamEnumLogType").LOG_TYPE.UNCAUGHT_EXCEPTION;
            case o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE:
                return o("WAWebWamEnumLogType").LOG_TYPE.UNHANDLED_REJECTED_PROMISE;
            case o("WALogger").SendLogsType.INVESTIGATION:
                return o("WAWebWamEnumLogType").LOG_TYPE.INVESTIGATION;
            case o("WALogger").SendLogsType.UNCATEGORIZED:
                return o("WAWebWamEnumLogType").LOG_TYPE.UNCATEGORIZED;
            default:
                return o("WAWebWamEnumLogType").LOG_TYPE.UNCATEGORIZED;
        }
    }
    function le(isHighPri, hasTaggedMessage, n) {
        if (!r("gkx")("26258") && isHighPri || n) {
            return ee;
        }
        if (hasTaggedMessage) {
            return ne;
        }
        return te;
    }
    const se = 7200000;
    const ue = o("WAThrottle").throttle(ge, se, {
        trailing: false
    });
    function ce(e) {
        V = e;
    }
    function de(e) {
        H = e;
    }
    function me(e) {
        G = e;
    }
    function pe(e) {
        z = e;
    }
    function _e(e) {
        return fe.apply(this, arguments);
    }
    function fe() {
        fe = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ reason = "reason-unspecified", immediate = false, logType = j.CRASHLOG, isHighPri = false, hasTaggedMessage = false, ticketId, clientSamplingRate = 1, tags = [], fromTimestamp, sendLogsType = o("WALogger").SendLogsType.UNCATEGORIZED, bugId, isReporter = false }) {
            if (r("WAWebBrokerGlobalAppState").isLogoutInProgress) {
                return (q || (q = n("Promise"))).resolve();
            }
            if (logType === j.SUPPORT) {
                yield o("WAWebPriorLogs").printAllPriorLogs();
            }
            let tags_1 = tags;
            const M = H != null && H();
            if (M) {
                tags_1 = tags_1.concat("web-joined-beta");
            }
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                tags_1 = tags_1.concat("service-worker");
            }
            tags_1 = tags_1.concat(re(sendLogsType));
            if (Z.size <= J) {
                const w = Z.get(reason);
                if (w) {
                    w.count++;
                } else {
                    Z.set(reason, {
                        count: 1,
                        uploaded: false
                    });
                }
            }
            const A = o("WALogger").SadSendLogsTypes.has(sendLogsType);
            if (A) {
                tags_1 = tags_1.concat("sad");
                try {
                    const crashType = ae(sendLogsType);
                    const W = new (o("WAWebCrashLogWamEvent")).CrashLogWamEvent({
                        crashReason: reason,
                        crashType,
                        crashCount: Z.get(reason)?.count ?? 0,
                        crashApplicationState: document.visibilityState === "visible" ? o("WAWebWamEnumCrashApplicationState").CRASH_APPLICATION_STATE.FOREGROUND : o("WAWebWamEnumCrashApplicationState").CRASH_APPLICATION_STATE.BACKGROUND
                    });
                    if (crashType === o("WAWebWamEnumCrashType").CRASH_TYPE.ANR) {
                        W.crashTimeout = 5;
                    }
                    if (tags_1.length) {
                        W.crashContext = tags_1.join(",");
                    }
                    const U = o("WAWebCrashContextUtils").getCrashEventAppContext(crashType);
                    if (U != null) {
                        W.appContext = U;
                    }
                    W.commitAndWaitForFlush().catch((t)=>{
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "wa:uploadLogs error during crashLog wam commit: ",
                            ""
                        ])), t);
                    });
                } catch (error) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "wa:uploadLogs error logging crashLog wam event: ",
                        ""
                    ])), error);
                }
            } else {
                try {
                    const z = new (o("WAWebWebcMinorEventLogWamEvent")).WebcMinorEventLogWamEvent;
                    z.logReason = reason;
                    z.logType = ie(sendLogsType);
                    if (tags_1.length) {
                        z.logContext = tags_1.join(",");
                    }
                    z.logCount = Z.get(reason)?.count ?? 0;
                    z.commitAndWaitForFlush().catch((e)=>{
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "wa:uploadLogs error during minorEvent wam commit: ",
                            ""
                        ])), e);
                    });
                } catch (error) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "wa:uploadLogs error logging minorEvent wam event: ",
                        ""
                    ])), error);
                }
            }
            if (o("WAWebLoggerUtils").isWaitingForUpload()) {
                return (q || (q = n("Promise"))).resolve();
            }
            o("WAWebLoggerUtils").setWaitingForUpload(true);
            const Q = !A;
            if (clientSamplingRate > 0 && clientSamplingRate < 1) {
                tags_1 = tags_1.concat([
                    "sampled",
                    clientSamplingRate.toString()
                ]);
            }
            if (Q && r("gkx")("26258") ? o("WAWebLoggerUtils").passesSamplingPerUser(clientSamplingRate, reason, ye()) : o("WAWebLoggerUtils").passesSampling(clientSamplingRate)) {
                let X = ge;
                if (!isHighPri) {
                    if (r("gkx")("26259")) {
                        tags_1 = tags_1.concat([
                            "intern"
                        ]);
                    }
                    const Y = Z.get(reason);
                    if (Y != null && Y.uploaded) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "wa:uploadLogs reason already uploaded, skipping"
                        ])));
                        o("WAWebLoggerUtils").setWaitingForUpload(false);
                        return;
                    }
                    if (Y) {
                        Y.uploaded = true;
                    }
                    if (Z.size > o("WAWebCrashlogConstants").UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE) {
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "wa:uploadLogs using throttle"
                        ])));
                        X = ue;
                    }
                }
                const uploadStrategy = le(isHighPri, hasTaggedMessage, reason === K);
                try {
                    const te = yield X({
                        isHighPri,
                        immediate,
                        logType,
                        ticketId,
                        uploadStrategy,
                        tags: tags_1,
                        reason,
                        hasTaggedMessage,
                        fromTimestamp,
                        bugId,
                        isReporter
                    });
                    o("WAWebLoggerUtils").setWaitingForUpload(false);
                    return te;
                } catch (error) {
                    o("WAWebLoggerUtils").setWaitingForUpload(false);
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "wa:uploadLogs error uploading: ",
                        ""
                    ])), error);
                    return;
                }
            } else {
                o("WAWebLoggerUtils").setWaitingForUpload(false);
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[crashlog] upload client sampling check rate: ",
                    " prevented upload"
                ])), clientSamplingRate);
            }
        });
        return fe.apply(this, arguments);
    }
    function ge(e) {
        return he.apply(this, arguments);
    }
    function he() {
        he = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let i;
            const e_isHighPri = e.isHighPri;
            const isHighPri = e_isHighPri === undefined ? false : e_isHighPri;
            const { immediate, logType, ticketId, uploadStrategy, tags } = e;
            const _ = tags === undefined ? [] : tags;
            const e_reason = e.reason;
            const B = e_reason === undefined ? "reason-unspecified" : e_reason;
            const e_hasTaggedMessage = e.hasTaggedMessage;
            const H = e_hasTaggedMessage === undefined ? false : e_hasTaggedMessage;
            const { fromTimestamp, bugId, isReporter } = e;
            const Y = isReporter === undefined ? false : isReporter;
            const J = V != null ? V() : {
                platform: undefined,
                ref: undefined
            };
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "=================================================="
            ])));
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs ref: ",
                ""
            ])), J.ref ?? "no conn");
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs userAgent: ",
                ""
            ])), navigator.userAgent);
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs platform: ",
                ""
            ])), J.platform ?? "no platform");
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs webPlatform: ",
                ""
            ])), o("WAWebCrashlogConstants").CLB_PLATFORM);
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs is guest user: ",
                ""
            ])), r("WAWebEnvironment").isGuest);
            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs appId: ",
                ""
            ])), o("WAWebCrashlogConstants").FB_APP_ID);
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs url: ",
                ""
            ])), location.href);
            o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs distribution: ",
                ""
            ])), o("WAWebCrashlogUserAgent").getDistribution());
            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs buildId: ",
                ""
            ])), o("WAWebCrashlogConstants").BUILD_ID);
            o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs version: ",
                ""
            ])), o("WAWebBuildConstants").VERSION_BASE);
            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs pushPhase: ",
                ""
            ])), o("WAWebBuildConstants").PUSH_PHASE);
            if (H) {
                o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:uploadLogs hasTaggedMessage"
                ])));
            }
            o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                "reason for logs: ",
                ""
            ])), B);
            o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ""
            ])), o("WAWebLoggerOptimizer").END_OF_UPLOAD);
            yield U(immediate ? 0 : 1000);
            let Z;
            if (uploadStrategy.shouldHitCheckEndpoint()) {
                const ee = Ce({
                    isHighPri
                });
                uploadStrategy.appendToFormDataForCheck(ee, B);
                const te = be(logType);
                Z = yield self.fetch(te, {
                    method: "POST",
                    body: ee
                });
                if (!uploadStrategy.expectedCodes.includes(Z.status)) {
                    let ne = "";
                    try {
                        ne = yield Z.text();
                    } catch (e) {
                        ne = "(failed to read response body)";
                    }
                    o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "Crashlog:doUpload code of ",
                        " from ",
                        " was unexpected, expected values are: ",
                        ""
                    ])), Z.status, o("WAWebCrashlogConstants").CLB_CHECK_URL, uploadStrategy.expectedCodes.toString());
                    o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                        "Crashlog:doUpload check response body: ",
                        ""
                    ])), ne);
                    const re = r("WAWebBrowserInfo")();
                    o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "Crashlog:doUpload check request agent: ",
                        ""
                    ])), o("WAWebCrashlogUserAgent").getLogUserAgent({
                        device: re.os,
                        browser: re.ua,
                        appVersion: o("WAWebBuildConstants").VERSION_BASE
                    }));
                    return;
                }
                if (Z.status === 403) {
                    o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                        "Crashlog:doUpload aborting crashlog upload due to 403 check response"
                    ])));
                    return;
                }
            } else {
                o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "Crashlog:doUpload skipping sampling check"
                ])));
            }
            let ae = null;
            if (Z) {
                try {
                    ae = JSON.parse((yield Z.text()));
                    if (ae?.config?.sampling != null && (ae.config.sampling === 0 || Math.random() * ae.config.sampling > 1)) {
                        o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                            "Crashlog:doUpload server configured sampling check w/rate: ",
                            " prevented upload"
                        ])), ae.config.sampling);
                        return;
                    }
                } catch (error) {
                    o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                        "Crashlog:failed to parse response from upload check ",
                        ", will perform default upload"
                    ])), String(error));
                }
            }
            const le = Ce({
                isHighPri
            });
            uploadStrategy.appendToFormDataForUpload(le, ae);
            const se = o("WAWebLoggerImpl").Logger.getLogs(uploadStrategy.shouldUseLightWeightLogs(ae), B === K ? 0 : fromTimestamp);
            if (B === K) {
                let ue;
                if (!(n("cr:17160") == null || (ue = n("cr:17160").WAWebWindowsGetBridge()) == null || (ue = ue.getDebugFeatures()) == null)) {
                    ue.sendAdminLogs();
                }
            }
            const ce = B === K ? null : n("cr:17160") == null || (i = n("cr:17160").WAWebWindowsGetBridge()) == null || (i = i.getDebugFeatures()) == null ? undefined : i.requestNativeLogs();
            const de = yield (q || (q = n("Promise"))).all([
                se,
                ce
            ]);
            let me = de[0];
            const pe = de[1];
            if (r("gkx")("26258")) {
                me = me.map(o("WAWebLogLineSanitizer").sanitizeLine);
            }
            const _e = me.join("\n");
            const fe = new Blob([
                _e
            ], {
                type: "text/plain"
            });
            le.append("file", fe, "logs.txt");
            if (pe != null) {
                const ge = new Blob([
                    pe
                ], {
                    type: "text/plain"
                });
                le.append("secondary_log_files[windows_hybrid]", ge, "native_logs.txt");
            }
            if (G != null) {
                const he = G();
                if (he != null) {
                    const ye = new Blob([
                        JSON.stringify(he)
                    ], {
                        type: "text/plain"
                    });
                    le.append("secondary_log_files[pathfinder]", ye, "pathfinder_trace.json");
                }
            }
            let Se = _;
            if (bugId != null) {
                le.append("bug_id", bugId);
                if (Y) {
                    Se = Se.concat("is_reporter");
                }
            }
            const Re = z != null ? z() : null;
            if (Re != null) {
                le.append("call_id", Re.callId);
                Se = Se.concat(oe(Re));
            }
            if (Se.length) {
                le.append("tags", Se.join(","));
            }
            if (!r("isStringNullOrEmpty")(ticketId)) {
                le.append("ticket_id", ticketId);
            }
            const Le = ve(logType);
            const Ee = yield self.fetch(Le, {
                method: "POST",
                body: le
            });
            if (Ee.status !== 200) {
                let ke = "";
                try {
                    ke = yield Ee.text();
                } catch (e) {
                    ke = "(failed to read response body)";
                }
                o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                    "Crashlog:doUpload upload response body: ",
                    ""
                ])), ke);
                throw r("err")(`Status code of ${Ee.status} from ${Le} was unexpected, expected 200`);
            }
            return Ee.headers.get("X-Uploaded-File-Id");
        });
        return he.apply(this, arguments);
    }
    function ye() {
        const e = o("WAWebRuntimeEnvironmentUtils").isWorker() && !o("WAWebGlobals").areGlobalsReady() ? undefined : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
        if (e) {
            return e.toString();
        }
        return o("WAWebUserPrefsMeUser").getUnknownId();
    }
    function Ce({ isHighPri }) {
        const n = new FormData;
        if (!r("gkx")("26258") || isHighPri) {
            n.append("forced", "true");
        }
        if (o("WAWebABProps").getABPropConfigValue("is_meta_employee_or_internal_tester")) {
            n.append("is_internal", "true");
        }
        n.append("from_jid", ye());
        const a = r("WAWebBrowserInfo")();
        const i = o("WAWebCrashlogUserAgent").getLogUserAgent({
            device: a.os,
            browser: a.ua,
            appVersion: o("WAWebBuildConstants").VERSION_BASE
        });
        n.append("agent", i);
        n.append("app_id", o("WAWebCrashlogConstants").FB_APP_ID);
        n.append("build_id", o("WAWebCrashlogConstants").BUILD_ID);
        return n;
    }
    function be(logType) {
        return r("WAWebURLUtils").build(o("WAWebCrashlogConstants").CLB_CHECK_URL, {
            type: String(logType),
            access_token: o("WAWebCrashlogConstants").CLB_TOKEN
        });
    }
    function ve(logType) {
        const t = {
            type: String(logType),
            access_token: o("WAWebCrashlogConstants").CLB_TOKEN
        };
        if (r("WAWebEnvironment").isWindows) {
            t["additional_metadata[category]"] = "hybrid";
        }
        if (r("WAWebEnvironment").isGuest) {
            t["additional_metadata[category]"] = o("WAWebCrashlogConstants").CLB_SUBPLATFORM;
        }
        return r("WAWebURLUtils").build(o("WAWebCrashlogConstants").CLB_URL, t);
    }
    function Se(e, t) {
        return Re.apply(this, arguments);
    }
    function Re() {
        Re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebLoggerImpl").Logger.isTakeOver) {
                try {
                    let reason = e;
                    let clientSamplingRate = t?.sampling ?? 1;
                    if (t?.separateEmployeeLog !== false && o("WAWebCurrentUser").isEmployee()) {
                        reason = `${e}-employee`;
                        if (t?.employeeSampling != null) {
                            clientSamplingRate = t.employeeSampling;
                        }
                    }
                    const i = yield _e({
                        reason,
                        hasTaggedMessage: true,
                        clientSamplingRate,
                        tags: t?.tags,
                        sendLogsType: t?.sendLogsType
                    });
                    return i;
                } catch (error) {
                    o("WALogger").ERROR(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                        "Crash log sendLogs failed, ",
                        ""
                    ])), error);
                    return;
                }
            }
        });
        return Re.apply(this, arguments);
    }
    function Le() {
        ue.cancel();
        Z.clear();
    }
    l.LogType = j;
    l.SERVER_REQUESTED = K;
    l.MANUAL_UPLOAD = Q;
    l.USER_REPORT = X;
    l.registerCrashlogUploadInformationalLoggingFunction = ce;
    l.registerCrashlogUploadIsUserInExternalBetaFunction = de;
    l.registerPathfinderTraceCallback = me;
    l.registerCrashlogVoipContextCallback = pe;
    l.upload = _e;
    l.sendLogs = Se;
    l.reset = Le;
}, 98);