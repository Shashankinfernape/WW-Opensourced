__d("WAWebNewsletterIntegrityUtils", [
    "fbt",
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebContactFormsUrl",
    "WAWebDSADateUtils",
    "WAWebEnforcementActionLogging",
    "WAWebEnforcementPolicyDetailsModal.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterDSAModals.react",
    "WAWebNewsletterGatingUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSTextualLink.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        seeRule: {
            color: "x1v5yvga",
            cursor: "x1ypdohk",
            $$css: true
        }
    };
    function m() {
        const e = o("WAWebToast.react").genId();
        const t = s._("Couldn't request review");
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            msg: t,
            id: e
        }));
    }
    function p() {
        const e = o("WAWebToast.react").genId();
        const t = s._("Review requested");
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            msg: t,
            id: e
        }));
    }
    function _() {
        const e = o("WAWebToast.react").genId();
        const t = s._("Couldn't get reference number");
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            msg: t,
            id: e
        }));
    }
    function f() {
        const e = o("WAWebToast.react").genId();
        const t = s._("Status deleted");
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            msg: t,
            id: e
        }));
    }
    function g() {
        const e = o("WAWebToast.react").genId();
        const t = s._("Couldn't delete status. Please try again.");
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            msg: t,
            id: e
        }));
    }
    function h(e) {
        return s._("Date requested: {review_request_date}", [
            s._param("review_request_date", o("WAWebDSADateUtils").getDSADateDisplayString(e.toString()))
        ]);
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y(e, t, n) {
        switch(t){
            case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND:
            case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND:
                if (e === "PENDING") {
                    return o("WAWebCommonNewsletterIntegrityStrings").getChannelInReviewTitleString();
                }
                return o("WAWebCommonNewsletterIntegrityStrings").getChannelReviewCompletedString();
            case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM:
            case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM:
            case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG:
                if (n === true) {
                    if (e === "PENDING") {
                        return o("WAWebCommonNewsletterIntegrityStrings").getStatusInReviewTitleString();
                    }
                    return o("WAWebCommonNewsletterIntegrityStrings").getStatusReviewCompletedString();
                }
                if (e === "PENDING") {
                    return s._("Update in review");
                }
                return s._("Update review completed");
            case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE:
                if (e === "PENDING") {
                    return o("WAWebCommonNewsletterIntegrityStrings").getAdminProfileInReviewTitleString();
                }
                return o("WAWebCommonNewsletterIntegrityStrings").getAdminProfileReviewCompletedString();
            case o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION:
                if (e === "PENDING") {
                    return o("WAWebCommonNewsletterIntegrityStrings").getProfilePictureDeletionInReviewTitleString();
                }
                return o("WAWebCommonNewsletterIntegrityStrings").getProfilePictureDeletionReviewCompletedString();
        }
    }
    function C() {
        r("WAWebEnforcementActionLogging").logSeeRuleClick();
    }
    function b(e, t, n) {
        switch(t){
            case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND:
                {
                    switch(e){
                        case "PENDING":
                            return o("WAWebCommonNewsletterIntegrityStrings").getChannelInReviewTitleString();
                        case "REJECT":
                        case "SUCCESS":
                            return o("WAWebCommonNewsletterIntegrityStrings").getChannelReviewCompletedString();
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM:
            case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG:
                {
                    if (n === true) {
                        if (e === "PENDING") {
                            return o("WAWebCommonNewsletterIntegrityStrings").getStatusInReviewTitleString();
                        }
                        return o("WAWebCommonNewsletterIntegrityStrings").getStatusReviewCompletedString();
                    }
                    switch(e){
                        case "PENDING":
                            return s._("Update in review");
                        case "REJECT":
                        case "SUCCESS":
                        case "CONTENT_UNAVAILABLE":
                            return o("WAWebCommonNewsletterIntegrityStrings").getUpdateReviewCompletedString();
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM:
                {
                    if (n === true) {
                        if (e === "PENDING") {
                            return o("WAWebCommonNewsletterIntegrityStrings").getStatusInReviewTitleString();
                        }
                        return o("WAWebCommonNewsletterIntegrityStrings").getStatusReviewCompletedString();
                    }
                    switch(e){
                        case "PENDING":
                            return s._("Update in review");
                        case "REJECT":
                        case "SUCCESS":
                        case "CONTENT_UNAVAILABLE":
                            return o("WAWebCommonNewsletterIntegrityStrings").getUpdateReviewCompletedString();
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND:
                {
                    switch(e){
                        case "PENDING":
                            return o("WAWebCommonNewsletterIntegrityStrings").getChannelInReviewTitleString();
                        case "REJECT":
                        case "SUCCESS":
                            return o("WAWebCommonNewsletterIntegrityStrings").getChannelReviewCompletedString();
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE:
                {
                    switch(e){
                        case "PENDING":
                            return o("WAWebCommonNewsletterIntegrityStrings").getAdminProfileInReviewTitleString();
                        case "REJECT":
                        case "SUCCESS":
                        case "CONTENT_UNAVAILABLE":
                            return o("WAWebCommonNewsletterIntegrityStrings").getAdminProfileReviewCompletedString();
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION:
                {
                    switch(e){
                        case "PENDING":
                            return o("WAWebCommonNewsletterIntegrityStrings").getProfilePictureDeletionInReviewTitleString();
                        case "REJECT":
                        case "SUCCESS":
                        case "CONTENT_UNAVAILABLE":
                            return o("WAWebCommonNewsletterIntegrityStrings").getProfilePictureDeletionReviewCompletedString();
                    }
                    break;
                }
        }
    }
    function VComponent(appealOutcome, enforcementType) {
        if (appealOutcome === "CONTENT_UNAVAILABLE") {
            return s._("Your review is closed as this status is no longer available on your channel. It may have expired after 24 hours, or been deleted by a channel admin.");
        }
        if (enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = o("WAWebExternalLink.react").ExternalLink;
            switch(appealOutcome){
                case "PENDING":
                    return s._("Our Support team is reviewing your status. You will hear back within a few days.");
                case "REJECT":
                    return s._("Our Support team has confirmed this status doesn't follow our {=m2}.", [
                        s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                    ]);
                case "SUCCESS":
                    return s._("Our Support team determined this status follows our {=m2}.", [
                        s._implicitParam("=m2", <Component_1 href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component_1>)
                    ]);
            }
        }
        const Component = o("WAWebExternalLink.react").ExternalLink;
        switch(appealOutcome){
            case "PENDING":
                return s._("Your status is being reviewed. You will hear back within a few days.");
            case "REJECT":
                return s._("Your status has not been restored. The rights holder has not released their claim.");
            case "SUCCESS":
                return s._("Your status has been restored. The rights holder has released their claim, and determined this status follows our {=m2}.", [
                    s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                ]);
        }
    }
    function SComponent({ appealOutcome, countries, enforcementType, enforcementViolationCategory, isStatusContent }) {
        if (isStatusContent === true && (enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG || enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM || enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM)) {
            return VComponent(appealOutcome, enforcementType);
        }
        const u = countries?.map(function(e) {
            return e.countryName;
        });
        const d = u != null ? r("WAWebFbtIntlList")(u, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA) : null;
        switch(enforcementType){
            case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM:
                {
                    const Component = o("WAWebExternalLink.react").ExternalLink;
                    switch(appealOutcome){
                        case "PENDING":
                            return s._("Your update is being reviewed. You will hear back within a few days.");
                        case "REJECT":
                            return s._("Your update has not been restored. The rights holder has not released their claim.");
                        case "SUCCESS":
                            return s._("Your update has been restored. The rights holder has released their claim, and determined this update follows our {=m2}.", [
                                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                            ]);
                        case "CONTENT_UNAVAILABLE":
                            return s._("Your review is closed as this update is no longer available on your channel. It may have expired after 30 days, or been deleted by a channel admin.");
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND:
                {
                    switch(appealOutcome){
                        case "PENDING":
                            return o("WAWebCommonNewsletterIntegrityStrings").getChannelInReviewString();
                        case "REJECT":
                            if (countries?.length !== 0) {
                                const Component = o("WAWebExternalLink.react").ExternalLink;
                                return s._("Your channel is still closed in these countries: {list_of_suspended_country}. Our Support team has confirmed this channel doesn't follow our {=m5} or local laws.", [
                                    s._param("list_of_suspended_country", d),
                                    s._implicitParam("=m5", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                                ]);
                            }
                            return null;
                        case "SUCCESS":
                            if (countries?.length !== 0) {
                                const Component = o("WAWebExternalLink.react").ExternalLink;
                                return s._("Your channel has been reopened in these countries: {list_of_suspended_country}. Our Support team has determined this channel follows our {=m5}.", [
                                    s._param("list_of_suspended_country", d),
                                    s._implicitParam("=m5", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                                ]);
                            }
                            return null;
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG:
                {
                    const Component = o("WAWebExternalLink.react").ExternalLink;
                    const Component_1 = o("WAWebExternalLink.react").ExternalLink;
                    switch(appealOutcome){
                        case "PENDING":
                            return s._("Our Support team is reviewing your update. You will hear back within a few days.");
                        case "REJECT":
                            return s._("Our Support team has confirmed this update doesn't follow our {=m2}.", [
                                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                            ]);
                        case "SUCCESS":
                            return s._("Our Support team determined this update follows our {=m2}.", [
                                s._implicitParam("=m2", <Component_1 href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component_1>)
                            ]);
                        case "CONTENT_UNAVAILABLE":
                            return s._("Your review is closed as this update is no longer available on your channel. It may have expired after 30 days, or been deleted by a channel admin.");
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM:
                {
                    const Component = o("WAWebExternalLink.react").ExternalLink;
                    switch(appealOutcome){
                        case "PENDING":
                            return s._("Your update is being reviewed. You will hear back within a few days.");
                        case "REJECT":
                            return s._("Your update has not been restored. The rights holder has not released their claim.");
                        case "SUCCESS":
                            return s._("Your update has been restored. The rights holder has released their claim, and determined this update follows our {=m2}.", [
                                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                            ]);
                        case "CONTENT_UNAVAILABLE":
                            return s._("Your review is closed as this update is no longer available on your channel. It may have expired after 30 days, or been deleted by a channel admin.");
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND:
                {
                    const Component = o("WAWebExternalLink.react").ExternalLink;
                    const Component_1 = o("WAWebExternalLink.react").ExternalLink;
                    switch(appealOutcome){
                        case "PENDING":
                            return o("WAWebCommonNewsletterIntegrityStrings").getChannelInReviewString();
                        case "REJECT":
                            return s._("Your channel is still closed. Our Support team has confirmed this channel doesn't follow our {=m2}.", [
                                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                            ]);
                        case "SUCCESS":
                            return s._("Your channel has been reopened. Our WhatsApp team has determined this channel follows our {=m2}.", [
                                s._implicitParam("=m2", <Component_1 href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component_1>)
                            ]);
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE:
                {
                    const Component = o("WAWebExternalLink.react").ExternalLink;
                    const Component_1 = o("WAWebExternalLink.react").ExternalLink;
                    switch(appealOutcome){
                        case "PENDING":
                            return s._("Our Support team is reviewing the channel admin profile. You will hear back within a few days.");
                        case "REJECT":
                            return s._("This channel admin profile does not follow our {=m2} on {violation_category_text}", [
                                s._param("violation_category_text", R(enforcementViolationCategory)),
                                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                            ]);
                        case "SUCCESS":
                            return s._("The channel admin profile has been restored. Our Support team has determined it follows our {=m2}.", [
                                s._implicitParam("=m2", <Component_1 href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component_1>)
                            ]);
                    }
                    break;
                }
            case o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION:
                {
                    const Component = o("WAWebExternalLink.react").ExternalLink;
                    const Component_1 = o("WAWebExternalLink.react").ExternalLink;
                    switch(appealOutcome){
                        case "PENDING":
                            return s._("Our Support team is reviewing your profile picture. You will hear back within a few days.");
                        case "REJECT":
                            return s._("Your profile picture does not follow our {=m2} on {violation_category_text}", [
                                s._param("violation_category_text", R(enforcementViolationCategory)),
                                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
                            ]);
                        case "SUCCESS":
                            return s._("Your profile picture has been restored. Our Support team has determined this channel follows our {=m2}.", [
                                s._implicitParam("=m2", <Component_1 href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component_1>)
                            ]);
                    }
                    break;
                }
        }
    }
    function R(e) {
        if (e == null) {
            return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterGenericViolationPolicyString();
        }
        switch(e){
            case "ADULT_SEXUAL_EXPLOITATION":
                return s._("showing or promoting sexual exploitation or violence.");
            case "ADULT_SEXUAL_SOLICITATION":
                return s._("sexually explicit content or arranging commercial sexual services.");
            case "BULLYING_AND_HARASSMENT":
                return s._("threats, intimidation, or harassment.");
            case "CHILD_SEXUAL_EXPLOITATION":
                return s._("content that could endanger children, shows child abuse, or sexually exploits children.");
            case "COORDINATING_HARM_AND_PROMOTING_CRIME":
                return s._("encouraging, promoting or helping coordinate harm or crime.");
            case "CYBERSECURITY":
                return s._("cybersecurity risks that could harm others.");
            case "DANGEROUS_INDIVIDUALS_AND_ORGS":
                return s._("showing support for terrorist, hate, and criminal groups or individuals.");
            case "FRAUD_AND_DECEPTION":
                return s._("engaging in fraud or scams.");
            case "GRAPHIC_VIOLENCE":
                return s._("excessively violent or graphic content.");
            case "HARMFUL_HEALTH":
                return s._("content that could cause harm to people.");
            case "HATE":
                return s._("threatening, hateful, or racially offensive content.");
            case "HUMAN_EXPLOITATION":
                return s._("promoting or facilitating human trafficking or exploitation, violence, or sexual exploitation.");
            case "INTELLECTUALPROPERTY_RIGHTS":
                return s._("infringement of intellectual property rights.");
            case "PLATFORM_POLICY":
                return s._("legally acceptable use for international compliance.");
            case "PORN":
                return s._("graphic or sexual content.");
            case "PRIVACY_VIOLATION":
                return s._("privacy risks and misrepresentation.");
            case "REGULATED_GOODS":
                return s._("buying, selling, or exchanging regulated or restricted goods.");
            case "SPAM":
                return s._("spam and cybersecurity risks.");
            case "SSI":
                return s._("content that could encourage suicide or self-injury.");
            case "VIOLENCE_AND_INCITEMENT":
                return s._("encouraging violence or physical harm, or threats to public safety.");
            case "IP_COUNTERFEIT_REPORTED":
            case "IP_TRADEMARK_REPORTED":
                return s._("infringement of intellectual property rights, including our policies on trademark.");
            case "IP_COPYRIGHT_REPORTED":
                return s._("infringement of intellectual property rights, including our policies on copyright.");
            case "IP_REPEAT_INFRINGEMENT_REPORTED":
                return s._("infringement of intellectual property rights.");
            case "SUICIDE_OR_SELFINJURY":
            case "HATESPEECH":
            case "UNKNOWN":
            default:
                return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterGenericViolationPolicyString();
        }
    }
    function LComponent(e) {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("Some updates shared by this channel don't follow our {=m1} on {violation_category_text}", [
            s._param("violation_category_text", R(e)),
            s._implicitParam("=m1", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    LComponent.displayName = `${LComponent.name} [from ${i.id}]`;
    function EComponent(policyInformation) {
        if (policyInformation == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[enforcement] getServerDrivenPolicyGuideline: no policyInfo"
            ])));
            return null;
        }
        if (o("WAWebNewsletterGatingUtils").isNewsletterEnforcementPolicyBottomSheetEnabled()) {
            const n = function() {
                r("WAWebEnforcementActionLogging").logClickSeeDetails();
                o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebEnforcementPolicyDetailsModal.react"), {
                    policyInformation
                }));
            };
            const Component = r("WDSTextualLink.react");
            return <>{policyInformation.overview}<br/><Component onClick={n} testid="enforcement-policy-see-details-link">{s._("See details")}</Component></>;
        }
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return <>{policyInformation.overview}<br/><Component onClick={C} xstyle={d.seeRule} href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("See rule")}</Component></>;
    }
    EComponent.displayName = `${EComponent.name} [from ${i.id}]`;
    function KComponent(e, t, n) {
        if (n === true) {
            if (t != null) {
                const Component = o("WAWebExternalLink.react").ExternalLink;
                return s._("This status contains copyrighted material from {rights_holder_name}. {=m4}", [
                    s._param("rights_holder_name", t.name),
                    s._implicitParam("=m4", <Component onClick={C} xstyle={d.seeRule} href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("See rule")}</Component>)
                ]);
            }
            const Component = o("WAWebExternalLink.react").ExternalLink;
            return s._("This status doesn't follow our Channel Guidelines on {violation_category_text} {=m4}", [
                s._param("violation_category_text", R(e)),
                s._implicitParam("=m4", <Component onClick={C} xstyle={d.seeRule} href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("See rule")}</Component>)
            ]);
        }
        if (t != null) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            return s._("This update contains copyrighted material from {rights_holder_name}. {=m4}", [
                s._param("rights_holder_name", t.name),
                s._implicitParam("=m4", <Component onClick={C} xstyle={d.seeRule} href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("See rule")}</Component>)
            ]);
        }
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("This update doesn't follow our Channel Guidelines on {violation_category_text} {=m4}", [
            s._param("violation_category_text", R(e)),
            s._implicitParam("=m4", <Component onClick={C} xstyle={d.seeRule} href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("See rule")}</Component>)
        ]);
    }
    function IComponent(e) {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("Your profile picture does not follow our {=m2} on {violation_category_text}", [
            s._param("violation_category_text", R(e)),
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    IComponent.displayName = `${IComponent.name} [from ${i.id}]`;
    function TComponent(e) {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("This channel admin profile does not follow our {=m2} on {violation_category_text}", [
            s._param("violation_category_text", R(e)),
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    TComponent.displayName = `${TComponent.name} [from ${i.id}]`;
    function D(e) {
        if (e.reportStatus === "PENDING" || e.appeal.state === "PENDING") {
            return s._("Report in review");
        }
        return s._("Report reviewed");
    }
    D.displayName = `${D.name} [from ${i.id}]`;
    function x(e) {
        const e_reportContentData = e.reportContentData;
        if (e_reportContentData.reportContentType === "status") {
            if (e.newsletterName != null) {
                return s._("You reported a channel status shared by {channel_name}", [
                    s._param("channel_name", e.newsletterName)
                ]);
            }
            return s._("You reported a channel status");
        }
        if (e_reportContentData.reportContentType === "response" && o("WAWebNewsletterGatingUtils").isNewsletterIntegrityQuestionsM1Enabled() === true) {
            if (e_reportContentData.notifyName != null) {
                return s._("You reported a channel question response from {sender_name}", [
                    s._param("sender_name", e_reportContentData.notifyName)
                ]);
            }
            return s._("You reported a response to a channel question");
        }
        if (e_reportContentData.reportContentType === "message") {
            if (e.newsletterName != null) {
                return s._("You reported an update shared by {channel_name}", [
                    s._param("channel_name", e.newsletterName)
                ]);
            }
            return s._("You reported an update shared by a channel");
        }
        if (e.newsletterName != null) {
            return s._("You reported {channel_name}", [
                s._param("channel_name", e.newsletterName)
            ]);
        }
        return s._("You reported a channel");
    }
    function $(e) {
        if (e.newsletterName == null) {
            return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportClosedNullNewsletterNameDescription();
        }
        const e_reportContentData = e.reportContentData;
        if (e_reportContentData.reportContentType === "status") {
            switch(e.reportStatus){
                case "PENDING":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportPendingDescription();
                case "SUCCESS":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterStatusReportSuccessDescription();
                case "FAIL":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterStatusReportFailDescription();
                case "CONTENT_UNAVAILABLE":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterStatusReportContentUnavailableDescription();
            }
        }
        if (e_reportContentData.reportContentType === "response" && o("WAWebNewsletterGatingUtils").isNewsletterIntegrityQuestionsM1Enabled() === true) {
            switch(e.reportStatus){
                case "PENDING":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportPendingDescription();
                case "SUCCESS":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterResponseReportSuccessDescription();
                case "FAIL":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterResponseReportFailDescription();
                case "CONTENT_UNAVAILABLE":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterResponseReportContentUnavailableDescription();
            }
        }
        switch(e.reportStatus){
            case "PENDING":
                return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportPendingDescription();
            case "SUCCESS":
                if (e.reportContentData.reportContentType === "message") {
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportMessageLevelSuccessDescription();
                }
                return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportSuccessDescription();
            case "FAIL":
                if (e.reportContentData.reportContentType === "message") {
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportMessageLevelFailDescription();
                }
                return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportFailDescription();
            case "CONTENT_UNAVAILABLE":
                return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportContentUnavailableDescription();
        }
    }
    function P(e) {
        if (e.newsletterName == null) {
            return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportClosedNullNewsletterNameDescription();
        }
        const e_reportContentData = e.reportContentData;
        if (e_reportContentData.reportContentType === "status") {
            switch(e.appeal.state){
                case "PENDING":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportPendingDescription();
                case "SUCCESS":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterStatusReportSuccessDescription();
                case "REJECT":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterStatusReportFailDescription();
                case "CONTENT_UNAVAILABLE":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterStatusReportContentUnavailableDescription();
                case "NON_APPEALABLE":
                    return null;
            }
        }
        if (e_reportContentData.reportContentType === "response" && o("WAWebNewsletterGatingUtils").isNewsletterIntegrityQuestionsM1Enabled() === true) {
            switch(e.appeal.state){
                case "PENDING":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportPendingDescription();
                case "SUCCESS":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterResponseReportSuccessDescription();
                case "REJECT":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterResponseReportFailDescription();
                case "CONTENT_UNAVAILABLE":
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterResponseReportContentUnavailableDescription();
            }
        }
        switch(e.appeal.state){
            case "PENDING":
                return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportPendingDescription();
            case "SUCCESS":
                if (e_reportContentData.reportContentType === "message") {
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportMessageLevelSuccessDescription();
                }
                return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportSuccessDescription();
            case "REJECT":
                if (e_reportContentData.reportContentType === "message") {
                    return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportMessageLevelFailDescription();
                }
                return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportFailDescription();
            case "CONTENT_UNAVAILABLE":
                return o("WAWebCommonNewsletterIntegrityStrings").getNewsletterReportContentUnavailableDescription();
            case "NON_APPEALABLE":
                return null;
        }
    }
    const N = "8639295579439940";
    function M({ msg, reportId }) {
        const a = msg != null;
        const i = msg != null && (msg.type !== o("WAWebMsgType").MSG_TYPE.CHAT && msg.type !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE || o("WAWebMsgGetters").getLinkPreview(msg) === true);
        if (a === true && i && o("WAWebNewsletterGatingUtils").isNewsletterUSNCIIReportingEnabled()) {
            return {
                learnMoreUrl: o("WAWebContactFormsUrl").getReportContentUSNCIIFormUrl(),
                bannerText: s._("In the US, you can create a detailed report for something that contains intimate imagery."),
                actionText: s._("Fill in form"),
                showViewReport: false
            };
        }
        if (o("WAWebNewsletterGatingUtils").isNewsletterReportUnlawfulContentEnabled()) {
            return {
                learnMoreUrl: o("WAWebFaqUrl").getReportUnlawfulContentWebFaqUrl(),
                bannerText: s._("You can send an additional report for unlawful content."),
                actionText: r("WAWebFbtCommon")("Learn more"),
                showViewReport: true
            };
        }
        if (o("WAWebNewsletterGatingUtils").isNewsletterUKOSAReportingEnabled()) {
            return {
                learnMoreUrl: o("WAWebContactFormsUrl").getReportContentUKFormUrl(reportId),
                bannerText: s._("You can send an additional report for unlawful content."),
                actionText: r("WAWebFbtCommon")("Learn more"),
                showViewReport: false
            };
        }
        if (a === true && reportId != null && o("WAWebNewsletterGatingUtils").isNewsletterAusOSAReportingEnabled()) {
            return {
                learnMoreUrl: o("WAWebContactFormsUrl").getReportContentAUSFormUrl(reportId, N),
                bannerText: s._("You can send an additional report under the Australian Online Safety Act."),
                actionText: s._("Learn more"),
                showViewReport: false
            };
        }
        return null;
    }
    l.showReviewSubmissionFailureToast = m;
    l.showReviewSubmissionSuccessToast = p;
    l.showDsbReferenceNumberFailureToast = _;
    l.showStatusDeleteSuccessToast = f;
    l.showStatusDeleteFailureToast = g;
    l.getOutcomeListSubtitle = h;
    l.getOutcomeListTitle = y;
    l.getTitleBasedOnEnforcementTypeAndOutcome = b;
    l.getHeaderBodyTextBasedOnEnforcementTypeAndOutcome = SComponent;
    l.getSuspendedNewsletterPolicyGuideline = LComponent;
    l.getServerDrivenPolicyGuideline = EComponent;
    l.getSuspendInformPolicyGuideline_ToBeDeprecated = KComponent;
    l.getProfilePictureDeletionPolicyGuideline = IComponent;
    l.getAdminProfilePolicyGuideline = TComponent;
    l.getReportStatusString = D;
    l.getReportDetailsTitleString = x;
    l.getReportDetailsSubtitleString = $;
    l.getReportDetailsWithAppealInfoSubtitleString = P;
    l.getNewsletterReportComplianceConfig = M;
}, 226);