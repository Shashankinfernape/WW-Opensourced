__d("WAWebNewsletterRouteBridgeApi", [
    "WALogger",
    "WAWebNewsletterAdminInsightsModel",
    "WAWebNewsletterEnforcementAlertCollection",
    "WAWebNewsletterQuestionResponseCollection",
    "WAWebNewsletterReportCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        updateNewsletterReports: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ reports }) {
                o("WAWebNewsletterReportCollection").NewsletterReportCollection.reset();
                o("WAWebNewsletterReportCollection").NewsletterReportCollection.add(reports);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateNewsletterReport: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ report }) {
                o("WAWebNewsletterReportCollection").NewsletterReportCollection.add(report, {
                    merge: true
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateNewsletterEnforcementAlerts: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ enforcementAlerts }) {
                o("WAWebNewsletterEnforcementAlertCollection").NewsletterEnforcementAlertCollection.reset();
                o("WAWebNewsletterEnforcementAlertCollection").NewsletterEnforcementAlertCollection.add(enforcementAlerts);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateNewsletterQuestionResponses: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ append, responses }) {
                if (!append) {
                    o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.reset();
                }
                o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.add(responses);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        hideNewsletterQuestionResponse: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ questionServerId, responseServerId }) {
                const a = yield o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.filter((e)=>e.responseServerId === responseServerId && e.questionServerId === questionServerId)?.[0];
                if (a != null) {
                    o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.remove(a);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateNewsletterInsights: function({ insights, newsletter }) {
            const newsletter_newsletterMetadata = newsletter.newsletterMetadata;
            if (newsletter_newsletterMetadata == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[updateNewsletterInsights] newsletterMetadata=null"
                ])));
                return;
            }
            const a_adminInsights = newsletter_newsletterMetadata.adminInsights;
            if (a_adminInsights == null) {
                newsletter_newsletterMetadata.adminInsights = new (o("WAWebNewsletterAdminInsightsModel")).NewsletterAdminInsights(insights);
            } else {
                a_adminInsights.set(babelHelpers.extends({}, insights));
            }
        },
        updateNewsletterQuestionResponseStarredState: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ questionServerId, responseServerId, starred }) {
                const i = yield o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.filter((e)=>e.responseServerId === responseServerId && e.questionServerId === questionServerId)?.[0];
                if (i != null) {
                    i.set("starred", starred);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.NewsletterRouteBridgeApi = s;
}, 98);