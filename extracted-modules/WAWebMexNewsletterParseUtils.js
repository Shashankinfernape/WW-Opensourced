__d("WAWebMexNewsletterParseUtils", [
    "WAJids",
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterModelUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e != null && e?.id != null) {
            const U = e.thread_metadata?.creation_time;
            const V = e.thread_metadata?.invite;
            const H = e.thread_metadata?.name;
            const G = e.thread_metadata?.subscribers_count;
            const z = e.viewer_metadata?.settings;
            const j = e.thread_metadata?.verification;
            const K = e.state?.type;
            const Q = e.thread_metadata?.description;
            const X = e.viewer_metadata?.role;
            const Y = e.thread_metadata?.picture;
            const J = e.thread_metadata?.preview;
            const Z = e.thread_metadata?.settings?.reaction_codes?.value;
            const ee = e.thread_metadata?.wamo_sub?.plan_id;
            const te = e.viewer_metadata?.wamo_sub_status;
            const ne = e.status_metadata?.last_status_server_id;
            const re = e.status_metadata?.last_status_sent_time;
            const oe = e.thread_metadata?.pinned_messages;
            const ae = babelHelpers.extends({
                idJid: o("WAJids").toNewsletterJid(e.id),
                newsletterCreationTimeMetadataMixin: s(U) ?? null,
                newsletterInviteLinkMetadataMixin: u(V) ?? null,
                newsletterNameMetadataMixin: c(H) ?? null,
                newsletterSubscribersMetadataMixin: d(G) ?? null,
                newsletterUserSettingsMetadataMixin: m(z),
                newsletterVerificationMetadataMixin: p(j) ?? null,
                newsletterStateMetadataMixin: _(K) ?? null,
                newsletterDescriptionMetadataMixin: f(Q) ?? null,
                newsletterMembershipMetadataMixin: g(X) ?? null,
                newsletterPictureMetadataMixin: C([
                    Y,
                    J
                ]) ?? null,
                hasNewsletterLinkedAccountsMetadataMixin: false,
                newsletterPrivacyMetadataMixin: null,
                newsletterReactionCodesSettingMetadataMixin: Z != null ? h(Z) : undefined
            }, oe != null && {
                newsletterPinnedMessagesMetadataMixin: y(oe)
            });
            if (o("WAWebNewsletterGatingUtils").isWamoSubExperienceEnabled()) {
                ae.newsletterWamoSubPlanIdMetadataMixin = b(ee);
                ae.newsletterWamoSubStatusMetadataMixin = v(te);
            }
            if (ne != null && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                ae.newsletterStatusMetadata = o("WAWebNewsletterModelUtils").toStatusMetadata(ne, re);
            }
            return ae;
        }
        return null;
    }
    function s(e) {
        if (e != null) {
            return {
                creationTimeValue: Number(e)
            };
        }
    }
    function u(inviteCode) {
        if (inviteCode != null) {
            return {
                inviteCode
            };
        }
    }
    function c(e) {
        if (e != null) {
            return {
                nameId: e.id,
                nameUpdateTime: Number(e?.update_time),
                nameElementValue: e?.text ?? ""
            };
        }
    }
    function d(e) {
        if (e != null) {
            return {
                subscribersCount: Number(e)
            };
        }
    }
    function m(e) {
        return (e ?? []).map((e)=>({
                type: e.type,
                value: e.value
            }));
    }
    function p(e) {
        if (e != null) {
            const verificationState = e.toLowerCase() === "unverified" ? "unverified" : "verified";
            return {
                verificationState
            };
        }
    }
    function _(e) {
        let stateType;
        if (e?.toLowerCase() === "active") {
            stateType = "active";
        } else if (e?.toLowerCase() === "suspended") {
            stateType = "suspended";
        } else if (e?.toLowerCase() === "geosuspended") {
            stateType = "geosuspended";
        }
        if (stateType != null) {
            return {
                stateType
            };
        }
    }
    function f(e) {
        const elementValue = e?.text;
        const n = e?.update_time;
        if (e != null && elementValue != null && n != null) {
            return {
                descriptionQueryDescriptionResponseMixin: {
                    id: e.id,
                    updateTime: Number(n),
                    elementValue
                }
            };
        }
    }
    function g(e) {
        if (e != null) {
            let membershipType;
            switch(e.toLowerCase()){
                case "admin":
                    membershipType = "admin";
                    break;
                case "guest":
                    membershipType = "guest";
                    break;
                case "owner":
                    membershipType = "owner";
                    break;
                case "subscriber":
                    membershipType = "subscriber";
                    break;
            }
            if (membershipType != null) {
                return {
                    membershipType
                };
            }
        }
    }
    function h(e) {
        switch(e){
            case "ALL":
                return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All;
            case "BLOCKLIST":
                return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Blocklist;
            case "NONE":
                return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None;
            case "BASIC":
                return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic;
            default:
                return null;
        }
    }
    function y(e) {
        const t = [];
        for (const n of e){
            const r = Number(n.message_id);
            const a = Number(n.expiry_ts);
            if (Number.isSafeInteger(r) && r > 0 && Number.isFinite(a) && a > 0) {
                t.push({
                    serverId: r,
                    expiryTs: o("WATimeUtils").castToUnixTime(a)
                });
            }
        }
        return t;
    }
    function C(e) {
        const t = [];
        for (const n of e){
            if (n != null && n != null && n.type != null) {
                const r = n.type.toLowerCase() === "image" ? "image" : "preview";
                if (n.direct_path != null && n.direct_path !== "" && n.id != null && n.type != null) {
                    t.push({
                        queryPictureDirectPathOrEmptyResponseMixinGroup: {
                            name: "QueryPictureDirectPathResponse",
                            value: {
                                directPath: n.direct_path,
                                type: r,
                                id: n.id
                            }
                        }
                    });
                } else if (n.direct_path === "" || n.direct_path == null) {
                    t.push({
                        queryPictureDirectPathOrEmptyResponseMixinGroup: {
                            name: "QueryPictureEmptyResponse",
                            value: {
                                type: "image"
                            }
                        }
                    });
                }
            }
        }
        return {
            picture: [].concat(t)
        };
    }
    function b(e) {
        if (e != null) {
            return e;
        }
    }
    function v(e) {
        if (e != null) {
            switch(e.toLowerCase()){
                case "active":
                    return o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE;
                case "inactive":
                    return o("WAWebCommonNewsletterEnums").WamoSubStatus.INACTIVE;
                default:
                    return;
            }
        }
    }
    l.parseMexNewsletterResponse = e;
    l.toReactionCodesSettingMixin = h;
    l.toPinnedMessagesMixin = y;
}, 98);