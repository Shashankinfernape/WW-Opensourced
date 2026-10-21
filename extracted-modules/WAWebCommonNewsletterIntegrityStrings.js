__d("WAWebCommonNewsletterIntegrityStrings", [
    "fbt",
    "WAWebCountriesUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { countryCode, isPreview = true } = e || {};
            let i;
            if (countryCode != null) {
                i = yield o("WAWebCountriesUtils").getCountryNameFromCountryCode(countryCode);
            }
            if (i == null) {
                const l = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getMaybeMyCountryCodeIso();
                i = yield o("WAWebCountriesUtils").getCountryNameFromCountryCode(l);
                if (i == null) {
                    i = s._("your country");
                }
            }
            if (isPreview) {
                return s._("This channel is closed in {country_name}", [
                    s._param("country_name", i)
                ]);
            }
            return s._("Channel history and new updates are not available in {country_name}.", [
                s._param("country_name", i)
            ]);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        if (e.length > 1) {
            return s._("Your channel is closed in some countries");
        }
        return s._("Your channel is closed in this country: {country}", [
            s._param("country", e[0].countryName)
        ]);
    }
    function p() {
        return s._("Why this happened");
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _() {
        return s._("Channel alerts");
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f() {
        return s._("appropriate content.");
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g() {
        return s._("Delete from channel");
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function h() {
        return s._("Update review completed");
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y() {
        return s._("Status in review");
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C() {
        return s._("Status review completed");
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b() {
        return s._("Profile picture in review");
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function v() {
        return s._("Profile picture review completed");
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    function S() {
        return s._("A channel admin profile has been removed");
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    function R() {
        return s._("Channel admin profile in review");
    }
    R.displayName = `${R.name} [from ${i.id}]`;
    function L() {
        return s._("Channel admin profile review completed");
    }
    L.displayName = `${L.name} [from ${i.id}]`;
    function E() {
        return s._("Channel review completed");
    }
    E.displayName = `${E.name} [from ${i.id}]`;
    function k() {
        return s._("Channel in review");
    }
    k.displayName = `${k.name} [from ${i.id}]`;
    function I() {
        return s._("Our Support team is reviewing your channel. You will hear back within a few days.");
    }
    I.displayName = `${I.name} [from ${i.id}]`;
    function T() {
        return s._("Request review");
    }
    T.displayName = `${T.name} [from ${i.id}]`;
    function D() {
        return s._("Request a review");
    }
    D.displayName = `${D.name} [from ${i.id}]`;
    function x() {
        return s._("Dispute settlement body");
    }
    x.displayName = `${x.name} [from ${i.id}]`;
    function $() {
        return s._("Email the reporter");
    }
    $.displayName = `${$.name} [from ${i.id}]`;
    function P() {
        return s._("See options");
    }
    P.displayName = `${P.name} [from ${i.id}]`;
    function N() {
        return s._("Channel reports");
    }
    N.displayName = `${N.name} [from ${i.id}]`;
    function M() {
        return s._("Your report is closed as this channel is no longer available.");
    }
    M.displayName = `${M.name} [from ${i.id}]`;
    function w() {
        return s._("Report review typically takes 24 hours. We'll let you know when your report is complete.");
    }
    w.displayName = `${w.name} [from ${i.id}]`;
    function AComponent() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("We have reviewed your report and determined some updates on this channel do not follow our {=m2}. WhatsApp requires all updates and channels to follow our Channels Guidelines.", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    AComponent.displayName = `${AComponent.name} [from ${i.id}]`;
    function F() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("We have reviewed your report and determined this update does not follow our {=m2}. WhatsApp requires all updates and channels to follow our Channels Guidelines.", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    F.displayName = `${F.name} [from ${i.id}]`;
    function OComponent() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("We have reviewed your report and determined this response doesn't follow our {=m2}.", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    OComponent.displayName = `${OComponent.name} [from ${i.id}]`;
    function BComponent() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("We have reviewed your report and determined this response follows our {=m2}.", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    function W() {
        return s._("Your report is closed as this response is no longer available. It may have expired after 30 days, or been deleted by a channel admin.");
    }
    W.displayName = `${W.name} [from ${i.id}]`;
    function QComponent() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("We have reviewed your report and determined this channel follows our {=m2}.", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    QComponent.displayName = `${QComponent.name} [from ${i.id}]`;
    function U() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("We have reviewed your report and determined this update follows our {=m2}.", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    U.displayName = `${U.name} [from ${i.id}]`;
    function V() {
        return s._("Your report is closed as this update is no longer available on this channel. It may have expired after 30 days, or been deleted by a channel admin.");
    }
    V.displayName = `${V.name} [from ${i.id}]`;
    function H() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("We have reviewed your report and determined this channel status does not follow our {=m2}. WhatsApp requires all updates and channels to follow our Channels Guidelines.", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    H.displayName = `${H.name} [from ${i.id}]`;
    function G() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("We have reviewed your report and determined this channel status follows our {=m2}.", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    G.displayName = `${G.name} [from ${i.id}]`;
    function z() {
        return s._("Your report is closed as this channel status is no longer available on this channel. It may have expired after 24 hours, or been deleted by a channel admin.");
    }
    z.displayName = `${z.name} [from ${i.id}]`;
    l.getGeosuspendedInYourCountryString = c;
    l.getGeosuspensionStringForChannelAlertsDrawer = m;
    l.getWhyThisHappenedSectionTitleString = p;
    l.getNewsletterAlertsDrawerTitle = _;
    l.getNewsletterGenericViolationPolicyString = f;
    l.deleteViolatingContentText = g;
    l.getUpdateReviewCompletedString = h;
    l.getStatusInReviewTitleString = y;
    l.getStatusReviewCompletedString = C;
    l.getProfilePictureDeletionInReviewTitleString = b;
    l.getProfilePictureDeletionReviewCompletedString = v;
    l.getAdminProfileRemovedTextForList = S;
    l.getAdminProfileInReviewTitleString = R;
    l.getAdminProfileReviewCompletedString = L;
    l.getChannelReviewCompletedString = E;
    l.getChannelInReviewTitleString = k;
    l.getChannelInReviewString = I;
    l.getRequestAppealButtonText = T;
    l.getRequestAppealRemediationOptionsRowText = D;
    l.getNewsletterDSBDrawerTitle = x;
    l.getNewsletterContactIPReporterDrawerTitle = $;
    l.getNewsletterRemediationOptionsDrawerTitle = P;
    l.getNewsletterDSAReportsDrawerTitle = N;
    l.getNewsletterReportClosedNullNewsletterNameDescription = M;
    l.getNewsletterReportPendingDescription = w;
    l.getNewsletterReportSuccessDescription = AComponent;
    l.getNewsletterReportMessageLevelSuccessDescription = F;
    l.getNewsletterResponseReportSuccessDescription = OComponent;
    l.getNewsletterResponseReportFailDescription = BComponent;
    l.getNewsletterResponseReportContentUnavailableDescription = W;
    l.getNewsletterReportFailDescription = QComponent;
    l.getNewsletterReportMessageLevelFailDescription = U;
    l.getNewsletterReportContentUnavailableDescription = V;
    l.getNewsletterStatusReportSuccessDescription = H;
    l.getNewsletterStatusReportFailDescription = G;
    l.getNewsletterStatusReportContentUnavailableDescription = z;
}, 226);