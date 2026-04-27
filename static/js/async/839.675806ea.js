"use strict"
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["839"],
  {
    84313: function (e, t, i) {
      ;(i.d(t, {
        n: function () {
          return o
        },
      }),
        i(88370),
        i(88626),
        i(30112),
        i(87197),
        i(40160),
        i(2946),
        i(80487),
        i(98955),
        i(19798),
        i(51612),
        i(93402),
        i(35740),
        i(3299),
        i(82913),
        i(61319),
        i(70482))
      var s = i(59176)
      ;(i(75105), i(52093), i(86603))
      var r = i(85975),
        a = i(22065)
      class n {
        static instance = null
        gpt
        servicesEnabled = !1
        auidSet = !1
        currentTargeting = {}
        static getInstance() {
          return (n.instance || (n.instance = new n()), n.instance)
        }
        static resetInstance() {
          n.instance = null
        }
        constructor() {
          ;((window.googletag = window.googletag || { cmd: [], secureSignalProviders: [] }),
            (window.googletag.cmd = window.googletag.cmd || []),
            (window.googletag.secureSignalProviders = window.googletag.secureSignalProviders || []),
            (this.gpt = window.googletag))
        }
        get gptInstance() {
          return this.gpt
        }
        setPublisherProvidedId(e) {
          this.auidSet || ((this.auidSet = !0), this.gpt.pubads().setPublisherProvidedId(e))
        }
        enableServices() {
          this.servicesEnabled || ((this.servicesEnabled = !0), this.gpt.enableServices())
        }
        updateTargeting(e = {}) {
          for (let t in e)
            e[t] ? (this.currentTargeting[t] = e[t]) : delete this.currentTargeting[t]
          this.gpt.cmd.push(() => {
            this.gpt.setConfig({ targeting: this.currentTargeting })
          })
        }
        initProvider({ auid: e, pageDomain: t, targeting: i = {} }, s, n) {
          let { promise: o, resolve: d } = Promise.withResolvers()
          return (
            (0, a.k)({ src: r.E, useExisting: !0, crossorigin: "anonymous" }).catch((e) => {
              let t = e instanceof Error ? e.message : String(e),
                i = `GAM script load failed: ${t}`
              ;("Script aborted" === t && (i = "GAM script load timed out"),
                t.includes("has failed state") && (i = "GAM script was previously failed"),
                n(i),
                d("offline"))
            }),
            this.updateTargeting(i),
            this.gpt.cmd.push(() => {
              ;(this.setPublisherProvidedId(e),
                this.gpt.setConfig({ centering: !0, adsenseAttributes: { page_url: t } }),
                s(),
                this.enableServices(),
                d("online"))
            }),
            o
          )
        }
      }
      class o {
        gpt
        gptCore
        pageBanners = new Map()
        outOfPageBanners = new Map()
        gamAccount
        gamSubAccount
        pageDomain
        platform
        adUnitConfig
        timeout
        initErrorMessage
        constructor({
          timeout: e,
          gamAccount: t,
          gamSubAccount: i,
          pageDomain: s,
          platform: r,
          adUnitConfig: a,
        }) {
          ;((this.timeout = e),
            (this.gptCore = n.getInstance()),
            (this.gpt = this.gptCore.gptInstance),
            (this.gamAccount = t),
            (this.gamSubAccount = i),
            (this.pageDomain = s),
            (this.platform = r),
            (this.adUnitConfig = a),
            window.addEventListener("resize", this.onViewportResize.bind(this)),
            document.addEventListener("visibilitychange", this.onVisibilityChange.bind(this)))
        }
        async onViewportResize() {
          await (0, s.HD)()
          let e = this.getOutOfPageBanner()
          e?.triggerClosed("viewport_resize")
        }
        onVisibilityChange() {
          let e = this.getOutOfPageBanner()
          "hidden" === document.visibilityState &&
            e?.state === "showing" &&
            e.triggerInteractionSuspected("tab_left")
        }
        getOutOfPageBanner() {
          for (let e of this.outOfPageBanners.values()) return e
          return null
        }
        getAdUnitByType(e) {
          let t = "ios" === this.platform || "android" === this.platform ? "mobile" : "desktop",
            i = this.adUnitConfig[t][e]
          if (!i) throw Error(`Ad unit not found for type: ${e} on platform: ${t}`)
          let s = this.gamSubAccount ? `${this.gamAccount},${this.gamSubAccount}` : this.gamAccount
          return `/${s}/${i}`
        }
        updateTargeting(e = {}) {
          this.gptCore.updateTargeting(e)
        }
      }
    },
    51834: function (e, t, i) {
      ;(i.r(t),
        i.d(t, {
          GoogleAdProvider: function () {
            return d
          },
        }),
        i(52093),
        i(17932),
        i(19329))
      var s = i(11841),
        r = i(84313),
        a = i(75105),
        n = i(50510)
      let o = new s.d("provider", "google-ad")
      class d extends r.n {
        formats = null
        pendingSlots = []
        isFirstRequestSent = !1
        firstAdRequestTimeout
        gameManualInterstitialTriggeredAt = 0
        serviceStatus
        type = "googleAd"
        hasRewardedTypeInterstitial
        constructor({
          targeting: e = {},
          gamAccount: t,
          gamSubAccount: i,
          pageDomain: s,
          platform: r,
          auid: a,
          adUnitConfig: n,
          timeout: o,
          hasRewardedTypeInterstitial: d,
        }) {
          ;(super({
            targeting: e,
            gamAccount: t,
            gamSubAccount: i,
            pageDomain: s,
            platform: r,
            auid: a,
            adUnitConfig: n,
            timeout: o,
          }),
            (this.hasRewardedTypeInterstitial = !!d),
            (this.serviceStatus = this.gptCore.initProvider(
              { auid: a, pageDomain: s, targeting: e },
              () => {
                ;((this.formats = {
                  interstitial: this.gpt.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL,
                  interstitial_preroll: this.gpt.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL,
                  interstitial_on_return: this.gpt.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL,
                  rewarded: this.gpt.enums.OutOfPageFormat.REWARDED,
                }),
                  this.gpt.setConfig({ singleRequest: !0 }),
                  this.gpt.pubads().addEventListener("rewardedSlotReady", (e) => {
                    let t = this.outOfPageBanners.get(e.slot)
                    t?.triggerReady(e.makeRewardedVisible)
                  }),
                  this.gpt.pubads().addEventListener("gameManualInterstitialSlotReady", (e) => {
                    let t = this.outOfPageBanners.get(e.slot)
                    ;(t?.triggerReady(e.makeGameManualInterstitialVisible),
                      (this.gameManualInterstitialTriggeredAt = Date.now()))
                  }),
                  this.gpt.pubads().addEventListener("rewardedSlotClosed", (e) => {
                    let t = this.outOfPageBanners.get(e.slot)
                    t?.triggerClosed()
                  }),
                  this.gpt.pubads().addEventListener("gameManualInterstitialSlotClosed", (e) => {
                    let t = this.outOfPageBanners.get(e.slot)
                    t?.triggerClosed()
                  }),
                  this.gpt.pubads().addEventListener("rewardedSlotGranted", (e) => {
                    let t = this.outOfPageBanners.get(e.slot)
                    t?.triggerRewarded(e.payload)
                  }),
                  this.gpt.pubads().addEventListener("impressionViewable", (e) => {
                    let t = this.pageBanners.get(e.slot) || this.outOfPageBanners.get(e.slot)
                    t?.triggerViewable()
                  }),
                  this.gpt.pubads().addEventListener("slotRenderEnded", (e) => {
                    let t = this.pageBanners.get(e.slot),
                      i = t || this.outOfPageBanners.get(e.slot)
                    if (!i || e.isEmpty) return i?.triggerEmpty("unfilled")
                    t?.triggerShowing()
                  }))
              },
              (e) => {
                this.initErrorMessage = e
              },
            )))
        }
        throttleRequestAds(e) {
          ;(this.pendingSlots.push(e),
            this.firstAdRequestTimeout ||
              (this.firstAdRequestTimeout = window.setTimeout(() => {
                this.gpt.cmd.push(() => {
                  ;((this.isFirstRequestSent = !0),
                    this.pendingSlots.forEach((e) => {
                      this.gpt.display(e)
                    }),
                    (this.pendingSlots = []),
                    (this.firstAdRequestTimeout = void 0))
                })
              }, 50)))
        }
        prepareOutOfPageAd(e) {
          let t = this.getAdUnitByType(e),
            i = e
          ;(this.hasRewardedTypeInterstitial ||
            ("interstitial" === e && Date.now() < this.gameManualInterstitialTriggeredAt + 12e4)) &&
            (i = "rewarded")
          let s = new a.p({ provider: "googleAd", adUnit: t, placement: e, timeout: this.timeout })
          return (
            Promise.resolve().then(() => {
              this.gpt.cmd.push(() => {
                let e = this.gpt.defineOutOfPageSlot(t, this.formats[i])
                if (!e) {
                  ;(o.error("defineOutOfPageSlot returned null", t),
                    s.triggerEmpty("defineOutOfPageSlot returned null"))
                  return
                }
                ;(this.outOfPageBanners.set(e, s),
                  (s.destroy = () => {
                    ;(this.outOfPageBanners.delete(e), googletag.destroySlots([e]))
                  }),
                  e.addService(this.gpt.pubads()),
                  s.triggerRequest(),
                  this.gpt.display(e),
                  (this.isFirstRequestSent = !0))
              })
            }),
            s
          )
        }
        requestPageAd(e) {
          let t = this.getAdUnitByType(e.type),
            i = new n.O({ provider: "googleAd", adUnit: t, placement: e.type })
          return (
            Promise.resolve().then(() => {
              this.gpt.cmd.push(() => {
                let s = this.gpt.defineSlot(t, e.sizes, e.el)
                if (!s) {
                  ;(o.error("defineSlot returned null", t),
                    i.triggerEmpty("defineSlot returned null"))
                  return
                }
                ;(s.addService(this.gpt.pubads()),
                  (i.destroy = () => {
                    ;(this.gpt.destroySlots([s]), this.pageBanners.delete(s))
                  }),
                  this.pageBanners.set(s, i),
                  i.triggerRequest(),
                  this.isFirstRequestSent ? this.gpt.display(s) : this.throttleRequestAds(s))
              })
            }),
            i
          )
        }
      }
    },
    75105: function (e, t, i) {
      i.d(t, {
        I: function () {
          return a
        },
        p: function () {
          return n
        },
      })
      var s,
        r = i(11841),
        a =
          (((s = {}).loading = "loading"),
          (s.empty = "empty"),
          (s.ready = "ready"),
          (s.showing = "showing"),
          (s.closed = "closed"),
          s)
      class n extends EventTarget {
        type = "OUT_OF_PAGE"
        destroy
        provider
        adUnit
        placement
        state = "loading"
        clickCounter = 0
        instreamDuration
        watchedDuration
        headerBiddingAuctionResult
        makeVisible
        setPlayback
        adConsoleLogger
        constructor(e) {
          ;(super(),
            (this.destroy = e.destroy || (() => {})),
            (this.provider = e.provider),
            (this.adUnit = e.adUnit),
            (this.placement = e.placement),
            (this.adConsoleLogger = new r.d("internal-banner", `${e.provider}:${e.placement}`)),
            this.adConsoleLogger.debug("created", { adUnit: e.adUnit, timeout: e.timeout }),
            e.timeout &&
              window.setTimeout(() => {
                "loading" === this.state && this.triggerEmpty("timeout")
              }, e.timeout))
        }
        dispatch(e, t) {
          this.dispatchEvent(new CustomEvent(e, { detail: t }))
        }
        addEventListener(...e) {
          super.addEventListener(...e)
        }
        removeEventListener(...e) {
          super.removeEventListener(...e)
        }
        triggerUnexpectedBehavior(e) {
          ;(this.adConsoleLogger.error("unexpected_behavior", e),
            this.dispatch("unexpected_behavior", { reason: `[InternalOutOfPageAdBanner]: ${e}` }))
        }
        triggerValidationError(e) {
          ;(this.adConsoleLogger.error("validation_error", e),
            this.dispatch("validation_error", { reason: e }))
        }
        triggerEmpty(e) {
          "empty" !== this.state
            ? (this.adConsoleLogger.debug(`${this.state} → empty`, { reason: e }),
              (this.state = "empty"),
              this.dispatch("empty", { reason: e }),
              this.destroy())
            : this.triggerUnexpectedBehavior(
                `empty called with reason ${e}, but state is already empty`,
              )
        }
        triggerRequest() {
          ;(this.adConsoleLogger.debug("request sent"), this.dispatch("request"))
        }
        triggerViewable() {
          ;(this.adConsoleLogger.debug("viewable"), this.dispatch("viewable"))
        }
        triggerShowing() {
          "showing" !== this.state
            ? (this.adConsoleLogger.debug(`${this.state} → showing`),
              (this.state = "showing"),
              this.dispatch("showing"))
            : this.triggerUnexpectedBehavior("showing called, but state is already showing")
        }
        triggerClicked() {
          ;(this.clickCounter++,
            this.adConsoleLogger.debug("clicked", { clickCounter: this.clickCounter }),
            this.dispatch("clicked"))
        }
        triggerClosed(e) {
          "closed" !== this.state
            ? (this.adConsoleLogger.debug(`${this.state} → closed`, { reason: e }),
              (this.state = "closed"),
              this.dispatch("closed", { reason: e }),
              this.destroy())
            : this.triggerUnexpectedBehavior("closed called, but state is already closed")
        }
        triggerRewarded(e) {
          ;(this.adConsoleLogger.debug("rewarded"), this.dispatch("rewarded", e))
        }
        triggerInteractionSuspected(e) {
          ;(this.adConsoleLogger.debug("interaction_suspected", { reason: e }),
            this.dispatch("interaction_suspected", { reason: e }))
        }
        triggerTimer(e) {
          "showing" === this.state
            ? this.dispatch("timer", { secondsLeft: e })
            : this.triggerUnexpectedBehavior(`timer called, but state is ${this.state}`)
        }
        triggerPodCounter(e, t) {
          "showing" === this.state
            ? (this.adConsoleLogger.debug("pod_counter", { adPosition: e, totalAds: t }),
              this.dispatch("pod_counter", { adPosition: e, totalAds: t }))
            : this.triggerUnexpectedBehavior(`timer called, but state is ${this.state}`)
        }
        triggerReady(e, t) {
          "ready" !== this.state && e
            ? ((this.makeVisible = e),
              this.adConsoleLogger.debug(`${this.state} → ready`, {
                instreamDuration: this.instreamDuration,
              }),
              (this.state = "ready"),
              (this.setPlayback = t),
              this.dispatch("ready"))
            : this.triggerUnexpectedBehavior(`ready called, but state is ${this.state}`)
        }
        show() {
          this.makeVisible && "ready" === this.state
            ? (this.triggerShowing(), this.makeVisible())
            : this.triggerUnexpectedBehavior(`show called, but state is ${this.state}`)
        }
        setPlaybackState(e) {
          this.setPlayback?.(e)
        }
      }
    },
    50510: function (e, t, i) {
      i.d(t, {
        O: function () {
          return r
        },
      })
      var s = i(11841)
      class r extends EventTarget {
        type = "IN_PAGE"
        destroy
        provider
        adUnit
        placement
        state = "loading"
        headerBiddingAuctionResult
        adConsoleLogger
        constructor(e) {
          ;(super(),
            (this.destroy = e.destroy || (() => {})),
            (this.provider = e.provider),
            (this.adUnit = e.adUnit),
            (this.placement = e.placement),
            (this.adConsoleLogger = new s.d("internal-banner", `${e.provider}:${e.placement}`)),
            this.adConsoleLogger.debug("created", { adUnit: e.adUnit }))
        }
        dispatch(e, t) {
          this.dispatchEvent(new CustomEvent(e, { detail: t }))
        }
        addEventListener(...e) {
          super.addEventListener(...e)
        }
        removeEventListener(...e) {
          super.removeEventListener(...e)
        }
        triggerUnexpectedBehavior(e) {
          ;(this.adConsoleLogger.error("unexpected_behavior", e),
            this.dispatch("unexpected_behavior", { reason: `[InternalPageAdBanner]: ${e}` }))
        }
        triggerEmpty(e) {
          "empty" !== this.state
            ? (this.adConsoleLogger.debug(`${this.state} → empty`, { reason: e }),
              (this.state = "empty"),
              this.dispatch("empty", { reason: e }),
              this.destroy())
            : this.triggerUnexpectedBehavior(`empty called, but state is ${this.state}`)
        }
        triggerRequest() {
          ;(this.adConsoleLogger.debug("request sent"), this.dispatch("request"))
        }
        triggerViewable() {
          ;(this.adConsoleLogger.debug("viewable"), this.dispatch("viewable"))
        }
        triggerClicked() {
          ;(this.adConsoleLogger.debug("clicked"), this.dispatch("clicked"))
        }
        triggerShowing() {
          "showing" !== this.state
            ? (this.adConsoleLogger.debug(`${this.state} → showing`),
              (this.state = "showing"),
              this.dispatch("showing"))
            : this.triggerUnexpectedBehavior(`showing called, but state is ${this.state}`)
        }
      }
    },
  },
])
//# sourceMappingURL=839.675806ea.js.map
