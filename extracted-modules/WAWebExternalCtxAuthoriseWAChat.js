__d("WAWebExternalCtxAuthoriseWAChat", [
    "WALogger",
    "WAWebExternalCtxAuthoriseWAChatMutation",
    "WAWebExternalEntryPointPrefs",
    "WAWebRelayClient"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = "1";
    const d = "2";
    function m({ chatId, deepLinkType, isExternal, partnerToken }) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[external_ctx] Authorising chat"
        ])));
        return o("WAWebRelayClient").commitMutation(r("WAWebExternalCtxAuthoriseWAChatMutation"), {
            input: {
                recipient_jid: chatId.toString(),
                deeplink_type: deepLinkType,
                deeplink_source: isExternal ? c : d,
                deeplink_platform: "Web",
                partner_token: partnerToken
            }
        }).then((e)=>{
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[external_ctx] Authorisation successful"
            ])));
            o("WAWebExternalEntryPointPrefs").saveExternalEntryPoint({
                authSuccess: e?.xwa_external_ctx_authorise_wa_chat?.success === true,
                chatId,
                deepLinkType,
                partnerName: e?.xwa_external_ctx_authorise_wa_chat?.partner_name
            });
        }).catch((e)=>{
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[external_ctx] Authorisation error"
            ])));
        });
    }
    l.default = m;
}, 98);