__d("WAWebGroupSafetyCheckModalLoggingUtils", [
    "WAWebPsGroupSafetyCheckEnabledWamEvent",
    "WAWebPsGroupSafetyCheckExitDialogWamEvent",
    "WAWebPsGroupSafetyCheckSheetSeenWamEvent",
    "WAWebPsGroupSafetyCheckUiInteractionsWamEvent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ groupJid, initiallyMuted }) {
        new (o("WAWebPsGroupSafetyCheckEnabledWamEvent")).PsGroupSafetyCheckEnabledWamEvent({
            psSafetyCheckGroupJid: groupJid,
            psWasSafetyCheckGroupInitiallyMuted: initiallyMuted
        }).commit();
    }
    function s({ groupJid }) {
        new (o("WAWebPsGroupSafetyCheckSheetSeenWamEvent")).PsGroupSafetyCheckSheetSeenWamEvent({
            psSafetyCheckGroupJid: groupJid
        }).commit();
    }
    function u({ groupJid, interaction }) {
        new (o("WAWebPsGroupSafetyCheckUiInteractionsWamEvent")).PsGroupSafetyCheckUiInteractionsWamEvent({
            psSafetyCheckGroupJid: groupJid,
            psSafetyCheckInteraction: interaction
        }).commit();
    }
    function c({ groupJid, interaction }) {
        new (o("WAWebPsGroupSafetyCheckExitDialogWamEvent")).PsGroupSafetyCheckExitDialogWamEvent({
            psSafetyCheckGroupJid: groupJid,
            psGroupSafetyCheckExitDialogAction: interaction
        }).commit();
    }
    l.logGroupSafetyCheckEnabledEvent = e;
    l.logGroupSafetyCheckModalSeenEvent = s;
    l.logGroupSafetyCheckUIInteractionsEvent = u;
    l.logGroupSafetyCheckExitDialogUIInteractionsEvent = c;
}, 98);