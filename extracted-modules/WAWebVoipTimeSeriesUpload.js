__d("WAWebVoipTimeSeriesUpload", [
    "WABinary",
    "WALogger",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebCrashlogConstants",
    "WAWebCrashlogUserAgent",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebVoipPersistentFS",
    "WAWebZip",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
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
    const k = 268435456;
    const I = "voip_time_series";
    const T = "https://crashlogs.whatsapp.net/whatson_logs_upload";
    const access_token = "986260562965669|dce80b34bf101b13140cbbf4c809d9ac";
    function x(e) {
        const t = new FormData;
        const n = r("WAWebBrowserInfo")();
        const a = o("WAWebCrashlogUserAgent").getLogUserAgent({
            device: n.os,
            browser: n.ua,
            appVersion: o("WAWebBuildConstants").VERSION_BASE
        });
        t.append("agent", a);
        const i = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
        t.append("from_jid", i != null ? i.toString() : o("WAWebUserPrefsMeUser").getUnknownId());
        t.append("tags", I);
        t.append("app_id", o("WAWebCrashlogConstants").FB_APP_ID);
        t.append("build_id", o("WAWebCrashlogConstants").BUILD_ID);
        t.append("call_id", e.callId);
        const length = e.participantEntries.length;
        if (length > 0) {
            t.append("additional_metadata[num_participants]", String(length));
            t.append("additional_metadata[max_participants]", String(length));
        }
        if (e.connectTime != null) {
            t.append("additional_metadata[connect_time]", String(e.connectTime));
        }
        if (e.videoCall != null) {
            t.append("additional_metadata[video_call]", String(e.videoCall));
        }
        t.append("additional_metadata[call_result]", String(e.result));
        return t;
    }
    function $(e, t) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (t.timeSeriesPath == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] no time-series path, skip"
                ])));
                return;
            }
            const t_timeSeriesPath = t.timeSeriesPath;
            try {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] Starting upload for call: ",
                    ""
                ])), t.callId);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] Time-series directory: ",
                    ""
                ])), t_timeSeriesPath);
                const i = n.FS;
                if (!i) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] WASM FS not available, skipping upload"
                    ])));
                    return;
                }
                let l;
                try {
                    l = i.readdir(t_timeSeriesPath);
                    l = l.filter((e)=>e !== "." && e !== "..");
                } catch (error) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] Failed to read directory ",
                        ": ",
                        ""
                    ])), t_timeSeriesPath, String(error));
                    return;
                }
                if (l.length === 0) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] No files found in directory ",
                        ""
                    ])), t_timeSeriesPath);
                    return;
                }
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] Found ",
                    " segment files: ",
                    ""
                ])), l.length, l.join(", "));
                const $ = new (r("WAWebZip"));
                let P = 0;
                const N = [];
                for (const M of l){
                    const w = `${t_timeSeriesPath}/${M}`;
                    try {
                        const A = i.readFile(w);
                        const F = new (o("WABinary")).Binary(A);
                        $.add({
                            contents: F,
                            path: M
                        });
                        P += A.length;
                        N.push({
                            name: M,
                            size: A.length
                        });
                    } catch (error) {
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[VoIP TS Upload] Failed to read file ",
                            ": ",
                            ""
                        ])), w, String(error));
                    }
                }
                if (N.length > 0) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] Added ",
                        " files to ZIP. Examples: ",
                        ""
                    ])), N.length, N.slice(0, 3).map((e)=>`${e.name} (${e.size} bytes)`));
                }
                if (P > k) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] size ",
                        " > max ",
                        ", skip"
                    ])), P, k);
                    return;
                }
                const O = $.create();
                const B = new Blob([
                    O.readByteArrayView()
                ], {
                    type: "application/zip"
                });
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] ZIP created, size=",
                    " orig=",
                    ""
                ])), B.size, P);
                if (B.size > k) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] ZIP ",
                        " > max ",
                        ", skip"
                    ])), B.size, k);
                    return;
                }
                const W = x(t);
                const q = `${t.callId}_timeseries.zip`;
                W.append("file", B, q);
                const U = r("WAWebURLUtils").build(T, {
                    access_token,
                    type: I
                });
                const V = yield self.fetch(U, {
                    method: "POST",
                    body: W
                });
                if (V.status === 200) {
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] uploaded call=",
                        " size=",
                        ""
                    ])), t.callId, B.size);
                    for (const H of l){
                        try {
                            i.unlink(`${t_timeSeriesPath}/${H}`);
                        } catch (error) {
                            o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                "[VoIP TS Upload] Failed to cleanup file ",
                                ": ",
                                ""
                            ])), H, String(error));
                        }
                    }
                    try {
                        i.rmdir(t_timeSeriesPath);
                        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[VoIP TS Upload] Cleaned up directory ",
                            ""
                        ])), t_timeSeriesPath);
                    } catch (error) {
                        o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "[VoIP TS Upload] Failed to remove directory ",
                            ": ",
                            ""
                        ])), t_timeSeriesPath, String(error));
                    }
                    try {
                        yield o("WAWebVoipPersistentFS").syncPersistentFS(n);
                    } catch (error) {
                        o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[VoIP TS Upload] Failed to sync filesystem deletions: ",
                            ""
                        ])), String(error));
                    }
                } else {
                    const G = yield V.text();
                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] failed status=",
                        " call=",
                        " ",
                        ""
                    ])), V.status, t.callId, G);
                }
            } catch (error) {
                o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] Failed to upload time-series logs: ",
                    ""
                ])), String(error));
            }
        });
        return P.apply(this, arguments);
    }
    l.uploadTimeSeriesLogsAsync = $;
}, 98);