__d("WAWebShowNewsletterRoleChangeNotification", [
    "Promise",
    "WAWebCommonNewsletterEnums",
    "WAWebNotificationController",
    "WAWebNotificationsNewsletterRoleChangeNotification",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ admin, chat, mode, newRole, user }) {
        const chat_newsletterMetadata = chat.newsletterMetadata;
        if (chat_newsletterMetadata == null) {
            return (e || (e = n("Promise"))).resolve();
        }
        const d = mode === "promote" && o("WAWebUserPrefsMeUser").isMeAccount(user) && newRole === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
        if (d) {
            return o("WAWebNotificationController").WANotificationController.triggerNotification(new (o("WAWebNotificationsNewsletterRoleChangeNotification")).WANewsletterRoleChangeNotification({
                mode: "ownership",
                chat,
                admin,
                user
            }));
        }
        const m = (chat_newsletterMetadata?.iAmOwner() ?? false) && mode === "promote" && newRole === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin && !o("WAWebUserPrefsMeUser").isMeAccount(user);
        const p = mode === "demote" && newRole === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber && !o("WAWebUserPrefsMeUser").isMeAccount(user) && user.toJid() === admin?.toJid();
        const _ = mode === "demote" && o("WAWebUserPrefsMeUser").isMeAccount(user) && user.toJid() !== admin?.toJid();
        if (m || p || _) {
            return o("WAWebNotificationController").WANotificationController.triggerNotification(new (o("WAWebNotificationsNewsletterRoleChangeNotification")).WANewsletterRoleChangeNotification({
                mode,
                chat,
                admin,
                user
            }));
        }
        return (e || (e = n("Promise"))).resolve();
    }
    l.showNewsletterRoleChangeNotification = s;
}, 98);