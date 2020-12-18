! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(i, o, function(e) {
                return t[e]
            }.bind(null, o));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 15)
}([function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(2),
        r = n(3),
        s = (function() {
            function t() {
                this.procs = []
            }
            t.prototype.Add = function(t) {
                this.procs.push(t)
            }, t.prototype.Fire = function() {
                this.procs.forEach(function(t) {
                    return t()
                })
            }
        }(), function() {
            function t() {
                this.FieldSize = 14e3, this.ShowDualSkinInputUi = r.AppConfigurator.instance.showDualSkinInputUi, this.ShowPartyCodeInputUi = r.AppConfigurator.instance.showPartyCodeInputUi, this.IsolateBlankTagPlayers = !0, this.NoskinFallbackUrl = "http://ixagar.net/skins/noskin5.png", this.MaxCellsNum = 200, this.MaxPlayerUnitNum = 120, this.MaxTeamNum = 100, this.MaxClientsNum = 100, this.ShowTeamRanking = r.AppConfigurator.instance.showTeamRanking, this.ShowAlwaysAllPlayersInMap = !1, this.ShowAlwaysAllPlayersSkin = !1
            }
            return t.prototype.UpdateFieldSize = function(t) {
                this.FieldSize != t && (this.FieldSize = t)
            }, t
        }());
    e.GameConfig = s;
    var a = function() {
        function t() {
            this.isMainPanelVisible = !0, this.isDeadSpectation = !1, this.isSkinFilterPanelVisible = !1, this.chatRoomSig = "", this.playerDeadTimeStamp = 0, this.enableTeamChatSeparationCurrent = null
        }
        return Object.defineProperty(t.prototype, "isRealtimeMode", {
            get: function() {
                return !this.isReplayMode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isRealtimeModePlaying", {
            get: function() {
                return this.isRealtimeMode && this.isPlaying
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isSpectate", {
            get: function() {
                return !this.isPlaying
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setMainPanelVisible = function(t) {
            this.isMainPanelVisible = t, this.mainPanelVisibleChangedProc()
        }, t
    }();
    e.GameStates = a;
    var l = function() {
        return function() {
            this.clGameBackground = 4282668424, this.clGameForeground = 4294967295, this.clFieldBorder = 4294967295, this.clFieldCoords = 2298478591, this.clLeaderboardBack = 1711276083, this.clLeaderboardHeader = 4278255615, this.clMapBackground = 2281701376, this.clChatBackground = 2281701376, this.clOverlayBack = 1140850688, this.clMainPanelBack = 2281710216, this.clPanelForeground = 4278255615, this.clPanelHeader = 4278190148, this.clReplayBar = 4278225151, this.clMenuButtons = 4278225151, this.clMainButtons = 4294901896, this.clUiSymbols = 4294967295, this.clUiButtonActive = 4278190335, this.clCursorLine = 4294967295, this.clVirusOuterStroke = 4278255360, this.clVirusInnerFill = 2286175300, this.clChatTimeString = 4289374890, this.clChatSenderName = 4278225151, this.clChatMessage = 4294967295
        }
    }();
    e.ColorDefs = l;
    var c, h = function() {
        function t() {
            this.colorDefs = new l, this.cssColors = {}, this.changedProcs = {}, this.Load()
        }
        return t.prototype.RegisterChangedProc = function(t, e) {
            this.changedProcs[t] || (this.changedProcs[t] = []), this.changedProcs[t].push(e)
        }, t.prototype.Load = function() {
            var t = localStorage.getItem("lwga11_color_defs");
            if (t) {
                var e = JSON.parse(t);
                i.Objects.CopyObjectProps(this.colorDefs, e)
            }
            for (var n in this.colorDefs) this.UpdateDerivedColorDefs(n)
        }, t.prototype.Save = function() {
            var t = JSON.stringify(this.colorDefs);
            localStorage.setItem("lwga11_color_defs", t)
        }, t.prototype.UpdateDerivedColorDefs = function(t) {
            var e = this.colorDefs[t],
                n = o.ColorHelper.ColorToCssColorString(e);
            this.cssColors[t] = n
        }, t.prototype.GetCssColor = function(t) {
            return this.cssColors[t]
        }, t.prototype.GetColor = function(t) {
            return this.colorDefs[t]
        }, t.prototype.GetAlpha = function(t) {
            return (this.colorDefs[t] >> 24 & 255) / 255
        }, t.prototype.SetConfigColor = function(t, e) {
            this.colorDefs[t] = e, this.UpdateDerivedColorDefs(t), this.changedProcs[t] && this.changedProcs[t].forEach(function(t) {
                return t()
            }), this.Save()
        }, t
    }();
    e.ColorConfigModel = h,
        function(t) {
            t[t.Shift = 256] = "Shift", t[t.Ctrl = 512] = "Ctrl", t[t.Alt = 1024] = "Alt"
        }(c = e.ModificationKeyCode || (e.ModificationKeyCode = {}));
    var d = function() {
        function t() {
            this.ShowName = !0, this.ShowMass = !0, this.ShowCursorLine = !0, this.ShowSkin = !0, this.ShowEnemySkin = !0, this.ShowSelfName = !0, this.ShowReplayBar = !0, this.ShowCoord = !0, this.ShowLeaderboard = !0, this.ShowMap = !0, this.ShowChatBox = !0, this.ShowClientStatus = !0, this.ShowServerStatus = !1, this.ShowDetailedScore = !1, this.ShowSpecAimCursor = !0, this.AffectZoomingOnReplay = !1, this.HidePartyCode = !1, this.EmphasisCursorLine = !1, this.ShowSplitIndicator = !1, this.ShowSplitCount = !1, this.ShowEatLimitMarker = !1, this.ShowSplitPrediction = !1, this.ShowAutoSplitAlert = !1, this.ShowMassMarker = !1, this.OperationWithMouseButton = !0, this.SwapMouseButtons = !1, this.Debug_DisableSkinLoad = !1, this.UsePrecedingInterpolation = !1, this.ShowCircularName = !1, this.ShowCellDirectionMarker = !1, this.RenderQuality = 1, this.InterpolationSpeed = .5, this.QuickCaptureTimeOption = 2, this.FrameRateOption = 4, this.MarkerAlpha = 1, this.fieldBackImageUri = r.AppConfigurator.instance.defaultFieldBackImageUri, this.fieldBackImageAlpha = "0.6", this.fieldBackImageDrawingMode2 = !1, this.panelBackImageUri = r.AppConfigurator.instance.defaultPanelBackImageUri, this.panelBackImageAlpha = "0.6", this.changedProcs = {}, this.changedProcsForViewModel = {}, this.acceptNewSkins = !0, this.toggleHotKeys = {
                ShowName: -1,
                ShowMass: -1,
                ShowCursorLine: -1,
                ShowSkin: -1,
                ShowEnemySkin: -1,
                ShowSelfName: -1,
                ShowSplitIndicator: -1,
                ShowSplitCount: -1,
                ShowEatLimitMarker: -1,
                ShowSplitPrediction: -1,
                ShowAutoSplitAlert: -1,
                ShowMassMarker: -1,
                ShowCellDirectionMarker: -1
            }, this.holdHotKeys = {
                ShowName: -1,
                ShowMass: -1,
                ShowCursorLine: -1,
                ShowSkin: -1,
                ShowEnemySkin: -1,
                ShowSelfName: -1,
                ShowSplitIndicator: -1,
                ShowSplitCount: -1,
                ShowEatLimitMarker: -1,
                ShowSplitPrediction: -1,
                ShowAutoSplitAlert: -1,
                ShowMassMarker: -1,
                ShowCellDirectionMarker: -1
            }, this.controlHotKeys = {
                hkSplit: 32,
                hkFeedOne: 87,
                hkFeed: 69,
                hkChangeUnit: 9,
                hkDoubleSplit: 71,
                hkQuadSplit: 84,
                hkSuspend: 83,
                hkToggleSuspend: 83 + c.Alt,
                hkStartNewGame: 78,
                hkToggelSpectateTarget: 81,
                hkQuickReplayCapture: -1,
                hkToggleReplayRecording: -1,
                hkPlaybackReplay: -1
            }, this.StoreDefaultConfig(), this.Load()
        }
        return t.prototype.RegisterChangedProc = function(t, e) {
            this.changedProcs[t] = e
        }, t.prototype.GetBgImageAlphaValue = function(t) {
            var e = parseFloat(this[t]);
            return isNaN(e) ? .5 : e
        }, t.prototype.SetValue = function(t, e) {
            this[t] != e && (this[t] = e, this.Store(), this.changedProcs[t] && this.changedProcs[t](t, e), this.changedProcsForViewModel[t] && this.changedProcsForViewModel[t]())
        }, t.prototype.SetControlHotKey = function(t, e) {
            this.controlHotKeys[t] != e && (this.controlHotKeys[t] = e, this.Store())
        }, t.prototype.SetToggleHotKey = function(t, e) {
            this.toggleHotKeys[t] != e && (this.toggleHotKeys[t] = e, this.Store())
        }, t.prototype.SetHoldHotKey = function(t, e) {
            this.holdHotKeys[t] != e && (this.holdHotKeys[t] = e, this.Store())
        }, t.prototype.SetAcceptNewSkins = function(t) {
            this.acceptNewSkins = t, this.Store()
        }, t.prototype.Load = function() {
            var e = localStorage.getItem(t.storage_key);
            e && o.StorageHelper.LoadObjectProps(this, e)
        }, t.prototype.Store = function() {
            var e = JSON.stringify(this);
            localStorage.setItem(t.storage_key, e)
        }, t.prototype.StoreDefaultConfig = function() {
            t.default_config_json_text = JSON.stringify(this)
        }, t.prototype.RecoverDefaultConfig = function() {
            o.StorageHelper.LoadObjectProps(this, t.default_config_json_text), this.Store(), this.resetListenerProc()
        }, t.cellDisplayOptionPropNames = ["ShowName", "ShowMass", "ShowSelfName", "ShowSkin", "ShowEnemySkin", "ShowCursorLine", "ShowMassMarker", "ShowSplitPrediction", "ShowAutoSplitAlert", "ShowSplitIndicator", "ShowEatLimitMarker", "ShowCellDirectionMarker"], t.gameDisplayOptionPropNames = ["ShowCoord", "ShowReplayBar", "ShowChatBox", "ShowClientStatus", "ShowServerStatus", "ShowLeaderboard", "ShowMap", "EmphasisCursorLine", "ShowSpecAimCursor", "ShowCircularName"], t.basicBehaviorPropNames = ["OperationWithMouseButton", "SwapMouseButtons", "UsePrecedingInterpolation", "AffectZoomingOnReplay", "HidePartyCode"], t.controlPropNames = ["hkSplit", "hkFeedOne", "hkFeed", "hkChangeUnit", "hkDoubleSplit", "hkQuadSplit", "hkSuspend", "hkToggleSuspend", "hkStartNewGame", "hkToggelSpectateTarget", "hkQuickReplayCapture", "hkToggleReplayRecording", "hkPlaybackReplay"], t.storage_key = "lwga11_user_config", t
    }();
    e.UserConfig = d;
    var u = function() {
        function t() {
            this.isJapanese = r.AppConfigurator.instance.isJapanese, this.renderQualityTextSourceJp = ["ä½Ž", "ä¸­", "é«˜"], this.renderQualityTextSourceEn = ["Low", "Mid", "High"], this.interpolationSppedTextSource = ["-2", "-1", "0", "+1", "+2"], this.quickCaptureTimeSource = [10, 20, 30, 40, 50, 60], this.frameRateSource = [10, 15, 20, 30, 60]
        }
        return Object.defineProperty(t.prototype, "RenderQualityText", {
            get: function() {
                var t = e.gs.uconfig.RenderQuality;
                return (this.isJapanese ? this.renderQualityTextSourceJp : this.renderQualityTextSourceEn)[t]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "InterpolationSpeedText", {
            get: function() {
                var t = 4 * e.gs.uconfig.InterpolationSpeed;
                return this.interpolationSppedTextSource[t]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "QuickCaptureTimeSec", {
            get: function() {
                var t = e.gs.uconfig.QuickCaptureTimeOption;
                return this.quickCaptureTimeSource[t]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "TargetFrameRate", {
            get: function() {
                var t = e.gs.uconfig.FrameRateOption;
                return this.frameRateSource[t]
            },
            enumerable: !0,
            configurable: !0
        }), t
    }();
    e.UserConfigSupport = u;
    var p = function() {
            function t() {}
            return t.texts_jp = {
                clGameBackground: "ã‚²ãƒ¼ãƒ èƒŒæ™¯",
                clGameForeground: "ã‚²ãƒ¼ãƒ å‰æ™¯",
                clFieldBorder: "ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰æž ",
                clFieldCoords: "ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰åº§æ¨™",
                clLeaderboardBack: "LBèƒŒæ™¯",
                clLeaderboardHeader: "LBãƒ˜ãƒƒãƒ€",
                clMapBackground: "ãƒžãƒƒãƒ—èƒŒæ™¯",
                clChatBackground: "ãƒãƒ£ãƒƒãƒˆèƒŒæ™¯",
                clOverlayBack: "ã‚ªãƒ¼ãƒãƒ¼ãƒ¬ã‚¤èƒŒæ™¯",
                clMainPanelBack: "ãƒ‘ãƒãƒ«èƒŒæ™¯",
                clPanelForeground: "ãƒ‘ãƒãƒ«å‰æ™¯",
                clPanelHeader: "ãƒ‘ãƒãƒ«ãƒ˜ãƒƒãƒ€",
                clReplayBar: "ãƒªãƒ—ãƒ¬ã‚¤ãƒãƒ¼",
                clMenuButtons: "ãƒ¡ãƒ‹ãƒ¥ãƒ¼ãƒœã‚¿ãƒ³",
                clMainButtons: "ãƒ¡ã‚¤ãƒ³ãƒœã‚¿ãƒ³",
                clUiSymbols: "ã‚·ãƒ³ãƒœãƒ«",
                clUiButtonActive: "ãƒœã‚¿ãƒ³(ã‚¢ã‚¯ãƒ†ã‚£ãƒ–)",
                clCursorLine: "ã‚«ãƒ¼ã‚½ãƒ«ãƒ©ã‚¤ãƒ³",
                clVirusOuterStroke: "æ£˜æž ",
                clVirusInnerFill: "æ£˜å¡—ã‚Š",
                clChatSenderName: "ãƒãƒ£ãƒƒãƒˆé€ä¿¡è€…å",
                clChatTimeString: "ãƒãƒ£ãƒƒãƒˆæ™‚åˆ»",
                clChatMessage: "ãƒãƒ£ãƒƒãƒˆãƒ¡ãƒƒã‚»ãƒ¼ã‚¸",
                OperationWithMouseButton: "ãƒžã‚¦ã‚¹ã«ã‚ˆã‚‹æ“ä½œ",
                SwapMouseButtons: "å·¦å³ãƒœã‚¿ãƒ³ã®æ©Ÿèƒ½ã‚’å…¥ã‚Œæ›¿ãˆã‚‹",
                UsePrecedingInterpolation: "å…ˆè¡Œè£œé–“",
                AffectZoomingOnReplay: "ãƒªãƒ—ãƒ¬ã‚¤ä¸­ã«ã‚ºãƒ¼ãƒ æ“ä½œã‚’å†ç¾",
                HidePartyCode: "ã‚³ãƒ¼ãƒ‰ã‚’éš ã™",
                ShowName: "åå‰",
                ShowMass: "è³ªé‡",
                ShowSelfName: "è‡ªåˆ†ã®åå‰",
                ShowSkin: "ã‚¹ã‚­ãƒ³",
                ShowEnemySkin: "æ•µã®ã‚¹ã‚­ãƒ³",
                ShowCursorLine: "ã‚«ãƒ¼ã‚½ãƒ«ãƒ©ã‚¤ãƒ³",
                ShowMassMarker: "è³ªé‡ãƒžãƒ¼ã‚«ãƒ¼",
                ShowSplitPrediction: "åˆ†è£‚é †åºãƒžãƒ¼ã‚«ãƒ¼",
                ShowAutoSplitAlert: "è‡ªç„¶åˆ†è£‚ã‚¢ãƒ©ãƒ¼ãƒˆ",
                ShowSplitIndicator: "ã‚¹ãƒ—ãƒªãƒƒãƒˆã‚¤ãƒ³ã‚¸ã‚±ãƒ¼ã‚¿",
                ShowEatLimitMarker: "æ•é£Ÿåˆ¤å®š",
                ShowCellDirectionMarker: "ç§»å‹•æ–¹å‘ãƒžãƒ¼ã‚«ãƒ¼",
                ShowCoord: "ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰åº§æ¨™",
                ShowReplayBar: "ãƒªãƒ—ãƒ¬ã‚¤ãƒãƒ¼",
                ShowChatBox: "ãƒãƒ£ãƒƒãƒˆ",
                ShowDetailedScore: "è©³ç´°ã‚¹ã‚³ã‚¢",
                ShowClientStatus: "ã‚¯ãƒ©ã‚¤ã‚¢ãƒ³ãƒˆã‚¹ãƒ†ãƒ¼ã‚¿ã‚¹",
                ShowServerStatus: "ã‚µãƒ¼ãƒã‚¹ãƒ†ãƒ¼ã‚¿ã‚¹",
                ShowLeaderboard: "ã‚¹ã‚³ã‚¢ãƒœãƒ¼ãƒ‰",
                ShowMap: "ãƒžãƒƒãƒ—",
                EmphasisCursorLine: "ã‚«ãƒ¼ã‚½ãƒ«ãƒ©ã‚¤ãƒ³ã‚’å¼·èª¿",
                ShowSpecAimCursor: "è¦³æˆ¦ã‚¿ãƒ¼ã‚²ãƒƒãƒˆã®ã‚«ãƒ¼ã‚½ãƒ«ã‚’è¡¨ç¤º",
                ShowCircularName: "åå‰ãƒ©ãƒ™ãƒ«ã‚’å††å½¢ã«é…ç½®",
                hkSplit: "åˆ†è£‚",
                hkFeedOne: "é¤Œå˜ç™º",
                hkFeed: "é¤Œé€£å°„",
                hkChangeUnit: "ãƒ¦ãƒ‹ãƒƒãƒˆåˆ‡ã‚Šæ›¿ãˆ",
                hkDoubleSplit: "ãƒ€ãƒ–ãƒ«åˆ†è£‚",
                hkQuadSplit: "å…¨åˆ†è£‚",
                hkSuspend: "ãã®å ´ã§åœæ­¢",
                hkToggleSuspend: "ãã®å ´ã§åœæ­¢(ãƒˆã‚°ãƒ«)",
                hkStartNewGame: "ã‚²ãƒ¼ãƒ é–‹å§‹",
                hkToggelSpectateTarget: "è¦³æˆ¦ãƒ¢ãƒ¼ãƒ‰",
                hkQuickReplayCapture: "ã‚¯ã‚¤ãƒƒã‚¯ã‚­ãƒ£ãƒ—ãƒãƒ£",
                hkToggleReplayRecording: "éŒ²ç”»/åœæ­¢",
                hkPlaybackReplay: "ãƒªãƒ—ãƒ¬ã‚¤ã‚’å†ç”Ÿ",
                hdrConfiguration: "è¨­å®š",
                hdrCellDisplay: "ã‚»ãƒ«è¡¨ç¤º",
                hdrGameDisplay: "ã‚²ãƒ¼ãƒ è¡¨ç¤º",
                hdrBasicOperation: "åŸºæœ¬å‹•ä½œ",
                hdrControl: "æ“ä½œ",
                lbtResetConfig: "è¨­å®šåˆæœŸåŒ–",
                lbtInterpolationResponce: "è£œé–“å¿œç­”é€Ÿåº¦",
                lbtMarkerOpacity: "ãƒžãƒ¼ã‚«ãƒ¼Alpha",
                lbtRenderQuality: "ç”»è³ª",
                lbtCaptureDuration: "ã‚­ãƒ£ãƒ—ãƒãƒ£æ™‚é–“",
                lbtFrameRate: "ãƒ•ãƒ¬ãƒ¼ãƒ ãƒ¬ãƒ¼ãƒˆ",
                hdrTheme: "ãƒ†ãƒ¼ãƒž",
                hdrColor: "è‰²",
                hdrWallpaper: "å£ç´™"
            }, t.texts_en = {
                clGameBackground: "Game Background",
                clGameForeground: "Game Foreground",
                clFieldBorder: "Field Outer Frame",
                clFieldCoords: "Field Coordinate",
                clLeaderboardBack: "LB Background",
                clLeaderboardHeader: "LB Header",
                clMapBackground: "Map Background",
                clChatBackground: "Chat Background",
                clOverlayBack: "Overlay Background",
                clMainPanelBack: "Panel Background",
                clPanelForeground: "Panel Foreground",
                clReplayBar: "Replay Bar",
                clMenuButtons: "Menu Buttons",
                clMainButtons: "Main Buttons",
                clUiSymbols: "UI Symbols",
                clUiButtonActive: "Buttons(Active)",
                clCursorLine: "Cursor Line",
                clVirusOuterStroke: "Virus Frame",
                clVirusInnerFill: "Virus Fill",
                clChatSenderName: "Chat Sender Name",
                clChatTimeString: "Chat Time Stamp",
                clChatMessage: "Chat Message",
                OperationWithMouseButton: "Enable Mouse Operation",
                SwapMouseButtons: "Swap Mouse Buttons",
                UsePrecedingInterpolation: "Preceding Interpolation",
                AffectZoomingOnReplay: "Auto Zooming in Replay",
                HidePartyCode: "Hide Party Code",
                ShowName: "Name",
                ShowMass: "Mass",
                ShowSelfName: "Self Name",
                ShowSkin: "Skin",
                ShowEnemySkin: "Enemy Skin",
                ShowCursorLine: "Cursor Line",
                ShowMassMarker: "Mass Marker",
                ShowSplitPrediction: "Split Order Marker",
                ShowAutoSplitAlert: "Auto Split Alert",
                ShowSplitIndicator: "Split Indicator",
                ShowEatLimitMarker: "Collision Marker",
                ShowCellDirectionMarker: "Direction Marker",
                ShowCoord: "Field Coord",
                ShowReplayBar: "Replay Bar",
                ShowChatBox: "Chat",
                ShowClientStatus: "Client Status",
                ShowServerStatus: "Server Status",
                ShowLeaderboard: "Scoreboard",
                ShowMap: "Map",
                EmphasisCursorLine: "Emphasis Cursor Line",
                ShowSpecAimCursor: "Show Cursor Line of Spec Target",
                ShowCircularName: "Place Circular Name Label",
                hkSplit: "Split",
                hkFeedOne: "Single Feed",
                hkFeed: "Continuous Feed",
                hkChangeUnit: "Alter Operation Unit",
                hkDoubleSplit: "Double Split",
                hkQuadSplit: "Full Split",
                hkSuspend: "Stop Motion",
                hkToggleSuspend: "Stop Motion(Toggle)",
                hkStartNewGame: "Start New Game",
                hkToggelSpectateTarget: "Spectation Mode",
                hkQuickReplayCapture: "Quick Capture",
                hkToggleReplayRecording: "Start/Stop Recording",
                hkPlaybackReplay: "Playback Replay",
                Debug_DisableSkinLoad: "Don't Load Images(debug)",
                UseFastInterpolation: "Fast Interpolation",
                hdrConfiguration: "Configuration",
                hdrCellDisplay: "Cell Display",
                hdrGameDisplay: "Game Display",
                hdrBasicOperation: "Basic Behavior",
                hdrControl: "Operation",
                lbtResetConfig: "Reset Config",
                lbtInterpolationResponce: "Interpolation Speed",
                lbtMarkerOpacity: "Maker Alpha",
                lbtRenderQuality: "Render Quality",
                lbtCaptureDuration: "Capture Time",
                lbtFrameRate: "Framerate",
                hdrTheme: "Theme",
                hdrColor: "Color",
                hdrWallpaper: "Wallpaper"
            }, t
        }(),
        f = function() {
            return function() {
                this.gconfig = new s, this.gstates = new a, this.uconfig = new d, this.ucolors = new h, this.utexts = r.AppConfigurator.instance.isJapanese ? p.texts_jp : p.texts_en, this.usupport = new u
            }
        }();
    e.GlobalObject = f, e.gs = new f
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t() {}
        return t.Confirm = function(t) {}, t
    }();
    e.Utils = i;
    var o = function() {
        function t() {}
        return t.RandF = function() {
            return Math.random()
        }, t.RandFD = function() {
            return 2 * Math.random() - 1
        }, t.RandI = function(e) {
            return t.RandF() * e >> 0
        }, t.InRange = function(t, e, n) {
            return e <= t && t <= n
        }, t.Clamp = function(t, e, n) {
            return Math.max(e, Math.min(t, n))
        }, t.VMap = function(t, e, n, i, o, r) {
            void 0 === r && (r = !1);
            var s = (t - e) * (o - i) / (n - e) + i;
            if (r) {
                var a = Math.min(i, o),
                    l = Math.max(i, o);
                return this.Clamp(s, a, l)
            }
            return s
        }, t.MapTo = function(t, e, n) {
            return t * (n - e) + e
        }, t.Lerp = function(t, e, n) {
            return (1 - n) * t + n * e
        }, t.EasyFilter = function(t, e, n) {
            return n * t + (1 - n) * e
        }, t.HiLimit = function(t, e) {
            return Math.min(t, e)
        }, t.LoLimit = function(t, e) {
            return Math.max(t, e)
        }, t
    }();
    e.Nums = o;
    var r = function() {
        function t() {}
        return t.Remove = function(t, e) {
            var n = t.indexOf(e);
            return n >= 0 && (t.splice(n, 1), !0)
        }, t.Count = function(t, e) {
            for (var n = 0, i = 0, o = t; i < o.length; i++) {
                e(o[i]) && n++
            }
            return n
        }, t.Exclude = function(t, e) {
            for (var n = [], i = 0, o = t; i < o.length; i++) {
                var r = o[i]; - 1 == e.indexOf(r) && n.push(r)
            }
            return n
        }, t.First = function(t, e) {
            for (var n = 0, i = t; n < i.length; n++) {
                var o = i[n];
                if (e(o)) return o
            }
            return null
        }, t
    }();
    e.Arrays = r;
    var s = function() {
        function t() {}
        return t.CopyObjectProps = function(t, e) {
            for (var n in e) t.hasOwnProperty(n) && (t[n] = e[n])
        }, t
    }();
    e.Objects = s;
    var a = function() {
        function t() {}
        return t.FormatDate = function(t, e) {
            function n(t) {
                return ("0" + t).slice(-2)
            }
            e || (e = new Date);
            var i = {
                    YYYY: e.getFullYear(),
                    YY: n(e.getFullYear()),
                    MM: n(e.getMonth() + 1),
                    DD: n(e.getDate()),
                    hh: n(e.getHours()),
                    mm: n(e.getMinutes()),
                    ss: n(e.getSeconds())
                },
                o = t;
            for (var r in i) o = o.replace(r, i[r]);
            return o
        }, t.GetCurrentTimeStamp = function() {
            return t.FormatDate("YY/MM/DD hh:mm:ss")
        }, t.GetTodayString = function() {
            return t.FormatDate("YYMMDD")
        }, t.GetHourMinutesString = function() {
            return t.FormatDate("hh:mm")
        }, t.GetSystemTimeSec = function() {
            return Date.now() / 1e3
        }, t
    }();
    e.DateTimeHelper = a;
    var l = function() {
        function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
        }
        return Object.defineProperty(t.prototype, "Norm", {
            get: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Angle", {
            get: function() {
                return Math.atan2(this.y, this.x)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.Normalize = function() {
            var t = this.Norm;
            return t >= 1.1754943e-38 && (this.x = this.x / t, this.y = this.y / t), this
        }, t.prototype.Scale = function(t) {
            return this.x *= t, this.y *= t, this
        }, t.prototype.Add = function(t) {
            return this.x += t.x, this.y += t.y, this
        }, t.prototype.Set = function(t, e) {
            return this.x = t, this.y = e, this
        }, t.prototype.CopyFrom = function(t) {
            return this.x = t.x, this.y = t.y, this
        }, t.Subtract = function(e, n) {
            return new t(e.x - n.x, e.y - n.y)
        }, t.prototype.ClampXY = function(t, e, n, i) {
            return this.x = o.Clamp(this.x, t, n), this.y = o.Clamp(this.y, e, i), this
        }, t.IsEqual = function(t, e) {
            return t.x == e.x && t.y == e.y
        }, t.GetDist = function(t, e) {
            var n = e.x - t.x,
                i = e.y - t.y;
            return Math.sqrt(n * n + i * i)
        }, t.GetAngle = function(t, e) {
            var n = t.x - e.x,
                i = t.y - e.y;
            return Math.atan2(i, n)
        }, t.FromPolar = function(e, n) {
            return new t(Math.cos(e) * n, Math.sin(e) * n)
        }, t.prototype.AddPolar = function(t, e) {
            this.x += Math.cos(t) * e, this.y += Math.sin(t) * e
        }, t.prototype.MakeCopy = function() {
            return new t(this.x, this.y)
        }, t.DotProduct = function(t, e) {
            return t.x * e.x + t.y * e.y
        }, t.CrossProduct = function(t, e) {
            return t.x * e.y - t.y * e.x
        }, t
    }();
    e.Vector = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = function() {
            function t() {}
            return t.GenerateRandomUserEnvSig = function(e) {
                for (var n = "", i = t.CodeChars, o = 0; o < e; o++) {
                    n += i[Math.floor(Math.random() * i.length)]
                }
                return n
            }, t.GetUserEnironmentSignature = function() {
                var e = localStorage.getItem("UniChatUserSignature");
                return e || (e = t.GenerateRandomUserEnvSig(6), localStorage.setItem("UniChatUserSignature", e)), e
            }, t.EmbedHyperlink = function(t) {
                return t.replace(/(http:\/\/[\x21-\x7e]+)/gi, '<a href=$1 target="_blank">$1</a>')
            }, t.GetQueryObject = function() {
                var t = {};
                return location.search.replace("?", "").split("&").forEach(function(e) {
                    var n = e.split("=");
                    if (2 == n.length) {
                        var i = n[0],
                            o = n[1];
                        t[i] = o
                    }
                }), t
            }, t.CodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t
        }();
    e.AppHelper = o;
    var r = function() {
        function t() {}
        return t.LoadObjectProps = function(t, e) {
            try {
                var n = JSON.parse(e);
                for (var o in n)
                    if (t.hasOwnProperty(o)) {
                        var r = t[o],
                            s = n[o];
                        r instanceof Object ? i.Objects.CopyObjectProps(r, s) : t[o] = s
                    }
            } catch (t) {}
        }, t
    }();
    e.StorageHelper = r;
    var s = function() {
        function t() {}
        return t.ColorFromConfigColorString = function(t) {
            if ("#" != t[0]) return 0;
            var e = 255,
                n = 0,
                i = 0,
                o = 0;
            return 8 == (t = t.slice(1, t.length)).length ? (e = parseInt(t.slice(0, 2), 16), n = parseInt(t.slice(2, 4), 16), i = parseInt(t.slice(4, 6), 16), o = parseInt(t.slice(6, 8), 16)) : 6 == t.length ? (n = parseInt(t.slice(0, 2), 16), i = parseInt(t.slice(2, 4), 16), o = parseInt(t.slice(4, 6), 16)) : 4 == t.length ? (e = 17 * parseInt(t[0], 16), n = 17 * parseInt(t[1], 16), i = 17 * parseInt(t[2], 16), o = 17 * parseInt(t[3], 16)) : 3 == t.length && (n = 17 * parseInt(t[0], 16), i = 17 * parseInt(t[1], 16), o = 17 * parseInt(t[2], 16)), isNaN(e) || isNaN(n) || isNaN(i) || isNaN(o) ? 0 : e << 24 | n << 16 | i << 8 | o
        }, t.ColorToCssColorString = function(t) {
            return "rgba(" + (t >> 16 & 255) + "," + (t >> 8 & 255) + "," + (255 & t) + "," + (t >> 24 & 255) / 255 + ")"
        }, t.GetAlpha = function(t) {
            return (t >> 24 & 255) / 255
        }, t.FormatColorByte = function(t) {
            var e = t.toString(16).toUpperCase();
            return 1 == e.length && (e = "0" + e), e
        }, t.ColorToHtmlString = function(t) {
            var e = t >> 16 & 255,
                n = t >> 8 & 255,
                i = 255 & t;
            return "#" + this.FormatColorByte(e) + this.FormatColorByte(n) + this.FormatColorByte(i)
        }, t.ColorFromHtmlString = function(t) {
            if (7 != t.length || "#" != t[0]) return 8947848;
            var e = parseInt(t.slice(1, 3), 16),
                n = parseInt(t.slice(3, 5), 16),
                i = parseInt(t.slice(5, 7), 16);
            return isNaN(e) || isNaN(n) || isNaN(i) ? 8947848 : e << 16 | n << 8 | i
        }, t.ColorFromHtmlStringInput = function(t, e) {
            if (7 != t.length || "#" != t[0]) return -1;
            var n = parseInt(t.slice(1, 3), 16),
                i = parseInt(t.slice(3, 5), 16),
                o = parseInt(t.slice(5, 7), 16);
            return isNaN(n) || isNaN(i) || isNaN(o) ? -1 : e << 24 || n << 16 | i << 8 | o
        }, t.GetHSV = function(t) {
            var e = (t >> 16 & 255) / 255,
                n = (t >> 8 & 255) / 255,
                i = (255 & t) / 255,
                o = Math.max(e, n, i),
                r = Math.min(e, n, i),
                s = 0;
            if (o != r) {
                var a = o - r;
                (s = (e == o ? (n - i) / a : n == o ? 2 + (i - e) / a : 4 + (e - n) / a) / 6) < 0 && (s += 1)
            }
            return [s, (o - r) / o, o]
        }, t.ColorFromHSVA = function(t, e, n, i) {
            var o = (1 - e) * n,
                r = n - o,
                s = 6 * t,
                a = 0,
                l = 0,
                c = 0;
            return s < 1 ? (a = n, l = s * r + o, c = o) : s < 2 ? (a = (2 - s) * r + o, l = n, c = o) : s < 3 ? (a = o, l = n, c = (s - 2) * r + o) : s < 4 ? (a = o, l = (4 - s) * r + o, c = n) : s < 5 ? (a = (s - 4) * r + o, l = o, c = n) : (a = n, l = o, c = (6 - s) * r + o), 255 * i >> 0 << 24 | 255 * a >> 0 << 16 | 255 * l >> 0 << 8 | 255 * c >> 0
        }, t
    }();
    e.ColorHelper = s;
    var a = function() {
        function t() {}
        return t.RadiusToMass = function(t) {
            return t * t / 100
        }, t.MassToRadius = function(t) {
            return Math.sqrt(100 * t)
        }, t.GenarateRandomColor = function() {
            var t = [255, i.Nums.RandI(100), i.Nums.RandI(256)].sort(function() {
                return i.Nums.RandFD()
            });
            return t[0] << 16 | t[1] << 8 | t[2]
        }, t.CheckIsInEatableSection = function(t, e) {
            return t == e || "**" == t || "**" == e
        }, t.DecodePlayerId = function(t) {
            return [65534 & t, 1 & t]
        }, t.GetDist = function(t, e, n, i) {
            var o = n - t,
                r = i - e;
            return Math.sqrt(o * o + r * r)
        }, t.VectorDotProduct = function(t, e, n, i) {
            return t * n + e * i
        }, t.VectorCrossProduct = function(t, e, n, i) {
            return t * i - e * n
        }, t.GetLinePointDist = function(t, e, n, o, r, s) {
            var a = new i.Vector(n - t, o - e),
                l = new i.Vector(r - t, s - e);
            if (i.Vector.DotProduct(a, l) < 0) return l.Norm;
            var c = new i.Vector(t - n, e - o),
                h = new i.Vector(r - n, s - o);
            return i.Vector.DotProduct(c, h) < 0 ? h.Norm : Math.abs(i.Vector.CrossProduct(a, l)) / a.Norm
        }, t.HitTestAABB = function(t, e, n, i, o) {
            var r = n - t,
                s = i - i;
            return -o <= r && r <= o && -o <= s && s <= o
        }, t.TrimNameAndTeamName = function(t, e) {
            if (t.length > 15) t = t.substring(0, 15), e = "";
            else {
                var n = 15 - t.length;
                e.length > n && (e = e.substring(0, n))
            }
            return [t, e]
        }, t
    }();
    e.GameHelper = a;
    var l = function() {
        function t() {}
        return t.Start = function(e) {
            t.sig = e, t.t0 = performance.now()
        }, t.Stop = function() {
            if (performance.now() - t.t0 > 50) {
                var e = t.sig;
                console.log("long execution : " + e)
            }
        }, t
    }();
    e.TimeChecker = l;
    var c = function() {
        function t(t, e) {
            this.capacity = t, this.pool = new Array(t);
            for (var n = 0; n < t; n++) this.pool[n] = e();
            this.genProc = e
        }
        return t.prototype.Gain = function() {
            if (this.pool.length <= 0) return this.capacity++, this.genProc();
            var t = this.pool.pop();
            return i.Utils.Confirm(t), t
        }, t.prototype.Release = function(t) {
            i.Utils.Confirm(t), this.pool.push(t)
        }, t
    }();
    e.ObjectPool = c;
    var h = function() {
        function t() {
            this.activeKeepTimeSec = 180, this.deactivedTick = 0, this.t0 = 0
        }
        return Object.defineProperty(t.prototype, "IsHidden", {
            get: function() {
                return document.hidden
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.Update = function() {
            var t = performance.now(),
                e = t - this.t0;
            this.t0 = t, document.hasFocus() ? this.deactivedTick = 0 : this.deactivedTick += .001 * e
        }, Object.defineProperty(t.prototype, "IsActive", {
            get: function() {
                return this.deactivedTick < this.activeKeepTimeSec
            },
            enumerable: !0,
            configurable: !0
        }), t.Instance = new t, t
    }();
    e.PageHelper = h
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(2),
        o = function() {
            function t() {
                this.MaxProfileNum = 20, this.useUniChat = !1, this.gameServerAddress = null, this.showDualSkinInputUi = !1, this.showPartyCodeInputUi = !1, this.defaultFieldBackImageUri = "", this.defaultPanelBackImageUri = "", this.siteTitleString = "", this.leaderboardHeaderText = "Leaderboard", this.showTeamRanking = !1, this.useIxTrackerServer = !1, this.trackerServerUri = null, this.trackerServerTargetSite = null, this.showAllServers = !1, this.insertionContent = null, this.allowOnlyForJapaneseLangUser = !1, this.Setup()
            }
            return t.prototype.SetupUnichat = function(t, e, n, i) {
                this.useUniChat = !0, this.uniChatServerAddress = t, this.uniChatSiteSignature = e, this.uniChatServerSignature = n, this.useTeamSeparatedChat = i
            }, t.prototype.Setup = function() {
                this.isJapanese = navigator.language.startsWith("ja");
                var t = "ws://chat2.ixagar.net:4590",
                    e = gTargetSite;
                "sao" == e ? (this.gameServerAddress = "ws://133.18.173.17:2525", this.SetupUnichat(t, "ix", "EA-SAO1", !0), this.showPartyCodeInputUi = !0, this.siteTitleString = "SENPAI-AGAR.ONLINE", this.leaderboardHeaderText = "S.A.O", this.showTeamRanking = !0) : "blank" == e ? (this.gameServerAddress = "ws://133.130.111.204:2527", this.SetupUnichat(t, "ix", "EA-SAO-BC", !0), this.showPartyCodeInputUi = !0, this.leaderboardHeaderText = "Leaderboard", this.showTeamRanking = !0) : "caffe" == e ? (this.gameServerAddress = "ws://sv-caffe.senpai-agar.online:2520", this.SetupUnichat(t, "_caffe", "caffe", !1), this.showTeamRanking = !0, this.leaderboardHeaderText = "caffe") : "caffe2" == e ? (this.gameServerAddress = "ws://sv-caffe2.senpai-agar.online:2521", this.SetupUnichat(t, "_caffe2", "caffe2", !1), this.showTeamRanking = !0, this.leaderboardHeaderText = "caffe2", this.allowOnlyForJapaneseLangUser = !0) : "kouhaku" == e ? (this.gameServerAddress = "ws://sv-caffe2.senpai-agar.online:2521", this.showTeamRanking = !0, this.leaderboardHeaderText = "ç´…ç™½æˆ¦", this.allowOnlyForJapaneseLangUser = !0) : "dad" == e ? (this.gameServerAddress = "ws://133.18.168.210:2521", this.SetupUnichat(t, "_dad", "dad", !0), this.showTeamRanking = !0, this.leaderboardHeaderText = "dad", this.showPartyCodeInputUi = !0) : "ix" == e ? (this.SetupUnichat(t, "ix", "default", !0), this.showPartyCodeInputUi = !0, this.defaultFieldBackImageUri = "http://ixagar.net/gr/ixagar_bg.png", this.defaultPanelBackImageUri = "http://ixagar.net/gr/ixagar_fg.png", this.siteTitleString = "IXAGAR.NET", this.leaderboardHeaderText = "IX AGAR", this.showTeamRanking = !0, this.useIxTrackerServer = !0, this.trackerServerUri = "http://hub.ixagar.net:4701", this.trackerServerTargetSite = "ixagar") : "dual" == e ? (this.showDualSkinInputUi = !0, this.useIxTrackerServer = !0, this.trackerServerUri = "http://hub1.dual-agar.online:4703", this.trackerServerTargetSite = "dual-agar", this.SetupUnichat(t, "_dual", "_dual", !0)) : "caffe_beta" == e || "dev" == e && (this.gameServerAddress = "ws://153.127.253.45:2520", this.SetupUnichat(t, "_dev", "dev", !1)), this.targetSite = e;
                var n = i.AppHelper.GetQueryObject();
                if (n.target) {
                    var o = n.target;
                    o.startsWith("localhost") && (this.gameServerAddress = "ws://" + o, this.useIxTrackerServer = !1)
                }
                n.showAll && (this.showAllServers = !0)
            }, t.instance = new t, t
        }();
    e.AppConfigurator = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(17),
        r = n(18),
        s = n(10),
        a = n(19),
        l = n(20),
        c = n(21),
        h = n(0),
        d = n(3),
        u = n(22),
        p = n(2),
        f = n(10),
        g = n(24),
        y = n(25),
        m = n(26),
        v = function() {
            return function() {
                this.avgDuration = 0, this.avgRate = 0, this.avgFps = 0, this.numCellsRendered = 0, this.replayBufferBytes = 0, this.debugObj = {}
            }
        }();
    e.GamePerformanceStateModel = v;
    var S = function() {
        function t() {
            var t = this;
            this.tick = 0, this.seqUseInfoStrSent = null, this.perfModel = new v, this.serverUriCash = null, this.userEntryMan = new l.UserEntryManager, this.userEntryMan.Load(), this.uMan = new o.UserInfoManager, this.dataRecorder = new r.DataRecorder, this.nodeMan = new s.NodeManager(this), this.conn = new a.ConnectionBridge, this.sight = new c.SightCoord(this), this.benchDataFeeder = new g.PerfBenchDataFeeder(this), this.conn.packetHandlerProc = this.dataRecorder.PostPacketFromServer.bind(this.dataRecorder), this.conn.connectionOpenProc = function() {
                t.conn.SendSessionInitialize(p.AppHelper.GetUserEnironmentSignature()), t.SendSelfEntryInfoIfChanged(), t.conn.SendRequestStartSpectate()
            }, this.conn.connectionClosedProc = function(e) {
                console.log("connection closed " + e), (e = e.indexOf("serverMaxConnections (") >= 0 ? "Server is full house. Please access after a while.</br>æº€å“¡ã§ã™ã€‚ã—ã°ã‚‰ãæ™‚é–“ã‚’ãŠã„ã¦ã‹ã‚‰ã‚¢ã‚¯ã‚»ã‚¹ã—ã¦ãã ã•ã„ã€‚" : "") && t.gameHudModel.PostServerInstructionText(e)
            };
            var e = d.AppConfigurator.instance;
            e.useUniChat && (this.chatAppModel = new u.ChatAppModel, this.chatAppModel.SetUserEnvSig(p.AppHelper.GetUserEnironmentSignature()), this.chatAppModel.SetChatServerUri(e.uniChatServerAddress), this.chatAppModel.SetGameTeamChatSessionEnabled(e.useTeamSeparatedChat), this.chatAppModel.SetSiteSignature(e.uniChatSiteSignature), this.chatAppModel.SetServerSignature(e.uniChatServerSignature, !1), this.chatAppModel.gameChatMessageReceiverProc = this.nodeMan.PostExternalChatMessage.bind(this.nodeMan), window.chatAppModel = this.chatAppModel), e.useIxTrackerServer && (this.serverListModel = new y.ServerListModel(this)), this.gameHudModel = new m.GameHudModel
        }
        return t.prototype.ShowDebugValue = function(t, e) {
            this.perfModel.debugObj[t] = e
        }, Object.defineProperty(t.prototype, "ReplayControllerModel", {
            get: function() {
                return this.dataRecorder
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.SendSplitAction = function(t) {
            this.sight.splitting = !0, this.conn.SendPlayerAction(0, t)
        }, t.prototype.StartPlay = function() {
            h.gs.gstates.isBenchmarkMode || (h.gs.gstates.isPlaying || (this.SendSelfEntryInfoIfChanged(), this.conn.SendSpecifySpecTarget(-1), this.conn.SendRequestStartPlay(), h.gs.gstates.isPlaying = !0, h.gs.gstates.isDeadSpectation = !1, this.gameHudModel.ResetMaxScore()), this.userEntryMan.SaveIfChanged(), h.gs.gstates.setMainPanelVisible(!1))
        }, t.prototype.StartSpectate = function() {
            h.gs.gstates.isBenchmarkMode || (h.gs.gstates.isPlaying ? h.gs.gstates.setMainPanelVisible(!1) : (this.SendSelfEntryInfoIfChanged(), this.userEntryMan.SaveIfChanged(), h.gs.gstates.isDeadSpectation = !1, h.gs.gstates.setMainPanelVisible(!1)))
        }, t.prototype.ToggleBenchMarkMode = function() {
            if (h.gs.gstates.isBenchmarkMode) h.gs.gstates.isBenchmarkMode = !1, this.benchDataFeeder.Stop(), h.gs.gstates.setMainPanelVisible(!0), this.ConnectToGameServer();
            else {
                h.gs.gstates.isBenchmarkMode = !0, this.CloseConnection(), this.nodeMan.OnEnterBenchMarkMode();
                h.gs.gconfig.FieldSize;
                this.benchDataFeeder.Start(), h.gs.gstates.setMainPanelVisible(!1)
            }
        }, t.prototype.KeyboardInputHandler = function(t, e) {
            if ("INPUT" == document.activeElement.tagName) return !1;
            if (e && 27 == t.keyCode && h.gs.gstates.setMainPanelVisible(!h.gs.gstates.isMainPanelVisible), !e && 9 == t.KeyCode) return !0;
            if (this.sight.initDone && !h.gs.gstates.isBenchmarkMode) {
                var n = t.keyCode;
                t.ctrlKey && (n += h.ModificationKeyCode.Ctrl), t.shiftKey && (n += h.ModificationKeyCode.Shift), t.altKey && (n += h.ModificationKeyCode.Alt);
                var i = h.gs.uconfig.controlHotKeys;
                if (h.gs.gstates.isRealtimeMode) {
                    if (n == i.hkSuspend) return this.conn.SendPlayerAction(5, e ? 0 : 1), !0;
                    if (e && n == i.hkToggleSuspend && (this.isSuspend = !this.isSuspend, this.conn.SendPlayerAction(5, this.isSuspend ? 0 : 1)), h.gs.gstates.isPlaying && n == i.hkFeed) return this.conn.SendPlayerAction(4, e ? 1 : 0), !0
                }
                var o = !1,
                    r = h.gs.uconfig;
                for (var s in r.holdHotKeys) {
                    if (n == r.holdHotKeys[s]) {
                        var a = r[s];
                        r.SetValue(s, !a), o = !0
                    }
                }
                if (e) {
                    if (n == i.hkStartNewGame) {
                        if (h.gs.gstates.isBenchmarkMode) return !1;
                        if (!h.gs.gstates.isPlaying) return this.StartPlay(), !0
                    }
                    if (n == i.hkToggelSpectateTarget) return -1 == this.sight.aimPlayerId ? this.conn.SendSpecifySpecTarget(0) : this.conn.SendSpecifySpecTarget(-1), !0;
                    if (n == i.hkQuickReplayCapture) return this.dataRecorder.DoInstantCapture(), !0;
                    if (n == i.hkToggleReplayRecording) return this.dataRecorder.ToggleRecording(), !0;
                    if (n == i.hkPlaybackReplay) return this.dataRecorder.isReplayMode ? this.dataRecorder.EndReplayMode() : this.dataRecorder.TogglePlayback(), !0;
                    if (h.gs.gstates.isRealtimeModePlaying) {
                        if (n == i.hkSplit) return this.SendSplitAction(1), !0;
                        if (n == i.hkChangeUnit) return this.conn.SendPlayerAction(3, -1), !0;
                        if (n == i.hkFeedOne) return this.conn.SendPlayerAction(1, -1), !0;
                        if (n == i.hkDoubleSplit) return this.SendSplitAction(2), !0;
                        if (n == i.hkQuadSplit) return this.SendSplitAction(4), !0
                    }
                    for (var s in r.toggleHotKeys) {
                        if (n == r.toggleHotKeys[s]) {
                            a = r[s];
                            r.SetValue(s, !a), o = !0
                        }
                    }
                }
                return !!o && (this.gameHudModel.configUpdatedProc(), !0)
            }
        }, t.prototype.MouseInputHandler = function(t, e) {
            if (!h.gs.gstates.isBenchmarkMode) {
                var n = h.gs.uconfig,
                    i = 0,
                    o = 2;
                if (e) {
                    if (h.gs.gstates.isRealtimeMode && h.gs.gstates.isSpectate) {
                        if (t == o) {
                            var r = this.sight.ScreenToWorld(this.sight.mouseX, this.sight.mouseY),
                                s = r[0],
                                a = r[1],
                                l = this.nodeMan.GetPlayerIdUnderCursor(s, a);
                            this.conn.SendSpecifySpecTarget(l)
                        }
                        t == i && (this.conn.SendSpecifySpecTarget(-1), this.isSuspend && (this.isSuspend = !1, this.conn.SendPlayerAction(5, this.isSuspend ? 0 : 1)))
                    }
                    t == i && h.gs.gstates.isBenchmarkMode, h.gs.gstates.isReplayMode && (t == i && this.dataRecorder.TogglePlayback(), t == o && (this.dataRecorder.EndReplayMode(), this.dataRecorder.Notify()))
                }
                n.OperationWithMouseButton && (n.SwapMouseButtons && (i = 2, o = 0), h.gs.gstates.isRealtimeModePlaying && (t == i && e ? this.SendSplitAction(1) : t == o ? this.conn.SendPlayerAction(4, e ? 1 : 0) : 1 == t && e && this.SendSplitAction(4)))
            }
        }, t.prototype.SelfUnitsDeadProc = function() {
            var t = this;
            h.gs.gstates.isPlaying && !this.dataRecorder.isLoading && (h.gs.gstates.isPlaying = !1, h.gs.gstates.isDeadSpectation = !0, this.sight.OnPlayerDead(), this.gameHudModel.ResetMaxScore(), h.gs.gstates.playerDeadCallbackProc(), h.gs.gstates.playerDeadTimeStamp = Date.now(), setTimeout(function() {
                return t.conn.SendRequestStartSpectate()
            }, 100))
        }, t.prototype.SendSelfEntryInfoIfChanged = function() {
            var t = this.userEntryMan.curInfo,
                e = t.MakeSequenceString();
            if (this.seqUseInfoStrSent != e) {
                var n = t.code;
                h.gs.gconfig.IsolateBlankTagPlayers && "" == t.team && (n = p.AppHelper.GetUserEnironmentSignature());
                var o = p.GameHelper.TrimNameAndTeamName(t.team, t.name),
                    r = o[0],
                    s = o[1];
                i.Utils.Confirm(r.length + s.length <= 15), this.conn.SendUserEntryInfo(s, r, n, t.skinUrl, t.skinUrl2), this.chatAppModel && this.chatAppModel.SetUserEntryInfo(s, r, n, t.skinUrl, t.profileIndex), this.seqUseInfoStrSent = e
            }
        }, t.prototype.SendChatMessage = function(t) {
            if (this.chatAppModel) this.chatAppModel.SendMessageOnGameChatSession(t);
            else {
                var e = this.uMan.selfUserId;
                this.conn.SendChatMessage(t, e)
            }
        }, t.prototype.StatesUpdationProc = function() {
            setTimeout(this.StatesUpdationProc.bind(this), 1e3), p.TimeChecker.Start("StatusUpdationProc"), this.nodeMan.RecordLatencyCheckStartTime(), this.conn.SendLatencyCheckRequest(), this.nodeMan.UpdateSelfScore(), this.perfModel.replayBufferBytes = this.dataRecorder.totalBytes, this.dataRecorder.DiscardUnnecessaryPackets();
            this.perfModel.debugObj, f.TNodeData.Pool.capacity, f.TNodeData.Pool.pool.length;
            p.TimeChecker.Stop()
        }, t.prototype.Initialize = function() {
            var t = this;
            this.dataRecorder.Initialize(this.nodeMan);
            var e = document.querySelector("#game_control_overlay");
            window.addEventListener("keydown", function(e) {
                e.repeat || t.KeyboardInputHandler(e, !0) && e.preventDefault()
            }), window.addEventListener("keyup", function(e) {
                t.KeyboardInputHandler(e, !1) && e.preventDefault()
            }), window.onmousedown = function(e) {
                h.gs.gstates.isMainPanelVisible || t.MouseInputHandler(e.button, !0)
            }, window.onmouseup = function(e) {
                h.gs.gstates.isMainPanelVisible || t.MouseInputHandler(e.button, !1)
            }, window.oncontextmenu = function(t) {
                return t.preventDefault(), !1
            }, window.onmousemove = function(e) {
                t.sight.mouseX = e.clientX, t.sight.mouseY = e.clientY
            };
            var n = function(e) {
                var n = e.wheelDelta / 120;
                h.gs.gstates.isBenchmarkMode || t.sight.ShiftScale(n)
            };
            navigator.userAgent.indexOf("Firefox") >= 0 ? e.addEventListener("DOMMouseScroll", n, !1) : e.onmousewheel = n, this.nodeMan.selfUnitsDeadCallback = this.SelfUnitsDeadProc.bind(this), this.StatesUpdationProc()
        }, t.prototype.Reset = function() {
            this.seqUseInfoStrSent = null, this.isSuspend = !1
        }, t.prototype.ConnectToGameServer = function(t) {
            void 0 === t && (t = null), t || (t = this.serverUriCash || d.AppConfigurator.instance.gameServerAddress);
            var e = t.split("//")[1].split(":"),
                n = e[0],
                i = parseInt(e[1]);
            window.GameServerHost = n, window.GameServerPort = i, this.sight.initDone = !1, this.isSuspend = !1, this.gameHudModel.ClearChatMessages(), this.nodeMan.ResetToInitialiState(), this.dataRecorder.Reset(), this.uMan.Reset(), this.Reset(), this.conn.ConnectToGameServer(t), this.serverUriCash = t
        }, t.prototype.ConnectToGameServerEx = function(t, e) {
            h.gs.gstates.chatRoomSig = e, this.ConnectToGameServer(t)
        }, t.prototype.CloseConnection = function() {
            this.sight.initDone = !1, this.conn.CloseConnection()
        }, t
    }();
    e.GameCore = S, console.log("gamecore 170127h"), e.gameCore = new S
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t() {
            riot.observable(this)
        }
        return t.prototype.on = function(t, e) {}, t.prototype.one = function(t, e) {}, t.prototype.off = function(t) {}, t.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        }, t
    }();
    e.Observable = i;
    var o = function() {
        function t() {}
        return t.prototype.update = function(t) {}, t.prototype.unmount = function(t) {}, t.prototype.on = function(t, e) {}, t.prototype.one = function(t, e) {}, t.prototype.off = function(t) {}, t.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        }, t.prototype.mixin = function(t, e) {}, t.createElement = function(t) {
            var e = this.prototype.tagName,
                n = document.createElement(e);
            return riot.mount(n, e, t), n
        }, t
    }();

    function r(t) {
        var n;
        if (void 0 === t.prototype.template) throw "template property not specified";
        var i = t.prototype.template;
        i.indexOf("<") < 0 ? void 0 !== e.precompiledTags[i] ? n = e.precompiledTags[i] : (i = function(t) {
            var e = new XMLHttpRequest;
            if (e.open("GET", t, !1), e.send(), 200 == e.status) return e.responseText;
            throw e.responseText
        }(i), n = riot.compile(i, !0, {
            entities: !0
        })[0]) : n = riot.compile(i, !0, {
            entities: !0
        })[0], t.prototype.tagName = function(e) {
            return riot.tag2(e.tagName, e.html, e.css, e.attribs, function(e) {
                ! function(t, e) {
                    var n = Object.keys(e.prototype).reduce(function(t, n) {
                        return t[n] = Object.getOwnPropertyDescriptor(e.prototype, n), t
                    }, {});
                    Object.defineProperties(t, n)
                }(this, t), t.apply(this, [e]), void 0 !== t.prototype.mounted && this.on("mount", this.mounted), void 0 !== t.prototype.unmounted && this.on("unmount", this.unmounted), void 0 !== t.prototype.updating && this.on("update", this.updating), void 0 !== t.prototype.updated && this.on("updated", this.updated)
            }, riot.settings.brackets), e.tagName
        }(n)
    }
    e.Element = o, e.precompiledTags = {}, e.registerClass = r, e.template = function(t) {
        return function(e) {
            e.prototype.template = t, r(e)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t) {
            this.bytes = new Uint8Array(t), this.pos = 0
        }
        return Object.defineProperty(t.prototype, "Length", {
            get: function() {
                return this.bytes.length
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.ReadUint8 = function() {
            return this.bytes[this.pos++]
        }, t.prototype.ReadUint16 = function() {
            return this.ReadUint8() | this.ReadUint8() << 8
        }, t.prototype.ReadUint32 = function() {
            var t = this.ReadUint8(),
                e = this.ReadUint8(),
                n = this.ReadUint8();
            return this.ReadUint8() << 24 | n << 16 | e << 8 | t
        }, t.prototype.ReadInt16 = function() {
            var t = this.ReadUint16();
            return t >= 32768 && (t -= 65536), t
        }, t.prototype.ReadInt32 = function() {
            var t = this.ReadUint32();
            return t >= 2147483648 && (t -= 4294967295), t
        }, t.prototype.ReadFloat32 = function() {
            var t = this.ReadUint32(),
                e = new ArrayBuffer(4);
            return new Uint32Array(e)[0] = t, new Float32Array(e)[0]
        }, t.prototype.ReadStringEx = function() {
            for (var t = this.ReadUint16(), e = "", n = 0; n < t; n++) e += String.fromCharCode(this.ReadUint16());
            return e
        }, t
    }();
    e.DataFrameReader = i;
    var o = function() {
        function t() {
            this.bytes = []
        }
        return Object.defineProperty(t.prototype, "Buffer", {
            get: function() {
                return this.bytes
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ArrayBuffer", {
            get: function() {
                return new Uint8Array(this.bytes).buffer
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.WriteUint8 = function(t) {
            this.bytes.push(t)
        }, t.prototype.WriteUint16 = function(t) {
            this.bytes.push(255 & t), this.bytes.push(t >> 8 & 255)
        }, t.prototype.WriteInt16 = function(t) {
            t < 0 && (t += 65536), this.WriteUint16(t)
        }, t.prototype.WriteUint32 = function(t) {
            this.bytes.push(255 & t), this.bytes.push(t >> 8 & 255), this.bytes.push(t >> 16 & 255), this.bytes.push(t >> 24 & 255)
        }, t.prototype.WriteUint64 = function(t) {
            this.bytes.push(255 & t), this.bytes.push(t >> 8 & 255), this.bytes.push(t >> 16 & 255), this.bytes.push(t >> 24 & 255), this.bytes.push(t >> 32 & 255), this.bytes.push(t >> 40 & 255), this.bytes.push(t >> 48 & 255), this.bytes.push(t >> 56 & 255)
        }, t.prototype.WriteInt32 = function(t) {
            t < 0 && (t += 4294967295), this.WriteUint32(t)
        }, t.prototype.WriteFloat32 = function(t) {
            var e = new ArrayBuffer(4);
            new Float32Array(e)[0] = t;
            var n = new Uint32Array(e)[0];
            this.WriteUint32(n)
        }, t.prototype.WriteStringEx = function(t) {
            this.WriteUint16(t.length);
            for (var e = 0; e < t.length; e++) this.WriteUint16(t.charCodeAt(e))
        }, t
    }();
    e.DataFrameWriter = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(6),
        o = function() {
            function t() {}
            return t.SessionInitialize = function(t) {
                var e = new i.DataFrameWriter;
                return e.WriteUint8(252), e.WriteStringEx("lwga-110"), e.WriteStringEx(t), e.ArrayBuffer
            }, t.AimCursor = function(t, e) {
                var n = new i.DataFrameWriter;
                return n.WriteUint8(16), n.WriteInt32(t >> 0), n.WriteInt32(e >> 0), n.ArrayBuffer
            }, t.UserEntryInfo = function(t, e, n, o, r) {
                var s = new i.DataFrameWriter;
                return s.WriteUint8(30), s.WriteStringEx(t), s.WriteStringEx(e), s.WriteStringEx(o), s.WriteStringEx(n), s.WriteStringEx(r), s.ArrayBuffer
            }, t.RequestStartPlay = function() {
                var t = new i.DataFrameWriter;
                return t.WriteUint8(31), t.ArrayBuffer
            }, t.RequestStartSpectate = function() {
                var t = new i.DataFrameWriter;
                return t.WriteUint8(1), t.ArrayBuffer
            }, t.PlayerAction = function(t, e) {
                var n = new i.DataFrameWriter;
                return n.WriteUint8(25), n.WriteUint8(t), n.WriteUint8(e), n.ArrayBuffer
            }, t.ChatMessage = function(t, e) {
                var n = new i.DataFrameWriter;
                return n.WriteUint8(128), n.WriteUint16(e), n.WriteStringEx(""), n.WriteStringEx(t), n.ArrayBuffer
            }, t.LatencyCheckRequest = function() {
                var t = new i.DataFrameWriter;
                return t.WriteUint8(130), t.ArrayBuffer
            }, t.SpecifySpecTarget = function(t) {
                var e = new i.DataFrameWriter;
                return e.WriteUint8(27), e.WriteInt32(t), e.ArrayBuffer
            }, t
        }();
    e.Packets = o;
    var r = function() {
        function t() {}
        return t.NodeRemoval = function(t) {
            var e = new i.DataFrameWriter;
            return e.WriteUint8(161), e.WriteUint32(t), e.ArrayBuffer
        }, t.UserEntryInfo = function(t, e, n, o, r, s) {
            var a = new i.DataFrameWriter;
            return a.WriteUint8(162), a.WriteUint16(t), a.WriteStringEx(e), a.WriteStringEx(n), a.WriteUint16(o), a.WriteStringEx(r), a.WriteStringEx(s), a.ArrayBuffer
        }, t.PlayerColor = function(t, e) {
            var n = new i.DataFrameWriter;
            return n.WriteUint8(163), n.WriteUint16(t), n.WriteUint32(e), n.ArrayBuffer
        }, t.TeamColor = function(t, e) {
            var n = new i.DataFrameWriter;
            return n.WriteUint8(164), n.WriteUint16(t), n.WriteUint32(e), n.ArrayBuffer
        }, t.MoveSightToward = function(t, e, n) {
            var o = new i.DataFrameWriter;
            return o.WriteUint8(165), o.WriteInt32(t >> 0), o.WriteInt32(e >> 0), o.WriteFloat32(n), o.ArrayBuffer
        }, t.SightState = function(t, e, n, o, r, s, a) {
            var l = new i.DataFrameWriter;
            return l.WriteUint8(166), l.WriteInt32(t >> 0), l.WriteInt32(e >> 0), l.WriteFloat32(n), l.WriteInt32(o >> 0), l.WriteInt32(r >> 0), l.WriteUint8(s ? 1 : 0), l.WriteUint16(a), l.ArrayBuffer
        }, t
    }();
    e.InternalPackets = r
}, function(t, e) {
    t.exports = PIXI
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t() {}
        return t.PermanentKeeped = [42, 45, 39, 36, 35, 65], t.NotForRecord = [43, 200, 201, 131, 133, 202], t
    }();
    e.OpcodeGroups = i;
    var o = function() {
        return function(t, e, n, i) {
            this.playerId = t, this.xpos = e, this.ypos = n, this.mass = i
        }
    }();
    e.TMapData = o;
    var r = function() {
        return function(t, e, n) {
            this.name = t, this.score = e, this.colorStr = n
        }
    }();
    e.TLeaderboardData = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(1),
        r = n(6),
        s = n(7),
        a = n(9),
        l = n(2),
        c = n(0),
        h = n(3),
        d = function() {
            function t() {}
            return t.prototype.Initialize = function(t, e, n, o) {
                this.nodeId = t, this.cellType = e, this.ownerPlayerId = n, this.color = o, this.xpos = 0, this.ypos = 0, this.mass = 0, this.radius = 0, this.motionAngle = 0, this.motionSpeed = 0, this.canEat = !1, this.canEaten = !1, this.splitNum = -1, this.splitOrderWeight = -1, this.canSplit = !1, this.showMark = !1, this.sizeLevel = -1, this.velocity = new i.Vector(0, 0)
            }, t.prototype.UpdateProps = function(t, e, n, i, o) {
                var r = this.xpos,
                    s = this.ypos;
                this.xpos = t, this.ypos = e, this.mass = n, this.radius = l.GameHelper.MassToRadius(n), this.motionAngle = i, this.motionSpeed = o;
                this.velocity.Set(t - r, e - s)
            }, t.Pool = new l.ObjectPool(c.gs.gconfig.MaxCellsNum, function() {
                return new t
            }), t
        }();
    e.TNodeData = d;
    var u = function() {
            return function(t, e, n, i) {
                this.eaterId = t, this.eatenId = e, this.limitRadius = n, this.canEat = i
            }
        }(),
        p = function() {
            function t() {
                this.nodeId = -1
            }
            return t.prototype.SetTarget = function(t, e, n) {
                this.nodeId = t, this.canEat = e, this.canPushAll = n
            }, t
        }(),
        f = function() {
            function t(t) {
                this.eatingLimitList = [], this.AimTargetData = new p, this.gameCore = t
            }
            return t.prototype.UpdateNodeAnalysisProps = function() {
                var t = this;
                if (!c.gs.gstates.isBenchmarkMode) {
                    var e = this.gameCore.nodeMan,
                        n = e.nodes,
                        r = e.operationUnitIndex,
                        s = e.selfNodeIds[r].length;
                    if (this.gameCore.gameHudModel.SetSplitNum(s), s > 0) {
                        var a = e.selfNodeIds[r].map(function(t) {
                                return e.nodes.get(t)
                            }),
                            h = a[0];
                        a.forEach(function(t) {
                            t.mass > h.mass && (h = t)
                        });
                        var d = a.slice(0).sort(function(t, e) {
                                return t.nodeId - e.nodeId
                            }),
                            p = d.length,
                            f = 16 - p,
                            g = 0;
                        d.forEach(function(t, e) {
                            var n = 0;
                            g < f ? t.mass >= 44 ? (n = 0, g++, t.canSplit = !0) : (n = 1, t.canSplit = !1) : (n = i.Nums.VMap(e, f, p - 1, .4, 1, !0), t.canSplit = !1), t.splitOrderWeight = n
                        });
                        var y = this.gameCore.sight,
                            m = e.GetNodeIdUnderCursor(y.aimCursorX, y.aimCursorY),
                            v = e.nodes.get(m);
                        v && v.ownerPlayerId == e.activeSelfPlayerId && (m = -1, v = null);
                        var S = !1,
                            b = !1;
                        if (v) {
                            var C = 2 * v.mass * 1.3;
                            a.forEach(function(t) {
                                t.mass > C && (l.GameHelper.GetDist(t.xpos, t.ypos, v.xpos, v.ypos) < 780 + t.radius && t.canSplit && (S = !0))
                            });
                            var x = a.length;
                            if (x < 8) {
                                var _ = void 0;
                                _ = 1 == x ? 16 : 2 == x ? 8 : x <= 4 ? 4 : 2, this.gameCore.ShowDebugValue("div", _);
                                var k = h.mass / _;
                                v.mass > 1.3 * k && (b = !0)
                            }
                        }
                        this.AimTargetData.SetTarget(m, S, b), n.forEach(function(t) {
                            t.showMark = !1, t.canEat = !1, t.canEaten = !1, t.sizeLevel = -1
                        }), n.forEach(function(t) {
                            var e = t.mass,
                                n = h.mass,
                                i = 2 * n * 1.3,
                                o = 1.3 * n,
                                r = .77 * n,
                                s = .5 * n * .77,
                                a = n / 16 * 1.3;
                            t.sizeLevel = e > i ? 0 : e > o ? 1 : e > r ? 2 : e > s ? 3 : e > a ? 4 : 5
                        }), a.forEach(function(e) {
                            var o = .5 * e.mass * .77;
                            n.forEach(function(n) {
                                if (!(a.indexOf(n) >= 0)) {
                                    if (l.GameHelper.HitTestAABB(e.xpos, e.ypos, n.xpos, n.ypos, 1200)) {
                                        var r = t.gameCore.sight,
                                            s = new i.Vector(r.aimCursorX - e.xpos, r.aimCursorY - e.ypos);
                                        s.Normalize(), s.Scale(1200);
                                        var c = e.xpos + s.x,
                                            d = e.ypos + s.y;
                                        if (!(l.GameHelper.GetLinePointDist(e.xpos, e.ypos, c, d, n.xpos, n.ypos) > e.radius + n.radius)) {
                                            n.showMark = !0;
                                            var u = l.GameHelper.GetDist(e.xpos, e.ypos, n.xpos, n.ypos);
                                            if (n.mass < o && e.canSplit && u < 720 + e.radius && (n.canEat = !0), e == h && u < 720 + e.radius) {
                                                var p = 2 * e.mass * 1.3;
                                                n.mass > p && (n.canEaten = !0, n.showMark = !0)
                                            }
                                        }
                                    }
                                }
                            })
                        }), a.forEach(function(t) {
                            return t.splitNum = a.length
                        })
                    }
                    this.eatingLimitList = [], n.forEach(function(e) {
                        0 == e.cellType && n.forEach(function(n) {
                            if (0 == n.cellType && e.ownerPlayerId != n.ownerPlayerId && l.GameHelper.HitTestAABB(e.xpos, e.ypos, n.xpos, n.ypos, e.radius + n.radius)) {
                                var i = e.radius > n.radius ? e : n,
                                    r = e == i ? n : e;
                                if (l.GameHelper.GetDist(e.xpos, e.ypos, n.xpos, n.ypos) < i.radius) {
                                    var s = i.mass > 1.3 * r.mass,
                                        a = i.radius - .41 * r.radius,
                                        c = o.Arrays.First(t.eatingLimitList, function(t) {
                                            return t.eaterId == i.nodeId
                                        });
                                    c ? a > c.limitRadius && (c.limitRadius = a, c.eatenId = r.nodeId) : t.eatingLimitList.push(new u(i.nodeId, r.nodeId, a, s))
                                }
                            }
                        })
                    })
                }
            }, t
        }();
    e.NodeAnalyzer = f;
    var g = function() {
        function t(t) {
            this.nodes = new Map, this.selfNodeIds = [
                [],
                []
            ], this.activeSelfPlayerId = -1, this.gameCore = t, this.nodeAnalyzer = new f(t)
        }
        return Object.defineProperty(t.prototype, "uMan", {
            get: function() {
                return this.gameCore.uMan
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "gameHud", {
            get: function() {
                return this.gameCore.gameHudModel
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "dataReceiver", {
            get: function() {
                return this.gameCore.dataRecorder
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "sight", {
            get: function() {
                return this.gameCore.sight
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "operationUnitIndex", {
            get: function() {
                return this.activeSelfPlayerId == this.uMan.selfUserId ? 0 : 1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "hasSelfNode", {
            get: function() {
                return this.selfNodeIds[0].length > 0 || this.selfNodeIds[1].length > 0
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.PostClearAllNodes = function() {
            this.selfNodeIds = [
                [],
                []
            ], this.nodes.forEach(function(t) {
                d.Pool.Release(t)
            }), this.nodes.clear()
        }, t.prototype.ResetToInitialiState = function() {
            this.uMan.ClearUserInfos(), this.PostClearAllNodes()
        }, t.prototype.SyncGameViewToModel = function() {
            this.nodeAnalyzer.UpdateNodeAnalysisProps(), this.gameViewSyncNodesToListProc()
        }, t.prototype.CalcurateCenterPointOfAllSelfCells = function() {
            for (var t = 0, e = 0, n = 0, i = 0; i < 2; i++)
                for (var o = 0, r = this.selfNodeIds[i]; o < r.length; o++) {
                    var s = r[o],
                        a = this.nodes.get(s);
                    t += a.xpos * a.mass, e += a.ypos * a.mass, 0, n += a.mass
                }
            return [t /= n, e /= n]
        }, t.prototype.UpdateSelfScore = function() {
            var t = 0;
            if (!c.gs.gstates.isBenchmarkMode)
                for (var e = 0; e < 2; e++)
                    for (var n = 0, i = this.selfNodeIds[e]; n < i.length; n++) {
                        var o = i[n];
                        t += this.nodes.get(o).mass
                    }
            this.gameHud.PostSelfScoreData(t)
        }, t.prototype.PostNodeData = function(t, e, n, i, r, s, a, c, h) {
            var u = this.nodes.get(t),
                p = !1;
            if (!u && (u = d.Pool.Gain(), o.Utils.Confirm(u), u.Initialize(t, e, s, a), this.nodes.set(t, u), 0 == u.cellType)) {
                var f = l.GameHelper.DecodePlayerId(s),
                    g = f[0],
                    y = f[1];
                g == this.uMan.selfUserId && (0 == this.selfNodeIds[y].length && (p = !0), this.selfNodeIds[y].push(t))
            }
            u.UpdateProps(n, i, r, c, h), p && this.sight.SetSpawned()
        }, t.prototype.PostNodeRemoval = function(t) {
            var e = this.nodes.get(t);
            e && (this.nodes.delete(t), d.Pool.Release(e), (o.Arrays.Remove(this.selfNodeIds[0], t) || o.Arrays.Remove(this.selfNodeIds[1], t)) && 0 == this.selfNodeIds[0].length && 0 == this.selfNodeIds[1].length && this.selfUnitsDeadCallback && this.selfUnitsDeadCallback())
        }, t.prototype.RecordLatencyCheckStartTime = function() {
            this.latencyCheckStartTime = Date.now()
        }, t.prototype.PostExternalChatMessage = function(t, e) {
            new Date;
            var n = o.DateTimeHelper.GetHourMinutesString();
            this.gameHud.PostChatMessage(n, t, e, null)
        }, t.prototype.OnEnterBenchMarkMode = function() {
            this.gameHud.PostLeaderboardData([]), this.gameHud.PostTeamRankingData([]), this.gameHud.PostMapData([]), this.PostClearAllNodes(), this.SyncGameViewToModel(), this.gameHud.PostServerStatusData(""), this.gameHud.PostLatencyData(0), this.gameHud.PostServerUserNumData(0, 0, 0, 0)
        }, t.prototype.GetPlayerIdUnderCursor = function(t, e) {
            var n = -1;
            return this.nodes.forEach(function(i) {
                -1 == n && (0 == i.cellType && l.GameHelper.GetDist(i.xpos, i.ypos, t, e) < i.radius && (n = i.ownerPlayerId))
            }), n
        }, t.prototype.GetNodeIdUnderCursor = function(t, e) {
            var n = -1;
            return this.nodes.forEach(function(i) {
                -1 == n && (0 == i.cellType && l.GameHelper.GetDist(i.xpos, i.ypos, t, e) < i.radius && (n = i.nodeId))
            }), n
        }, t.prototype.DecodeFrame = function(t, e, n) {
            var i = new r.DataFrameReader(t);
            switch (i.ReadUint8()) {
                case 43:
                    var d = i.ReadUint16();
                    this.uMan.PostSelfUserId(d);
                    break;
                case 65:
                    i.ReadFloat32(), i.ReadFloat32();
                    var u = i.ReadFloat32();
                    i.ReadFloat32();
                    c.gs.gconfig.UpdateFieldSize(u), this.sight.Init();
                    break;
                case 42:
                    for (var p = i.ReadUint16(), f = 0; f < p; f++) {
                        var g = i.ReadUint16(),
                            y = i.ReadStringEx(),
                            m = i.ReadStringEx(),
                            v = i.ReadStringEx(),
                            S = i.ReadUint8() > 0,
                            b = i.ReadUint16(),
                            C = i.ReadStringEx(),
                            x = i.ReadStringEx();
                        if (e) {
                            if ((tt = this.uMan.GetUserInfoById(g)) != this.uMan.fallbackUserInfo) {
                                var _ = s.InternalPackets.UserEntryInfo(g, y, m, b, v, x);
                                this.dataReceiver.PostInternalRecordingPacket(_)
                            }
                            tt.clientId, this.uMan.selfUserId
                        }
                        this.uMan.PostUserInfoData(g, y, m, b, v, x, S, C)
                    }
                    break;
                case 45:
                    for (p = i.ReadUint16(), f = 0; f < p; f++) {
                        var k = i.ReadUint16();
                        this.uMan.PostUserLeave(k)
                    }
                    break;
                case 39:
                    for (p = i.ReadUint16(), f = 0; f < p; f++) {
                        var w = i.ReadUint16(),
                            I = (g = i.ReadUint16(), i.ReadUint8()),
                            P = i.ReadUint8(),
                            M = i.ReadUint8(),
                            T = i.ReadUint8(),
                            R = I << 16 | P << 8 | M;
                        if (e)
                            if ((tt = this.uMan.GetUserInfoById(w)) != this.uMan.fallbackUserInfo) {
                                var U = tt.colors[1 & T];
                                this.dataReceiver.PostInternalRecordingPacket(s.InternalPackets.PlayerColor(w, U))
                            } this.uMan.PostPlayerColorData(w, R)
                    }
                    break;
                case 36:
                    for (p = i.ReadUint16(), f = 0; f < p; f++) {
                        b = i.ReadUint16();
                        var A = i.ReadStringEx(),
                            F = i.ReadStringEx(),
                            N = i.ReadStringEx();
                        R = l.ColorHelper.ColorFromHtmlString(F);
                        if (e)
                            if ((et = this.uMan.GetTeamInfoById(b)) != this.uMan.fallbackTeamInfo) {
                                var O = et.color;
                                this.dataReceiver.PostInternalRecordingPacket(s.InternalPackets.TeamColor(b, O))
                            } this.uMan.PostTeamInfoData(b, R, A, N)
                    }
                    break;
                case 35:
                    for (p = i.ReadUint16(), f = 0; f < p; f++) {
                        b = i.ReadUint16();
                        this.uMan.PostTeamInfoRemoval(b)
                    }
                    break;
                case 18:
                    this.PostClearAllNodes(), n || this.SyncGameViewToModel();
                    break;
                case 15:
                    var E = i.ReadFloat32(),
                        D = i.ReadFloat32();
                    i.ReadFloat32(), i.ReadFloat32();
                    if (this.sight.SetServerEyePos(E, D), i.ReadUint8() > 0) {
                        w = i.ReadUint16();
                        var B = i.ReadFloat32(),
                            H = i.ReadFloat32(),
                            G = i.ReadUint8(),
                            L = i.ReadUint32();
                        this.gameHud.SetSpecTargetScore(L);
                        var j = (1 & G) > 0,
                            z = (g = 65534 & w, c.gs.gstates);
                        z.isRealtimeMode && z.isSpectate && g != this.uMan.selfUserId ? this.sight.setAimCursorProps(w, B, H, j) : this.sight.aimPlayerId = w, g == this.uMan.selfUserId && (this.activeSelfPlayerId = w)
                    } else this.sight.aimPlayerId = -1, this.activeSelfPlayerId = -1;
                    var V = this.sight.aimPlayerId > 0 ? 65534 & this.sight.aimPlayerId : -1;
                    for (this.gameHud.SetAimPlayerClient(V);;) {
                        if (0 == (Z = i.ReadUint32())) break;
                        var W = i.ReadUint8(),
                            K = i.ReadFloat32(),
                            q = i.ReadFloat32(),
                            X = i.ReadUint16(),
                            Y = (w = i.ReadUint16(), 0);
                        1 == W && (Y = i.ReadUint32());
                        var Q = 0,
                            J = 0;
                        if (i.ReadUint8() && (Q = i.ReadFloat32(), J = i.ReadFloat32()), e && !this.nodes.has(Z)) {
                            _ = s.InternalPackets.NodeRemoval(Z);
                            this.dataReceiver.PostInternalRecordingPacket(_)
                        }
                        n && (J = 0), this.PostNodeData(Z, W, K, q, X, w, Y, Q, J)
                    }
                    for (p = i.ReadUint16(), f = 0; f < p; f++) {
                        var Z = i.ReadUint32();
                        this.PostNodeRemoval(Z)
                    }
                    n || this.SyncGameViewToModel();
                    break;
                case 47:
                    if (n) break;
                    p = i.ReadUint8();
                    var $ = new Array;
                    for (f = 0; f < p; f++) {
                        w = i.ReadUint16(), X = i.ReadUint32();
                        var tt = this.uMan.GetUserInfoById(w),
                            et = this.uMan.GetTeamInfoById(tt.teamId);
                        $.push(new a.TLeaderboardData(tt.fullName, X, et.colorStr))
                    }
                    this.gameHud.PostLeaderboardData($);
                    break;
                case 46:
                    if (n) break;
                    for (p = i.ReadUint8(), $ = new Array, f = 0; f < p; f++) {
                        b = i.ReadUint16();
                        var nt = i.ReadUint16(),
                            it = this.uMan.GetTeamInfoById(b);
                        $.push(new a.TLeaderboardData(it.teamName, nt, it.colorStr))
                    }
                    this.gameHud.PostTeamRankingData($);
                    break;
                case 41:
                    if (n) break;
                    p = i.ReadUint16();
                    var ot = new Array;
                    for (f = 0; f < p; f++) {
                        w = i.ReadUint16(), K = i.ReadInt16(), q = i.ReadInt16(), X = i.ReadUint16();
                        ot.push(new a.TMapData(w, K, q, X))
                    }
                    this.gameHud.PostMapData(ot);
                    break;
                case 128:
                    g = i.ReadUint16(), i.ReadStringEx();
                    var rt = i.ReadStringEx(),
                        st = (new Date, o.DateTimeHelper.GetHourMinutesString()),
                        at = (tt = this.uMan.GetUserInfoById(g), et = this.uMan.GetTeamInfoById(tt.teamId), !0);
                    h.AppConfigurator.instance.useTeamSeparatedChat && et != this.uMan.selfTeamInfo && (at = !1), at ? this.gameHud.PostChatMessage(st, tt.fullName, rt, et.colorStr) : console.log("stray chat message: " + st + " " + tt.fullName + " " + rt);
                    break;
                case 14:
                    break;
                case 131:
                    if (n) break;
                    var lt = Date.now() - this.latencyCheckStartTime;
                    this.gameHud.PostLatencyData(lt);
                    break;
                case 133:
                    var ct = i.ReadStringEx();
                    console.log(ct);
                    break;
                case 200:
                    var ht = i.ReadStringEx(),
                        dt = JSON.parse(ht);
                    c.gs.gconfig.ShowAlwaysAllPlayersInMap = !dt.enableTeamMapSeparation, c.gs.gconfig.ShowAlwaysAllPlayersSkin = !dt.enableTeamSkinSeparation;
                    var ut = this.gameCore.chatAppModel;
                    ut && ut.SetGameTeamChatSessionEnabled(dt.enableTeamChatSeparation);
                    var pt = c.gs.gstates.enableTeamChatSeparationCurrent != dt.enableTeamChatSeparation;
                    c.gs.gstates.enableTeamChatSeparationCurrent = dt.enableTeamChatSeparation, ut && ut.SetServerSignature(c.gs.gstates.chatRoomSig, pt);
                    break;
                case 201:
                    ht = i.ReadStringEx();
                    this.gameHud.PostServerInstructionText(ht);
                    break;
                case 202:
                    ct = i.ReadStringEx();
                    this.gameHud.PostServerDisplayMessage(ct);
                    break;
                case 203:
                    if (n) break;
                    ht = i.ReadStringEx();
                    this.gameHud.PostServerStatusData(ht);
                    break;
                case 91:
                    if (n) break;
                    i.ReadUint16();
                    var ft = i.ReadUint16(),
                        gt = i.ReadUint16(),
                        yt = i.ReadUint16(),
                        mt = i.ReadUint16();
                    i.ReadStringEx(), i.ReadUint32();
                    this.gameHud.PostServerUserNumData(ft, yt, gt, mt);
                    break;
                case 161:
                    Z = i.ReadUint32();
                    this.PostNodeRemoval(Z);
                    break;
                case 162:
                    g = i.ReadUint16();
                    var vt = i.ReadStringEx();
                    m = i.ReadStringEx(), b = i.ReadUint16(), v = i.ReadStringEx(), x = i.ReadStringEx();
                    this.uMan.PostUserInfoData(g, vt, m, b, v, x);
                    break;
                case 163:
                    w = i.ReadUint16(), R = i.ReadUint32();
                    this.uMan.PostPlayerColorData(w, R);
                    break;
                case 164:
                    b = i.ReadUint16(), R = i.ReadUint32();
                    this.uMan.PostTeamInfoData(b, R);
                    break;
                case 166:
                    var St = i.ReadInt32(),
                        bt = i.ReadInt32(),
                        Ct = i.ReadFloat32(),
                        xt = (B = i.ReadInt32(), H = i.ReadInt32(), j = i.ReadUint8() > 0, i.ReadUint16());
                    this.sight.FeedReplaySightState(St, bt, Ct, B, H, j, xt);
                    break;
                case 19:
                    i.ReadUint8();
                    var _t = i.ReadInt32(),
                        kt = i.ReadInt32(),
                        wt = i.ReadInt32(),
                        It = Date.now();
                    this.sight.teamCircleX = _t, this.sight.teamCircleY = kt, this.sight.teamCircleRadius = wt, this.sight.teamCircleTimeStamp = It
            }
        }, t
    }();
    e.NodeManager = g
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(2),
        o = n(12),
        r = n(0),
        s = n(8),
        a = function() {
            function t(t) {
                var e = this,
                    n = new s.Container;
                this.box = n, this.baseSize = t ? 1600 : 200;
                var a = this.baseSize,
                    l = a / 5,
                    c = r.gs.uconfig,
                    h = r.gs.ucolors;
                if (t) {
                    var d = new s.Sprite;
                    d.anchor.x = .5, d.anchor.y = .5, d.position.x = a / 2, d.position.y = a / 2, n.addChild(d);
                    var u = new s.Graphics;
                    u.beginFill(0), u.drawRect(0, 0, a, a), u.endFill(), u.visible = !1, n.addChild(u);
                    var p = function() {
                        d.alpha = c.GetBgImageAlphaValue("fieldBackImageAlpha");
                        var t = c.fieldBackImageUri;
                        if (o.ImageLoader.CheckIsValidImageUri(t)) {
                            var n = c.fieldBackImageDrawingMode2;
                            o.ImageLoader.Instance.LoadImageThen(t, !0, function(t) {
                                if (t) {
                                    t.width, t.height;
                                    var i = Math.min(t.width, t.height),
                                        o = e.baseSize / i * (n ? 2 : 1);
                                    d.scale.x = o, d.scale.y = o, d.texture = s.Texture.fromImage(t.src), d.mask = n ? null : u, d.visible = !0
                                }
                            })
                        } else d.visible = !1
                    };
                    p(), c.RegisterChangedProc("fieldBackImageUri", p), c.RegisterChangedProc("fieldBackImageAlpha", p), c.RegisterChangedProc("fieldBackImageDrawingMode2", p)
                }
                var f = new s.Container;
                n.addChild(f), this.gridContainer = f;
                var g = new s.Graphics;
                f.addChild(g);
                for (var y = [], m = 0; m < 25; m++) {
                    var v = m % 5,
                        S = m / 5 >> 0,
                        b = String.fromCharCode(65 + S) + (v + 1),
                        C = new s.Text(b);
                    C.style.fontSize = .09 * this.baseSize >> 0, C.style.fontFamily = "CustomFont2, Arial", C.x = v * l + l / 2 - C.width / 2, C.y = S * l + l / 2 - C.height / 2, f.addChild(C), y.push(C)
                }
                var x = function() {
                    ! function() {
                        var n = h.GetColor("clFieldCoords");
                        g.alpha = i.ColorHelper.GetAlpha(n), g.clear();
                        var o = t ? .002 : .006,
                            r = e.baseSize * o >> 0,
                            s = r / 2;
                        g.lineStyle(r, n);
                        for (var c = 0; c < 6; c++) {
                            var d = c * l;
                            g.moveTo(d, -s), g.lineTo(d, a + s), g.moveTo(-s, d), g.lineTo(a + s, d)
                        }
                    }(),
                    function() {
                        var t = h.GetColor("clFieldCoords"),
                            e = i.ColorHelper.ColorToHtmlString(t);
                        y.forEach(function(t) {
                            return t.style.fill = e
                        })
                    }(), f.alpha = h.GetAlpha("clFieldCoords")
                };
                setTimeout(x, 1), h.RegisterChangedProc("clFieldCoords", x);
                var _ = new s.Graphics;
                n.addChild(_);
                var k = function() {
                    var t = .015 * e.baseSize >> 0,
                        n = .003 * e.baseSize >> 0,
                        o = h.GetColor("clFieldBorder");
                    _.alpha = i.ColorHelper.GetAlpha(o), _.clear(), _.lineStyle(t, o), _.drawRect(0 - t / 2 - n, 0 - t / 2 - n, a + t + 2 * n, a + t + 2 * n), _.endFill()
                };
                k(), h.RegisterChangedProc("clFieldBorder", k)
            }
            return t.prototype.SetScale = function(t) {
                this.box.scale.x = t, this.box.scale.y = t
            }, t.prototype.SetCoordVisibility = function(t) {
                this.gridContainer.visible = t
            }, t
        }();
    e.FieldGraphics = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t) {
            this.procsOnSettled = [], this.loadPhase = 0, this.TryToLoad(t, 0)
        }
        return t.Initialize = function() {
            t.canvas = document.createElement("canvas"), t.ctx = t.canvas.getContext("2d")
        }, t.prototype.OnImageLoaded = function() {
            var t = this.image,
                e = this.fname;
            this.isSettled = !0, t.width <= 1200 && t.height <= 1200 || (console.log("image size too large: " + e + ", " + t.width + "x" + t.height), this.image = this.GetFallBackImage()), this.FireSettled()
        }, t.prototype.OnImageError = function() {
            if (0 == this.loadPhase) {
                var t = "http://gr.ixagar.net:9400/?uri=" + this.uri;
                this.TryToLoad(t, 1)
            } else this.isSettled = !0, this.image = this.GetFallBackImage(), this.FireSettled()
        }, t.prototype.TryToLoad = function(e, n) {
            this.uri = e;
            var i = t.GetFileName(e);
            this.fname = i;
            var o = new Image;
            o.crossOrigin = "Anonymous", o.onload = this.OnImageLoaded.bind(this), o.onerror = this.OnImageError.bind(this), this.loadPhase = n, this.image = o, o.src = e
        }, t.GetFileName = function(t) {
            return t.match(/.+\/(.*)$/)[1]
        }, t.prototype.GetFallBackImage = function() {
            return document.querySelector("#img_no_image_fallback")
        }, t.prototype.FireSettled = function() {
            var t = this;
            this.procsOnSettled.forEach(function(e) {
                return e(t.image)
            }), this.procsOnSettled = []
        }, t.prototype.ExecAfterLoad = function(t) {
            this.isSettled ? t(this.image) : this.procsOnSettled.push(t)
        }, t.LoadImageThen = function(e, n) {
            var i = t.cash.get(e);
            i || (i = new t(e), t.cash.set(e, i)), i.ExecAfterLoad(n)
        }, t.cash = new Map, t
    }();
    e.ImageWrapper = i;
    var o = function() {
        function t() {
            this.imageCash = new Map
        }
        return t.prototype.LoadImageThen = function(t, e, n) {
            if (t) {
                var i = this.imageCash.get(t);
                i && i.flagLoaded ? n(i) : i || ((i = new Image).crossOrigin = "Anonymous", this.imageCash.set(t, i), i.addEventListener("load", function() {
                    i.flagLoaded = !0, n(i)
                }), i.onerror = function() {
                    console.log("failed to load " + t), n(null)
                }, i.src = e ? t : "http://gr.ixagar.net:9400/?uri=" + t)
            } else n(null)
        }, t.CheckIsValidImageUri = function(t) {
            var e = t.match(/^http[s]?\:\/\/.*\.(png|jpg|gif|jpeg)$/);
            return e && e.length > 0
        }, t.Instance = new t, t
    }();
    e.ImageLoader = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(31),
        o = n(0),
        r = function() {
            function t() {
                this.bus = new i.EventBus, this.skins = {}
            }
            return t.prototype.addSkinUrl = function(t) {
                void 0 == this.skins[t] && (this.skins[t] = o.gs.uconfig.acceptNewSkins, this.bus.emit("render"))
            }, t.prototype.removeSkinUrl = function(t) {
                void 0 != this.skins[t] && (delete this.skins[t], this.bus.emit("render"))
            }, t.prototype.setImageAvailability = function(t, e) {
                this.skins[t] = e
            }, t.prototype.setImageAvailabilityAll = function(t) {
                for (var e in this.skins) this.skins[e] = t
            }, t.prototype.getSkinAvailability = function(t) {
                return this.skins[t]
            }, t.instance = new t, t
        }();
    e.SkinImageManager = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(2),
        r = n(1),
        s = function() {
            function t(t, e, n) {
                this.key = t, this.text = e, this.SetColor(n)
            }
            return t.prototype.SetColor = function(t, e) {
                void 0 === e && (e = !1), this.color = t, this.htmlColor = o.ColorHelper.ColorToHtmlString(t), this.cssColor = o.ColorHelper.ColorToCssColorString(t), e && i.gs.ucolors.SetConfigColor(this.key, t)
            }, t
        }();
    e.ColorConfigEntry = s;
    var a = function() {
        function t() {
            this.SetColor(16711680)
        }
        return t.prototype.SetColor = function(t) {
            var e;
            this.color = t, this.htmlColor = o.ColorHelper.ColorToHtmlString(t), e = o.ColorHelper.GetHSV(t), this.hue = e[0], this.sat = e[1], this.bri = e[2], this.alpha = o.ColorHelper.GetAlpha(t)
        }, t.prototype.SetHue = function(t) {
            var e = o.ColorHelper.ColorFromHSVA(t, this.sat, this.bri, this.alpha);
            this.SetColor(e), this.hue = t
        }, t.prototype.SetAlpha = function(t) {
            var e = this.hue,
                n = o.ColorHelper.ColorFromHSVA(this.hue, this.sat, this.bri, t);
            this.SetColor(n), this.hue = e
        }, t.prototype.SetSV = function(t, e) {
            var n = this.hue,
                i = o.ColorHelper.ColorFromHSVA(this.hue, t, e, this.alpha);
            this.SetColor(i), this.hue = n, this.sat = t
        }, t.prototype.SetByHtmlColor = function(t) {
            var e = o.ColorHelper.ColorFromHtmlStringInput(t, this.alpha); - 1 != e && this.SetColor(e)
        }, t
    }();
    e.ColorEditModel = a;
    var l = function() {
            function t() {}
            return t.HotKeyToText = function(e) {
                if (e <= 0) return "";
                var n = 255 & e,
                    o = e - n,
                    r = "";
                o > 0 && (o & i.ModificationKeyCode.Shift && (r = "sft+"), o & i.ModificationKeyCode.Ctrl && (r = "ctl+"), o & i.ModificationKeyCode.Alt && (r = "alt+"));
                var s = t.keyCodeToTextTable[n];
                return s || (s = String.fromCharCode(n)), r + s
            }, t.keyCodeToTextTable = {
                32: "Space",
                13: "Enter",
                9: "Tab",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                96: "Num0",
                97: "Num1",
                98: "Num2",
                99: "Num3",
                100: "Num4",
                101: "Num5",
                102: "Num6",
                103: "Num7",
                104: "Num8",
                105: "Num9",
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                186: ":",
                187: ";",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "@",
                219: "[",
                220: "\\",
                221: "]",
                222: "^",
                226: "\\"
            }, t
        }(),
        c = function() {
            function t(t, e, n, o, r) {
                this.key = t, this.text = e, this.value = n, this.toggleHotKey = o, this.holdHotKey = r, this.toggleHotKeyText = l.HotKeyToText(o), this.holdHotKeyText = l.HotKeyToText(r), i.gs.uconfig.changedProcsForViewModel[t] = this.UpdateState.bind(this)
            }
            return t.prototype.UpdateState = function() {
                this.value = i.gs.uconfig[this.key]
            }, t.prototype.SetValue = function(t) {
                this.value = t, i.gs.uconfig.SetValue(this.key, t)
            }, t.prototype.SetToggleHotKey = function(t) {
                this.toggleHotKey = t, this.toggleHotKeyText = l.HotKeyToText(t), i.gs.uconfig.SetToggleHotKey(this.key, t)
            }, t.prototype.SetHoldHotKey = function(t) {
                this.holdHotKey = t, this.holdHotKeyText = l.HotKeyToText(t), i.gs.uconfig.SetHoldHotKey(this.key, t)
            }, t.prototype.PullModelState = function() {
                this.value = i.gs.uconfig[this.key], this.toggleHotKey = i.gs.uconfig.toggleHotKeys[this.key], this.holdHotKey = i.gs.uconfig.holdHotKeys[this.key], this.toggleHotKeyText = l.HotKeyToText(this.toggleHotKey), this.holdHotKeyText = l.HotKeyToText(this.holdHotKey)
            }, t
        }();
    e.ConfigEntry = c;
    var h = function() {
        function t(t, e, n) {
            this.key = t, this.text = e, this.hotKey = n, this.hotKeyText = l.HotKeyToText(n)
        }
        return t.prototype.SetHotKey = function(t) {
            this.hotKey = t, this.hotKeyText = l.HotKeyToText(t), i.gs.uconfig.SetControlHotKey(this.key, t)
        }, t.prototype.PullModelState = function() {
            this.hotKey = i.gs.uconfig.controlHotKeys[this.key], this.hotKeyText = l.HotKeyToText(this.hotKey)
        }, t
    }();
    e.ControlHotkeyConfigEntry = h;
    var d = function() {
        function t() {
            var t = i.gs.ucolors.colorDefs;
            this.colorEntries = Object.keys(t).map(function(e) {
                var n = i.gs.utexts[e],
                    o = t[e];
                return new s(e, n, o)
            }), this.curColorEntry = this.colorEntries[0], this.cellDisplayEntries = i.UserConfig.cellDisplayOptionPropNames.map(function(t) {
                var e = i.gs.utexts[t],
                    n = i.gs.uconfig[t],
                    o = i.gs.uconfig.toggleHotKeys[t],
                    r = i.gs.uconfig.holdHotKeys[t];
                return new c(t, e, n, o, r)
            }), this.gameDisplayEntries = i.UserConfig.gameDisplayOptionPropNames.map(function(t) {
                var e = i.gs.utexts[t],
                    n = i.gs.uconfig[t],
                    o = i.gs.uconfig.toggleHotKeys[t];
                return new c(t, e, n, o, -1)
            }), this.basicBehaviorEntries = i.UserConfig.basicBehaviorPropNames.map(function(t) {
                var e = i.gs.utexts[t],
                    n = i.gs.uconfig[t];
                return new c(t, e, n, -1, -1)
            }), this.controlEntries = i.UserConfig.controlPropNames.map(function(t) {
                var e = i.gs.utexts[t],
                    n = i.gs.uconfig.controlHotKeys[t];
                return new h(t, e, n)
            }), i.gs.uconfig.resetListenerProc = this.UpdateAll.bind(this)
        }
        return t.prototype.selectColorCard = function(t) {
            var e = r.Arrays.First(this.colorEntries, function(e) {
                return e.key == t
            });
            e && (this.curColorEntry = e)
        }, t.prototype.UpdateAll = function() {
            this.cellDisplayEntries.forEach(function(t) {
                return t.PullModelState()
            }), this.gameDisplayEntries.forEach(function(t) {
                return t.PullModelState()
            }), this.basicBehaviorEntries.forEach(function(t) {
                return t.PullModelState()
            }), this.controlEntries.forEach(function(t) {
                return t.PullModelState()
            })
        }, t.instance = new t, t
    }();
    e.ConfigHub = d
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(16),
        o = n(3);
    window.onload = function() {
        console.log("LWGA-R A123 180926");
        var t = "ja" == navigator.language.slice(0, 2);
        o.AppConfigurator.instance.allowOnlyForJapaneseLangUser && !t ? document.body.innerHTML = "ã“ã®ãƒšãƒ¼ã‚¸ã¯ç¾åœ¨å›½å†…ãƒ¦ãƒ¼ã‚¶å‘ã‘ã«æä¾›ã—ã¦ã„ã¾ã™ã€‚æ—¥æœ¬èªžç’°å¢ƒä»¥å¤–ã§ã¯ãƒšãƒ¼ã‚¸ãŒè¡¨ç¤ºã•ã‚Œãªã„ã‚ˆã†ã«ãªã£ã¦ã„ã¾ã™ã€‚" : i.InitializeView()
    }
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(4),
        a = n(0),
        l = n(3),
        c = n(27),
        h = n(28),
        d = n(29),
        u = n(32),
        p = n(33),
        f = n(34),
        g = n(35),
        y = n(36),
        m = n(37),
        v = n(38),
        S = n(39);
    u.ReplayControlBarTag, p.GameOverlayTag, f.LeftConfigPanelTag, g.UserEntryPanelTag, y.ServerListRootTag, m.MainPanelTag, v.MainConfigPanelTag, S.ColorConfigPanelTag, n(40).SkinFilterPanelTag;
    var b = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gstates = a.gs.gstates, e.uconfig = a.gs.uconfig, e.cconfig = a.gs.ucolors, e.appConfig = l.AppConfigurator.instance, e.hasNewPrivateMessage = !1, e.newPrivateMessageSkinUrl = "", e.newPrivateMessageText = "", e
        }
        return i(e, t), e.prototype.onChatIconClicked = function(t) {
            window.open("unichat/chat.html", "uni-chat", "width=800, height=600, menubar=no, toolbar=no, scrollbars=no"), t.stopPropagation()
        }, e.prototype.onSkinFilterButton = function(t) {
            this.gstates.isSkinFilterPanelVisible = !this.gstates.isSkinFilterPanelVisible, t.stopPropagation()
        }, e.prototype.mounted = function() {
            setTimeout(this.InitializeAfterAllMounted.bind(this), 1)
        }, e.prototype.InitializeAfterAllMounted = function() {
            var t = this;
            a.gs.gstates.mainPanelVisibleChangedProc = this.update.bind(this), a.gs.uconfig.RegisterChangedProc("ShowReplayBar", this.update.bind(this));
            var e = document.querySelector("#adbox_content"),
                n = document.querySelector("#center_ad_area");
            document.body.removeChild(e), n.appendChild(e), e.style.display = "block";
            var i = new d.GameViewDomain2.GameView;
            s.gameCore.Initialize(), i.Initialize(), s.gameCore.serverListModel ? s.gameCore.serverListModel.Start() : (a.gs.gstates.chatRoomSig = l.AppConfigurator.instance.uniChatServerSignature, s.gameCore.ConnectToGameServer());
            var o = new c.MapView,
                r = new h.TeamRankingChartView;
            o.Initialize(this.refs.game_overlay.refs.map_canvas), r.Initialize(this.refs.game_overlay.refs.lb_chart_canvas), s.gameCore.gameHudModel.Initialize(), i.StartAnimation(), s.gameCore.chatAppModel && (s.gameCore.chatAppModel.chatNotificationBadgeProc = function(e, n, i) {
                t.hasNewPrivateMessage = e, i ? (t.newPrivateMessageSkinUrl = n, t.newPrivateMessageText = i) : (t.newPrivateMessageSkinUrl = "", t.newPrivateMessageText = ""), t.update()
            }), a.gs.gstates.playerDeadCallbackProc = function() {
                a.gs.gstates.setMainPanelVisible(!0);
                var t = document.querySelector("#center_ad_area");
                t.style.opacity = "0.5", t.style.pointerEvents = "none", setTimeout(function() {
                    t.style.opacity = "1.0", t.style.pointerEvents = "auto"
                }, 500)
            }
        }, e = o([r.template('\n<app-root>\n\t<style>\n\t\t*{\n\t\t\tbox-sizing: border-box;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t\t\n\t\tapp-root{\n\t\t\tfont-family: \'Meiryo\', \'Arial\';\n\t\t\tfont-size: 18px;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t@font-face{\n\t\t\tfont-family: \'CustomFont1\';\n\t\t\tsrc: url(\'gr/Xolonium-Regular.ttf\') format(\'truetype\');\n\t\t}\n\n\t\t@font-face{\n\t\t\tfont-family: \'CustomFont2\';\n\t\t\tsrc: url(\'gr/ReFormation Sans Regular.ttf\') format(\'truetype\');\n\t\t}\n\n\t\t@font-face{\n\t\t\tfont-family: \'IconFont1\';\n\t\t\tsrc: url(\'gr/icomoon.ttf\') format(\'truetype\');\n\t\t}\n\n\t\t.clear_both{\n\t\t\tclear: both;\n\t\t}\n\n\t\t.page_root{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: fixed;\n\t\t}\n\n\t\t#game_control_overlay{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t}\n\n\t\t.replay_bar_area_outer{\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t#psudo_cursor{\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t#psudo_cursor > img{\n\t\t\tposition: absolute;\n\t\t}\n\n\t\t#game_front_control_overlay{\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\t_background-color: #F00;\n\t\t}\n\n\t\t.ex_chat_icon_box{\n\t\t\tposition: absolute;\n\t\t\ttop: 6px;\n\t\t\tleft: 10px;\n\t\t\t_display: none;\n\t\t}\n\n\t\t#ex_chat_icon{\n\t\t\tbackground-color: rgba(255,255,255,1);\n\t\t\twidth: 45px;\n\t\t\theight: 30px;\n\t\t\tborder-radius: 2px;\n\t\t\tborder: solid 1px #08F;\n\t\t\tcursor: pointer;\n\t\t\tcolor: #444;\n\t\t\ttext-align: center;\n\t\t\tline-height: 24px;\n\t\t\tpadding: 1px;\n\t\t\tz-index: 300;\n\t\t}\n\n\t\t#ex_chat_badge{\n\t\t\tposition: absolute;\n\t\t\twidth:16px;\n\t\t\theight:16px;\n\t\t\tleft: 36px;\n\t\t\ttop: -10px;\n\t\t\tz-index: 301;\n\t\t\tdisplay: visible;\n\t\t}\n\n\t\t.skin_filter_button{\n\t\t\tposition: absolute;\n\t\t\ttop: 6px;\n\t\t\tright: 6px;\n\t\t\tborder-radius: 2px;\n\t\t\tbackground-color: #FFF;\n\t\t\tborder: solid 1px #F0A;\n\t\t\tcolor: #F0A;\n\t\t\twidth: 24px;\n\t\t\theight: 24px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tcursor: pointer;\n\t\t\tfont-family: IConFont1;\n\t\t}\n\n\t\t.ex_chat_new_message_outer{\n\t\t\tposition: absolute;\n\t\t\twidth:200px;\n\t\t\theight:50px;\n\t\t\tleft: 60px;\n\t\t\ttop: 6px;\n\t\t\tz-index: 302;\n\t\t\tdisplay: visible;\n\t\t\tbackground-color: #FFF0F0;\n\t\t\tborder: solid 1px #F44;\n\t\t\tcolor: #666;\n\t\t\tfont-size: 13px;\n\t\t\tpadding: 4px;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.ex_chat_new_message{\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.ex_chat_new_message > *{\n\t\t\tposition: absolute;\n\t\t}\n\n\t\t.ex_chat_new_message > img{\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tborder-radius: 4px;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t}\n\n\t\t.ex_chat_new_message  > div.textpart{\n\t\t\twidth: calc(100% - 40px);\n\t\t\toverflow: hidden;\n\t\t\ttop: 0;\n\t\t\tleft: 34px;\n\t\t}\n\n\n\n\t</style>\n\t<div class="page_root" spellcheck="false"\n\t\tstyle="background-color: {cconfig.cssColors.clGameBackground}; color: {cconfig.cssColors.clGameForeground};">\n\t\t<div id="game_canvas_layer">\n\t\t\t<canvas id="game_canvas_layer_main" ref="game_canvas_layer_main"/>\n\t\t</div>\n\t\t<div id="game_hud_layer">\n\t\t\t<game-overlay id="game_overlay" ref="game_overlay"/>\n\n\t\t\t<div id="psudo_cursor">\n\t\t\t\t<img src="gr/cursor.png" id="psudo_cursor_img_off" />\n\t\t\t\t<img src="gr/cursor_red.png" id="psudo_cursor_img_on" />\n\t\t\t</div>\n\t\t</div>\n\n\t\t<main-panel show={gstates.isMainPanelVisible} id="main_panel" ref="main_panel" />\n\n\t\t<div class="replay_bar_area_outer" show={uconfig.ShowReplayBar}>\n\t\t\t<replay-control-bar />\n\t\t</div>\n\n\t\t<div class="ex_chat_icon_box" show={appConfig.useUniChat}>\n\t\t\t<div id="ex_chat_icon" onmousedown={onChatIconClicked}>\n\t\t\t\t<img src="gr/chat_icon32.png" style="height:100%" />\n\t\t\t</div>\n\t\t\t\n\t\t\t<div id="ex_chat_badge" show={hasNewPrivateMessage}>\n\t\t\t\t<img src="gr/msg_badge.png" style="width:100%"/>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\'ex_chat_new_message_outer\' onmousedown={onChatIconClicked} show={hasNewPrivateMessage}>\n\t\t\t<div class=\'ex_chat_new_message\'>\n\t\t\t\t<img src={newPrivateMessageSkinUrl} />\n\t\t\t\t<div class=\'textpart\'>\n\t\t\t\t\t{newPrivateMessageText}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="skin_filter_button" onclick={onSkinFilterButton}\n\t\t\tshow={appConfig.isJapanese}>\n\t\t\t&#xe90d\n\t\t</div>\n\t\t\t\n\t\t<skin-filter-panel show={gstates.isSkinFilterPanelVisible} />\n\t\n\t\t<img src="gr/error.png" id="img_no_image_fallback" style="display:none" />\n</app-root>\n')], e)
    }(r.Element);
    e.AppRootTag = b, e.InitializeView = function() {
        var t = b.createElement();
        document.body.appendChild(t)
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(2),
        r = function() {
            function t() {
                this.colors = [0, 0], this.skinUrls = ["", ""]
            }
            return Object.defineProperty(t.prototype, "fullName", {
                get: function() {
                    return this.team + this.name
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.Initialize = function(t, e, n) {
                this.clientId = t, this.isBot = e, this.tripKey = n, this.name = "", this.team = "", this.teamId = 0;
                for (var i = 0; i < 2; i++) this.colors[i] = 0, this.skinUrls[i] = ""
            }, t.prototype.SetProps = function(t, e, n, i, o) {
                this.name = t, this.team = e, this.teamId = n, this.skinUrls[0] = i, this.skinUrls[1] = o
            }, t.prototype.SetColor = function(t, e) {
                this.colors[t] = e
            }, t
        }();
    e.TUserInfoData = r;
    var s = function() {
        function t() {}
        return t.prototype.Initialize = function(t, e, n) {
            this.teamId = t, this.teamName = e, this.section = n, this.color = 0, this.colorStr = "#000"
        }, t.prototype.SetColor = function(t) {
            this.color = t, this.colorStr = o.ColorHelper.ColorToHtmlString(t)
        }, t
    }();
    e.TTeamInfoData = s;
    var a = function() {
        function t() {
            this.userInfos = new Map, this.teamInfos = new Map;
            this.fallbackTeamInfo = new s, this.fallbackTeamInfo.Initialize(-1, "", "**"), this.fallbackTeamInfo.SetColor(4456448), this.fallbackUserInfo = new r, this.fallbackUserInfo.Initialize(-1, !1, "ERR"), this.fallbackUserInfo.SetProps("ERR", "ERR", -1, "", ""), this.fallbackUserInfo.SetColor(0, 4456448), this.fallbackUserInfo.SetColor(1, 4456448), this.selfTeamInfo = this.fallbackTeamInfo
        }
        return t.prototype.Reset = function() {
            this.selfUserId = 0, this.selfTeamInfo = this.fallbackTeamInfo, this.userInfos.clear(), this.teamInfos.clear()
        }, t.prototype.PostSelfUserId = function(t) {
            this.selfUserId = t
        }, t.prototype.PostUserInfoData = function(t, e, n, o, s, a, l, c) {
            void 0 === l && (l = null), void 0 === c && (c = null);
            var h = this.userInfos.get(t);
            h || (i.Utils.Confirm(null != l && null != c), (h = new r).Initialize(t, l, c), this.userInfos.set(t, h)), h.SetProps(e, n, o, s, a), h.isBot = l, h.clientId == this.selfUserId && (this.selfTeamInfo = this.GetTeamInfoById(h.teamId))
        }, t.prototype.PostUserLeave = function(t) {
            this.userInfos.delete(t), this.userLeavedProc && this.userLeavedProc(t)
        }, t.prototype.PostPlayerColorData = function(t, e) {
            var n = o.GameHelper.DecodePlayerId(t),
                i = n[0],
                r = n[1],
                s = this.userInfos.get(i);
            s && s.SetColor(r, e)
        }, t.prototype.PostTeamInfoData = function(t, e, n, o) {
            void 0 === n && (n = null), void 0 === o && (o = null);
            var r = this.teamInfos.get(t);
            r || (i.Utils.Confirm(null != n && null != o), (r = new s).Initialize(t, n, o), this.teamInfos.set(t, r)), r.SetColor(e)
        }, t.prototype.PostTeamInfoRemoval = function(t) {
            this.teamInfos.delete(t)
        }, t.prototype.ClearUserInfos = function() {
            this.userInfos.clear()
        }, t.prototype.GetUserInfoById = function(t) {
            return t &= 65534, this.userInfos.get(t) || this.fallbackUserInfo
        }, t.prototype.GetTeamInfoById = function(t) {
            return this.teamInfos.get(t) || this.fallbackTeamInfo
        }, t.prototype.GetCellColorForPlayer = function(t) {
            var e = 1 & t;
            return this.GetUserInfoById(t).colors[e]
        }, t.prototype.GetSkinUrlForPlayer = function(t) {
            var e = 1 & t;
            return this.GetUserInfoById(t).skinUrls[e]
        }, t.prototype.GetTeamInfoForUser = function(t) {
            t &= 65534;
            var e = this.GetUserInfoById(t);
            return this.GetTeamInfoById(e.teamId)
        }, t.prototype.GetPlayerIdsAvailable = function() {
            var t = [];
            return this.userInfos.forEach(function(e) {
                !e.isBot && "dead" != e.name && e.skinUrls[0] && e.colors[0] && t.push(e.clientId)
            }), t
        }, t
    }();
    e.UserInfoManager = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(6),
        r = n(9),
        s = n(0),
        a = n(2),
        l = function() {
            return function(t, e, n, i) {
                this.timeStamp = t, this.opcode = e, this.keep = n, this.buffer = i
            }
        }(),
        c = function() {
            function t(t, e, n) {
                this.packets = t, this.headIndex = e, this.tailIndex = n
            }
            return Object.defineProperty(t.prototype, "headTimeStamp", {
                get: function() {
                    return this.packets[this.headIndex].timeStamp
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "durationMs", {
                get: function() {
                    return i.Utils.Confirm(this.tailIndex < this.packets.length), this.packets[this.tailIndex].timeStamp - this.packets[this.headIndex].timeStamp
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(),
        h = function() {
            function t() {
                this.totalBytes = 0, this.packets = [], this.isRecording = !1, this.isPlayback = !1, this.isLoading = !1, this.trackPos = 0, this.reels = [], this.curReelIndex = 0, this.trackPosText = "", this.isAutoShiftToNextReel = !1, this.cleanIdx = 0, this.reqMainPanelShownAfterPlayback = !1, this.replaySpeedRateExp = 0, this.replaySpeedRate = 1
            }
            return t.prototype.Reset = function() {
                this.totalBytes = 0, this.packets = [], this.isRecording = !1, this.isPlayback = !1, this.isLoading = !1, this.trackPos = 0, this.recordHeadIndex = 0, this.replayIndex = 0, this.reels = [], this.curReelIndex = 0, this.trackPosText = "", this.cleanIdx = 0, this.reqMainPanelShownAfterPlayback = !1, this.Notify()
            }, Object.defineProperty(t.prototype, "curReel", {
                get: function() {
                    return this.reels[this.curReelIndex]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isReplayMode", {
                get: function() {
                    return s.gs.gstates.isReplayMode
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "numReels", {
                get: function() {
                    return this.reels.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.Initialize = function(t) {
                this.nodeMan = t, this.UpdateTrackPosText(), this.startTimeStamp = Date.now()
            }, t.prototype.SetStateChangedProc = function(t) {
                this.notificationProc = t
            }, t.prototype.Notify = function(t) {
                void 0 === t && (t = null), this.notificationProc(t)
            }, t.prototype.AddReel = function(t, e) {
                for (var n = t; n <= e; n++) this.packets[n].keep = !0;
                var i = new c(this.packets, t, e);
                this.reels.push(i), this.curReelIndex = this.reels.length - 1
            }, t.prototype.DeleteCurrentReel = function() {
                this.reels.length > 0 && (this.reels.splice(this.curReelIndex, 1), this.ShiftCurrentReel(0), this.UpdateTrackPosText())
            }, t.prototype.ShiftCurrentReel = function(t, e) {
                if (void 0 === e && (e = !1), 0 != this.reels.length) {
                    var n = (this.curReelIndex + t + this.reels.length) % this.reels.length;
                    this.curReelIndex = i.Nums.Clamp(n, 0, this.reels.length - 1), this.StartReplayMode(e), e || (this.ShiftTrackPositionLittle(1), this.ShiftTrackPositionLittle(-1))
                }
            }, t.prototype.ShiftReplaySpeed = function(t) {
                this.replaySpeedRateExp = i.Nums.Clamp(this.replaySpeedRateExp + t, -1, 2), this.replaySpeedRate = Math.pow(2, this.replaySpeedRateExp)
            }, t.prototype.HandleReplayOperation = function(t) {
                switch (t) {
                    case 1:
                        this.ToggleRecording();
                        break;
                    case 4:
                        this.TogglePlayback();
                        break;
                    case 3:
                        this.EndReplayMode();
                        break;
                    case 2:
                        this.DoInstantCapture();
                        break;
                    case 5:
                        this.ShiftCurrentReel(-1);
                        break;
                    case 6:
                        this.ShiftCurrentReel(1);
                        break;
                    case 8:
                        this.ShiftTrackPositionLittle(-1);
                        break;
                    case 9:
                        this.ShiftTrackPositionLittle(1);
                        break;
                    case 10:
                        this.DeleteCurrentReel();
                        break;
                    case 7:
                        this.isAutoShiftToNextReel = !this.isAutoShiftToNextReel;
                        break;
                    case 12:
                        this.ShiftReplaySpeed(-1);
                        break;
                    case 13:
                        this.ShiftReplaySpeed(1)
                }
                this.Notify()
            }, t.prototype.DiscardUnnecessaryPackets = function() {
                for (var t = Date.now() - 1e3 * s.gs.usupport.QuickCaptureTimeSec; this.cleanIdx < this.packets.length;) {
                    var e = this.packets[this.cleanIdx];
                    if (e) {
                        if (e.timeStamp >= t) break;
                        e.keep || (this.packets[this.cleanIdx] = null, this.totalBytes -= e.buffer.byteLength)
                    }
                    this.cleanIdx++
                }
            }, t.prototype.RecordPacket = function(t) {
                var e = new o.DataFrameReader(t).ReadUint8();
                if (!(r.OpcodeGroups.NotForRecord.indexOf(e) >= 0)) {
                    var n = Date.now(),
                        i = r.OpcodeGroups.PermanentKeeped.indexOf(e) >= 0;
                    this.isRecording && (i = !0);
                    var s = new l(n, e, i, t);
                    this.packets.push(s), this.totalBytes += t.byteLength
                }
            }, t.prototype.PostInternalRecordingPacket = function(t) {
                this.RecordPacket(t)
            }, t.prototype.PostPacketFromServer = function(t) {
                a.TimeChecker.Start("PostPacketFromServer"), this.isReplayMode || this.nodeMan.DecodeFrame(t, !0, !1), this.RecordPacket(t), a.TimeChecker.Stop()
            }, t.prototype.ToggleRecording = function() {
                this.isPlayback || (this.isRecording ? (this.isRecording = !1, this.AddReel(this.recordHeadIndex, this.packets.length - 1)) : (this.isRecording = !0, this.recordHeadIndex = this.packets.length), this.Notify())
            }, t.prototype.DoInstantCapture = function() {
                if (!this.isPlayback) {
                    var t = Date.now() - this.startTimeStamp,
                        e = 1e3 * s.gs.usupport.QuickCaptureTimeSec;
                    e > t && (e = t);
                    var n = Date.now() - e,
                        i = 0;
                    for (i = this.packets.length - 1; i > 0; i--) {
                        var o = this.packets[i];
                        if (o && o.timeStamp < n) break
                    }
                    this.AddReel(i, this.packets.length - 1), this.captureNotificationProc(), this.Notify()
                }
            }, t.prototype.ToDigits2 = function(t) {
                var e = t.toString();
                return e.length <= 1 ? "0" + e : e
            }, t.prototype.GetTimeDurationString = function(t, e) {
                var n = t / 1e3 >> 0,
                    i = n / 3600 >> 0,
                    o = (n -= 3600 * i) / 60 >> 0,
                    r = (n -= 60 * o) >> 0,
                    s = t % 1e3 / 100 >> 0,
                    a = (this.ToDigits2(i), this.ToDigits2(o)),
                    l = this.ToDigits2(r),
                    c = null;
                return c = i > 0 ? i + ":" + a + ":" + l : o + ":" + l, e && (c += "." + s), c
            }, t.prototype.UpdateTrackPosText = function() {
                var t = 0,
                    e = 0;
                this.curReel && (t = i.Nums.MapTo(this.trackPos, 0, this.curReel.durationMs), e = this.curReel.durationMs);
                var n = this.GetTimeDurationString(t, !0),
                    o = this.GetTimeDurationString(e, !0);
                this.trackPosText = n + " / " + o
            }, t.prototype.SeekReplayPosTo = function(t, e) {
                if (this.curReel) {
                    var n = this.curReel.headTimeStamp,
                        o = this.curReel.headTimeStamp + this.curReel.durationMs,
                        r = i.Nums.MapTo(t, n, o);
                    if (t >= this.trackPos)
                        for (; this.replayIndex < this.curReel.tailIndex;) {
                            if (s = this.packets[this.replayIndex]) {
                                if (s.timeStamp >= r) break;
                                this.nodeMan.DecodeFrame(s.buffer, !1, e)
                            }
                            this.replayIndex++
                        } else
                            for (; this.replayIndex > this.curReel.headIndex;) {
                                var s;
                                if (s = this.packets[this.replayIndex]) {
                                    if (s.timeStamp <= r) break;
                                    this.nodeMan.DecodeFrame(s.buffer, !1, e)
                                }
                                this.replayIndex--
                            }
                    e && this.nodeMan.SyncGameViewToModel(), this.trackPos = t, this.UpdateTrackPosText()
                }
            }, t.prototype.ShiftTrackPositionLittle = function(t) {
                if (this.curReel) {
                    var e = 100 * t / this.curReel.durationMs,
                        n = i.Nums.Clamp(this.trackPos + e, 0, 1);
                    this.SeekReplayPosTo(n, !1)
                }
            }, t.prototype.StartReplayMode = function(t) {
                s.gs.gstates.isReplayMode = !0, this.trackPos = 0, this.replayIndex = this.curReel.headIndex, this.FeedStoredPackets(0, this.curReel.headIndex), t && (this.isPlayback = !0, this.ReplayLoopProc())
            }, t.prototype.EndReplayMode = function() {
                this.FeedStoredPackets(0, this.packets.length), this.isPlayback = !1, this.trackPos = 0, s.gs.gstates.isReplayMode = !1, this.UpdateTrackPosText(), this.reqMainPanelShownAfterPlayback && (s.gs.gstates.setMainPanelVisible(!0), this.reqMainPanelShownAfterPlayback = !1)
            }, t.prototype.ReplayLoopProc = function() {
                if (this.curReel) {
                    var t = 17 / this.curReel.durationMs * this.replaySpeedRate;
                    this.SeekReplayPosTo(this.trackPos + t, !1), this.trackPos < 1 ? this.isPlayback && setTimeout(this.ReplayLoopProc.bind(this), 17) : this.isAutoShiftToNextReel && this.curReelIndex < this.reels.length - 1 ? this.ShiftCurrentReel(1, !0) : this.EndReplayMode(), this.Notify()
                }
            }, t.prototype.FeedStoredPackets = function(t, e) {
                this.isLoading = !0, 0 == t && this.nodeMan.ResetToInitialiState();
                for (var n = r.OpcodeGroups.PermanentKeeped, i = t; i < e; i++) {
                    var o = this.packets[i];
                    if (o) {
                        o.opcode;
                        n.indexOf(o.opcode) >= 0 && this.nodeMan.DecodeFrame(o.buffer, !1, !0)
                    }
                }
                this.isLoading = !1
            }, t.prototype.TogglePause = function() {
                this.isReplayMode && (this.isPlayback = !this.isPlayback, this.isPlayback && this.ReplayLoopProc())
            }, t.prototype.TogglePlayback = function() {
                null != this.curReel && (this.isRecording || (this.isReplayMode ? this.TogglePause() : (this.reqMainPanelShownAfterPlayback = s.gs.gstates.isMainPanelVisible, this.StartReplayMode(!0), s.gs.gstates.setMainPanelVisible(!1))))
            }, t
        }();
    e.DataRecorder = h
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(7),
        o = function() {
            function t() {}
            return t.prototype.SendPacket = function(t) {
                this.ws && this.ws.readyState == WebSocket.OPEN && this.ws.send(t)
            }, t.prototype.CloseConnection = function() {
                this.ws && (this.ws.onopen = null, this.ws.onmessage = null, this.ws.onclose = null, this.ws.onerror = null, this.ws.close(), this.ws = null)
            }, t.prototype.SendSessionInitialize = function(t) {
                this.SendPacket(i.Packets.SessionInitialize(t))
            }, t.prototype.SendUserEntryInfo = function(t, e, n, o, r) {
                this.SendPacket(i.Packets.UserEntryInfo(t, e, n, o, r))
            }, t.prototype.SendRequestStartPlay = function() {
                this.SendPacket(i.Packets.RequestStartPlay())
            }, t.prototype.SendRequestStartSpectate = function() {
                this.SendPacket(i.Packets.RequestStartSpectate())
            }, t.prototype.SendAimCursor = function(t, e) {
                this.SendPacket(i.Packets.AimCursor(t, e))
            }, t.prototype.SendPlayerAction = function(t, e) {
                this.SendPacket(i.Packets.PlayerAction(t, e))
            }, t.prototype.SendChatMessage = function(t, e) {
                this.SendPacket(i.Packets.ChatMessage(t, e))
            }, t.prototype.SendLatencyCheckRequest = function() {
                this.SendPacket(i.Packets.LatencyCheckRequest())
            }, t.prototype.SendSpecifySpecTarget = function(t) {
                this.SendPacket(i.Packets.SpecifySpecTarget(t))
            }, t.prototype.ConnectToGameServer = function(t) {
                var e = this;
                this.ws && this.CloseConnection(), console.log("connecting to gameserver"), this.ws = new WebSocket(t), this.ws.binaryType = "arraybuffer", this.ws.onopen = function() {
                    console.log("socket opened"), e.connectionOpenProc()
                }, this.ws.onerror = function(t) {
                    console.log("socket error, " + t)
                }, this.ws.onclose = function(t) {
                    var n = t.reason || "";
                    console.log("socket closed, " + n), e.connectionClosedProc(n)
                }, this.ws.onmessage = function(t) {
                    e.packetHandlerProc(t.data)
                }
            }, t
        }();
    e.ConnectionBridge = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(3),
        r = function() {
            function t(e) {
                this.name = "Profile" + (e + 1), this.team = "", this.code = "";
                var n = e;
                n >= t.skinUrlSources.length && (n = 0), this.skinUrl = t.skinUrlSources[n], this.skinUrl2 = t.skinUrlSources[n], this.profileIndex = e
            }
            return t.prototype.MakeSequenceString = function() {
                return this.name + "/" + this.team + "/" + this.code + "/" + this.skinUrl + "/" + this.skinUrl2
            }, t.skinUrlSources = ["http://ixagar.net/skins/ring.png", "http://ixagar.net/skins/k461.png", "http://ixagar.net/skins/wolf.png", "http://ixagar.net/skins/rabbit.png", "http://ixagar.net/skins/dragon.png", "http://ixagar.net/skins/magic_circle.png", "http://ixagar.net/skins/ghost.png", "http://ixagar.net/skins/daemon.png", "http://ixagar.net/skins/bat.png", "http://ixagar.net/skins/skull.png"], t
        }();
    e.UserEntryInfo = r;
    var s = function() {
        function t() {
            this.curIndex = 0, this.modified = !1, this.infos = [];
            for (var t = 0; t < o.AppConfigurator.instance.MaxProfileNum; t++) this.infos[t] = new r(t)
        }
        return Object.defineProperty(t.prototype, "curInfo", {
            get: function() {
                return this.infos[this.curIndex]
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.Load = function() {
            var t = localStorage.getItem("lwga_user_entries");
            if (t) {
                var e = JSON.parse(t);
                if (e instanceof Array)
                    for (var n = Math.min(this.infos.length, e.length), o = 0; o < n; o++) i.Objects.CopyObjectProps(this.infos[o], e[o])
            }
            var r = parseInt(localStorage.getItem("lwga_user_sel_index"));
            isNaN(r) || (this.curIndex = i.Nums.Clamp(r, 0, this.infos.length - 1))
        }, t.prototype.ShiftIndex = function(t) {
            this.curIndex = (this.curIndex + t + this.infos.length) % this.infos.length, this.indexChangedProc(), this.SaveIfChanged()
        }, t.prototype.SaveIfChanged = function() {
            this.modified && (localStorage.setItem("lwga_user_entries", JSON.stringify(this.infos)), this.modified = !1), localStorage.setItem("lwga_user_sel_index", this.curIndex.toString())
        }, t.prototype.SetProp = function(t, e) {
            this.curInfo[t] != e && (this.curInfo[t] = e, "skinUrl" != t && "skinUrl2" != t || this.skinChangedProc(), this.modified = !0)
        }, t
    }();
    e.UserEntryManager = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(0),
        r = n(7),
        s = function() {
            function t(t) {
                this.initDone = !1, this.tick = 0, this.jumpDurationMs = 2e3, this.teamCircleTimeStamp = 0, this.teamCircleX = 0, this.teamCircleY = 0, this.teamCircleRadius = 0, this.gameCore = t
            }
            return t.prototype.Init = function() {
                if (!this.initDone) {
                    var t = o.gs.gconfig.FieldSize / 2;
                    this.eyeX = t, this.eyeY = t, this.eyeX1 = t, this.eyeY1 = t;
                    this.eyeScale = .08, this.eyeScale1 = .08, this.gravityX = t, this.gravityY = t, this.aimCursorX = t, this.aimCursorY = t, this.localAimX = t, this.localAimY = t, this.initDone = !0, i.Utils.Confirm(this.scw), this.mouseX = this.scw / 2, this.mouseY = this.sch / 2, this.aimPlayerId = -1
                }
            }, t.prototype.SetScreenSize = function(t, e) {
                this.scw = t, this.sch = e
            }, t.prototype.ScreenToWorld = function(t, e) {
                return [(t - this.scw / 2) / this.eyeScale + this.eyeX, (e - this.sch / 2) / this.eyeScale + this.eyeY]
            }, t.prototype.WorldToScreen = function(t, e) {
                return [(t - this.eyeX) * this.eyeScale + this.scw / 2, (e - this.eyeY) * this.eyeScale + this.sch / 2]
            }, t.prototype.SetServerEyePos = function(t, e) {
                this.serverEyePosX = t, this.serverEyePosY = e
            }, t.prototype.ShiftScale = function(t) {
                var e = 1 + .13 * t,
                    n = this.eyeScale1 * e;
                this.eyeScale1 = i.Nums.Clamp(n, .03, .6)
            }, t.prototype.SendSelfAimPosition = function() {
                var t = this.ScreenToWorld(this.mouseX, this.mouseY),
                    e = t[0],
                    n = t[1];
                if (e != this.aimXSent || n != this.aimYSent) {
                    var i = this.gameCore.conn;
                    i && i.SendAimCursor(e, n), this.aimXSent = e, this.aimYSent = n
                }
            }, t.prototype.RecordStatePacket = function() {
                var t = this,
                    e = r.InternalPackets.SightState(t.eyeX, t.eyeY, t.eyeScale, t.aimCursorX, t.aimCursorY, t.splitting, t.aimPlayerId);
                this.gameCore.dataRecorder.PostInternalRecordingPacket(e)
            }, t.prototype.UpdateFrame = function() {
                this.UpdateCurrentPosScale();
                var t = o.gs.gconfig.FieldSize;
                if (this.eyeX = i.Nums.Clamp(this.eyeX, 0, t), this.eyeY = i.Nums.Clamp(this.eyeY, 0, t), o.gs.gstates.isPlaying) {
                    var e = this.ScreenToWorld(this.mouseX, this.mouseY),
                        n = e[0],
                        r = e[1];
                    this.aimCursorX = n, this.aimCursorY = r
                }
                o.gs.gstates.isRealtimeMode && this.tick % 2 == 0 && (this.SendSelfAimPosition(), this.RecordStatePacket()), this.tick++
            }, t.prototype.UpdateCurrentPosScale = function() {
                var t, e, n, r = o.gs.gstates,
                    s = this.gameCore.nodeMan;
                if (r.isBenchmarkMode) {
                    var a = o.gs.gconfig.FieldSize / 2;
                    this.eyeX = a, this.eyeY = a, this.eyeScale = .05
                } else if (r.isReplayMode) {
                    var l = .6;
                    this.eyeX = i.Nums.EasyFilter(this.eyeX, this.eyeX1, l), this.eyeY = i.Nums.EasyFilter(this.eyeY, this.eyeY1, l), this.eyeScale = i.Nums.EasyFilter(this.eyeScale, this.eyeScale1, l)
                } else if (r.isRealtimeMode) {
                    var c = this.ScreenToWorld(this.mouseX, this.mouseY),
                        h = c[0],
                        d = c[1],
                        u = void 0,
                        p = void 0;
                    l = .986;
                    if (r.isPlaying && s.hasSelfNode) {
                        var f = s.CalcurateCenterPointOfAllSelfCells(),
                            g = f[0],
                            y = f[1];
                        if (this.spawned && (this.jumpTick = this.jumpDurationMs, this.eyeX2 = g, this.eyeY2 = y, this.spawned = !1), this.jumpTick > 0) {
                            this.jumpTick -= 17;
                            var m = i.Nums.VMap(this.jumpTick, this.jumpDurationMs, 0, 0, 1, !0);
                            u = i.Nums.Lerp(this.eyeX2, g, m), p = i.Nums.Lerp(this.eyeY2, y, m), l = i.Nums.Lerp(.94, .986, m)
                        } else u = (t = [g, y])[0], p = t[1]
                    } else -1 != this.aimPlayerId && (65534 & this.aimPlayerId) != this.gameCore.uMan.selfUserId ? (u = (e = [this.serverEyePosX, this.serverEyePosY])[0], p = e[1]) : (u = (n = [h, d])[0], p = n[1]);
                    this.eyeX = i.Nums.EasyFilter(this.eyeX, u, l), this.eyeY = i.Nums.EasyFilter(this.eyeY, p, l);
                    this.eyeScale = i.Nums.EasyFilter(this.eyeScale, this.eyeScale1, .86)
                }
            }, t.prototype.SetSpawned = function() {
                this.spawned = !0
            }, t.prototype.OnPlayerDead = function() {
                var t = this.gravityX,
                    e = this.gravityY,
                    n = this.aimCursorX,
                    o = this.aimCursorY,
                    r = i.Nums.Lerp(t, n, .3),
                    s = i.Nums.Lerp(e, o, .3);
                this.localAimX = r, this.localAimY = s
            }, t.prototype.UpdateInterpolation = function() {}, t.prototype.FeedReplaySightState = function(t, e, n, i, r, s, a) {
                this.eyeX1 = t, this.eyeY1 = e, o.gs.uconfig.AffectZoomingOnReplay && (this.eyeScale1 = n), this.aimCursorX = i, this.aimCursorY = r, this.splitting = s, this.aimPlayerId = a
            }, t.prototype.setAimCursorProps = function(t, e, n, i) {
                this.aimPlayerId = t, this.aimCursorX = e, this.aimCursorY = n, this.splitting = i
            }, t
        }();
    e.SightCoord = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(3),
        o = n(23),
        r = n(1),
        s = n(2),
        a = new(function() {
            return function() {
                this.ChatAppCoreVersion = "ChatAppCore B100", this.MessageMaxLength = 140, this.ProfileCommentMaxLength = 60
            }
        }());
    var l = function() {
            return function() {
                this.Sessions = "Session", this.TeamMembers = "Team Members", this.AllUsers = "All Users", this.Online = "Online", this.Offline = "Offline", this.Advertisement = "AD", this.Name = "Name", this.Skin = "Skin", this.Comment = "Comment", this.ShowTripKey = "Show Trip Key", this.Blocked = "Blocked", this.BlockedMessageNotification = "You are blocked by the peer. This message has not been sent.", this.DeleteMessage = "Delete Message", this.BlockUnblock = "Block/Unblock", this.AppInstruction0 = "An advanced chat system designed for agar private servers. There are server-wide chat, team-specific chat, and private chat between two users. Server administator has no concern in private chat.", this.AppInstruction1 = "Name and skin url are set on the main game window. Either server-wide chat or team-specific chat is synchronized to the chat on game screen (depends on the setting of game server)."
            }
        }(),
        c = function() {
            return function() {
                this.Sessions = "ã‚»ãƒƒã‚·ãƒ§ãƒ³", this.TeamMembers = "ãƒãƒ¼ãƒ ãƒ¡ãƒ³ãƒãƒ¼", this.AllUsers = "ã™ã¹ã¦ã®ãƒ¦ãƒ¼ã‚¶ãƒ¼", this.Online = "ã‚ªãƒ³ãƒ©ã‚¤ãƒ³", this.Offline = "ã‚ªãƒ•ãƒ©ã‚¤ãƒ³", this.Advertisement = "åºƒå‘Š", this.Name = "åå‰", this.Skin = "ã‚¹ã‚­ãƒ³", this.Comment = "ã‚³ãƒ¡ãƒ³ãƒˆ", this.ShowTripKey = "ãƒˆãƒªãƒƒãƒ—ã‚­ãƒ¼ã‚’è¡¨ç¤º", this.Blocked = "ãƒ–ãƒ­ãƒƒã‚¯ä¸­", this.BlockedMessageNotification = "ãƒ–ãƒ­ãƒƒã‚¯ã•ã‚Œã¦ã„ã¾ã™ã€‚ã“ã®ç™ºè¨€ã¯ç›¸æ‰‹ã«å±Šã„ã¦ã„ã¾ã›ã‚“ã€‚", this.DeleteMessage = "ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã‚’å‰Šé™¤", this.BlockUnblock = "ãƒ–ãƒ­ãƒƒã‚¯/è§£é™¤", this.AppInstruction0 = "agarã®ãƒ—ãƒ©ã‚¤ãƒ™ãƒ¼ãƒˆã‚µãƒ¼ãƒå‘ã‘ã«è¨­è¨ˆã•ã‚ŒãŸãƒãƒ£ãƒƒãƒˆã‚·ã‚¹ãƒ†ãƒ ã§ã™ã€‚ã‚µãƒ¼ãƒå…¨ä½“ã§ã®ä¼šè©±,ãƒãƒ¼ãƒ æ¯Žã®ä¼šè©±,ãƒ¦ãƒ¼ã‚¶é–“ã§ã®å€‹åˆ¥ã®ä¼šè©±ãŒã‚ã‚Šã¾ã™ã€‚ã‚µãƒ¼ãƒç®¡ç†è€…ã¯ãƒ¦ãƒ¼ã‚¶åŒå£«ã®å€‹åˆ¥ã®ä¼šè©±ã®å†…å®¹ã«ã¯é–¢çŸ¥ã—ã¾ã›ã‚“ã€‚", this.AppInstruction1 = "åå‰ã¨ã‚¹ã‚­ãƒ³URLã¯ã‚²ãƒ¼ãƒ ç”»é¢ã§è¨­å®šã—ãŸã‚‚ã®ãŒä½¿ã‚ã‚Œã¾ã™ã€‚å…¨ä½“ã®ä¼šè©±ã¾ãŸã¯ãƒãƒ¼ãƒ ã®ä¼šè©±ãŒã‚²ãƒ¼ãƒ å†…ã§ã®ãƒãƒ£ãƒƒãƒˆã¨åŒæœŸã—ã¦ã„ã¾ã™(ã‚²ãƒ¼ãƒ ã‚µãƒ¼ãƒã®è¨­å®šã«ã‚ˆã‚Šç•°ãªã‚Šã¾ã™)ã€‚"
            }
        }(),
        h = navigator.language.startsWith("ja") ? new c : new l,
        d = function() {
            function t(t) {
                this.userId = t
            }
            return Object.defineProperty(t.prototype, "FullName", {
                get: function() {
                    return this.name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "GameFullName", {
                get: function() {
                    return "" + this.team + this.name
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.SetProps = function(t) {
                this.siteSig = t.siteSig, this.serverSig = t.serverSig, this.name = t.name, this.team = t.team, this.code = t.code, this.skinUrl = t.skinUrl, this.skinUrlSmall = t.skinUrlSmall, this.fullTrip = t.fullTrip, this.shortTrip = t.fullTrip.substr(2, 4), "" == this.skinUrl && (this.skinUrl = "gr/noimage.gif"), "" == this.skinUrlSmall && (this.skinUrlSmall = "gr/noimage.gif"), this.profileComment = t.profileComment, this.showTripKey = t.showTripKey, this.isPlaying = t.isPlaying, this.serverRoomSig = this.siteSig + "." + this.serverSig, this.teamRoomSig = this.siteSig + "." + this.serverSig + "." + this.team + "." + this.code
            }, t
        }();
    e.ChatUser = d;
    var u = function() {
            function t(t, e, n) {
                this.text = e, this.messageId = n, t && (this.icon = t.skinUrlSmall, this.userId = t.userId, this.userName = t.GameFullName, this.timeStamp = r.DateTimeHelper.GetHourMinutesString())
            }
            return t.prototype.MakeCopy = function() {
                var e = new t(null, "", 0);
                return e.icon = this.icon, e.text = this.text, e.messageId = this.messageId, e.userId = this.userId, e.userName = this.userName, e.timeStamp = this.timeStamp, e
            }, t
        }(),
        p = function() {
            function t(t) {
                this.sessionId = t, this.messages = new o.List, this.isClosed = !1
            }
            return Object.defineProperty(t.prototype, "IsGroup", {
                get: function() {
                    return 20 != this.category
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "IsPrivate", {
                get: function() {
                    return 20 == this.category
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "HeaderName", {
                get: function() {
                    return 12 == this.category && "" == this.title ? "no-tag" : this.IsGroup ? this.title : this.peer.GameFullName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "HeaderIcon", {
                get: function() {
                    return 20 == this.category ? this.peer.skinUrl : 12 == this.category ? "gr/team5a.png" : 11 == this.category ? "gr/web1b.png" : void 0
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.InitAsGroupSession = function(t, e, n) {
                this.category = t, this.roomSig = e, this.title = n, this.peer = null
            }, t.prototype.InitAsPrivateSession = function(t) {
                this.category = 20, this.roomSig = "", this.title = "", this.peer = t
            }, t.prototype.AddMessage = function(t) {
                this.messages.Add(t), this.reqScroll = !0
            }, t.prototype.RemoveMessage = function(t, e) {
                var n = this.messages.First(function(e) {
                    return e.messageId == t
                });
                if (n && (this.messages.Remove(n), e)) {
                    var i = n.MakeCopy();
                    i.text = h.BlockedMessageNotification, this.messages.Add(i)
                }
            }, t
        }(),
        f = function() {
            function t() {
                this.siteSig = "", this.serverSig = "", this.name = "", this.team = "", this.code = "", this.skinUrl = "", this.envSig = "", this.profileComment = "", this.showTripKey = !1
            }
            return t.prototype.GetSequentialSignature = function() {
                return this.siteSig + "_" + this.serverSig + "_" + this.name + "_" + this.team + "_" + this.code + "_" + this.skinUrl + "_" + this.profileComment + "_" + this.showTripKey
            }, t
        }(),
        g = (function() {}(), function() {}(), function() {}(), function() {}(), function() {
            function t(t) {
                this.receiver = t
            }
            return Object.defineProperty(t.prototype, "IsConnected", {
                get: function() {
                    return null != this.ws
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.SendPacket = function(t) {
                this.ws && this.ws.readyState == WebSocket.OPEN && this.ws.send(t)
            }, t.prototype.ConnectToChatServer = function() {
                console.log("connecting to chat server"), this.ws = new WebSocket(a.ChatServerUri), this.ws.onmessage = this.OnWsMessage.bind(this), this.ws.onopen = this.OnWsOpen.bind(this), this.ws.onerror = this.OnWsError.bind(this), this.ws.onclose = this.OnWsClose.bind(this)
            }, t.prototype.Close = function() {
                this.ws && (this.ws.close(), this.ws = null)
            }, t.prototype.OnWsOpen = function() {
                this.SendPacket(JSON.stringify({
                    op: "JoinToServer"
                }))
            }, t.prototype.OnWsClose = function(t) {
                t.reason && console.log("connection to chat server closed: " + t.reason), this.receiver.SetAvailability(!1), this.receiver.FireChanged()
            }, t.prototype.OnWsError = function(t) {
                console.log(t)
            }, t.prototype.OnWsMessage = function(t) {
                s.TimeChecker.Start("OnWsMessage@ExChatAppModel");
                var e = JSON.parse(t.data),
                    n = e.op;
                "SelfUserId" == n ? (this.selfUserId = e.userId, this.selfUserId, this.pendingUserInfo && (this.SendSelfEntryInfoCore(this.pendingUserInfo), this.pendingUserInfo = null), this.receiver.SetAvailability(!0)) : "UpdateUserInfos" == n ? this.receiver.UserInfosUpdated(e.infos) : "UpdateFixedGroupSessions" == n ? this.receiver.UpdateFixedGroupSessionInfos(e.infos) : "UpdatePrivateSession" == n ? this.receiver.UpdatePrivateSessionInfo(e.info) : "ChatMessage" == n ? this.receiver.HandleReceivedMessage(e.data) : "MessageRemoval" == n && this.receiver.HandleMessageRemoval(e.data), this.receiver.FireChanged(), s.TimeChecker.Stop()
            }, t.prototype.SendSelfEntryInfoCore = function(t) {
                var e = JSON.stringify({
                    op: "UpdateUserInfo",
                    userId: this.selfUserId,
                    data: t
                });
                this.SendPacket(e)
            }, t.prototype.SendSelfEntryInfo = function(t, e) {
                this.ws ? this.SendSelfEntryInfoCore(t) : (this.pendingUserInfo = t, e && this.ConnectToChatServer())
            }, t.prototype.RequestStartNewPrivateSession = function(t) {
                this.SendPacket(JSON.stringify({
                    op: "NewPrivateSession",
                    userId: this.selfUserId,
                    peerUserId: t
                }))
            }, t.prototype.SendChatMessage = function(t, e) {
                var n = a.MessageMaxLength;
                e.length > n && (e = e.substr(0, n));
                var i = {
                    sessionId: t,
                    userId: this.selfUserId,
                    text: e
                };
                this.SendPacket(JSON.stringify({
                    op: "ChatMessage",
                    userId: this.selfUserId,
                    data: i
                })), this.selfUserId
            }, t.prototype.SendMessageRemoval = function(t, e, n) {
                var i = {
                    sessionId: t,
                    messageId: e,
                    isBlocked: n
                };
                this.SendPacket(JSON.stringify({
                    op: "MessageRemoval",
                    userId: this.selfUserId,
                    data: i
                }))
            }, t
        }()),
        y = function() {
            return function() {
                this.profileComment = "", this.showTripKey = !1
            }
        }(),
        m = function() {
            function t() {}
            return t.prototype.Init = function() {
                var t = i.AppConfigurator.instance.MaxProfileNum;
                this.profileExData = Array(t);
                for (var e = 0; e < t; e++) this.profileExData[e] = new y;
                var n = localStorage.getItem("profileExData");
                if (n) {
                    var o = JSON.parse(n);
                    if (o && o.length > 0)
                        for (var s = Math.min(t, o.length), a = 0; a < s; a++) r.Objects.CopyObjectProps(this.profileExData[a], o[a])
                } else this.SaveProfileExData();
                var l = localStorage.getItem("isUserActive");
                l ? (this.isUserActive = "1" == l, this.SaveIsActive()) : this.isUserActive = !0;
                var c = localStorage.getItem("blockedUserTrips");
                c ? this.blockedUserTrips = JSON.parse(c) : (this.blockedUserTrips = [], this.SaveBlockedUserTrips())
            }, t.prototype.SaveProfileExData = function() {
                var t = JSON.stringify(this.profileExData);
                localStorage.setItem("profileExData", t)
            }, t.prototype.SaveIsActive = function() {
                localStorage.setItem("isUserActive", this.isUserActive ? "1" : "0")
            }, t.prototype.SaveBlockedUserTrips = function() {
                var t = JSON.stringify(this.blockedUserTrips);
                localStorage.setItem("blockedUserTrips", t)
            }, t.prototype.SetUserBlockState = function(t, e) {
                if (e && -1 == this.blockedUserTrips.indexOf(t)) this.blockedUserTrips.push(t), this.SaveBlockedUserTrips();
                else if (!e && this.blockedUserTrips.indexOf(t) >= 0) {
                    var n = this.blockedUserTrips.indexOf(t);
                    this.blockedUserTrips.splice(n, 1), this.SaveBlockedUserTrips()
                }
            }, t
        }(),
        v = function() {
            function t() {
                this.entryInfo = new f, this.entrySeqSig = "", this.allUsers = new o.List, this.allSessions = new o.List, this.tmpSession = new p(0), this.sessionInitialMessage = null, this.loadedProfileIndex = 0, this.storage = new m, this.ShowVersion(), this.bridge = new g(this)
            }
            return Object.defineProperty(t.prototype, "Texts", {
                get: function() {
                    return h
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "IsUserActive", {
                get: function() {
                    return this.storage.isUserActive
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "selfUserId", {
                get: function() {
                    return this.bridge ? this.bridge.selfUserId : 0
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.SetUserEnvSig = function(t) {
                this.entryInfo.envSig = t
            }, t.prototype.ShowVersion = function() {
                console.log(a.ChatAppCoreVersion)
            }, t.prototype.FireChanged = function() {
                this.procOnChanged && this.procOnChanged()
            }, t.prototype.SetAvailability = function(t) {
                this.isAvailable = t, console.log("unichat availability: " + t)
            }, t.prototype.DiscardCurrentSessions = function() {
                this.allSessions.Clear(), this.allUsers.Clear(), this.selfUser = null, this.gameChatSession = null, this.curSession = null
            }, t.prototype.SetUserActive = function(t) {
                this.storage.isUserActive != t && (this.bridge.IsConnected && !t ? (this.DiscardCurrentSessions(), this.bridge.Close()) : !this.bridge.IsConnected && t && this.bridge.SendSelfEntryInfo(this.selfInfoCash, !0), this.storage.isUserActive = t, this.storage.SaveIsActive())
            }, t.prototype.ChatWindowOpenStateChanged = function(t) {
                this.isWindowOpen = t, t && (this.chatNotificationBadgeProc && this.chatNotificationBadgeProc(!1), this.chatNotificationTitleProc && this.chatNotificationTitleProc(!1))
            }, t.prototype.SetGameTeamChatSessionEnabled = function(t) {
                a.GameChatSessionCategory = t ? 12 : 11
            }, t.prototype.SetChatServerUri = function(t) {
                a.ChatServerUri = t
            }, t.prototype.SetSiteSignature = function(t) {
                this.entryInfo.siteSig = t
            }, t.prototype.SetServerSignature = function(t, e) {
                (t != this.entryInfo.serverSig || e) && (this.ClearAllUsersAndSessions(), this.entryInfo.serverSig = t, e && this.SendUserEntryIfChanged(!0))
            }, t.prototype.SetUserEntryInfo = function(t, e, n, o, r) {
                var s = i.AppConfigurator.instance.MaxProfileNum;
                if (0 <= r && r < s) {
                    null == r && (r = 0), this.entryInfo.name = t, this.entryInfo.team = e, this.entryInfo.code = n, this.entryInfo.skinUrl = o, this.storage.profileExData || this.storage.Init();
                    var a = this.storage.profileExData[r];
                    this.entryInfo.profileComment = a.profileComment, this.entryInfo.showTripKey = a.showTripKey, this.loadedProfileIndex = r, this.SendUserEntryIfChanged()
                }
            }, t.prototype.ClearAllUsersAndSessions = function() {
                var t = this;
                this.curSession = null, this.allSessions.Clear(), this.allUsers.Where(function(e) {
                    return e != t.selfUser
                }).ForEach(function(e) {
                    return t.RemoveUser(e)
                })
            }, t.prototype.SendUserEntryIfChanged = function(t) {
                void 0 === t && (t = !1);
                var e = this.entryInfo.GetSequentialSignature();
                (e != this.entrySeqSig || t) && (this.IsUserActive && this.bridge.SendSelfEntryInfo(this.entryInfo, !0), this.selfInfoCash = this.entryInfo, this.entrySeqSig = e)
            }, t.prototype.UpdateSelfProfileDetail = function(t, e) {
                var n = a.ProfileCommentMaxLength;
                e.length > n && (e = e.substr(0, n));
                var i = this.storage.profileExData[this.loadedProfileIndex];
                i.profileComment = e, i.showTripKey = t, this.storage.SaveProfileExData(), this.entryInfo.profileComment = e, this.entryInfo.showTripKey = t, this.SendUserEntryIfChanged()
            }, t.prototype.GetUserById = function(t) {
                return this.allUsers.FirstOrDefault(function(e) {
                    return e.userId == t
                }, null)
            }, t.prototype.GetSessionById = function(t) {
                return this.allSessions.FirstOrDefault(function(e) {
                    return e.sessionId == t
                }, null)
            }, t.prototype.RequestStartNewSession = function(t) {
                this.bridge.RequestStartNewPrivateSession(t.userId)
            }, t.prototype.CheckValidName = function() {
                return "" != this.selfUser.name
            }, t.prototype.SendMessageOnCurrentSession = function(t) {
                this.CheckValidName() && (this.curSession == this.tmpSession ? (this.sessionInitialMessage = t, this.RequestStartNewSession(this.tmpSession.peer)) : this.bridge.SendChatMessage(this.curSession.sessionId, t))
            }, t.prototype.SendMessageOnGameChatSession = function(t) {
                this.CheckValidName() && this.gameChatSession && this.bridge.SendChatMessage(this.gameChatSession.sessionId, t)
            }, t.prototype.SetUserBlockState = function(t, e) {
                t.fullTrip != this.selfUser.fullTrip && (t.isBlocked = e, this.storage.SetUserBlockState(t.fullTrip, e))
            }, t.prototype.AddNewUser = function(t) {
                var e = new d(t.userId);
                return e.SetProps(t), this.storage.blockedUserTrips.indexOf(e.fullTrip) >= 0 && (e.isBlocked = !0), t.userId == this.selfUserId && (this.selfUser = e), this.allUsers.Add(e), e
            }, t.prototype.RemoveUser = function(t) {
                var e = this;
                (this.allUsers.Remove(t), t.userId == this.selfUserId) ? (this.allSessions.RemoveAll(function(t) {
                    return t.IsPrivate
                }), this.SelectSession(this.gameChatSession)) : this.allSessions.Where(function(e) {
                    return e.peer == t
                }).ForEach(function(t) {
                    t.hasNewMessage ? t.isClosed = !0 : e.allSessions.Remove(t)
                })
            }, t.prototype.UserInfosUpdated = function(t) {
                var e = this;
                t.forEach(function(t) {
                    if (0 == t.isAlive) {
                        (n = e.GetUserById(t.userId)) && e.RemoveUser(n)
                    } else {
                        var n = e.GetUserById(t.userId);
                        if (t.userId == e.selfUserId && (t.name, t.team), n) n.serverSig == t.serverSig && n.name == t.name && n.team == t.team ? n.SetProps(t) : (e.RemoveUser(n), e.AddNewUser(t));
                        else e.AddNewUser(t)
                    }
                })
            }, t.prototype.UpdateFixedGroupSessionInfos = function(t) {
                var e = this;
                t.forEach(function(t) {
                    var n = e.GetSessionById(t.sessionId);
                    n || ((n = new p(t.sessionId)).InitAsGroupSession(t.category, t.roomSig, t.title), e.allSessions.Add(n)), t.category == a.GameChatSessionCategory && (e.gameChatSession = n, e.gameChatSession.sessionId, e.gameChatSession.HeaderName)
                }), null == this.curSession && (this.curSession = this.gameChatSession);
                var n = t.map(function(t) {
                    return t.sessionId
                });
                this.allSessions.Where(function(t) {
                    return t.IsGroup && -1 == n.indexOf(t.sessionId)
                }).ForEach(function(t) {
                    return e.allSessions.Remove(t)
                })
            }, t.prototype.UpdatePrivateSessionInfo = function(t) {
                var e = this.GetSessionById(t.sessionId);
                if (!e) {
                    e = new p(t.sessionId);
                    var n = t.userIds[0] == this.selfUserId ? t.userIds[1] : t.userIds[0],
                        i = this.GetUserById(n);
                    e.InitAsPrivateSession(i), this.allSessions.Add(e), this.tmpSession && this.curSession == this.tmpSession && t.userIds[0] == this.tmpSession.peer.userId && (this.curSession = e)
                }
                null != this.sessionInitialMessage && (this.curSession = e, this.SendMessageOnCurrentSession(this.sessionInitialMessage), this.sessionInitialMessage = null)
            }, t.prototype.HandleReceivedMessage = function(t) {
                var e = this.GetSessionById(t.sessionId),
                    n = this.GetUserById(t.userId);
                if (n && e) {
                    if (n.isBlocked) return void(e.IsPrivate && this.bridge.SendMessageRemoval(e.sessionId, t.messageId, !0));
                    if (e.AddMessage(new u(n, t.text, t.messageId)), e != this.curSession && (e.hasNewMessage = !0), !e.IsGroup && !this.isWindowOpen) {
                        var i = t.text,
                            o = n.skinUrl;
                        this.chatNotificationBadgeProc && this.chatNotificationBadgeProc(!0, o, i), this.chatNotificationTitleProc && this.chatNotificationTitleProc(!0)
                    }
                    e == this.gameChatSession && this.gameChatMessageReceiverProc && this.gameChatMessageReceiverProc(n.GameFullName, t.text)
                }
            }, t.prototype.HandleMessageRemoval = function(t) {
                var e = this.GetSessionById(t.sessionId);
                e && e.RemoveMessage(t.messageId, t.isBlocked)
            }, t.prototype.SelectUser = function(t) {
                var e = this.allSessions.First(function(e) {
                    return e.peer == t
                });
                e ? (this.curSession = e, e.reqScroll = !0, this.FireChanged()) : (this.tmpSession.InitAsPrivateSession(t), this.curSession = this.tmpSession), this.curUser = t
            }, t.prototype.SelectSelfUser = function() {
                this.curUser = this.selfUser, this.curSession = null
            }, t.prototype.SelectUserById = function(t) {
                var e = this.GetUserById(t);
                e && this.SelectUser(e)
            }, t.prototype.RemoveCurrentSessionIfClosed = function() {
                this.curSession && this.curSession.isClosed && this.allSessions.Remove(this.curSession)
            }, t.prototype.SelectSession = function(t) {
                this.curSession != t && (this.RemoveCurrentSessionIfClosed(), this.curSession = t, t.reqScroll = !0, t.hasNewMessage = !1, this.curUser = t.IsPrivate ? t.peer : null, this.FireChanged())
            }, t.prototype.SelectMessage = function(t) {
                this.curMessage = this.GetMessageById(t)
            }, t.prototype.GetMessageById = function(t) {
                return this.curSession.messages.First(function(e) {
                    return e.messageId == t
                })
            }, t.prototype.DeleteCurrentMessage = function() {
                this.curMessage.userId == this.selfUserId && this.bridge.SendMessageRemoval(this.curSession.sessionId, this.curMessage.messageId, !1)
            }, t
        }();
    e.ChatAppModel = v
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t) {
            this.ar = new Array, t && (t instanceof Array ? this.AddRange(t) : this.Add(t))
        }
        return Object.defineProperty(t.prototype, "array", {
            get: function() {
                return this.ar
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.Count = function(t) {
            if (t) {
                var e = 0;
                return this.ar.forEach(function(n) {
                    t(n) && e++
                }), e
            }
            return this.ar.length
        }, t.prototype.Add = function(t) {
            this.ar.push(t)
        }, t.prototype.AddUnique = function(t) {
            this.Contains(t) || this.ar.push(t)
        }, t.prototype.AddRange = function(t) {
            var e;
            (e = this.ar).push.apply(e, t)
        }, t.prototype.Clear = function() {
            this.ar.splice(0, this.ar.length)
        }, t.prototype.RemoveAt = function(t) {
            this.ar.splice(t, 1)
        }, t.prototype.Remove = function(t) {
            var e = this.ar.indexOf(t);
            e >= 0 && this.ar.splice(e, 1)
        }, t.prototype.RemoveAll = function(t) {
            var e = this;
            this.ar.filter(function(e) {
                return t(e)
            }).forEach(function(t) {
                return e.Remove(t)
            })
        }, t.prototype.Contains = function(t) {
            return this.ar.indexOf(t) >= 0
        }, t.prototype.First = function(t) {
            return 0 == this.ar.length ? null : t ? this.ar.filter(t)[0] : this.ar[0]
        }, t.prototype.FirstOrDefault = function(t, e) {
            return 0 == this.ar.length ? e : t ? this.ar.filter(t)[0] : this.ar[0]
        }, t.prototype.Product = function(e) {
            return new t(this.ar.filter(function(t) {
                return e.Contains(t)
            }))
        }, t.prototype.Except = function(e) {
            return new t(this.ar.filter(function(t) {
                return e.ar.every(function(e) {
                    return t != e
                })
            }))
        }, t.prototype.Concat = function(e) {
            return new t(this.ar.concat(e.ar))
        }, t.prototype.Distinct = function() {
            var e = new t;
            return this.ar.forEach(function(t) {
                e.Contains(t) || e.Add(t)
            }), e
        }, t.prototype.Union = function(t) {
            var e = this.ToList();
            return t.ar.forEach(function(t) {
                e.Contains(t) || e.Add(t)
            }), e
        }, t.prototype.ForEach = function(t) {
            for (var e = 0; e < this.ar.length; e++) t(this.ar[e])
        }, t.prototype.Where = function(e) {
            return new t(this.ar.filter(e))
        }, t.prototype.Select = function(e) {
            return new t(this.ar.map(e))
        }, t.prototype.LimitCount = function(e) {
            return e < this.ar.length ? new t(this.ar.slice(0, e)) : this
        }, t.prototype.Sort = function(e) {
            return new t(this.ar.sort(e))
        }, t.prototype.GroupBy = function(e) {
            var n = {};
            this.ar.forEach(function(i) {
                var o = e(i);
                n[o] || (n[o] = new t), n[o].Add(i)
            });
            var i = new t;
            for (var o in n) i.ar.push(n[o]);
            return i
        }, t.prototype.Take = function(e) {
            return new t(e > 0 ? this.ar.slice(0, e) : this.ar.slice(e))
        }, t.prototype.TakeNFromTail = function(e) {
            return new t(this.ar.slice(-e))
        }, t.prototype.Skip = function(e) {
            return e > this.ar.length ? new t : new t(this.ar.slice(e))
        }, t.prototype.All = function(t) {
            for (var e = 0, n = this.ar; e < n.length; e++) {
                if (!t(n[e])) return !1
            }
            return !0
        }, t.prototype.Any = function(t) {
            for (var e = 0, n = this.ar; e < n.length; e++) {
                if (t(n[e])) return !0
            }
            return !1
        }, t.prototype.ToArray = function() {
            return this.ar.slice(0)
        }, t.prototype.ToList = function() {
            return new t(this.ar.slice(0))
        }, t.prototype.Min = function(t) {
            var e = t ? this.ar.map(t) : this;
            return Math.min.apply(Math, e)
        }, t.prototype.Max = function(t) {
            var e = t ? this.ar.map(t) : this;
            return Math.max.apply(Math, e)
        }, t.prototype.Sum = function(t) {
            return 0 == this.Count() ? 0 : (t ? this.ar.map(t) : this).reduce(function(t, e) {
                return t + e
            })
        }, t.prototype.SafeSum = function(t) {
            return this.Sum(t)
        }, t.prototype.Average = function(t) {
            return 0 == this.Count() ? 0 : this.Sum(t) / this.ar.length
        }, t.prototype.OrderBy = function(e) {
            var n = this.ar.slice(0);
            return n.sort(function(t, n) {
                return e(t) - e(n)
            }), new t(n)
        }, t.prototype.OrderByDescending = function(e) {
            var n = this.ar.slice(0);
            return n.sort(function(t, n) {
                return e(n) - e(t)
            }), new t(n)
        }, t.prototype.SelectMany = function(e) {
            var n = new t;
            return this.ar.forEach(function(t) {
                var i = e(t);
                n.AddRange(i.ar)
            }), n
        }, t.prototype.IndicesOf = function(e) {
            for (var n = [], i = 0; i < this.ar.length; i++) this.ar[i] == e && n.push(i);
            return new t(n)
        }, t.prototype.SafeTake = function(t) {
            return this.Take(Math.min(t, this.ar.length))
        }, t.prototype.Reverse = function() {
            return new t(this.ar.reverse())
        }, t.prototype.Shift = function() {
            return this.ar.shift()
        }, t
    }();
    e.List = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(0),
        r = n(2),
        s = function() {
            function t() {}
            return t.AllocatePool = function() {
                null == this.pool && (this.pool = new r.ObjectPool(1e3, function() {
                    return new t
                }))
            }, t.prototype.Initialize = function(e) {
                this.nodeId = t.seqId++, this.ownerPlayerId = e;
                var n = o.gs.gconfig.FieldSize;
                this.x = i.Nums.RandF() * n, this.y = i.Nums.RandF() * n;
                var s = i.Nums.RandF();
                this.mass = i.Nums.MapTo(s * s * s, 500, 22500) >> 0, this.color = r.GameHelper.GenarateRandomColor(), this.m_angle = i.Nums.RandF() * Math.PI * 2, this.speed = i.Nums.MapTo(i.Nums.RandF(), 20, 80), this.radius = r.GameHelper.MassToRadius(this.mass)
            }, t.prototype.Update = function() {
                this.x += Math.cos(this.m_angle) * this.speed, this.y += Math.sin(this.m_angle) * this.speed;
                var t = 1.1 * this.radius,
                    e = o.gs.gconfig.FieldSize;
                i.Nums.InRange(this.x, t, e - t) || (this.m_angle = Math.PI - this.m_angle), i.Nums.InRange(this.y, t, e - t) || (this.m_angle = -this.m_angle)
            }, t.seqId = 0, t
        }(),
        a = function() {
            function t(t) {
                this.nodes = [], this.tick = 0, this.gameCore = t
            }
            return t.prototype.Start = function() {
                this.playerIds = this.gameCore.uMan.GetPlayerIdsAvailable(), s.AllocatePool(), this.averageFps = 60, this.t0 = performance.now();
                for (var t = 0; t < 700; t++);
            }, t.prototype.AddNode = function() {
                var t = i.Nums.RandI(this.playerIds.length),
                    e = this.playerIds[t],
                    n = s.pool.Gain();
                n.Initialize(e), this.nodes.push(n)
            }, t.prototype.RemoveNode = function() {
                var t = this.nodes.shift();
                t && (s.pool.Release(t), this.gameCore.nodeMan.PostNodeRemoval(t.nodeId))
            }, t.prototype.ClearNodes = function() {
                for (var t = 0, e = this.nodes; t < e.length; t++) {
                    var n = e[t];
                    s.pool.Release(n), this.gameCore.nodeMan.PostNodeRemoval(n.nodeId)
                }
                this.nodes = []
            }, t.prototype.FrameUpdateProc = function() {
                var t = performance.now(),
                    e = 1e3 / (t - this.t0);
                this.t0 = t, this.averageFps = i.Nums.EasyFilter(this.averageFps, e, .95), this.tick++, this.tick % 2 == 0 && (this.averageFps > 55 ? this.AddNode() : this.RemoveNode());
                var n = this.gameCore.nodeMan;
                this.nodes.forEach(function(t) {
                    t.Update(), n.PostNodeData(t.nodeId, 0, t.x, t.y, t.mass, t.ownerPlayerId, t.color, t.m_angle, t.speed)
                }), n.SyncGameViewToModel()
            }, t.prototype.Stop = function() {
                this.ClearNodes()
            }, t
        }();
    e.PerfBenchDataFeeder = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(3),
        o = n(2),
        r = n(0),
        s = function() {
            return function() {}
        }();
    e.ServerInfo = s;
    var a = function() {
        function t(t) {
            this.gameCore = t;
            var e = o.AppHelper.GetQueryObject();
            this.showAll = 1 == e.showall
        }
        return t.prototype.Start = function() {
            this.langCode = navigator.language.slice(0, 2), this.UpdateList()
        }, t.prototype.ConnectToServer = function(t) {
            if (Date.now() - r.gs.gstates.playerDeadTimeStamp < 2e3) console.log("server selection cancelled");
            else {
                var e = t.address;
                this.currentServerUri = e, localStorage.setItem("connTargetUri", e);
                var n = t.modName;
                this.gameCore.ConnectToGameServerEx("ws://" + e, n)
            }
        }, t.prototype.FilterServers = function(t) {
            var e = this;
            if (t.forEach(function(t) {
                    t.modName = t.name, t.numClients = t.numPlayers + t.numSpectors, t.order += t.mirrorIndex, -1 != t.mirrorIndex && (t.modName += t.mirrorIndex), t.langCode && e.langCode != t.langCode && (t.visible = !1)
                }), !this.showAll) {
                for (var n = {}, i = 0, o = t; i < o.length; i++) {
                    n[(a = o[i]).name + a.mirrorIndex] = a
                }
                for (var r = 0, s = t; r < s.length; r++) {
                    var a, l = a = s[r],
                        c = n[a.name + (a.mirrorIndex - 1)];
                    if (c) c.numClients > c.numMaxClients - 25 || l.numClients > 10 || (l.visible = !1)
                }
            }
            return t.filter(function(t) {
                return t.visible
            }).sort(function(t, e) {
                return t.order - e.order
            })
        }, t.prototype.UpdateList = function() {
            var t = this,
                e = i.AppConfigurator.instance.trackerServerUri,
                n = i.AppConfigurator.instance.trackerServerTargetSite;
            $.ajax({
                type: "GET",
                url: e + "/list",
                data: {
                    targetSite: n
                },
                success: function(e) {
                    if (t.serverInfos = t.FilterServers(e), null == t.currentServerUri && t.serverInfos.length > 0) {
                        var n = localStorage.getItem("connTargetUri"),
                            i = null;
                        if (n)
                            for (var o = 0, r = t.serverInfos; o < r.length; o++) {
                                var s = r[o];
                                if (s.address == n) {
                                    i = s;
                                    break
                                }
                            }
                        i || (i = t.serverInfos[0]), t.ConnectToServer(i)
                    }
                    t.Notify()
                }
            }), setTimeout(this.UpdateList.bind(this), 5e3)
        }, t
    }();
    e.ServerListModel = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(2),
        r = n(3),
        s = n(4),
        a = function() {
            return function(t, e, n, i) {
                this.senderName = t, this.message = e, this.timeStamp = n, this.nameColor = i
            }
        }();
    e.ChatMessage = a;
    var l = function() {
        function t(t) {
            this.text = "", this.color = "", this.score = "", this.active = !1, this.index = t
        }
        return t.prototype.setData = function(t, e, n) {
            this.text = t, this.color = e, this.score = n, this.active = !0
        }, t.prototype.setNoData = function() {
            this.active = !1
        }, t
    }();
    e.LeaderboardEntry = l;
    var c = function() {
        function t() {
            this.leaderboardEntries = [], this.teamRankingEntries = [], this.chatMessages = [], this.selfScore = 0, this.maxScore = 0, this.leaderboardHeaderText = ""
        }
        return t.prototype.insertStubChatMessages = function() {
            for (var t = 0; t < 2; t++) this.PostChatMessage("ãƒ†ã‚¹ãƒˆ" + t, "ãƒ†ã‚¹ãƒˆ", "0:00", null)
        }, t.prototype.insertStubData = function() {}, t.prototype.Initialize = function() {
            this.leaderboardHeaderText = r.AppConfigurator.instance.leaderboardHeaderText;
            for (var t = 0; t < 10; t++) {
                (e = new l(t)).setNoData(), this.leaderboardEntries.push(e)
            }
            for (t = 0; t < 4; t++) {
                var e;
                (e = new l(t)).setNoData(), this.teamRankingEntries.push(e)
            }
            this.insertStubData()
        }, t.prototype.SetAimPlayerClient = function(t) {
            if (this.specTargetUserId != t) {
                if (this.specTargetUserId = t, t >= 0 && t != s.gameCore.uMan.selfUserId) {
                    var e = s.gameCore.uMan.GetUserInfoById(t);
                    this.specTargetName = e.fullName
                } else this.specTargetName = null;
                this.isHudUpdated = !0
            }
        }, t.prototype.SetSpecTargetScore = function(t) {
            this.specTargetScore = t, this.isHudUpdated = !0
        }, t.prototype.PostServerStatusData = function(t) {
            o.PageHelper.Instance.IsActive && (this.serverStatusText = t.split(/\r?\n/), this.isHudUpdated = !0)
        }, t.prototype.PostLatencyData = function(t) {
            this.latencyMs = t, this.isHudUpdated = !0
        }, t.prototype.PostServerUserNumData = function(t, e, n, i) {
            var o = t + e + " / " + i + " (play: " + t + ", spec: " + e + "), bot: " + n;
            this.serverUserNumText = o, this.isHudUpdated = !0
        }, t.prototype.PostLeaderboardData = function(t) {
            if (o.PageHelper.Instance.IsActive && i.gs.uconfig.ShowLeaderboard) {
                for (var e = 0; e < this.leaderboardEntries.length; e++) {
                    var n = this.leaderboardEntries[e];
                    if (e < t.length) {
                        var r = t[e];
                        n.setData(r.name, r.colorStr, (.001 * r.score).toFixed(1) + "k")
                    } else n.setNoData()
                }
                this.isHudUpdated = !0
            }
        }, t.prototype.PostTeamRankingData = function(t) {
            if (o.PageHelper.Instance.IsActive) {
                if (i.gs.uconfig.ShowLeaderboard) {
                    for (var e = 0; e < this.teamRankingEntries.length; e++) {
                        var n = this.teamRankingEntries[e];
                        if (e < t.length) {
                            var r = t[e];
                            n.setData(r.name, r.colorStr, (.01 * r.score).toFixed(1) + "%")
                        } else n.setNoData()
                    }
                    this.isHudUpdated = !0
                }
                this.chartDataHandlerProc(t)
            }
        }, t.prototype.PostMapData = function(t) {
            i.gs.uconfig.ShowMap && this.mapDataHandlerProc(t)
        }, t.prototype.ClearChatMessages = function() {
            this.chatMessages = [], this.isHudUpdated = !0
        }, t.prototype.PostChatMessage = function(t, e, n, i) {
            i || (i = "#0CF");
            var o = new a(e, n, t, i);
            this.chatMessages.push(o), this.isHudUpdated = !0
        }, t.prototype.PostServerDisplayMessage = function(t) {
            this.serverDisplayMessageText = t, this.isHudUpdated = !0
        }, t.prototype.PostServerInstructionText = function(t) {
            this.serverInstructionProc(t)
        }, t.prototype.ResetMaxScore = function() {
            this.maxScore = 0, this.selfScore = 0
        }, t.prototype.PostSelfScoreData = function(t) {
            this.selfScore = t, this.maxScore = Math.max(this.maxScore, t), this.isHudUpdated = !0
        }, t.prototype.SetSplitNum = function(t) {
            this.splitNum = t, this.isHudUpdated = !0
        }, t
    }();
    e.GameHudModel = c
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(2),
        r = n(0),
        s = n(4),
        a = n(11),
        l = n(8),
        c = function() {
            function t() {
                this.box = new l.Container, this.box2 = new l.Container, this.box.addChild(this.box2), this.baseShape = new l.Graphics, this.box2.addChild(this.baseShape), this.box2.alpha = 1, this.nameLabel = new l.Text, this.SetupLabel(this.nameLabel), this.box.addChild(this.nameLabel)
            }
            return t.Gain = function() {
                return t.pool.Gain()
            }, t.prototype.Release = function() {
                t.pool.Release(this)
            }, t.prototype.Initialize = function(t, e) {
                this.playerId = t, this.isBot = e, this.name = null, this.color = 0, this.mass = 0, this.x = 0, this.y = 0, this.scale = 0, this.x1 = 0, this.y1 = 0, this.scale1 = 0, this.updated = !1, this.isSelfNode = !1, this.nameLabel.style.fill = "#FFFFFF", this.nameLabel.text = null, this.nameLabel.visible = !e
            }, t.prototype.SetupLabel = function(t) {
                t.style.fontFamily = "Meiryo, Arial", t.style.fontSize = 14, t.style.fill = "#FFFFFF"
            }, t.prototype.SetBasicProps = function(t, e, n) {
                if (this.nameLabel && this.name != t) {
                    var i = this.nameLabel;
                    i.text = t, i.x = -i.width / 2, i.y = -i.height / 2, this.name = t
                }
                this.nameLabel.visible = !this.isBot && !n, this.isSelfNode = n
            }, t.prototype.UpdateBotDynamicProps = function(t, e) {
                if (this.nameLabel && this.name != e) {
                    var n = this.nameLabel;
                    n.text = e, n.x = -n.width / 2, n.y = -n.height / 2, this.name = e
                }
                this.isBot = t, this.nameLabel.visible = !this.isBot && !this.isSelfNode
            }, t.prototype.SetVariableProps = function(e, n) {
                if (this.color != e) {
                    this.color = e;
                    var i = t.CellBaseSize / 2;
                    this.baseShape.clear(), this.baseShape.beginFill(e), this.baseShape.drawCircle(0, 0, i), this.baseShape.endFill(), this.isSelfNode && (this.baseShape.lineStyle(15, e), this.baseShape.drawCircle(0, 0, i + 20));
                    var s = o.ColorHelper.ColorToHtmlString(e);
                    this.nameLabel && (this.nameLabel.style.fill = s)
                }
                var a = r.gs.gstates;
                this.box.visible = this.isBot || n || a.isSpectate && !a.isDeadSpectation || r.gs.gconfig.ShowAlwaysAllPlayersInMap
            }, t.prototype.UpdateInterpolation = function() {
                if (this.x = i.Nums.EasyFilter(this.x, this.x1, .99), this.y = i.Nums.EasyFilter(this.y, this.y1, .99), this.scale = i.Nums.EasyFilter(this.scale, this.scale1, .99), this.box.x = this.x, this.box.y = this.y, this.box2.scale.x = this.scale, this.box2.scale.y = this.scale, this.nameLabel) {
                    var t = this.nameLabel;
                    t.y = -t.height - 40 * this.scale
                }
                this.box.z_index = this.scale
            }, t.prototype.SetPosRadius = function(e, n, i) {
                var r = t.mapCoordScale;
                e *= r, n *= r;
                var s = 0 == this.mass;
                this.mass = i;
                var a = o.GameHelper.MassToRadius(i);
                a *= r, a *= .75;
                this.isSelfNode && a < 4 && (a = 4);
                var l = 2 * a / t.CellBaseSize;
                this.x1 = e, this.y1 = n, this.scale1 = l, s && (this.x = e, this.y = n, this.scale = l, this.box.x = e, this.box.y = n, this.box2.scale.x = l, this.box2.scale.y = l)
            }, t.mapCoordScale = .01, t.CellBaseSize = 100, t.pool = new o.ObjectPool(r.gs.gconfig.MaxPlayerUnitNum, function() {
                return new t
            }), t
        }(),
        h = function() {
            function t() {
                this.box = new l.Container, this.gr = new l.Graphics, this.box.addChild(this.gr), this.box.z_index = 100
            }
            return t.prototype.Update = function() {
                var t = s.gameCore.sight,
                    e = this.gr,
                    n = c.mapCoordScale;
                if (e.clear(), r.gs.gstates.isRealtimeMode) {
                    var i = r.gs.ucolors.colorDefs.clGameForeground;
                    e.lineStyle(1, i);
                    var o = t.eyeX * n,
                        a = t.eyeY * n,
                        l = r.gs.gconfig.FieldSize * n;
                    e.alpha = .6, e.moveTo(o, 0), e.lineTo(o, l), e.moveTo(0, a), e.lineTo(l, a);
                    var h = t.ScreenToWorld(0, 0),
                        d = h[0],
                        u = h[1],
                        p = t.ScreenToWorld(window.innerWidth, window.innerHeight),
                        f = p[0],
                        g = p[1];
                    d *= n, u *= n, f *= n, g *= n, e.moveTo(d, u), e.lineTo(f, u), e.lineTo(f, g), e.lineTo(d, g), e.lineTo(d, u)
                }
            }, t
        }(),
        d = function() {
            function t() {
                this.nodes = new Map, this.mapFrontScreen = new h
            }
            return t.prototype.Initialize = function(t) {
                var e = this;
                this.uMan = s.gameCore.uMan, this.sz = t.width;
                var n = {
                    view: t,
                    antialias: !0,
                    transparent: !0
                };
                this.renderer = l.autoDetectRenderer(t.width, t.height, n), this.drawingRoot = new l.Container;
                var i = new a.FieldGraphics(!1);
                this.drawingRoot.addChild(i.box), i.SetScale(this.sz / i.baseSize), this.stage = new l.Container, this.stage.addChild(this.mapFrontScreen.box), this.drawingRoot.addChild(this.stage);
                var o = function() {
                    requestAnimationFrame(o), r.gs.uconfig.ShowMap && e.FrameProc()
                };
                o(), s.gameCore.gameHudModel.mapDataHandlerProc = this.PostMapData.bind(this)
            }, t.prototype.FrameProc = function() {
                o.PageHelper.Instance.IsActive && (c.mapCoordScale = this.sz / r.gs.gconfig.FieldSize, this.mapFrontScreen.Update(), this.nodes.forEach(function(t) {
                    return t.UpdateInterpolation()
                }), this.renderer.render(this.drawingRoot))
            }, t.prototype.PostMapData = function(t) {
                var e = this;
                this.nodes.forEach(function(t) {
                    return t.updated = !1
                });
                for (var n = 0, i = t; n < i.length; n++) {
                    var o = i[n],
                        r = o.playerId,
                        s = this.nodes.get(r);
                    if (!s) {
                        var a = this.uMan.GetUserInfoById(r);
                        if (-1 == a.clientId) continue;
                        var l = 1 & r,
                            h = a.fullName,
                            d = a.isBot,
                            u = a.skinUrls[l];
                        (s = c.Gain()).Initialize(r, d);
                        var p = (65534 & r) == this.uMan.selfUserId;
                        s.SetBasicProps(h, u, p), this.stage.addChild(s.box), this.nodes.set(r, s)
                    }
                    var f = this.uMan.GetTeamInfoForUser(r),
                        g = f == this.uMan.selfTeamInfo;
                    s.SetVariableProps(f.color, g), s.SetPosRadius(o.xpos, o.ypos, o.mass), s.updated = !0;
                    var y = this.uMan.GetUserInfoById(r);
                    if (-1 != y.clientId) {
                        var m = y.fullName,
                            v = y.isBot;
                        s.name == m && s.isBot == v || s.UpdateBotDynamicProps(v, m)
                    }
                }
                var S = new Array;
                this.nodes.forEach(function(t) {
                    return !t.updated && S.push(t)
                }), S.forEach(function(t) {
                    e.stage.removeChild(t.box), e.nodes.delete(t.playerId), t.Release()
                })
            }, t
        }();
    e.MapView = d
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(4),
        r = function() {
            function t() {}
            return t.prototype.Initialize = function(t) {
                this.ctx = t.getContext("2d"), this.sz = t.width, o.gameCore.gameHudModel.chartDataHandlerProc = this.PostTeamRankingData.bind(this)
            }, t.prototype.NormAngleToChartAngle = function(t) {
                var e = Math.PI;
                return .5 * -e + t * e * 2
            }, t.prototype.PostTeamRankingData = function(t) {
                if (i.gs.uconfig.ShowLeaderboard || !i.gs.gconfig.ShowTeamRanking) {
                    var e = this.ctx,
                        n = this.sz / 2,
                        o = this.sz / 2,
                        r = Math.PI;
                    e.font = "16px CustomFont1, ãƒ¡ã‚¤ãƒªã‚ª, Arial", e.fillStyle = "#CCC", e.clearRect(0, 0, this.sz, this.sz), e.beginPath(), e.arc(n, n, o, 0, 2 * r, !1), e.fill();
                    for (var s = 0, a = 0, l = t; a < l.length; a++) {
                        var c = (y = l[a]).name,
                            h = y.colorStr,
                            d = 1e-4 * y.score;
                        e.fillStyle = h, e.beginPath();
                        var u = this.NormAngleToChartAngle(s),
                            p = this.NormAngleToChartAngle(s + d);
                        e.moveTo(n, n), e.lineTo(n + Math.cos(u) * o, n + Math.sin(u) * o), e.arc(n, n, o, u, p, !1), e.lineTo(n, n), e.stroke(), e.fill(), s += d
                    }
                    e.beginPath(), e.arc(n, n, o, 0, 2 * r, !1), e.stroke(), s = 0;
                    for (var f = 0, g = t; f < g.length; f++) {
                        var y;
                        c = (y = g[f]).name, d = 1e-4 * y.score, u = this.NormAngleToChartAngle(s), p = this.NormAngleToChartAngle(s + d);
                        if (d > .07) {
                            var m = (u + p) / 2,
                                v = e.measureText(c).width;
                            e.fillStyle = "black";
                            var S = .6 * o;
                            e.fillText(c, n + Math.cos(m) * S - v / 2, n + Math.sin(m) * S + 4)
                        }
                        s += d
                    }
                }
            }, t
        }();
    e.TeamRankingChartView = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(2),
        r = n(0),
        s = n(4),
        a = n(12),
        l = n(11),
        c = n(1),
        h = n(30),
        d = n(13),
        u = n(8);
    ! function(t) {
        var e = function() {
                function t(t) {
                    this.holdTick = 0, this.gameView = t, this.box = new u.Container, this.gr = new u.Graphics, this.box.addChild(this.gr), this.box.z_index = 1e3, this.elCursorOuter = document.querySelector("#psudo_cursor"), this.elCursorImageOn = document.querySelector("#psudo_cursor_img_on"), this.elCursorOuter.style.webkitUserSelect = "none"
                }
                return t.prototype.SetPsudoCursor = function(t, e, n, i) {
                    var o = this.elCursorOuter;
                    o.style.display = t ? "block" : "none", o.style.left = n + "px", o.style.top = i + "px", e && (this.holdTick = 7), this.holdTick > 0 && this.holdTick--, this.elCursorImageOn.style.display = this.holdTick > 0 ? "block" : "none"
                }, t.prototype.Update = function() {
                    this.gr.clear(), r.gs.gstates.isBenchmarkMode || (this.UpdateCursor(), this.UpdateEatingLimitMarker(), this.UpdateCellDirectionMarker(), this.UpdateTeamCircle())
                }, t.prototype.DrawCrossPoint = function(t, e, n) {
                    var i = this.gr;
                    i.moveTo(t - n, e), i.lineTo(t + n, e), i.moveTo(t, e - n), i.lineTo(t, e + n)
                }, t.prototype.UpdateTeamCircle = function() {
                    var t = Date.now(),
                        e = s.gameCore.sight,
                        n = this.gr;
                    if (t - e.teamCircleTimeStamp < 500) {
                        var i = e.teamCircleX,
                            o = e.teamCircleY,
                            r = e.teamCircleRadius;
                        n.lineStyle(10, 16777215, 1), n.drawCircle(i, o, r)
                    }
                }, t.prototype.UpdateCellDirectionMarker = function() {
                    var t = this.gr;
                    r.gs.uconfig.ShowCellDirectionMarker && this.gameView.cells.forEach(function(e) {
                        if (e.isPlayerCell) {
                            var n = e.node;
                            if (0 != n.velocity.x || 0 != n.velocity.y) {
                                var o = Math.atan2(n.velocity.y, n.velocity.x),
                                    r = n.xpos,
                                    s = n.ypos,
                                    a = e.baseSize / 2 * e.scale * .8,
                                    l = e.baseSize / 2 * e.scale * 1.05,
                                    c = r + Math.cos(o) * a,
                                    h = s + Math.sin(o) * a,
                                    d = r + Math.cos(o) * l,
                                    u = s + Math.sin(o) * l,
                                    p = e.labelColor;
                                t.lineStyle(10, p, 1);
                                var f = .05 * n.radius;
                                f = i.Nums.LoLimit(f, 15), t.lineWidth = f, t.moveTo(c, h), t.lineTo(d, u)
                            }
                        }
                    })
                }, t.prototype.UpdateEatingLimitMarker = function() {
                    var t = this;
                    r.gs.uconfig.ShowEatLimitMarker && s.gameCore.nodeMan.nodeAnalyzer.eatingLimitList.forEach(function(e) {
                        var n = t.gameView.cells.get(e.eaterId),
                            i = t.gameView.cells.get(e.eatenId),
                            o = e.canEat ? 65535 : 11184810;
                        t.gr.lineStyle(10, o, 1), t.DrawCrossPoint(n.x, n.y, 100), t.DrawCrossPoint(i.x, i.y, 100), t.gr.drawCircle(n.x, n.y, e.limitRadius)
                    })
                }, t.prototype.UpdateCursor = function() {
                    var t = this,
                        e = s.gameCore.sight;
                    if ((r.gs.gstates.isPlaying ? r.gs.uconfig.ShowCursorLine : r.gs.uconfig.ShowSpecAimCursor) && e.aimPlayerId > 0) {
                        var n = e.aimCursorX,
                            i = e.aimCursorY,
                            a = this.gr,
                            l = r.gs.ucolors.GetColor("clCursorLine");
                        a.alpha = o.ColorHelper.GetAlpha(l);
                        var c = r.gs.uconfig.EmphasisCursorLine ? 15 : 5;
                        c *= .2 / e.eyeScale, a.lineStyle(c, l);
                        var h = e.aimPlayerId,
                            d = 0;
                        s.gameCore.nodeMan.nodes.forEach(function(e) {
                            if (e.ownerPlayerId == h && 0 == e.cellType) {
                                var o = t.gameView.cells.get(e.nodeId);
                                a.moveTo(o.x, o.y), a.lineTo(n, i), d++
                            }
                        });
                        var u = e.WorldToScreen(n, i),
                            p = u[0],
                            f = u[1];
                        this.SetPsudoCursor(!r.gs.gstates.isRealtimeModePlaying && d > 0, e.splitting, p, f), e.splitting = !1
                    } else this.SetPsudoCursor(!1, !1, 0, 0)
                }, t
            }(),
            n = function() {
                function t() {
                    this.cardSize = 50
                }
                return t.prototype.Initialize = function() {
                    this.canvas = document.createElement("canvas"), this.canvas.width = this.cardSize, this.canvas.height = this.cardSize, this.texture = u.Texture.fromCanvas(this.canvas), this.UpdateDrawing_Canvas(), r.gs.ucolors.RegisterChangedProc("clVirusInnerFill", this.UpdateDrawing_Canvas.bind(this)), r.gs.ucolors.RegisterChangedProc("clVirusOuterStroke", this.UpdateDrawing_Canvas.bind(this))
                }, t.prototype.UpdateDrawing_Canvas = function() {
                    var t = this.cardSize,
                        e = t / 2,
                        n = this.canvas.getContext("2d"),
                        i = r.gs.ucolors.GetColor("clVirusInnerFill"),
                        s = r.gs.ucolors.GetAlpha("clVirusInnerFill"),
                        a = r.gs.ucolors.GetColor("clVirusOuterStroke"),
                        l = r.gs.ucolors.GetAlpha("clVirusOuterStroke");
                    n.clearRect(0, 0, t, t), n.fillStyle = o.ColorHelper.ColorToHtmlString(i), n.globalAlpha = s, n.beginPath(), n.arc(e, e, e, 0, 2 * Math.PI, !1), n.fill();
                    var c = 5 * (.01 * this.cardSize),
                        h = this.cardSize / 2;
                    n.lineWidth = c, n.strokeStyle = o.ColorHelper.ColorToHtmlString(a), n.globalAlpha = l, n.beginPath(), n.arc(e, e, h - c / 2, 0, 2 * Math.PI, !1), n.stroke(), n.globalAlpha = 1, this.texture.update()
                }, t.instance = new t, t
            }(),
            p = function() {
                function t() {}
                return t.prototype.GetSequenceString = function() {
                    var t = this;
                    return "" + t.skinUrl + t.nameText + t.skinAlpha + t.renderQuality + t.baseColor + t.teamColor + t.showEnemyOverlay + t.insertRenderName
                }, t
            }(),
            f = function() {
                function t() {}
                return t.GetConfigCardSizeFromRenderQuality = function(e) {
                    return t.CardSizeSource[e]
                }, Object.defineProperty(t, "CurrentConfigCardSize", {
                    get: function() {
                        return t.GetConfigCardSizeFromRenderQuality(r.gs.uconfig.RenderQuality)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.CardSizeSource = [200, 400, 800], t
            }(),
            g = function() {
                function t(t) {
                    this.drawingProps = new p, this.playerId = t, this.drawingProps.renderQuality = r.gs.uconfig.RenderQuality
                }
                return t.ResizeInterCanvasIfNeed = function(e) {
                    var n = t.interCanvas;
                    n.height < e && (n.width = e, n.height = e)
                }, t.prototype.ResizeCanvasIfNeed = function(t) {
                    if (this.canvas || (this.canvas = document.createElement("canvas"), this.canvasCapacitySize = 10, this.canvas.width = 10, this.canvas.height = 10), this.canvasCapacitySize != t) {
                        this.canvasCapacitySize = t, this.canvas.height < t && (this.canvas = document.createElement("canvas"), this.canvas.width = t, this.canvas.height = t, this.baseTexture = u.BaseTexture.fromCanvas(this.canvas));
                        var e = new u.Rectangle(0, 0, t, t);
                        this.texture = new u.Texture(this.baseTexture, e)
                    }
                }, t.prototype.StringToCharArrayU = function(t) {
                    return t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || []
                }, t.prototype.DrawTextCircular = function(t, e, n, i, o, r, s, a) {
                    t.save(), t.translate(n, i);
                    for (var l = s, c = this.StringToCharArrayU(e), h = 0; h < c.length; h++) {
                        var d = c[h];
                        t.save(), t.rotate(l);
                        var u = t.measureText(d).width,
                            p = -u / 2,
                            f = o * a;
                        t.strokeText(d, p, f), t.fillText(d, p, f), t.restore();
                        var g = .4 * u + .2 * r,
                            y = Math.sqrt(o * o - g * g);
                        l -= 2 * Math.atan2(g, y)
                    }
                    t.restore()
                }, t.prototype.RenderCellCanvas = function() {
                    var e = this.drawingProps,
                        n = f.GetConfigCardSizeFromRenderQuality(e.renderQuality);
                    this.cardSize = n;
                    var i = n / 2;
                    this.ResizeCanvasIfNeed(n);
                    var r = this.canvas.getContext("2d");
                    if (r.save(), r.clearRect(0, 0, n + 1, n + 1), r.beginPath(), r.arc(i, i, i, 0, 2 * Math.PI, !1), r.closePath(), r.clip(), this.skinVisible = this.skinImage && e.skinAlpha > 0, this.skinVisible) {
                        r.fillStyle = o.ColorHelper.ColorToHtmlString(e.baseColor), r.fillRect(0, 0, n, n);
                        var s = this.skinImage,
                            a = s.width,
                            l = s.height,
                            c = 0,
                            h = 0,
                            d = 0,
                            u = n;
                        if (a > l ? (c = (a - (d = l)) / 2, h = 0) : (c = 0, h = (l - (d = a)) / 2), r.globalAlpha = e.skinAlpha, u / d < .5) {
                            t.ResizeInterCanvasIfNeed(2 * n);
                            var p = t.interCanvas,
                                g = p.getContext("2d"),
                                y = 2 * u;
                            g.clearRect(0, 0, y, y), g.drawImage(s, c, h, d, d, 0, 0, y, y), r.drawImage(p, 0, 0, y, y, 0, 0, u, u)
                        } else r.drawImage(s, c, h, d, d, 0, 0, u, u);
                        r.globalAlpha = 1
                    }
                    var m = o.ColorHelper.ColorToHtmlString(e.teamColor);
                    if (e.showEnemyOverlay) {
                        var v = 2 * Math.PI,
                            S = 6 * (_ = .01 * n),
                            b = 7 * _,
                            C = n / 2;
                        r.strokeStyle = m, r.lineWidth = S, r.globalAlpha = .3, r.fillStyle = "#000", r.fillRect(0, 0, n, n), r.globalAlpha = .8, r.beginPath(), r.arc(i, i, C - b, 0, v, !1), r.stroke();
                        var x = .707 * C - b;
                        r.beginPath(), r.moveTo(C + x, C - x), r.lineTo(C - x, C + x), r.stroke(), r.globalAlpha = 1
                    }
                    if (e.insertRenderName) {
                        var _, k = 10 * (_ = .01 * n) >> 0;
                        r.font = "bold " + k + "px Meiryo, Arial", r.strokeStyle = "#000", r.fillStyle = m, r.lineWidth = 1.3 * _ >> 0, this.DrawTextCircular(r, e.nameText, i, i, .8 * i, k, 1.5, 1)
                    }
                    r.restore(), r.getImageData(0, 0, 1, 1), this.texture.update()
                }, t.prototype.Update = function() {
                    var t = this,
                        e = this.drawingProps,
                        n = e.GetSequenceString(),
                        i = e.skinUrl,
                        l = s.gameCore.uMan,
                        c = 65535 & this.playerId,
                        h = 1 & this.playerId,
                        u = l.GetUserInfoById(c),
                        p = l.GetTeamInfoById(u.teamId),
                        f = c == l.selfUserId,
                        g = r.gs.gstates.isPlaying || r.gs.gstates.isDeadSpectation,
                        y = u.skinUrls[h],
                        m = p == l.selfTeamInfo,
                        v = o.GameHelper.CheckIsInEatableSection(p.section, l.selfTeamInfo.section),
                        S = !u.isBot && "" == y;
                    S && (y = r.gs.gconfig.NoskinFallbackUrl);
                    var b = 1,
                        C = !0;
                    g && !m && (r.gs.uconfig.ShowEnemySkin ? b = .6 : C = !1), S && f && (C = !1), "dead" == u.name && (C = !1), r.gs.gconfig.ShowAlwaysAllPlayersSkin && (C = !0, b = 1), this.skinImage && 0 == d.SkinImageManager.instance.getSkinAvailability(this.skinImage.src) && (C = !1), r.gs.uconfig.ShowSkin || (C = !1), C || (b = 0), e.baseColor = u.colors[h], e.skinUrl = y, e.nameText = u.fullName, e.teamColor = p.color, e.renderQuality = r.gs.uconfig.RenderQuality, e.insertRenderName = r.gs.uconfig.ShowCircularName && r.gs.uconfig.ShowName && !(!r.gs.uconfig.ShowSelfName && f), e.skinAlpha = b, e.showEnemyOverlay = r.gs.uconfig.ShowEnemySkin && g && !u.isBot && !m && v && b > 0, r.gs.gconfig.ShowAlwaysAllPlayersSkin && (e.showEnemyOverlay = !1), e.GetSequenceString() != n && (e.skinUrl != i ? (this.skinImage = null, this.reqRenderCellCanvasOnNextFrame = !0, e.skinUrl && a.ImageWrapper.LoadImageThen(e.skinUrl, function(e) {
                        e && d.SkinImageManager.instance.addSkinUrl(e.src), t.skinImage = e, t.reqRenderCellCanvasLazy = !0
                    })) : this.reqRenderCellCanvasLazy = !0)
                }, t.prototype.Purge = function() {
                    this.skinImage && this.skinImage.src && d.SkinImageManager.instance.removeSkinUrl(this.skinImage.src)
                }, t.interCanvas = document.createElement("canvas"), t
            }(),
            y = function() {
                function t() {
                    this.cellCards = new Map
                }
                return t.prototype.GetCellCard = function(t, e) {
                    void 0 === e && (e = !1);
                    var n = this.cellCards.get(t);
                    return !n && e && (n = new g(t), this.cellCards.set(t, n)), c.Utils.Confirm(n), n
                }, t.prototype.OnUserLeaved = function(t) {
                    var e = this.cellCards.get(t);
                    e && e.Purge(), this.cellCards.delete(t), this.cellCards.delete(t + 1)
                }, t.prototype.UpdateCardDrawingQueue = function() {
                    var t = !1;
                    this.cellCards.forEach(function(e) {
                        e.reqRenderCellCanvasOnNextFrame && (e.RenderCellCanvas(), e.reqRenderCellCanvasOnNextFrame = !1, t = !0)
                    }), this.cellCards.forEach(function(e) {
                        !t && e.reqRenderCellCanvasLazy && (e.RenderCellCanvas(), e.reqRenderCellCanvasLazy = !1, t = !0)
                    })
                }, t.instance = new t, t
            }(),
            m = function() {
                function t() {
                    this.box = new u.Container, this.baseShape = new u.Graphics, this.baseSprite = new u.Sprite, this.baseSprite.anchor.x = .5, this.baseSprite.anchor.y = .5, this.overShape = new u.Graphics, this.nameLabel = new u.Text, this.massLabel = new u.Text, this.box.addChild(this.baseShape), this.box.addChild(this.baseSprite), this.box.addChild(this.overShape), this.box.addChild(this.nameLabel), this.box.addChild(this.massLabel)
                }
                return t.Gain = function() {
                    return t.pool.Gain()
                }, t.prototype.Release = function() {
                    t.pool.Release(this)
                }, Object.defineProperty(t.prototype, "isPlayerCell", {
                    get: function() {
                        return 0 == this.node.cellType
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isVirus", {
                    get: function() {
                        return 2 == this.node.cellType
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPellet", {
                    get: function() {
                        return 1 == this.node.cellType
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isFood", {
                    get: function() {
                        return 3 == this.node.cellType
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isFunnel", {
                    get: function() {
                        return 4 == this.node.cellType
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.SetupLabel = function(t) {
                    t.style.fontFamily = "Meiryo, Arial", t.style.fontWeight = "bold", t.style.stroke = "#000000", t.style.fontSize = .13 * this.baseSize >> 0, t.style.strokeThickness = .015 * this.baseSize >> 0
                }, t.prototype.Initialize = function(t) {
                    this.node = t;
                    var e = s.gameCore.uMan.GetUserInfoById(this.node.ownerPlayerId);
                    this.isPlayerCell && e.isBot;
                    this.cellCard = null, this.isPlayerCell ? this.cellCard = y.instance.GetCellCard(t.ownerPlayerId) : this.isVirus && (this.cellCard = n.instance), this.baseSize = f.CurrentConfigCardSize, this.SetupLabel(this.nameLabel), this.SetupLabel(this.massLabel), this.baseColor = -1, this.labelColor = -1, this.edgeColor = -1, this.edgeColor2 = -1, this.ringColor = -1, this.frameTick = 0, this.x = 0, this.y = 0, this.scale = 1, this.x0 = 0, this.y0 = 0, this.scale0 = 1, this.x1 = 0, this.y1 = 0, this.scale1 = 0, this.angle = 0, this.speed = 0, this.speedApplyTime = 0, this.time = 0, this.mass = 0, this.isInEatableSection = !1
                }, t.prototype.UpdateProps = function(t) {
                    this.node = t, !(0 == this.mass) && this.isPellet || this.UpdatePosRadius()
                }, t.prototype.UpdateLabels = function(t, e, n) {
                    var i = null != t,
                        r = e >= 0;
                    if ((i || r) && this.labelColor != n) {
                        this.labelColor = n;
                        var s = o.ColorHelper.ColorToHtmlString(n);
                        this.nameLabel.style.fill = s, this.massLabel.style.fill = s
                    }
                    i && ((l = this.nameLabel).text != t && (l.text = t, l.x = -l.width / 2, l.y = -l.height / 2));
                    if (r) {
                        var a = e.toString();
                        if (this.massLabel.text != a) {
                            var l = this.massLabel,
                                c = this.isVirus ? 2 : 1;
                            l.scale.x = c, l.scale.y = c, l.text = a, l.x = -l.width / 2, l.y = -l.height / 2, i && t && (l.y += .2 * this.baseSize)
                        }
                    }
                    this.massLabel.visible = r, this.nameLabel.visible = i
                }, t.prototype.UpdateDrawing = function(t, e, n, i, o) {
                    var s = this.baseSize / 2,
                        a = this.baseSize / 200,
                        l = e >= 0 || i >= 0 || o >= 0;
                    if (l && (this.edgeColor != e || this.edgeColor2 != i || this.ringColor != o)) {
                        if (this.edgeColor = e, this.edgeColor2 = i, this.ringColor = o, (d = this.overShape).clear(), d.alpha = 1, e >= 0) {
                            var c = 12 * a;
                            if (d.lineStyle(c, e), d.drawCircle(0, 0, s - c / 2), n) {
                                var h = .707 * s;
                                d.moveTo(h, -h), d.lineTo(-h, h)
                            }
                        }
                        if (i >= 0) {
                            c = 4 * a;
                            d.lineStyle(c, i), d.drawCircle(0, 0, s - c / 2)
                        }
                        if (o >= 0) {
                            c = 5 * a;
                            d.lineStyle(c, o), d.drawCircle(0, 0, s + 10 * a)
                        }
                    }
                    this.overShape.visible = l, this.overShape.alpha = r.gs.uconfig.MarkerAlpha;
                    var d, u = t >= 0;
                    u && this.baseColor != t && (this.baseColor = t, (d = this.baseShape).clear(), t >= 0 && (d.beginFill(t), d.drawCircle(0, 0, s), d.endFill()));
                    this.baseShape.visible = u
                }, t.prototype.UpdateGraphicsForFrame = function() {
                    var e = this.baseSize;
                    this.baseSize = f.CurrentConfigCardSize;
                    var n = this.baseSize != e,
                        a = this.node,
                        l = s.gameCore.nodeMan,
                        h = s.gameCore.uMan,
                        d = o.GameHelper.DecodePlayerId(a.ownerPlayerId),
                        u = d[0],
                        p = d[1],
                        g = h.GetUserInfoById(u),
                        y = h.GetTeamInfoById(g.teamId),
                        m = g.isBot,
                        v = y == h.selfTeamInfo,
                        S = h.selfTeamInfo.section,
                        b = (this.isPlayerCell || this.isFood) && !o.GameHelper.CheckIsInEatableSection(y.section, S);
                    this.isInEatableSection = b;
                    var C = r.gs.gstates.isPlaying && b;
                    this.box.alpha = C ? .5 : 1;
                    var x = this.isPlayerCell && (65534 & a.ownerPlayerId) == h.selfUserId,
                        _ = this.isPlayerCell && a.ownerPlayerId == l.activeSelfPlayerId;
                    n && (this.SetupLabel(this.nameLabel), this.SetupLabel(this.massLabel));
                    var k = this.isPlayerCell && !r.gs.uconfig.ShowCircularName && r.gs.uconfig.ShowName && !(!r.gs.uconfig.ShowSelfName && x) && "" != g.fullName,
                        w = r.gs.uconfig.ShowMass && (this.isPlayerCell || this.isVirus),
                        I = k && g.fullName ? g.fullName : null,
                        P = w ? a.mass : -1,
                        M = this.isVirus ? 16777215 : y.color;
                    this.UpdateLabels(I, P, M);
                    var T = -1,
                        R = -1,
                        U = -1,
                        A = -1,
                        F = !1;
                    if (this.isPlayerCell ? T = g.colors[p] : this.isFood ? T = g.colors[p] : this.isFunnel ? T = g.colors[p] : this.isPellet && (T = a.color), this.isPlayerCell) {
                        if (r.gs.uconfig.ShowSplitPrediction && _) {
                            var N = a.splitOrderWeight,
                                O = i.Nums.MapTo(N, .9, .58);
                            R = 16777215 & o.ColorHelper.ColorFromHSVA(O, 1, 1, 1)
                        }
                        if (r.gs.uconfig.ShowMassMarker && !_) {
                            var E = a.sizeLevel;
                            if (-1 != E) {
                                var D = t.massMarkColors[E];
                                a.canEat && (4 == E && (D = 65280), 5 == E && (D = 255)), r.gs.uconfig.ShowSkin && (r.gs.uconfig.ShowEnemySkin || v) ? (R = D, F = !m && !v, r.gs.gconfig.ShowAlwaysAllPlayersSkin && (F = !1)) : T = D
                            }
                        }
                        if (r.gs.uconfig.ShowSplitIndicator && r.gs.gstates.isPlaying && !x && a.showMark && (A = a.canEat ? 65280 : 11184810), r.gs.uconfig.ShowAutoSplitAlert && !r.gs.gstates.isBenchmarkMode && a.mass >= 17325) {
                            var B = this.frameTick / 25 * .5 % 1;
                            (B *= 2) > 1 && (B = 2 - B);
                            O = i.Nums.MapTo(B, 0, .33);
                            U = 16777215 & o.ColorHelper.ColorFromHSVA(O, 1, 1, 1)
                        }
                    }
                    if (this.cellCard, this.isPlayerCell || c.Utils.Confirm(-1 == R && -1 == U && -1 == A), this.UpdateDrawing(T, R, F, U, A), this.cellCard && this.cellCard.texture) {
                        this.baseSprite.texture = this.cellCard.texture;
                        var H = this.baseSize / this.cellCard.cardSize;
                        this.baseSprite.scale.x = H, this.baseSprite.scale.y = H
                    }
                    this.baseSprite.visible = null != this.cellCard
                }, t.prototype.UpdateInterpolation = function(t) {
                    if (this.frameTick++, r.gs.uconfig.UsePrecedingInterpolation) {
                        var e = i.Nums.MapTo(r.gs.uconfig.InterpolationSpeed, .9, .5);
                        this.x = i.Nums.EasyFilter(this.x, this.x1, e), this.y = i.Nums.EasyFilter(this.y, this.y1, e), this.scale = i.Nums.EasyFilter(this.scale, this.scale1, e), this.speedApplyTime -= t, this.speedApplyTime <= 0 && (this.speed = 0);
                        var n = 1 * o.GameHelper.MassToRadius(this.mass),
                            s = r.gs.gconfig.FieldSize;
                        i.Nums.InRange(this.x1, n, s - n) && i.Nums.InRange(this.y1, n, s - n) || (this.speed = 0), this.x1 += Math.cos(this.angle) * this.speed, this.y1 += Math.sin(this.angle) * this.speed
                    } else {
                        var a = performance.now(),
                            l = i.Nums.MapTo(r.gs.uconfig.InterpolationSpeed, 120, 40),
                            c = i.Nums.Clamp((a - this.time) / l, 0, 1);
                        this.x = i.Nums.Lerp(this.x0, this.x1, c), this.y = i.Nums.Lerp(this.y0, this.y1, c), this.scale = i.Nums.Lerp(this.scale0, this.scale1, c)
                    }
                    this.box.x = this.x, this.box.y = this.y, this.box.scale.x = this.scale, this.box.scale.y = this.scale, this.box.z_index = this.scale + 1e-8 * this.node.nodeId + (this.isInEatableSection ? 100 : 0)
                }, t.prototype.UpdatePosRadius = function() {
                    this.time = performance.now();
                    var t = 0 == this.mass,
                        e = this.node.xpos,
                        n = this.node.ypos,
                        i = this.node.mass,
                        s = 2 * o.GameHelper.MassToRadius(i) / this.baseSize,
                        a = this.node.motionAngle,
                        l = this.node.motionSpeed;
                    r.gs.uconfig.UsePrecedingInterpolation ? (this.speed = 25 * l / 60 * .6, this.speedApplyTime = 50) : this.speed = 0, t ? (this.x0 = e, this.y0 = n, this.scale0 = s, this.x = e, this.y = n, this.scale = s) : (this.x0 = this.x, this.y0 = this.y, this.scale0 = this.scale), this.x1 = e, this.y1 = n, this.scale1 = s, this.angle = a, this.mass = i
                }, t.pool = new o.ObjectPool(r.gs.gconfig.MaxCellsNum, function() {
                    return new t
                }), t.massMarkColors = [16711680, 16737792, 16776960, 56831, 43520, 204], t
            }(),
            v = function() {
                function t() {
                    this.cells = new Map, this.time0 = Date.now(), this.checkQueue_interval = new h.PerformanceCheckQueue(60), this.checkQueue_duration = new h.PerformanceCheckQueue(60), this.frameIndex = 0
                }
                return t.prototype.Initialize = function() {
                    var t = this,
                        i = document.querySelector("#game_canvas_layer_main"),
                        o = {
                            view: i,
                            antialias: !0,
                            transparent: !0
                        };
                    this.renderer = u.autoDetectRenderer(i.width, i.height, o), this.drawingRoot = new u.Container, this.stage = new u.Container, this.drawingRoot.addChild(this.stage), this.fieldGraphics = new l.FieldGraphics(!0), this.stage.addChild(this.fieldGraphics.box);
                    var a = function() {
                        t.fieldGraphics.SetCoordVisibility(r.gs.uconfig.ShowCoord)
                    };
                    r.gs.uconfig.RegisterChangedProc("ShowCoord", a), a(), this.cellsBox = new u.Container, this.stage.addChild(this.cellsBox), n.instance.Initialize(), this.gfs = new e(this), this.stage.addChild(this.gfs.box), s.gameCore.nodeMan.gameViewSyncNodesToListProc = this.SyncNodeListToModel.bind(this), s.gameCore.uMan.userLeavedProc = function(t) {
                        y.instance.OnUserLeaved(t)
                    };
                    var c = function() {
                        var e = window.innerWidth,
                            n = window.innerHeight;
                        t.renderer.resize(e, n), s.gameCore.sight.SetScreenSize(e, n)
                    };
                    c(), window.onresize = c
                }, t.prototype.StartAnimation = function() {
                    var t = this,
                        e = function() {
                            requestAnimationFrame(e), o.TimeChecker.Start("FrameProc"), t.FrameProc(), o.TimeChecker.Stop()
                        };
                    e(), this.UpdatePerf()
                }, t.prototype.FrameProc = function() {
                    this.frameIndex++;
                    var t = r.gs.usupport.TargetFrameRate;
                    r.gs.gstates.isBenchmarkMode && (t = 60);
                    var e = 60 / t;
                    if (this.frameIndex % e == 0 && (o.PageHelper.Instance.Update(), o.PageHelper.Instance.IsActive)) {
                        r.gs.gstates.isBenchmarkMode && s.gameCore.benchDataFeeder.FrameUpdateProc(), s.gameCore.sight.UpdateFrame();
                        var n = performance.now();
                        y.instance.UpdateCardDrawingQueue();
                        var i = performance.now(),
                            a = i - this.time0;
                        this.time0 = i, this.cells.forEach(function(t) {
                            t.UpdateGraphicsForFrame(), t.UpdateInterpolation(a)
                        }), this.gfs.Update(), this.checkQueue_interval.Push(a), this.cellsBox.children.sort(function(t, e) {
                            return (t.z_index || 0) - (e.z_index || 0)
                        }), this.UpdateStagePlacement(), this.fieldGraphics.SetScale(r.gs.gconfig.FieldSize / this.fieldGraphics.baseSize), this.renderer.render(this.drawingRoot);
                        var l = performance.now() - n;
                        this.checkQueue_duration.Push(l)
                    }
                }, t.prototype.UpdatePerf = function() {
                    setTimeout(this.UpdatePerf.bind(this), 1e3), o.TimeChecker.Start("UpdatePerf");
                    var t = s.gameCore.perfModel,
                        e = this.checkQueue_duration.GetAverageValue();
                    t.avgDuration = e, t.avgRate = e / 17;
                    var n = this.checkQueue_interval.GetAverageValue();
                    t.avgFps = 1e3 / n, t.numCellsRendered = this.cells.size, o.TimeChecker.Stop()
                }, t.prototype.UpdateStagePlacement = function() {
                    var t = this.stage,
                        e = s.gameCore.sight,
                        n = e.scw / 2 - e.eyeX * e.eyeScale,
                        i = e.sch / 2 - e.eyeY * e.eyeScale;
                    t.position.x = n, t.position.y = i, t.scale.x = e.eyeScale, t.scale.y = e.eyeScale
                }, t.prototype.SyncNodeListToModel = function() {
                    var t = this,
                        e = s.gameCore.nodeMan,
                        n = new Set(this.cells.keys()),
                        i = new Set;
                    e.nodes.forEach(function(t) {
                        if (0 == t.cellType) {
                            s.gameCore.uMan.GetUserInfoById(t.ownerPlayerId);
                            i.add(t.ownerPlayerId)
                        }
                    }), i.forEach(function(t) {
                        y.instance.GetCellCard(t, !0).Update()
                    }), e.nodes.forEach(function(e) {
                        var i = e.nodeId,
                            o = t.cells.get(i);
                        o || ((o = m.Gain()).Initialize(e), t.cells.set(i, o), t.cellsBox.addChild(o.box)), o.UpdateProps(e), n.delete(i)
                    }), n.forEach(function(e) {
                        var n = t.cells.get(e);
                        t.cellsBox.removeChild(n.box), t.cells.delete(e), n.Release()
                    })
                }, t
            }();
        t.GameView = v
    }(e.GameViewDomain2 || (e.GameViewDomain2 = {}))
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t) {
            this.values = [0], this.maxCount = t
        }
        return t.prototype.Push = function(t) {
            this.values.length > this.maxCount && this.values.shift(), this.values.push(t)
        }, t.prototype.GetAverageValue = function() {
            var t = 0;
            return t = this.values.reduce(function(t, e) {
                return t + e
            }, 0), t /= this.values.length
        }, t
    }();
    e.PerformanceCheckQueue = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t() {
            this.listeners = new Map
        }
        return t.prototype.emit = function(t, e) {
            var n = this.listeners.get(t);
            if (n)
                for (var i = 0, o = n; i < o.length; i++) {
                    (0, o[i])(e)
                }
        }, t.prototype.on = function(t, e) {
            this.listeners.get(t) || this.listeners.set(t, []), this.listeners.get(t).push(e)
        }, t
    }();
    e.EventBus = i
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(0),
        a = n(4),
        l = n(1),
        c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.model = a.gameCore.ReplayControllerModel, e.cssColors = s.gs.ucolors.cssColors, e.replayUiMessage = "", e.elementIdToReplayOperationDict = {
                    bt_flash: 2,
                    bt_record: 1,
                    bt_stop: 3,
                    bt_play: 4,
                    bt_reel_prev: 5,
                    bt_reel_next: 6,
                    bt_cont: 7,
                    bt_tick_prev: 8,
                    bt_tick_next: 9,
                    bt_reel_delete: 10,
                    bt_speed_down: 12,
                    bt_speed_up: 13
                }, e
            }
            return i(e, t), e.prototype.mounted = function() {
                var t = this;
                this.model.SetStateChangedProc(function(e) {
                    t.update()
                }), this.update(), this.model.captureNotificationProc = function() {
                    t.replayUiMessage = "captured!", setTimeout(function() {
                        t.replayUiMessage = "", t.update()
                    }, 500)
                }
            }, e.prototype.onTrackKnobMouseDown = function(t) {
                var e = this;
                if (!s.gs.gstates.isBenchmarkMode) {
                    var n = this.refs.gauge_rail.getBoundingClientRect().left,
                        i = function(t) {
                            var i = t.pageX - n,
                                o = l.Nums.VMap(i, 5, 295, 0, 1, !0);
                            return e.model.SeekReplayPosTo(o, !0), e.update(), !1
                        },
                        o = function(t) {
                            window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", o)
                        };
                    window.addEventListener("mousemove", i), window.addEventListener("mouseup", o), i(t), t.stopPropagation()
                }
            }, e.prototype.onButtonClick = function(t) {
                if (!s.gs.gstates.isBenchmarkMode) {
                    var e = t.currentTarget.id,
                        n = this.elementIdToReplayOperationDict[e];
                    n && this.model.HandleReplayOperation(n), t.stopPropagation()
                }
            }, e = o([r.template('\n<replay-control-bar>\n\t<style>\n\t\t.replay_bar_area{\n\t\t\twidth: 660px;\n\t\t\theight: 45px;\n\t\t\tmargin: 0 auto;\n\t\t\tborder-radius:4px;\n\t\t\tmargin-top: 6px;\n\t\t\tposition: relative;\n\t\t\tpadding: 4px;\n\t\t\tpadding-left: 10px;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t.ui_row > div{\n\t\t\tfloat: left;\n\t\t\tmargin: 0 2px;\n\t\t}\n\n\t\t.ui_row2 > *{\n\t\t\tfloat: left;\n\t\t\tmargin: 0 2px;\n\t\t}\n\n\t\t.replay_main_button_group{\n\t\t\tmargin-top: 2px !important;\n\t\t}\n\t\t\n\t\t.control_button_back{\n\t\t\tborder-radius: 5px;\n\t\t}\n\n\t\t.control_button{\n\t\t\twidth: 34px;\n\t\t\theight: 34px;\n\t\t\tborder: solid 1px #FFF;\n\t\t\tborder-radius: 3px;\n\t\t\tline-height: 34px;\n\t\t\tfont-family: \'IconFont1\';\n\t\t\tfont-size: 15px;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.middle_button{\n\t\t\twidth: 32px;\n\t\t\theight: 28px;\n\t\t\tline-height: 28px;\n\t\t\tfont-size: 12px;\n\t\t\tborder-radius: 2px;\n\t\t}\n\n\t\t.reel_info_area{\n\t\t\tline-height: 28px;\n\t\t\tfont-size: 14px;\n\t\t\tmargin: 0 0px !important;\n\t\t\twidth: 50px;\n\t\t}\n\n\t\t.small_button{\n\t\t\twidth: 22px;\n\t\t\theight: 18px;\n\t\t\tline-height: 18px;\n\t\t\tfont-size: 11px;\n\t\t\tborder-radius: 1px;\n\t\t}\n\n\t\t.control_button:hover{\n\t\t\tbackground-color: rgba(255,255,255,0.2);\n\t\t}\n\n\t\t.is_on{\n\t\t\tbackground-color: #00F;\n\t\t} \n\n\t\t.gauge_area{\n\t\t\twidth: 300px;\n\t\t\theight: 38px;\n\t\t\tposition: relative;\n\t\t\tmargin: 0 8px !important;\n\t\t}\n\n\t\t.gauge_box{\n\t\t\tposition: absolute;\n\t\t\tbottom: 0;\n\t\t}\n\n\t\t.gauge{\n\t\t\twidth: 300px;\n\t\t\theight: 16px;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.gauge_rail{\n\t\t\twidth: 300px;\n\t\t\theight: 10px;\n\t\t\tborder: solid 1px #FFF;\n\t\t\tposition: absolute;\n\t\t\ttop: 3px;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.gauge_knob{\n\t\t\twidth: 10px;\n\t\t\theight: 16px;\n\t\t\tborder: solid 1px #FFF;\n\t\t\tposition: absolute;\n\t\t\tleft: 0px;\n\t\t\tbackground-color: #08F;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.time_position_text{\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\ttop: 0;\n\t\t\tfont-size: 14px;\n\t\t}\n\n\t\t.replay_speed_text{\n\t\t\twidth: 35px;\n\t\t\tfont-size: 14px;\n\t\t}\n\n\t\t.part_reel_control{\n\t\t\tmargin-top: 5px !important;\n\t\t}\n\n\t\t.second_bar_area{\n\t\t\twidth: 660px;\n\t\t\tmargin: 0 auto;\n\t\t\tposition: relative;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t.replay_ui_message{\n\t\t\tfont-family: CustomFont1;\n\t\t\tfont-size: 24px;\n\t\t\ttext-align: left;\n\t\t}\n\t</style>\n\t<div>\n\t\t<div class="replay_bar_area ui_row" style="background-color: {cssColors.clReplayBar}; color: {cssColors.clUiSymbols}">\n\t\t\t<div class="replay_main_button_group ui_row">\n\t\t\t\t<div class="control_button" id="bt_flash" onmousedown={onButtonClick}\n\t\t\t\t\tstyle="border-color: {cssColors.clUiSymbols}; border-color: {cssColors.clUiSymbols}"">&#xe9b5</div>\n\n\t\t\t\t<div class="control_button_back"\n\t\t\t\t\tstyle="background-color: {model.isRecording ? cssColors.clUiButtonActive : \'\'}">\n\t\t\t\t\t<div class="control_button" id="bt_record" onmousedown={onButtonClick} style="border-color: {cssColors.clUiSymbols}">\n\t\t\t\t\t\t\t&#xe914\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div style="width: 2px; height: 1px" />\n\n\t\t\t\t<div class="control_button" id="bt_stop" onmousedown={onButtonClick} \n\t\t\t\t\tstyle="border-color: {cssColors.clUiSymbols}">&#xea1e</div>\n\n\t\t\t\t<div class="control_button_back"\n\t\t\t\t\tstyle="background-color: {model.isPlayback ? cssColors.clUiButtonActive : \'\'}">\n\t\t\t\t\t<div class="control_button" id="bt_play" onmousedown={onButtonClick} style="border-color: {cssColors.clUiSymbols}">\n\t\t\t\t\t\t&#xe902\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class="gauge_area">\n\n\t\t\t\t<div class="ui_row2" style="margin-left:-2px">\n\t\t\t\t\t<div class="control_button small_button" id="bt_tick_prev" onmousedown={onButtonClick} \n\t\t\t\t\t\tstyle="border-color: {cssColors.clUiSymbols}">&#xf177</div>\n\t\t\t\t\t<div class="control_button small_button" id="bt_tick_next" onmousedown={onButtonClick} \n\t\t\t\t\t\tstyle="border-color: {cssColors.clUiSymbols}">&#xf178</div>\n\n\t\t\t\t\t<div style="width:4px; height: 1px" />\n\n\t\t\t\t\t<div class="control_button small_button" id="bt_speed_down" onmousedown={onButtonClick} \n\t\t\t\t\t\tstyle="border-color: {cssColors.clUiSymbols}">&#xf068</div>\n\t\t\t\t\t<div class="control_button small_button" id="bt_speed_up" onmousedown={onButtonClick} \n\t\t\t\t\t\tstyle="border-color: {cssColors.clUiSymbols}">&#xf067</div>\n\t\t\t\t\t<div class="replay_speed_text">\n\t\t\t\t\t\tx{model.replaySpeedRate.toFixed(2)}\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div style="width:4px; height: 1px" />\n\n\t\t\t\t\t<div class="{control_button_back: true, is_on: model.isAutoShiftToNextReel}">\n\t\t\t\t\t\t<div class="control_button small_button" id="bt_cont" onmousedown={onButtonClick} style="border-color: {cssColors.clUiSymbols}">\n\t\t\t\t\t\t\t&#xe90a\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="time_position_text">\n\t\t\t\t\t{model.trackPosText}\n\t\t\t\t</div>\n\n\t\t\t\t<div class="gauge_box">\n\t\t\t\t\t<div class="gauge" onmousedown={onTrackKnobMouseDown}>\n\t\t\t\t\t\t<div class="gauge_rail" id="gauge_rail" ref="gauge_rail" style="border-color: {cssColors.clUiSymbols}"/>\n\t\t\t\t\t\t<div class="gauge_knob" id="gauge_knob" \n\t\t\t\t\t\t\tstyle="left: {~~(model.trackPos * 290) + \'px\'}; background-color: {cssColors.clReplayBar}; border-color: {cssColors.clUiSymbols}"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="part_reel_control">\n\t\t\t\t<div class="ui_row">\n\t\t\t\t\t<div class="control_button middle_button" id="bt_reel_prev" onmousedown={onButtonClick}\n\t\t\t\t\t\tstyle="border-color: {cssColors.clUiSymbols}">&#xe912</div>\n\n\t\t\t\t\t<div class="control_button middle_button" id="bt_reel_next" onmousedown={onButtonClick}\n\t\t\t\t\t\tstyle="border-color: {cssColors.clUiSymbols}">&#xe913</div>\n\n\t\t\t\t\t<div class="reel_info_area">\n\t\t\t\t\t\t<div>{model.numReels > 0 ? model.curReelIndex + 1 : 0}/{model.numReels}</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="control_button middle_button" id="bt_reel_delete" onmousedown={onButtonClick}\n\t\t\t\t\t\tstyle="border-color: {cssColors.clUiSymbols}">&#xe9ad</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="second_bar_area">\n\t\t\t<div class="replay_ui_message">\n\t\t\t\t{replayUiMessage}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</replay-control-bar>\n')], e)
        }(r.Element);
    e.ReplayControlBarTag = c
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(0),
        a = n(4),
        l = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            i(e, t), e.prototype.mounted = function() {
                this.root.innerHTML = this.opts.content
            }, e = o([r.template("<raw><div></div></raw>")], e)
        }(r.Element), function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.model = a.gameCore.gameHudModel, e.perfModel = a.gameCore.perfModel, e.gconfig = s.gs.gconfig, e.uconfig = s.gs.uconfig, e.gstates = s.gs.gstates, e.cssColors = s.gs.ucolors.cssColors, e.chatInputBoxVisible = !1, e.hasNewPrivateMessage = !1, e.prevChatMessagesCount = -1, e
            }
            return i(e, t), e.prototype.mounted = function() {
                var t = this,
                    e = this.refs.lb_chart_outer,
                    n = this.refs.lb_chart_canvas;
                n.width = 160, n.height = 160, e.style.width = "160px", e.style.height = "160px";
                var i = this.refs.map_outer,
                    o = this.refs.map_canvas;
                o.width = 210, o.height = 210, i.style.width = "210px", i.style.height = "210px", window.addEventListener("keydown", function(e) {
                    if (!e.repeat) {
                        if (13 == e.keyCode) {
                            var n = t.refs.chat_input_text_box;
                            if (t.chatInputBoxVisible) {
                                var i = n.value;
                                n.value = "", t.chatInputBoxVisible = !1, i ? a.gameCore.SendChatMessage(i) : t.update()
                            } else {
                                var o = document.activeElement;
                                if (o && "INPUT" == o.tagName) return void o.blur();
                                t.chatInputBoxVisible = !0, t.update(), n.focus()
                            }
                        }
                    }
                }), setInterval(this.UpdationProc.bind(this), 17);
                var r = this.refs.overlay_base,
                    s = this.refs.chat_view,
                    l = this.refs.chat_input_box,
                    c = !1;

                function h(t) {
                    s.style.userSelect = t ? "text" : "none"
                }
                s.onmouseenter = function() {
                    c = !0
                }, s.onmouseleave = function() {
                    c = !1
                };
                var d = !1;
                l.onmouseenter = function() {
                    d = !0
                }, l.onmouseleave = function() {
                    d = !1
                }, r.onmousedown = function() {
                    c && h(!0)
                }, r.onmouseup = function() {
                    c || d || (window.getSelection().removeAllRanges(), h(!1))
                }
            }, e.prototype.UpdationProc = function() {
                this.model.isHudUpdated && (this.model.isHudUpdated = !1, this.update(), this.model.chatMessages.length != this.prevChatMessagesCount && (this.prevChatMessagesCount = this.model.chatMessages.length, this.scrollChatViewToEnd()))
            }, e.prototype.scrollChatViewToEnd = function() {
                var t = this.refs.chat_view;
                t.scrollTop = t.scrollHeight
            }, e = o([r.template('\n<game-overlay>\n\t<style>\n\n\t\t.overlay_base{\n\t\t\t_user-select: none;\n\t\t}\n\n\t\t.game_control_overlay{\n\t\t\t_user-select: none;\n\t\t}\n\n\t\t.chat_view{\n\t\t\twidth: 210px;\n\t\t\theight: 250px;\n\t\t\tbackground-color: rgba(255, 255, 255, 0.3);\n\t\t\tborder-radius: 4px;\n\t\t\tposition: absolute;\n\t\t\ttop: 70px;\n\t\t\tleft: 10px;\n\t\t\toverflow-y: scroll;\n\t\t\toverflow-x: none;\n\t\t\tfont-size: 14px;\n\t\t\tresize: both;\n\t\t\tpadding: 3px;\n\t\t\tword-wrap: break-word;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t.chat_view::-webkit-scrollbar{\n\t\t\twidth: 8px;\n\t\t\t/*background: rgba(224,224,224, 0.5);*/\n\t\t}\n\n\t\t.chat_view::-webkit-scrollbar-thumb{\n\t\t\tbackground-color: rgba(128,128,128,0.5);\n\t\t}\n\n\t\t.chat_view::-webkit-scrollbar-corner {\n\t\t\tbackground-color: none;\n\t\t}\n\n\t\t.chat_view::-webkit-resizer {\n\t\t\tbackground-color: rgba(64,64,64,0.5);\n\t\t}\n\n\t\t.message_time_stamp{\n\t\t\tcolor: #AAA;\n\t\t\tfont-size: 13px;\n\t\t}\n\n\t\t.message_sender_name{\n\t\t\tcolor: #FF0;\n\t\t}\n\n\t\t.bottom_area{\n\t\t\twidth: 100%;\n\t\t\tposition: absolute;\n\t\t\tbottom: 0;\n\t\t}\n\t\t.chat_input_area{\n\t\t\twidth: 360px;\n\t\t\theight: 40px;\n\t\t\tbackground-color: rgba(200, 200, 200, 0.5);\n\t\t\tborder-radius: 4px;\n\t\t\tmargin: 0 auto 50px;\n\t\t}\n\n\t\t#chat_input_text_box{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground-color: none;\n\t\t\tborder: none;\n\t\t\tfont-size: 16px;\n\t\t\tpadding-left: 6px;\n\t\t}\n\n\t\t#chat_input_text_box:focus{\n\t\t\toutline: 0;\n\t\t}\n\n\t\t.server_client_status_area{\n\t\t\tposition: absolute;\n\t\t\tleft: 10px;\n\t\t\tbottom: 6px;\n\t\t\tfont-size: 14px;\n\t\t}\n\t\t\n\t\t#server_user_num_text{\n\t\t\tposition: absolute;\n\t\t\ttop: 6px;\n\t\t\tleft: 60px;\n\t\t\tfont-size: 15px;\n\t\t}\n\n\t\t.self_state_info{\n\t\t\tposition: absolute;\n\t\t\ttop: 40px;\n\t\t\tleft: 10px;\n\t\t\tfont-size: 22px;\n\t\t\tfont-family: CustomFont1;\n\t\t}\n\n\t\t.self_state_info > div{\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-right: 10px;\n\t\t}\n\n\t\t#self_score_text{\n\n\t\t}\n\n\t\t#server_display_message{\n\t\t\tposition: absolute;\n\t\t\ttop: 50px;\n\t\t\twidth: 100%;\n\t\t\tfont-size: 15px;\n\t\t\ttext-align: center;\n\t\t\tcolor: #FF0;\n\t\t\tfont-size: 32px;\n\t\t}\n\n\t\t.benchmark_mode_message_outer{\n\t\t\tposition: absolute;\n\t\t\ttop: 70px;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.benchmark_mode_message{\n\t\t\tmargin: 0 auto;\n\t\t\twidth: 600px;\n\t\t\tfont-size: 15px;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 32px;\n\t\t\tcolor: #0F0;\n\t\t\tfont-family: CustomFont1;\n\t\t\tbackground-color: rgba(0, 0, 0, 0.7);\n\t\t\tpadding: 5px;\n\t\t}\n\t\t\n\t\t.leaderboard_outer{\n\t\t\tposition: absolute;\n\t\t\ttop: 10px;\n\t\t\tright: 10px;\n\t\t}\n\n\t\t.leaderboard_inner{\n\t\t\twidth: 210px;\n\t\t\tpadding: 8px;\n\t\t\tborder-radius: 4px;\n\t\t}\n\n\t\t.lb_header{\n\t\t\tfont-family: \'CustomFont1\';\n\t\t\tfont-size: 22px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.lb_header_large{\n\t\t\tfont-size: 26px;\n\t\t}\n\n\t\t.lb_detail{\n\t\t}\n\n\t\t.lb_entry{\n\t\t\tfont-family: CustomFont1, Meiryo, Arial;\n\t\t\tfont-size: 15px;\n\t\t\theight: 20px;\n\t\t\toverflow: hidden;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t#lb_chart_outer{\n\t\t\tmargin: 5px auto 0;\n\t\t}\n\n\t\t#lb_chart_canvas{\n\t\t\topacity: 0.8;\n\t\t}\n\n\t\t#map_outer{\n\t\t\tposition: absolute;\n\t\t\tright: 10px;\n\t\t\tbottom: 10px;\n\t\t}\n\n\t\t#map_canvas{\n\t\t\t_background-color: rgba(0, 0, 0, 0.3);\n\t\t}\n\n\t\thr{\n\t\t\theight: 8px;\n\t\t\tborder: none;\n\t\t}\n\n\t\t.spec_target_info{\n\t\t\tposition: absolute;\n\t\t\ttop: 60px;\n\t\t\twidth: 100%;\n\t\t\tfont-size: 22px;\n\t\t\ttext-align: center;\n\t\t\tfont-family: CustomFont1, Meiryo;\n\t\t}\n\t</style>\n\t<div class=\'overlay_base\' ref=\'overlay_base\'>\n\t\t<div id="server_user_num_text" ref="server_user_num_text">\n\t\t\t{model.serverUserNumText}\n\t\t</div>\n\n\t\t<div class="self_state_info">\n\t\t\t<div>score: {(model.selfScore * 0.001).toFixed(1)}k</div>\n\t\t\t<div>max: {(model.maxScore * 0.001).toFixed(1)}k</div>\n\t\t\t<div>{model.splitNum}/16</div>\n\t\t</div>\n\n\t\t<div id="self_score_text" ref="self_score_text">\n\n\t\t</div>\n\n\t\t<div id="server_display_message" ref="server_display_message">\n\t\t\t{model.serverDisplayMessageText}\n\t\t</div>\n\n\t\t<div class="spec_target_info" show={model.specTargetName != null}>\n\t\t\t{model.specTargetName} -- {(model.specTargetScore/1000).toFixed(1)}k\n\t\t</div>\n\n\t\t<div class="benchmark_mode_message_outer" show={gstates.isBenchmarkMode}>\n\t\t\t<div class="benchmark_mode_message" >\n\t\t\t\tbenchmark mode (score: {perfModel.numCellsRendered})\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<div class="server_client_status_area">\n\t\t\t<div>\n\t\t\t\t<div each={val, key in perfModel.debugObj}>\n\t\t\t\t\t{key} : {val}\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr />\n\n\t\t\t<div show={uconfig.ShowClientStatus}>\n\t\t\t\t<div>\n\t\t\t\t\tfps : {perfModel.avgFps.toFixed(1)}\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\tnodes : {perfModel.numCellsRendered}\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\trender : {perfModel.avgDuration.toFixed(2)}ms\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\tload : {(perfModel.avgRate * 100).toFixed(2)}%\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\tbuffer : {(perfModel.replayBufferBytes / 1000000).toFixed(2)}MB\n\t\t\t\t</div>\n\n\t\t\t\t<hr />\n\t\t\t</div>\n\n\t\t\t<div id="server_status_text" ref="server_status_text" show={uconfig.ShowServerStatus}>\n\t\t\t\t<div each={text in model.serverStatusText}>\n\t\t\t\t\t{text}\n\t\t\t\t</div>\n\n\t\t\t\t<hr />\n\t\t\t</div>\n\n\t\t\t<div id="latency_text" ref="latency_text">\n\t\t\t\tlatency: {model.latencyMs}ms\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="leaderboard_outer" show={uconfig.ShowLeaderboard}>\n\t\t\t<div class="leaderboard_inner" style="background: {cssColors.clLeaderboardBack};">\n\t\t\t\t<div class="lb_header lb_header_large" style="color: {cssColors.clLeaderboardHeader};">{model.leaderboardHeaderText}</div>\n\t\t\t\t<div class="lb_detail">\n\t\t\t\t\t<div each={model.leaderboardEntries} class="lb_entry" style="color: {color};" show={active}>\n\t\t\t\t\t\t{index + 1}.{text} -- {score}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div style="height: 8px"></div>\n\n\t\t\t<div class="leaderboard_inner" style="background-color: {cssColors.clLeaderboardBack};"\n\t\t\t\tshow={gconfig.ShowTeamRanking}>\n\t\t\t\t<div class="lb_header" style="color: {cssColors.clLeaderboardHeader};">Team Ranking</div>\n\t\t\t\t<div class="lb_detail">\n\t\t\t\t\t<div each={model.teamRankingEntries} class="lb_entry" style="color: {color};" show={active}>\n\t\t\t\t\t\t{index + 1}.{text} -- {score}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id="lb_chart_outer" ref="lb_chart_outer">\n\t\t\t\t\t<canvas id="lb_chart_canvas" ref="lb_chart_canvas"></canvas>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id="map_outer" ref="map_outer" \n\t\t\tstyle="background-color: {cssColors.clMapBackground}" show={uconfig.ShowMap}>\n\t\t\t<canvas id="map_canvas" ref="map_canvas"></canvas>\n\t\t</div>\n\n\t\t<div id="game_control_overlay" class=\'game_control_overlay\' ref=\'game_control_overlay\'/>\n\n\t\t<div class="chat_view" id="chat_view" ref="chat_view"\n\t\t\tstyle="background-color: {cssColors.clChatBackground}" show={uconfig.ShowChatBox}>\n\t\t\t<div each={model.chatMessages}>\n\t\t\t\t<span class="message_time_stamp" style="color: {cssColors.clChatTimeString}">\n\t\t\t\t\t{timeStamp} \n\t\t\t\t</span>\n\t\t\t\t<span style="color: {cssColors.clChatSenderName}">\n\t\t\t\t\t{senderName}:\n\t\t\t\t</span>\n\t\t\t\t<span style="color: {cssColors.clChatMessage}">\n\t\t\t\t\t{message}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class="bottom_area">\n\t\t\t<div class="chat_input_area" show={chatInputBoxVisible} ref="chat_input_box">\n\t\t\t\t<input type="text" id="chat_input_text_box" ref="chat_input_text_box"/>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</game-overlay>\n')], e)
        }(r.Element));
    e.GameOverlayTag = l
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(0),
        a = n(4),
        l = n(3),
        c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.gconfig = s.gs.gconfig, e.userEntry = a.gameCore.userEntryMan, e.uconfig = s.gs.uconfig, e.cssColors = s.gs.ucolors.cssColors, e.appConfig = l.AppConfigurator.instance, e
            }
            return i(e, t), Object.defineProperty(e.prototype, "isDualUi", {
                get: function() {
                    return s.gs.gconfig.ShowDualSkinInputUi
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.mounted = function() {
                this.userEntry.skinChangedProc = this.update.bind(this), this.uconfig.RegisterChangedProc("HidePartyCode", this.update.bind(this))
            }, e.prototype.inputText = function(t) {
                this.userEntry.SetProp(t.target.name, t.target.value)
            }, e.prototype.onArrowButton = function(t) {
                var e = "arrow_left" == t.target.id ? -1 : 1;
                a.gameCore.userEntryMan.ShiftIndex(e)
            }, e.prototype.onBenchButton = function() {
                a.gameCore.ToggleBenchMarkMode()
            }, e = o([r.template('\n<left-config-panel>\n\t<style>\n\t\t.left_config_panel_root{\n\t\t\tpadding: 5px 10px;\n\t\t\theight: 100%;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.left_input_ui_outer{\n\t\t\twidth: 168px;\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t\n\t\t.bottom_box{\n\t\t\tposition: absolute;\n\t\t\tleft: 15px;\n\t\t\tbottom: 5px;\n\t\t}\n\n\t\t.side_ad_area{\n\t\t\twidth: 200px;\n\t\t\theight: 200px;\n\t\t\tbackground-color: white;\n\t\t\tmargin: 10px 0;\n\t\t}\n\n\t\t.skin_preview_box{\n\t\t\tposition: relative;\n\t\t\twidth: 100px;\n\t\t\theight: 100px;\n\t\t\tmargin: 10px auto;\n\t\t}\n\t\n\t\t.skin_cell{\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground-size: cover;\n\t\t\tbackground-position: center center;\n\t\t\tborder-radius: 50%;\n\t\t}\n\n\t\t.code_text_box_outer{\n\t\t\twidth: 100px;\n\t\t\tmargin: 0 auto;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.code_cover{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground-color: #666;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tline-height: 36px;\n\t\t\tpadding-left: 6px;\n\t\t}\n\n\t\t#ui_text_code{\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.arrows{\n\t\t\tfont-family: \'IconFont1\';\n\t\t\t_margin: 0 15px;\n\t\t\tmargin-top: 30px;\n\t\t\tfont-size: 28px;\n\t\t\tcursor: pointer;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t.arrow_left{\n\t\t\tfloat: left;\n\t\t}\n\n\t\t.arrow_right{\n\t\t\tfloat: right;\n\t\t}\n\n\t\t.bench_button{\n\t\t\tfont-family: IconFont1;\n\t\t\twidth: 44px;\n\t\t\theight: 36px;\n\t\t\tline-height: 36px;\n\t\t\tfont-size: 28px;\n\t\t\tborder-radius: 4px;\n\t\t\ttext-align: center;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.version_str{\n\t\t\tfont-family: CustomFont1;\n\t\t\tfont-size: 22px;\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t\tmargin-left: 30px;\n\t\t\tmargin-bottom: 12px;\n\t\t}\n\n\t\ta{\n\t\t\tcolor: white;\n\t\t}\n\t\ta:visited{\n\t\t\tcolor: white;\n\t\t}\n\n\t\t.lbar_notes{\n\t\t\tfont-size: 12px;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\n\t\t.linkbox{\n\t\t\tbackground-color: #000;\n\t\t\tpadding: 8px;\n\t\t\tfont-size: 14px;\n\t\t\twidth: 180px;\n\t\t\tmargin: 0 auto;\n\t\t\tmargin-top: 12px;\n\t\t\tmargin-left: -8px;\n\t\t}\n\n\t\t.linkbox img{\n\t\t\twidth: 100%;\n\t\t}\n\n\t</style>\n\t<div class="left_config_panel_root">\n\n\t\t<div style="height:20px" show={!isDualUi} />\n\n\t\t<div class="left_input_ui_outer">\n\n\t\t\t<div class="arrows arrow_left" id="arrow_left" onmousedown={onArrowButton}>\n\t\t\t\tâ—€\n\t\t\t</div>\n\n\t\t\t<div class="arrows arrow_right" id="arrow_right" onmousedown={onArrowButton}>\n\t\t\t\tâ–¶\n\t\t\t</div>\n\n\t\t\t<div class="skin_preview_box">\n\t\t\t\t<div class="skin_cell" style="background-image: url(\'gr/checker2.png\')" />\n\t\t\t\t<div class="skin_cell" style="background-image: url({userEntry.curInfo.skinUrl})" />\n\t\t\t</div>\n\n\t\t\t<div class="clear_both" />\n\n\t\t\t<div class="skin_preview_box" show={isDualUi}>\n\t\t\t\t<div class="skin_cell" style="background-image: url(\'gr/checker2.png\')" />\n\t\t\t\t<div class="skin_cell" style="background-image: url({userEntry.curInfo.skinUrl})" />\n\t\t\t</div>\n\n\t\t\t<div class="code_text_box_outer" show={gconfig.ShowPartyCodeInputUi}>\n\t\t\t\t<input type="text"  class="ui_common ui_text_box"  \n\t\t\t\t\tid="ui_text_code" name="code" placeholder="code" value="{userEntry.curInfo.code}" oninput={inputText}>\n\t\t\t\t<div class="code_cover" show={uconfig.HidePartyCode}>\n\t\t\t\t\t&#x1F512;\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div show={appConfig.targetSite == \'ix\'}>\n\t\t\t\t<div style="height: 20px" />\n\t\t\t\t<div>\n\t\t\t\t\t<a href="http://ixagar.net/classic">old version</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\'linkbox\'>\n\t\t\t\t\t<a href="https://cellsbox.io" target=\'_blank\'>\n\t\t\t\t\t\t<img src=\'https://cellsbox.io/gr/cellsbox_logo_narrow.png\' />\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t(external site)\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="bottom_box">\n\n\t\t\t<div class=\'lbar_notes\'>\n\t\t\t\t<div if={appConfig.isJapanese}>\n\t\t\t\t\tnote: ã‚¹ã‚­ãƒ³ãŒã‚¨ãƒ©ãƒ¼ã§è¡¨ç¤ºã•ã‚Œãªã„å ´åˆã€imgurã‚’ä½¿ã£ã¦ãã ã•ã„ã€‚ã¾ãŸã€ã‚¹ã‚­ãƒ³ã®ç¸¦æ¨ªã®ãƒ”ã‚¯ã‚»ãƒ«æ•°ã‚’1000x1000ä»¥ä¸‹ã«ã—ã¦ãã ã•ã„ã€‚gyazoã®ç”»åƒã¯éžå¯¾å¿œã«ãªã‚Šã¾ã—ãŸã€‚\n\t\t\t\t</div>\n\t\t\t\t<div if={!appConfig.isJapanese}>\n\t\t\t\t\tnote: please use imgur if your skin is not shown by error. Also it noted that the pixel size of skins should be less than 1000x1000.\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="bench_button" style="background-color: {cssColors.clMainButtons}; color: {cssColors.clUiSymbols}"\n\t\t\t\tonclick={onBenchButton}>\n\t\t\t\t&#xe90f;\n\t\t\t</div>\n\n\t\t\t<div class="version_str">\n\t\t\t\tLWGA-1.1\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</left-config-panel>\n')], e)
        }(r.Element);
    e.LeftConfigPanelTag = c
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(0),
        a = n(4),
        l = n(3),
        c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.uconfig = s.gs.uconfig, e.userEntry = a.gameCore.userEntryMan, e.cssColors = s.gs.ucolors.cssColors, e.appConfig = l.AppConfigurator.instance, e
            }
            return i(e, t), Object.defineProperty(e.prototype, "isDualUi", {
                get: function() {
                    return s.gs.gconfig.ShowDualSkinInputUi
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.mounted = function() {
                this.userEntry.indexChangedProc = this.update.bind(this)
            }, e.prototype.inputText = function(t) {
                this.userEntry.SetProp(t.target.name, t.target.value)
            }, e.prototype.startPlay = function() {
                a.gameCore.StartPlay()
            }, e.prototype.startSpectate = function() {
                a.gameCore.StartSpectate()
            }, e = o([r.template('\n<user-entry-panel>\n\t<style>\n\t\t.main_ui_area{\n\t\t\twidth: 300px;\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t.ui_main_button{\n\t\t\t_background-color: #F08;\n\t\t\t_color: #FFF;\n\t\t\tborder-radius: 4px;\n\t\t\tborder: none;\n\t\t\tmargin: 2px 0;\n\t\t\tposition: relative;\n\t\t\tcursor: pointer;\n\n\t\t\twidth: 147px;\n\t\t\tfloat: left;\n\t\t\tvertical-align: middle;\n\t\t}\n\n\t\t.ui_main_button > .button_symbol{\n\t\t\tfont-family: \'IconFont1\';\n\t\t\ttext-align: center;\n\t\t\tfont-size: 24px;\n\t\t\tline-height: 38px;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.ui_main_button > .button_text{\n\t\t\tfont-family: \'CustomFont1\';\n\t\t\tfont-size: 22px;\n\t\t\tdisplay: inline-block;\n\t\t\tline-height: 38px;\n\t\t\tvertical-align: top;\n\t\t}\n\n\t\t.ui_text_box{\n\t\t\tmargin: 2px 0;\n\t\t}\n\t\t\n\t\t.ui_full_width{\n\t\t\twidth: 300px;\n\t\t}\n\t\t\n\t\t.ui_team_input{\n\t\t\twidth: 90px;\n\t\t\tfloat: left;\n\t\t}\n\n\t\t.ui_name_input{\n\t\t\twidth: 206px;\n\t\t}\n\n\t\t.player_entry_info_area{\n\t\t}\n\n\t\t.main_buttons_area{\n\t\t\tpadding: 4px 0;\n\t\t}\n\n\t\t.center_ad_area{\n\t\t\twidth: 300px;\n\t\t\theight: 250px;\n\t\t\tmargin: 0 auto;\n\t\t\tbackground-color: white;\n\t\t\tmargin-top: 15px;\n\t\t}\n\n\t</style>\n\t<div class="panel_tab_content">\n\t\t<div>\n\t\t\t<div style=\'height: 25px\' />\n\n\t\t\t<div class="main_ui_area">\n\t\t\t\t<div class="player_entry_info_area">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type="text" class="ui_common ui_text_box ui_team_input"\n\t\t\t\t\t\t\tref="ui_text_team" name="team" placeholder="team" value="{userEntry.curInfo.team}" oninput={inputText}>\t\n\t\t\t\t\t\t<div style="width:4px; height: 1px; float: left" />\n\t\t\t\t\t\t<input type="text" class="ui_common ui_text_box ui_name_input" ref="ui_text_name"\n\t\t\t\t\t\t\tname="name" placeholder="name" value={userEntry.curInfo.name} oninput={inputText}>\t\n\t\t\t\t\t\t<div class="clear_both"></div>\n\t\t\n\t\t\t\t\t\t<input type="text" class="ui_common ui_text_box ui_full_width" ref="ui_text_skin_url"\n\t\t\t\t\t\t\tname="skinUrl" placeholder="skin url" value={userEntry.curInfo.skinUrl} onchange={inputText}>\t\n\t\t\t\t\t\t<input type="text" class="ui_common ui_text_box ui_full_width" ref="ui_text_skin_url2"\n\t\t\t\t\t\t\tname="skinUrl2" placeholder="skin url 2" value={userEntry.curInfo.skinUrl2} onchange={inputText}\n\t\t\t\t\t\t\tshow={isDualUi}>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="clear_both"></div>\n\n\t\t\t\t<div class="main_buttons_area">\n\t\t\t\t\t<button class="ui_common ui_main_button ui_half_width" id="ui_button_play" onclick={startPlay}\n\t\t\t\t\t\tstyle="background-color: {cssColors.clMainButtons}; color:{cssColors.clUiSymbols}" >\n\t\t\t\t\t\t<div class="button_symbol">&#xe9a5;</div>\n\t\t\t\t\t\t<div class="button_text">PLAY</div>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div style="width:6px; height: 1px; float: left" />\n\t\t\t\t\t<button class="ui_common ui_main_button ui_half_width" id="ui_button_spec" onclick={startSpectate}\n\t\t\t\t\t\tstyle="background-color: {cssColors.clMainButtons}; color:{cssColors.clUiSymbols}"">\n\t\t\t\t\t\t<div class="button_symbol">&#xe985;</div>\n\t\t\t\t\t\t<div class="button_text">SPEC</div>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class="clear_both"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="center_ad_area" ref="center_ad_area" id="center_ad_area">\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</user-entry-panel>\n')], e)
        }(r.Element);
    e.UserEntryPanelTag = c
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(4),
        a = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.model = s.gameCore.serverListModel, e
            }
            return i(e, t), e.prototype.mounted = function() {
                this.model.Notify = this.update.bind(this)
            }, e.prototype.onServerEntryClicked = function(t) {
                this.model.ConnectToServer(t.item.info)
            }, e = o([r.template("\n<server-list-root>\n\t<style>\n\t\tul, li{\n\t\t\tlist-style:none;\n\t\t}\n\t\t\n\t\t.base{\n\t\t\twidth: 210px;\n\t\t\theight: 470px;\n\t\t\toverflow-y: scroll;\n\t\t\toverflow-x: hidden;\n\t\t\tmargin: 10px auto;\n\t\t}\n\t\t\n\t\t.inner{\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\tpadding: 6px;\n\t\t\toverflow: hidden;\n\t\t}\n\t\t\n\t\t.card0{\n\t\t\tborder: solid 2px #F60;\n\t\t\tbackground-color: #F7A;\n\t\t\tborder-color: #F39;\n\t\t\twidth: 190px;\n\t\t\theight: 62px;\n\t\t\tmargin-bottom: 4px;\n\t\t\tposition: relative;\n\t\t\tcolor: #FFF;\n\t\t\tfont-family: arial;\n\t\t}\n\n\t\t.card_selected{\n\t\t\tbackground-color: #F06;\n\t\t\tborder-color: #D04;\n\t\t}\n\t\t\n\t\t.cover{\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.cover:hover{\n\t\t\tbackground-color: rgba(255, 0, 128, 0.2);\n\t\t}\n\t\t\n\t\t.serverName{\n\t\t\tfont-size: 26px;\n\t\t\tline-height: 26px;\n\t\t}\n\n\t\t.infoPart{\n\t\t\tfont-size: 18px;\n\t\t\toverflow: none;\n\t\t}\n\n\t\t.info_region{\n\t\t\tfloat: left;\n\t\t\twidth: 100px;\n\t\t}\n\t\t\n\t\t.info_users{\n\t\t\tfloat: right;\n\t\t}\n\t</style>\n\n\t<div class=\"base\">\n\t\t<ul>\n\t\t\t<li each = {info in model.serverInfos} >\n\t\t\t\t<div class= {card0: true, card_selected: info && info.address == model.currentServerUri } \n\t\t\t\t\tonclick= {onServerEntryClicked}>\n\t\t\t\t\t<div class='inner'>\n\t\t\t\t\t\t<div class='serverName'>\n\t\t\t\t\t\t\t{info.modName}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='infoPart'>\n\t\t\t\t\t\t\t<div class='info_region'>\n\t\t\t\t\t\t\t\t{info.region}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='info_users'>\n\t\t\t\t\t\t\t{info.numClients} / {info.numMaxClients}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='clear_both'></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='cover'></div>\n\t\t\t</li>\n\t\t</ul>\n\t<div />\n</server-list-root>\n")], e)
        }(r.Element);
    e.ServerListRootTag = a
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(4),
        a = n(3),
        l = n(0),
        c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.uconfig = l.gs.uconfig, e.cssColors = l.gs.ucolors.cssColors, e.siteTitle = a.AppConfigurator.instance.siteTitleString, e.appConfig = a.AppConfigurator.instance, e.selectedTabName = "home", e
            }
            return i(e, t), e.prototype.selectTab = function(t) {
                this.selectedTabName = t
            }, e.prototype.isActive = function(t) {
                return t == this.selectedTabName
            }, e.prototype.mounted = function() {
                l.gs.uconfig.RegisterChangedProc("panelBackImageUri", this.update.bind(this)), l.gs.uconfig.RegisterChangedProc("panelBackImageAlpha", this.update.bind(this)), s.gameCore.gameHudModel.serverInstructionProc = this.setServerInstructionText.bind(this)
            }, e.prototype.setServerInstructionText = function(t) {
                this.refs.server_instruction_box.innerHTML = t
            }, e = o([r.template('\n<main-panel>\n\t<style>\n\n\t\t.parea{\n\t\t\tborder: solid 1px rgba(255,255,255,1);\n\t\t\tmargin: 4px;\n\t\t\tborder-radius: 4px;\n\t\t}\n\n\t\t.main_panel_root{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t}\n\n\t\t.main_floating_panel{\n\t\t\twidth: 864px;\n\t\t\theight: 698px;\n\t\t\toverflow: hidden;\n\t\t\tposition: absolute;\n\t\t\ttop: 45px;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tmargin: auto;\n\t\t}\n\n\t\t.site_header_area{\n\t\t\theight: 180px;\n\t\t}\n\n\t\t.site_title_text{\n\t\t\tfont-size: 44px;\n\t\t\tfont-family: CustomFont2;\n\t\t}\n\t\t\n\t\t.left_side_panel{\n\t\t\tfloat: left;\n\t\t\theight: 500px;\n\t\t\twidth: 240px;\t\n\t\t}\n\t\t\n\t\t.right_side_panel{\n\t\t\tfloat: right;\n\t\t\twidth: 240px;\n\t\t\theight: 500px;\n\t\t}\n\n\t\t.panel_center_content{\n\t\t\twidth: 360px;\n\t\t\theight: 500px;\n\t\t\tpadding: 12px 20px;\n\t\t\tfloat: left;\n\t\t}\n\n\t\t.whole_area{\n\t\t\theight: 688px;\n\t\t}\n\n\t\t.site_header_area{\n\t\t\tpadding-left: 8px;\n\t\t}\n\n\t\t.server_instruction_box{\n\t\t\tuser-select: text;\n\t\t}\n\n\t\t.main_panel_back{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\n\t\t.panel_back_box {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\t_-webkit-clip-path: url(#svgPath);\n\t\t\t_clip-path: url(#svgPath);\n\t\t}\n\t\t\n\t\t.panel_back_img_layer{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground-size: cover;\n\t\t}\n\n\t\t.panel_front_box{\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\n\t\t.panel_front_box_inner{\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\n\t\t.panel_front_box_content{\n\t\t}\n\n\t\t.panel_mask_svg{\n\t\t\theight: 0;\n\t\t}\n\n\t\t.ui_common{\n\t\t\theight: 38px;\n\t\t\tfont-size: 18px;\n\t\t\tfont-family: ãƒ¡ã‚¤ãƒªã‚ª, Arial;\n\t\t}\n\n\t\t.ui_text_box{\n\t\t\tpadding-left: 4px;\n\t\t}\n\n\t\t.panel_navi_box{\n\t\t\tposition: absolute;\n\t\t\ttop: 6px;\n\t\t\tright: 10px;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t.navi{\n\n\t\t}\n\t\t\n\t\t.navi > div{\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 70px;\n\t\t\theight: 38px;\n\t\t\tbackground-color: #08F;\n\t\t\tborder-radius: 3px;\n\t\t\tposition: relative;\n\t\t\tcursor: pointer;\n\t\t\tfont-family: \'IconFont1\';\n\t\t\ttext-align: center;\n\t\t\tfont-size: 28px;\n\t\t\tline-height: 38px;\n\t\t}\n\t\t\n\t\t.navi > div.selected{\n\t\t\tbackground-color: #04F;\n\t\t}\n\t</style>\n\t<div class="main_panel_root" style="color: {cssColors.clPanelForeground}">\n\t\t<div class="main_panel_back" style="background-color: {cssColors.clOverlayBack};" />\n\n\t\t<div class="main_floating_panel">\n\t\t\t<div class="panel_back_box" \n\t\t\t\tstyle="background-color: {cssColors.clMainPanelBack}; clip-path: url({isActive(\'home\') ? \'#svgPath\' : \'#svgPath2\'})">\n\t\t\t\t<div class="panel_back_img_layer" \n\t\t\t\t\tstyle="background-image: url(\'{uconfig.panelBackImageUri}\'); opacity: {uconfig.panelBackImageAlpha}">\n\t\t\t\t</div>\n\n\t\t\t\t<svg version="1.1" x="0px" y="0px" viewBox="0 0 864 690" class="panel_mask_svg">\n\t\t\t\t\t<clipPath id="svgPath">\n\t\t\t\t\t\t<rect x="5" y="5" width="855" height="179" rx="4" ry="4"/>\n\t\t\t\t\t\t<rect x="5" y="193" width="239" height="499" rx="4" ry="4"/>\n\t\t\t\t\t\t<rect x="253" y="193" width="359" height="499" rx="4" ry="4"/>\n\t\t\t\t\t\t<rect x="621" y="193" width="239" height="499" rx="4" ry="4"/>\n\t\t\t\t\t</clipPath>\n\n\t\t\t\t\t<clipPath id="svgPath2">\n\t\t\t\t\t\t<rect x="5" y="5" width="855" height="687" rx="4" ry="4"/>\n\t\t\t\t\t</clipPath>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\n\t\t\t<div class="panel_front_box">\n\t\t\t\t<div class="panel_front_box_inner">\n\t\t\t\t\t<div class="panel_front_box_content">\n\t\t\t\t\t\t<div show={isActive(\'home\')}>\n\t\t\t\t\t\t\t<div class="site_header_area parea" style="border-color: {cssColors.clPanelForeground}">\n\t\t\t\t\t\t\t\t<div class="site_title_text">{siteTitle}</div>\n\t\t\t\t\t\t\t\t<div class=\'server_instruction_box\' ref="server_instruction_box" />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="left_side_panel parea" style="border-color: {cssColors.clPanelForeground}">\n\t\t\t\t\t\t\t\t<left-config-panel />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="panel_center_content parea" style="border-color: {cssColors.clPanelForeground}">\n\t\t\t\t\t\t\t\t<user-entry-panel />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="right_side_panel parea" style="border-color: {cssColors.clPanelForeground}">\n\t\t\t\t\t\t\t\t<server-list-root if={appConfig.useIxTrackerServer} />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="clear_both" />\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div show={isActive(\'settings\')}>\n\t\t\t\t\t\t\t<div class="whole_area parea" style="border-color: {cssColors.clPanelForeground}">\n\t\t\t\t\t\t\t\t<main-config-panel />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div show={isActive(\'theme\')}>\n\t\t\t\t\t\t\t<div class="whole_area parea" style="border-color: {cssColors.clPanelForeground}">\n\t\t\t\t\t\t\t\t<color-config-panel />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="panel_navi_box">\n\t\t\t\t\t\t<div class="navi" style="color: {cssColors.clUiSymbols}">\n\t\t\t\t\t\t\t<div onclick={selectTab.bind(this, \'home\')} style="background-color: {cssColors.clMenuButtons}">&#xe900</div>\n\t\t\t\t\t\t\t<div onclick={selectTab.bind(this, \'settings\')} style="background-color: {cssColors.clMenuButtons}">&#xe994</div>\n\t\t\t\t\t\t\t<div onclick={selectTab.bind(this, \'theme\')} style="background-color: {cssColors.clMenuButtons}">&#xe90d</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</main-panel>\n')], e)
        }(r.Element);
    e.MainPanelTag = c
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(4),
        a = n(3),
        l = n(0),
        c = n(14),
        h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.uconfig = l.gs.uconfig, e.userEntry = s.gameCore.userEntryMan, e.cssColors = l.gs.ucolors.cssColors, e.appConfig = a.AppConfigurator.instance, e.gstates = l.gs.gstates, e.usupport = l.gs.usupport, e.utexts = l.gs.utexts, e.configHub = c.ConfigHub.instance, e.isJapanese = a.AppConfigurator.instance.isJapanese, e
            }
            return i(e, t), e.prototype.optionChanged = function(t, e) {
                t.item.m.SetValue(e)
            }, e.prototype.checkChanged = function(t) {
                this.optionChanged(t, t.target.checked)
            }, e.prototype.colorChanged = function(t) {
                return t.item.SetColor(t.target.value), this.appRoot.update(), !1
            }, e.prototype.mounted = function() {
                s.gameCore.gameHudModel.configUpdatedProc = this.update.bind(this)
            }, Object.defineProperty(e.prototype, "appRoot", {
                get: function() {
                    return this.parent.parent
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getHotKeyFromKeyEvent = function(t, e) {
                if (void 0 === e && (e = !1), t.repated) return -2;
                var n = t.which;
                if (16 == n || 17 == n || 18 == n || 229 == n) return -2;
                if (8 == n || 46 == n) return -1;
                var i = t.keyCode;
                t.ctrlKey && (i += l.ModificationKeyCode.Ctrl), t.shiftKey && (i += l.ModificationKeyCode.Shift), t.altKey && (i += l.ModificationKeyCode.Alt);
                var o = this.configHub;
                return (e ? o.controlEntries.every(function(t) {
                    return t.hotKey != i
                }) && o.gameDisplayEntries.every(function(t) {
                    return t.toggleHotKey != i
                }) : o.controlEntries.every(function(t) {
                    return t.hotKey != i
                }) && o.cellDisplayEntries.every(function(t) {
                    return t.toggleHotKey != i && t.holdHotKey != i
                }) && o.gameDisplayEntries.every(function(t) {
                    return t.toggleHotKey != i
                })) ? i : -2
            }, e.prototype.setToggleHotKey_Cells = function(t) {
                var e = this.getHotKeyFromKeyEvent(t, !0); - 2 != e && t.item.m.SetToggleHotKey(e);
                return t.preventDefault(), !1
            }, e.prototype.setHoldHotKey_Cells = function(t) {
                var e = this.getHotKeyFromKeyEvent(t, !0); - 2 != e && t.item.m.SetHoldHotKey(e);
                return t.preventDefault(), !1
            }, e.prototype.setToggleHotKey_Game = function(t) {
                var e = this.getHotKeyFromKeyEvent(t); - 2 != e && t.item.m.SetToggleHotKey(e);
                return t.preventDefault(), !1
            }, e.prototype.setControlHotKey = function(t) {
                var e = this.getHotKeyFromKeyEvent(t); - 2 != e && t.item.m.SetHotKey(e);
                return t.preventDefault(), !1
            }, e.prototype.onConfigTextInput = function(t) {
                l.gs.uconfig.SetValue(t.target.name, t.target.value)
            }, e.prototype.onConfigCheckChanged = function(t) {
                l.gs.uconfig.SetValue(t.target.name, t.target.checked)
            }, e.prototype.rangeInputChanged = function(t) {
                l.gs.uconfig.SetValue(t.target.name, t.target.value)
            }, e.prototype.onResetButtonCliecked = function() {
                l.gs.uconfig.RecoverDefaultConfig()
            }, e = o([r.template("\n<main-config-panel>\n\t<style>\n\n\t\t.panel_content_box{\n\t\t\theight: 632px;\n\t\t\toverflow-y: scroll;\n\t\t\tpadding: 10px;\n\t\t\tmargin-right: 4px;\n\t\t}\n\n\t\t.header_box{\n\t\t\theight: 48px;\n\t\t\tfont-size: 24px;\n\t\t\tpadding-left: 12px;\n\t\t\tline-height: 48px;\n\t\t}\n\n\t\t.content_column{\n\t\t\twidth: 380px;\n\t\t\tfloat: left;\n\t\t\tmargin: 0 8px;\n\t\t}\n\n\t\t.box_frame{\n\t\t\tborder: solid 1px;\n\t\t\tborder-radius: 5px;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\n\t\t.box_header{\n\t\t\twidth: 100%;\n\t\t\tpadding-top: 2px;\n\t\t\tpadding-left: 5px;\n\t\t\tborder-radius: 3px 3px 0 0;\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\t.box_content{\n\t\t\tpadding: 5px 10px;\n\t\t}\n\n\n\t\t.td_text{\n\t\t\twhite-space: nowrap;\n\t\t\toverflow: hidden;\n\t\t}\n\n\t\t.range_input{\n\t\t\twidth: 140px;\n\t\t\tvertical-align: top;\n\t\t}\n\n\t\ttd.centered{\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.ui_config{\n\t\t\theight: 28px;\n\t\t}\n\t\t\n\t\t.ui_checkbox{\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tvertical-align: middle;\n\t\t}\n\t\t\n\t\t.ui_hotkey_input{\n\t\t\twidth: 50px;\n\t\t\tborder: solid 1px #888;\n\t\t}\n\n\t\t.range_table td{\n\t\t\tpadding-right: 4px;\n\t\t}\n\n\t\t.reset_button{\n\t\t\tfloat: right;\n\t\t\theight: 28px;\n\t\t\tpadding: 2px;\n\t\t\tfont-family: Meiryo, Arial;\n\t\t\tcursor: pointer;\n\t\t}\n\t</style>\n\t<div class=\"main_config_panel_root\">\n\t\t<div class=\"header_box\">\n\t\t\t<span>{utexts.hdrConfiguration}</span>\n\t\t</div>\n\t\t<div class=\"panel_content_box\">\n\t\t\t<div class='content_column'>\n\t\t\t\t<div class='box_frame' style='border-color: {cssColors.clPanelForeground}'>\n\t\t\t\t\t<div class='box_header' style='background-color: {cssColors.clPanelForeground}; color:{cssColors.clPanelHeader}'>\n\t\t\t\t\tã€€<span style='font-family: IConFont1'>&#xe994</span><span>{utexts.hdrCellDisplay}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='box_content'>\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan='2'></td>\n\t\t\t\t\t\t\t\t<td class='centered'>key1</td>\n\t\t\t\t\t\t\t\t<td class='centered'>key2</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr each={m in configHub.cellDisplayEntries}>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"ui_config ui_checkbox\" checked={m.value} onchange={checkChanged}> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class='td_text' style='width:220px'>{m.text}</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"ui_config ui_hotkey_input\" value={m.toggleHotKeyText} onkeydown={setToggleHotKey_Cells} />\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"ui_config ui_hotkey_input\" value={m.holdHotKeyText} onkeydown={setHoldHotKey_Cells} />\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<div style='height:5px' />\n\t\t\t\t\t\t<div if={isJapanese}>\n\t\t\t\t\t\t\t<div>key1:ã‚­ãƒ¼ã‚’æŠ¼ã—ãŸã¨ãã«on/offã‚’åè»¢</div>\n\t\t\t\t\t\t\t<div>key2:ã‚­ãƒ¼ã‚’æŠ¼ã—ã¦ã„ã‚‹é–“on/offã‚’åè»¢</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div if={!isJapanese}>\n\t\t\t\t\t\t\t<div>key1:Option inverted when key press</div>\n\t\t\t\t\t\t\t<div>key2:Option inverted while key hold</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class='box_frame' style='border-color: {cssColors.clPanelForeground}'>\n\t\t\t\t\t<div class='box_header' style='background-color: {cssColors.clPanelForeground}; color:{cssColors.clPanelHeader}'>\n\t\t\t\t\tã€€<span style='font-family: IConFont1'>&#xe994</span><span>{utexts.hdrGameDisplay}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='box_content'>\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan='2'></td>\n\t\t\t\t\t\t\t\t<td if={false}>key1</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr each={m in configHub.gameDisplayEntries}>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"ui_config ui_checkbox\" checked={m.value} onchange={checkChanged}> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class='td_text'>{m.text}</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td if={false}>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"ui_config ui_hotkey_input\" value={m.toggleHotKeyText} onkeydown={setToggleHotKey_Game} />\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class='content_column'>\n\n\t\t\t\t<div class='box_frame' style='border-color: {cssColors.clPanelForeground}'>\n\t\t\t\t\t<div class='box_header' style='background-color: {cssColors.clPanelForeground}; color:{cssColors.clPanelHeader}'>\n\t\t\t\t\tã€€<span style='font-family: IConFont1'>&#xe994</span><span>{utexts.hdrBasicOperation}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='box_content'>\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr each={m in configHub.basicBehaviorEntries}>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"ui_config ui_checkbox\" checked={m.value} onchange={checkChanged}> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class='entry_text'>{m.text}</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t<table class='range_table'>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>{utexts.lbtInterpolationResponce}</td>\n\t\t\t\t\t\t\t\t<td><input type='range' class='range_input' min='0.0' max='1.0' step='0.25' name='InterpolationSpeed' value={uconfig.InterpolationSpeed} oninput={rangeInputChanged}/></td>\n\t\t\t\t\t\t\t\t<td style='width:60px'>{usupport.InterpolationSpeedText}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>{utexts.lbtMarkerOpacity}</td>\n\t\t\t\t\t\t\t\t<td><input type='range' class='range_input' min='0.0' max='1.0' step='0.1' name='MarkerAlpha' value={uconfig.MarkerAlpha} oninput={rangeInputChanged}/></td>\n\t\t\t\t\t\t\t\t<td>{uconfig.MarkerAlpha * 100 >> 0}%</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr if={true}>\n\t\t\t\t\t\t\t\t<td>{utexts.lbtRenderQuality}</td>\n\t\t\t\t\t\t\t\t<td><input type='range' class='range_input' min='0' max='2' step='1' name='RenderQuality' value={uconfig.RenderQuality} oninput={rangeInputChanged}/></td>\n\t\t\t\t\t\t\t\t<td>{usupport.RenderQualityText}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>{utexts.lbtCaptureDuration}</td>\n\t\t\t\t\t\t\t\t<td><input type='range' class='range_input' min='0' max='5' step='1' name='QuickCaptureTimeOption' value={uconfig.QuickCaptureTimeOption} oninput={rangeInputChanged}/></td>\n\t\t\t\t\t\t\t\t<td>{usupport.QuickCaptureTimeSec}{appConfig.isJapanese ? 'ç§’' : 'sec'}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>{utexts.lbtFrameRate}</td>\n\t\t\t\t\t\t\t\t<td><input type='range' class='range_input' min='0' max='4' step='1' name='FrameRateOption' value={uconfig.FrameRateOption} oninput={rangeInputChanged}/></td>\n\t\t\t\t\t\t\t\t<td>{usupport.TargetFrameRate}fps</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class='box_frame' style='border-color: {cssColors.clPanelForeground}'>\n\t\t\t\t\t<div class='box_header' style='background-color: {cssColors.clPanelForeground}; color:{cssColors.clPanelHeader}'>\n\t\t\t\t\tã€€<span style='font-family: IConFont1'>&#xe994</span><span>{utexts.hdrControl}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='box_content'>\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr each={m in configHub.controlEntries}>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class='td_text' style='width:220px'>\n\t\t\t\t\t\t\t\t\t\t{m.text}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"ui_config ui_hotkey_input\" value={m.hotKeyText} onkeydown={setControlHotKey} />\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<input type='button' class='reset_button' value='{utexts.lbtResetConfig}' onclick={onResetButtonCliecked} />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</main-config-panel>\n")], e)
        }(r.Element);
    e.MainConfigPanelTag = h
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(3),
        a = n(0),
        l = n(14),
        c = n(1),
        h = 260,
        d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.uconfig = a.gs.uconfig, e.cssColors = a.gs.ucolors.cssColors, e.appConfig = s.AppConfigurator.instance, e.utexts = a.gs.utexts, e.isJapanese = s.AppConfigurator.instance.isJapanese, e.model = l.ConfigHub.instance, e.editModel = new l.ColorEditModel, e.windowMouseHandlerProc = null, e.pickerEndX = h - 6, e
            }
            return i(e, t), e.prototype.mounted = function() {
                this.editModel.SetColor(this.model.curColorEntry.color), this.UpdateColorView(), window.addEventListener("mousemove", this.onWindowMouseMove.bind(this)), window.addEventListener("mouseup", this.onWindowMouseUp.bind(this))
            }, e.prototype.onCardSelected = function(t) {
                var e = t.currentTarget.value;
                this.model.selectColorCard(e), this.editModel.SetColor(this.model.curColorEntry.color)
            }, e.prototype.onCardSelected2 = function(t) {
                this.UpdateColorView()
            }, e.prototype.onMainCanvasClick = function() {}, e.prototype.onWindowMouseMove = function(t) {
                this.windowMouseHandlerProc && this.windowMouseHandlerProc(t)
            }, e.prototype.onWindowMouseUp = function() {
                this.windowMouseHandlerProc = null
            }, e.prototype.ReflectEditModelColorToModel = function() {
                this.model.curColorEntry.SetColor(this.editModel.color, !0), this.UpdateColorView(), this.update(), this.appRoot.update()
            }, e.prototype.removeFocusOnPage = function() {
                var t = document.activeElement;
                t && t.blur(), window.getSelection().removeAllRanges()
            }, e.prototype.onHueGaugeMouseDown = function(t) {
                var e = this,
                    n = t.target.getBoundingClientRect().left,
                    i = function(t) {
                        var i = t.pageX - n,
                            o = c.Nums.VMap(i, 0, e.pickerEndX, 0, .999, !0);
                        e.editModel.SetHue(o), e.ReflectEditModelColorToModel(), e.update()
                    };
                return i(t), this.windowMouseHandlerProc = i, t.preventDefault(), !1
            }, e.prototype.onMainGaugeMouseDown = function(t) {
                var e = this,
                    n = t.target.getBoundingClientRect(),
                    i = n.left,
                    o = n.top,
                    r = function(t) {
                        var n = t.pageX - i,
                            r = t.pageY - o,
                            s = c.Nums.VMap(n, 0, e.pickerEndX, 0, 1, !0),
                            a = c.Nums.VMap(r, 0, e.pickerEndX, 0, 1, !0);
                        e.editModel.SetSV(s, 1 - a), e.ReflectEditModelColorToModel()
                    };
                return r(t), this.windowMouseHandlerProc = r, t.preventDefault(), !1
            }, e.prototype.onAlphaGaugeMouseDown = function(t) {
                var e = this,
                    n = t.target.getBoundingClientRect().left,
                    i = function(t) {
                        var i = t.pageX - n,
                            o = c.Nums.VMap(i, 0, e.pickerEndX, 0, 1, !0);
                        e.editModel.SetAlpha(o), e.ReflectEditModelColorToModel()
                    };
                return i(t), this.windowMouseHandlerProc = i, t.preventDefault(), !1
            }, e.prototype.onColorTextInput = function(t) {
                var e = t.target.value;
                this.editModel.SetByHtmlColor(e), this.ReflectEditModelColorToModel()
            }, e.prototype.UpdateColorView = function() {
                this.drawAlphaCanvas(), this.drawMainCanvas();
                var t = this.pickerEndX;
                this.refs.knob_hue.style.left = this.editModel.hue * t + "px", this.refs.knob_alpha.style.left = this.editModel.alpha * t + "px", this.refs.knob_main.style.left = this.editModel.sat * t + "px", this.refs.knob_main.style.top = (1 - this.editModel.bri) * t + "px"
            }, e.prototype.drawMainCanvas = function() {
                var t = this.refs.picker_main_canvas,
                    e = t.width,
                    n = t.height,
                    i = t.getContext("2d");
                i.clearRect(0, 0, e, n);
                for (var o = 360 * this.editModel.hue, r = 0; r < n; r++) {
                    var s = i.createLinearGradient(0, 0, e, 0),
                        a = "hsl(" + o + ",0%," + c.Nums.VMap(r, 0, n, 100, 0) + "%)",
                        l = "hsl(" + o + ",100%," + c.Nums.VMap(r, 0, n, 50, 0) + "%)";
                    s.addColorStop(0, a), s.addColorStop(1, l), i.fillStyle = s, i.fillRect(0, r, e, 1)
                }
            }, e.prototype.drawAlphaCanvas = function() {
                var t = this.refs.picker_alpha_canvas,
                    e = t.width,
                    n = t.height,
                    i = t.getContext("2d");
                i.clearRect(0, 0, e, n), i.beginPath();
                var o = i.createLinearGradient(0, 0, e, 0),
                    r = this.model.curColorEntry.color,
                    s = r >> 16 & 255,
                    a = r >> 8 & 255,
                    l = 255 & r;
                o.addColorStop(0, "rgba(" + s + "," + a + "," + l + ",0.0)"), o.addColorStop(1, "rgba(" + s + "," + a + "," + l + ",1.0)"), i.fillStyle = o, i.rect(0, 0, e, n), i.fill()
            }, e.prototype.optionChanged = function(t, e) {
                t.item.SetValue(e)
            }, e.prototype.checkChanged = function(t) {
                this.optionChanged(t, t.target.checked)
            }, Object.defineProperty(e.prototype, "appRoot", {
                get: function() {
                    return this.parent.parent
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.onConfigTextInput = function(t) {
                a.gs.uconfig.SetValue(t.target.name, t.target.value)
            }, e.prototype.onConfigCheckChanged = function(t) {
                a.gs.uconfig.SetValue(t.target.name, t.target.checked)
            }, e = o([r.template("\n<color-config-panel>\n\t<style>\n\t\t.panel_content_box{\n\t\t\theight: 632px;\n\t\t\t_overflow-y: scroll;\n\t\t\t_padding: 0 10px;\n\t\t}\n\n\t\t.header_box{\n\t\t\theight: 48px;\n\t\t\tfont-size: 24px;\n\t\t\tpadding-left: 12px;\n\t\t\tline-height: 48px;\n\t\t}\n\n\t\t.panel_content_inner{\n\t\t\twidth: 580px;\n\t\t\tmargin: 0 auto;\n\t\t\tmargin-top: 50px;\n\t\t}\n\n\t\t.box_frame{\n\t\t\tborder: solid 1px;\n\t\t\tborder-radius: 5px;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\n\t\t.box_header{\n\t\t\twidth: 100%;\n\t\t\tpadding-top: 2px;\n\t\t\tpadding-left: 5px;\n\t\t\tborder-radius: 3px 3px 0 0;\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\t.box_content{\n\t\t\tpadding: 10px;\n\t\t}\n\n\t\t.ui_config{\n\t\t\theight: 28px;\n\t\t}\n\t\t\n\t\t.ui_checkbox{\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tvertical-align: middle;\n\t\t}\n\t\t\n\t\t.ui_color_text_input{\n\t\t\twidth: 100px;\n\t\t}\n\n\t\t.main_config_panel_root{\n\t\t}\n\n\t\t.color_edit_part{\n\t\t\theight: 320px;\n\t\t}\n\t\t.color_entries_outer{\n\t\t\tborder: solid 1px #AAA;\n\t\t\twidth: 260px;\n\t\t\theight: 100%;\n\t\t\toverflow-y: scroll;\n\t\t\tuser-select: none;\n\t\t\tcursor: default;\n\t\t\tfloat: left;\n\t\t}\n\n\t\t.color_entry_card{\n\t\t}\n\n\t\t.card_selected{\n\t\t\tbackground-color: #0BF;\n\t\t}\n\n\t\t.color_header{\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 215px;\n\t\t\twhite-space: nowrap;\n\t\t\toverflow: hidden;\n\t\t\tvertical-align: middle;\n\t\t\tpadding-left: 8px;\n\t\t}\n\n\t\t.color_cell{\n\t\t\twidth: 14px;\n\t\t\theight: 14px;\n\t\t\tdisplay: inline-block;\n\t\t\tborder: solid 1px #000;\n\t\t\tvertical-align: middle;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.color_cell > *{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t}\n\n\t\t.color_picker_outer{\n\t\t\twidth: 280px;\n\t\t\theight: 100%;\n\t\t\t_border: solid 1px #AAA;\n\t\t\tfloat: left;\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t.color_picker_inner{\n\t\t\tmargin: auto auto;\n\t\t\twidth: " + h + "px;\n\t\t\theight: " + (h + 60) + "px;\n\t\t}\n\n\t\t.color_text_input_outer{\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\n\t\tinput.color_text_input{\n\t\t\tborder: none;\n\t\t\twidth: 70px;\n\t\t\theight: 26px;\n\t\t\tpadding-left: 8px;\n\t\t}\n\n\t\t.gauge_box{\n\t\t\twidth: " + h + "px;\n\t\t\t_border: solid 1px #AAA;\n\t\t\tuser-select: none;\n\t\t\tposition: relative;\n\t\t\tcursor: default;\n\t\t}\n\n\t\t.gauge_box_I{\n\t\t\theight: 30px; \n\t\t}\n\n\t\t.gauge_box_L{\n\t\t\theight: " + h + "px;\n\t\t}\n\n\t\t.picker_main_canvas_outer{\n\t\t\t_border: solid 1px #AAA;\n\t\t\tuser-select: none;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.gauge_box > *{\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t}\n\n\t\t.bar_image{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\n\t\t.gauge_cover{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\n\t\t.knob{\n\t\t\tborder: solid 1px #000;\n\t\t\tposition: absolute;\n\t\t\tbackground-color: rgba(255, 255, 255, 1.0);\n\t\t}\n\n\t\t.knob_I{\n\t\t\twidth: 6px;\n\t\t\theight: 30px;\n\t\t}\n\n\t\t.knob_L{\n\t\t\twidth: 6px;\n\t\t\theight: 6px;\n\t\t}\n\n\t\t.config_box{}\n\t</style>\n\t<div class=\"main_config_panel_root\">\n\t\t<div class=\"header_box\">\n\t\t\t{utexts.hdrTheme}\n\t\t</div>\n\n\t\t<div class=\"panel_content_box\">\n\t\t\t<div class='panel_content_inner'>\n\n\t\t\t\t<div class='box_frame' style='border-color: {cssColors.clPanelForeground}'>\n\t\t\t\t\t<div class='box_header' style='background-color: {cssColors.clPanelForeground}; color:{cssColors.clPanelHeader}'>\n\t\t\t\t\tã€€<span style='font-family: IConFont1'>&#xe90d</span><span>{utexts.hdrColor}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='box_content' style='padding: 15px'>\n\n\t\t\t\t\t\t<div class='color_edit_part'>\n\t\t\t\t\t\t\t<div class='color_entries_outer' onmousedown={onCardSelected2}\n\t\t\t\t\t\t\t\tstyle='border-color: {cssColors.clPanelForeground}'>\n\t\t\t\t\t\t\t\t<virtual each={m in model.colorEntries}>\n\t\t\t\t\t\t\t\t\t<div class='color_entry_card' \n\t\t\t\t\t\t\t\t\t\tstyle='background: {m == model.curColorEntry ? cssColors.clUiButtonActive : \"none\"}'\n\t\t\t\t\t\t\t\t\t\tvalue={m.key} onmousedown={onCardSelected}>\n\t\t\t\t\t\t\t\t\t\t<div class='color_header'>\n\t\t\t\t\t\t\t\t\t\t\t{m.text}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class='color_cell'>\n\t\t\t\t\t\t\t\t\t\t\t<img src='gr/checker_cell.png' />\n\t\t\t\t\t\t\t\t\t\t\t<div style='background: {m.cssColor}' />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</virtual>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class='color_picker_outer'>\n\t\t\t\t\t\t\t\t<div class='color_text_input_outer' if={false}>\n\t\t\t\t\t\t\t\t\t<input class='color_text_input' value={model.curColorEntry.htmlColor} oninput={onColorTextInput} />\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class='color_picker_inner'>\n\t\t\t\t\t\t\t\t\t<div class='gauge_box gauge_box_I'>\n\t\t\t\t\t\t\t\t\t\t<img src='gr/huebar.png' class='bar_image' />\n\t\t\t\t\t\t\t\t\t\t<div class='knob knob_I' ref='knob_hue' />\n\t\t\t\t\t\t\t\t\t\t<div class='gauge_cover' onmousedown={onHueGaugeMouseDown} />\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class='gauge_box gauge_box_L'>\n\t\t\t\t\t\t\t\t\t\t<canvas width='" + h + "' height='" + h + "' ref='picker_main_canvas' onclick={onMainCanvasClick}/>\n\t\t\t\t\t\t\t\t\t\t<div class='knob knob_L' ref='knob_main' />\n\t\t\t\t\t\t\t\t\t\t<div class='gauge_cover' onmousedown={onMainGaugeMouseDown} />\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class='gauge_box gauge_box_I'>\n\t\t\t\t\t\t\t\t\t\t<img src='gr/checkbar.png' class='bar_image' />\n\t\t\t\t\t\t\t\t\t\t<canvas width='" + h + '\' height=\'30\' ref=\'picker_alpha_canvas\' />\n\t\t\t\t\t\t\t\t\t\t<div class=\'knob knob_I\' ref=\'knob_alpha\' />\n\t\t\t\t\t\t\t\t\t\t<div class=\'gauge_cover\' onmousedown={onAlphaGaugeMouseDown} />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\'clear_both\' />\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\'box_frame\' style=\'border-color: {cssColors.clPanelForeground}\'>\n\t\t\t\t\t<div class=\'box_header\' style=\'background-color: {cssColors.clPanelForeground}; color:{cssColors.clPanelHeader}\'>\n\t\t\t\t\tã€€<span style=\'font-family: IConFont1\'>&#xe90d</span><span>{utexts.hdrWallpaper}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\'box_content\'>\n\n\t\t\t\t\t\t<div class=\'config_box\'>\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{isJapanese ? \'ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰èƒŒæ™¯\' : \'Field\'}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<input type="text" class="ui_config" style="width:200px" \n\t\t\t\t\t\t\t\t\t\t\tname="fieldBackImageUri"\n\t\t\t\t\t\t\t\t\t\t\tvalue={uconfig.fieldBackImageUri} onchange={onConfigTextInput} />\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td style="font-family: Arial">\n\t\t\t\t\t\t\t\t\t\t&#x03B1;\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<input type="text" class="ui_config" style="width:30px" \n\t\t\t\t\t\t\t\t\t\t\tname="fieldBackImageAlpha"\n\t\t\t\t\t\t\t\t\t\t\tvalue={uconfig.fieldBackImageAlpha} oninput={onConfigTextInput} />\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\tL\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" class="ui_config ui_checkbox"\n\t\t\t\t\t\t\t\t\t\t\tname="fieldBackImageDrawingMode2"\n\t\t\t\t\t\t\t\t\t\t\tchecked="{uconfig.fieldBackImageDrawingMode2}" onchange={onConfigCheckChanged}/>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{isJapanese ? \'ãƒ‘ãƒãƒ«èƒŒæ™¯\' : \'Panel\'}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<input type="text" class="ui_config" style="width:200px" \n\t\t\t\t\t\t\t\t\t\t\tname="panelBackImageUri"\n\t\t\t\t\t\t\t\t\t\t\tvalue={uconfig.panelBackImageUri} oninput={onConfigTextInput} />\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td style="font-family: Arial">\n\t\t\t\t\t\t\t\t\t\t&#x03B1;\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<input type="text" class="ui_config" style="width:30px" \n\t\t\t\t\t\t\t\t\t\t\tname="panelBackImageAlpha"\n\t\t\t\t\t\t\t\t\t\t\tvalue={uconfig.panelBackImageAlpha} oninput={onConfigTextInput} />\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</color-config-panel>\n')], e)
        }(r.Element);
    e.ColorConfigPanelTag = d
}, function(t, e, n) {
    "use strict";
    var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(),
        o = this && this.__decorate || function(t, e, n, i) {
            var o, r = arguments.length,
                s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
            return r > 3 && s && Object.defineProperty(e, n, s), s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(5),
        s = n(13),
        a = n(0),
        l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.uconfig = a.gs.uconfig, e.skinMan = s.SkinImageManager.instance, e
            }
            return i(e, t), e.prototype.mounted = function() {
                this.skinMan.bus.on("render", this.update.bind(this)), window.ondragstart = function() {
                    return !1
                }
            }, e.prototype.onCellClick = function(t) {
                var e = t.item.uri,
                    n = t.item.allowed;
                this.skinMan.setImageAvailability(e, !n)
            }, e.prototype.onButton = function(t) {
                var e = t.target.dataset.sig;
                "acceptNewSkins" == e && this.uconfig.SetAcceptNewSkins(!0), "declineNewSkins" == e && this.uconfig.SetAcceptNewSkins(!1), "acceptAll" == e && this.skinMan.setImageAvailabilityAll(!0), "declineAll" == e && this.skinMan.setImageAvailabilityAll(!1)
            }, e = o([r.template("\n<skin-filter-panel>\n\t<style>\n\t\t.skin_filter_panel_root{\n\t\t\twidth: 400px;\n\t\t\theight: 530px;\n\t\t\tbackground-color: #F0F6FF;\n\t\t\tposition: absolute;\n\t\t\ttop: 34px;\n\t\t\tright: 6px;\n\t\t\tborder: solid 1px #44A;\n\t\t\tborder-radius: 2px;\n\t\t\tcolor: #448;\n\t\t\tpadding: 8px;\n\t\t\tfont-size: 16px;\n\t\t}\n\n\t\t.sf_skinlistbox_outer{\n\t\t\theight: 400px;\n\t\t\toverflow-y: scroll;\n\t\t\tborder: solid 1px #CCE;\n\t\t}\n\n\t\t.sf_skinlistbox{\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\talign-items: flex-start;\n\t\t}\n\n\t\t.sf_skinlistbox > div{\n\t\t\twidth: 60px;\n\t\t\theight: 60px;\n\t\t\tdisplay: flex;\n\t\t\tborder: solid 1px #CCE;\n\t\t\tposition: relative;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.sf_skinlistbox > div > *{\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t}\n\t\t.sf_skinlistbox > div img{\n\t\t\tmax-width: 100%;\n\t\t\tmax-height: 100%;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tmargin: auto;\n\t\t}\n\n\t\t.sf_skinlistbox > div > .cover{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground-color: rgba(0, 0, 0, 0.4);\n\t\t}\n\n\t\t.sf_img_block{\n\t\t\topacity: 0.2;\n\t\t}\n\n\t\t.sf_box{\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\n\t\t.sfbt{\n\t\t\tdisplay: inline-block;\n\t\t\tbackground-color: #FFF;\n\t\t\tcolor: #008;\n\t\t\tborder-radius: 2px;\n\t\t\tpadding: 0 4px;\n\t\t\tcursor: pointer;\n\t\t\tborder: solid 1px #008;\n\t\t}\n\n\t\t.sfbt_active{\n\t\t\tbackground-color: #0CF;\n\t\t}\n\t</style>\n\n\t<div class='skin_filter_panel_root'>\n\t\t<div class='sf_box'>\n\t\t\tã‚¹ã‚­ãƒ³ç”»åƒãƒ•ã‚£ãƒ«ã‚¿\n\t\t</div>\n\n\t\t<div class='sf_skinlistbox_outer sf_box'>\n\t\t\t<div class='sf_skinlistbox'>\n\t\t\t\t<div each={allowed, uri in skinMan.skins} onclick={onCellClick}>\n\t\t\t\t\t<img src={uri} />\n\t\t\t\t\t<div class='cover' show={!allowed}>\n\t\t\t\t\t\t<img src='gr/blocked.png' class='sf_img_block' />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class='sf_box'>\n\t\t\t<div class='sfbt' onclick={onButton} data-sig='acceptAll'>\n\t\t\t\tå…¨ã¦è¨±å¯\n\t\t\t</div>\n\n\t\t\t<div class='sfbt' onclick={onButton} data-sig='declineAll'>\n\t\t\t\tå…¨ã¦æ‹’å¦\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class='sf_box'>\n\t\t\tæ–°è¦ç”»åƒ:\n\n\t\t\t<div class={sfbt: true, sfbt_active: uconfig.acceptNewSkins} onclick={onButton} data-sig='acceptNewSkins'>\n\t\t\t\tè¨±å¯\n\t\t\t</div>\n\n\t\t\t<div class={sfbt: true, sfbt_active: !uconfig.acceptNewSkins} onclick={onButton} data-sig='declineNewSkins'>\n\t\t\t\tæ‹’å¦\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</skin-filter-panel>\n")], e)
        }(r.Element);
    e.SkinFilterPanelTag = l
}]);
//# sourceMappingURL=bundle.js.map
