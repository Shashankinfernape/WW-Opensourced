__d("CookieConsent", [
    "InitialCookieConsent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set((e || (e = r("InitialCookieConsent"))).initialConsent);
    let e_shouldShowCookieBanner = e.shouldShowCookieBanner;
    var c = {
        setConsented: function() {
            s.add(1);
            e_shouldShowCookieBanner = false;
        },
        shouldShowCookieBanner: function() {
            return e_shouldShowCookieBanner;
        },
        shouldWaitForDeferredDatrCookie: function() {
            return (e || (e = r("InitialCookieConsent"))).shouldWaitForDeferredDatrCookie;
        },
        isFirstPartyStorageAllowed: function() {
            return !(e || (e = r("InitialCookieConsent"))).noCookies && c.hasFirstPartyConsent();
        },
        hasFirstPartyConsent: function() {
            return s.has(1);
        },
        hasIndividualThirdPartyIntegrationConsent: function(t) {
            const n = c.hasThirdPartyConsent([
                t
            ]);
            return n.get(t) ?? false;
        },
        hasThirdPartyConsent: function(n) {
            const t = new Map;
            if (!(e || (e = r("InitialCookieConsent"))).hasGranularThirdPartyCookieConsent) {
                const o = s.has(2);
                for (const a of n){
                    if ((e || (e = r("InitialCookieConsent"))).exemptedIntegrations.includes(a)) {
                        t.set(a, true);
                    } else {
                        t.set(a, o);
                    }
                }
                return t;
            }
            for (const i of n){
                if ((e || (e = r("InitialCookieConsent"))).optedInIntegrations.includes(i)) {
                    t.set(i, true);
                } else {
                    t.set(i, false);
                }
            }
            return t;
        },
        isThirdPartyConsentRequiredForMetaPixel: function() {
            return (e || (e = r("InitialCookieConsent"))).consentRequiredForMetaPixel;
        },
        isThirdPartyIntegrationEmbedAllowed: function(n) {
            if ((e || (e = r("InitialCookieConsent"))).hasGranularThirdPartyCookieConsent) {
                return !(e || (e = r("InitialCookieConsent"))).noCookies && (e || (e = r("InitialCookieConsent"))).optedInIntegrations.includes(n);
            }
            if ((e || (e = r("InitialCookieConsent"))).exemptedIntegrations.includes(n)) {
                return !(e || (e = r("InitialCookieConsent"))).noCookies;
            }
            return !(e || (e = r("InitialCookieConsent"))).noCookies && s.has(2);
        }
    };
    l.default = c;
}, 98);