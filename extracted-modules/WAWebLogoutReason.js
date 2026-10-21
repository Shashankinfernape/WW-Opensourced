__d("WAWebLogoutReason", [
    "WAWebLogoutReasonConstants"
], function(t, n, r, o, a, i, l) {
    let e = null;
    let s = null;
    function u(e) {
        if (e === o("WAWebLogoutReasonConstants").LogoutReason.WebFailAddChat || e === o("WAWebLogoutReasonConstants").LogoutReason.WebFailEncSalt || e === o("WAWebLogoutReasonConstants").LogoutReason.WebFailOfflineResume || e === o("WAWebLogoutReasonConstants").LogoutReason.WebFailStorageInitialization) {
            return o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.CLIENT_FATAL;
        }
        if (e === o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure || e === o("WAWebLogoutReasonConstants").LogoutReason.SyncdErrorDuringBootstrap || e === o("WAWebLogoutReasonConstants").LogoutReason.AccountSyncError || e === o("WAWebLogoutReasonConstants").LogoutReason.SyncdTimeout || e === o("WAWebLogoutReasonConstants").LogoutReason.CriticalSyncTimeout) {
            return o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.SYNC_FAIL;
        }
        if (e === o("WAWebLogoutReasonConstants").LogoutReason.HistorySyncTimeout) {
            return o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.INITIAL_HISTORY_SYNC_TIMEOUT;
        }
        if (e === o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked) {
            return o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.ACCOUNT_LOCKED;
        }
        if (e === o("WAWebLogoutReasonConstants").LogoutReason.UserInitiated || e === o("WAWebLogoutReasonConstants").LogoutReason.InvalidAdvStatus || e === o("WAWebLogoutReasonConstants").LogoutReason.AccountSyncTimeout || e === o("WAWebLogoutReasonConstants").LogoutReason.MDOptOut || e === o("WAWebLogoutReasonConstants").LogoutReason.UnknownCompanion || e === o("WAWebLogoutReasonConstants").LogoutReason.ClientVersionOutdated || e === o("WAWebLogoutReasonConstants").LogoutReason.StorageQuotaExceeded || e === o("WAWebLogoutReasonConstants").LogoutReason.PrimaryIdentityKeyChange || e === o("WAWebLogoutReasonConstants").LogoutReason.MissingEncSalt || e === o("WAWebLogoutReasonConstants").LogoutReason.MissingScreenLockSalt || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationSplitThreadMismatch || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationNoLidAvailable || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationPrimaryMappingsObsolete || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationPeerMappingsNotReceived || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationStateDiscrepancy || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationPeerMappingsMalformed || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationFailedToParseMapping || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationCompanionIncompatibleKillswitch || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationOneOnOneThreadMigrationInternalError || e === o("WAWebLogoutReasonConstants").LogoutReason.LidBlocklistPnWhenMigrated || e === o("WAWebLogoutReasonConstants").LogoutReason.LidBlocklistChatDbUnmigrated || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationUnmigratedPrimary || e === o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationUnmigratedCompanion || e === o("WAWebLogoutReasonConstants").LogoutReason.CacheStorageOpenFailed) {
            return null;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function c(t) {
        e = t;
    }
    function d(e) {
        s = e;
    }
    function m() {
        return e;
    }
    function p() {
        return s;
    }
    l.getErrorCodeFromLogoutReason = u;
    l.setPrevLogoutReasonCode = c;
    l.setPrevCustomLogoutMessage = d;
    l.getPrevLogoutReasonCode = m;
    l.getPrevCustomLogoutMessage = p;
}, 98);