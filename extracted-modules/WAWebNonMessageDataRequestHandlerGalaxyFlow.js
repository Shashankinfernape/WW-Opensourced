__d("WAWebNonMessageDataRequestHandlerGalaxyFlow", [
    "WABase64",
    "WAGzip",
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebDownloadManager",
    "WAWebGalaxyFlowCloseEvent",
    "WAWebMmsMediaTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebStartMediaDownloadQpl",
    "WAWebWamEnumDownloadOriginType",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f(e) {
        o("WAWebBackendApi").frontendFireAndForget("failGalaxyFlowDownloadRequest", e != null ? {
            requestId: e
        } : {});
    }
    function g(requestId) {
        o("WAWebBackendApi").frontendFireAndForget("resolveGalaxyFlowDownloadRequest", {
            requestId
        });
    }
    function h({ galaxyFlowAction }) {
        if (galaxyFlowAction == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "galaxy flow: galaxyFlowAction is null in peer data operation request"
            ])));
            return;
        }
        const { flowId, stanzaId, agmId } = galaxyFlowAction;
        if (flowId == null || stanzaId == null) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "galaxy flow: missing required field - flowId=",
                " stanzaId=",
                ""
            ])), flowId ?? "null", stanzaId ?? "null");
            return;
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "galaxy flow: received NOTIFY_LAUNCH request with flowId=",
            " stanzaId=",
            " agmId=",
            ""
        ])), flowId, stanzaId, agmId ?? "none");
        o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.trigger(o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(flowId, stanzaId));
        if (agmId != null) {
            o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.trigger(o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(flowId, agmId));
        }
    }
    function y(e) {
        const e_flowId = e.flowId;
        if (e_flowId == null) {
            return null;
        }
        if (e.actionType === "DOWNLOAD_RESPONSES") {
            return {
                type: o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestMessage$GalaxyFlowAction$GalaxyFlowActionType.DOWNLOAD_RESPONSES,
                flowId: e_flowId,
                galaxyFlowDownloadRequestId: e.requestId
            };
        }
        const e_stanzaId = e.stanzaId;
        if (e_stanzaId == null) {
            return null;
        }
        return babelHelpers.extends({
            type: o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestMessage$GalaxyFlowAction$GalaxyFlowActionType.NOTIFY_LAUNCH,
            flowId: e_flowId,
            stanzaId: e_stanzaId
        }, e.agmId != null ? {
            agmId: e.agmId
        } : {});
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
            const n = t?.flowResponsesCsvBundle;
            const a = n?.galaxyFlowDownloadRequestId;
            if (n == null) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "galaxy flow: flowResponsesCsvBundle is null in response"
                ])));
                f();
                return;
            }
            const { directPath, fileEncSha256, fileName, fileSha256, mediaKey } = n;
            if (directPath == null || mediaKey == null || fileSha256 == null || fileEncSha256 == null) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "galaxy flow: missing required MMS fields in flowResponsesCsvBundle"
                ])));
                f(a);
                return;
            }
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "galaxy flow: downloading flow responses CSV"
            ])));
            const y = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "GalaxyFlowResponsesDownload"
            });
            try {
                const v = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt({
                    signal: new AbortController().signal,
                    downloadQpl: y,
                    directPath,
                    encFilehash: o("WABase64").encodeB64(fileEncSha256),
                    filehash: o("WABase64").encodeB64(fileSha256),
                    mediaKey: o("WABase64").encodeB64(mediaKey),
                    mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(n.mediaKeyTimestamp),
                    type: o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
                    userDownloadAttemptCount: 0,
                    downloadOrigin: o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.P2B
                });
                y.endSuccess();
                const S = yield o("WAGzip").inflate(new Uint8Array(v));
                const R = new TextDecoder("utf-8");
                const L = R.decode(S);
                const E = new Blob([
                    L
                ], {
                    type: "text/csv;charset=utf-8;"
                });
                const k = URL.createObjectURL(E);
                const I = document.createElement("a");
                I.href = k;
                I.download = fileName ?? "flow_responses.csv";
                I.style.display = "none";
                document.body?.appendChild(I);
                I.click();
                document.body?.removeChild(I);
                URL.revokeObjectURL(k);
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "galaxy flow: flow responses CSV downloaded successfully"
                ])));
                if (a != null) {
                    g(a);
                }
            } catch (error) {
                y.endFailWithError("download_failed", r("getErrorSafe")(error).message);
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "galaxy flow: failed to download flow responses CSV: ",
                    ""
                ])), error);
                f(a);
            }
        });
        return b.apply(this, arguments);
    }
    l.handleGalaxyFlowLaunchRequest = h;
    l.buildGalaxyFlowDataOperationRequest = y;
    l.handleGalaxyFlowDownloadResponse = C;
}, 98);