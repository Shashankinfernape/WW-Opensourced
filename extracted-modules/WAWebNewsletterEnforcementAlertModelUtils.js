__d("WAWebNewsletterEnforcementAlertModelUtils", [
    "WAWebCommonNewsletterEnums",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS) {
            return "STATUS";
        }
        return "MESSAGE";
    }
    function s(e, msgModelMap, statusModelMap) {
        const a = e.contentType === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS ? statusModelMap : msgModelMap;
        return {
            serverId: e.serverId,
            msgData: a?.get(e.serverId) ?? null
        };
    }
    function u(t, n, statusModelMap, a) {
        const i = [];
        let l;
        t?.map(function(t) {
            let c;
            const d = t.enforcementExtraData?.enforcementTargetData;
            const m = d?.serverId ?? null;
            const p = d?.contentType === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS ? statusModelMap : n;
            const _ = m != null && (c = p?.get(m)) != null ? c : null;
            const f = new Map;
            const g = {
                id: t.enforcementId,
                chatId: o("WAWebWidFactory").createWid(a),
                appealReasonOptions: t.appealReasonOptions,
                enforcementViolationCategory: t.enforcementViolationCategory,
                enforcementType: t.enforcementType,
                enforcementId: t.enforcementId,
                enforcementExtraData: t.enforcementExtraData,
                enforcementPolicyInformation: t.enforcementPolicyInformation,
                enforcementSource: t.enforcementSource,
                appealCreationTime: t.appealCreationTime,
                appealState: t.appealState,
                appealReason: null,
                countryCode: null,
                lastUpdated: Date.now(),
                msgData: _,
                violatingContentData: d != null ? {
                    contentType: d.contentType,
                    serverId: d.serverId
                } : null
            };
            if (m != null && _ != null) {
                const y = e(d?.contentType ?? o("WAWebCommonNewsletterEnums").ViolatingContentType.MESSAGE);
                f.set(`${y}_${m}`, g);
            }
            l = {
                id: t.enforcementId,
                chatId: o("WAWebWidFactory").createWid(a),
                enforcementCreationTime: t.enforcementCreationTime,
                enforcementViolationCategory: t.enforcementViolationCategory,
                enforcementType: t.enforcementType,
                enforcementId: t.enforcementId,
                enforcementExtraData: t.enforcementExtraData,
                enforcementPolicyInformation: t.enforcementPolicyInformation,
                targetMsgMapForEvidence: f,
                lastUpdated: Date.now(),
                enforcementSource: t.enforcementSource,
                countryCodes: [],
                appeal: g
            };
            i.push(l);
        });
        return i;
    }
    function c({ hideChannelAlerts, msgModelMap, newsletterJid, statusModelMap }) {
        const l = new Map;
        hideChannelAlerts.map((t)=>{
            const t_violatingContentData = t.violatingContentData;
            const u = s(t_violatingContentData, msgModelMap, statusModelMap);
            const { msgData, serverId } = u;
            const m = {
                id: t.enforcementId,
                chatId: o("WAWebWidFactory").createWid(newsletterJid),
                appealReasonOptions: t.appealReasonOptions,
                enforcementViolationCategory: t.enforcementViolationCategory,
                enforcementType: t.enforcementType,
                enforcementId: t.enforcementId,
                enforcementExtraData: t.enforcementExtraData,
                enforcementPolicyInformation: t.enforcementPolicyInformation,
                enforcementSource: t.enforcementSource,
                appealCreationTime: t.appealCreationTime,
                appealState: t.appealState,
                appealReason: null,
                countryCode: null,
                lastUpdated: Date.now(),
                msgData,
                violatingContentData: t_violatingContentData
            };
            l.set(`${e(t_violatingContentData.contentType)}_${serverId}`, m);
        });
        const u = hideChannelAlerts[0];
        if (u == null) {
            return null;
        }
        const u_violatingContentData = u.violatingContentData;
        const d = s(u_violatingContentData, msgModelMap, statusModelMap);
        const d_msgData = d.msgData;
        return {
            id: u.enforcementId,
            chatId: o("WAWebWidFactory").createWid(newsletterJid),
            enforcementCreationTime: u.enforcementCreationTime,
            enforcementViolationCategory: u.enforcementViolationCategory,
            enforcementType: u.enforcementType,
            enforcementId: u.enforcementId,
            enforcementExtraData: u.enforcementExtraData,
            enforcementPolicyInformation: u.enforcementPolicyInformation,
            targetMsgMapForEvidence: l,
            lastUpdated: Date.now(),
            enforcementSource: u.enforcementSource,
            countryCodes: [],
            appeal: {
                id: u.enforcementId,
                chatId: o("WAWebWidFactory").createWid(newsletterJid),
                appealReasonOptions: u.appealReasonOptions,
                enforcementViolationCategory: u.enforcementViolationCategory,
                enforcementType: u.enforcementType,
                enforcementId: u.enforcementId,
                enforcementExtraData: u.enforcementExtraData,
                enforcementPolicyInformation: u.enforcementPolicyInformation,
                enforcementSource: u.enforcementSource,
                appealCreationTime: u.appealCreationTime,
                appealState: u.appealState,
                appealReason: null,
                countryCode: null,
                lastUpdated: Date.now(),
                msgData: d_msgData,
                violatingContentData: u_violatingContentData
            }
        };
    }
    function d(e, t) {
        const n = [];
        let r;
        e?.map(function(e) {
            const a = {
                id: e.enforcementId,
                chatId: o("WAWebWidFactory").createWid(t),
                appealReasonOptions: e.appealReasonOptions,
                enforcementViolationCategory: e.enforcementViolationCategory,
                enforcementType: e.enforcementType,
                enforcementId: e.enforcementId,
                enforcementExtraData: e.enforcementExtraData,
                enforcementPolicyInformation: e.enforcementPolicyInformation,
                enforcementSource: e.enforcementSource,
                appealCreationTime: e.appealCreationTime,
                appealState: e.appealState,
                appealReason: null,
                countryCode: null,
                lastUpdated: Date.now(),
                msgData: null,
                violatingContentData: null
            };
            r = {
                id: e.enforcementId,
                chatId: o("WAWebWidFactory").createWid(t),
                enforcementCreationTime: e.enforcementCreationTime,
                enforcementViolationCategory: e.enforcementViolationCategory,
                enforcementType: e.enforcementType,
                enforcementId: e.enforcementId,
                enforcementExtraData: e.enforcementExtraData,
                enforcementPolicyInformation: e.enforcementPolicyInformation,
                targetMsgMapForEvidence: null,
                lastUpdated: Date.now(),
                enforcementSource: e.enforcementSource,
                countryCodes: [],
                appeal: a
            };
            n.push(r);
        });
        return n;
    }
    function m(e, t) {
        const n = [];
        let r;
        e?.map(function(e) {
            const a = {
                id: e.enforcementId,
                chatId: o("WAWebWidFactory").createWid(t),
                appealReasonOptions: e.appealReasonOptions,
                enforcementViolationCategory: e.enforcementViolationCategory,
                enforcementType: e.enforcementType,
                enforcementId: e.enforcementId,
                enforcementExtraData: e.enforcementExtraData,
                enforcementPolicyInformation: e.enforcementPolicyInformation,
                enforcementSource: e.enforcementSource,
                appealCreationTime: e.appealCreationTime,
                appealState: e.appealState,
                appealReason: null,
                countryCode: null,
                lastUpdated: Date.now(),
                msgData: null,
                violatingContentData: null
            };
            r = {
                id: e.enforcementId,
                chatId: o("WAWebWidFactory").createWid(t),
                enforcementCreationTime: e.enforcementCreationTime,
                enforcementViolationCategory: e.enforcementViolationCategory,
                enforcementType: e.enforcementType,
                enforcementId: e.enforcementId,
                enforcementExtraData: e.enforcementExtraData,
                enforcementPolicyInformation: e.enforcementPolicyInformation,
                targetMsgMapForEvidence: null,
                lastUpdated: Date.now(),
                enforcementSource: e.enforcementSource,
                countryCodes: [],
                appeal: a
            };
            n.push(r);
        });
        return n;
    }
    function p({ geosuspensionAlerts, msgModelMap, newsletterJid, statusModelMap }) {
        const l = [];
        let s;
        geosuspensionAlerts?.map(function(t) {
            let c;
            const d = t.enforcementExtraData?.enforcementTargetData;
            const m = d?.serverId ?? null;
            const p = d?.contentType === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS ? statusModelMap : msgModelMap;
            const _ = m != null && (c = p?.get(m)) != null ? c : null;
            const f = new Map;
            const g = {
                id: t.enforcementId,
                chatId: o("WAWebWidFactory").createWid(newsletterJid),
                appealReasonOptions: t.appealReasonOptions,
                enforcementViolationCategory: t.enforcementViolationCategory,
                enforcementType: t.enforcementType,
                enforcementId: t.enforcementId,
                enforcementExtraData: t.enforcementExtraData,
                enforcementPolicyInformation: t.enforcementPolicyInformation,
                enforcementSource: t.enforcementSource,
                appealCreationTime: t.appealCreationTime,
                appealState: t.appealState,
                appealReason: null,
                countryCode: t.countryCodes,
                lastUpdated: Date.now(),
                msgData: _,
                violatingContentData: d != null ? {
                    contentType: d.contentType,
                    serverId: d.serverId
                } : null
            };
            if (m != null && _ != null) {
                const y = e(d?.contentType ?? o("WAWebCommonNewsletterEnums").ViolatingContentType.MESSAGE);
                f.set(`${y}_${m}`, g);
            }
            s = {
                id: t.enforcementId,
                chatId: o("WAWebWidFactory").createWid(newsletterJid),
                enforcementCreationTime: t.enforcementCreationTime,
                enforcementViolationCategory: t.enforcementViolationCategory,
                enforcementType: t.enforcementType,
                enforcementId: t.enforcementId,
                enforcementExtraData: t.enforcementExtraData,
                enforcementPolicyInformation: t.enforcementPolicyInformation,
                targetMsgMapForEvidence: f,
                lastUpdated: Date.now(),
                enforcementSource: t.enforcementSource,
                countryCodes: t.countryCodes,
                appeal: g
            };
            l.push(s);
        });
        return l;
    }
    function _(e, t, statusModelMap, r) {
        const o = [];
        if (e?.suspensions != null) {
            o.push(...u(e?.suspensions, t, statusModelMap, r));
        }
        if (e?.geoSuspensions != null) {
            o.push(...p({
                geosuspensionAlerts: e?.geoSuspensions,
                msgModelMap: t,
                newsletterJid: r,
                statusModelMap
            }));
        }
        if (e?.profilePictureDeletions != null) {
            o.push(...d(e?.profilePictureDeletions, r));
        }
        if (e?.adminProfiles != null) {
            o.push(...m(e?.adminProfiles, r));
        }
        if (e?.violatingMessages != null) {
            const a = c({
                hideChannelAlerts: e?.violatingMessages,
                msgModelMap: t,
                newsletterJid: r,
                statusModelMap
            });
            if (a != null) {
                o.push(a);
            }
        }
        return o;
    }
    l.convertNewsletterBaseEnforcementTypeToNewsletterAlert = _;
}, 98);