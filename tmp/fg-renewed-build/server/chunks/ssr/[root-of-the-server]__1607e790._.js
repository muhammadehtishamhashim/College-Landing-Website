module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/lib/vitals.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "initWebVitals": ()=>initWebVitals,
    "performanceUtils": ()=>performanceUtils,
    "reportWebVitals": ()=>reportWebVitals
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/web-vitals/dist/web-vitals.js [app-ssr] (ecmascript)");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onCLS"])(reportWebVitals);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onINP"])(reportWebVitals); // INP replaced FID in newer versions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onFCP"])(reportWebVitals);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onLCP"])(reportWebVitals);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onTTFB"])(reportWebVitals);
}
const performanceUtils = {
    // Preload critical resources
    preloadResource: (href, as = 'script')=>{
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
}),
"[project]/src/components/WebVitalsReporter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>WebVitalsReporter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/vitals.js [app-ssr] (ecmascript)");
'use client';
;
;
function WebVitalsReporter() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Import and initialize web vitals tracking
        __turbopack_context__.r("[project]/src/lib/vitals.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then(({ initWebVitals })=>{
            initWebVitals();
        });
    }, []);
    return null;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/web-vitals/dist/web-vitals.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
let e = -1;
const t = (t)=>{
    addEventListener("pageshow", (n)=>{
        n.persisted && (e = n.timeStamp, t(n));
    }, !0);
}, n = (e, t, n, i)=>{
    let o, s;
    return (r)=>{
        t.value >= 0 && (r || i) && (s = t.value - (o ?? 0), (s || void 0 === o) && (o = t.value, t.delta = s, t.rating = ((e, t)=>e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(t.value, n), e(t)));
    };
}, i = (e)=>{
    requestAnimationFrame(()=>requestAnimationFrame(()=>e()));
}, o = ()=>{
    const e = performance.getEntriesByType("navigation")[0];
    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
}, s = ()=>{
    const e = o();
    return e?.activationStart ?? 0;
}, r = (t, n = -1)=>{
    const i = o();
    let r = "navigate";
    e >= 0 ? r = "back-forward-cache" : i && (document.prerendering || s() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : i.type && (r = i.type.replace(/_/g, "-")));
    return {
        name: t,
        value: n,
        rating: "good",
        delta: 0,
        entries: [],
        id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
        navigationType: r
    };
}, c = new WeakMap;
function a(e, t) {
    return c.get(e) || c.set(e, new t), c.get(e);
}
class d {
    t;
    i = 0;
    o = [];
    h(e) {
        if (e.hadRecentInput) return;
        const t = this.o[0], n = this.o.at(-1);
        this.i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [
            e
        ]), this.t?.(e);
    }
}
const h = (e, t, n = {})=>{
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
    } catch  {}
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
        const e = s(), n = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((t)=>"hidden" === t.name && t.startTime > e)[0]?.startTime;
        u = n ?? l(), g(), t(()=>{
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
], P = (e, o = {})=>{
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
], E = (e, o = {})=>{
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
const w = ()=>I ? _ : performance.interactionCount ?? 0, F = ()=>{
    "interactionCount" in performance || I || (I = h("event", C, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }));
};
let k = 0;
class A {
    u = [];
    l = new Map;
    m;
    v;
    p() {
        k = w(), this.u.length = 0, this.l.clear();
    }
    P() {
        const e = Math.min(this.u.length - 1, Math.floor((w() - k) / 50));
        return this.u[e];
    }
    h(e) {
        if (this.m?.(e), !e.interactionId && "first-input" !== e.entryType) return;
        const t = this.u.at(-1);
        let n = this.l.get(e.interactionId);
        if (n || this.u.length < 10 || e.duration > t.T) {
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
            this.v?.(n);
        }
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
], S = (e, i = {})=>{
    globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && y(()=>{
        F();
        let o, s = r("INP");
        const c = a(i, A), d = (e)=>{
            B(()=>{
                for (const t of e)c.h(t);
                const t = c.P();
                t && t.T !== s.value && (s.value = t.T, s.entries = t.entries, o());
            });
        }, f = h("event", d, {
            durationThreshold: i.durationThreshold ?? 40
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
    m;
    h(e) {
        this.m?.(e);
    }
}
const x = [
    2500,
    4e3
], O = (e, o = {})=>{
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
}, H = (e, i = {})=>{
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

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1607e790._.js.map