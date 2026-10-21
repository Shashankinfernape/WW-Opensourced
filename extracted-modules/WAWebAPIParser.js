__d("WAWebAPIParser", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u({ encryptedKeyElementValue, nonceElementValue, authTagElementValue, encryptedDataElementValue }) {
        return {
            key: encryptedKeyElementValue,
            nonce: nonceElementValue,
            tag: authTagElementValue,
            data: encryptedDataElementValue
        };
    }
    function c(e) {
        const l = {
            is_eligible_to_link_to_linked_fb: e.is_eligible_to_link_to_linked_fb ?? false,
            is_eligible_to_link_to_linked_ig: e.is_eligible_to_link_to_linked_ig ?? false,
            is_eligible_to_link_to_linked_rl: e.is_eligible_to_link_to_linked_rl ?? false,
            is_eligible_to_link_to_unlinked_fb: e.is_eligible_to_link_to_unlinked_fb ?? false,
            is_eligible_to_link_to_unlinked_ig: e.is_eligible_to_link_to_unlinked_ig ?? false,
            is_eligible_to_link_to_unlinked_rl: e.is_eligible_to_link_to_unlinked_rl ?? false
        };
        return l;
    }
    function d(e) {
        let fbCrosspostingDestinationId = null;
        let igCrosspostingDestinationId = null;
        for (const r of e){
            if (r.waffle_da === "F") {
                fbCrosspostingDestinationId = r.waffle_di;
            }
            if (r.waffle_da === "I") {
                igCrosspostingDestinationId = r.waffle_di;
            }
        }
        return {
            fbCrosspostingDestinationId,
            igCrosspostingDestinationId
        };
    }
    function m(t) {
        const r = t.waffle_fx_service_data?.services;
        const a = r?.foa_to_wa_link_eligibility;
        if (a == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] foAToWALinkEligibility is null"
            ])));
            return;
        }
        const foAToWALinkEligibility = c(babelHelpers.extends({}, a));
        const l = r?.waffle_sxs;
        if (l == null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] destinationList is null"
            ])));
            return;
        }
        const u = d(l);
        const { fbCrosspostingDestinationId, igCrosspostingDestinationId } = u;
        return {
            fbCrosspostingDestinationId,
            igCrosspostingDestinationId,
            foAToWALinkEligibility
        };
    }
    l.parseRSAEncryptionMetadataMixin = u;
    l.parseServiceData = m;
}, 98);