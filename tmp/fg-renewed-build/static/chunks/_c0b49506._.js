(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/vitals.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "initWebVitals": ()=>initWebVitals,
    "performanceUtils": ()=>performanceUtils,
    "reportWebVitals": ()=>reportWebVitals
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/web-vitals/dist/web-vitals.js [app-client] (ecmascript)");
;
function reportWebVitals(metric) {
    // Log to console in development
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('Web Vital:', metric);
    }
    // Send to analytics in production
    if (("TURBOPACK compile-time value", "development") === 'production') {
    // You can send to Google Analytics, Vercel Analytics, etc.
    // Example: gtag('event', metric.name, { value: metric.value });
    }
}
function initWebVitals() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onCLS"])(reportWebVitals);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onINP"])(reportWebVitals); // INP replaced FID in newer versions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onFCP"])(reportWebVitals);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onLCP"])(reportWebVitals);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onTTFB"])(reportWebVitals);
}
const performanceUtils = {
    // Preload critical resources
    preloadResource: function(href) {
        let as = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'script';
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
    },
    // Lazy load images with intersection observer
    lazyLoadImages: ()=>{
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach((img)=>imageObserver.observe(img));
    },
    // Optimize animations for performance
    optimizeAnimations: ()=>{
        // Reduce motion for users who prefer it
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        return !prefersReducedMotion.matches;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "_": ()=>_define_property
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/node_modules/web-vitals/dist/web-vitals.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CLSThresholds": ()=>T,
    "FCPThresholds": ()=>b,
    "INPThresholds": ()=>N,
    "LCPThresholds": ()=>x,
    "TTFBThresholds": ()=>$,
    "onCLS": ()=>E,
    "onFCP": ()=>P,
    "onINP": ()=>S,
    "onLCP": ()=>O,
    "onTTFB": ()=>H
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
let e = -1;
const t = (t)=>{
    addEventListener("pageshow", (n)=>{
        n.persisted && (e = n.timeStamp, t(n));
    }, !0);
}, n = (e, t, n, i)=>{
    let o, s;
    return (r)=>{
        t.value >= 0 && (r || i) && (s = t.value - (o !== null && o !== void 0 ? o : 0), (s || void 0 === o) && (o = t.value, t.delta = s, t.rating = ((e, t)=>e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(t.value, n), e(t)));
    };
}, i = (e)=>{
    requestAnimationFrame(()=>requestAnimationFrame(()=>e()));
}, o = ()=>{
    const e = performance.getEntriesByType("navigation")[0];
    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
}, s = ()=>{
    const e = o();
    var _e_activationStart;
    return (_e_activationStart = e === null || e === void 0 ? void 0 : e.activationStart) !== null && _e_activationStart !== void 0 ? _e_activationStart : 0;
}, r = function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
    const i = o();
    let r = "navigate";
    e >= 0 ? r = "back-forward-cache" : i && (document.prerendering || s() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : i.type && (r = i.type.replace(/_/g, "-")));
    return {
        name: t,
        value: n,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v5-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: r
    };
}, c = new WeakMap;
function a(e, t) {
    return c.get(e) || c.set(e, new t), c.get(e);
}
class d {
    h(e) {
        var _this_t, _this;
        if (e.hadRecentInput) return;
        const t = this.o[0], n = this.o.at(-1);
        this.i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [
            e
        ]), (_this_t = (_this = this).t) === null || _this_t === void 0 ? void 0 : _this_t.call(_this, e);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "t", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "i", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "o", []);
    }
}
const h = function(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const i = new PerformanceObserver((e)=>{
                Promise.resolve().then(()=>{
                    t(e.getEntries());
                });
            });
            return i.observe({
                type: e,
                buffered: !0,
                ...n
            }), i;
        }
    } catch (e) {}
}, f = (e)=>{
    let t = !1;
    return ()=>{
        t || (e(), t = !0);
    };
};
let u = -1;
const l = ()=>"hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0, m = (e)=>{
    "hidden" === document.visibilityState && u > -1 && (u = "visibilitychange" === e.type ? e.timeStamp : 0, v());
}, g = ()=>{
    addEventListener("visibilitychange", m, !0), addEventListener("prerenderingchange", m, !0);
}, v = ()=>{
    removeEventListener("visibilitychange", m, !0), removeEventListener("prerenderingchange", m, !0);
}, p = ()=>{
    if (u < 0) {
        var _globalThis_performance_getEntriesByType_filter_;
        const e = s(), n = document.prerendering ? void 0 : (_globalThis_performance_getEntriesByType_filter_ = globalThis.performance.getEntriesByType("visibility-state").filter((t)=>"hidden" === t.name && t.startTime > e)[0]) === null || _globalThis_performance_getEntriesByType_filter_ === void 0 ? void 0 : _globalThis_performance_getEntriesByType_filter_.startTime;
        u = n !== null && n !== void 0 ? n : l(), g(), t(()=>{
            setTimeout(()=>{
                u = l(), g();
            });
        });
    }
    return {
        get firstHiddenTime () {
            return u;
        }
    };
}, y = (e)=>{
    document.prerendering ? addEventListener("prerenderingchange", ()=>e(), !0) : e();
}, b = [
    1800,
    3e3
], P = function(e) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    y(()=>{
        const c = p();
        let a, d = r("FCP");
        const f = h("paint", (e)=>{
            for (const t of e)"first-contentful-paint" === t.name && (f.disconnect(), t.startTime < c.firstHiddenTime && (d.value = Math.max(t.startTime - s(), 0), d.entries.push(t), a(!0)));
        });
        f && (a = n(e, d, b, o.reportAllChanges), t((t)=>{
            d = r("FCP"), a = n(e, d, b, o.reportAllChanges), i(()=>{
                d.value = performance.now() - t.timeStamp, a(!0);
            });
        }));
    });
}, T = [
    .1,
    .25
], E = function(e) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    P(f(()=>{
        let s, c = r("CLS", 0);
        const f = a(o, d), u = (e)=>{
            for (const t of e)f.h(t);
            f.i > c.value && (c.value = f.i, c.entries = f.o, s());
        }, l = h("layout-shift", u);
        l && (s = n(e, c, T, o.reportAllChanges), document.addEventListener("visibilitychange", ()=>{
            "hidden" === document.visibilityState && (u(l.takeRecords()), s(!0));
        }), t(()=>{
            f.i = 0, c = r("CLS", 0), s = n(e, c, T, o.reportAllChanges), i(()=>s());
        }), setTimeout(s));
    }));
};
let _ = 0, L = 1 / 0, M = 0;
const C = (e)=>{
    for (const t of e)t.interactionId && (L = Math.min(L, t.interactionId), M = Math.max(M, t.interactionId), _ = M ? (M - L) / 7 + 1 : 0);
};
let I;
const w = ()=>{
    var _performance_interactionCount;
    return I ? _ : (_performance_interactionCount = performance.interactionCount) !== null && _performance_interactionCount !== void 0 ? _performance_interactionCount : 0;
}, F = ()=>{
    "interactionCount" in performance || I || (I = h("event", C, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }));
};
let k = 0;
class A {
    p() {
        k = w(), this.u.length = 0, this.l.clear();
    }
    P() {
        const e = Math.min(this.u.length - 1, Math.floor((w() - k) / 50));
        return this.u[e];
    }
    h(e) {
        var _this_m, _this;
        if ((_this_m = (_this = this).m) === null || _this_m === void 0 ? void 0 : _this_m.call(_this, e), !e.interactionId && "first-input" !== e.entryType) return;
        const t = this.u.at(-1);
        let n = this.l.get(e.interactionId);
        if (n || this.u.length < 10 || e.duration > t.T) {
            var _this_v, _this1;
            if (n ? e.duration > n.T ? (n.entries = [
                e
            ], n.T = e.duration) : e.duration === n.T && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                id: e.interactionId,
                entries: [
                    e
                ],
                T: e.duration
            }, this.l.set(n.id, n), this.u.push(n)), this.u.sort((e, t)=>t.T - e.T), this.u.length > 10) {
                const e = this.u.splice(10);
                for (const t of e)this.l.delete(t.id);
            }
            (_this_v = (_this1 = this).v) === null || _this_v === void 0 ? void 0 : _this_v.call(_this1, n);
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "u", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "l", new Map);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "m", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "v", void 0);
    }
}
const B = (e)=>{
    const t = globalThis.requestIdleCallback || setTimeout;
    "hidden" === document.visibilityState ? e() : (e = f(e), document.addEventListener("visibilitychange", e, {
        once: !0
    }), t(()=>{
        e(), document.removeEventListener("visibilitychange", e);
    }));
}, N = [
    200,
    500
], S = function(e) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && y(()=>{
        F();
        let o, s = r("INP");
        var _i_durationThreshold;
        const c = a(i, A), d = (e)=>{
            B(()=>{
                for (const t of e)c.h(t);
                const t = c.P();
                t && t.T !== s.value && (s.value = t.T, s.entries = t.entries, o());
            });
        }, f = h("event", d, {
            durationThreshold: (_i_durationThreshold = i.durationThreshold) !== null && _i_durationThreshold !== void 0 ? _i_durationThreshold : 40
        });
        o = n(e, s, N, i.reportAllChanges), f && (f.observe({
            type: "first-input",
            buffered: !0
        }), document.addEventListener("visibilitychange", ()=>{
            "hidden" === document.visibilityState && (d(f.takeRecords()), o(!0));
        }), t(()=>{
            c.p(), s = r("INP"), o = n(e, s, N, i.reportAllChanges);
        }));
    });
};
class q {
    h(e) {
        var _this_m, _this;
        (_this_m = (_this = this).m) === null || _this_m === void 0 ? void 0 : _this_m.call(_this, e);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "m", void 0);
    }
}
const x = [
    2500,
    4e3
], O = function(e) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    y(()=>{
        const c = p();
        let d, u = r("LCP");
        const l = a(o, q), m = (e)=>{
            o.reportAllChanges || (e = e.slice(-1));
            for (const t of e)l.h(t), t.startTime < c.firstHiddenTime && (u.value = Math.max(t.startTime - s(), 0), u.entries = [
                t
            ], d());
        }, g = h("largest-contentful-paint", m);
        if (g) {
            d = n(e, u, x, o.reportAllChanges);
            const s = f(()=>{
                m(g.takeRecords()), g.disconnect(), d(!0);
            });
            for (const e of [
                "keydown",
                "click",
                "visibilitychange"
            ])addEventListener(e, ()=>B(s), {
                capture: !0,
                once: !0
            });
            t((t)=>{
                u = r("LCP"), d = n(e, u, x, o.reportAllChanges), i(()=>{
                    u.value = performance.now() - t.timeStamp, d(!0);
                });
            });
        }
    });
}, $ = [
    800,
    1800
], D = (e)=>{
    document.prerendering ? y(()=>D(e)) : "complete" !== document.readyState ? addEventListener("load", ()=>D(e), !0) : setTimeout(e);
}, H = function(e) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let c = r("TTFB"), a = n(e, c, $, i.reportAllChanges);
    D(()=>{
        const d = o();
        d && (c.value = Math.max(d.responseStart - s(), 0), c.entries = [
            d
        ], a(!0), t(()=>{
            c = r("TTFB", 0), a = n(e, c, $, i.reportAllChanges), a(!0);
        }));
    });
};
;
}),
}]);

//# sourceMappingURL=_c0b49506._.js.map