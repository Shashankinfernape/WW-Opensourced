__d("WAWebBizComplianceUtil", [
    "fbt",
    "WAWebBizCatalogGatingUtils",
    "WAWebBusinessProfileTypes",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebNonEmptyString"
], function(t, n, r, o, a, i, l, s) {
    const e = function() {
        let t;
        return {
            [(t = o("WAWebBusinessProfileTypes")).businessTypeOptions.limitedLiabilityPartnership]: s._("Limited liability partnership"),
            [t.businessTypeOptions.soleProprietorship]: s._("Sole proprietorship"),
            [t.businessTypeOptions.partnership]: s._("Partnership"),
            [t.businessTypeOptions.publicCompany]: s._("Public company"),
            [t.businessTypeOptions.privateCompany]: s._("Private company"),
            [t.businessTypeOptions.other]: s._("Other")
        };
    };
    function u(t) {
        const n = t || {};
        const { entityType, entityTypeCustom, isRegistered } = n;
        const l = e();
        const u = o("WAWebNonEmptyString").asMaybeNonEmptyString(entityTypeCustom) || entityType && l[entityType] || "";
        if (!u) {
            return "";
        }
        let c = "";
        if ([
            o("WAWebBusinessProfileTypes").businessTypeOptions.partnership,
            o("WAWebBusinessProfileTypes").businessTypeOptions.other
        ].includes(entityType)) {
            c = isRegistered != null && isRegistered ? s._("Registered business") : s._("Not registered business");
        }
        return `${u.toString()}${c ? ` (${c.toString()})` : ""}`;
    }
    const c = (entityType, entityTypeCustom)=>entityType != null && entityType !== "" || entityTypeCustom != null && entityTypeCustom !== "";
    function d(e) {
        return !!(e != null && e.trim());
    }
    function m(e, t) {
        if (o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(t)) {
            return d(e);
        }
        return true;
    }
    const p = ({ contactId, field, fields, source, value })=>{
        if (o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(contactId)) {
            return fields.some((e)=>d(e === field ? value : source?.[e]));
        }
        return true;
    };
    const _ = ()=>[
            "mobileNumber",
            "landlineNumber"
        ];
    const f = ()=>[
            ..._()
        ];
    const g = ()=>[
            ..._(),
            "email"
        ];
    function h({ contactId, customerCareDetails, field, value }) {
        return p({
            contactId,
            field,
            fields: f(),
            source: customerCareDetails,
            value
        });
    }
    function y({ contactId, field, grievanceOfficerDetails, value }) {
        return p({
            contactId,
            field,
            fields: g(),
            source: grievanceOfficerDetails,
            value
        });
    }
    function C(e, t = {}, n) {
        if (!o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(n)) {
            return true;
        }
        if (!t) {
            return false;
        }
        const r = t;
        const { customerCareDetails, entityName, entityType, entityTypeCustom, grievanceOfficerDetails } = r;
        return [
            e,
            entityName,
            customerCareDetails?.email,
            grievanceOfficerDetails?.name
        ].every((e)=>m(e, n)) && c(entityType, entityTypeCustom) && h({
            contactId: n,
            customerCareDetails
        }) && y({
            contactId: n,
            grievanceOfficerDetails
        });
    }
    function b(customerCareDetails, t, n, r, o) {
        if (h({
            contactId: o,
            customerCareDetails,
            field: t,
            value: n
        })) {
            return r;
        }
        return "";
    }
    function v(grievanceOfficerDetails, t, n, r, o) {
        if (y({
            contactId: o,
            field: t,
            grievanceOfficerDetails,
            value: n
        })) {
            return r;
        }
        return "";
    }
    function S(e) {
        const n = o("WAWebLidMigrationUtils").toPn(e)?.user;
        if (n != null) {
            return o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(n);
        }
    }
    l.getEntityTypeTextMapping = e;
    l.getEntityTypeText = u;
    l.existsFieldIgnoreHardEnforcement = d;
    l.existsField = m;
    l.existsCustomerCareDetailsContact = h;
    l.existsGrievanceOfficerDetailsContact = y;
    l.isBusinessCompliant = C;
    l.getCustomerCareDetailsError = b;
    l.getGrievanceOfficerDetailsError = v;
    l.getCountryShortcodeByWid = S;
}, 226);