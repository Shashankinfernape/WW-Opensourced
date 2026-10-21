__d("WAWebLockScreenResolver", [
    "fbt",
    "WAComms",
    "WALogger",
    "WAResolvable",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebCryptoEncKeyHelper",
    "WAWebDbEncryptionKey",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    class f {
        constructor(){
            this.deferred = new (o("WAResolvable")).Resolvable;
        }
        waitForPasscode() {
            o("WAWebCmd").Cmd.openLockScreenModal();
            return this.deferred?.promise;
        }
        waitForPasscodeAfterIncorrectAttempt() {
            this.deferred = new (o("WAResolvable")).Resolvable;
            o("WAWebCmd").Cmd.incorrectPasscodeLockScreen();
            return this.deferred?.promise;
        }
        enterPasscode(t) {
            this.deferred.resolve(t);
        }
        correctPasscodeEntered(t) {
            this.deferred = new (o("WAResolvable")).Resolvable;
            o("WAWebCmd").Cmd.correctPasscodeLockScreen(t);
            o("WAWebModalManager").ModalManager.close();
        }
    }
    const g = new f;
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (r("WAWebCallCollection").activeCall != null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[screen-lock] blocked: active call in progress"
                ])));
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                    surface: "unknown",
                    viewName: "screen-lock-active-call-blocker"
                }} title={s._("You can't lock the app during a call")} onOK={o("WAWebModalManager").closeModalManager} okText={s._("OK")}>{s._("End your call before locking the app.")}</Component>);
                return;
            }
            if (o("WAWebUserPrefsInfoStore").waNoiseInfo.cachedPasscodeDerivedKey == null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[screeen-lock] passcode derived key null"
                ]))).sendLogs("[screeen-lock] passcode derived key null");
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] lockScreenAndTriggerUnlockFlow: no passcode key"
                ])));
                location.reload();
                return;
            }
            const t = o("WAComms").getComms();
            if (t == null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] lockScreenAndTriggerUnlockFlow: no comms"
                ])));
                location.reload();
                return;
            }
            const n = o("WAWebChatCollection").ChatCollection.getActive();
            if (n) {
                o("WAWebCmd").Cmd.closeChat(n);
            }
            yield o("WAWebMsgCollection").MsgCollection.encryptAndClearModels();
            o("WAWebUserPrefsInfoStore").waNoiseInfo.resetCachedPasscodeDerivedKey();
            o("WAWebDbEncryptionKey").DbEncKeyStore.deleteKeyCache();
            o("WAWebDbEncryptionKey").DbEncKeyStore.resetDB();
            if (t.softCloseSocket) {
                t.softCloseSocket();
            } else {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] lockScreenAndTriggerUnlockFlow"
                ])));
                location.reload();
                return;
            }
            yield o("WAWebCryptoEncKeyHelper").initEncSalt();
            t.openSocketLoop();
        });
        return y.apply(this, arguments);
    }
    l.LockScreenResolvable = g;
    l.lockScreenAndTriggerUnlockFlow = h;
}, 226);