__d("WAWebMexFetchNewsletterEnforcementsJob", [
    "WATimeUtils",
    "WAWebAsISOCountryCode",
    "WAWebCommonNewsletterEnums",
    "WAWebLocaleModules",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterEnforcementsJobQuery.graphql",
    "asyncToGeneratorRuntime",
    "filterNulls"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexFetchNewsletterEnforcementsJobQuery.graphql");
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = {
                newsletter_id: e,
                locale: t
            };
            const a = yield o("WAWebMexClient").fetchQuery(s, n);
            const i = a?.xwa2_channel_enforcements;
            if (i == null) {
                return null;
            }
            const l = {
                profilePictureDeletions: [],
                suspensions: [],
                violatingMessages: [],
                geoSuspensions: [],
                adminProfiles: []
            };
            if (i.admin_profiles != null) {
                const u = [];
                i.admin_profiles.forEach((e)=>{
                    if (!m(e)) {
                        const n = _(e, o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE);
                        const r = e.enforcement_extra_data?.enforcement_target_data;
                        if (r?.id != null || r?.name != null) {
                            n.enforcementExtraData = babelHelpers.extends({}, n.enforcementExtraData, {
                                adminProfileData: {
                                    id: r.id,
                                    name: r.name,
                                    pictureId: r.picture?.id,
                                    pictureDirectPath: r.picture?.direct_path
                                }
                            });
                        }
                        u.push(n);
                    }
                });
                l.adminProfiles = u;
            }
            if (i.profile_picture_deletions != null) {
                const c = [];
                i.profile_picture_deletions.forEach((e)=>{
                    if (!m(e)) {
                        c.push(_(e, o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION));
                    }
                });
                l.profilePictureDeletions = c;
            }
            if (i.suspensions != null) {
                const p = [];
                i.suspensions.forEach((e)=>{
                    if (!m(e)) {
                        const n = _(e, o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND);
                        n.enforcementType = n.enforcementExtraData?.enforcementTargetData != null ? o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM : o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND;
                        p.push(n);
                    }
                });
                l.suspensions = p;
            }
            if (i.violating_messages != null) {
                const f = [];
                i.violating_messages.forEach((e)=>{
                    if (!m(e.base_enforcement_data)) {
                        const violatingContentData = d(e.content_data);
                        if (violatingContentData != null) {
                            f.push(babelHelpers.extends({}, _(e.base_enforcement_data, o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG), {
                                violatingContentData
                            }));
                        }
                    }
                });
                l.violatingMessages = f;
            }
            const i_geosuspensions = i.geosuspensions;
            if (i_geosuspensions != null) {
                const h = [];
                yield o("WAWebLocaleModules").getCountryData().then((e)=>{
                    i_geosuspensions.forEach((t)=>{
                        if (!m(t.base_enforcement_data)) {
                            const l = t.country_codes?.map(function(t) {
                                const countryCode = o("WAWebAsISOCountryCode").asISOCountryCode(t);
                                const countryName = e[t.toUpperCase()];
                                if (countryCode != null && countryName != null) {
                                    return {
                                        countryCode,
                                        countryName
                                    };
                                }
                                return null;
                            });
                            let countryCodes;
                            if (l != null) {
                                countryCodes = r("filterNulls")(l);
                            }
                            const u = _(t.base_enforcement_data, o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND);
                            u.enforcementType = u.enforcementExtraData?.enforcementTargetData != null ? o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM : o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND;
                            if (countryCodes != null && countryCodes?.length > 0) {
                                h.push(babelHelpers.extends({}, u, {
                                    countryCodes
                                }));
                            }
                        }
                    });
                }).finally(()=>{
                    l.geoSuspensions = h;
                });
            }
            return l;
        });
        return c.apply(this, arguments);
    }
    function d(content_data) {
        if (content_data == null) {
            return null;
        }
        if (content_data.server_id != null) {
            return {
                contentType: o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS,
                serverId: parseInt(content_data.server_id, 10)
            };
        }
        if (content_data.server_msg_id != null) {
            return {
                contentType: o("WAWebCommonNewsletterEnums").ViolatingContentType.MESSAGE,
                serverId: Number(content_data.server_msg_id)
            };
        }
        return null;
    }
    function m(e) {
        return e.appeal_creation_time == null && e.appeal_state !== "NOT_APPEALED" && e.appeal_state !== "NON_APPEALABLE";
    }
    function p(enforcement_extra_data) {
        if (enforcement_extra_data == null) {
            return null;
        }
        const t = enforcement_extra_data?.ip_violation_report_data;
        const n = enforcement_extra_data?.enforcement_target_data;
        const r = enforcement_extra_data?.enforcing_entity_data;
        const a = enforcement_extra_data?.appeal_extra_data;
        const enforcementOriginWorkflow = enforcement_extra_data?.enforcement_origin_workflow;
        const enforcementOriginLegalBasis = enforcement_extra_data?.enforcement_origin_legal_basis;
        let s = null;
        if (t != null) {
            s = {
                ipViolationReportData: {
                    reportFbid: t.report_fbid,
                    appealFormUrl: t.appeal_form_url,
                    reporterEmail: t.reporter_email,
                    reporterName: t.reporter_name
                }
            };
        }
        if (n != null && (n.server_id != null || n.server_msg_id != null)) {
            const contentType = n.server_id != null ? o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS : o("WAWebCommonNewsletterEnums").ViolatingContentType.MESSAGE;
            const serverId = n.server_msg_id != null ? parseInt(n.server_msg_id, 10) : parseInt(n.server_id, 10);
            s = babelHelpers.extends({}, s, {
                enforcementTargetData: {
                    contentType,
                    serverId
                }
            });
        }
        if (a != null && a.appeal_form_url != null) {
            s = babelHelpers.extends({}, s, {
                appealExtraData: {
                    appealFormUrl: a.appeal_form_url
                }
            });
        }
        if (r != null && r.name != null) {
            s = babelHelpers.extends({}, s, {
                enforcingEntityData: {
                    name: r.name
                }
            });
        }
        if (enforcementOriginWorkflow != null) {
            s = babelHelpers.extends({}, s, {
                enforcementOriginWorkflow
            });
        }
        if (enforcementOriginLegalBasis != null) {
            s = babelHelpers.extends({}, s, {
                enforcementOriginLegalBasis
            });
        }
        return s;
    }
    function _(e, enforcementType) {
        const e_enforcement_policy_information = e.enforcement_policy_information;
        return {
            appealCreationTime: o("WATimeUtils").castToUnixTime(parseInt(e.appeal_creation_time ?? 0, 10)),
            appealReasonOptions: e.appeal_reason_options?.map(function({ label, reason }) {
                return {
                    label,
                    reason
                };
            }) ?? [],
            enforcementCreationTime: o("WATimeUtils").castToUnixTime(parseInt(e.enforcement_creation_time, 10)),
            appealState: e.appeal_state,
            enforcementViolationCategory: e.enforcement_violation_category,
            enforcementId: e.enforcement_id,
            enforcementType,
            enforcementSource: e.enforcement_source ?? null,
            enforcementExtraData: p(e.enforcement_extra_data),
            enforcementPolicyInformation: e_enforcement_policy_information != null ? {
                overview: e_enforcement_policy_information.overview,
                headline: e_enforcement_policy_information.headline,
                subtitle: e_enforcement_policy_information.subtitle,
                explanation: e_enforcement_policy_information.explanation,
                adminDisclaimer: e_enforcement_policy_information.admin_disclaimer
            } : null
        };
    }
    l.mexFetchNewsletterEnforcements = u;
}, 98);