__d("WAWebTPPdfSharer", [
    "Promise",
    "WAWebTPWhatsAppNetBridge",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const d = (()=>{
        function t(e) {
            this.$1 = new (o("WAWebTPWhatsAppNetBridge")).WAWebTPWhatsAppNetBridge(e);
        }
        const t_prototype = t.prototype;
        t_prototype.publishAppConfig = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                return this.$1.publishWhenReady("APP_CONFIG", e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.listenForCancel = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                return new (e || (e = n("Promise")))(function(e, n) {
                    t.$1.listenOnce("PDF_SHARER_CANCEL", function() {
                        return e();
                    }, {
                        timeoutMs: Number.MAX_SAFE_INTEGER,
                        onTimeout: function(t) {
                            n(t);
                        }
                    });
                });
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.listenForError = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                return new (e || (e = n("Promise")))(function(e) {
                    t.$1.listen("APP_ERROR", function() {
                        return e();
                    });
                });
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.listenForCheckboxToggle = function(t) {
            return this.$1.listen("PDF_SHARER_CHECKBOX_TOGGLE", t);
        };
        t_prototype.listenForGetPDf = function() {
            const t = this;
            return new (e || (e = n("Promise")))(function(e, n) {
                t.$1.listenOnce("PDF_SHARER_GET_PDF", function() {
                    return e();
                }, {
                    timeoutMs: Number.MAX_SAFE_INTEGER,
                    onTimeout: function(t) {
                        n(t);
                    }
                });
            });
        };
        t_prototype.sharePdf = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(fileBuffer, fileName, sessionId) {
                const i = this;
                this.$1.publishWhenReady("PDF_SHARER_GET_PDF_DOCUMENT", {
                    fileBuffer,
                    fileName,
                    sessionId
                }, [
                    fileBuffer
                ]);
                return new (e || (e = n("Promise")))(function(e, t) {
                    i.$1.listenOnce("PDF_SHARER_GET_PDF_RESPONSE", function({ errorMessage, errorType, savePreference, success, uid }) {
                        if (success) {
                            e({
                                savePreference,
                                uid
                            });
                        } else {
                            const u = r("err")(errorMessage ?? "unknown");
                            u.name = errorType ?? "sharer_connection_failed";
                            t(u);
                        }
                    }, {
                        timeoutMs: Number.MAX_SAFE_INTEGER,
                        onTimeout: function(n) {
                            t(n);
                        }
                    });
                });
            });
            function o(e, n, r) {
                return t.apply(this, arguments);
            }
            return o;
        })();
        t_prototype.listenForReturnPdf = function(t) {
            return this.$1.listen("PDF_SHARER_RETURN_PDF", t);
        };
        t_prototype.listenForInactive = function(t) {
            return this.$1.listen("PDF_SHARER_INACTIVE", t);
        };
        t_prototype.checkInactive = function() {
            this.$1.publishWhenReady("PDF_SHARER_CHECK_INACTIVE", {});
        };
        t_prototype.destroy = function() {
            this.$1.destroy();
        };
        return t;
    })();
    l.WAWebTPPdfSharer = d;
}, 98);