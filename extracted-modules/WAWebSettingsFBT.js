__d("WAWebSettingsFBT", [
    "fbt",
    "WAWebABProps",
    "WAWebBizAiStrings",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebSettingGatingUtils",
    "WAWebUsernameWorkerCompatibleGatingUtils"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        return s._("Chat wallpaper");
    }
    function u() {
        return s._("Default chat theme");
    }
    function c() {
        return s._("Request account info");
    }
    function d() {
        return s._("Channels reports");
    }
    function m() {
        return s._("Business tools");
    }
    function p() {
        return s._("Quick replies, labels, catalogue");
    }
    function _() {
        return s._("Payments");
    }
    function f() {
        return s._("Transactions, payment info");
    }
    function g() {
        return o("WAWebBizAiStrings").getBizAiHubTitle();
    }
    function h() {
        return s._("Your Meta Business Agent");
    }
    function y() {
        return s._("Business profile");
    }
    function C() {
        return s._("Catalogue");
    }
    function b() {
        return s._("Orders");
    }
    function v() {
        return s._("Advertise");
    }
    function S() {
        return s._("Quick replies");
    }
    function R() {
        return s._("Lists");
    }
    function L() {
        return s._("Business Help Centre");
    }
    function E() {
        return s._("Notifications");
    }
    function k() {
        const e = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
        if (e) {
            return s._("Messages, groups, sounds");
        }
        return s._("Message notifications");
    }
    function I() {
        return s._("Language");
    }
    function T() {
        return s._("Media auto-download");
    }
    function D() {
        return s._("Media upload quality");
    }
    function x() {
        return s._("Auto-download quality");
    }
    function $() {
        return s._("Photos will be automatically downloaded in HD quality, but videos will not.");
    }
    function P() {
        return s._("Auto");
    }
    function N() {
        return s._("Photos and videos will be automatically downloaded in HD quality.");
    }
    function M() {
        return s._("Photos will be automatically downloaded in HD quality.");
    }
    function w() {
        return s._("You can choose which photos or videos to download in HD quality.");
    }
    function A() {
        return s._("You can choose which photos to download in HD quality.");
    }
    function F() {
        return s._("HD quality");
    }
    function O() {
        return s._("Standard quality");
    }
    function B() {
        return s._("Spell check");
    }
    function W() {
        return s._("Check spelling while typing");
    }
    function q() {
        return s._("Replace text with emoji");
    }
    function U() {
        return s._("Emoji will replace specific text as you type");
    }
    function V() {
        return s._("Enter is send");
    }
    function H() {
        return s._("Enter key will send your message");
    }
    function G() {
        return s._("Security");
    }
    function z() {
        return s._("Privacy");
    }
    function j() {
        return s._("Blocked contacts, disappearing messages");
    }
    function K() {
        return s._("Help and feedback");
    }
    function Q() {
        return s._("Help centre, contact us, privacy policy");
    }
    function X() {
        return s._("Keyboard shortcuts");
    }
    function Y() {
        return s._("Quick actions");
    }
    function J() {
        return s._("Developer");
    }
    function Z() {
        return s._("Internal tools, feature flags, debug options");
    }
    function ee() {
        return s._("AB Props");
    }
    function te() {
        return s._("Group AB Props");
    }
    function ne() {
        return s._("Infra Settings");
    }
    function re() {
        return s._("Canonical");
    }
    function oe() {
        return s._("Labyrinth debug");
    }
    function ae() {
        return s._("Message notifications");
    }
    function ie() {
        return s._("Show notifications for new messages");
    }
    function le() {
        return s._("Show previews");
    }
    function se() {
        return s._("Get faster performance by syncing messages in the background.");
    }
    function ue() {
        return s._("Play sounds for outgoing messages");
    }
    function ce() {
        return s._("Show reaction notifications");
    }
    function de() {
        return s._("Call notifications");
    }
    function me() {
        return s._("Show notifications for incoming calls");
    }
    function pe() {
        return s._("Incoming calls");
    }
    function _e() {
        return s._("Play sounds for incoming calls");
    }
    function fe() {
        return s._("Incoming sounds");
    }
    function ge() {
        return s._("Play sounds for incoming messages");
    }
    function he() {
        return s._("Last seen and online");
    }
    function ye() {
        return s._("Profile picture");
    }
    function Ce() {
        return s._("About");
    }
    function be() {
        return s._("Read receipts");
    }
    function ve() {
        return s._("Turn off link previews");
    }
    function Se() {
        return s._("Block unknown account messages");
    }
    function Re() {
        return s._("Disappearing messages");
    }
    function Le() {
        return s._("Default message timer");
    }
    function Ee() {
        return s._("Groups");
    }
    function ke() {
        return s._("Blocked contacts");
    }
    function Ie() {
        return s._("App lock");
    }
    function Te() {
        return s._("Density");
    }
    function De() {
        return s._("Default");
    }
    function xe() {
        return s._("Compact");
    }
    function $e() {
        return s._("Single line");
    }
    function Pe() {
        return s._("Show community name");
    }
    function Ne() {
        return s._("Theme");
    }
    function Me() {
        return s._("App theme");
    }
    function we() {
        return s._("Light");
    }
    function Ae() {
        return s._("Dark");
    }
    function Fe() {
        return s._("System default");
    }
    function Oe() {
        return s._("System");
    }
    function Be() {
        return s._("Help Centre");
    }
    function We() {
        return s._("Frequently asked questions");
    }
    function qe() {
        return s._("Contact us");
    }
    function Ue() {
        return s._("Chat with support to get answers");
    }
    function Ve() {
        return s._("Rate the app");
    }
    function He() {
        return s._("Send feedback");
    }
    function Ge() {
        if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
            return s._("Terms");
        }
        return s._("Terms and Privacy Policy");
    }
    function ze() {
        const e = s._("Your customers' activity");
        return e;
    }
    function je() {
        return s._("Lists");
    }
    function Ke() {
        return s._("Agents");
    }
    function Qe() {
        return s._("Agents connected to this account");
    }
    function Xe() {
        return s._("Manage people and groups");
    }
    function Ye() {
        return s._("Log out");
    }
    function Je() {
        return s._("Account");
    }
    function Ze() {
        return s._("Security notifications, account info");
    }
    function et() {
        return s._("Profile");
    }
    function tt() {
        if (o("WAWebUsernameWorkerCompatibleGatingUtils").usernameCreationOrReservationEnabled()) {
            return s._("Name, profile picture, username");
        }
        return s._("Name, profile picture");
    }
    function nt() {
        return s._("Chats");
    }
    function rt() {
        if (o("WAWebSettingGatingUtils").isAppearanceSettingsEnabled()) {
            return s._("Media, spell check, chat settings");
        }
        return s._("Theme, wallpaper, chat settings");
    }
    function ot() {
        return s._("Appearance");
    }
    function at() {
        return s._("Chat theme, app icon, app theme");
    }
    function it() {
        return s._("How to delete my account");
    }
    function lt() {
        return s._("To protect your account and improve device performance, WhatsApp will block messages from unknown accounts if they exceed a certain volume.");
    }
    function st() {
        return s._("Protect IP address in calls");
    }
    function ut() {
        return s._("To make it harder for people to infer your location, calls on this device will be securely relayed through WhatsApp servers. This will reduce call quality.");
    }
    function ct() {
        return s._("Status ad");
    }
    function dt() {
        return s._("View details on your phone");
    }
    l.wallpaperTitle = e;
    l.chatThemeTitle = u;
    l.requestAccountInfoTitle = c;
    l.newsletterReportsTitle = d;
    l.businessToolsTitle = m;
    l.businessToolsSecondaryTitle = p;
    l.paymentsTitle = _;
    l.paymentsSecondaryTitle = f;
    l.businessToolsBusinessAITitle = g;
    l.businessToolsBusinessAIOnboardedTitle = h;
    l.businessToolsBusinessProfileTitle = y;
    l.businessToolsCatalogTitle = C;
    l.businessToolsOrdersTitle = b;
    l.businessToolsAdvertiseTitle = v;
    l.businessToolsQuickRepliesTitle = S;
    l.businessToolsListsTitle = R;
    l.businessToolsHelpCenterTitle = L;
    l.notificationsTitle = E;
    l.notificationsSecondaryTitle = k;
    l.languageTitle = I;
    l.mediaAutoDownloadTitle = T;
    l.mediaUploadQualityTitle = D;
    l.mediaAutoDownloadQualityTitle = x;
    l.mediaAutoDownloadQualityAutoDescription = $;
    l.mediaAutoDownloadQualityAutoLabel = P;
    l.mediaAutoDownloadQualityHdDescription = N;
    l.mediaAutoDownloadQualityHdPhotosOnlyDescription = M;
    l.mediaAutoDownloadQualityStandardDescription = w;
    l.mediaAutoDownloadQualityStandardPhotosOnlyDescription = A;
    l.mediaAutoDownloadQualityHdLabel = F;
    l.mediaAutoDownloadQualityStandardLabel = O;
    l.spellCheckTitle = B;
    l.spellCheckSubtitle = W;
    l.emojiReplacementTitle = q;
    l.emojiReplacementSubtitle = U;
    l.enterIsSendTitle = V;
    l.enterIsSendSubtitle = H;
    l.securityTitle = G;
    l.privacyTitle = z;
    l.privacySecondaryTitle = j;
    l.helpTitle = K;
    l.helpSecondaryTitle = Q;
    l.keyboardShortcutsTitle = X;
    l.keyboardShortcutsSecondaryTitle = Y;
    l.developerTitle = J;
    l.developerSecondaryTitle = Z;
    l.developerABPropsTitle = ee;
    l.developerGroupABPropsTitle = te;
    l.developerInfraSettingsTitle = ne;
    l.developerWWWSettingsTitle = re;
    l.developerLabyrinthDebugTitle = oe;
    l.messageNotificationsTitle = ae;
    l.messageNotificationsSubtitle = ie;
    l.showPreviewsTitle = le;
    l.offlineSyncSubtitle = se;
    l.outgoingAudioToneSubtitle = ue;
    l.showReactionsTitle = ce;
    l.showCallsTitle = de;
    l.showCallsSubtitle = me;
    l.playCallRingtoneTitle = pe;
    l.playCallRingtoneSubtitle = _e;
    l.soundsTitle = fe;
    l.soundsSubtitle = ge;
    l.privacyLastSeenOnlineEnabledTitle = he;
    l.privacyProfilePhotoTitle = ye;
    l.privacyAboutTitle = Ce;
    l.privacyReadReceiptsTitle = be;
    l.privacyLinkPreviewsTitle = ve;
    l.antiBrigadingTitle = Se;
    l.privacyDMTitle = Re;
    l.privacyDDMTitle = Le;
    l.privacyGroupsTitle = Ee;
    l.privacyBlockedTitle = ke;
    l.privacyScreenlockTitle = Ie;
    l.chatlistDensityTitle = Te;
    l.chatlistDensityDefaultLabel = De;
    l.chatlistDensityCompactLabel = xe;
    l.chatlistDensitySingleLineLabel = $e;
    l.chatlistShowParentNameTitle = Pe;
    l.themeTitle = Ne;
    l.appThemeTitle = Me;
    l.themeLightLabel = we;
    l.themeDarkLabel = Ae;
    l.themeSystemLabel = Fe;
    l.themeSystemShortLabel = Oe;
    l.helpCenterTitle = Be;
    l.helpCenterSubtitle = We;
    l.contactUsTitle = qe;
    l.contactUsSubtitle = Ue;
    l.rateTheApp = Ve;
    l.sendFeedbackTitle = He;
    l.termsTitle = Ge;
    l.dataSharingTitle = ze;
    l.listsTitle = je;
    l.agentsTitle = Ke;
    l.agentsSecondaryTitle = Qe;
    l.listsSecondaryTitle = Xe;
    l.logoutTitle = Ye;
    l.accountTitle = Je;
    l.accountSecondaryTitle = Ze;
    l.profileTitle = et;
    l.profileSecondaryTitle = tt;
    l.chatsTitle = nt;
    l.chatsSecondaryTitle = rt;
    l.appearanceTitle = ot;
    l.appearanceSecondaryTitle = at;
    l.deleteAccountTitle = it;
    l.antiBrigadingDescription = lt;
    l.protectIpInCallsTitle = st;
    l.protectIpInCallsDescription = ut;
    l.wamoNonAGMMessagePreviewTitle = ct;
    l.wamoNonAGMMessagePreviewDescription = dt;
}, 226);