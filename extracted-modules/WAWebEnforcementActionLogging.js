__d("WAWebEnforcementActionLogging", [
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterEnforcementEventsWamEvent",
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumEnforcementInteractionEvent",
    "WAWebWamEnumEnforcementType"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    class c {
        constructor(){
            this.$1 = null;
            this.$2 = null;
            this.$3 = null;
            this.$4 = {
                enforcementType: null,
                violationCategory: null
            };
            this.$5 = null;
        }
        $6() {
            return 1 + Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
        }
        $7(t) {
            if (t == null) {
                return null;
            }
            if (t === o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM) {
                return o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_SI;
            }
            if (t === o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND) {
                return o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_S;
            }
            if (t === o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM) {
                return o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_GSI;
            }
            if (t === o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND) {
                return o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_GS;
            }
            if (t === o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION) {
                return o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_PPD;
            }
            if (t === o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE) {
                return o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_HAP;
            }
            if (t === o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG) {
                return o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_HCH;
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })();
        }
        $8(n) {
            const t = [
                o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_CHANNEL_ALERTS,
                o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_ALERT_BANNER_DISMISS
            ];
            if (t.includes(n)) {
                return true;
            }
            if (this.$4.enforcementType == null || this.$4.violationCategory == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[EnforcementCoreEventLogger] missing context for ",
                    ""
                ])), String(n)).tags("enforcement-logging").sendLogs("Missing enforcement context", {
                    sampling: 0.001
                });
                return false;
            }
            return true;
        }
        setSurface(t) {
            if (o("WAWebNewsletterGatingUtils").isChannelEnforcementLoggingEnabled()) {
                this.$5 = t;
            }
        }
        $9(enforcementInteractionEvent) {
            try {
                if (!o("WAWebNewsletterGatingUtils").isChannelEnforcementLoggingEnabled() || !this.$8(enforcementInteractionEvent)) {
                    return;
                }
                if (this.$2 == null || this.$3 == null || this.$1 == null || this.$5 == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[EnforcementCoreEventLogger] session not started"
                    ]))).tags("enforcement-logging").sendLogs("Missing session context");
                    return;
                }
                const e = new (o("WAWebNewsletterEnforcementEventsWamEvent")).NewsletterEnforcementEventsWamEvent({
                    cid: this.$3,
                    enforcementInteractionEvent,
                    interactionEntryPoint: this.$2,
                    interactionSurface: this.$5,
                    newsletterEnforcementSessionId: this.$1
                });
                if (this.$4.violationCategory != null) {
                    e.violationCategory = this.$4.violationCategory;
                }
                if (this.$4.enforcementType != null) {
                    e.enforcementType = this.$4.enforcementType;
                }
                e.commit();
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to log enforcement interaction: ",
                    ""
                ])), String(error)).tags("enforcement-logging").sendLogs("Failed to log enforcement interaction");
            }
        }
        startEnforcementSession(t, n, r) {
            if (o("WAWebNewsletterGatingUtils").isChannelEnforcementLoggingEnabled()) {
                if (this.isSessionStarted()) {
                    this.resetSession();
                }
                this.$2 = t;
                this.$3 = n;
                this.$1 = this.$6();
                this.$5 = r;
                this.$4 = {
                    enforcementType: null,
                    violationCategory: null
                };
            }
        }
        updateEnforcementContext(t) {
            if (o("WAWebNewsletterGatingUtils").isChannelEnforcementLoggingEnabled()) {
                this.$4.enforcementType = this.$7(t.enforcementType);
                this.$4.violationCategory = t.enforcementViolationCategory;
            }
        }
        resetSession() {
            this.$2 = null;
            this.$3 = null;
            this.$1 = null;
            this.$5 = null;
            this.$4 = {
                enforcementType: null,
                violationCategory: null
            };
        }
        isSessionStarted() {
            return this.$1 != null;
        }
        logChannelAlertsClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_CHANNEL_ALERTS);
        }
        logEnforcementDetailClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_ENFORCEMENT_DETAIL);
        }
        logChannelGuidelinesClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_CHANNEL_GUIDELINES);
        }
        logLearnMoreHowClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_LEARN_MORE_HOW);
        }
        logLearnMoreWhyClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_LEARN_MORE_WHY);
        }
        logLearnMoreEuClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_LEARN_MORE_EU);
        }
        logSeeRuleClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_SEE_RULE);
        }
        logSeeOptionsClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_SEE_OPTIONS);
        }
        logRequestReviewClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_REQUEST_REVIEW);
        }
        logSubmitRequestReviewClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_SUBMIT_REQUEST_REVIEW);
        }
        logSubmitAppealClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_SUBMIT_APPEAL);
        }
        logSeeReviewDetailsClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_SEE_REVIEW_DETAILS);
        }
        logDeleteFromChannelClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_DELETE_FROM_CHANNEL);
        }
        logDeleteUpdateConfirmClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_DELETE_UPDATE_CONFIRM);
        }
        logDeleteChannelClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_DELETE_CHANNEL);
        }
        logDeleteChannelConfirmClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_DELETE_CHANNEL_CONFIRM);
        }
        logReferDsbClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_REFER_DSB);
        }
        logGetReferenceNumberClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_GET_REFERENCE_NUMBER);
        }
        logCopyReferenceNumberClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_COPY_REFERENCE_NUMBER);
        }
        logChannelDeletePhoneNumberConfirmClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_CHANNEL_DELETE_PHONE_NUMBER_CONFIRM);
        }
        logNextClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_NEXT);
        }
        logBackClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_BACK);
        }
        logDismissModalClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_DISMISS_BOTTOM_SHEET);
        }
        logDismissDrawerClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_DISMISS_DRAWER);
        }
        logEmailReporterClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_EMAIL_REPORTER);
        }
        logGetReportDetailsClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_GET_REPORT_DETAILS);
        }
        logCopyReportNumberClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_COPY_REPORT_NUMBER);
        }
        logCopyReporterNameClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_COPY_REPORTER_NAME);
        }
        logCopyReporterEmailClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_COPY_REPORTER_EMAIL);
        }
        logGoToHelpCentreClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_GO_TO_HELP_CENTRE);
        }
        logAlertBannerDismissClick() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_ALERT_BANNER_DISMISS);
        }
        logClickSeeDetails() {
            this.$9(o("WAWebWamEnumEnforcementInteractionEvent").ENFORCEMENT_INTERACTION_EVENT.CLICK_SEE_ENFORCEMENT_POLICY_DETAIL);
        }
    }
    const d = new c;
    l.default = d;
}, 98);