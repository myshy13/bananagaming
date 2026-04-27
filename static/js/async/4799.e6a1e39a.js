"use strict"
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["4799"],
  {
    16530: function (e, i, t) {
      ;(t.r(i),
        t.d(i, {
          prebid: function () {
            return r.Ay
          },
        }))
      var r = t(52345)
      ;(t(2651),
        t(57189),
        t(46589),
        t(44071),
        t(89773),
        t(49658),
        t(67248),
        t(9383),
        t(40580),
        t(49417),
        t(63157),
        t(17932),
        t(96466),
        t(58267),
        t(54965),
        t(69024),
        t(15381),
        t(30774),
        t(8109),
        t(56705),
        t(55156),
        t(55120),
        t(85866),
        t(92426),
        t(37539),
        t(14894),
        t(34420),
        t(35055),
        t(56596),
        t(48933),
        t(20329),
        t(60387),
        t(81623),
        t(77237),
        t(64632),
        t(71090),
        t(86204),
        t(52093))
      let n = "playgama",
        a = {
          production: "https://ssp.playgama.com/v1/auction",
          staging: "https://ssp-staging.playgama.com/v1/auction",
        },
        d = a.production
      ;(r.Ay.registerBidAdapter(void 0, n, {
        code: n,
        supportedMediaTypes: ["banner", "video"],
        isBidRequestValid(e) {
          let { params: i } = e
          return !!i && !!(i.publisherId && i.adUnitId)
        },
        buildRequests(e, i) {
          if (!e[0]) return []
          let t = e[0].params,
            { publisherId: r } = t,
            n = t.apiKey || "",
            o = t.endpoint || a[t.env] || d,
            s = e.map((e) => {
              let i = {
                ad_unit_id: e.params.adUnitId,
                media_type: "banner",
                sizes: [],
                transaction_id: e.transactionId || e.adUnitCode,
                bid_id: e.bidId,
                ortb2_imp_ext: e.ortb2Imp?.ext || null,
                secure: !0,
                context: void 0,
                banner: void 0,
                video: void 0,
                floor_cpm: void 0,
                floor_currency: void 0,
              }
              if (
                (e.mediaTypes &&
                  e.mediaTypes.banner &&
                  ((i.media_type = "banner"),
                  (i.sizes = e.mediaTypes.banner.sizes || []),
                  (i.banner = {
                    pos: e.mediaTypes.banner.pos,
                    battr: e.mediaTypes.banner.battr || [],
                    api: e.mediaTypes.banner.api || [],
                  })),
                e.mediaTypes && e.mediaTypes.video)
              ) {
                i.media_type = "video"
                let t = e.mediaTypes.video.playerSize,
                  r = Array.isArray(t?.[0]) ? t[0] : t
                i.video = {
                  max_duration: e.mediaTypes.video.maxduration,
                  min_duration: e.mediaTypes.video.minduration,
                  mimes: e.mediaTypes.video.mimes,
                  w: r?.[0],
                  h: r?.[1],
                  protocols: e.mediaTypes.video.protocols,
                  context: e.mediaTypes.video.context,
                  placement: 1,
                  linearity: 1,
                  battr: e.mediaTypes.video.battr || [],
                  api: e.mediaTypes.video.api || [],
                  start_delay: e.mediaTypes.video.startdelay,
                }
              }
              return i
            }),
            p = {
              ua: "u" > typeof navigator ? navigator.userAgent : "",
              language: "u" > typeof navigator ? navigator.language : "",
              dnt: void 0,
            }
          "u" > typeof navigator &&
            void 0 !== navigator.doNotTrack &&
            (p.dnt = +("1" === navigator.doNotTrack))
          let c = {
            publisher_id: r,
            api_key: n,
            ad_units: s,
            page_url: i?.refererInfo?.page,
            referrer: i?.refererInfo?.ref,
            source_tid: i?.auctionId,
            prebid: { auction_id: i?.auctionId },
            tmax_ms: i?.timeout,
            device: p,
            debug: !1,
            test: !1,
            schain: void 0,
            user_eids: void 0,
            ortb2: void 0,
            gdpr_consent: void 0,
            us_privacy: void 0,
          }
          return (
            e[0].userIdAsEids && (c.user_eids = e[0].userIdAsEids),
            i?.ortb2 && (c.ortb2 = i.ortb2),
            i?.gdprConsent && (c.gdpr_consent = i.gdprConsent.consentString),
            i?.uspConsent && (c.us_privacy = i.uspConsent),
            [
              {
                method: "POST",
                url: o,
                data: JSON.stringify(c),
                options: { contentType: "application/json" },
                bidRequests: e,
              },
            ]
          )
        },
        interpretResponse(e, i) {
          var t
          let r = e?.body
          if (!r || !r.bids || !r.bids.length) return []
          r.ext_pgid &&
            ((t = r.ext_pgid),
            "u" > typeof document &&
              (document.cookie = `_pgid=${encodeURIComponent(t)};path=/;max-age=7776000;SameSite=None;Secure`))
          let n = i.bidRequests || [],
            a = new Set()
          return r.bids
            .map((e) => {
              var i, t, r
              let d,
                o = n.findIndex((i, t) => !a.has(t) && i.params.adUnitId === e.ad_unit_id)
              if (-1 === o) return null
              a.add(o)
              let s = n[o],
                p = "video" === e.media_type ? "video" : "banner",
                c = `pg-ad-${String(e.ad_unit_id || "").replace(/[^a-zA-Z0-9_-]/g, "")}`,
                u = e.imp_tracker
                  ? `<img src="${!(i = e.imp_tracker) ? "" : String(i).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}" width="1" height="1" style="display:none" alt=""/>`
                  : "",
                l = {
                  requestId: s.bidId,
                  cpm: e.cpm,
                  currency: e.currency || "USD",
                  width: e.width,
                  height: e.height,
                  creativeId: e.creative_id || "unknown",
                  dealId: e.deal_id || void 0,
                  netRevenue: !0,
                  ttl: e.ttl || 300,
                  mediaType: p,
                  meta: { advertiserDomains: e.advertiser_domains || [], seat: e.seat },
                }
              if ("video" === p)
                e.ad &&
                  (d = {
                    vastXml: e.ad || "",
                    imp_tracker: e.imp_tracker || "",
                    viewable_tracker: e.viewable_tracker || "",
                    click_tracker: e.click_tracker || "",
                  })
              else {
                let i =
                    ((t = e.viewable_tracker),
                    t
                      ? `<script>
(function() {
  var fired = false;
  var adEl = document.currentScript && document.currentScript.parentElement;
  if (!adEl) return;

  function fireViewable() {
    if (fired) return;
    fired = true;
    new Image().src = ${JSON.stringify(t)};
  }

  if ('IntersectionObserver' in window) {
    var timer = null;
    var observer = new IntersectionObserver(function(entries) {
      var entry = entries[0];
      if (entry && entry.intersectionRatio >= 0.5) {
        if (!timer) {
          timer = setTimeout(function() {
            fireViewable();
            observer.disconnect();
          }, 1000);
        }
      } else {
        if (timer) { clearTimeout(timer); timer = null; }
      }
    }, { threshold: [0, 0.5, 1.0] });
    observer.observe(adEl);
  } else {
    setTimeout(fireViewable, 2000);
  }
})();
</script>`
                      : ""),
                  n =
                    ((r = e.click_tracker),
                    r
                      ? `<script>
(function() {
  var el = document.getElementById(${JSON.stringify(c)});
  if (!el) return;
  var tracked = false;
  el.addEventListener('click', function() {
    if (tracked) return;
    tracked = true;
    var img = new Image();
    img.src = ${JSON.stringify(r)};
  }, true);
})();
</script>`
                      : "")
                d = { ad: `<div id="${c}">${e.ad || ""}${u}${i}${n}</div>` }
              }
              return { ...l, ...d }
            })
            .filter((e) => !!e)
        },
        getUserSyncs(e, i, t, r) {
          let n = []
          if (!e.pixelEnabled) return n
          for (let e of i) {
            let i = e && e.body
            if (i && i.sync_pixels)
              for (let e of i.sync_pixels) {
                if (!e.url) continue
                let { url: i } = e
                if (t) {
                  let e = "boolean" == typeof t.gdprApplies ? Number(t.gdprApplies) : ""
                  i += `${i.includes("?") ? "&" : "?"}gdpr=${e}&gdpr_consent=${encodeURIComponent(t.consentString || "")}`
                }
                ;(r && (i += `${i.includes("?") ? "&" : "?"}us_privacy=${encodeURIComponent(r)}`),
                  n.push({ type: "image", url: i }))
              }
          }
          return n
        },
        onTimeout(e) {},
        onBidWon(e) {},
      }),
        r.Ay.processQueue())
    },
  },
])
//# sourceMappingURL=4799.e6a1e39a.js.map
