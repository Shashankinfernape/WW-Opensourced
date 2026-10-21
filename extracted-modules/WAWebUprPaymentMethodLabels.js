__d("WAWebUprPaymentMethodLabels", [
    "fbt",
    "WALogger",
    "WAWebUprConstants"
], function(t, n, r, o, a, i, l, s) {
    let u;
    let c;
    function d(e, t) {
        return `${e}/${t}`;
    }
    const m = {
        [d((c = o("WAWebUprConstants")).UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.CLABE)]: {
            label: function() {
                return s._("CLABE");
            },
            copyLabel: function() {
                return s._("Copy CLABE");
            },
            copySuccessToast: function() {
                return s._("CLABE copied");
            }
        },
        [d(c.UprPaymentAccountType.QR_CODE, c.UprIdentifierType.QRIS)]: {
            label: function() {
                return s._("QRIS");
            },
            copyLabel: function() {
                return s._("Copy QR code");
            },
            copySuccessToast: function() {
                return s._("QR code copied");
            }
        },
        [d(c.UprPaymentAccountType.DIGITAL_WALLET, c.UprIdentifierType.PHONE_NUMBER)]: {
            label: function() {
                return s._("Phone number");
            },
            copyLabel: function() {
                return s._("Copy phone number");
            },
            copySuccessToast: function() {
                return s._("Phone number copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.ID_ACCOUNT_NUMBER)]: {
            label: function() {
                return s._("Account number");
            },
            copyLabel: function() {
                return s._("Copy account number");
            },
            copySuccessToast: function() {
                return s._("Account number copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.PHONE_NUMBER)]: {
            label: function() {
                return s._("Phone number");
            },
            copyLabel: function() {
                return s._("Copy phone number");
            },
            copySuccessToast: function() {
                return s._("Phone number copied");
            }
        },
        [d(c.UprPaymentAccountType.MOBILE_MONEY, c.UprIdentifierType.PHONE_NUMBER)]: {
            label: function() {
                return s._("Phone number");
            },
            copyLabel: function() {
                return s._("Copy phone number");
            },
            copySuccessToast: function() {
                return s._("Phone number copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.EMAIL)]: {
            label: function() {
                return s._("Email");
            },
            copyLabel: function() {
                return s._("Copy email");
            },
            copySuccessToast: function() {
                return s._("Email copied");
            }
        },
        [d(c.UprPaymentAccountType.DIGITAL_WALLET, c.UprIdentifierType.EMAIL)]: {
            label: function() {
                return s._("Email");
            },
            copyLabel: function() {
                return s._("Copy email");
            },
            copySuccessToast: function() {
                return s._("Email copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.IBAN)]: {
            label: function() {
                return s._("IBAN");
            },
            copyLabel: function() {
                return s._("Copy IBAN");
            },
            copySuccessToast: function() {
                return s._("IBAN copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.ACCOUNT_NUMBER)]: {
            label: function() {
                return s._("Account number");
            },
            copyLabel: function() {
                return s._("Copy account number");
            },
            copySuccessToast: function() {
                return s._("Account number copied");
            }
        },
        [d(c.UprPaymentAccountType.DIGITAL_WALLET, c.UprIdentifierType.ID_ACCOUNT_NUMBER)]: {
            label: function() {
                return s._("Account number");
            },
            copyLabel: function() {
                return s._("Copy account number");
            },
            copySuccessToast: function() {
                return s._("Account number copied");
            }
        },
        [d(c.UprPaymentAccountType.DIGITAL_WALLET, c.UprIdentifierType.ACCOUNT_NUMBER)]: {
            label: function() {
                return s._("Account number");
            },
            copyLabel: function() {
                return s._("Copy account number");
            },
            copySuccessToast: function() {
                return s._("Account number copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.FPSID)]: {
            label: function() {
                return s._("FPS ID");
            },
            copyLabel: function() {
                return s._("Copy FPS ID");
            },
            copySuccessToast: function() {
                return s._("FPS ID copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.CBU)]: {
            label: function() {
                return s._("CBU");
            },
            copyLabel: function() {
                return s._("Copy CBU");
            },
            copySuccessToast: function() {
                return s._("CBU copied");
            }
        },
        [d(c.UprPaymentAccountType.DIGITAL_WALLET, c.UprIdentifierType.CVU)]: {
            label: function() {
                return s._("CVU");
            },
            copyLabel: function() {
                return s._("Copy CVU");
            },
            copySuccessToast: function() {
                return s._("CVU copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.CCI)]: {
            label: function() {
                return s._("CCI");
            },
            copyLabel: function() {
                return s._("Copy CCI");
            },
            copySuccessToast: function() {
                return s._("CCI copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.DOCUMENT_ID)]: {
            label: function() {
                return s._("Document ID");
            },
            copyLabel: function() {
                return s._("Copy document ID");
            },
            copySuccessToast: function() {
                return s._("Document ID copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.NATIONAL_ID)]: {
            label: function() {
                return s._("National ID");
            },
            copyLabel: function() {
                return s._("Copy national ID");
            },
            copySuccessToast: function() {
                return s._("National ID copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.BRANCH_CODE)]: {
            label: function() {
                return s._("Branch code");
            },
            copyLabel: function() {
                return s._("Copy branch code");
            },
            copySuccessToast: function() {
                return s._("Branch code copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.RUC)]: {
            label: function() {
                return s._("RUC");
            },
            copyLabel: function() {
                return s._("Copy RUC");
            },
            copySuccessToast: function() {
                return s._("RUC copied");
            }
        },
        [d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.RUT)]: {
            label: function() {
                return s._("RUT");
            },
            copyLabel: function() {
                return s._("Copy RUT");
            },
            copySuccessToast: function() {
                return s._("RUT copied");
            }
        }
    };
    const p = new Set;
    function _(e, t) {
        const n = t.toLowerCase();
        const r = d(e, n);
        const a = m[r];
        return a ?? (p.has(r) || (p.add(r), o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[UPR] rendering unregistered payment method combo: ",
            ""
        ])), r).sendLogs("upr-unregistered-method-combo")), f(n));
    }
    function f(e) {
        const t = g(e);
        const { label, sentence } = t;
        return {
            label: function() {
                return s._("{method}", [
                    s._param("method", label)
                ]);
            },
            copyLabel: function() {
                return s._("Copy {method}", [
                    s._param("method", sentence)
                ]);
            },
            copySuccessToast: function() {
                return s._("{method} copied", [
                    s._param("method", sentence)
                ]);
            }
        };
    }
    function g(e) {
        const sentence = e.includes("_") ? e.split("_").join(" ").toLowerCase() : e.toUpperCase();
        return {
            label: sentence.charAt(0).toUpperCase() + sentence.slice(1),
            sentence
        };
    }
    l.methodKey = d;
    l.getUprMethodLabels = _;
}, 226);