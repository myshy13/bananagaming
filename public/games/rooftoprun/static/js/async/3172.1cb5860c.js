"use strict"
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["3172"],
  {
    77378: function (e, t, a) {
      a.d(t, {
        A: function () {
          return i
        },
      })
      var s = a(3144)
      let r = ["innerHTML"]
      var i = (0, s.pM)({
        __name: "SeoTextRaw",
        props: { content: {} },
        setup(e) {
          let t = (0, s.EW)(() => {
            let t = e.content
            return (
              "u" < typeof window && (t = a(61780).load(t, null, !1).html()),
              t
                .replace(/<!--[\s\S]*?-->/g, "")
                .replace(/(<img\s)([^>]*?)(\/?>)/gi, (e, t, a, s) =>
                  a.includes("loading=") ? e : `${t}loading="lazy" ${a}${s}`,
                )
                .replace(/(<iframe\s)([^>]*?)(>)/gi, (e, t, a, s) =>
                  a.includes("loading=") ? e : `${t}loading="lazy" ${a}${s}`,
                )
            )
          })
          return (e, a) => (
            (0, s.uX)(),
            (0, s.CE)("div", { "data-allow-mismatch": "", innerHTML: t.value }, null, 8, r)
          )
        },
      })
    },
    85632: function (e, t, a) {
      let s, r, i, n
      ;(a.r(t),
        a.d(t, {
          default: function () {
            return tF
          },
        }),
        a(52093),
        a(17932),
        a(86204),
        a(33384))
      var l = a(3144),
        o = a(20211),
        d = a(76915),
        u = a(10906),
        c = a(79660),
        v = a(39383),
        p = a(97178),
        m = a(7620),
        g = a(59812),
        h = a(17637),
        y = a(57550),
        f = a(47006)
      ;(a(19329), a(39452))
      let b = (e, t) => t.some((t) => e instanceof t),
        _ = new WeakMap(),
        w = new WeakMap(),
        A = new WeakMap(),
        k = {
          get(e, t, a) {
            if (e instanceof IDBTransaction) {
              if ("done" === t) return _.get(e)
              if ("store" === t)
                return a.objectStoreNames[1] ? void 0 : a.objectStore(a.objectStoreNames[0])
            }
            return S(e[t])
          },
          set: (e, t, a) => ((e[t] = a), !0),
          has: (e, t) => (e instanceof IDBTransaction && ("done" === t || "store" === t)) || t in e,
        }
      function S(e) {
        if (e instanceof IDBRequest) {
          let t
          return (
            (t = new Promise((t, a) => {
              let s = () => {
                  ;(e.removeEventListener("success", r), e.removeEventListener("error", i))
                },
                r = () => {
                  ;(t(S(e.result)), s())
                },
                i = () => {
                  ;(a(e.error), s())
                }
              ;(e.addEventListener("success", r), e.addEventListener("error", i))
            })),
            A.set(t, e),
            t
          )
        }
        if (w.has(e)) return w.get(e)
        let t = (function (e) {
          if ("function" == typeof e)
            return (
              r ||
              (r = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
              ])
            ).includes(e)
              ? function (...t) {
                  return (e.apply(M(this), t), S(this.request))
                }
              : function (...t) {
                  return S(e.apply(M(this), t))
                }
          return (e instanceof IDBTransaction &&
            (function (e) {
              if (_.has(e)) return
              let t = new Promise((t, a) => {
                let s = () => {
                    ;(e.removeEventListener("complete", r),
                      e.removeEventListener("error", i),
                      e.removeEventListener("abort", i))
                  },
                  r = () => {
                    ;(t(), s())
                  },
                  i = () => {
                    ;(a(e.error || new DOMException("AbortError", "AbortError")), s())
                  }
                ;(e.addEventListener("complete", r),
                  e.addEventListener("error", i),
                  e.addEventListener("abort", i))
              })
              _.set(e, t)
            })(e),
          b(e, s || (s = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])))
            ? new Proxy(e, k)
            : e
        })(e)
        return (t !== e && (w.set(e, t), A.set(t, e)), t)
      }
      let M = (e) => A.get(e),
        C = ["get", "getKey", "getAll", "getAllKeys", "count"],
        E = ["put", "add", "delete", "clear"],
        P = new Map()
      function I(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return
        if (P.get(t)) return P.get(t)
        let a = t.replace(/FromIndex$/, ""),
          s = t !== a,
          r = E.includes(a)
        if (!(a in (s ? IDBIndex : IDBObjectStore).prototype) || !(r || C.includes(a))) return
        let i = async function (e, ...t) {
          let i = this.transaction(e, r ? "readwrite" : "readonly"),
            n = i.store
          return (s && (n = n.index(t.shift())), (await Promise.all([n[a](...t), r && i.done]))[0])
        }
        return (P.set(t, i), i)
      }
      k = {
        ...(i = k),
        get: (e, t, a) => I(e, t) || i.get(e, t, a),
        has: (e, t) => !!I(e, t) || i.has(e, t),
      }
      let $ = ["continue", "continuePrimaryKey", "advance"],
        R = {},
        L = new WeakMap(),
        T = new WeakMap(),
        B = {
          get(e, t) {
            if (!$.includes(t)) return e[t]
            let a = R[t]
            return (
              a ||
                (a = R[t] =
                  function (...e) {
                    L.set(this, T.get(this)[t](...e))
                  }),
              a
            )
          },
        }
      async function* O(...e) {
        let t = this
        if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t)) return
        let a = new Proxy(t, B)
        for (T.set(a, t), A.set(a, M(t)); t; )
          (yield a, (t = await (L.get(a) || t.continue())), L.delete(a))
      }
      function D(e, t) {
        return (
          (t === Symbol.asyncIterator && b(e, [IDBIndex, IDBObjectStore, IDBCursor])) ||
          ("iterate" === t && b(e, [IDBIndex, IDBObjectStore]))
        )
      }
      k = {
        ...(n = k),
        get: (e, t, a) => (D(e, t) ? O : n.get(e, t, a)),
        has: (e, t) => D(e, t) || n.has(e, t),
      }
      let G = "game_saved_state",
        x = [
          {
            upgrade: (e) => {
              e.createObjectStore(G, { keyPath: ["gameId", "gameKey"] }).createIndex(
                "gameId",
                "gameId",
                { unique: !1 },
              )
            },
          },
        ],
        W = async () =>
          await (function (e, t, { blocked: a, upgrade: s, blocking: r, terminated: i } = {}) {
            let n = indexedDB.open(e, t),
              l = S(n)
            return (
              s &&
                n.addEventListener("upgradeneeded", (e) => {
                  s(S(n.result), e.oldVersion, e.newVersion, S(n.transaction), e)
                }),
              a && n.addEventListener("blocked", (e) => a(e.oldVersion, e.newVersion, e)),
              l
                .then((e) => {
                  ;(i && e.addEventListener("close", () => i()),
                    r &&
                      e.addEventListener("versionchange", (e) => r(e.oldVersion, e.newVersion, e)))
                })
                .catch(() => {}),
              l
            )
          })("pg_game_safe_storage", x.length, {
            upgrade(e, t, a) {
              for (let s = t; s < (a || x.length - 1); s += 1) x[s]?.upgrade(e)
            },
          }),
        F = (e) => {
          let t,
            a = async () => (t || (t = await W()), t)
          return {
            getState: async () => {
              let t = await a()
              return (await t.getAllFromIndex(G, "gameId", e)).reduce(
                (e, t) => ((e[t.gameKey] = t.value), e),
                {},
              )
            },
            setItems: async (t) => {
              let s = (await a()).transaction(G, "readwrite")
              return (
                Object.keys(t).forEach((a) => {
                  s.store.put({ value: t[a], gameId: e, gameKey: a })
                }),
                s.done
              )
            },
            deleteKeys: async (t) => {
              let s = (await a()).transaction(G, "readwrite")
              return (
                t.forEach((t) => {
                  s.store.delete([e, t])
                }),
                s.done
              )
            },
          }
        },
        N = (e, t) => {
          let a = e.data
          return (
            e.errors.length && (a = { status: "FAILED", error: e.errors.join(", ") }),
            {
              type: "in-game-payments",
              action: "purchaseStatus",
              originalMessageEvent: t,
              payload: a,
            }
          )
        }
      class H {
        bus
        constructor() {
          this.bus = new EventTarget()
        }
        dispatch(e, t) {
          this.bus.dispatchEvent(new CustomEvent(e, { detail: t }))
        }
        addEventListener(e, t) {
          this.bus.addEventListener(e, (e) => {
            t(e)
          })
        }
        removeEventListener(e, t) {
          this.bus.removeEventListener(e, (e) => {
            t(e)
          })
        }
      }
      class U {
        currentLanguage
        isPaymentsSupported = !0
        additionalPlatformInfo
        constructor(e) {
          ;((this.currentLanguage = e.currentLanguage),
            (this.additionalPlatformInfo = e.additionalPlatformInfo),
            (this.isPaymentsSupported = e.isPaymentsSupported))
        }
        handleMessage(e) {
          return "getPlatformInfo" === e.data.action
            ? {
                action: "platformInfo",
                originalMessageEvent: e,
                payload: {
                  language: this.currentLanguage,
                  isPaymentsSupported: this.isPaymentsSupported,
                  additionalParams: { clid: this.additionalPlatformInfo?.clid },
                },
              }
            : {
                action: "unknownMessageType",
                originalMessageEvent: e,
                payload: { error: `Unknown message action "${e.data.action}"` },
                type: "error",
              }
        }
      }
      var z = a(59176)
      let K = "GameEvents"
      class X {
        boundMessageHandler
        boundGameAdHandlerCallback
        enableSync
        gameAdHandler
        userService
        platformService
        storageMessageHandler
        inGamePaymentsMessageHandler
        cloudSaveMessageHandler
        onLogin
        onGameStart
        onGameStartCalled = !1
        onGameFocusChange
        boundStickyRecalculateBanner
        eventBus = new H()
        constructor(e) {
          const {
            userService: t,
            storageMessageHandler: a,
            gameAdHandler: s,
            inGamePaymentsMessageHandler: r,
            cloudSaveMessageHandler: i,
            onLogin: n,
            onGameStart: l,
            onGameFocusChange: o,
            enableSync: d,
          } = e
          ;((this.userService = t),
            (this.enableSync = d),
            (this.platformService = new U({
              currentLanguage: e.currentLanguage,
              additionalPlatformInfo: e.additionalPlatformInfo,
              isPaymentsSupported: e.isPaymentsSupported,
            })),
            (this.storageMessageHandler = a),
            (this.inGamePaymentsMessageHandler = r),
            (this.cloudSaveMessageHandler = i),
            (this.onLogin = n),
            (this.onGameStart = l),
            (this.onGameFocusChange = o),
            (this.gameAdHandler = s),
            (this.boundGameAdHandlerCallback = this.gameAdHandlerCallback.bind(this)),
            this.gameAdHandler.eventBus.addEventListener(
              "adMessage",
              this.boundGameAdHandlerCallback,
            ),
            (this.boundMessageHandler = this.messageHandler.bind(this)),
            window.addEventListener("message", this.boundMessageHandler))
        }
        destroy() {
          ;(window.removeEventListener("message", this.boundMessageHandler),
            this.gameAdHandler.eventBus.removeEventListener(
              "adMessage",
              this.boundGameAdHandlerCallback,
            ),
            this.boundStickyRecalculateBanner &&
              window.screen.orientation.removeEventListener(
                "change",
                this.boundStickyRecalculateBanner,
              ))
        }
        messageHandler(e) {
          if (e.data.source !== K || !e.source) return
          let { action: t, type: a } = e.data
          switch ((this.eventBus.dispatch(a, e.data), console.info(t, a), a)) {
            case "liveness":
              ;(this.onGameStartCalled || (this.onGameStart(), (this.onGameStartCalled = !0)),
                this.sendMessage({
                  action: "pong",
                  originalMessageEvent: e,
                  payload: { enableStorage: this.enableSync },
                }))
              break
            case "adv":
              this.gameAdHandler.handleMessage(e)
              break
            case "storage":
              ;("setItems" === e.data.action && this.gameAdHandler.attemptMidrollOnCloudSave(),
                this.storageMessageHandler(e).then((e) => {
                  e && this.sendMessage(e)
                }))
              break
            case "user":
              this.userService?.handleMessage(e, this.onLogin).then((e) => {
                e && this.sendMessage(e)
              })
              break
            case "in-game-payments":
              this.inGamePaymentsMessageHandler(e).then((e) => {
                this.sendMessage(e)
              })
              break
            case "cloud-save":
              ;("setCloudSaveState" === e.data.action &&
                this.gameAdHandler.attemptMidrollOnCloudSave(),
                this.cloudSaveMessageHandler(e).then((e) => {
                  e && this.sendMessage(e)
                }))
              break
            case "platform":
              this.sendMessage(this.platformService.handleMessage(e))
              break
            case "game":
              ;("gameBlur" === t && this.onGameFocusChange(!1),
                "gameFocus" === t && this.onGameFocusChange(!0),
                this.sendMessage({ action: t, originalMessageEvent: e }))
              break
            default:
              this.sendMessage({
                action: "unknownMessageType",
                originalMessageEvent: e,
                payload: { error: `Unknown message type "${a}"` },
                type: "error",
              })
          }
        }
        sendMessage({ action: e, originalMessageEvent: t, payload: a, type: s }) {
          console.info(e, s, a)
          let r = {
            action: e,
            id: `${Date.now()}-${(0, z.yT)()}`,
            payload: a || {},
            responseToId: t.data.id,
            source: K,
            type: s || t.data.type,
            ver: 1,
          }
          ;(t.source?.postMessage(r, "*"), this.eventBus.dispatch(r.type, r))
        }
        gameAdHandlerCallback(e) {
          e.detail && this.sendMessage(e.detail)
        }
      }
      ;(a(88370),
        a(88626),
        a(30112),
        a(87197),
        a(40160),
        a(2946),
        a(80487),
        a(98955),
        a(19798),
        a(51612),
        a(93402),
        a(35740),
        a(3299),
        a(82913),
        a(61319),
        a(70482),
        a(86603))
      let V = (e, t) => {
        let { rules: a } = e.ads || { rules: [] }
        if (a) {
          for (let e = a.length - 1; e >= 0; e -= 1)
            if (a[e]?.data?.request?.includes(t)) return a[e]
        }
      }
      class q {
        adService
        logEvent
        options
        isShowingFullscreenAd = !1
        banners = new Map()
        originalMessages = new Map()
        lastShownTimestamps = new Map()
        lastUsedSmartAdsIntervals = new Map([
          ["ai_smart_ads", 0],
          ["ai_smart_ads-cloud-save", 0],
        ])
        lastAdStatusAction = new Map()
        initTime
        midrollTimer = null
        adBlockerInProgress = !1
        adStateChangedEventId = null
        midrollsRule
        cloudSaveMidrollsRule
        eventBus = new H()
        constructor(e, t, a = {}) {
          ;((this.adService = e),
            (this.logEvent = t),
            (this.options = a),
            (this.initTime = Date.now()),
            a.smartAdsConfig &&
              ((this.midrollsRule = V(a.smartAdsConfig, "ai_smart_ads")),
              (this.cloudSaveMidrollsRule = V(a.smartAdsConfig, "ai_smart_ads-cloud-save"))))
        }
        refreshInitTime() {
          this.initTime = Date.now()
        }
        handleAdDisabled(e, t) {
          let a = this.options.adDisabledHandler?.(e)
          return (
            !!a &&
            ("showRewarded" === e
              ? this.fakeBannerOpening(t, "rewarded", a)
              : "showInterstitial" === e
                ? this.fakeBannerOpening(t, "interstitial", a)
                : this.originalMessages.delete(t),
            !0)
          )
        }
        setAdvancedBanners(e, t) {
          t && (this.eventBus.dispatch("setAdvancedBanners", e), this.originalMessages.delete(t))
        }
        stopMidrollTimer() {
          this.midrollTimer && (clearTimeout(this.midrollTimer), (this.midrollTimer = null))
        }
        startMidrollTimer(e = 0) {
          if (!this.midrollsRule) return
          let t = this.getNextMidrollIntervalMs(this.midrollsRule, "ai_smart_ads")
          this.stopMidrollTimer()
          let a = Math.max(t - e, 0)
          this.midrollTimer = window.setTimeout(() => {
            this.attemptMidrollAd()
          }, a)
        }
        canShowMidroll(e, t) {
          let a = e?.data?.skipIfAdShownWithinSec ?? 0,
            s = Date.now(),
            r = Math.max(
              this.lastShownTimestamps.get("interstitial") || 0,
              this.lastShownTimestamps.get("rewarded") || 0,
            )
          return (
            !(
              this.isShowingFullscreenAd ||
              s - r < (1e3 * a || 6e4) ||
              "hidden" === document.visibilityState ||
              this.options.adDisabledHandler?.()
            ) &&
            (void 0 === t || s - (this.lastShownTimestamps.get("interstitial_midroll") || 0) >= t)
          )
        }
        async attemptMidrollAd(e = 1) {
          if (!this.midrollsRule) return
          let t = `MIDROLL_MESSAGE_ID_${Date.now()}`
          if ((this.originalMessages.set(t, {}), this.canShowMidroll(this.midrollsRule)))
            return (
              console.info(`ATTEMPTING_MIDROLL_AD, ATTEMPT №${e}`),
              await this.showAd("interstitial", t)
            )
          ;(e < 2
            ? (this.midrollTimer = window.setTimeout(() => {
                this.attemptMidrollAd(e + 1)
              }, 1e4))
            : this.startMidrollTimer(1e4),
            this.originalMessages.delete(t))
        }
        async attemptMidrollOnCloudSave() {
          if (!this.cloudSaveMidrollsRule) return
          let e = this.getNextMidrollIntervalMs(
              this.cloudSaveMidrollsRule,
              "ai_smart_ads-cloud-save",
            ),
            t = `MIDROLL_MESSAGE_ID_${Date.now()}`
          if (
            (this.originalMessages.set(t, {}), this.canShowMidroll(this.cloudSaveMidrollsRule, e))
          )
            return (
              console.info("ATTEMPTING_MIDROLL_AD_CLOUD_SAVE"),
              await this.showAd("interstitial", t)
            )
          this.originalMessages.delete(t)
        }
        async handleMessage(e) {
          if (
            (this.originalMessages.set(e.data.id, e),
            !this.handleAdDisabled(e.data.action, e.data.id))
          )
            switch (e.data.action) {
              case "setBannerAdvSettings":
                this.eventBus.dispatch("adMessage", {
                  action: "setBannerAdvSettings",
                  originalMessageEvent: e,
                  payload: {},
                  type: "adv",
                })
                break
              case "showAdvancedBanners":
                this.setAdvancedBanners(e.data.payload?.banners || [], e.data.id)
                break
              case "hideAdvancedBanners":
                this.setAdvancedBanners([], e.data.id)
                break
              case "subscribeToAdStateChanges":
                this.adStateChangedEventId = e.data.id
                break
              case "preloadInterstitial":
                await this.preloadAd("interstitial", e.data.id)
                break
              case "preloadRewarded":
                await this.preloadAd("rewarded", e.data.id)
                break
              case "showInterstitial":
                await this.showAd("interstitial", e.data.id)
                break
              case "showRewarded":
                await this.adBlockOfferProcessing("rewarded", e.data.id)
                break
              case "checkAdBlock":
                this.respondToCheckAdBlock(e.data.id)
                break
              default:
                ;(this.eventBus.dispatch("adMessage", {
                  originalMessageEvent: e,
                  payload: { error: `Unknown message action "${e.data.action}"` },
                  type: "error",
                }),
                  this.originalMessages.delete(e.data.id))
            }
        }
        async showPreroll() {
          let e = "PREROLL_MESSAGE_ID"
          ;(this.originalMessages.set(e, {}), await this.showAd("interstitial_preroll", e))
        }
        validateAdDisplayConditions(e, t) {
          if ("hidden" === document.visibilityState)
            return (
              this.notifyGameAboutAdState(
                { status: "error", error: "Page is not visible - skip ad" },
                t,
                e,
              ),
              "PAGE_IS_NOT_VISIBLE"
            )
          let a = this.midrollsRule ?? this.cloudSaveMidrollsRule,
            s = 1e3 * (a?.data?.skipIfAdShownWithinSecAfter ?? 0) || 6e4,
            r = Date.now(),
            i = this.lastShownTimestamps.get("interstitial_preroll"),
            n = this.lastShownTimestamps.get("interstitial_midroll"),
            l = this.lastShownTimestamps.get(e),
            o = this.lastAdStatusAction.get("interstitial_preroll"),
            d = this.options.adHandlerConfig?.[e]?.timeout || 5e3,
            u = this.options.adHandlerConfig?.[e]?.initialDelayInMs || 0
          if (
            "interstitial" === e &&
            ((i && r - i < 2e4) ||
              (r - this.initTime < 1e4 && "empty" !== o) ||
              r - this.initTime < u)
          )
            return (this.fakeBannerOpening(t, e), "EARLY_INTERSTITIAL")
          let c = t.startsWith("MIDROLL_MESSAGE_ID")
          return "interstitial" === e && ((!c && n && r - n < s) || (c && l && r - l < s))
            ? (this.fakeBannerOpening(t, e), `TOO_MANY_${s / 1e3}s_REQUESTS`)
            : "interstitial" === e && this.options.skipInterstitials
              ? (this.notifyGameAboutAdState({ status: "error", error: "Skip this ad type" }, t, e),
                "SKIPPED_INTERSTITIAL")
              : l && r - l < d
                ? (this.notifyGameAboutAdState(
                    { status: "error", error: "Too many requests for this ad type" },
                    t,
                    e,
                  ),
                  `TOO_MANY_${d / 1e3}s_REQUESTS`)
                : this.isShowingFullscreenAd || this.adBlockerInProgress
                  ? (this.notifyGameAboutAdState(
                      { status: "error", error: "Another ad is already open" },
                      t,
                      e,
                    ),
                    "AD_ALREADY_OPEN")
                  : "ok"
        }
        async showAd(e, t) {
          let a = this.validateAdDisplayConditions(e, t)
          if ("ok" !== a)
            return void this.logEvent({
              event: "custom_event",
              eventName: "in_game_ad_not_requested",
              adPlacement: e,
              dimension1: a,
            })
          ;((this.isShowingFullscreenAd = !0), this.notifyExportPageAboutAdState("start", e))
          let s = this.banners.get(e) || (await this.preloadAd(e, t))
          if (!s) {
            this.isShowingFullscreenAd = !1
            return
          }
          ;(this.listenToRenderedBannerEvents(s, e, t),
            s.addEventListener("empty", () => {
              ;((this.isShowingFullscreenAd = !1),
                this.notifyGameAboutAdState({ status: "close" }, t, e))
            }))
          try {
            s.show()
          } catch {
            this.notifyExportPageAboutAdState("empty", e)
          }
          this.banners.delete(e)
        }
        async preloadAd(e, t) {
          try {
            if (!this.originalMessages.get(t)) throw Error("Message not found")
            this.notifyGameAboutAdState({ status: "start" }, t, e)
            let a = t.startsWith("MIDROLL_MESSAGE_ID") ? "smart-ad" : void 0,
              s = this.adService.requestOutOfPageAd(e, a, this.options.loader),
              { promise: r, resolve: i, reject: n } = Promise.withResolvers()
            return (
              s.addEventListener("empty", () => {
                ;(this.notifyGameAboutAdState({ status: "empty" }, t, e),
                  this.notifyExportPageAboutAdState("empty", e),
                  n(Error("No ads available")))
              }),
              s.addEventListener("ready", () => {
                ;(this.notifyGameAboutAdState({ status: "done" }, t, e),
                  this.notifyExportPageAboutAdState("done", e),
                  this.banners.set(e, s),
                  i(s))
              }),
              await r
            )
          } catch {
            return (
              this.notifyGameAboutAdState(
                { status: "error", error: "Cannot preload the ad" },
                t,
                e,
              ),
              this.notifyExportPageAboutAdState("empty", e),
              this.originalMessages.delete(t),
              null
            )
          }
        }
        listenToRenderedBannerEvents(e, t, a) {
          this.originalMessages.get(a) &&
            (e.addEventListener("rewarded", () => {
              this.notifyGameAboutAdState({ status: "rewarded" }, a, t)
            }),
            e.addEventListener("clicked", () => {
              this.notifyGameAboutAdState({ status: "clicked" }, a, t)
            }),
            e.addEventListener("timer", ({ detail: e }) => {
              this.notifyExportPageAboutAdState("timer", t, { secondsLeft: e?.secondsLeft })
            }),
            e.addEventListener("pod_counter", (e) => {
              this.notifyExportPageAboutAdState("pod_counter", t, {
                adPosition: e.detail?.adPosition,
                totalAds: e.detail?.totalAds,
              })
            }),
            e.addEventListener("closed", ({ detail: s }) => {
              let r = Date.now()
              ;(this.lastShownTimestamps.set(t, r),
                this.notifyGameAboutAdState({ status: "close" }, a, t),
                (this.isShowingFullscreenAd = !1),
                this.originalMessages.delete(a),
                this.notifyExportPageAboutAdState("closed", t),
                this.logEvent({
                  event: "custom_event",
                  eventName: "ad_close",
                  adUnit: e.adUnit,
                  adPlacement: t,
                  dimension1: s?.reason,
                }),
                "interstitial_preroll" === t &&
                  this.logEvent({
                    event: "custom_event",
                    eventName: "preroll_end",
                    adUnit: e.adUnit,
                    instreamDuration: e.instreamDuration,
                    watchedDuration: e.watchedDuration,
                  }),
                a.startsWith("MIDROLL_MESSAGE_ID") &&
                  (this.lastShownTimestamps.set("interstitial_midroll", r),
                  this.startMidrollTimer()))
            }),
            e.addEventListener("rendered", () => {
              this.notifyGameAboutAdState({ status: "open" }, a, t)
            }),
            e.addEventListener("viewable", () => {
              ;(this.notifyGameAboutAdState({ status: "show" }, a, t),
                this.notifyExportPageAboutAdState("opened", t, { provider: e.provider }),
                a.startsWith("MIDROLL_MESSAGE_ID") &&
                  this.logEvent({
                    event: "custom_event",
                    eventName: "ad_show_midroll",
                    adPlacement: t,
                  }))
            }))
        }
        notifyGameAboutAdState(e, t, a) {
          let s = this.originalMessages.get(t)
          s?.data &&
            this.eventBus.dispatch("adMessage", {
              action: s.data.action,
              type: "adv",
              originalMessageEvent: s,
              payload: e,
            })
          let r =
            this.adStateChangedEventId && this.originalMessages.get(this.adStateChangedEventId)
          r &&
            this.eventBus.dispatch("adMessage", {
              action: "adStateChanged",
              type: "adv",
              originalMessageEvent: r,
              payload: { status: e.status, adType: a },
            })
        }
        notifyExportPageAboutAdState(e, t, a = {}) {
          ;(this.lastAdStatusAction.set(t, e),
            this.eventBus.dispatch("adStateChanged", { action: e, adType: t, ...a }))
        }
        async fakeBannerOpening(e, t, a) {
          if ((this.notifyGameAboutAdState({ status: "start" }, e, t), a)) {
            let e = await a
            this.logEvent({
              event: "custom_event",
              eventName: "ad_skipped",
              adPlacement: t,
              dimension1: e.reason,
            })
          }
          ;(setTimeout(() => this.notifyGameAboutAdState({ status: "done" }, e, t), 200),
            setTimeout(() => this.notifyGameAboutAdState({ status: "open" }, e, t), 400),
            setTimeout(() => this.notifyGameAboutAdState({ status: "show" }, e, t), 500),
            "rewarded" === t &&
              setTimeout(() => this.notifyGameAboutAdState({ status: "rewarded" }, e, t), 500),
            setTimeout(() => {
              ;(this.notifyGameAboutAdState({ status: "close" }, e, t),
                this.originalMessages.delete(e))
            }, 1e3))
        }
        async adBlockOfferProcessing(e, t) {
          if (!this.options.adBlockerHandler) return void (await this.showAd(e, t))
          if ("ok" === this.validateAdDisplayConditions(e, t))
            try {
              this.adBlockerInProgress = !0
              let { message: a } = await this.options.adBlockerHandler(e)
              ;((this.adBlockerInProgress = !1),
                "fakeShowAd" === a ? this.fakeBannerOpening(t, e) : await this.showAd(e, t))
            } catch (a) {
              ;((this.adBlockerInProgress = !1),
                console.error("AdBlocker handler error", a),
                await this.showAd(e, t))
            }
        }
        respondToCheckAdBlock(e) {
          let t = this.originalMessages.get(e)
          ;(t?.data &&
            this.eventBus.dispatch("adMessage", {
              action: t.data.action,
              type: "adv",
              originalMessageEvent: t,
              payload: { adBlockDetected: !!this.options.adBlockDetected?.() },
            }),
            this.originalMessages.delete(e))
        }
        getNextMidrollIntervalMs(e, t) {
          let { intervalScheduleSec: a = [], scheduleMode: s } = e?.data || {}
          if (0 === a.length) return 18e4
          let r = this.lastUsedSmartAdsIntervals.get(t) || 0,
            i = a[Math.min(r, a.length - 1)]
          return (
            "repeatLast" === s
              ? r < a.length - 1 && this.lastUsedSmartAdsIntervals.set(t, r + 1)
              : ((i = a[r % a.length]), this.lastUsedSmartAdsIntervals.set(t, (r + 1) % a.length)),
            (i ?? 0) * 1e3 || 18e4
          )
        }
      }
      var j = a(71808),
        Q = a(63228)
      let J = [],
        Z = { name: null, id: null, photos: [], isAuthorized: !1, goldBalance: 0 },
        Y = (e) => ({ action: "userInfo", type: "user", payload: e }),
        ee = (e, t) => ({ ...t, originalMessageEvent: e })
      class et {
        authorizeUser
        anonymousProfile
        signedRequest
        gameHru
        constructor(e) {
          ;((this.authorizeUser = e.authorizeUser),
            (this.signedRequest = e.signedRequest),
            (this.gameHru = e.gameHru),
            (this.anonymousProfile = J.includes(e.gameHru)
              ? Z
              : ((e) => ({
                  name: `Guest-${e.split("-")[0]}`,
                  id: e,
                  photos: [],
                  isAuthorized: !1,
                  goldBalance: 0,
                }))(e.auid)))
        }
        async getUser() {
          let { data: e } = await this.signedRequest(
            `/api/v1/user/gameProfile?gameHru=${this.gameHru}`,
          )
          return e ? Y(e) : Y(this.anonymousProfile)
        }
        async handleMessage(e, t) {
          let a
          switch (e.data.action) {
            case "getUser":
              return ee(e, await this.getUser())
            case "authorizeUser":
              if (!(a = await this.getUser()).payload.isAuthorized)
                try {
                  ;(await this.authorizeUser(), (a = await this.getUser()) && t())
                } catch (e) {
                  ;(console.info(e), (a = Y(this.anonymousProfile)))
                }
              return ee(e, a)
            default:
              return ee(e, {
                action: "unknownMessageType",
                payload: { error: `Unknown message action "${e.data.action}"` },
                type: "error",
              })
          }
        }
      }
      var ea = a(35556),
        es = a(37361)
      let er = (0, o.nY)("ad-blocker-offer", () => {
        let e = (0, l.KR)(!1),
          t = (0, l.KR)(null),
          a = (0, l.KR)(null)
        function s() {
          ;((t.value = null), (a.value = null), (e.value = !1))
        }
        return {
          isOfferVisible: e,
          showOffer: function () {
            return (
              (e.value = !0),
              new Promise((e, s) => {
                ;((t.value = e), (a.value = s))
              })
            )
          },
          dismissOffer: function () {
            ;(t.value?.({ completed: !1 }), s())
          },
          rejectOffer: function (e) {
            ;(a.value?.({ error: e }), s())
          },
          completeOffer: function () {
            ;(t.value?.({ completed: !0 }), s())
          },
        }
      })
      var ei = a(86037),
        en = a(26635),
        el = a(87743),
        eo = a(59103),
        ed = a(79316),
        eu = a(10438),
        ec = a(12852),
        ev = a(92031),
        ep = a(92730),
        em = a(77192)
      ;(a(58267),
        a(54965),
        a(69024),
        a(15381),
        a(30774),
        a(8109),
        a(56705),
        a(55156),
        a(55120),
        a(85866),
        a(92426),
        a(37539),
        a(14894),
        a(34420),
        a(35055),
        a(56596),
        a(48933),
        a(20329),
        a(60387),
        a(81623),
        a(77237),
        a(64632),
        a(71090),
        a(76429))
      var eg = a(81236),
        eh = a.p + "static/svg/rotate.2923356f.svg"
      let ey = ["src"]
      var ef = (0, l.pM)({
          __name: "ActionNotifier",
          props: { queue: {} },
          emits: ["click"],
          setup(e, { emit: t }) {
            let a = (0, eo.l)(),
              { screenOrientation: s } = (0, o.bP)(a),
              r = (0, l.IJ)(new Set()),
              i = (0, l.KR)(!1),
              n = (0, l.KR)(),
              d = (0, l.EW)(() => e.queue.find((e) => !r.value.has(e.type)))
            function u() {
              ;((i.value = !0),
                setTimeout(() => {
                  ;(d.value && (r.value = new Set([...r.value, d.value.type])), (i.value = !1))
                }, 300))
            }
            function c() {
              ;(t("click"), u())
            }
            function v() {
              ;(p(),
                (n.value = window.setTimeout(() => {
                  u()
                }, 15e3)))
            }
            function p() {
              n.value && (window.clearTimeout(n.value), (n.value = void 0))
            }
            return (
              (0, l.wB)(
                () => e.queue,
                (e) => {
                  let t = new Set()
                  for (let a of r.value) e.find((e) => e.type === a) && t.add(a)
                  t.size !== r.value.size && (r.value = t)
                },
              ),
              (0, l.wB)(d, (e) => {
                e ? v() : p()
              }),
              (0, l.sV)(() => {
                d.value && v()
              }),
              (0, l.xo)(() => {
                p()
              }),
              (e, t) =>
                d.value
                  ? ((0, l.uX)(),
                    (0, l.CE)(
                      "div",
                      {
                        key: 0,
                        class: (0, l.C4)([e.$style.wrapper, i.value && e.$style.fade_leave]),
                        onClick: c,
                      },
                      [
                        "focus" === d.value.type
                          ? ((0, l.uX)(),
                            (0, l.Wv)(
                              eg.A,
                              { key: 0, size: "s", type: "paragraph" },
                              {
                                default: (0, l.k6)(() => [
                                  (0, l.eW)(
                                    (0, l.v_)(e.$tr("gameContainer.focus_overlay_text")),
                                    1,
                                  ),
                                ]),
                                _: 1,
                              },
                            ))
                          : "swipe" === d.value.type
                            ? ((0, l.uX)(),
                              (0, l.Wv)(
                                eg.A,
                                { key: 1, size: "s", type: "paragraph" },
                                {
                                  default: (0, l.k6)(() => [
                                    (0, l.eW)(
                                      (0, l.v_)(
                                        e.$tr("gameContainer.mobile_safari_swipe_to_hide_hint"),
                                      ),
                                      1,
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ))
                            : "rotate" === d.value.type
                              ? ((0, l.uX)(),
                                (0, l.CE)(
                                  l.FK,
                                  { key: 2 },
                                  [
                                    (0, l.Lk)(
                                      "img",
                                      {
                                        src: (0, l.R1)(eh),
                                        alt: "Rotate icon",
                                        class: (0, l.C4)(
                                          "landscape" === (0, l.R1)(s) && e.$style.rotated_icon,
                                        ),
                                      },
                                      null,
                                      10,
                                      ey,
                                    ),
                                    (0, l.bF)(
                                      eg.A,
                                      {
                                        size: "s",
                                        type: "paragraph",
                                        class: (0, l.C4)(e.$style.label),
                                        innerHTML: e.$tr("gameRotateBanner.message", {
                                          orientation:
                                            "landscape" === d.value.rotateOrientation
                                              ? e.$tr("orientationLabel.horizontalOrientation")
                                              : e.$tr("orientationLabel.verticalOrientation"),
                                        }),
                                      },
                                      null,
                                      8,
                                      ["class", "innerHTML"],
                                    ),
                                  ],
                                  64,
                                ))
                              : (0, l.Q3)("", !0),
                      ],
                      2,
                    ))
                  : (0, l.Q3)("", !0)
            )
          },
        }),
        eb = a(97939)
      let e_ = {}
      e_.$style = {
        wrapper: "OjIfB",
        fade_leave: "UUVfA",
        fadeLeave: "UUVfA",
        rotated_icon: "srHna",
        rotatedIcon: "srHna",
        label: "ldkFy",
      }
      let ew = (0, eb.default)(ef, [["__cssModules", e_]])
      var eA = a(87577),
        ek = a.p + "static/image/ad-block-offer-1.171bfa53.webp",
        eS = a.p + "static/image/ad-block-offer-2.a5c59655.webp",
        eM = a.p + "static/image/ad-block-offer-3.65dcea2a.webp"
      let eC = ["src"]
      var eE = (0, l.pM)({
        __name: "AdBlockerOffer",
        setup(e) {
          let t = er(),
            a = (0, l.KR)()
          function s() {
            a.value = (0, z.k4)([
              { srcImg: ek, backgroundClass: "bg_yellow" },
              { srcImg: eS, backgroundClass: "bg_green" },
              { srcImg: eM, backgroundClass: "bg_red" },
            ]).slice(0)[0]
          }
          function r() {
            ;(t.dismissOffer(), s())
          }
          function i() {
            window.parent.exportApi
              ?.openDisabledAdModal()
              .then((e) => {
                e?.data?.status === "PAID" && (t.completeOffer(), s())
              })
              .catch(r)
          }
          return (
            s(),
            (e, s) =>
              (0, l.R1)(t).isOfferVisible && a.value
                ? ((0, l.uX)(),
                  (0, l.CE)(
                    "div",
                    {
                      key: 0,
                      class: (0, l.C4)([e.$style.offer, e.$style[a.value.backgroundClass]]),
                    },
                    [
                      (0, l.Lk)(
                        "img",
                        {
                          class: (0, l.C4)(e.$style.image),
                          src: a.value?.srcImg,
                          alt: "Ad Blocker Offer",
                        },
                        null,
                        10,
                        eC,
                      ),
                      (0, l.bF)(
                        eg.A,
                        {
                          size: "m",
                          type: "paragraph",
                          class: (0, l.C4)(e.$style.desc),
                          accent: "",
                        },
                        {
                          default: (0, l.k6)(() => [
                            (0, l.Lk)(
                              "span",
                              { class: (0, l.C4)(e.$style.desc_accent) },
                              (0, l.v_)(e.$tr("adBlockerOffer.title")),
                              3,
                            ),
                            s[0] || (s[0] = (0, l.Lk)("br", null, null, -1)),
                            (0, l.eW)(" " + (0, l.v_)(e.$tr("adBlockerOffer.desc")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      (0, l.Lk)(
                        "div",
                        { class: (0, l.C4)(e.$style.buttons) },
                        [
                          (0, l.bF)(
                            eA.A,
                            {
                              color: "white-60",
                              width: "full",
                              interfaceTarget: "ad-blocker-offer-skip",
                              label: e.$tr("adBlockerOffer.skip"),
                              onClick: r,
                            },
                            null,
                            8,
                            ["label"],
                          ),
                          (0, l.bF)(
                            u.A,
                            {
                              width: "full",
                              color: "salad",
                              interfaceTarget: "ad-blocker-offer-buy",
                              label: e.$tr("adBlockerOffer.activate"),
                              onClick: i,
                            },
                            null,
                            8,
                            ["label"],
                          ),
                        ],
                        2,
                      ),
                    ],
                    2,
                  ))
                : (0, l.Q3)("", !0)
          )
        },
      })
      let eP = {}
      eP.$style = {
        offer: "LmIll",
        bg_yellow: "ZmUKt",
        bgYellow: "ZmUKt",
        bg_green: "ss2Xw",
        bgGreen: "ss2Xw",
        bg_red: "K5QaC",
        bgRed: "K5QaC",
        image: "UfK6R",
        desc: "IL7xI",
        desc_accent: "RHvWV",
        descAccent: "RHvWV",
        buttons: "PM4ZM",
      }
      let eI = (0, eb.default)(eE, [["__cssModules", eP]])
      var e$ = a(93992),
        eR = (0, l.pM)({
          __name: "AdFlipCards",
          props: {
            frontDurationMs: { default: 15e3 },
            backDurationMs: { default: 6e4 },
            widgetMode: { type: Boolean },
          },
          setup(e) {
            let t = (0, l.KR)(!1),
              a = (0, l.KR)(!1),
              s = (0, l.KR)(null),
              r = (0, l.KR)(null),
              i = (0, l.EW)(() => (e.widgetMode ? "widget_sticky_mobile" : "sticky_mobile")),
              n = (0, l.EW)(() => (e.widgetMode ? "widget_sticky_tablet" : "sticky_tablet"))
            function o(t) {
              ;(d(),
                (s.value = setTimeout(() => {
                  a.value = !0
                }, t ?? e.frontDurationMs)))
            }
            function d() {
              ;(clearTimeout(s.value), clearTimeout(r.value))
            }
            function u(s) {
              s
                ? ((t.value = !0),
                  (r.value = setTimeout(() => {
                    t.value = !1
                  }, e.backDurationMs)))
                : ((a.value = !1), (t.value = !1), o(6e4))
            }
            function c() {
              t.value || ((a.value = !1), o())
            }
            return (
              (0, l.sV)(() => {
                o()
              }),
              (0, l.xo)(() => {
                d()
              }),
              (e, s) => (
                (0, l.uX)(),
                (0, l.CE)(
                  "div",
                  { class: (0, l.C4)(e.$style.container) },
                  [
                    (0, l.Lk)(
                      "div",
                      { class: (0, l.C4)([e.$style.front, t.value && e.$style.hideUnder]) },
                      [(0, l.RG)(e.$slots, "front")],
                      2,
                    ),
                    (0, l.Lk)(
                      "div",
                      {
                        class: (0, l.C4)([e.$style.back, t.value && e.$style.visible]),
                        onTransitionend: c,
                      },
                      [
                        a.value
                          ? ((0, l.uX)(),
                            (0, l.Wv)(
                              e$.A,
                              {
                                key: 0,
                                class: (0, l.C4)(e.$style.mobile),
                                type: i.value,
                                "onUpdate:visible": u,
                              },
                              null,
                              8,
                              ["class", "type"],
                            ))
                          : (0, l.Q3)("", !0),
                        a.value
                          ? ((0, l.uX)(),
                            (0, l.Wv)(
                              e$.A,
                              {
                                key: 1,
                                class: (0, l.C4)(e.$style.tablet),
                                type: n.value,
                                "onUpdate:visible": u,
                              },
                              null,
                              8,
                              ["class", "type"],
                            ))
                          : (0, l.Q3)("", !0),
                      ],
                      34,
                    ),
                  ],
                  2,
                )
              )
            )
          },
        })
      let eL = {}
      eL.$style = {
        container: "dzj3Y",
        front: "coR4A",
        back: "Hrpth",
        hideUnder: "gJKFU",
        visible: "QiqMk",
        tablet: "VXt1x",
        mobile: "VcoyI",
      }
      let eT = (0, eb.default)(eR, [["__cssModules", eL]])
      function eB(e) {
        return (e && parseFloat(e)) || 0
      }
      function eO(e) {
        let t = eB(e.width),
          a = eB(e.height),
          s = e.top ? eB(e.top) : 100 - eB(e.bottom) - a,
          r = e.left ? eB(e.left) : 100 - eB(e.right) - t
        return { width: e.width, height: e.height, top: `${s}%`, left: `${r}%` }
      }
      a(96466)
      var eD = (0, l.pM)({
        __name: "AdvancedBanners",
        props: { banners: {}, refreshSec: {}, isFullscreen: { type: Boolean } },
        setup(e) {
          let t = (0, l.EW)(() =>
              e.isFullscreen
                ? ["universal_banner_1", "universal_banner_2"]
                : ["universal_banner_short_1"],
            ),
            a = (0, el.C)(),
            s = (0, l.EW)(() =>
              e.banners.map(eO).map((a, s) => {
                let r = t.value[s]
                return r
                  ? { refreshSec: e.refreshSec, type: r, sizeAndPosition: a }
                  : { sizeAndPosition: a }
              }),
            )
          return (e, t) => (
            (0, l.uX)(!0),
            (0, l.CE)(
              l.FK,
              null,
              (0, l.pI)(
                s.value,
                (t, s) => (
                  (0, l.uX)(),
                  (0, l.CE)(
                    "div",
                    {
                      key: s,
                      class: (0, l.C4)([
                        e.$style.slot,
                        (0, l.R1)(a).isDebugMode && e.$style.debug,
                        !t.type && e.$style.not_found,
                      ]),
                      style: (0, l.Tr)({
                        top: t.sizeAndPosition.top,
                        width: t.sizeAndPosition.width,
                        height: t.sizeAndPosition.height,
                        left: t.sizeAndPosition.left,
                        "--slot-num": s + 1,
                      }),
                    },
                    [
                      t.type
                        ? ((0, l.uX)(),
                          (0, l.Wv)(
                            e$.A,
                            {
                              key: 0,
                              class: (0, l.C4)(e.$style.banner),
                              type: t.type,
                              refreshSec: t.refreshSec,
                              respectHeight: "",
                            },
                            null,
                            8,
                            ["class", "type", "refreshSec"],
                          ))
                        : (0, l.Q3)("", !0),
                    ],
                    6,
                  )
                ),
              ),
              128,
            )
          )
        },
      })
      let eG = {}
      eG.$style = {
        slot: "nXVij",
        debug: "vYUzj",
        not_found: "nPmVt",
        notFound: "nPmVt",
        banner: "bcZ_2",
      }
      let ex = (0, eb.default)(eD, [["__cssModules", eG]])
      var eW = a(98777),
        eF = (0, l.pM)({
          __name: "DisabledAdFiller",
          props: { adLoader: {} },
          emits: ["message"],
          setup(e, { emit: t }) {
            let { platform: s } = (0, o.bP)((0, el.C)()),
              r = (0, l.KR)(!1),
              i = (0, l.KR)(),
              n = (0, l.KR)(),
              d = (0, l.KR)(),
              u = (0, l.KR)()
            async function c(e) {
              let t =
                  "desktop" === s.value
                    ? "aa3b9e635251e71c964d91e6e39f6831"
                    : "bf77f6e92e68e523db1b3b6af85a7414",
                r = `${h.l}${t}/manifest`
              if ("" !== e.canPlayType("application/vnd.apple.mpegurl")) {
                ;((e.src = `${r}/video.m3u8`), e.load())
                return
              }
              ;((n.value = new (await a.e("5492").then(a.t.bind(a, 495, 23))).Player()),
                n.value.configure({
                  abr: { restrictToElementSize: !0 },
                  manifest: { disableAudio: !0 },
                  streaming: { bufferingGoal: 3 },
                }),
                n.value.attach(e))
              try {
                await n.value.load(`${r}/video.mpd`, 0, "application/dash+xml")
              } catch {}
            }
            async function v() {
              e.adLoader?.show("rewarded")
              let a = i.value
              if (!a) return void (await e.adLoader?.destroy())
              ;(c(a), e.adLoader && (await (0, z.O1)(eW.L6)))
              try {
                ;(await a.play(),
                  e.adLoader
                    ? e.adLoader?.destroy().then(() => {
                        p(a)
                      })
                    : p(a))
              } catch {
                ;(await e.adLoader?.destroy(), t("message", { type: "stop" }))
                return
              }
              let s = () => {
                  t("message", {
                    type: "timer",
                    secondsLeft: Math.round(a.duration - a.currentTime),
                  })
                },
                n = () => {
                  ;(u.value?.(), (u.value = void 0), (r.value = !1), t("message", { type: "stop" }))
                }
              ;((u.value = () => {
                ;(a.removeEventListener("timeupdate", s), a.removeEventListener("ended", n))
              }),
                a.addEventListener("timeupdate", s),
                a.addEventListener("ended", n, { once: !0 }))
            }
            function p(e) {
              ;((r.value = !0), e.play())
            }
            return (
              (0, l.sV)(() => {
                v()
              }),
              (0, l.hi)(() => {
                ;(clearTimeout(d.value),
                  u.value?.(),
                  e.adLoader?.destroy(),
                  n.value && (n.value.destroy().catch(() => {}), (n.value = void 0)))
              }),
              (e, t) => (
                (0, l.uX)(),
                (0, l.CE)(
                  "div",
                  { class: (0, l.C4)(e.$style.wrapper) },
                  [
                    (0, l.Lk)(
                      "video",
                      {
                        ref_key: "videoElem",
                        ref: i,
                        class: (0, l.C4)([e.$style.video, r.value && e.$style.visible]),
                        playsinline: "",
                        muted: "",
                      },
                      null,
                      2,
                    ),
                  ],
                  2,
                )
              )
            )
          },
        })
      let eN = {}
      eN.$style = { wrapper: "L8hT_", preloader: "VuqwS", video: "gFlj3", visible: "YjBKV" }
      let eH = (0, eb.default)(eF, [["__cssModules", eN]])
      var eU = a(35584),
        ez = a.p + "static/image/img-backpack.3b9dcd33.webp",
        eK = a.p + "static/image/img-ball.8c855712.webp",
        eX = a.p + "static/image/img-gum.e58f7439.webp",
        eV = a.p + "static/image/img-heart.81e13f21.webp",
        eq = a.p + "static/image/img-pigeon.bcc0c14e.webp"
      let ej = ["src", "alt"]
      var eQ = (0, l.pM)({
        __name: "ErrorAdFiller",
        props: { adType: {} },
        emits: ["close"],
        setup(e, { emit: t }) {
          let a = (0, eU.q)()
          function s() {
            t("close")
          }
          let r = (0, l.EW)(() =>
              "rewarded" === e.adType ? a("brandPreloader.reward") : a("brandPreloader.adSkipped"),
            ),
            i = (0, l.EW)(() => {
              let e = [ez, eK, eX, eV, eq]
              return e[Math.floor((0, z.yT)() * e.length)]
            })
          return (e, t) => (
            (0, l.uX)(),
            (0, l.CE)(
              "div",
              { class: (0, l.C4)(e.$style.container), onClick: s },
              [
                (0, l.Lk)(
                  "div",
                  {
                    class: (0, l.C4)(e.$style.wrapper),
                    "data-interface-section": "brand-preloader-error-state",
                  },
                  [
                    (0, l.Lk)(
                      "img",
                      {
                        src: i.value,
                        alt: r.value,
                        class: (0, l.C4)([e.$style.image, e.$style.image_animated]),
                      },
                      null,
                      10,
                      ej,
                    ),
                    (0, l.bF)(
                      eg.A,
                      { type: "label", size: "l", class: (0, l.C4)(e.$style.label) },
                      { default: (0, l.k6)(() => [(0, l.eW)((0, l.v_)(r.value), 1)]), _: 1 },
                      8,
                      ["class"],
                    ),
                    (0, l.bF)(
                      u.A,
                      {
                        size: "m",
                        interfaceTarget: "brand-preloader-continue-button",
                        label: e.$tr("brandPreloader.continuePlaying"),
                      },
                      null,
                      8,
                      ["label"],
                    ),
                  ],
                  2,
                ),
              ],
              2,
            )
          )
        },
      })
      let eJ = {}
      eJ.$style = {
        container: "MegkQ",
        wrapper: "PplJR",
        label: "H4W7I",
        image: "CczLj",
        image_animated: "g9aq6",
        imageAnimated: "g9aq6",
        bounceIn: "U0GW6",
      }
      let eZ = (0, eb.default)(eQ, [["__cssModules", eJ]])
      var eY = a(79846),
        e0 = a(33281),
        e1 = a.p + "static/image/plus.06f751ce.webp"
      let e4 = ["src"]
      var e3 = (0, l.pM)({
        __name: "AdFreeButton",
        emits: ["click"],
        setup:
          (e, { emit: t }) =>
          (e, a) => (
            (0, l.uX)(),
            (0, l.Wv)(
              u.A,
              {
                interfaceTarget: "export_init_ad_free_button",
                color: "white-08",
                size: "l",
                class: (0, l.C4)(e.$style.ad_free_button_override),
                onClick: a[0] || (a[0] = (0, l.D$)((e) => t("click"), ["stop"])),
              },
              {
                default: (0, l.k6)(() => [
                  (0, l.Lk)(
                    "img",
                    { class: (0, l.C4)(e.$style.plus_icon), src: (0, l.R1)(e1), alt: "plus" },
                    null,
                    10,
                    e4,
                  ),
                  (0, l.bF)(
                    eg.A,
                    { size: "m", responsive: !1, class: (0, l.C4)(e.$style.ad_free_button_label) },
                    {
                      default: (0, l.k6)(() => [
                        (0, l.eW)((0, l.v_)(e.$tr("gameContainer.mobile_ad_free_button")), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"],
                  ),
                ]),
                _: 1,
              },
              8,
              ["class"],
            )
          ),
      })
      let e2 = {}
      e2.$style = {
        ad_free_button_override: "q85Om",
        adFreeButtonOverride: "q85Om",
        "#": "BzbOO",
        ad_free_button_label: "FP1E8",
        adFreeButtonLabel: "FP1E8",
        plus_icon: "Os8Hg",
        plusIcon: "Os8Hg",
      }
      let e8 = (0, eb.default)(e3, [["__cssModules", e2]])
      var e5 = a(98289),
        e6 = a(27986),
        e9 = (0, l.pM)({
          __name: "BackButton",
          emits: ["click"],
          setup:
            (e, { emit: t }) =>
            (e, a) => (
              (0, l.uX)(),
              (0, l.Wv)(
                u.A,
                {
                  interfaceTarget: "export_init_logo_button",
                  color: "white-08",
                  size: "l",
                  class: (0, l.C4)(e.$style.button_override),
                  onClick: a[0] || (a[0] = (0, l.D$)((e) => t("click"), ["stop"])),
                },
                {
                  default: (0, l.k6)(() => [
                    (0, l.Lk)(
                      "div",
                      { class: (0, l.C4)(e.$style.content) },
                      [
                        (0, l.bF)(e5.A, { name: "chevron-left" }),
                        (0, l.bF)(
                          e6.A,
                          { mode: "default", class: (0, l.C4)(e.$style.logo_override) },
                          null,
                          8,
                          ["class"],
                        ),
                      ],
                      2,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["class"],
              )
            ),
        })
      let e7 = {}
      e7.$style = {
        button_override: "QPcb8",
        buttonOverride: "QPcb8",
        "#": "wP882",
        content: "xU4CP",
        logo_override: "xTJ7v",
        logoOverride: "xTJ7v",
      }
      let te = (0, eb.default)(e9, [["__cssModules", e7]])
      var tt = a(77378),
        ta = (0, l.pM)({
          __name: "SeoText",
          props: { text: {} },
          setup: (e) => (t, a) => (
            (0, l.uX)(),
            (0, l.Wv)(
              eg.A,
              { is: "div", type: "paragraph", size: "xs", class: (0, l.C4)(t.$style.seo_text) },
              {
                default: (0, l.k6)(() => [
                  (0, l.bF)(tt.A, { content: e.text }, null, 8, ["content"]),
                ]),
                _: 1,
              },
              8,
              ["class"],
            )
          ),
        })
      let ts = {}
      ts.$style = { seo_text: "JWISB", seoText: "JWISB" }
      let tr = (0, eb.default)(ta, [["__cssModules", ts]]),
        ti = ["src", "alt"]
      var tn = (0, l.pM)({
        __name: "ExportInitScreen",
        props: {
          game: {},
          categories: {},
          isPortal: { type: Boolean },
          isFullscreen: { type: Boolean },
        },
        emits: ["onBack", "onAdFreeClick", "click"],
        setup(e, { emit: t }) {
          let a = (0, el.C)(),
            s = (0, l.EW)(
              () => e.categories?.categoriesInfo.find((e) => "category" === e.categoryType)?.title,
            )
          return (r, i) => (
            (0, l.uX)(),
            (0, l.CE)(
              "div",
              {
                "data-interface-target": "init_screen",
                class: (0, l.C4)([
                  r.$style.init_screen,
                  e.isPortal && r.$style.portal,
                  !e.isFullscreen && r.$style.non_fullscreen,
                ]),
                onClick: i[2] || (i[2] = (e) => t("click")),
              },
              [
                (0, l.Lk)(
                  "div",
                  {
                    class: (0, l.C4)(r.$style.background),
                    style: (0, l.Tr)({ backgroundImage: `url(${e.game.preview})` }),
                  },
                  null,
                  6,
                ),
                (0, l.Lk)(
                  "div",
                  { class: (0, l.C4)(r.$style.content) },
                  [
                    e.isPortal
                      ? ((0, l.uX)(),
                        (0, l.Wv)(
                          te,
                          {
                            key: 0,
                            class: (0, l.C4)(r.$style.back_button_override),
                            onClick: i[0] || (i[0] = (e) => t("onBack")),
                          },
                          null,
                          8,
                          ["class"],
                        ))
                      : (0, l.Q3)("", !0),
                    e.isPortal && (0, l.R1)(a).isPurchaseEnabled
                      ? ((0, l.uX)(),
                        (0, l.Wv)(
                          e8,
                          {
                            key: 1,
                            class: (0, l.C4)(r.$style.ad_free_button_override),
                            onClick: i[1] || (i[1] = (e) => t("onAdFreeClick")),
                          },
                          null,
                          8,
                          ["class"],
                        ))
                      : (0, l.Q3)("", !0),
                    (0, l.bF)(
                      e0.A,
                      {
                        game: e.game,
                        category: s.value,
                        placement: "init_screen",
                        class: (0, l.C4)(r.$style.short_info_override),
                      },
                      null,
                      8,
                      ["game", "category", "class"],
                    ),
                    (0, l.Lk)(
                      "div",
                      { class: (0, l.C4)(r.$style.cover_image_and_play_button_wrapper) },
                      [
                        (0, l.Lk)(
                          "img",
                          {
                            src: e.game.preview,
                            alt: e.game.title,
                            class: (0, l.C4)(r.$style.cover_image),
                          },
                          null,
                          10,
                          ti,
                        ),
                        (0, l.bF)(
                          eY.A,
                          {
                            label: r.$tr("gameContainer.init_button"),
                            class: (0, l.C4)(r.$style.play_button_override),
                            interfaceTarget: "init_button",
                            withLoader: "",
                          },
                          null,
                          8,
                          ["label", "class"],
                        ),
                      ],
                      2,
                    ),
                    (0, l.bF)(
                      tr,
                      { text: e.game.seo_text, class: (0, l.C4)(r.$style.seo_text_override) },
                      null,
                      8,
                      ["text", "class"],
                    ),
                  ],
                  2,
                ),
              ],
              2,
            )
          )
        },
      })
      let tl = {}
      tl.$style = {
        init_screen: "N20Az",
        initScreen: "N20Az",
        background: "G9a0f",
        content: "WeW7c",
        back_button_override: "kgm2N",
        backButtonOverride: "kgm2N",
        "#": "Aamy9",
        ad_free_button_override: "HDLLJ",
        adFreeButtonOverride: "HDLLJ",
        cover_image_and_play_button_wrapper: "yk4Ix",
        coverImageAndPlayButtonWrapper: "yk4Ix",
        short_info_override: "wpQS6",
        shortInfoOverride: "wpQS6",
        seo_text_override: "t0_Lq",
        seoTextOverride: "t0_Lq",
        cover_image: "h6o53",
        coverImage: "h6o53",
        non_fullscreen: "NaSH_",
        nonFullscreen: "NaSH_",
        play_button_override: "nKHku",
        playButtonOverride: "nKHku",
        portal: "LOjyR",
      }
      let to = (0, eb.default)(tn, [["__cssModules", tl]])
      var td = (0, l.pM)({
        __name: "StorageDebugMessage",
        props: { saveEvent: {} },
        setup(e) {
          let t = (0, el.C)(),
            a = (0, l.KR)(""),
            s = (0, l.KR)()
          return (
            (0, l.wB)(
              () => e.saveEvent,
              (e) => {
                e &&
                  t.isDebugMode &&
                  ((a.value = `YOU ARE IN DEBUG MODE! event: ${e.type} - action: setItems`),
                  s.value && clearTimeout(s.value),
                  (s.value = window.setTimeout(() => {
                    ;((a.value = ""), (s.value = void 0))
                  }, 3e3)))
              },
            ),
            (e, s) =>
              (0, l.R1)(t).isDebugMode && a.value
                ? ((0, l.uX)(),
                  (0, l.Wv)(
                    eg.A,
                    { key: 0, is: "div", size: "m", class: (0, l.C4)(e.$style.storage_message) },
                    { default: (0, l.k6)(() => [(0, l.eW)((0, l.v_)(a.value), 1)]), _: 1 },
                    8,
                    ["class"],
                  ))
                : (0, l.Q3)("", !0)
          )
        },
      })
      let tu = {}
      tu.$style = { storage_message: "NjxOx", storageMessage: "NjxOx" }
      let tc = (0, eb.default)(td, [["__cssModules", tu]])
      var tv = a(25928),
        tp = (0, l.pM)({
          __name: "HorizontalGameExitHeader",
          props: { title: {}, isAdFreeActive: { type: Boolean }, hideBranding: { type: Boolean } },
          emits: ["closeGame", "click", "noAdsClick"],
          setup(e, { emit: t }) {
            let a = (0, el.C)()
            return (s, r) => (
              (0, l.uX)(),
              (0, l.CE)(
                "div",
                {
                  class: (0, l.C4)(s.$style.container),
                  onClick: r[2] || (r[2] = (0, l.D$)((e) => t("click"), ["prevent"])),
                },
                [
                  (0, l.bF)(
                    u.A,
                    {
                      interfaceTarget: "close-game-mobile-button",
                      size: "s",
                      class: (0, l.C4)(s.$style.button_override),
                      onClick: r[0] || (r[0] = (e) => t("closeGame")),
                    },
                    {
                      default: (0, l.k6)(() => [
                        (0, l.Lk)(
                          "div",
                          { class: (0, l.C4)(s.$style.content) },
                          [
                            (0, l.bF)(
                              e5.A,
                              { name: "chevron-left", class: (0, l.C4)(s.$style.icon_override) },
                              null,
                              8,
                              ["class"],
                            ),
                            e.hideBranding
                              ? ((0, l.uX)(),
                                (0, l.Wv)(
                                  eg.A,
                                  { key: 0, type: "label", size: "s", accent: "", responsive: !1 },
                                  {
                                    default: (0, l.k6)(() => [
                                      (0, l.eW)((0, l.v_)(s.$tr("gameContainer.back")), 1),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : ((0, l.uX)(),
                                (0, l.Wv)(
                                  e6.A,
                                  {
                                    key: 1,
                                    mode: "default",
                                    class: (0, l.C4)(s.$style.logo_override),
                                  },
                                  null,
                                  8,
                                  ["class"],
                                )),
                          ],
                          2,
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"],
                  ),
                  (0, l.bF)(
                    eg.A,
                    {
                      type: "label",
                      size: "s",
                      accent: "",
                      responsive: !1,
                      class: (0, l.C4)(s.$style.title),
                    },
                    { default: (0, l.k6)(() => [(0, l.eW)((0, l.v_)(e.title), 1)]), _: 1 },
                    8,
                    ["class"],
                  ),
                  e.isAdFreeActive || e.hideBranding || !(0, l.R1)(a).isPurchaseEnabled
                    ? (0, l.Q3)("", !0)
                    : ((0, l.uX)(),
                      (0, l.Wv)(
                        u.A,
                        {
                          key: 0,
                          color: "carbon-400",
                          interfaceTarget: "no-ads-mobile-button",
                          size: "s",
                          class: (0, l.C4)(s.$style.no_ads_button_override),
                          label: s.$tr("gameContainer.noAds"),
                          onClick: r[1] || (r[1] = (e) => t("noAdsClick")),
                        },
                        null,
                        8,
                        ["class", "label"],
                      )),
                ],
                2,
              )
            )
          },
        })
      let tm = {}
      tm.$style = {
        container: "V2jHr",
        button_override: "jGjck",
        buttonOverride: "jGjck",
        "#": "MQPfe",
        content: "C4j3O",
        icon_override: "KiTeh",
        iconOverride: "KiTeh",
        logo_override: "WOn8f",
        logoOverride: "WOn8f",
        title: "u_O4w",
        no_ads_button_override: "T4RLb",
        noAdsButtonOverride: "T4RLb",
      }
      let tg = (0, eb.default)(tp, [["__cssModules", tm]])
      var th = a(93883),
        ty = a(84603),
        tf = a(11585)
      let tb = ["src"]
      var t_ = (0, l.pM)({
        __name: "LoginPrompt",
        emits: ["close", "login"],
        setup:
          (e, { emit: t }) =>
          (e, a) => (
            (0, l.uX)(),
            (0, l.CE)(
              "div",
              {
                "data-interface-target": "game-login-prompt",
                class: (0, l.C4)(e.$style.container),
              },
              [
                (0, l.bF)(
                  ty.A,
                  {
                    icon: "close",
                    size: "s",
                    color: "white",
                    class: (0, l.C4)(e.$style.close_button_override),
                    interfaceTarget: "login-prompt-close-button",
                    onClick: a[0] || (a[0] = (e) => t("close")),
                  },
                  null,
                  8,
                  ["class"],
                ),
                (0, l.Lk)(
                  "img",
                  { class: (0, l.C4)(e.$style.icon), src: (0, l.R1)(tf), alt: "Save Icon" },
                  null,
                  10,
                  tb,
                ),
                (0, l.bF)(
                  eg.A,
                  {
                    size: "s",
                    type: "paragraph",
                    class: (0, l.C4)(e.$style.label),
                    innerHTML: e.$tr("saveProgressPrompt.label"),
                  },
                  null,
                  8,
                  ["class", "innerHTML"],
                ),
                (0, l.bF)(
                  u.A,
                  {
                    color: "lime",
                    class: (0, l.C4)(e.$style.button_override),
                    interfaceTarget: "login-prompt-login-button",
                    label: e.$tr("saveProgressPrompt.login_button"),
                    onClick: a[1] || (a[1] = (e) => t("login")),
                  },
                  null,
                  8,
                  ["class", "label"],
                ),
              ],
              2,
            )
          ),
      })
      let tw = {}
      tw.$style = {
        container: "q7FVM",
        close_button_override: "ccsa1",
        closeButtonOverride: "ccsa1",
        "#": "PDLEY",
        icon: "CMV12",
        label: "Oe6TP",
        button_override: "U80xE",
        buttonOverride: "U80xE",
      }
      let tA = (0, eb.default)(t_, [["__cssModules", tw]]),
        tk = ["src", "alt"]
      var tS = (0, l.pM)({
        __name: "StickyGameBanner",
        props: { game: {}, categories: {} },
        setup: (e) => (t, a) => (
          (0, l.uX)(),
          (0, l.CE)(
            "div",
            { class: (0, l.C4)(t.$style.sticky_banner) },
            [
              (0, l.Lk)(
                "img",
                { src: e.game.icon, alt: e.game.title, class: (0, l.C4)(t.$style.icon) },
                null,
                10,
                tk,
              ),
              (0, l.Lk)(
                "div",
                { class: (0, l.C4)(t.$style.texts) },
                [
                  (0, l.bF)(
                    eg.A,
                    { type: "label", size: "m", accent: "", class: (0, l.C4)(t.$style.title) },
                    { default: (0, l.k6)(() => [(0, l.eW)((0, l.v_)(e.game.title), 1)]), _: 1 },
                    8,
                    ["class"],
                  ),
                  (0, l.bF)(
                    eg.A,
                    { type: "label", size: "xs", class: (0, l.C4)(t.$style.category) },
                    {
                      default: (0, l.k6)(() => [
                        (0, l.eW)((0, l.v_)(e.categories?.categoriesInfo?.[0]?.title || "-"), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"],
                  ),
                ],
                2,
              ),
            ],
            2,
          )
        ),
      })
      let tM = {}
      tM.$style = {
        sticky_banner: "wwKsv",
        stickyBanner: "wwKsv",
        icon: "wvTAk",
        texts: "Hkyo2",
        title: "qRzt5",
        category: "mCAR2",
        logo: "x9WCM",
      }
      let tC = (0, eb.default)(tS, [["__cssModules", tM]])
      var tE = a(99952),
        tP = (0, l.pM)({
          __name: "StickyWidgetBanner",
          setup(e) {
            let { VUE_APP_HOST_URL: t } = (0, p.U)(),
              a = `${t}?from=widget`
            return (e, t) => (
              (0, l.uX)(),
              (0, l.CE)(
                "div",
                { class: (0, l.C4)(e.$style.sticky_banner) },
                [
                  (0, l.bF)(
                    tE.A,
                    { target: "_blank", externalTo: a },
                    {
                      default: (0, l.k6)(() => [
                        (0, l.bF)(
                          eg.A,
                          {
                            is: "div",
                            type: "caption",
                            size: "s",
                            class: (0, l.C4)(e.$style.logoContainer),
                          },
                          {
                            default: (0, l.k6)(() => [
                              (0, l.eW)((0, l.v_)(e.$tr("widgetGame.powered_by")) + " ", 1),
                              (0, l.bF)(
                                e6.A,
                                { class: (0, l.C4)(e.$style.logo_override), mode: "full" },
                                null,
                                8,
                                ["class"],
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class"],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                ],
                2,
              )
            )
          },
        })
      let tI = {}
      tI.$style = {
        sticky_banner: "mz96z",
        stickyBanner: "mz96z",
        logoContainer: "I505J",
        logo_override: "PtPZG",
        logoOverride: "PtPZG",
        "#": "Kh7Fc",
      }
      let t$ = (0, eb.default)(tP, [["__cssModules", tI]])
      var tR = a(90053),
        tL = (0, l.pM)({
          __name: "VerticalGameExitHeader",
          props: { hideBranding: { type: Boolean } },
          emits: ["closeGame", "click"],
          setup:
            (e, { emit: t }) =>
            (a, s) => (
              (0, l.uX)(),
              (0, l.CE)(
                "div",
                { class: (0, l.C4)(a.$style.container) },
                [
                  (0, l.Lk)(
                    "div",
                    {
                      class: (0, l.C4)(a.$style.clickable_container),
                      onClick: s[1] || (s[1] = (0, l.D$)((e) => t("click"), ["prevent"])),
                    },
                    [
                      (0, l.bF)(tR.A, {
                        interfaceTarget: "close-game-mobile-button",
                        size: "m",
                        color: "carbon-400",
                        icon: "chevron-left",
                        onClick: s[0] || (s[0] = (e) => t("closeGame")),
                      }),
                      e.hideBranding
                        ? (0, l.Q3)("", !0)
                        : ((0, l.uX)(),
                          (0, l.Wv)(
                            e6.A,
                            { key: 0, mode: "default", class: (0, l.C4)(a.$style.logo_override) },
                            null,
                            8,
                            ["class"],
                          )),
                    ],
                    2,
                  ),
                ],
                2,
              )
            ),
        })
      let tT = {}
      tT.$style = {
        container: "bOKbp",
        clickable_container: "hPfrB",
        clickableContainer: "hPfrB",
        logo_override: "Z_ZJZ",
        logoOverride: "Z_ZJZ",
        "#": "TPCUi",
      }
      let tB = (0, eb.default)(tL, [["__cssModules", tT]])
      var tO = a.p + "static/media/open-game-sound.03068ba9.mp3",
        tD = a(80217)
      let tG = ["allow", "title", "src"]
      var tx = (0, l.pM)({
        __name: "ExportGame",
        setup(e) {
          let t,
            a,
            s,
            r,
            i,
            n,
            b,
            _,
            w,
            A = (0, y.Cf)(),
            k = (0, l.KR)(15e3),
            S = (0, d.lq)(),
            M = (0, l.lW)(() => S.params.game),
            C = (0, el.C)(),
            {
              pageStatus: E,
              isExportOnWidget: P,
              isExportOnPortal: I,
              isExportOnWhitelabel: $,
            } = (0, o.bP)(C),
            {
              game: R,
              gameCatInfo: L,
              preloadGameData: T,
              processGameResponse: B,
            } = (0, tD.h)({ hru: M, isExport: !I.value }),
            O = (0, ec.U)(),
            { clidConfig: D } = (0, m.ns)(),
            G = (0, en.N)(),
            { adBlockStatus: x } = (0, o.bP)((0, es.l)()),
            W = (0, ed.G)(),
            H = (0, ep.k)(),
            U = (0, ei.a)(),
            { createCloudSave: z, getCloudSaveApi: K } =
              ((t = (0, f.M1)()),
              (a = (e, a) => {
                let s
                return Promise.race([
                  t.request(e, a),
                  ((s = { originalResponse: void 0, data: null, errors: ["Client timeout"] }),
                  new Promise((e) => setTimeout(() => e(s), 5e3))),
                ])
              }),
              {
                createCloudSave: (e, t, a) => {
                  let { getState: r, setItems: i } = s(e)
                  return async (e) => {
                    let s = (t, a) => ({
                      type: "cloud-save",
                      originalMessageEvent: e,
                      payload: a,
                      action: t,
                    })
                    switch (e.data.action) {
                      case "getCloudSaveState": {
                        let e = await r()
                        if (0 === Object.keys(e).length) {
                          let { getState: a } = F(t)
                          e = await a()
                        }
                        return s("cloudSaveStateResponse", { state: e })
                      }
                      case "setCloudSaveState":
                        a({ type: "cloud-save", action: "setCloudSaveState" })
                        try {
                          let t = await i(e.data.payload)
                          return s("cloudSaveOperationResponse", { success: t })
                        } catch (e) {
                          return (
                            console.error(e),
                            s("cloudSaveOperationResponse", { success: !1, error: e.toString() })
                          )
                        }
                    }
                  }
                },
                getCloudSaveApi: (s = (e) => ({
                  getState: async () => {
                    let t = await a(`/api/v1/cloud-save/games/${encodeURIComponent(e)}/load`)
                    return t?.errors?.length
                      ? (console.error(t.errors), {})
                      : t.data?.saveData || {}
                  },
                  setItems: async (t) => {
                    let s = await a(`/api/v1/cloud-save/games/${encodeURIComponent(e)}/save`, {
                      method: "POST",
                      body: JSON.stringify({ saveData: t }),
                    })
                    return !s.errors?.length
                  },
                })),
              }),
            V = (0, eo.l)(),
            J =
              ((r = (0, ed.G)()),
              (i = (0, l.KR)()),
              (n = (0, l.KR)(0)),
              (b = (0, l.KR)(!1)),
              (_ = (0, l.KR)([
                { thresholdMs: 18e4, fired: !1, eventName: "playgame_3min" },
                { thresholdMs: 3e5, fired: !1, eventName: "playgame_5min" },
                { thresholdMs: 6e5, fired: !1, eventName: "playgame_10min" },
                { thresholdMs: 0, fired: !1, eventName: "game" },
                { thresholdMs: 15e3, fired: !1, eventName: "game_15s" },
                { thresholdMs: 3e4, fired: !1, eventName: "game_30s" },
                { thresholdMs: 6e4, fired: !1, eventName: "game_60s" },
                { thresholdMs: 3e5, fired: !1, eventName: "timespent_ltv" },
                { thresholdMs: 66e4, fired: !1, eventName: "timespent_ltv" },
                { thresholdMs: 108e4, fired: !1, eventName: "timespent_ltv" },
                { thresholdMs: 156e4, fired: !1, eventName: "timespent_ltv" },
                { thresholdMs: 21e5, fired: !1, eventName: "timespent_ltv" },
                { thresholdMs: 3e6, fired: !1, eventName: "timespent_ltv" },
              ])),
              (w = () => {
                if (!document.hidden)
                  for (let e of ((n.value += 1e3), _.value))
                    !e.fired &&
                      n.value >= e.thresholdMs &&
                      ((e.fired = !0),
                      r.logEvent({ event: "custom_event", eventName: e.eventName }))
              }),
              (0, l.hi)(() => {
                clearInterval(i.value)
              }),
              {
                startTimers: () => {
                  b.value ||
                    ((n.value = 0), clearInterval(i.value), (i.value = setInterval(w, 1e3)), w())
                },
              }),
            Z = (0, eu.B)(),
            {
              signedRequest: Y,
              confirmIgpDelivery: ee,
              getIgpPurchases: eg,
              consumeIgpPurchase: eh,
            } = (0, f.M1)(),
            ey = (0, g.q)(),
            { screenOrientation: ef } = (0, o.bP)(V),
            { isAdDisabled: eb, isAdFreeActive: e_ } = (0, o.bP)(U),
            eA = (0, l.KR)(!1),
            ek = (0, l.KR)(""),
            eS = (0, l.KR)(!1),
            eM = (0, l.KR)(!0),
            eC = (0, l.KR)(),
            eE = (0, l.KR)(!1),
            eP = (0, l.KR)(null),
            e$ = (0, l.EW)(() => eN.value && !P.value),
            eR = (0, l.KR)(null),
            eL = (0, l.IJ)(),
            eB = (0, l.KR)(),
            eO = (0, l.KR)(!1),
            eD = (0, l.KR)(!1),
            eG = (0, l.KR)(""),
            eF = (0, l.rk)("game-iframe"),
            eN = (0, l.KR)(!C.isNativeAppEnv && (I.value || !D.value.isInitGameScreenHidden)),
            eU = (0, l.KR)(null),
            ez = (e) => {
              eU.value = e
            },
            { showOffer: eK } = er(),
            eX = (0, l.KR)(),
            eV = async (e) => {
              if (
                !I.value ||
                C.isNativeAppEnv ||
                "rewarded" !== e ||
                "enabled" !== x.value ||
                eb.value
              )
                return { message: "showAd" }
              W.logEvent({ event: "custom_event", eventName: "ad_blocker_offer" })
              try {
                let e = await eK()
                return (
                  W.logEvent({
                    event: "custom_event",
                    eventName: e.completed ? "ad_blocker_offer_success" : "ad_blocker_offer_skip",
                  }),
                  { message: e.completed ? "fakeShowAd" : "showAd" }
                )
              } catch {
                return (
                  W.logEvent({ event: "custom_event", eventName: "ad_blocker_offer_fail" }),
                  { message: "showAd" }
                )
              }
            },
            {
              disabledAdFillerHandler: eq,
              adDisabledHandler: ej,
              isDisabledAdFillerVisible: eQ,
            } = (function (e) {
              let t = (0, l.KR)(),
                { isAdFreeActive: a, isAdDisabled: s } = (0, o.bP)((0, ei.a)()),
                r = (0, l.EW)(() => (a.value ? "ad-free-mode" : "ad-disabled"))
              return {
                disabledAdFillerHandler: function (a) {
                  ;("timer" === a.type && e({ isVisible: !0, secondsLeft: a.secondsLeft }),
                    "stop" === a.type &&
                      (e({ isVisible: !1 }), t.value?.({ reason: r.value }), (t.value = void 0)))
                },
                adDisabledHandler: function (e) {
                  return s.value
                    ? "showRewarded" === e
                      ? new Promise((e) => {
                          t.value = e
                        })
                      : Promise.resolve({ reason: r.value })
                    : null
                },
                isDisabledAdFillerVisible: (0, l.EW)(() => !!t.value),
              }
            })(tu),
            eJ = (0, l.EW)(() =>
              C.isNativeAppEnv && C.clid !== h.Sx.twa
                ? { isPrerollDisabled: !0 }
                : C.clid === h.Sx.twa
                  ? {
                      isPrerollDisabled: !0,
                      isPreloaderDisabled: !0,
                      inGameAdHandlerConfig: { interstitial: { initialDelayInMs: 2e4 } },
                    }
                  : I.value
                    ? { inGameAdHandlerConfig: { interstitial: { timeout: 6e4 } } }
                    : D.value,
            ),
            eY = (0, l.KR)({
              isVisible: !1,
              secondsLeft: 0,
              isAdFreeActive: e_.value,
              debranding: eJ.value.isCustomized,
            }),
            e0 = (0, l.EW)(
              () =>
                "desktop" !== C.platform && R.value && !e$.value && (I.value || P.value || $.value),
            ),
            e1 = (0, l.EW)(() => e0.value && (I.value || $.value)),
            e4 = (0, l.EW)(() => "ios" === C.platform && !C.isAppEnv),
            e3 = (0, l.EW)(() => eY.value.isVisible && (!I.value || "desktop" !== C.platform)),
            e2 = (0, l.EW)(() => {
              let e = []
              if (eS.value) return e
              ;(eD.value && e.push({ type: "swipe" }),
                eA.value && eO.value && e.push({ type: "focus" }))
              let t = [R.value?.vertical && "portrait", R.value?.horizontal && "landscape"].filter(
                Boolean,
              )
              return (
                eA.value &&
                  "desktop" !== C.platform &&
                  R.value?.source !== "playhop" &&
                  1 === t.length &&
                  ef.value &&
                  ef.value !== t[0] &&
                  e.push({ type: "rotate", rotateOrientation: t[0] }),
                e
              )
            }),
            { VUE_APP_GAME_PING_INTERVAL_MS: e8 } = (0, p.U)(),
            e5 = (0, l.KR)(),
            e6 = (0, l.KR)(),
            e9 = (0, l.KR)(),
            e7 = (0, l.KR)(!1),
            te = (0, l.KR)(!1),
            tt = (0, l.KR)([]),
            ta = (0, l.IJ)(),
            ts = (0, l.IJ)(),
            tr = (0, l.IJ)(),
            ti = (0, l.IJ)(),
            tn = (0, l.IJ)(),
            tl = (0, l.IJ)()
          function td() {
            ta.value?.()
          }
          function tu(e) {
            let t = !1
            for (let a in e) eY.value[a] !== e[a] && ((eY.value[a] = e[a]), (t = !0))
            t && tr.value?.(e)
          }
          function tp() {
            tu({ isVisible: !1, secondsLeft: 0, isAdFreeActive: e_.value, podCounter: void 0 })
          }
          function tm() {
            eA.value ||
              ((eA.value = !0),
              J.startTimers(),
              eL.value?.startMidrollTimer(),
              (tn.value = W.startRumEvent({ operationName: "game-loading" })))
          }
          function ty({ data: e }) {
            ;("setOutOfPageAdPlaybackState" === e.type &&
              I.value &&
              G.adService?.setOutOfPageAdPlaybackState(e.play),
              "userChanged" === e.type && I.value && H.setUser(JSON.parse(e.user)),
              "toggleFullscreen" === e.type && I.value && (eM.value = e.isFullscreen),
              "setTabsOpened" === e.type && I.value && (eD.value = e.isTabsOpened))
          }
          function tf() {
            ;((eN.value = !1),
              ts.value?.(),
              (e9.value = Date.now()),
              (e5.value = setInterval(() => {
                if (!document.hidden) {
                  let e
                  ;((e = {
                    event: "custom_event",
                    eventName: "ping",
                    dimension1: eM.value ? "fullscreen" : "minimized",
                  }),
                    eC.value && ((e.adPlacement = eC.value), (eC.value = void 0)),
                    W.logEvent(e),
                    void 0 !== k.value &&
                      ((k.value -= e8),
                      k.value <= 0 && ((k.value = void 0), O.update((0, ev.U)(R.value)))),
                    !te.value &&
                      e9.value &&
                      Date.now() - e9.value >= 6e5 &&
                      !H.isAuthorized &&
                      Z.desktopGameTopBarSessionsShown < 3 &&
                      I.value &&
                      "desktop" === C.platform &&
                      ((e7.value = !0),
                      Z.markGameDesktopTopBarShown(),
                      ey.trigger({
                        id: "game-login-prompt",
                        interface_target: "game-login-prompt",
                      })))
                }
              }, e8)),
              P.value || eJ.value.isPrerollDisabled || eb.value ? tm() : eL.value?.showPreroll())
          }
          function tb() {
            ;(eR.value?.play().catch((e) => {
              ;((eR.value = null), console.error("Failed to play sound:", e))
            }),
              (eN.value = !1),
              tf(),
              W.logEvent({
                event: "custom_event",
                eventName: "export-init-click",
                dimension1: eG.value,
              }))
          }
          function t_() {
            ;((te.value = !0), (e7.value = !1))
          }
          function tw() {
            ;(t_(), H.authorizeUser("save-progress-prompt"))
          }
          return (
            (0, l.sV)(async () => {
              let e
              if ((window.addEventListener("message", ty), 200 !== E.value)) return
              if ((await T(), !R.value)) return void console.error("Error: No game found")
              if (!G.adService)
                return void console.error("Error: No ad service was passed to the main frame")
              G.updateTargeting({
                content_category: R.value.main_category,
                provider: R.value.source || "",
              })
              let t = S.query[ea.Iz] || "",
                a = (0, em.A)(R.value.game_url)
              if (!a) return
              ;(C.clid &&
                !Object.values(h.GV).includes(C.clid) &&
                a.searchParams.set("clid", C.clid),
                t && a.searchParams.set(ea.Iz, t),
                a.hostname.endsWith("games.playgama.com") &&
                  (a.hostname = a.hostname.replace("games.playgama.com", "games.playgama.net")),
                R.value?.source === "playgama" && a.searchParams.set(ea.zM, R.value?.id),
                W.logEvent({ event: "custom_event", eventName: "game_opened" }))
              let { authorizeUser: s, getUser: r, chargeUser: i, cancelCharge: n } = H,
                l = {
                  clid: C.clid,
                  widgetId: C.widgetId,
                  userAcquisitionParams: C.userAcquisitionParams30d,
                }
              if (I.value || P.value || $.value) {
                let e = window.parent.exportApi
                e
                  ? ((s = () =>
                      e.authorizeUser(P.value ? "export-page-widget" : "export-page-portal")),
                    (r = e.getUser),
                    (i = e.chargeUser),
                    (n = e.cancelCharge),
                    (tr.value = e.updateInstreamData),
                    (ta.value = e.closeGame),
                    (ts.value = e.startGame),
                    (l = e.getGameAttributes()),
                    (ti.value = e.openDisabledAdModal),
                    (eM.value = e.isFullscreen()),
                    (eD.value = e.isMobileTabsOpened()),
                    (eG.value = e.getGameOpeningType()))
                  : (s = () => s("export-page"))
              }
              if (
                ($.value &&
                  !ta.value &&
                  (ta.value = () => {
                    window.parent?.postMessage({ playgama_export: { type: "close" } }, "*")
                  }),
                (ek.value = a.href),
                !C.query)
              )
                return void console.error("Error: appStore.query should be defined")
              let o = K(R.value.id),
                d = z(R.value.id, R.value.hru, ez),
                u = ((e, t, a, s) => {
                  let r,
                    i = async () => {
                      if (await t())
                        return (void 0 === r && (r = 0 === Object.keys(await d()).length), r)
                    },
                    { getState: n, setItems: l, deleteKeys: o } = F(e),
                    { getState: d, setItems: u } = a
                  return async (e) => {
                    let t = await i()
                    switch (e.data.action) {
                      case "getState":
                        return {
                          type: "storage",
                          action: "initStorage",
                          originalMessageEvent: e,
                          payload: { state: await n() },
                        }
                      case "setItems":
                        ;(s({ type: "storage", action: "setItems" }),
                          await l(e.data.payload || {}),
                          t && u(await n()))
                        break
                      case "deleteItems": {
                        let a = e.data.payload?.keys || []
                        ;(await o(a), t && u(await n()))
                      }
                    }
                  }
                })(R.value.hru, r, o, ez),
                c = new j.K({
                  queryParams: C.query,
                  gameHRU: R.value.hru,
                  storageMessageHandler: u,
                }),
                v = new Q.c({ queryParams: C.query })
              ;((eX.value = (0, eW.hi)({
                affiliate: !I.value,
                clid: C.clid,
                adConfig: eJ.value,
                getTimeout: (e) => (eb.value ? eW.L6 : (G.adService?.getAdMaxTimeout(e) ?? 0)),
              })),
                (eL.value = new q(G.adService, W.logEvent, {
                  adHandlerConfig: eJ.value.inGameAdHandlerConfig,
                  smartAdsConfig: R.value?.config,
                  adBlockerHandler: eV,
                  adDisabledHandler: ej,
                  adBlockDetected: () => "enabled" === x.value,
                  loader: eX.value,
                })),
                (eB.value = new X({
                  currentLanguage: A.getCurrentLanguage(),
                  additionalPlatformInfo: { clid: C.clid },
                  isPaymentsSupported: C.isPurchaseEnabled,
                  gameAdHandler: eL.value,
                  inGamePaymentsMessageHandler: (
                    ({
                      gameId: e,
                      gameHru: t,
                      gameTitle: a,
                      chargeUser: s,
                      attributes: r,
                      confirmDelivery: i,
                      getPurchases: n,
                      consumePurchase: l,
                    }) =>
                    async (o) => {
                      switch (o.data.action) {
                        case "requestPurchase":
                          try {
                            let e = await s({
                              type: "order",
                              gameHru: t,
                              gameTitle: a,
                              attributes: r,
                              ...o.data.payload,
                            })
                            return N(e, o)
                          } catch (e) {
                            return (
                              console.error("Caught error during purchase request:", e),
                              N({ errors: [e?.toString()], data: null, originalResponse: null }, o)
                            )
                          }
                        case "requestTopup":
                          try {
                            let e = await s({ type: "topup", ...o.data.payload })
                            return {
                              type: "in-game-payments",
                              action: "topupStatus",
                              originalMessageEvent: o,
                              payload: e,
                            }
                          } catch (e) {
                            return N(
                              { errors: [e?.toString()], data: null, originalResponse: null },
                              o,
                            )
                          }
                        case "confirmDelivery":
                          if (i)
                            try {
                              let { orderId: t, externalId: a } = o.data.payload ?? {}
                              await i({ gameId: e, orderId: t, externalId: a })
                            } catch (e) {
                              console.error("Caught error during confirmDelivery:", e)
                            }
                          return {
                            type: "in-game-payments",
                            action: "confirmDeliveryStatus",
                            originalMessageEvent: o,
                            payload: {},
                          }
                        case "getPurchases":
                          try {
                            let t = n ? await n(e) : []
                            return {
                              type: "in-game-payments",
                              action: "purchasesResponse",
                              originalMessageEvent: o,
                              payload: { purchases: t },
                            }
                          } catch (e) {
                            return (
                              console.error("Caught error during getPurchases:", e),
                              {
                                type: "in-game-payments",
                                action: "purchasesResponse",
                                originalMessageEvent: o,
                                payload: { purchases: [] },
                              }
                            )
                          }
                        case "consumePurchase":
                          try {
                            if (l) {
                              let { orderId: t, externalId: a } = o.data.payload ?? {}
                              await l({ gameId: e, orderId: t, externalId: a })
                            }
                            return {
                              type: "in-game-payments",
                              action: "consumePurchaseStatus",
                              originalMessageEvent: o,
                              payload: {},
                            }
                          } catch (e) {
                            return (
                              console.error("Caught error during consumePurchase:", e),
                              {
                                action: "consumePurchaseStatus",
                                originalMessageEvent: o,
                                payload: { error: e?.toString() },
                                type: "in-game-payments",
                              }
                            )
                          }
                        default:
                          return {
                            action: "unknownMessageType",
                            originalMessageEvent: o,
                            payload: { error: `Unknown message action "${o.data.action}"` },
                            type: "error",
                          }
                      }
                    }
                  )({
                    gameId: R.value.id,
                    gameHru: R.value.hru,
                    gameTitle: R.value.title,
                    chargeUser: i,
                    attributes: { ...l },
                    confirmDelivery: ee,
                    getPurchases: eg,
                    consumePurchase: eh,
                  }),
                  storageMessageHandler: u,
                  cloudSaveMessageHandler: d,
                  userService: new et({
                    authorizeUser: s,
                    gameHru: R.value.hru,
                    auid: C.auid || "",
                    signedRequest: Y,
                  }),
                  onLogin: async () => {
                    if (!R.value) return
                    let e = K(R.value.id),
                      t = await e.getState()
                    ;(t && 0 === Object.keys(t).length) ||
                      (n("Game is reloading"), (0, ea.s1)(a), (ek.value = a.href))
                  },
                  onGameStart: () => {
                    ;(eL.value?.refreshInitTime(),
                      W.logEvent({ event: "custom_event", eventName: "game_bridge_loaded" }),
                      tn.value?.({ status: "success", dimension1: R.value?.hru }))
                  },
                  onGameFocusChange: (e) => {
                    eO.value = !e
                  },
                  enableSync: C.isNativeIosEnv,
                })),
                c.listen(eB.value.eventBus),
                v.listen(eB.value.eventBus),
                eL.value.eventBus.addEventListener("setAdvancedBanners", (e) => {
                  tt.value = e.detail
                }),
                eL.value.eventBus.addEventListener("adStateChanged", (e) => {
                  let t = e.detail
                  switch (t.action) {
                    case "start":
                      tl.value = W.startRumEvent({ operationName: "loading-iframe-game-ad" })
                      break
                    case "closed":
                      ;(tp(), "interstitial_preroll" === t.adType && tm())
                      break
                    case "empty":
                      ;((eC.value = t.adType),
                        tp(),
                        tl.value?.({
                          status: "error",
                          dimension1: t.provider,
                          dimension4: t.adType,
                        }),
                        (tl.value = void 0),
                        (eE.value = "interstitial_preroll" !== t.adType),
                        (eP.value = t.adType),
                        "interstitial_preroll" === t.adType && tm())
                      break
                    case "timer":
                      void 0 !== t.secondsLeft &&
                        t.secondsLeft >= 0 &&
                        t.secondsLeft !== eY.value.secondsLeft &&
                        tu({ isVisible: !0, secondsLeft: t.secondsLeft })
                      break
                    case "pod_counter":
                      void 0 !== t.adPosition &&
                        void 0 !== t.totalAds &&
                        tu({
                          isVisible: !0,
                          podCounter: { adPosition: t.adPosition, totalAds: t.totalAds },
                        })
                      break
                    case "opened":
                      ;(tl.value?.({
                        status: "success",
                        dimension1: t.provider,
                        dimension4: t.adType,
                      }),
                        (tl.value = void 0))
                  }
                }),
                e$.value
                  ? (((e = new Audio(tO)).volume = 0.05),
                    e.load(),
                    e.addEventListener(
                      "ended",
                      () => {
                        eR.value = null
                      },
                      { once: !0 },
                    ),
                    (eR.value = e))
                  : tf())
            }),
            (0, l.xo)(() => {
              ;(window.removeEventListener("message", ty),
                eB.value?.destroy(),
                eL.value?.stopMidrollTimer(),
                clearInterval(e5.value || 0),
                clearInterval(e6.value || 0))
            }),
            (0, l.SS)(async () => {
              ;(await T(), B())
            }),
            (e, t) => (
              (0, l.uX)(),
              (0, l.CE)(
                l.FK,
                null,
                [
                  (0, l.bF)(
                    v.A,
                    { hydrate: (0, l.rU)() },
                    {
                      default: (0, l.k6)(() => [
                        (0, l.bF)(
                          tv.A,
                          { noindex: "", game: (0, l.R1)(R), gameCatInfo: (0, l.R1)(L) },
                          null,
                          8,
                          ["game", "gameCatInfo"],
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["hydrate"],
                  ),
                  (0, l.R1)(R)
                    ? ((0, l.uX)(),
                      (0, l.CE)(
                        "div",
                        {
                          key: 0,
                          class: (0, l.C4)([
                            e.$style.export_game,
                            e1.value && e.$style.export_game_with_header,
                            e4.value && e.$style.ios_safari,
                          ]),
                        },
                        [
                          e1.value
                            ? ((0, l.uX)(),
                              (0, l.CE)(
                                l.FK,
                                { key: 0 },
                                [
                                  (0, l.bF)(
                                    tg,
                                    {
                                      class: (0, l.C4)(e.$style.game_header_horizontal_override),
                                      title: (0, l.R1)(R).title,
                                      isAdFreeActive: (0, l.R1)(e_),
                                      hideBranding: (0, l.R1)($),
                                      onCloseGame: td,
                                      onNoAdsClick: ti.value,
                                      onClick: t[0] || (t[0] = (e) => eF.value?.focus()),
                                    },
                                    null,
                                    8,
                                    [
                                      "class",
                                      "title",
                                      "isAdFreeActive",
                                      "hideBranding",
                                      "onNoAdsClick",
                                    ],
                                  ),
                                  (0, l.bF)(
                                    tB,
                                    {
                                      class: (0, l.C4)(e.$style.game_header_vertical_override),
                                      hideBranding: (0, l.R1)($),
                                      onCloseGame: td,
                                      onClick: t[1] || (t[1] = (e) => eF.value?.focus()),
                                    },
                                    null,
                                    8,
                                    ["class", "hideBranding"],
                                  ),
                                ],
                                64,
                              ))
                            : (0, l.Q3)("", !0),
                          e$.value
                            ? ((0, l.uX)(),
                              (0, l.Wv)(
                                to,
                                {
                                  key: 1,
                                  class: (0, l.C4)(e.$style.exportInitScreen_override),
                                  game: (0, l.R1)(R),
                                  categories: (0, l.R1)(L),
                                  isPortal: (0, l.R1)(I),
                                  isFullscreen: eM.value,
                                  onClick: tb,
                                  onOnAdFreeClick: ti.value,
                                  onOnBack: td,
                                },
                                null,
                                8,
                                [
                                  "class",
                                  "game",
                                  "categories",
                                  "isPortal",
                                  "isFullscreen",
                                  "onOnAdFreeClick",
                                ],
                              ))
                            : ((0, l.uX)(),
                              (0, l.CE)(
                                "div",
                                { key: 2, class: (0, l.C4)(e.$style.iframe_wrapper) },
                                [
                                  eA.value
                                    ? ((0, l.uX)(),
                                      (0, l.CE)(
                                        "iframe",
                                        {
                                          key: 0,
                                          ref: "game-iframe",
                                          allow: (0, l.R1)(eW.Cp),
                                          class: (0, l.C4)(e.$style.iframe),
                                          title: (0, l.R1)(R).title,
                                          src: ek.value,
                                        },
                                        null,
                                        10,
                                        tG,
                                      ))
                                    : (0, l.Q3)("", !0),
                                  eA.value
                                    ? (0, l.Q3)("", !0)
                                    : ((0, l.uX)(),
                                      (0, l.CE)(
                                        "div",
                                        { key: 1, class: (0, l.C4)(e.$style.iframe_fallback) },
                                        null,
                                        2,
                                      )),
                                  tt.value.length
                                    ? ((0, l.uX)(),
                                      (0, l.Wv)(
                                        ex,
                                        {
                                          key: 2,
                                          banners: tt.value,
                                          isFullscreen: eM.value,
                                          refreshSec: 90,
                                        },
                                        null,
                                        8,
                                        ["banners", "isFullscreen"],
                                      ))
                                    : (0, l.Q3)("", !0),
                                  (0, l.R1)(eQ)
                                    ? ((0, l.uX)(),
                                      (0, l.Wv)(
                                        eH,
                                        { key: 3, adLoader: eX.value, onMessage: (0, l.R1)(eq) },
                                        null,
                                        8,
                                        ["adLoader", "onMessage"],
                                      ))
                                    : (0, l.Q3)("", !0),
                                ],
                                2,
                              )),
                          e7.value
                            ? ((0, l.uX)(), (0, l.Wv)(tA, { key: 3, onClose: t_, onLogin: tw }))
                            : e2.value.length
                              ? ((0, l.uX)(),
                                (0, l.Wv)(
                                  ew,
                                  {
                                    key: 4,
                                    queue: e2.value,
                                    onClick: t[2] || (t[2] = (e) => eF.value?.focus()),
                                  },
                                  null,
                                  8,
                                  ["queue"],
                                ))
                              : (0, l.Q3)("", !0),
                          e3.value
                            ? ((0, l.uX)(),
                              (0, l.Wv)(
                                th.A,
                                {
                                  key: 5,
                                  class: (0, l.C4)(e.$style.instream_info_override),
                                  secondsLeft: eY.value.secondsLeft,
                                  debranding: eY.value.debranding,
                                  isAdFreeActive: eY.value.isAdFreeActive,
                                  adType: eY.value.adType,
                                  podCounter: eY.value.podCounter,
                                },
                                {
                                  default: (0, l.k6)(() => [
                                    (0, l.R1)(I) &&
                                    !(0, l.R1)(e_) &&
                                    !(0, l.R1)($) &&
                                    (0, l.R1)(C).isPurchaseEnabled
                                      ? ((0, l.uX)(),
                                        (0, l.Wv)(
                                          u.A,
                                          {
                                            key: 0,
                                            color: "lime",
                                            interfaceTarget: "no-ads-button",
                                            class: (0, l.C4)(e.$style.no_ads_button_override),
                                            label: e.$tr("gameContainer.noAds"),
                                            onClick: ti.value,
                                          },
                                          null,
                                          8,
                                          ["class", "label", "onClick"],
                                        ))
                                      : (0, l.Q3)("", !0),
                                  ]),
                                  _: 1,
                                },
                                8,
                                [
                                  "class",
                                  "secondsLeft",
                                  "debranding",
                                  "isAdFreeActive",
                                  "adType",
                                  "podCounter",
                                ],
                              ))
                            : (0, l.Q3)("", !0),
                          e0.value
                            ? ((0, l.uX)(),
                              (0, l.Wv)(
                                eT,
                                {
                                  key: 6,
                                  widgetMode: (0, l.R1)(P),
                                  class: (0, l.C4)([
                                    e.$style.ad_block_override,
                                    (0, l.R1)(P) && e.$style.ad_block_widget_override,
                                  ]),
                                },
                                {
                                  front: (0, l.k6)(() => [
                                    (0, l.R1)(I) || (0, l.R1)($)
                                      ? ((0, l.uX)(),
                                        (0, l.Wv)(
                                          tC,
                                          { key: 0, game: (0, l.R1)(R), categories: (0, l.R1)(L) },
                                          null,
                                          8,
                                          ["game", "categories"],
                                        ))
                                      : ((0, l.uX)(), (0, l.Wv)(t$, { key: 1 })),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["widgetMode", "class"],
                              ))
                            : (0, l.Q3)("", !0),
                          eE.value
                            ? ((0, l.uX)(),
                              (0, l.Wv)(
                                eZ,
                                {
                                  key: 7,
                                  adType: eP.value,
                                  onClose:
                                    t[3] ||
                                    (t[3] = (e) =>
                                      (function (e = !1) {
                                        ;((eE.value = !1),
                                          (eP.value = null),
                                          e && eF.value?.focus())
                                      })(!0)),
                                },
                                null,
                                8,
                                ["adType"],
                              ))
                            : (0, l.Q3)("", !0),
                          (0, l.bF)(eI),
                        ],
                        2,
                      ))
                    : 200 !== (0, l.R1)(E)
                      ? ((0, l.uX)(),
                        (0, l.Wv)(c.A, { key: 1, noRandomGame: "", type: (0, l.R1)(E) }, null, 8, [
                          "type",
                        ]))
                      : (0, l.Q3)("", !0),
                  (0, l.bF)(tc, { saveEvent: eU.value }, null, 8, ["saveEvent"]),
                ],
                64,
              )
            )
          )
        },
      })
      let tW = {}
      tW.$style = {
        export_game: "gTUd0",
        exportGame: "gTUd0",
        export_game_with_header: "vKX2B",
        exportGameWithHeader: "vKX2B",
        exportInitScreen_override: "VUpGy",
        exportInitScreenOverride: "VUpGy",
        "#": "Rw_mp",
        iframe_wrapper: "Gv8aN",
        iframeWrapper: "Gv8aN",
        game_header_horizontal_override: "HkUjT",
        gameHeaderHorizontalOverride: "HkUjT",
        game_header_vertical_override: "NMJI9",
        gameHeaderVerticalOverride: "NMJI9",
        iframe: "BqLvg",
        iframe_fallback: "Lp3nm",
        iframeFallback: "Lp3nm",
        ad_block_override: "VHRAg",
        adBlockOverride: "VHRAg",
        instream_info_override: "kyT5_",
        instreamInfoOverride: "kyT5_",
        no_ads_button_override: "wnhM9",
        noAdsButtonOverride: "wnhM9",
        ios_safari: "BR3cp",
        iosSafari: "BR3cp",
        ad_block_widget_override: "H5ZcT",
        adBlockWidgetOverride: "H5ZcT",
      }
      var tF = (0, eb.default)(tx, [["__cssModules", tW]])
    },
    25928: function (e, t, a) {
      ;(a.d(t, {
        A: function () {
          return A
        },
      }),
        a(17932),
        a(86204),
        a(96466),
        a(52093))
      var s = a(3144),
        r = a(93911),
        i = a(76915),
        n = a(97178),
        l = a(62656),
        o = a(80338),
        d = a(35584),
        u = a(17637),
        c = a(57550),
        v = a(96409),
        p = a(22885),
        m = a(11574),
        g = a(72015),
        h = a(30232),
        y = a(62237)
      class f {
        router
        apiRequests
        static CDN_REGEX = /playgama\.com\/cdn-cgi\/imagedelivery\//
        static CDN_SIZE_REGEX = /\/(thumb|enlarged)$/
        static MANIFEST_COLORS = { background: "#000", theme: "#000" }
        constructor(e, t) {
          ;((this.router = e), (this.apiRequests = t))
        }
        static isCDNImage(e) {
          return f.CDN_REGEX.test(e)
        }
        static removeSizeParam(e) {
          return e.replace(f.CDN_SIZE_REGEX, "/")
        }
        static getScaledImage(e, t, a = t) {
          if (!f.isCDNImage(e)) return e
          let s = f.removeSizeParam(e)
          return `${s}fit=cover,w=${t},h=${a}`
        }
        getRouterPath(e, t, a) {
          let { fullPath: s } = this.router.resolve({ name: e, params: t, query: a })
          return s
        }
        nativeAppManifestAddon = {
          prefer_related_applications: !0,
          related_applications: [{ platform: "play", id: "com.playgama.twa" }],
          screenshots: [
            {
              src: g,
              sizes: "2400x1260",
              form_factor: "wide",
              type: "image/webp",
              label: "Playgama.com cover",
            },
            { src: p, sizes: "512x512", type: "image/png", label: "Playgama.com cover" },
          ],
        }
        convertToNativeManifestIfNeeded(e, t) {
          return "android" === t ? { ...e, ...this.nativeAppManifestAddon } : e
        }
        generateMainManifest(e, t) {
          let a = {
            name: "Playgama.com",
            short_name: "Playgama",
            id: this.getRouterPath(h.V2.MAIN),
            start_url: this.getRouterPath(h.V2.MAIN, void 0, e ? { clid: e } : void 0),
            display: "standalone",
            background_color: f.MANIFEST_COLORS.background,
            theme_color: f.MANIFEST_COLORS.theme,
            icons: [
              { src: m, sizes: "512x512", type: "image/svg+xml", purpose: "maskable" },
              { src: v, sizes: "192x192", type: "image/png", purpose: "any" },
              { src: p, sizes: "512x512", type: "image/png", purpose: "any" },
            ],
            screenshots: [],
          }
          return this.convertToNativeManifestIfNeeded(a, t)
        }
        async generateGameManifest(e, t, a) {
          let s = await this.apiRequests.getGameByParam({
            hru: e,
            locale: "en-US",
            context: "portal",
          })
          if ((0, y.ND)(s)) throw 404
          if ("android" === a) return this.generateMainManifest(t, a)
          let { game: r } = s,
            { title: i, description: n, icon: l } = r,
            o = this.getRouterPath(h.V2.GAME_PAGE, { game: e }, t ? { clid: t } : {}),
            d = this.getRouterPath(h.V2.GAME_PAGE, { game: e })
          return {
            name: `${i} - Playgama.com`,
            short_name: i,
            id: d,
            start_url: o,
            scope: d,
            display: "fullscreen",
            background_color: f.MANIFEST_COLORS.background,
            theme_color: f.MANIFEST_COLORS.theme,
            description: n,
            icons: [
              {
                src: f.getScaledImage(l, 512),
                sizes: "512x512",
                type: "image/webp",
                purpose: "maskable",
              },
              {
                src: f.getScaledImage(l, 384),
                sizes: "384x384",
                type: "image/webp",
                purpose: "maskable",
              },
              {
                src: f.getScaledImage(l, 192),
                sizes: "192x192",
                type: "image/webp",
                purpose: "maskable",
              },
              {
                src: f.getScaledImage(l, 512),
                sizes: "512x512",
                type: "image/webp",
                purpose: "any",
              },
              {
                src: f.getScaledImage(l, 384),
                sizes: "384x384",
                type: "image/webp",
                purpose: "any",
              },
              {
                src: f.getScaledImage(l, 192),
                sizes: "192x192",
                type: "image/webp",
                purpose: "any",
              },
            ],
            screenshots: [],
            categories: ["games", "entertainment"],
            orientation: "any",
            related_applications: [],
            prefer_related_applications: !0,
          }
        }
      }
      var b = a(98777),
        _ = a(59176)
      let w = { "data-head-meta-game": "" }
      var A = (0, s.pM)({
        __name: "HeadMetaGame",
        props: {
          noindex: { type: Boolean },
          breadcrumbs: {},
          game: {},
          gameCatInfo: {},
          prefetchGameURL: {},
        },
        setup(e) {
          let t = (0, s.lW)(() => e.game),
            a = (0, s.lW)(() => e.gameCatInfo),
            v = (0, d.q)(),
            p = (0, i.rd)(),
            { getCanonicalAndAlternates: m } = (0, l.z)(),
            {
              Organization: g,
              WebSite: y,
              WebSiteId: A,
              getInLanguage: k,
              getFullLink: S,
            } = (0, o.Fp)(),
            { currentLocale: M } = (0, c.Cf)(),
            C = (0, s.EW)(() => t.value?.meta.includes("seo_title_experiments")),
            E = (0, s.EW)(() => (0, b.P$)(t.value, v)),
            P = (0, s.EW)(() =>
              C.value ? (0, b.WK)(t.value, v, !0, M.value) : (0, b.Dh)(t.value, v, !0),
            ),
            I = (0, s.EW)(() =>
              C.value ? (0, b.WK)(t.value, v, !1, M.value) : (0, b.Dh)(t.value, v, !1),
            ),
            { VUE_APP_HOST_URL: $ } = (0, n.U)(),
            R = (0, s.EW)(() =>
              [
                t.value?.is_desktop && v("gameContainer.desktop"),
                t.value?.is_android && v("gameContainer.android"),
                t.value?.is_ios && v("gameContainer.ios"),
              ]
                .filter(Boolean)
                .join(", "),
            ),
            L = (0, s.EW)(() => ({
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: e.breadcrumbs?.map((e, t) => ({
                  "@type": "ListItem",
                  position: t + 1,
                  item: { "@type": "Thing", "@id": S(e.href), name: e.title },
                })),
              },
            })),
            T = (0, s.EW)(() => {
              if (!t.value?.createdAt) return
              let e = new Date(t.value.createdAt)
              return (e.setDate(e.getDate() - 1), e.toISOString().slice(0, 10))
            }),
            B = (0, s.EW)(() => {
              if (t.value?.updatedAt) return new Date(t.value.updatedAt).toISOString().slice(0, 10)
            }),
            O = (0, s.EW)(() => {
              let e = (0, _.b3)(t.value?.youtube_video),
                a = t.value?.video_metadata?.[0]?.playgama_id
              if (e)
                return {
                  thumbnail: `https://img.youtube.com/vi/${e}/hqdefault.jpg`,
                  content: `https://www.youtube.com/watch?v=${e}`,
                  embed: `https://www.youtube.com/embed/${e}`,
                }
              if (a) {
                let { url: e } = (0, u.tc)(a, 640)
                return { thumbnail: t.value.preview, content: e, embed: e }
              }
              return null
            }),
            D = (0, s.EW)(() => {
              if (!t.value) return {}
              let s = t.value.title,
                r = `${$}${p.resolve({ name: h.V2.GAME_PAGE, params: { game: t.value.hru } }).fullPath}`,
                i = `${$}${p.resolve({ name: h.V2.GAME_PAGE, params: { game: t.value.hru }, query: { clid: u.P.pwa } }).fullPath}`,
                n = [
                  ...m({ forRoute: { name: h.V2.GAME_PAGE, params: { game: t.value.hru } } }),
                  {
                    rel: "manifest",
                    "data-start_url": i,
                    href: `/manifest/game/${t.value.hru}.webmanifest?clid=${u.P.pwa}`,
                    key: u.od,
                  },
                  {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: f.getScaledImage(t.value.icon, 180, 180),
                    key: "apple-touch-icon",
                  },
                ],
                l = [
                  (function () {
                    if (!t.value) return {}
                    let s = S({ name: h.V2.GAME_PAGE, params: { game: t.value.hru } }),
                      r = `${s}#item`,
                      { title: i } = t.value || {},
                      n = O.value
                        ? {
                            video: {
                              "@type": "VideoObject",
                              name: `${t.value.title} - ${v("seo.gameplay_video")}`,
                              description: E.value,
                              thumbnailUrl: O.value.thumbnail,
                              uploadDate: t.value.updatedAt,
                              contentUrl: O.value.content,
                              embedUrl: O.value.embed,
                            },
                          }
                        : {},
                      l = []
                    ;(t.value.is_desktop && l.push("Desktop"),
                      (t.value.is_android || t.value.is_ios) && l.push("Mobile", "Tablet"))
                    let d = {
                      "@id": `${s}#Game`,
                      name: i,
                      url: s,
                      image: {
                        "@type": "ImageObject",
                        url: t.value.preview,
                        contentUrl: t.value.preview,
                        width: 1920,
                        height: 1080,
                      },
                      applicationSubCategory: a.value
                        ? (0, b.HM)("category", a.value).map((e) => e.title)
                        : [],
                      genre: a.value ? a.value?.categoriesInfo.map((e) => e.title) : [],
                      availableOnDevice: l,
                      operatingSystem: R.value,
                      ...(t.value.developer
                        ? { author: { "@type": "Person", name: t.value.developer } }
                        : {}),
                      ...(t.value.rating
                        ? {
                            aggregateRating: {
                              "@type": "AggregateRating",
                              worstRating: o.aD,
                              bestRating: o.Dm,
                              ratingValue: t.value.rating.value,
                              ratingCount: t.value.rating.count,
                            },
                          }
                        : {}),
                      offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: o.qC,
                        availability: "https://schema.org/InStock",
                      },
                      ...(T.value ? { datePublished: T.value } : {}),
                      ...(B.value ? { dateModified: B.value } : {}),
                      potentialAction: { "@type": "PlayAction", target: s, name: i },
                    }
                    if (C.value) {
                      let a = {
                          "@type": "SoftwareApplication",
                          ...d,
                          applicationCategory: "GameApplication",
                          mainEntityOfPage: { "@id": r },
                        },
                        i = {
                          "@type": "ItemPage",
                          "@id": r,
                          url: s,
                          name: P.value,
                          description: E.value,
                          inLanguage: k(),
                          ...(e.breadcrumbs ? L.value : {}),
                          primaryImageOfPage: {
                            "@type": "ImageObject",
                            url: t.value.preview,
                            contentUrl: t.value.preview,
                            width: 1920,
                            height: 1080,
                          },
                          image: {
                            "@type": "ImageObject",
                            url: t.value.preview,
                            contentUrl: t.value.preview,
                            width: 1920,
                            height: 1080,
                          },
                          ...n,
                          isPartOf: { "@id": A.value },
                          mainEntity: { "@id": `${s}#Game` },
                        }
                      return {
                        type: "application/ld+json",
                        innerHTML: JSON.stringify({
                          "@context": "https://schema.org",
                          "@graph": [g.value, y.value, a, i],
                        }),
                      }
                    }
                    let u = {
                        "@type": ["VideoGame", "WebApplication"],
                        ...d,
                        applicationCategory: "Game",
                        gamePlatform: [
                          "https://schema.org/DesktopWebPlatform",
                          "https://schema.org/MobileWebPlatform",
                          "https://schema.org/AndroidPlatform",
                          "https://schema.org/IOSPlatform",
                        ],
                        mainEntityOfPage: { "@id": r },
                      },
                      c = {
                        "@type": "ItemPage",
                        "@id": r,
                        url: s,
                        name: P.value,
                        description: E.value,
                        inLanguage: k(),
                        ...(e.breadcrumbs ? L.value : {}),
                        primaryImageOfPage: {
                          "@type": "ImageObject",
                          url: t.value.preview,
                          contentUrl: t.value.preview,
                          width: 1920,
                          height: 1080,
                        },
                        image: {
                          "@type": "ImageObject",
                          url: t.value.preview,
                          contentUrl: t.value.preview,
                          width: 1920,
                          height: 1080,
                        },
                        ...n,
                        isPartOf: { "@id": A.value },
                        mainEntity: u,
                      }
                    return {
                      type: "application/ld+json",
                      innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [g.value, y.value, c],
                      }),
                    }
                  })(),
                ]
              e.prefetchGameURL &&
                (l.push({
                  type: "speculationrules",
                  innerHTML: JSON.stringify({
                    prefetch: [{ source: "list", urls: [e.prefetchGameURL] }],
                  }),
                }),
                n.push({
                  rel: "preload",
                  "data-early-hints": !0,
                  as: "image",
                  href: t.value.preview,
                  fetchpriority: "high",
                }))
              let d = t.value.video_metadata?.[0]?.playgama_id,
                c = d ? (0, u.tc)(d, 640) : null
              return {
                title: P.value,
                meta: [
                  { name: "description", content: E.value },
                  { property: "og:type", content: "website" },
                  { property: "og:site_name", content: "Playgama" },
                  { property: "og:title", content: I.value },
                  { property: "og:description", content: E.value },
                  { property: "og:url", content: r },
                  { property: "og:image", content: t.value.preview },
                  { property: "og:image:alt", content: s },
                  ...(c
                    ? [
                        { property: "og:video", content: c.url },
                        { property: "og:video:secure_url", content: c.url },
                        { property: "og:video:type", content: "video/mp4" },
                        { property: "og:video:width", content: `${c.width}` },
                        { property: "og:video:height", content: `${c.height}` },
                      ]
                    : []),
                  { name: "twitter:card", content: "summary_large_image" },
                  { name: "twitter:title", content: I.value },
                  { name: "twitter:description", content: E.value },
                  { name: "twitter:image", content: t.value.preview },
                  { name: "twitter:image:alt", content: s },
                  { name: "apple-mobile-web-app-title", content: t.value.title },
                  { property: "game:platform", content: R.value },
                  e.noindex ? { name: "robots", content: "noindex, follow" } : {},
                ],
                link: n,
                script: l,
              }
            })
          return ((0, r.u)(D), (e, t) => ((0, s.uX)(), (0, s.CE)("div", w)))
        },
      })
    },
    80338: function (e, t, a) {
      a.d(t, {
        Dm: function () {
          return m
        },
        Fp: function () {
          return g
        },
        aD: function () {
          return p
        },
        qC: function () {
          return v
        },
      })
      var s = a(3144),
        r = a(76915),
        i = a(11574),
        n = a(99561),
        l = a(57550),
        o = a(30232),
        d = a(29023),
        u = a(97178),
        c = a(35584)
      let v = "USD",
        p = 1,
        m = 5
      function g() {
        let e = (0, r.rd)(),
          t = (0, c.q)(),
          { currentLocale: a } = (0, l.Cf)(),
          { VUE_APP_ANDROID_APP_URL: v } = (0, u.U)(),
          p = (0, s.EW)(() => g({ name: o.V2.MAIN })),
          m = (0, s.EW)(() => `${p.value}#website`)
        function g(t) {
          return "string" == typeof t
            ? `https://playgama.com${t}`
            : `https://playgama.com${e.resolve(t).fullPath}`
        }
        function h(e) {
          return (0, n.vg)(e || a.value)
        }
        let y = (0, s.EW)(() => ({
          "@type": "Organization",
          "@id": "https://playgama.com/#organization",
          name: "Playgama",
          legalName: "LeadToChanges L.L.C.-FZ",
          alternateName: "Playgama",
          url: "https://playgama.com",
          brand: {
            "@type": "Brand",
            "@id": "https://playgama.com/#brand",
            name: "Playgama",
            slogan: "Play, Share, Profit. Game on!",
          },
          image: `https://playgama.com${i}`,
          logo: { "@type": "ImageObject", url: `https://playgama.com${i}` },
          email: "support@playgama.com",
          vatID: "104378095400003",
          identifier: { "@type": "PropertyValue", propertyID: "DUNS", value: "850036975" },
          sameAs: [...d.l1, v],
          address: {
            "@type": "PostalAddress",
            postalCode: "500001",
            addressLocality: "Dubai",
            streetAddress: "Nad Al Sheba",
            addressCountry: { "@type": "Country", name: "AE" },
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "User Feedback",
            url: g({ name: o.V2.CONTACTS }),
            email: "support@playgama.com",
          },
          founder: [
            {
              "@type": "Person",
              name: "Dmitry Kachmar",
              jobTitle: "Founder",
              sameAs: ["https://www.linkedin.com/in/dmitry-kachmar-84392725/"],
            },
          ],
          description:
            "Playgama is a fast-growing platform that connects HTML5 game developers with a global audience of over 300 million monthly players. Whether you’re looking to publish, monetize, or scale your game, Playgama gives you the tools and exposure to make it happen.",
        }))
        return {
          WebSite: (0, s.EW)(() => ({
            "@type": "WebSite",
            "@id": m.value,
            name: "Playgama",
            url: p.value,
            description: t("headMeta.description"),
            inLanguage: h(),
            hasPart: [
              {
                "@type": "MobileApplication",
                "@id": `${v}#mobileapp`,
                downloadUrl: v,
                installUrl: v,
                name: "Playgama",
                applicationCategory: "GameApplication",
                operatingSystem: "Android",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              },
            ],
            publisher: { "@id": "https://playgama.com/#organization" },
          })),
          WebSiteId: m,
          Organization: y,
          getFullLink: g,
          getInLanguage: h,
        }
      }
    },
  },
])
//# sourceMappingURL=3172.1cb5860c.js.map
