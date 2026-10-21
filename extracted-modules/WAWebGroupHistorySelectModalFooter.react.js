__d("WAWebGroupHistorySelectModalFooter.react", [
    "fbt",
    "CometPlaceholder.react",
    "WAWebAddGroupParticipantGroupHistoryContext.react",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySendMessagesModal.react",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebModalManager",
    "WAWebWamEnumTsSurface",
    "WDSButton.react",
    "WDSSwitch.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { use, useCallback, useEffect, useEffectEvent } = c;
    const f = {
        disclaimer: {
            paddingTop: "x1p57kb1",
            $$css: true
        }
    };
    function g(e) {
        const t = o("react-compiler-runtime").c(19);
        const { actionLabel, disclaimer, memberCount, onActionPress, ref, selectedContacts } = e;
        const m = use(r("WAWebAddGroupParticipantGroupHistoryContext.react"));
        const { canShareGroupHistory, setShouldSendGroupHistory, shouldSendGroupHistory } = m;
        let y;
        if (t[0] !== canShareGroupHistory || t[1] !== selectedContacts) {
            y = canShareGroupHistory && o("WAWebGroupHistoryRestrictionHelper").hasUnrestrictedParticipants(selectedContacts);
            t[0] = canShareGroupHistory;
            t[1] = selectedContacts;
            t[2] = y;
        } else {
            y = t[2];
        }
        const C = y;
        let b;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x1n2onr6 x78zum5 xdt5ytf x1p57kb1 xyo0t3i xvg22vi xb0esv5 x1ccr1t9 xpx74rz"
            };
            t[3] = b;
        } else {
            b = t[3];
        }
        let v;
        if (t[4] !== memberCount || t[5] !== setShouldSendGroupHistory || t[6] !== shouldSendGroupHistory || t[7] !== C) {
            const Component = r("CometPlaceholder.react");
            v = C && <Component name="group-history-message-count" fallback={null}><H8Component memberCount={memberCount} onChange={setShouldSendGroupHistory} value={shouldSendGroupHistory}/></Component>;
            t[4] = memberCount;
            t[5] = setShouldSendGroupHistory;
            t[6] = shouldSendGroupHistory;
            t[7] = C;
            t[8] = v;
        } else {
            v = t[8];
        }
        let S;
        if (t[9] !== actionLabel || t[10] !== onActionPress) {
            const Component = r("WDSButton.react");
            S = <Component testid="group-history-add-member-button" onPress={onActionPress} label={actionLabel} widthMode="flexible"/>;
            t[9] = actionLabel;
            t[10] = onActionPress;
            t[11] = S;
        } else {
            S = t[11];
        }
        let R;
        if (t[12] !== disclaimer) {
            const Component = r("WDSText.react");
            R = <Component xstyle={f.disclaimer} colorName="contentDeemphasized" type="Body3">{disclaimer}</Component>;
            t[12] = disclaimer;
            t[13] = R;
        } else {
            R = t[13];
        }
        let L;
        if (t[14] !== ref || t[15] !== v || t[16] !== S || t[17] !== R) {
            L = <div {...babelHelpers.extends({
                ref
            }, b, {
                children: [
                    v,
                    S,
                    R
                ]
            })}/>;
            t[14] = ref;
            t[15] = v;
            t[16] = S;
            t[17] = R;
            t[18] = L;
        } else {
            L = t[18];
        }
        return L;
    }
    function H8Component(e) {
        const t = o("react-compiler-runtime").c(34);
        const { memberCount, onChange, value } = e;
        const c = use(r("WAWebAddGroupParticipantGroupHistoryContext.react"));
        const { groupWid, messageCountPromise, selectedMessageCount, setSelectedMessageCount, toggleActivation } = c;
        let b;
        if (t[0] !== messageCountPromise || t[1] !== toggleActivation || t[2] !== value) {
            b = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = yield messageCountPromise;
                    if (e != null) {
                        o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.footerDisplayed({
                            groupHistoryMessagesCount: e,
                            isGroupHistoryToggledOn: value,
                            toggleActivation,
                            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                        });
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = messageCountPromise;
            t[1] = toggleActivation;
            t[2] = value;
            t[3] = b;
        } else {
            b = t[3];
        }
        const v = useEffectEvent(b);
        let S;
        if (t[4] !== v) {
            S = function() {
                v();
            };
            t[4] = v;
            t[5] = S;
        } else {
            S = t[5];
        }
        let R;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            R = [];
            t[6] = R;
        } else {
            R = t[6];
        }
        useEffect(S, R);
        let L;
        if (t[7] !== onChange) {
            L = function(t, n) {
                onChange(t);
                if (t) {
                    o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.groupHistoryToggleOn({
                        groupHistoryMessagesCount: n,
                        uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                    });
                } else {
                    o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.groupHistoryToggleOff({
                        groupHistoryMessagesCount: n,
                        uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                    });
                }
            };
            t[7] = onChange;
            t[8] = L;
        } else {
            L = t[8];
        }
        const E = L;
        let k;
        if (t[9] !== groupWid || t[10] !== E || t[11] !== selectedMessageCount || t[12] !== setSelectedMessageCount) {
            k = function(currentMessageCount) {
                const e = selectedMessageCount ?? currentMessageCount;
                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.countChangeEntryPointClicked({
                    groupHistoryMessagesCount: e,
                    uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                });
                const Component = r("WAWebGroupHistorySendMessagesModal.react");
                o("WAWebModalManager").ModalManager.openSupportModal(<Component currentMessageCount={currentMessageCount} selectedMessageCount={e} showPinDisclaimer={o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(groupWid)} onDone={function(t) {
                    setSelectedMessageCount(t);
                    E(true, t);
                    o("WAWebModalManager").ModalManager.closeSupportModal();
                }} onCancel={y}/>);
            };
            t[9] = groupWid;
            t[10] = E;
            t[11] = selectedMessageCount;
            t[12] = setSelectedMessageCount;
            t[13] = k;
        } else {
            k = t[13];
        }
        const I = k;
        if (messageCountPromise == null) {
            return null;
        }
        const T = use(messageCountPromise);
        if (T === 0) {
            return null;
        }
        const D = selectedMessageCount ?? T;
        let x;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            x = s._("recent messages");
            t[14] = x;
        } else {
            x = t[14];
        }
        const $ = x;
        let P;
        if (t[15] !== I || t[16] !== T) {
            const Component = r("WDSTextualLink.react");
            P = <Component onClick={function() {
                return I(T);
            }} testid="group-history-message-count-link" textConfig="Body2">{$}</Component>;
            t[15] = I;
            t[16] = T;
            t[17] = P;
        } else {
            P = t[17];
        }
        const N = P;
        let M;
        if (t[18] !== memberCount || t[19] !== N) {
            let w;
            if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = r("WDSText.react");
                w = <Component colorName="contentDefault" type="Body2Emphasized">{s._("Message history:")}</Component>;
                t[21] = w;
            } else {
                w = t[21];
            }
            M = s._("_j{\"*\":\"{message_history_label} Send {message_count_link} to the selected members.\",\"_1\":\"{message_history_label} Send {message_count_link} to the selected member.\"}", [
                s._plural(memberCount),
                s._param("message_history_label", w),
                s._param("message_count_link", N)
            ]);
            t[18] = memberCount;
            t[19] = N;
            t[20] = M;
        } else {
            M = t[20];
        }
        const A = M;
        let F;
        if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
            F = {
                className: "x78zum5 x1qughib x6s0dn4 xvpt6g3"
            };
            t[22] = F;
        } else {
            F = t[22];
        }
        let O;
        if (t[23] !== A) {
            const Component = r("WDSText.react");
            O = <Component colorName="contentDefault" type="Body2">{A}</Component>;
            t[23] = A;
            t[24] = O;
        } else {
            O = t[24];
        }
        let B;
        if (t[25] !== D || t[26] !== E) {
            B = function(t) {
                E(t, D);
            };
            t[25] = D;
            t[26] = E;
            t[27] = B;
        } else {
            B = t[27];
        }
        let W;
        if (t[28] !== B || t[29] !== value) {
            const Component = r("WDSSwitch.react");
            W = <Component testid="group-history-send-toggle" value={value} onChange={B}/>;
            t[28] = B;
            t[29] = value;
            t[30] = W;
        } else {
            W = t[30];
        }
        let q;
        if (t[31] !== O || t[32] !== W) {
            q = <div {...babelHelpers.extends({}, F, {
                children: [
                    O,
                    W
                ]
            })}/>;
            t[31] = O;
            t[32] = W;
            t[33] = q;
        } else {
            q = t[33];
        }
        return q;
    }
    function y() {
        o("WAWebModalManager").ModalManager.closeSupportModal();
    }
    l.default = g;
}, 226);