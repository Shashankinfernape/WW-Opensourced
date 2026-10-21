__d("WAWebBusinessAdCreationUtils", [
    "WALogger",
    "WAWebQueryLinkedAccountNonceJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = "https://www.facebook.com/page_promotions/create?";
    const c = "https://www.facebook.com/";
    const d = "/ad_center/?ref_source=";
    const m = "page_id";
    const p = "so";
    const _ = "source";
    const f = "request_data";
    const g = "objective";
    const h = "https://www.facebook.com/pages/whatsapp?";
    const y = "code";
    const C = "pn";
    const b = "value_prop";
    const v = "redirect_url";
    const S = ({ adCreationUrl, nonce, pageId, phoneNumber })=>{
        const a = new URLSearchParams;
        a.append(y, nonce);
        a.append(C, phoneNumber);
        a.append(b, "Ads");
        if (pageId != null) {
            a.append(m, pageId);
        }
        a.append(v, adCreationUrl);
        return h + a.toString();
    };
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { activeAccountInfo, flowId, sourceAdCreation } = e;
            const i = new URLSearchParams;
            i.append(g, "boosted_message");
            const pageId = activeAccountInfo === "not-linked" ? undefined : activeAccountInfo.id;
            if (pageId != null) {
                i.append(m, pageId);
            }
            const c = {
                flow_id: flowId
            };
            const d = JSON.stringify(c);
            let h;
            switch(e.sourceAdCreation){
                case "whatsapp_smb_web_catalog":
                case "whatsapp_smb_web_catalog_product":
                    h = {
                        whatsapp_media_source_type: "catalog",
                        whatsapp_catalog_product_ids: [
                            e.productId
                        ]
                    };
                    break;
                default:
                    e.sourceAdCreation;
                    h = {
                        whatsapp_media_source_type: "new_content_creation"
                    };
                    break;
            }
            const y = JSON.stringify(h);
            i.append(_, sourceAdCreation);
            i.append(f, btoa(d));
            i.append(p, btoa(y));
            const C = activeAccountInfo !== "not-linked" && activeAccountInfo.type === "whatsapp";
            const b = C && activeAccountInfo !== "not-linked" && activeAccountInfo.hasCreatedAd;
            const v = activeAccountInfo !== "not-linked" && activeAccountInfo.hasFacebookPage;
            if (!v || b) {
                const nonce = yield o("WAWebQueryLinkedAccountNonceJob").queryNonce();
                if (nonce == null) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ctwa] AdCreation URL Nonce is null"
                    ])));
                    throw r("err")("[ctwa] AdCreation URL Nonce is null");
                }
                return S({
                    adCreationUrl: u + i.toString(),
                    nonce,
                    pageId,
                    phoneNumber: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user
                });
            }
            return u + i.toString();
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return c + e.id + d + t;
    }
    function k(t) {
        switch(t){
            case "business_home_qp_card":
                return "whatsapp_smb_web_business_tools_top_card";
            case "banner":
                return "whatsapp_smb_web_ad_creation_home_banner";
            default:
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getAdCreationTypeFromCampaignType: unknown campaign type: ",
                    ""
                ])), t);
                return "whatsapp_smb_web_ad_creation_home_banner";
        }
    }
    l.getWhatsappAdCreationUrl = R;
    l.getWhatsappManageAdsUrl = E;
    l.getAdCreationTypeFromCampaignType = k;
}, 98);