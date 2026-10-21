__d("WAWebShowNewsletterMetadataUpdateNotification", [
    "WAWebNotificationController",
    "WAWebNotificationsNewsletterMetadataUpdateNotification",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, updates, user }) {
            const chat_newsletterMetadata = chat.newsletterMetadata;
            if (chat_newsletterMetadata?.iAmOwner() && !o("WAWebUserPrefsMeUser").isMeAccount(user) && updates.length !== 0) {
                return o("WAWebNotificationController").WANotificationController.triggerNotification(new (o("WAWebNotificationsNewsletterMetadataUpdateNotification")).WANewsletterMetadataUpdateNotification({
                    chat,
                    user,
                    updates
                }));
            }
        });
        return s.apply(this, arguments);
    }
    l.showNewsletterMetadataUpdateNotification = e;
}, 98);