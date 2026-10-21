__d("useWAWebStatusPrivacySettingConfig", [
    "WAWebCmd",
    "WAWebStatusPrivacySettingAction",
    "WAWebUserPrefsStatusType",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useMemo, useState } = s;
    function useM() {
        const e = o("react-compiler-runtime").c(20);
        const t = useState();
        const statusPostingPrivacyConfig = t[0];
        const setStatusPostingPrivacyConfig = t[1];
        const i = useState(null);
        const l = i[0];
        const s = i[1];
        const c = useState(false);
        const statusAudienceSelectorClicked = c[0];
        const f = c[1];
        let g;
        let h;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = function() {
                const e = new AbortController;
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = yield o("WAWebStatusPrivacySettingAction").getStatusPrivacySetting();
                    if (!e.signal.aborted) {
                        setStatusPostingPrivacyConfig(t);
                        s(t);
                    }
                })();
                return function() {
                    return e.abort();
                };
            };
            h = [];
            e[0] = g;
            e[1] = h;
        } else {
            g = e[0];
            h = e[1];
        }
        useEffect(g, h);
        let y;
        if (e[2] !== statusPostingPrivacyConfig?.allowList || e[3] !== statusPostingPrivacyConfig?.denyList) {
            y = function({ setting, allowList, denyList }) {
                const u = {
                    setting,
                    allowList: setting === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? allowList : statusPostingPrivacyConfig?.allowList ?? [],
                    denyList: setting === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList ? denyList : statusPostingPrivacyConfig?.denyList ?? []
                };
                setStatusPostingPrivacyConfig(u);
            };
            e[2] = statusPostingPrivacyConfig?.allowList;
            e[3] = statusPostingPrivacyConfig?.denyList;
            e[4] = y;
        } else {
            y = e[4];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_status_privacy_settings_from_bridge", y);
        let C;
        e: {
            if (l == null || statusPostingPrivacyConfig == null) {
                C = false;
                break e;
            }
            const b = _;
            const v = statusPostingPrivacyConfig.setting;
            let S;
            if (e[5] !== v || e[6] !== l.allowList || e[7] !== statusPostingPrivacyConfig.allowList) {
                S = v === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList && !b(statusPostingPrivacyConfig.allowList, l.allowList);
                e[5] = v;
                e[6] = l.allowList;
                e[7] = statusPostingPrivacyConfig.allowList;
                e[8] = S;
            } else {
                S = e[8];
            }
            const R = S;
            let L;
            if (e[9] !== v || e[10] !== l.denyList || e[11] !== statusPostingPrivacyConfig.denyList) {
                L = v === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList && !b(statusPostingPrivacyConfig.denyList, l.denyList);
                e[9] = v;
                e[10] = l.denyList;
                e[11] = statusPostingPrivacyConfig.denyList;
                e[12] = L;
            } else {
                L = e[12];
            }
            const k = v !== l.setting || R || L;
            C = k;
        }
        const statusAudienceSelectorUpdated = C;
        let T;
        if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
            T = function() {
                f(true);
            };
            e[13] = T;
        } else {
            T = e[13];
        }
        const trackAudienceSelectorClicked = T;
        const updateStatusPostingPrivacyConfig = p;
        let audienceTracking;
        if (e[14] !== statusAudienceSelectorClicked || e[15] !== statusAudienceSelectorUpdated) {
            audienceTracking = {
                statusAudienceSelectorClicked,
                statusAudienceSelectorUpdated
            };
            e[14] = statusAudienceSelectorClicked;
            e[15] = statusAudienceSelectorUpdated;
            e[16] = audienceTracking;
        } else {
            audienceTracking = e[16];
        }
        let P;
        if (e[17] !== statusPostingPrivacyConfig || e[18] !== audienceTracking) {
            P = {
                statusPostingPrivacyConfig,
                setStatusPostingPrivacyConfig,
                updateStatusPostingPrivacyConfig,
                audienceTracking,
                trackAudienceSelectorClicked
            };
            e[17] = statusPostingPrivacyConfig;
            e[18] = audienceTracking;
            e[19] = P;
        } else {
            P = e[19];
        }
        return P;
    }
    function p({ allowList, denyList, setting }) {
        o("WAWebCmd").Cmd.updateStatusPrivacySettingsFromBridge({
            setting,
            allowList,
            denyList
        });
    }
    function _(e, t) {
        if (e.length !== t.length) {
            return false;
        }
        const n = new Set(e.map(f));
        return t.every((e)=>n.has(e.toString()));
    }
    function f(e) {
        return e.toString();
    }
    l.useWAWebStatusPrivacySettingConfig = useM;
}, 98);