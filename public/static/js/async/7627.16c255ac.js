"use strict"
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["7627"],
  {
    14063: function (e, t, i) {
      i.d(t, {
        X: function () {
          return a
        },
      })
      var r = i(59176)
      function a(e) {
        let t,
          i = Math.round(0x81bf1000 * (0, r.yT)()),
          a = {
            container: `t${(i + 1).toString(36)}`,
            topBar: `t${(i + 2).toString(36)}`,
            closeButton: `t${(i + 3).toString(36)}`,
          },
          n = document.createElement("div"),
          s = n.attachShadow({ mode: "closed" }),
          o = document.createElement("style")
        o.textContent = `
        :host {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.9);
            z-index: 2147483647;
            opacity: 0;
            pointer-events: none;
            height: 100%;
        }

        .${a.container} {
            position: relative;
            max-width: 100%;
            max-height: 100%;
        }

        .${a.topBar} {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-bottom: 8px;
        }

        .${a.closeButton} {
            display: flex;
            height: 32px;
            justify-content: center;
            align-items: center;
            border-radius: 24px;
            background: rgba(41, 41, 46, 0.88);
            backdrop-filter: blur(8px);
            cursor: pointer;
            padding: 9px 12px;
            gap: 6px;
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            border: none;
        }
    `
        let d = document.createElement("div")
        d.className = a.container
        let l = document.createElement("div")
        l.className = a.topBar
        let h = document.createElement("button")
        ;((h.className = a.closeButton), (h.disabled = !0), l.appendChild(h))
        let c = document.createElement("div")
        ;((c.id = e),
          d.appendChild(l),
          d.appendChild(c),
          s.appendChild(o),
          s.appendChild(d),
          document.body.appendChild(n))
        let p = 5
        function u() {
          p > 0
            ? (h.textContent = `Close Ad in ${p}`)
            : ((h.textContent = "Close Ad"),
              (h.disabled = !1),
              (h.style.background = "#fff"),
              (h.style.color = "#000"))
        }
        function g() {
          window.clearInterval(t)
        }
        return {
          wrapper: n,
          adSlot: c,
          stopCountdown: g,
          setOnClose: function (e) {
            h.addEventListener("click", e)
          },
          show: function (e) {
            ;((n.style.opacity = "1"),
              (n.style.pointerEvents = "auto"),
              u(),
              e(p),
              (t = window.setInterval(() => {
                ;(p--, u(), e(p), p <= 0 && g())
              }, 1e3)))
          },
        }
      }
    },
    47280: function (e, t, i) {
      ;(i.r(t),
        i.d(t, {
          DirectAdsProvider: function () {
            return f
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
        i(70482),
        i(17932),
        i(86204),
        i(88042),
        i(11546),
        i(76429),
        i(19329))
      var r = i(22843),
        a = i(59176),
        n = i(50510)
      function s(e) {
        e && fetch(e, { method: "GET", mode: "no-cors" }).catch(() => {})
      }
      async function o(e, t) {
        var i
        let r = t.width || 300,
          a = t.height || 300,
          n =
            await ((i = `https://playgama.com/cdn-cgi/imagedelivery/LN2S-4p3-GgZvEx3IPaKUA/${t.file}/enlarged`),
            new Promise((e, t) => {
              let n = new Image(r, a)
              ;((n.onload = () => e(n)),
                (n.onerror = () => t(Error(`Failed to load image from ${i}`))),
                (n.src = i))
            }))
        return (
          (n.id = e),
          t.responsive &&
            ((n.style.width = "80vw"),
            (n.style.maxWidth = "650px"),
            (n.style.aspectRatio = "16 / 9"),
            (n.style.objectFit = "cover"),
            (n.style.height = "auto"),
            (n.style.display = "block")),
          n
        )
      }
      function d(e) {
        for (let t of Array.from(e.attributes))
          "id" !== t.name && "class" !== t.name && e.removeAttribute(t.name)
      }
      class l {
        getAdUnit
        sendRequest
        getCreative
        updateCampaigns
        intersectionObserver
        mutationObserver
        adTrackingData = new Map()
        provider
        constructor({
          getAdUnit: e,
          sendRequest: t,
          getCreative: i,
          updateCampaigns: r,
          provider: a,
        }) {
          ;((this.getAdUnit = e),
            (this.sendRequest = t),
            (this.getCreative = i),
            (this.updateCampaigns = r),
            (this.provider = a),
            (this.intersectionObserver = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  if (e.isIntersecting) {
                    let t = e.target.id,
                      i = this.adTrackingData.get(t)
                    i &&
                      (i.banner.triggerViewable(),
                      this.sendRequest(i.creative.impressionTrackingUrl),
                      this.intersectionObserver.unobserve(e.target),
                      this.adTrackingData.delete(t))
                  }
                })
              },
              { threshold: 0.5, rootMargin: "0px" },
            )),
            (this.mutationObserver = new MutationObserver((e) => {
              for (let t of e) "attributes" === t.type && d(t.target)
            })))
        }
        async processAd({ banner: e, options: { el: t, type: i, sizes: r }, link: a, adId: n }) {
          e.triggerRequest()
          let s = document.getElementById(t),
            l = this.getCreative(i, { sizes: r })
          if (!s) return void e.triggerEmpty("element not found")
          if (!l) return void e.triggerEmpty("unfilled")
          if (!l.clickUrl || "banner" !== l.format) return void e.triggerEmpty("invalid creative")
          ;(s.replaceChildren(),
            d(s),
            this.mutationObserver.observe(s, { attributes: !0 }),
            this.adTrackingData.set(n, { creative: l, type: i, banner: e }),
            (a.style.display = "flex"),
            (a.style.justifyContent = "center"),
            (a.href = `/redirect.html?url=${encodeURIComponent(l.clickUrl)}`),
            (a.target = "_blank"),
            a.addEventListener("click", () => {
              e.triggerClicked()
            }))
          let h = await o(n, l)
          ;(this.intersectionObserver.observe(h),
            a.appendChild(h),
            s.appendChild(a),
            e.triggerShowing())
        }
        requestAd(e) {
          let { type: t } = e,
            i = crypto.randomUUID(),
            r = document.createElement("a"),
            a = new n.O({
              provider: this.provider,
              adUnit: this.getAdUnit(t),
              placement: t,
              destroy: () => {
                this.removeBanner(r, i)
              },
            })
          return (
            Promise.resolve().then(() => {
              this.processAd({ banner: a, options: e, link: r, adId: i })
            }),
            a
          )
        }
        removeBanner(e, t) {
          let i = this.adTrackingData.get(t)
          ;(this.updateCampaigns(i?.creative), this.adTrackingData.delete(t), e.remove())
        }
      }
      var h = i(17637),
        c = i(8254),
        p = i(75105),
        u = i(14063)
      let g = {
        "en-US": { skip: "Skip", learnMore: "Learn More" },
        "de-DE": { skip: "Werbung", learnMore: "Mehr erfahren" },
        "es-ES": { skip: "Saltar", learnMore: "Saber m\xe1s" },
        "fr-FR": { skip: "Passer", learnMore: "En savoir plus" },
        "id-ID": { skip: "Lewati", learnMore: "Pelajari lebih lanjut" },
        "it-IT": { skip: "Salta", learnMore: "Scopri di pi\xf9" },
        "pl-PL": { skip: "Pomiń", learnMore: "Dowiedz się więcej" },
        "pt-BR": { skip: "Pular", learnMore: "Saiba mais" },
        "tr-TR": { skip: "Reklamı", learnMore: "Daha fazla \xf6ğren" },
      }
      var m = i.p + "static/media/sample-video.a6694a8e.webm"
      class v {
        ready
        getAdUnit
        sendRequest
        getCreative
        locale
        provider
        timeout
        wrapperControls
        videoWrapper
        videoPlayer
        skipButton
        learnMoreButton
        sampleVideoSrc
        adSettings
        learnMoreClickHandler
        videoClickHandler
        isMuted = !1
        shakaPlayerRef = null
        initTime = 0
        lastShownTime = 0
        activeBannerInfo
        currentOrientation = void 0
        constructor({
          getAdUnit: e,
          sendRequest: t,
          getCreative: i,
          locale: r,
          provider: a,
          settings: n,
          timeout: s,
        }) {
          ;((this.getAdUnit = e),
            (this.sendRequest = t),
            (this.getCreative = i),
            (this.adSettings = n),
            (this.locale = g[r] ? r : "en-US"),
            (this.provider = a),
            (this.timeout = Math.max(s - 1e3, 3e3)),
            (this.initTime = Date.now()),
            screen.orientation &&
              ((this.currentOrientation = (0, c.u)(screen.orientation.type)),
              screen.orientation.addEventListener("change", this.onOrientationChange.bind(this))))
        }
        onOrientationChange() {
          var e
          if (
            ((this.currentOrientation = (0, c.u)(screen.orientation?.type)), !this.activeBannerInfo)
          )
            return
          let { banner: t, creative: i } = this.activeBannerInfo
          ;((e = this.currentOrientation),
            !i.supportedOrientations ||
              (0, r.Ul)() ||
              i.supportedOrientations.includes(e) ||
              ("showing" === t.state ? t.triggerClosed() : t.triggerEmpty("invalid orientation")))
        }
        async loadShakaPlayer() {
          if ("" === this.videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
            let e = await i.e("5492").then(i.t.bind(i, 495, 23))
            this.shakaPlayerRef = new e.Player()
          }
        }
        async playVideo(e, t) {
          try {
            ;((this.skipButton.disabled = !0),
              (this.skipButton.textContent = g[this.locale].skip),
              (this.skipButton.style.display = t.skippable ? "block" : "none"),
              (this.learnMoreButton.style.display = t.clickUrl ? "block" : "none"),
              (this.videoWrapper.style.opacity = "1"),
              (this.videoWrapper.style.pointerEvents = "auto"),
              (this.videoWrapper.style.zIndex = "2147483647"),
              (this.learnMoreClickHandler = () => {
                ;(this.videoPlayer.pause(),
                  this.wrapperControls.switchOverlayVisibility(!0),
                  e.triggerClicked(),
                  t.clickUrl &&
                    window.open(`/redirect.html?url=${encodeURIComponent(t.clickUrl)}`, "_blank"))
              }),
              this.learnMoreButton.addEventListener("click", this.learnMoreClickHandler),
              (this.videoClickHandler = () => {
                ;(this.videoPlayer.pause(), this.wrapperControls.switchOverlayVisibility(!0))
              }),
              this.videoPlayer.addEventListener("click", this.videoClickHandler),
              await this.videoPlayer.play(),
              e.triggerViewable(),
              (this.lastShownTime = Date.now()),
              this.sendRequest(t.impressionTrackingUrl),
              this.videoPlayer.addEventListener("ended", () => {
                t.shouldHold || this.endAd(e)
              }))
            let i = !1
            this.videoPlayer.addEventListener("timeupdate", () => {
              i || (this.wrapperControls.switchOverlayVisibility(!1), (i = !0))
              let { currentTime: r } = this.videoPlayer,
                a = Math.round(5 - r)
              ;(e.triggerTimer(Math.round(this.videoPlayer.duration - r)),
                t.skippable &&
                  a <= 0 &&
                  ((this.skipButton.disabled = !1),
                  this.skipButton.addEventListener("click", () => {
                    this.endAd(e)
                  })))
            })
          } catch (i) {
            let t = i instanceof Error ? i.message : String(i)
            e.triggerEmpty(`error: ${t}`)
          }
        }
        async loadVideo(e) {
          var t
          let r = ((t = e.file), `${h.l}${t}/manifest`)
          if ("" !== this.videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
            ;((this.videoPlayer.src = `${r}/video.m3u8`), this.videoPlayer.load())
            return
          }
          let a = await i.e("5492").then(i.t.bind(i, 495, 23))
          ;((this.shakaPlayerRef = new a.Player()),
            this.shakaPlayerRef.configure({
              abr: { restrictToElementSize: !0 },
              manifest: { disableAudio: this.isMuted },
              streaming: { bufferingGoal: 3 },
            }),
            this.shakaPlayerRef.attach(this.videoPlayer))
          try {
            await this.shakaPlayerRef.load(`${r}/video.mpd`, 0, "application/dash+xml")
          } catch {}
        }
        async resetPlayer() {
          try {
            ;(await this.shakaPlayerRef?.destroy(), (this.shakaPlayerRef = null))
          } catch {}
          if (!this.videoPlayer.querySelector("source")) {
            let e = document.createElement("source")
            ;((e.src = this.sampleVideoSrc), this.videoPlayer.appendChild(e))
          }
          ;((this.videoPlayer.src = ""),
            this.videoPlayer.load(),
            setTimeout(() => {
              this.videoPlayer.removeAttribute("src")
            }, 1e3))
        }
        endAd(e) {
          ;((e.watchedDuration = Math.round(this.videoPlayer.currentTime)),
            (e.instreamDuration = Math.round(this.videoPlayer.duration)),
            this.videoWrapper.style.removeProperty("opacity"),
            this.videoWrapper.style.removeProperty("pointer-events"),
            this.videoWrapper.style.removeProperty("z-index"),
            this.learnMoreClickHandler &&
              (this.learnMoreButton.removeEventListener("click", this.learnMoreClickHandler),
              (this.learnMoreClickHandler = void 0)),
            this.videoClickHandler &&
              (this.videoPlayer.removeEventListener("click", this.videoClickHandler),
              (this.videoClickHandler = void 0)),
            this.resetPlayer(),
            "rewarded" === e.placement && e.triggerRewarded({}),
            e.triggerClosed())
        }
        requestAd(e) {
          let t = new p.p({ provider: this.provider, adUnit: this.getAdUnit(e), placement: e })
          return (
            Promise.resolve()
              .then(() => {
                if (!this.hasValidAdDisplayConditions())
                  return void t.triggerEmpty("no valid ad display conditions")
                let i = this.getCreative(e, { orientation: this.currentOrientation })
                i
                  ? "banner" === i.format
                    ? this.requestBannerAd(t, i)
                    : this.requestVideoAd(t, i)
                  : t.triggerEmpty("no creative")
              })
              .catch((e) => {
                let i = e instanceof Error ? e.message : String(e)
                t.triggerEmpty(`error: ${i}`)
              }),
            t
          )
        }
        async requestVideoAd(e, t) {
          ;(this.ready || this.preloadVideoBanner(),
            (e.destroy = () => {
              this.activeBannerInfo = void 0
            }),
            (this.activeBannerInfo = { banner: e, creative: t }))
          let i = await this.checkAutoplaySupport()
          if (
            (e.triggerRequest(),
            await this.loadVideo(t),
            "muted" === i &&
              ((this.videoPlayer.muted = !0), this.videoPlayer.setAttribute("muted", "1")),
            "no" === i)
          ) {
            ;(this.wrapperControls.switchOverlayVisibility(!0),
              this.wrapperControls.setContinueAdHandler(async () => {
                await this.playVideo(e, t)
              }))
            return
          }
          ;(this.wrapperControls.setContinueAdHandler(async () => {
            ;(this.wrapperControls.switchOverlayVisibility(!1), await this.videoPlayer.play())
          }),
            window.setTimeout(() => {
              e.triggerReady(
                async () => {
                  await this.playVideo(e, t)
                },
                (e) => {
                  e ? this.videoPlayer.play() : this.videoPlayer.pause()
                },
              )
            }, this.timeout))
        }
        async checkAutoplaySupport() {
          ;(this.videoPlayer.load(),
            (this.videoPlayer.volume = 1),
            (this.isMuted = !1),
            this.videoPlayer.removeAttribute("muted"))
          try {
            return (await this.videoPlayer.play(), this.videoPlayer.pause(), "full")
          } catch {
            return this.checkMutedAutoplaySupport()
          }
        }
        async checkMutedAutoplaySupport() {
          ;((this.videoPlayer.volume = 0), (this.videoPlayer.muted = !0))
          try {
            return (
              await this.videoPlayer.play(),
              this.videoPlayer.pause(),
              (this.isMuted = !0),
              this.videoPlayer.setAttribute("muted", "1"),
              "muted"
            )
          } catch {
            return "no"
          }
        }
        preloadVideoBanner() {
          try {
            let {
              wrapper: e,
              player: t,
              skipButton: i,
              learnMoreButton: r,
              controls: a,
            } = (function ({ locale: e }) {
              let t = document.createElement("div"),
                i = t.attachShadow({ mode: "closed" }),
                r = document.createElement("style")
              r.textContent = `
        :host {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
        }

        .banner {
            height: 100%;
            position: relative;
        }

        .player {
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: #000;
        }

        .skip_button,
        .learn_more_button {
            display: none;
            font-family: inherit;
            position: absolute;
            z-index: 10;
            right: 8px;
            padding: 16px;
            border-radius: 1000px;
            cursor: pointer;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            border: none;
        }

        .skip_button:disabled,
        .learn_more_button:disabled {
            cursor: default;
            background-color: rgba(41, 41, 46, 0.88);
            color: rgba(255, 255, 255, 0.4);
        }

        .skip_button {
            bottom: 40px;
            background-color: white;
            color: black;
        }

        .learn_more_button {
            top: 40px;
            color: #fff;
            background-color: rgba(41, 41, 46, 0.88);
        }

        .learn_more_button:not(:disabled):hover {
            background-color: #fff;
            color: #000;
        }

        .skip_button:not(:disabled):hover {
            background-color: #c0ff47;
            color: #000;
        }

        .overlay {
            display: none;
            z-index: 5;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.4);
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            align-items: center;
            justify-content: center;
        }

        .overlay.visible {
            display: flex;
        }

        .overlay::after {
            content: '▶';
            font-size: 48px;
            color: #fff;
        }
    `
              let a = document.createElement("div")
              a.className = "banner"
              let n = document.createElement("video")
              ;(n.setAttribute("playsinline", ""),
                n.setAttribute("webkit-playsinline", "true"),
                (n.className = "player"))
              let s = document.createElement("source")
              ;((s.src = String(m)), n.appendChild(s))
              let o = document.createElement("button")
              o.className = "skip_button"
              let d = document.createElement("button")
              ;((d.className = "learn_more_button"), (d.textContent = g[e].learnMore))
              let l = document.createElement("div")
              ;((l.className = "overlay"),
                a.appendChild(n),
                a.appendChild(o),
                a.appendChild(d),
                i.appendChild(r),
                i.appendChild(a),
                i.appendChild(l))
              let h = () => {}
              return (
                l.addEventListener("click", () => {
                  h()
                }),
                {
                  wrapper: t,
                  player: n,
                  skipButton: o,
                  learnMoreButton: d,
                  controls: {
                    switchOverlayVisibility: (e) => {
                      l.classList.toggle("visible", e)
                    },
                    setContinueAdHandler: (e) => {
                      h = e
                    },
                  },
                }
              )
            })({ locale: this.locale })
            ;(document.body.insertAdjacentElement("beforeend", e),
              (this.wrapperControls = a),
              (this.videoWrapper = e),
              (this.videoPlayer = t),
              (this.skipButton = i),
              (this.learnMoreButton = r))
          } catch (e) {
            throw Error(`Cannot create the instream wrapper app due to error: ${e}`)
          }
          ;((this.sampleVideoSrc = this.videoPlayer.querySelector("source")?.src || ""),
            (this.ready = this.loadShakaPlayer()))
        }
        async requestBannerAd(e, t) {
          let i = crypto.randomUUID(),
            { wrapper: r, adSlot: n, stopCountdown: s, setOnClose: d, show: l } = (0, u.X)(i)
          e.destroy = () => {
            ;((this.activeBannerInfo = void 0), s(), r.remove())
          }
          let h = await o(i, t)
          if (t.clickUrl) {
            let i = document.createElement("a")
            ;((i.href = `/redirect.html?url=${encodeURIComponent(t.clickUrl)}`),
              (i.target = "_blank"),
              i.addEventListener("click", () => {
                e.triggerClicked()
              }),
              i.appendChild(h),
              n.appendChild(i))
          } else n.appendChild(h)
          ;((this.activeBannerInfo = { banner: e, creative: t }),
            e.triggerRequest(),
            d(() => {
              ;("rewarded" === e.placement && e.triggerRewarded({}), e.triggerClosed())
            }),
            e.triggerReady(() => {
              l((t) => {
                e.triggerTimer(t)
              })
            }),
            (0, a.O1)(100).then(() => {
              ;((this.lastShownTime = Date.now()), e.triggerViewable())
            }))
        }
        hasValidAdDisplayConditions() {
          if (!this.adSettings) return !0
          let e = this.adSettings?.initialDelayMs || 0,
            t = this.adSettings?.intervalsMs || 0,
            i = Date.now()
          return i - this.initTime >= e && i - this.lastShownTime >= t
        }
      }
      let y = [
        "interstitial",
        "interstitial_preroll",
        "rewarded",
        "interstitial_midroll",
        "interstitial_on_return",
      ]
      class f {
        serviceStatus
        adCustomBanner
        outOfPageCustomBanner
        targeting = {}
        platform
        data = null
        roundRobinIndexes = new Map()
        currentCampaignIds = []
        type = "directProvider"
        timeout
        initErrorMessage
        constructor({
          targeting: e,
          platform: t,
          locale: i,
          adUnitConfig: r,
          adSettings: a,
          timeout: n = 3e3,
        }) {
          ;((this.timeout = n),
            (this.targeting = { ...e }),
            (this.platform = t),
            (this.data = r),
            (this.adCustomBanner = new l({
              getAdUnit: this.getAdUnit.bind(this),
              sendRequest: s,
              updateCampaigns: this.updateCampaigns.bind(this),
              getCreative: this.getCreative.bind(this),
              provider: "directProvider",
            })),
            (this.outOfPageCustomBanner = new v({
              getAdUnit: this.getAdUnit.bind(this),
              sendRequest: s,
              getCreative: this.getCreative.bind(this),
              locale: i,
              timeout: n,
              settings: a,
              provider: "directProvider",
            })),
            (this.serviceStatus = Promise.resolve("online")))
        }
        getCreative(e, t) {
          if (!this.data) return null
          let { sizes: i, orientation: n } = t || {},
            s = y.includes(e),
            o = this.data
              .filter((e) => s || !this.currentCampaignIds?.includes(e.campaignId))
              .filter((e) => e.platforms.includes(this.platform))
              .flatMap((e) => e.creatives)
              .filter(
                (e) =>
                  !e.name || (e.name !== this.targeting.hru && e.name !== this.targeting.gameId),
              )
              .filter((t) => t.adUnits.includes(e))
          if (
            (n && !(0, r.Ul)() && (o = o.filter((e) => e.supportedOrientations?.includes(n) ?? !0)),
            i?.length &&
              (o = o.filter(
                (e) =>
                  !e.width || !e.height || i.some((t) => e.width === t[0] && e.height === t[1]),
              )),
            0 === o.length)
          )
            return null
          let d = s ? `${this.platform}` : `${this.platform}_${e}`,
            l = this.roundRobinIndexes.get(d) ?? Math.floor((0, a.yT)() * o.length),
            h = (l + 1) % o.length
          this.roundRobinIndexes.set(d, h)
          let c = this.data?.find((e) => e.creatives.some((e) => e.file === o[l]?.file))?.campaignId
          return (c && (this.currentCampaignIds = [...this.currentCampaignIds, c]), o[l] || null)
        }
        getAdUnit(e, t) {
          if (t?.file) {
            let i = this.data?.find((e) => e.creatives.some((e) => e.file === t.file))?.campaignId
            if (i) return `${this.platform}-${e}-${i}-${t.file}`
          }
          return `${this.platform}-${e}`
        }
        updateCampaigns(e) {
          if (e?.file) {
            let t = this.data?.find((t) => t.creatives.some((t) => t.file === e.file))?.campaignId
            t && (this.currentCampaignIds = this.currentCampaignIds.filter((e) => e !== t))
          }
        }
        prepareOutOfPageAd(e) {
          return this.outOfPageCustomBanner.requestAd(e)
        }
        requestPageAd(e) {
          return this.adCustomBanner.requestAd(e)
        }
        updateTargeting(e = {}) {
          Object.entries(e).forEach(([e, t]) => {
            t ? (this.targeting[e] = t) : this.targeting[e] && delete this.targeting[e]
          })
        }
        getAdUnitByType(e) {
          return this.getAdUnit(e)
        }
      }
    },
    75105: function (e, t, i) {
      i.d(t, {
        I: function () {
          return n
        },
        p: function () {
          return s
        },
      })
      var r,
        a = i(11841),
        n =
          (((r = {}).loading = "loading"),
          (r.empty = "empty"),
          (r.ready = "ready"),
          (r.showing = "showing"),
          (r.closed = "closed"),
          r)
      class s extends EventTarget {
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
            (this.adConsoleLogger = new a.d("internal-banner", `${e.provider}:${e.placement}`)),
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
          return a
        },
      })
      var r = i(11841)
      class a extends EventTarget {
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
            (this.adConsoleLogger = new r.d("internal-banner", `${e.provider}:${e.placement}`)),
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
    46403: function (e, t, i) {
      var r = i(92086),
        a = i(93228),
        n = i(19464),
        s = i(10892)
      e.exports = function (e, t) {
        ;(t && "string" == typeof e) || a(e)
        var i = s(e)
        return n(a(void 0 !== i ? r(i, e) : e))
      }
    },
    88042: function (e, t, i) {
      var r = i(52439),
        a = i(92086),
        n = i(91395),
        s = i(93228),
        o = i(19464),
        d = i(46403),
        l = i(8869),
        h = i(91782),
        c = i(38572),
        p = i(86561),
        u = i(23756),
        g = !c && !p("flatMap", function () {}),
        m = !c && !g && u("flatMap", TypeError),
        v = c || g || m,
        y = l(function () {
          for (var e, t, i = this.iterator, r = this.mapper; ; ) {
            if ((t = this.inner))
              try {
                if (!(e = s(a(t.next, t.iterator))).done) return e.value
                this.inner = null
              } catch (e) {
                h(i, "throw", e)
              }
            if (((e = s(a(this.next, i))), (this.done = !!e.done))) return
            try {
              this.inner = d(r(e.value, this.counter++), !1)
            } catch (e) {
              h(i, "throw", e)
            }
          }
        })
      r(
        { target: "Iterator", proto: !0, real: !0, forced: v },
        {
          flatMap: function (e) {
            s(this)
            try {
              n(e)
            } catch (e) {
              h(this, "throw", e)
            }
            return m ? a(m, this, e) : new y(o(this), { mapper: e, inner: null })
          },
        },
      )
    },
  },
])
//# sourceMappingURL=7627.16c255ac.js.map
