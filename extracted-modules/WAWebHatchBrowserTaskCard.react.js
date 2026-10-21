__d("WAWebHatchBrowserTaskCard.react", [
    "fbt",
    "CometPlaceholder.react",
    "JSResource",
    "WAWebErrorBoundary.react",
    "WAWebHatchBrowserTaskState",
    "WAWebHatchLogging",
    "WAWebImg.react",
    "WAWebWamEnumDownloadOriginType",
    "WDSButton.react",
    "WDSIconIcLanguage.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebEventTargetValue",
    "useWAWebHatchSecureMediaUrl",
    "useWAWebIntersection"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = [
        "canOpen",
        "isBrowserEnabled",
        "isForwarded",
        "isStreaming",
        "metaSlot",
        "occurrence",
        "onAcceptedTask",
        "onOpen",
        "onTombstoneChange",
        "tombstoneReportingKey"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { createContext, lazy, useContext, useEffect, useEffectEvent, useMemo, useRef } = m;
    const B1 = lazy(function() {
        return r("JSResource")("WAWebHatchBrowserTaskLiveCard.react").__setRef("WAWebHatchBrowserTaskCard.react").load().then((e)=>({
                default: e
            }));
    });
    const VContext = createContext(null);
    const S = 257;
    const R = 48;
    const L = 40;
    const E = 24;
    const k = 146;
    const threshold = Math.fround(Number.EPSILON);
    const T = {
        iconBadge: {
            alignItems: "x6s0dn4",
            backgroundColor: "x1k43qru",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            display: "x78zum5",
            flexShrink: "x2lah0s",
            height: "x1vqgdyp",
            justifyContent: "xl56j7k",
            width: "x100vrsf",
            $$css: true
        }
    };
    const D = {
        negative: {
            color: "x30a034",
            $$css: true
        },
        neutral: {
            color: "x14ug900",
            $$css: true
        },
        positive: {
            color: "x1du590y",
            $$css: true
        },
        warning: {
            color: "x1f81s73",
            $$css: true
        }
    };
    function XComponent(t) {
        const n = o("react-compiler-runtime").c(51);
        const { canOpen, isBrowserEnabled, isForwarded, isStreaming, metaSlot, occurrence, onAcceptedTask, onOpen, onTombstoneChange, tombstoneReportingKey } = t;
        const y = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const isForwarded_1 = isForwarded === undefined ? false : isForwarded;
        const isStreaming_1 = isStreaming === undefined ? false : isStreaming;
        const { encryptedScreenshot, state } = y;
        const kRef = useRef(false);
        let I;
        if (n[0] !== onTombstoneChange) {
            I = function(t, n) {
                kRef.current = t;
                onTombstoneChange?.(t, n);
            };
            n[0] = onTombstoneChange;
            n[1] = I;
        } else {
            I = n[1];
        }
        const onTombstoneChange_1 = I;
        let D;
        if (n[2] !== onTombstoneChange) {
            D = function() {
                if (kRef.current) {
                    kRef.current = false;
                    if (onTombstoneChange != null) {
                        onTombstoneChange(false, false);
                    }
                }
            };
            n[2] = onTombstoneChange;
            n[3] = D;
        } else {
            D = n[3];
        }
        const x = useEffectEvent(D);
        const N = tombstoneReportingKey != null;
        const MRef = useRef(N);
        let w;
        if (n[4] !== N || n[5] !== x) {
            w = function() {
                const MRef_current = MRef.current;
                MRef.current = N;
                if (MRef_current && !N) {
                    x();
                }
                return $;
            };
            n[4] = N;
            n[5] = x;
            n[6] = w;
        } else {
            w = n[6];
        }
        let A;
        if (n[7] !== N) {
            A = [
                N
            ];
            n[7] = N;
            n[8] = A;
        } else {
            A = n[8];
        }
        useEffect(w, A);
        const F = r("useWAWebHatchSecureMediaUrl")(encryptedScreenshot != null && !isForwarded_1 ? K(encryptedScreenshot) : null, o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL);
        const isPreviewAvailable = encryptedScreenshot != null && !isForwarded_1 || y.previewAvailable === true;
        const B = String(state);
        const subtitle = U(B, y);
        const completionDetail = V(B, y);
        const { title, browserTaskId } = y;
        let isSettled;
        if (n[9] !== B) {
            isSettled = o("WAWebHatchBrowserTaskState").isSettledBrowserTaskState(B);
            n[9] = B;
            n[10] = isSettled;
        } else {
            isSettled = n[10];
        }
        const terminalReason = B === "FAILED" ? y.terminalReason : null;
        let display;
        if (n[11] !== completionDetail || n[12] !== isPreviewAvailable || n[13] !== B || n[14] !== subtitle || n[15] !== isSettled || n[16] !== terminalReason || n[17] !== title) {
            display = {
                completionDetail,
                isPreviewAvailable,
                isSettled,
                isTombstone: false,
                state: B,
                subtitle,
                terminalReason,
                title
            };
            n[11] = completionDetail;
            n[12] = isPreviewAvailable;
            n[13] = B;
            n[14] = subtitle;
            n[15] = isSettled;
            n[16] = terminalReason;
            n[17] = title;
            n[18] = display;
        } else {
            display = n[18];
        }
        let Y;
        if (n[19] !== canOpen || n[20] !== isBrowserEnabled || n[21] !== isForwarded_1 || n[22] !== isStreaming_1 || n[23] !== metaSlot || n[24] !== onOpen || n[25] !== F || n[26] !== y.browserTaskId || n[27] !== display) {
            Y = <presentation browserTaskId={browserTaskId} canOpen={canOpen} display={display} isBrowserEnabled={isBrowserEnabled} isForwarded={isForwarded_1} isStreaming={isStreaming_1} metaSlot={metaSlot} onOpen={onOpen} previewUrl={F} tombstoneReportingKey={null}/>;
            n[19] = canOpen;
            n[20] = isBrowserEnabled;
            n[21] = isForwarded_1;
            n[22] = isStreaming_1;
            n[23] = metaSlot;
            n[24] = onOpen;
            n[25] = F;
            n[26] = y.browserTaskId;
            n[27] = display;
            n[28] = Y;
        } else {
            Y = n[28];
        }
        const J = Y;
        if (!canOpen || isForwarded_1) {
            return J;
        }
        let Z;
        if (n[29] !== canOpen || n[30] !== isBrowserEnabled || n[31] !== isForwarded_1 || n[32] !== isStreaming_1 || n[33] !== metaSlot || n[34] !== occurrence || n[35] !== onAcceptedTask || n[36] !== onOpen || n[37] !== F || n[38] !== y || n[39] !== onTombstoneChange_1 || n[40] !== tombstoneReportingKey) {
            Z = <B1 {...babelHelpers.extends({}, y, {
                canOpen,
                isBrowserEnabled,
                isForwarded: isForwarded_1,
                isStreaming: isStreaming_1,
                metaSlot,
                occurrence,
                onAcceptedTask,
                onOpen,
                onTombstoneChange: onTombstoneChange_1,
                primitiveImageUrl: F,
                presentation,
                tombstoneReportingKey
            })}/>;
            n[29] = canOpen;
            n[30] = isBrowserEnabled;
            n[31] = isForwarded_1;
            n[32] = isStreaming_1;
            n[33] = metaSlot;
            n[34] = occurrence;
            n[35] = onAcceptedTask;
            n[36] = onOpen;
            n[37] = F;
            n[38] = y;
            n[39] = onTombstoneChange_1;
            n[40] = tombstoneReportingKey;
            n[41] = Z;
        } else {
            Z = n[41];
        }
        let ee;
        if (n[42] !== J || n[43] !== Z) {
            const Component = r("CometPlaceholder.react");
            ee = <Component name="hatch-browser-task-live-card" fallback={J}>{Z}</Component>;
            n[42] = J;
            n[43] = Z;
            n[44] = ee;
        } else {
            ee = n[44];
        }
        let te;
        if (n[45] !== y.browserTaskId || n[46] !== ee) {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            te = <Component key={y.browserTaskId} name="hatch-browser-task-live-card" fallback={useQ}>{ee}</Component>;
            n[45] = y.browserTaskId;
            n[46] = ee;
            n[47] = te;
        } else {
            te = n[47];
        }
        let ne;
        if (n[48] !== J || n[49] !== te) {
            ne = <VContext.Provider value={J}>{te}</VContext.Provider>;
            n[48] = J;
            n[49] = te;
            n[50] = ne;
        } else {
            ne = n[50];
        }
        return ne;
    }
    function $() {}
    function presentation(e) {
        const t = o("react-compiler-runtime").c(59);
        const { browserTaskId, canOpen, canRecoverFromTombstone, display, isBrowserEnabled, isForwarded, isStreaming, metaSlot, onOpen, onTombstoneChange, previewUrl, tombstoneReportingKey } = e;
        const S = canRecoverFromTombstone === undefined ? false : canRecoverFromTombstone;
        const R = isStreaming === undefined ? false : isStreaming;
        const display_title = display.title;
        let k;
        if (t[0] !== display) {
            k = M(display);
            t[0] = display;
            t[1] = k;
        } else {
            k = t[1];
        }
        const D = k;
        let x;
        if (t[2] !== canOpen || t[3] !== display.isTombstone || t[4] !== isForwarded || t[5] !== R || t[6] !== tombstoneReportingKey) {
            x = A(canOpen, display.isTombstone, isForwarded, R, tombstoneReportingKey);
            t[2] = canOpen;
            t[3] = display.isTombstone;
            t[4] = isForwarded;
            t[5] = R;
            t[6] = tombstoneReportingKey;
            t[7] = x;
        } else {
            x = t[7];
        }
        const $ = x;
        const P = canOpen ? W(display.state, display.isPreviewAvailable) : null;
        let q;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            q = {
                threshold
            };
            t[8] = q;
        } else {
            q = t[8];
        }
        const U = r("useWAWebIntersection")(q);
        const V = U[0];
        const H = U[1];
        const G = r("useWAWebEventTargetValue")(globalThis.document, "visibilitychange", N);
        let z;
        if (t[9] !== display.state) {
            z = B(display.state);
            t[9] = display.state;
            t[10] = z;
        } else {
            z = t[10];
        }
        const K = z;
        const QRef = useRef(null);
        let X;
        if (t[11] !== S || t[12] !== onTombstoneChange) {
            X = function(t) {
                return onTombstoneChange?.(t, t && S);
            };
            t[11] = S;
            t[12] = onTombstoneChange;
            t[13] = X;
        } else {
            X = t[13];
        }
        const Y = useEffectEvent(X);
        let J;
        if (t[14] !== $ || t[15] !== Y || t[16] !== tombstoneReportingKey) {
            J = function() {
                const QRef_current = QRef.current;
                QRef.current = $;
                if (tombstoneReportingKey != null && ($ || QRef_current === true)) {
                    Y($);
                }
            };
            t[14] = $;
            t[15] = Y;
            t[16] = tombstoneReportingKey;
            t[17] = J;
        } else {
            J = t[17];
        }
        let Z;
        if (t[18] !== S || t[19] !== $ || t[20] !== tombstoneReportingKey) {
            Z = [
                S,
                $,
                tombstoneReportingKey
            ];
            t[18] = S;
            t[19] = $;
            t[20] = tombstoneReportingKey;
            t[21] = Z;
        } else {
            Z = t[21];
        }
        useEffect(J, Z);
        useW(browserTaskId, canOpen, display, H.intersectionRatio, isBrowserEnabled, G, isForwarded, $, K);
        const ee = function() {
            return F(P, canOpen, isBrowserEnabled, isForwarded, onOpen);
        };
        if ($) {
            let te;
            if (t[22] !== metaSlot) {
                te = metaSlot != null ? <div className="x78zum5 x13a6bvl">{metaSlot}</div> : null;
                t[22] = metaSlot;
                t[23] = te;
            } else {
                te = t[23];
            }
            return te;
        }
        let ne;
        if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
            ne = {
                className: "x78zum5 xdt5ytf x13nahy2 x1vjgo2v"
            };
            t[24] = ne;
        } else {
            ne = t[24];
        }
        const re = "hatch_browser_task_card";
        let oe;
        if (t[25] === Symbol.for("react.memo_cache_sentinel")) {
            oe = {
                className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 xdt5ytf x4tpdpg x6ikm8r x10wlt62"
            };
            t[25] = oe;
        } else {
            oe = t[25];
        }
        let ae;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
            ae = {
                className: "x6s0dn4 x1aj3ljl x78zum5 x1xrf6ya xde1mab xscbp6u x1iw51ew"
            };
            t[26] = ae;
        } else {
            ae = t[26];
        }
        let ie;
        if (t[27] !== display.state) {
            ie = (u || (u = r("stylex"))).props(T.iconBadge, j(display.state));
            t[27] = display.state;
            t[28] = ie;
        } else {
            ie = t[28];
        }
        let le;
        if (t[29] === Symbol.for("react.memo_cache_sentinel")) {
            le = d.jsx(r("WDSIconIcLanguage.react"), {
                height: E,
                width: E
            });
            t[29] = le;
        } else {
            le = t[29];
        }
        let se;
        if (t[30] !== ie) {
            se = <div {...babelHelpers.extends({}, ie, {
                children: le
            })}/>;
            t[30] = ie;
            t[31] = se;
        } else {
            se = t[31];
        }
        let ue;
        if (t[32] === Symbol.for("react.memo_cache_sentinel")) {
            ue = {
                className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli x1b73lln"
            };
            t[32] = ue;
        } else {
            ue = t[32];
        }
        let ce;
        if (t[33] !== display_title) {
            ce = display_title ?? s._("Browser");
            t[33] = display_title;
            t[34] = ce;
        } else {
            ce = t[34];
        }
        let de;
        if (t[35] !== ce) {
            const Component = r("WDSText.react");
            de = <Component type="Body1Emphasized" colorName="contentDefault" maxLines={1} testid="hatch_browser_task_card_title">{ce}</Component>;
            t[35] = ce;
            t[36] = de;
        } else {
            de = t[36];
        }
        let me;
        if (t[37] !== D) {
            const Component = r("WDSText.react");
            me = D != null && <Component type="Body2" colorName="contentDeemphasized" maxLines={2} testid="hatch_browser_task_card_subtitle">{D}</Component>;
            t[37] = D;
            t[38] = me;
        } else {
            me = t[38];
        }
        let pe;
        if (t[39] !== de || t[40] !== me) {
            pe = <div {...babelHelpers.extends({}, ue, {
                children: [
                    de,
                    me
                ]
            })}/>;
            t[39] = de;
            t[40] = me;
            t[41] = pe;
        } else {
            pe = t[41];
        }
        let _e;
        if (t[42] !== metaSlot) {
            _e = metaSlot != null && <div className="xpvyfi4 x2lah0s x1ngp85i x1n2onr6" data-testid="hatch_browser_task_card_meta_frame">{metaSlot}</div>;
            t[42] = metaSlot;
            t[43] = _e;
        } else {
            _e = t[43];
        }
        let fe;
        if (t[44] !== se || t[45] !== pe || t[46] !== _e) {
            fe = <div {...babelHelpers.extends({}, ae, {
                "data-testid": "hatch_browser_task_card_header",
                children: [
                    se,
                    pe,
                    _e
                ]
            })}/>;
            t[44] = se;
            t[45] = pe;
            t[46] = _e;
            t[47] = fe;
        } else {
            fe = t[47];
        }
        let ge;
        if (t[48] !== display.isSettled || t[49] !== previewUrl) {
            const Component = r("WAWebImg.react");
            ge = previewUrl != null && !display.isSettled && <div className="x16w0wmm xczueoj x6ikm8r x10wlt62" data-testid="hatch_browser_task_card_preview"><Component alt="" className="x5yr21d xl1xv1r xh8yej3" src={previewUrl} testid="hatch_browser_task_card_preview_image"/></div>;
            t[48] = display.isSettled;
            t[49] = previewUrl;
            t[50] = ge;
        } else {
            ge = t[50];
        }
        let he;
        if (t[51] !== fe || t[52] !== ge) {
            he = <div {...babelHelpers.extends({}, oe, {
                "data-testid": "hatch_browser_task_card_surface",
                children: [
                    fe,
                    ge
                ]
            })}/>;
            t[51] = fe;
            t[52] = ge;
            t[53] = he;
        } else {
            he = t[53];
        }
        const Component = r("WDSButton.react");
        const ye = P != null && <div className="x6s0dn4 x78zum5 xl56j7k x1wxaq2x" data-testid="hatch_browser_task_card_action_row"><Component disabled={!P.isEnabled} label={O(P.kind)} onPress={ee} testid="hatch_browser_task_card_action" variant="borderless"/></div>;
        let Ce;
        if (t[54] !== V || t[55] !== ne || t[56] !== he || t[57] !== ye) {
            Ce = <div {...babelHelpers.extends({
                ref: V
            }, ne, {
                "data-testid": re,
                children: [
                    he,
                    ye
                ]
            })}/>;
            t[54] = V;
            t[55] = ne;
            t[56] = he;
            t[57] = ye;
            t[58] = Ce;
        } else {
            Ce = t[58];
        }
        return Ce;
    }
    function N() {
        return globalThis.document?.visibilityState === "visible";
    }
    function M(e) {
        if (e.state === "STOPPED") {
            return z();
        }
        return e.subtitle ?? H(e.state, e.completionDetail);
    }
    M.displayName = `${M.name} [from ${i.id}]`;
    function useW(browserTaskId, canOpen, display, intersectionRatio, isBrowserEnabled, i, isForwarded, s, u) {
        const c = o("react-compiler-runtime").c(23);
        let d;
        if (c[0] !== browserTaskId || c[1] !== canOpen || c[2] !== display.terminalReason || c[3] !== intersectionRatio || c[4] !== isBrowserEnabled || c[5] !== i || c[6] !== isForwarded || c[7] !== s || c[8] !== u) {
            d = function() {
                if (u != null) {
                    const c = {
                        isEligible: canOpen && isBrowserEnabled && i && !isForwarded && !s && intersectionRatio >= threshold,
                        taskID: browserTaskId
                    };
                    o("WAWebHatchLogging").logHatchBrowserCardImpression(babelHelpers.extends({}, c, {
                        state: u
                    }));
                    if (u === "failed") {
                        o("WAWebHatchLogging").logHatchBrowserCardImpressionError(babelHelpers.extends({}, c, {
                            terminalReason: display.terminalReason
                        }));
                    }
                }
            };
            c[0] = browserTaskId;
            c[1] = canOpen;
            c[2] = display.terminalReason;
            c[3] = intersectionRatio;
            c[4] = isBrowserEnabled;
            c[5] = i;
            c[6] = isForwarded;
            c[7] = s;
            c[8] = u;
            c[9] = d;
        } else {
            d = c[9];
        }
        const m = useEffectEvent(d);
        let p;
        if (c[10] !== m) {
            p = function() {
                m();
            };
            c[10] = m;
            c[11] = p;
        } else {
            p = c[11];
        }
        let _;
        if (c[12] !== browserTaskId || c[13] !== canOpen || c[14] !== display.state || c[15] !== display.terminalReason || c[16] !== intersectionRatio || c[17] !== isBrowserEnabled || c[18] !== i || c[19] !== isForwarded || c[20] !== s || c[21] !== u) {
            _ = [
                browserTaskId,
                canOpen,
                display.state,
                display.terminalReason,
                intersectionRatio,
                isBrowserEnabled,
                i,
                isForwarded,
                s,
                u
            ];
            c[12] = browserTaskId;
            c[13] = canOpen;
            c[14] = display.state;
            c[15] = display.terminalReason;
            c[16] = intersectionRatio;
            c[17] = isBrowserEnabled;
            c[18] = i;
            c[19] = isForwarded;
            c[20] = s;
            c[21] = u;
            c[22] = _;
        } else {
            _ = c[22];
        }
        useEffect(p, _);
    }
    function A(canOpen, isTombstone, isForwarded, r, tombstoneReportingKey) {
        return isTombstone && tombstoneReportingKey != null && !isForwarded && !r && canOpen;
    }
    function F(e, canOpen, isBrowserEnabled, isForwarded, onOpen) {
        if (!(!canOpen || !isBrowserEnabled || e?.isEnabled !== true)) {
            if (!isForwarded) {
                o("WAWebHatchLogging").logHatchBrowserCardTap();
                if (e.kind === "takeOver") {
                    o("WAWebHatchLogging").logHatchBrowserTakeControlTap("card");
                }
            }
            onOpen();
        }
    }
    function O(kind) {
        switch(kind){
            case "takeOver":
                return s._("Take over");
            case "open":
                return s._("Open browser");
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${kind}`);
                })();
        }
    }
    function B(state) {
        switch(state){
            case "QUEUED":
                return "queued";
            case "STARTING":
                return "starting";
            case "WORKING":
                return "working";
            case "NEEDS_USER":
                return "needs_user";
            case "WAITING":
                return "waiting";
            case "PAUSED":
                return "paused";
            case "STOPPED":
                return "stopped";
            case "COMPLETED":
                return "completed";
            case "FAILED":
                return "failed";
            default:
                return null;
        }
    }
    function W(state, isEnabled) {
        if (state === "WAITING" || state === "NEEDS_USER" || state === "PAUSED") {
            return {
                isEnabled: true,
                kind: "takeOver"
            };
        }
        if (state === "WORKING") {
            return {
                isEnabled,
                kind: "open"
            };
        }
        if (state === "QUEUED" || state === "STARTING") {
            return {
                isEnabled: false,
                kind: "open"
            };
        }
        return null;
    }
    function useQ(e) {
        return useContext(VContext);
    }
    function U(e, { activityTitle, siteDomain, statusLabel }) {
        if (e === "COMPLETED") {
            return o("WAWebHatchBrowserTaskState").nonBlank(statusLabel);
        }
        if (e === "FAILED" || e === "STOPPED") {
            return statusLabel;
        }
        if (e === "WAITING" || e === "NEEDS_USER" || e === "PAUSED") {
            return statusLabel ?? activityTitle ?? siteDomain;
        }
        return activityTitle ?? statusLabel ?? siteDomain;
    }
    function V(e, { activityTitle }) {
        if (e === "COMPLETED") {
            return o("WAWebHatchBrowserTaskState").nonBlank(activityTitle);
        }
        return null;
    }
    function H(state, completionDetail) {
        if (state === "COMPLETED" && completionDetail != null) {
            return s._("Completed · {detail}", [
                s._param("detail", completionDetail)
            ]);
        }
        return G(state);
    }
    function G(state) {
        switch(state){
            case "COMPLETED":
                return s._("Completed");
            case "FAILED":
                return s._("Failed");
            default:
                return null;
        }
    }
    function z() {
        return s._("Stopped · You stopped the task");
    }
    function j(state) {
        if (state === "WAITING" || state === "NEEDS_USER" || state === "PAUSED") {
            return D.warning;
        }
        if (state === "COMPLETED") {
            return D.positive;
        }
        if (state === "FAILED" || state === "STOPPED") {
            return D.negative;
        }
        return D.neutral;
    }
    function K(encryptedScreenshot) {
        return {
            directPath: encryptedScreenshot.direct_path,
            encFilehash: encryptedScreenshot.file_enc_sha256,
            fileLength: Number(encryptedScreenshot.file_length),
            filehash: encryptedScreenshot.file_sha256,
            mediaKey: encryptedScreenshot.media_key,
            mediaType: "image",
            mimeType: encryptedScreenshot.mime_type,
            sidecarB64: null,
            staticUrl: null
        };
    }
    l.default = XComponent;
}, 226);