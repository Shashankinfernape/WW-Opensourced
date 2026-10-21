__d("fb-error", [
    "performanceNow",
    "removeFromArray"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const l = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };
    function err(e, ...r) {
        const t = new Error(e);
        if (t.stack === undefined) {
            try {
                throw t;
            } catch (e) {}
        }
        t.messageFormat = e;
        t.messageParams = r.map((e)=>String(e));
        t.taalOpcodes = [
            l.PREVIOUS_FRAME
        ];
        return t;
    }
    let u = false;
    const ErrorBrowserConsole = {
        errorListener: function(n) {
            const t_console = t.console;
            const r = t_console[n.type] ? n.type : "error";
            if (n.type === "fatal" || r === "error" && !u) {
                const o = n.message;
                t_console.error(`ErrorUtils caught an error:

${o}

Subsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.`, n);
                u = true;
            }
        }
    };
    const config = {
        skipDupErrorGuard: false
    };
    var ErrorConfig = {
        config,
        setup: _
    };
    var p = false;
    function _(e) {
        if (p === false) {
            p = true;
            ErrorConfig.config = Object.freeze(e);
        }
    }
    const ErrorDynamicData = {
        access_token: null
    };
    const g = 6;
    const h = 60000;
    const y = 10 * h;
    const C = new Map;
    let b = 0;
    function v() {
        const t = (e || (e = n("performanceNow")))();
        if (t > b + h) {
            const r = t - y;
            for (const [a, i] of C){
                if (i.lastAccessed < r) {
                    C.delete(a);
                }
            }
            b = t;
        }
    }
    function S(hash) {
        v();
        const lastAccessed = (e || (e = n("performanceNow")))();
        const o = C.get(hash);
        if (o == null) {
            C.set(hash, {
                dropped: 0,
                logged: [
                    lastAccessed
                ],
                lastAccessed
            });
            return 1;
        }
        const { dropped, logged } = o;
        for(o.lastAccessed = lastAccessed; logged[0] < lastAccessed - h;){
            logged.shift();
        }
        if (logged.length < g) {
            o.dropped = 0;
            logged.push(lastAccessed);
            return dropped + 1;
        }
        o.dropped++;
        return null;
    }
    const ErrorFilter = {
        shouldLog: function(t) {
            return S(t.hash);
        }
    };
    const L = "RE_EXN_ID";
    function getErrorSafe(e) {
        let t = null;
        if (e == null || typeof e !== "object") {
            t = err("Non-object thrown: %s", String(e));
        } else if (Object.prototype.hasOwnProperty.call(e, L)) {
            t = err("Rescript exception thrown: %s", JSON.stringify(e));
        } else if (typeof e?.then === "function") {
            t = err("Promise thrown: %s", JSON.stringify(e));
        } else if (typeof e.message !== "string") {
            t = err("Non-error thrown: %s, keys: %s", String(e), JSON.stringify(Object.keys(e).sort()));
        } else if (e.messageFormat != null && typeof e.messageFormat !== "string") {
            t = err("Error with non-string messageFormat thrown: %s, %s, keys: %s", String(e.message), String(e), JSON.stringify(Object.keys(e).sort()));
        } else if (Object.isExtensible && !Object.isExtensible(e)) {
            t = err("Non-extensible thrown: %s", String(e.message));
        }
        if (t != null) {
            t.taalOpcodes = t.taalOpcodes || [];
            t.taalOpcodes.push(l.PREVIOUS_FRAME);
            return t;
        }
        return e;
    }
    const k = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>";
    let I;
    function T(e) {
        const n = e.error != null ? getErrorSafe(e.error) : err(e.message || "");
        if (n.fileName == null && e.filename != null) {
            n.fileName = e.filename;
        }
        if (n.line == null && e.lineno != null) {
            n.line = e.lineno;
        }
        if (n.column == null && e.colno != null) {
            n.column = e.colno;
        }
        n.guardList = [
            k
        ];
        n.loggingSource = "ONERROR";
        I?.reportError(n);
    }
    const ErrorGlobalEventHandler = {
        setup: function(n) {
            if (typeof t.addEventListener === "function" && I == null) {
                I = n;
                t.addEventListener("error", T);
            }
        }
    };
    const x = [];
    const ErrorGuardState = {
        pushGuard: function(t) {
            x.unshift(t);
        },
        popGuard: function() {
            x.shift();
        },
        inGuard: function() {
            return x.length !== 0;
        },
        cloneGuardList: function() {
            return x.map((e)=>e.name);
        },
        findDeferredSource: function() {
            for (const e of x){
                if (e.deferredSource != null) {
                    return e.deferredSource;
                }
            }
        }
    };
    function P(e) {
        return e.type ?? (e.loggingSource == "GUARDED" || e.loggingSource == "ERROR_BOUNDARY" || e.name == "SyntaxError" ? "fatal" : e.loggingSource == "ONERROR" && e.message.indexOf("ResizeObserver loop") >= 0 || e.stack != null && e.stack.indexOf("chrome-extension://") >= 0 ? "warn" : "error");
    }
    let N = [];
    class M {
        constructor(){
            this.metadata = [].concat(N);
        }
        addEntries() {
            this.metadata.push(...arguments);
            return this;
        }
        addEntry(t, n, r) {
            this.metadata.push([
                t,
                n,
                r
            ]);
            return this;
        }
        isEmpty() {
            return this.metadata.length === 0;
        }
        clearEntries() {
            this.metadata = [];
        }
        format() {
            const e = [];
            this.metadata.forEach((t)=>{
                if (t && t.length) {
                    const n = t.map((e)=>{
                        if (e != null) {
                            return String(e).replace(/:/g, "_");
                        }
                        return "";
                    }).join(":");
                    e.push(n);
                }
            });
            return e;
        }
        getAll() {
            return this.metadata;
        }
        static addGlobalMetadata(t, n, r) {
            N.push([
                t,
                n,
                r
            ]);
        }
        static getGlobalMetadata() {
            return N;
        }
        static unsetGlobalMetadata(t, n) {
            N = N.filter((e)=>!(Array.isArray(e) && e[0] === t && e[1] === n));
        }
    }
    const w = {
        debug: 1,
        info: 2,
        warn: 3,
        error: 4,
        fatal: 5
    };
    function aggregateError(e, t) {
        if (!Object.isFrozen(e)) {
            if (t.type && (!e.type || w[e.type] > w[t.type])) {
                e.type = t.type;
            }
            const o = t.metadata;
            if (o != null) {
                const i = e.metadata ?? new M;
                if (o != null) {
                    i.addEntries(...o.getAll());
                }
                e.metadata = i;
            }
            if (t.project != null) {
                e.project = t.project;
            }
            if (t.errorName != null) {
                e.errorName = t.errorName;
            }
            if (t.componentStack != null) {
                e.componentStack = t.componentStack;
            }
            if (t.deferredSource != null) {
                e.deferredSource = t.deferredSource;
            }
            if (t.blameModule != null) {
                e.blameModule = t.blameModule;
            }
            if (t.loggingSource != null) {
                e.loggingSource = t.loggingSource;
            }
            let l = e.messageFormat ?? e.message;
            const s = e.messageParams ?? [];
            if (l !== t.messageFormat && t.messageFormat != null) {
                l += ` [Caught in: ${t.messageFormat}]`;
                s.push(...t.messageParams ?? []);
            }
            e.messageFormat = l;
            e.messageParams = s;
            const c = t.forcedKey;
            const d = e.forcedKey;
            const m = c != null && d != null ? `${c}_${d}` : c ?? d;
            e.forcedKey = m;
        }
    }
    function toReadableMessage(e) {
        return O(e.messageFormat ?? e.message, e.messageParams || []);
    }
    function O(e, t) {
        let n = 0;
        const r = String(e);
        let o = r.replace(/%s/g, ()=>{
            if (n < t.length) {
                return t[n++];
            }
            return "NOPARAM";
        });
        if (n < t.length) {
            o += ` PARAMS${JSON.stringify(t.slice(n))}`;
        }
        return o;
    }
    function toStringParams(e) {
        return (e ?? []).map((e)=>String(e));
    }
    const ErrorSerializer = {
        aggregateError,
        toReadableMessage,
        toStringParams
    };
    const q = 5;
    const U = [];
    function add(e) {
        U.push(e);
        if (U.length > q) {
            U.shift();
        }
    }
    function addFromXHR(e) {
        const t = e.getAllResponseHeaders();
        if (t != null && t.indexOf("X-FB-Debug") >= 0) {
            const n = e.getResponseHeader("X-FB-Debug");
            if (n != null && n !== "") {
                add(n);
            }
        }
    }
    function getAll() {
        return U;
    }
    const ErrorXFBDebug = {
        add,
        addFromXHR,
        getAll
    };
    const j = "abcdefghijklmnopqrstuvwxyz012345";
    function getSimpleHash(...n) {
        let e = 0;
        for (const o of n){
            if (o != null) {
                for(let a = o.length, i = 0; i < a; i++){
                    e = (e << 5) - e + o.charCodeAt(i);
                }
            }
        }
        let l = "";
        for(let s = 0; s < 6; s++){
            l = j.charAt(e & 31) + l;
            e >>= 5;
        }
        return l;
    }
    const Q = [
        /\(([^\s\)\()]+):(\d+):(\d+)\)$/,
        /@([^\s\)\()]+):(\d+):(\d+)$/,
        /^([^\s\)\()]+):(\d+):(\d+)$/,
        /^at ([^\s\)\()]+):(\d+):(\d+)$/
    ];
    const X = /^\w+:\s.*?\n/g;
    if (Error.stackTraceLimit != null && Error.stackTraceLimit < 80) {
        Error.stackTraceLimit = 80;
    }
    function Y({ message, name, stack }) {
        if (stack == null) {
            return null;
        }
        if (name != null && message != null && message !== "") {
            const o = `${name}: ${message}
`;
            if (stack.startsWith(o)) {
                return stack.substr(o.length);
            }
            if (stack === `${name}: ${message}`) {
                return null;
            }
        }
        if (name != null) {
            const a = `${name}
`;
            if (stack.startsWith(a)) {
                return stack.substr(a.length);
            }
        }
        if (message != null && message !== "") {
            const i = `: ${message}
`;
            const l = stack.indexOf(i);
            const s = stack.substring(0, l);
            if (/^\w+$/.test(s)) {
                return stack.substring(l + i.length);
            }
        }
        return stack.replace(X, "");
    }
    function J(e) {
        const t = e.trim();
        let n = t;
        let r;
        let line;
        let column;
        if (t.includes("charset=utf-8;base64,")) {
            n = "<inlined-file>";
        } else {
            let i;
            for (const l of Q){
                i = t.match(l);
                if (i != null) {
                    break;
                }
            }
            if (i != null && i.length === 4) {
                r = i[1];
                line = parseInt(i[2], 10);
                column = parseInt(i[3], 10);
                n = t.substring(0, t.length - i[0].length);
            } else {
                n = t;
            }
            n = n.replace(/^at /, "").trim();
        }
        const s = {
            identifier: n,
            script: r,
            line,
            column
        };
        s.text = formatStackFrame(s);
        return s;
    }
    function Z(e) {
        if (e == null || e === "") {
            return [];
        }
        return e.split(/\n\n/)[0].split("\n").map(J);
    }
    function ee(e) {
        const t = Y(e);
        return Z(t);
    }
    function te(componentStack) {
        if (componentStack == null || componentStack === "") {
            return null;
        }
        const t = componentStack.split("\n");
        t.splice(0, 1);
        return t.map((e)=>e.trim());
    }
    function formatStackFrame({ column, identifier, line, script }) {
        let a = `    at ${identifier ?? "<unknown>"}`;
        if (script != null && line != null && column != null) {
            a += ` (${script}:${line}:${column})`;
        }
        return a;
    }
    function normalizeError(r) {
        const stackFrames = ee(r);
        const g = r.taalOpcodes ?? [];
        const r_framesToPop = r.framesToPop;
        if (r_framesToPop != null) {
            for(let y = Math.min(r_framesToPop, stackFrames.length), C = 0; C < y; C++){
                g.unshift(l.PREVIOUS_FRAME);
            }
        }
        const messageFormat = r.messageFormat ?? r.message;
        const messageParams = (r.messageParams ?? []).map((e)=>String(e));
        const reactComponentStack = te(r.componentStack);
        const componentStackFrames = reactComponentStack == null ? null : reactComponentStack.map(J);
        let metadata = r.metadata ? r.metadata.format() : new M().format();
        if (metadata.length === 0) {
            metadata = undefined;
        }
        const stack = stackFrames.map((e)=>e.text).join("\n");
        const k = r.errorName ?? r.name;
        const I = P(r);
        const { loggingSource, project } = r;
        let x = r.lineNumber ?? r.line;
        let $ = r.columnNumber ?? r.column;
        let N = r.fileName ?? r.sourceURL;
        const w = stackFrames.length > 0;
        if (w && x == null) {
            x = stackFrames[0].line;
        }
        if (w && $ == null) {
            $ = stackFrames[0].column;
        }
        if (w && N == null) {
            N = stackFrames[0].script;
        }
        const A = {
            blameModule: r.blameModule,
            cause: r.cause,
            column: $ == null ? null : String($),
            clientTime: Math.floor(Date.now() / 1000),
            componentStackFrames,
            deferredSource: r.deferredSource != null ? normalizeError(r.deferredSource) : null,
            extra: r.extra ?? {},
            fbtrace_id: r.fbtrace_id,
            guardList: r.guardList ?? [],
            hash: getSimpleHash(k, stack, I, project, loggingSource),
            isNormalizedError: true,
            line: x == null ? null : String(x),
            loggingSource,
            message: ErrorSerializer.toReadableMessage(r),
            messageFormat,
            messageParams,
            metadata,
            name: k,
            page_time: Math.floor((e || (e = n("performanceNow")))()),
            project,
            reactComponentStack,
            script: N,
            serverHash: r.serverHash,
            stack,
            stackFrames,
            type: I,
            xFBDebug: ErrorXFBDebug.getAll(),
            tags: r.tags ?? [],
            operation: r.operation
        };
        if (r.forcedKey != null) {
            A.forcedKey = r.forcedKey;
        }
        if (g.length > 0) {
            A.taalOpcodes = g;
        }
        const t_location = t.location;
        if (t_location) {
            A.windowLocationURL = t_location.href;
        }
        for(const O in A){
            if (A[O] == null) {
                delete A[O];
            }
        }
        return A;
    }
    function ifNormalizedError(e) {
        if (e != null && typeof e === "object" && e.isNormalizedError === true) {
            return e;
        }
        return null;
    }
    const ErrorNormalizeUtils = {
        formatStackFrame,
        normalizeError,
        ifNormalizedError
    };
    const ie = "<global.react>";
    const le = [];
    const history = [];
    const ue = 50;
    let ce = false;
    var ErrorPubSub = {
        history,
        addListener: function(t, n = false) {
            le.push(t);
            if (!n) {
                history.forEach((e)=>t(e, e.loggingSource ?? "DEPRECATED"));
            }
        },
        unshiftListener: function(t) {
            le.unshift(t);
        },
        removeListener: function(t) {
            n("removeFromArray")(le, t);
        },
        reportError: function(t) {
            const e = ErrorNormalizeUtils.normalizeError(t);
            ErrorPubSub.reportNormalizedError(e);
        },
        reportNormalizedError: function(t) {
            if (ce) {
                return false;
            }
            const e = ErrorGuardState.cloneGuardList();
            if (t.componentStackFrames) {
                e.unshift(ie);
            }
            if (e.length > 0) {
                t.guardList = e;
            }
            if (t.deferredSource == null) {
                const n = ErrorGuardState.findDeferredSource();
                if (n != null) {
                    t.deferredSource = ErrorNormalizeUtils.normalizeError(n);
                }
            }
            if (history.length > ue) {
                history.splice(ue / 2, 1);
            }
            history.push(t);
            ce = true;
            for(let r = 0; r < le.length; r++){
                try {
                    le[r](t, t.loggingSource ?? "DEPRECATED");
                } catch (e) {}
            }
            ce = false;
            return true;
        }
    };
    ErrorPubSub.addListener(ErrorBrowserConsole.errorListener);
    const me = "<anonymous guard>";
    let pe = false;
    var ErrorGuard = {
        applyWithGuard: function(t, n, r, o) {
            if (ErrorConfig.config.skipDupErrorGuard && "__isMetaErrorGuarded" in t) {
                return t.apply(n, r);
            }
            ErrorGuardState.pushGuard({
                name: (o?.name != null ? o.name : null) || (t.name ? `func_name:${t.name}` : null) || me,
                deferredSource: o?.deferredSource
            });
            if (pe) {
                try {
                    return t.apply(n, r);
                } finally{
                    ErrorGuardState.popGuard();
                }
            }
            try {
                return Function.prototype.apply.call(t, n, r);
            } catch (error) {
                try {
                    const a = o ?? babelHelpers.extends({}, null);
                    const { deferredSource, onError, onNormalizedError } = a;
                    const u = getErrorSafe(error);
                    const c = {
                        deferredSource,
                        loggingSource: "GUARDED",
                        project: o?.project ?? "ErrorGuard",
                        type: o?.errorType
                    };
                    ErrorSerializer.aggregateError(u, c);
                    const d = ErrorNormalizeUtils.normalizeError(u);
                    if (u == null && t) {
                        d.extra[t.toString().substring(0, 100)] = "function";
                        if (r != null && r.length) {
                            d.extra[Array.from(r).toString().substring(0, 100)] = "args";
                        }
                    }
                    d.guardList = ErrorGuardState.cloneGuardList();
                    if (onError) {
                        onError(u);
                    }
                    if (onNormalizedError) {
                        onNormalizedError(d);
                    }
                    ErrorPubSub.reportNormalizedError(d);
                } catch (e) {}
            } finally{
                ErrorGuardState.popGuard();
            }
        },
        guard: function(t, n) {
            function e(...r) {
                return ErrorGuard.applyWithGuard(t, this, r, n);
            }
            e.__isMetaErrorGuarded = true;
            if (t.__SMmeta) {
                e.__SMmeta = t.__SMmeta;
            }
            return e;
        },
        inGuard: function() {
            return ErrorGuardState.inGuard();
        },
        skipGuardGlobal: function(t) {
            pe = t;
        }
    };
    const fe = 1024;
    const ge = [];
    let he = 0;
    function ye(e) {
        return String(e);
    }
    function Ce(e) {
        if (e == null) {
            return null;
        }
        return String(e);
    }
    function be(extra, t) {
        const n = {};
        if (t) {
            t.forEach((e)=>{
                n[e] = true;
            });
        }
        Object.keys(extra).forEach((t)=>{
            if (extra[t]) {
                n[t] = true;
            } else if (n[t]) {
                delete n[t];
            }
        });
        return Object.keys(n);
    }
    function ve(e) {
        return (e ?? []).map((e)=>({
                column: Ce(e.column),
                identifier: e.identifier,
                line: Ce(e.line),
                script: e.script
            }));
    }
    function Se(e) {
        const t = String(e);
        if (t.length > fe) {
            return `${t.substring(0, fe - 3)}...`;
        }
        return t;
    }
    function createErrorPayload(e, t) {
        const i = {
            appId: Ce(t.appId),
            cavalry_lid: t.cavalry_lid,
            access_token: ErrorDynamicData.access_token,
            ancestor_hash: e.hash,
            bundle_variant: t.bundle_variant ?? null,
            clientTime: ye(e.clientTime),
            column: e.column,
            componentStackFrames: ve(e.componentStackFrames),
            events: e.events,
            extra: be(e.extra, t.extra),
            forcedKey: e.forcedKey,
            frontend_env: t.frontend_env ?? null,
            guardList: e.guardList,
            line: e.line,
            loggingFramework: t.loggingFramework,
            messageFormat: Se(e.messageFormat),
            messageParams: e.messageParams.map(Se),
            name: e.name,
            sample_weight: Ce(t.sample_weight),
            script: e.script,
            site_category: t.site_category,
            stackFrames: ve(e.stackFrames),
            type: e.type,
            page_time: Ce(e.page_time),
            project: e.project,
            push_phase: t.push_phase,
            report_source: t.report_source,
            report_source_ref: t.report_source_ref,
            rollout_hash: t.rollout_hash ?? null,
            script_path: t.script_path,
            server_revision: Ce(t.server_revision),
            spin: Ce(t.spin),
            svn_rev: String(t.client_revision),
            additional_client_revisions: Array.from(t.additional_client_revisions ?? []).map(ye),
            taalOpcodes: e.taalOpcodes == null ? null : e.taalOpcodes.map((e)=>e),
            web_session_id: t.web_session_id,
            version: "3",
            xFBDebug: e.xFBDebug,
            tags: e.tags
        };
        const { blameModule, deferredSource } = e;
        if (blameModule != null) {
            i.blameModule = String(blameModule);
        }
        if (deferredSource && deferredSource.stackFrames) {
            i.deferredSource = {
                stackFrames: ve(deferredSource.stackFrames)
            };
        }
        if (e.metadata) {
            i.metadata = e.metadata;
        }
        if (e.loadingUrls) {
            i.loadingUrls = e.loadingUrls;
        }
        if (e.serverHash != null) {
            i.serverHash = e.serverHash;
        }
        if (e.windowLocationURL != null) {
            i.windowLocationURL = e.windowLocationURL;
        }
        if (e.loggingSource != null) {
            i.loggingSource = e.loggingSource;
        }
        return i;
    }
    function postError(e, t, n) {
        let r;
        he++;
        if (t.sample_weight === 0) {
            return false;
        }
        const o = ErrorFilter.shouldLog(e);
        if (o == null || (r = t.projectBlocklist) !== null && r !== undefined && r.includes(e.project)) {
            return false;
        }
        const a = createErrorPayload(e, t);
        Object.assign(a, {
            ancestors: ge.slice(),
            clientWeight: ye(o),
            page_position: ye(he)
        });
        if (ge.length < 15 && [
            "fatal",
            "error"
        ].includes(e.type)) {
            ge.push(e.hash);
        }
        n(a);
        return true;
    }
    const ErrorPoster = {
        createErrorPayload,
        postError
    };
    let ke = null;
    let Ie = false;
    function onunhandledrejection(e) {
        if (ke != null) {
            const t = ke;
            const n = e.reason;
            let r;
            let o = getErrorSafe(n);
            let a = null;
            if (n !== o && typeof n === "object" && n !== null) {
                r = Object.keys(n).sort().slice(0, 3);
                if (typeof n.message !== "string" && typeof n.messageFormat === "string") {
                    n.message = n.messageFormat;
                    o = getErrorSafe(n);
                }
                if (typeof n.message !== "string" && typeof n.errorMsg === "string") {
                    if (/^\s*\<!doctype/i.test(n.errorMsg)) {
                        const i = /<title>([^<]+)<\/title>(?:(?:.|\n)*<h1>([^<]+)<\/h1>)?/im.exec(n.errorMsg);
                        if (i) {
                            o = err('HTML document with title="%s" and h1="%s"', i[1] ?? "", i[2] ?? "");
                        } else {
                            o = err("HTML document sanitized");
                        }
                    } else {
                        if (/^\s*<\?xml/i.test(n.errorMsg)) {
                            o = err("XML document sanitized");
                        } else {
                            n.message = n.errorMsg;
                            o = getErrorSafe(n);
                        }
                    }
                }
                if (o !== n && typeof n.name === "string") {
                    a = n.name;
                }
                if (typeof n.name !== "string" && typeof n.errorCode === "string") {
                    a = `UnhandledRejectionWith_errorCode_${n.errorCode}`;
                }
                if (typeof n.name !== "string" && typeof n.error === "number") {
                    a = `UnhandledRejectionWith_error_${String(n.error)}`;
                }
            }
            o.loggingSource = "ONUNHANDLEDREJECTION";
            try {
                a = o === n && a != null && a !== "" ? a : typeof n?.name === "string" && n.name !== "" ? n.name : r != null && r.length > 0 ? `UnhandledRejectionWith_${r.join("_")}` : `UnhandledRejection_${n === null ? "null" : typeof n}`;
                o.name = a;
            } catch (e) {}
            try {
                let c = n?.stack;
                if (typeof c !== "string" || c === "") {
                    c = o.stack;
                }
                if (typeof c !== "string" || c === "") {
                    c = err("").stack;
                }
                o.stack = `${o.name}: ${o.message}
${c.split("\n").slice(1).join("\n")}`;
            } catch (e) {}
            try {
                const d = e.promise;
                const m = d;
                o.stack = o.stack + (d != null && typeof m.settledStack === "string" ? `
    at <promise_settled_stack_below>
${m.settledStack}` : "") + (d != null && typeof m.createdStack === "string" ? `
    at <promise_created_stack_below>
${m.createdStack}` : "");
            } catch (e) {}
            try {
                const p = e.promise;
                if ("__isPromiseWithTracing" in p && p.__isPromiseWithTracing === true && p.deferredError != null) {
                    o.deferredSource = getErrorSafe(p.deferredError);
                }
            } catch (e) {}
            t.reportError(o);
            e.preventDefault();
        }
    }
    function De(e) {
        ke = e;
        if (typeof t.addEventListener === "function" && !Ie) {
            Ie = true;
            t.addEventListener("unhandledrejection", onunhandledrejection);
        }
    }
    const xe = {
        onunhandledrejection,
        setup: De
    };
    const ErrorSetup = {
        preSetup: function(t) {
            if (t == null || t.ignoreOnError !== true) {
                ErrorGlobalEventHandler.setup(ErrorPubSub);
            }
            if (t == null || t.ignoreOnUnahndledRejection !== true) {
                xe.setup(ErrorPubSub);
            }
        },
        setup: function(t, n, r) {
            ErrorPubSub.addListener(function(e) {
                const a = babelHelpers.extends({}, t, r?.() ?? {});
                ErrorPoster.postError(e, a, n);
            });
        }
    };
    const Pe = 20;
    const Ne = (()=>{
        function e(e, t = []) {
            const n = this;
            this.FATAL = function(e, ...o) {
                const t = e.join("%s");
                n.fatal(t, ...o);
            };
            this.MUSTFIX = function(e, ...o) {
                const t = n.getTagString() + e.join("%s");
                n.mustfix(t, ...o);
            };
            this.WARN = function(e, ...o) {
                const t = n.getTagString() + e.join("%s");
                n.warn(t, ...o);
            };
            this.INFO = function(e, ...o) {
                const t = n.getTagString() + e.join("%s");
                n.info(t, ...o);
            };
            this.DEBUG = function(e, ...o) {
                const t = n.getTagString() + e.join("%s");
                n.debug(t, ...o);
            };
            this.project = e;
            this.events = [];
            this.metadata = new M;
            this.taalOpcodes = [];
            this.loggerTags = new Set(t);
        }
        const e_prototype = e.prototype;
        e_prototype.$1 = function(n, r, ...p) {
            const messageFormat = String(r);
            const blameModule = this.blameModule;
            const events = this.events;
            const forcedKey = this.forcedKey;
            const metadata = this.metadata;
            const project = this.project;
            let error = this.error;
            let d;
            if (this.normalizedError) {
                d = babelHelpers.extends({}, this.normalizedError, {
                    messageFormat: `${this.normalizedError.messageFormat} [Caught in: ${messageFormat}]`,
                    messageParams: ErrorSerializer.toStringParams([].concat(this.normalizedError.messageParams, p)),
                    project,
                    type: n,
                    loggingSource: "FBLOGGER"
                });
                d.message = ErrorSerializer.toReadableMessage(d);
                if (forcedKey != null) {
                    d.forcedKey = d.forcedKey != null ? `${forcedKey}_${d.forcedKey}` : forcedKey;
                }
            } else if (error) {
                if (this.taalOpcodes.length > 0) {
                    new e("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching");
                }
                ErrorSerializer.aggregateError(error, {
                    messageFormat,
                    messageParams: ErrorSerializer.toStringParams(p),
                    errorName: error.name,
                    forcedKey,
                    project,
                    type: n,
                    loggingSource: "FBLOGGER"
                });
                d = ErrorNormalizeUtils.normalizeError(error);
            } else {
                error = new Error(messageFormat);
                if (error.stack === undefined) {
                    try {
                        throw error;
                    } catch (e) {}
                }
                error.messageFormat = messageFormat;
                error.messageParams = ErrorSerializer.toStringParams(p);
                error.blameModule = blameModule;
                error.forcedKey = forcedKey;
                error.project = project;
                error.type = n;
                error.loggingSource = "FBLOGGER";
                error.taalOpcodes = [
                    l.PREVIOUS_FRAME,
                    l.PREVIOUS_FRAME
                ].concat(this.taalOpcodes);
                d = ErrorNormalizeUtils.normalizeError(error);
                d.name = "FBLogger";
            }
            if (!metadata.isEmpty()) {
                if (d.metadata == null) {
                    d.metadata = metadata.format();
                } else {
                    const f = d.metadata.concat(metadata.format());
                    const g = new Set(f);
                    d.metadata = Array.from(g.values());
                }
            }
            if (events.length > 0) {
                if (d.events != null) {
                    d.events.push(...events);
                } else {
                    d.events = [].concat(events);
                }
                if (d.events != null && d.events.length > Pe) {
                    const y = d.events.length - Pe;
                    d.events.splice(0, y + 1, `<first ${y} events omitted>`);
                }
            }
            d.tags = Array.from(this.loggerTags);
            ErrorPubSub.reportNormalizedError(d);
            return error;
        };
        e_prototype.fatal = function(t, ...n) {
            this.$1("fatal", t, ...n);
        };
        e_prototype.mustfix = function(t, ...n) {
            this.$1("error", t, ...n);
        };
        e_prototype.warn = function(t, ...n) {
            this.$1("warn", t, ...n);
        };
        e_prototype.info = function(t, ...n) {
            this.$1("info", t, ...n);
        };
        e_prototype.debug = function(t) {};
        e_prototype.mustfixThrow = function(t, ...n) {
            let o = this.$1("error", t, ...n);
            if (!o) {
                o = err("mustfixThrow does not support catchingNormalizedError");
                o.taalOpcodes = o.taalOpcodes || [];
                o.taalOpcodes.push(l.PREVIOUS_FRAME);
            }
            try {
                o.message = ErrorSerializer.toReadableMessage(o);
            } catch (e) {}
            o.is_js_error = true;
            throw o;
        };
        e_prototype.catching = function(n) {
            if (n instanceof Error) {
                this.error = n;
            } else {
                new e("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported");
            }
            return this;
        };
        e_prototype.catchingNormalizedError = function(t) {
            this.normalizedError = t;
            return this;
        };
        e_prototype.event = function(t) {
            this.events.push(t);
            return this;
        };
        e_prototype.blameToModule = function(t) {
            this.blameModule = t;
            return this;
        };
        e_prototype.blameToPreviousFile = function() {
            this.taalOpcodes.push(l.PREVIOUS_FILE);
            return this;
        };
        e_prototype.blameToPreviousFrame = function() {
            this.taalOpcodes.push(l.PREVIOUS_FRAME);
            return this;
        };
        e_prototype.blameToPreviousDirectory = function() {
            this.taalOpcodes.push(l.PREVIOUS_DIR);
            return this;
        };
        e_prototype.addToCategoryKey = function(t) {
            this.forcedKey = t;
            return this;
        };
        e_prototype.addMetadata = function(t, n, r) {
            this.metadata.addEntry(t, n, r);
            return this;
        };
        e_prototype.tags = function(n) {
            const t = n.concat(Array.from(this.loggerTags));
            const r = new e(this.project, t);
            this.events.forEach((e)=>r.event(e));
            this.metadata.getAll().forEach(([t, n, o])=>r.addMetadata(t, n, o));
            return r;
        };
        e_prototype.getTagString = function() {
            const e = this.loggerTags.size > 0 ? `[${Array.from(this.loggerTags).join("|")}] ` : "";
            return e;
        };
        return e;
    })();
    const FBLogger = function(t, n) {
        const e = new Ne(t);
        if (n != null) {
            return e.event(`${t}.${n}`);
        }
        return e;
    };
    FBLogger.addGlobalMetadata = function(e, t, n) {
        M.addGlobalMetadata(e, t, n);
    };
    const we = "<CUSTOM_NAME:";
    const Ae = ">";
    function renameFunction(e, t) {
        if (e != null && t != null) {
            try {
                Object.defineProperty(e, "name", {
                    value: `${we} ${t}${Ae}`
                });
            } catch (e) {}
        }
        return e;
    }
    const TAAL = {
        blameToPreviousFile: function(t) {
            t.taalOpcodes = t.taalOpcodes ?? [];
            t.taalOpcodes.push(l.PREVIOUS_FILE);
            return t;
        },
        blameToPreviousFrame: function(t) {
            t.taalOpcodes = t.taalOpcodes ?? [];
            t.taalOpcodes.push(l.PREVIOUS_FRAME);
            return t;
        },
        blameToPreviousDirectory: function(t) {
            t.taalOpcodes = t.taalOpcodes ?? [];
            t.taalOpcodes.push(l.PREVIOUS_DIR);
            return t;
        }
    };
    const Be = {
        err,
        ErrorBrowserConsole,
        ErrorConfig,
        ErrorDynamicData,
        ErrorFilter,
        ErrorGlobalEventHandler,
        ErrorGuard,
        ErrorGuardState,
        ErrorMetadata: M,
        ErrorNormalizeUtils,
        ErrorPoster,
        ErrorPubSub,
        ErrorSerializer,
        ErrorSetup,
        ErrorXFBDebug,
        FBLogger,
        getErrorSafe,
        getSimpleHash,
        TAAL,
        TAALOpcode: l,
        renameFunction
    };
    a.exports = Be;
}, null);