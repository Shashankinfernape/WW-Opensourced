__d("WAWebBizNativeAdsTwoPhaseContainer.react", [
    "FBLogger",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizNativeAdsBoostLanding",
    "WAWebBizNativeAdsEntryTapLogger",
    "WAWebBizNativeAdsFlowLoadable",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsLoadingDrawer.react",
    "WAWebBizNativeAdsPhaseOneResolver",
    "WAWebBizNativeAdsQplHelpers",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(16);
        const { entryPoint, flowID, preselectedProductId } = e;
        const l = useState("loading");
        const u = l[0];
        const m = l[1];
        const p = useState(false);
        const _ = p[0];
        const f = p[1];
        const g = useState(preselectedProductId != null ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement);
        const h = g[0];
        const y = g[1];
        const C = useState(null);
        const B = C[0];
        const v = C[1];
        let S;
        let R;
        if (t[0] !== flowID || t[1] !== preselectedProductId) {
            S = function() {
                let e = false;
                o("WAWebBizNativeAdsPhaseOneResolver").resolvePhaseOne(flowID).then((phase1Result)=>{
                    if (!e) {
                        o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.PHASE_1_END);
                        o("WAWebBizNativeAdsQplHelpers").adsManagementQplAnnotateScenario(phase1Result.scenario);
                        o("WAWebBizNativeAdsEntryTapLogger").logScenarioResolved({
                            flowID,
                            scenario: phase1Result.scenario
                        });
                        o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.PHASE_2_START);
                        const initialLoadingStep = o("WAWebBizNativeAdsBoostLanding").shouldBoostOpenAdCreation(phase1Result.scenario, preselectedProductId) ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement;
                        y(initialLoadingStep);
                        v(function() {
                            return o("WAWebBizNativeAdsFlowLoadable").createBizNativeAdsFlowLoadable({
                                flowID,
                                initialLoadingStep,
                                onLoadComplete: function() {
                                    return f(true);
                                },
                                phase1Result,
                                preselectedProductId
                            });
                        });
                        m("resolved");
                    }
                }, (t)=>{
                    if (!e) {
                        r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(t)).warn("TwoPhaseContainer: phase 1 resolution failed");
                        m("error");
                    }
                });
                return function() {
                    e = true;
                };
            };
            R = [
                flowID,
                preselectedProductId
            ];
            t[0] = flowID;
            t[1] = preselectedProductId;
            t[2] = S;
            t[3] = R;
        } else {
            S = t[2];
            R = t[3];
        }
        useEffect(S, R);
        if (u === "error") {
            let L;
            if (t[4] !== h) {
                L = s.jsx(r("WAWebBizAdsErrorPopup.react"), {
                    fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                        step: h
                    })
                });
                t[4] = h;
                t[5] = L;
            } else {
                L = t[5];
            }
            return L;
        }
        let E;
        if (t[6] !== _ || t[7] !== h) {
            E = _ ? null : s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                step: h
            });
            t[6] = _;
            t[7] = h;
            t[8] = E;
        } else {
            E = t[8];
        }
        let k;
        if (t[9] !== B || t[10] !== entryPoint || t[11] !== preselectedProductId) {
            k = B != null ? <B entryPoint={entryPoint} preselectedProductId={preselectedProductId}/> : null;
            t[9] = B;
            t[10] = entryPoint;
            t[11] = preselectedProductId;
            t[12] = k;
        } else {
            k = t[12];
        }
        let I;
        if (t[13] !== E || t[14] !== k) {
            I = <>{E}{k}</>;
            t[13] = E;
            t[14] = k;
            t[15] = I;
        } else {
            I = t[15];
        }
        return I;
    }
    l.default = m;
}, 98);