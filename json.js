var skinName = 'Skin Name'
var skinIdentifier = 'com.example.skin'

var iphonePortraitAsset = 'portrait.png'
var ipadPortraitAsset = 'portrait-ipad.png'
var ipadRetinaPortraitAsset = 'portrait-ipad@2x.png'
var iphoneLandscapeAsset = 'landscape.png'
var iPhoneWidescreenLandscapeAsset = 'landscape@R4.png'
var ipadLandscapeAsset = 'landscape-ipad.png'
var ipadRetinaLandscapeAsset = 'landscape-ipad@2x.png'

var landscapeTranslucent = false
var debug = false // Draws boxes inside the emulator which isn't really needed since I'm building this

var skin = new Object()
	skin.name = skinName
	skin.identifier = skinIdentifier
	skin.debug = debug
	skin.portrait = new Object()
		skin.portrait.assets = new Object()
			skin.portrait.assets.iPhone = iphonePortraitAsset
			skin.portrait.assets.iPad = ipadPortraitAsset
			skin.portrait.assets.iPadRetina = ipadRetinaPortraitAsset
		skin.portrait.layouts = new Object()
			skin.portrait.layouts.iPhone = new Object()
				skin.portrait.layouts.iPhone.screen = new Object()
					skin.portrait.layouts.iPhone.screen.x = 0
					skin.portrait.layouts.iPhone.screen.y = 0
					skin.portrait.layouts.iPhone.screen.width = 0
					skin.portrait.layouts.iPhone.screen.height = 0
				skin.portrait.layouts.iPhone.a = new Object()
					skin.portrait.layouts.iPhone.a.x = 0
					skin.portrait.layouts.iPhone.a.y = 0
					skin.portrait.layouts.iPhone.a.width = 0
					skin.portrait.layouts.iPhone.a.height = 0
					skin.portrait.layouts.iPhone.a.extendedEdges = new Object()
						skin.portrait.layouts.iPhone.a.extendedEdges.top = 0
						skin.portrait.layouts.iPhone.a.extendedEdges.bottom = 0
						skin.portrait.layouts.iPhone.a.extendedEdges.left = 0
						skin.portrait.layouts.iPhone.a.extendedEdges.right = 0
				skin.portrait.layouts.iPhone.b = new Object()
					skin.portrait.layouts.iPhone.b.x = 0
					skin.portrait.layouts.iPhone.b.y = 0
					skin.portrait.layouts.iPhone.b.width = 0
					skin.portrait.layouts.iPhone.b.height = 0
					skin.portrait.layouts.iPhone.b.extendedEdges = new Object()
						skin.portrait.layouts.iPhone.b.extendedEdges.top = 0
						skin.portrait.layouts.iPhone.b.extendedEdges.bottom = 0
						skin.portrait.layouts.iPhone.b.extendedEdges.left = 0
						skin.portrait.layouts.iPhone.b.extendedEdges.right = 0
				skin.portrait.layouts.iPhone.start = new Object()
					skin.portrait.layouts.iPhone.start.x = 0
					skin.portrait.layouts.iPhone.start.y = 0
					skin.portrait.layouts.iPhone.start.width = 0
					skin.portrait.layouts.iPhone.start.height = 0
					skin.portrait.layouts.iPhone.start.extendedEdges = new Object()
						skin.portrait.layouts.iPhone.start.extendedEdges.top = 0
						skin.portrait.layouts.iPhone.start.extendedEdges.bottom = 0
						skin.portrait.layouts.iPhone.start.extendedEdges.left = 0
						skin.portrait.layouts.iPhone.start.extendedEdges.right = 0
				skin.portrait.layouts.iPhone.select = new Object()
					skin.portrait.layouts.iPhone.select.x = 0
					skin.portrait.layouts.iPhone.select.y = 0
					skin.portrait.layouts.iPhone.select.width = 0
					skin.portrait.layouts.iPhone.select.height = 0
					skin.portrait.layouts.iPhone.select.extendedEdges = new Object()
						skin.portrait.layouts.iPhone.select.extendedEdges.top = 0
						skin.portrait.layouts.iPhone.select.extendedEdges.bottom = 0
						skin.portrait.layouts.iPhone.select.extendedEdges.left = 0
						skin.portrait.layouts.iPhone.select.extendedEdges.right = 0
				skin.portrait.layouts.iPhone.l = new Object()
					skin.portrait.layouts.iPhone.l.x = 0
					skin.portrait.layouts.iPhone.l.y = 0
					skin.portrait.layouts.iPhone.l.width = 0
					skin.portrait.layouts.iPhone.l.height = 0
					skin.portrait.layouts.iPhone.l.extendedEdges = new Object()
						skin.portrait.layouts.iPhone.l.extendedEdges.top = 0
						skin.portrait.layouts.iPhone.l.extendedEdges.bottom = 0
						skin.portrait.layouts.iPhone.l.extendedEdges.left = 0
						skin.portrait.layouts.iPhone.l.extendedEdges.right = 0
				skin.portrait.layouts.iPhone.r = new Object()
					skin.portrait.layouts.iPhone.r.x = 0
					skin.portrait.layouts.iPhone.r.y = 0
					skin.portrait.layouts.iPhone.r.width = 0
					skin.portrait.layouts.iPhone.r.height = 0
					skin.portrait.layouts.iPhone.r.extendedEdges = new Object()
						skin.portrait.layouts.iPhone.r.extendedEdges.top = 0
						skin.portrait.layouts.iPhone.r.extendedEdges.bottom = 0
						skin.portrait.layouts.iPhone.r.extendedEdges.left = 0
						skin.portrait.layouts.iPhone.r.extendedEdges.right = 0
				skin.portrait.layouts.iPhone.menu = new Object()
					skin.portrait.layouts.iPhone.menu.x = 0
					skin.portrait.layouts.iPhone.menu.y = 0
					skin.portrait.layouts.iPhone.menu.width = 0
					skin.portrait.layouts.iPhone.menu.height = 0
					skin.portrait.layouts.iPhone.menu.extendedEdges = new Object()
						skin.portrait.layouts.iPhone.menu.extendedEdges.top = 0
						skin.portrait.layouts.iPhone.menu.extendedEdges.bottom = 0
						skin.portrait.layouts.iPhone.menu.extendedEdges.left = 0
						skin.portrait.layouts.iPhone.menu.extendedEdges.right = 0
				skin.portrait.layouts.iPhone.dpad = new Object()
					skin.portrait.layouts.iPhone.dpad.x = 0
					skin.portrait.layouts.iPhone.dpad.y = 0
					skin.portrait.layouts.iPhone.dpad.width = 0
					skin.portrait.layouts.iPhone.dpad.height = 0
					skin.portrait.layouts.iPhone.dpad.extendedEdges = new Object()
						skin.portrait.layouts.iPhone.dpad.extendedEdges.top = 0
						skin.portrait.layouts.iPhone.dpad.extendedEdges.bottom = 0
						skin.portrait.layouts.iPhone.dpad.extendedEdges.left = 0
						skin.portrait.layouts.iPhone.dpad.extendedEdges.right = 0
				skin.portrait.layouts.iPhone.extendedEdges = new Object()
					skin.portrait.layouts.iPhone.extendedEdges.top = 0
					skin.portrait.layouts.iPhone.extendedEdges.bottom = 0
					skin.portrait.layouts.iPhone.extendedEdges.left = 0
					skin.portrait.layouts.iPhone.extendedEdges.right = 0
			skin.portrait.layouts.iPad = new Object()
				skin.portrait.layouts.iPad.screen = new Object()
					skin.portrait.layouts.iPad.screen.x = 0
					skin.portrait.layouts.iPad.screen.y = 0
					skin.portrait.layouts.iPad.screen.width = 0
					skin.portrait.layouts.iPad.screen.height = 0
				skin.portrait.layouts.iPad.a = new Object()
					skin.portrait.layouts.iPad.a.x = 0
					skin.portrait.layouts.iPad.a.y = 0
					skin.portrait.layouts.iPad.a.width = 0
					skin.portrait.layouts.iPad.a.height = 0
					skin.portrait.layouts.iPad.a.extendedEdges = new Object()
						skin.portrait.layouts.iPad.a.extendedEdges.top = 0
						skin.portrait.layouts.iPad.a.extendedEdges.bottom = 0
						skin.portrait.layouts.iPad.a.extendedEdges.left = 0
						skin.portrait.layouts.iPad.a.extendedEdges.right = 0
				skin.portrait.layouts.iPad.b = new Object()
					skin.portrait.layouts.iPad.b.x = 0
					skin.portrait.layouts.iPad.b.y = 0
					skin.portrait.layouts.iPad.b.width = 0
					skin.portrait.layouts.iPad.b.height = 0
					skin.portrait.layouts.iPad.b.extendedEdges = new Object()
						skin.portrait.layouts.iPad.b.extendedEdges.top = 0
						skin.portrait.layouts.iPad.b.extendedEdges.bottom = 0
						skin.portrait.layouts.iPad.b.extendedEdges.left = 0
						skin.portrait.layouts.iPad.b.extendedEdges.right = 0
				skin.portrait.layouts.iPad.start = new Object()
					skin.portrait.layouts.iPad.start.x = 0
					skin.portrait.layouts.iPad.start.y = 0
					skin.portrait.layouts.iPad.start.width = 0
					skin.portrait.layouts.iPad.start.height = 0
					skin.portrait.layouts.iPad.start.extendedEdges = new Object()
						skin.portrait.layouts.iPad.start.extendedEdges.top = 0
						skin.portrait.layouts.iPad.start.extendedEdges.bottom = 0
						skin.portrait.layouts.iPad.start.extendedEdges.left = 0
						skin.portrait.layouts.iPad.start.extendedEdges.right = 0
				skin.portrait.layouts.iPad.select = new Object()
					skin.portrait.layouts.iPad.select.x = 0
					skin.portrait.layouts.iPad.select.y = 0
					skin.portrait.layouts.iPad.select.width = 0
					skin.portrait.layouts.iPad.select.height = 0
					skin.portrait.layouts.iPad.select.extendedEdges = new Object()
						skin.portrait.layouts.iPad.select.extendedEdges.top = 0
						skin.portrait.layouts.iPad.select.extendedEdges.bottom = 0
						skin.portrait.layouts.iPad.select.extendedEdges.left = 0
						skin.portrait.layouts.iPad.select.extendedEdges.right = 0
				skin.portrait.layouts.iPad.l = new Object()
					skin.portrait.layouts.iPad.l.x = 0
					skin.portrait.layouts.iPad.l.y = 0
					skin.portrait.layouts.iPad.l.width = 0
					skin.portrait.layouts.iPad.l.height = 0
					skin.portrait.layouts.iPad.l.extendedEdges = new Object()
						skin.portrait.layouts.iPad.l.extendedEdges.top = 0
						skin.portrait.layouts.iPad.l.extendedEdges.bottom = 0
						skin.portrait.layouts.iPad.l.extendedEdges.left = 0
						skin.portrait.layouts.iPad.l.extendedEdges.right = 0
				skin.portrait.layouts.iPad.r = new Object()
					skin.portrait.layouts.iPad.r.x = 0
					skin.portrait.layouts.iPad.r.y = 0
					skin.portrait.layouts.iPad.r.width = 0
					skin.portrait.layouts.iPad.r.height = 0
					skin.portrait.layouts.iPad.r.extendedEdges = new Object()
						skin.portrait.layouts.iPad.r.extendedEdges.top = 0
						skin.portrait.layouts.iPad.r.extendedEdges.bottom = 0
						skin.portrait.layouts.iPad.r.extendedEdges.left = 0
						skin.portrait.layouts.iPad.r.extendedEdges.right = 0
				skin.portrait.layouts.iPad.menu = new Object()
					skin.portrait.layouts.iPad.menu.x = 0
					skin.portrait.layouts.iPad.menu.y = 0
					skin.portrait.layouts.iPad.menu.width = 0
					skin.portrait.layouts.iPad.menu.height = 0
					skin.portrait.layouts.iPad.menu.extendedEdges = new Object()
						skin.portrait.layouts.iPad.menu.extendedEdges.top = 0
						skin.portrait.layouts.iPad.menu.extendedEdges.bottom = 0
						skin.portrait.layouts.iPad.menu.extendedEdges.left = 0
						skin.portrait.layouts.iPad.menu.extendedEdges.right = 0
				skin.portrait.layouts.iPad.dpad = new Object()
					skin.portrait.layouts.iPad.dpad.x = 0
					skin.portrait.layouts.iPad.dpad.y = 0
					skin.portrait.layouts.iPad.dpad.width = 0
					skin.portrait.layouts.iPad.dpad.height = 0
					skin.portrait.layouts.iPad.dpad.extendedEdges = new Object()
						skin.portrait.layouts.iPad.dpad.extendedEdges.top = 0
						skin.portrait.layouts.iPad.dpad.extendedEdges.bottom = 0
						skin.portrait.layouts.iPad.dpad.extendedEdges.left = 0
						skin.portrait.layouts.iPad.dpad.extendedEdges.right = 0
				skin.portrait.layouts.iPad.extendedEdges = new Object()
					skin.portrait.layouts.iPad.extendedEdges.top = 0
					skin.portrait.layouts.iPad.extendedEdges.bottom = 0
					skin.portrait.layouts.iPad.extendedEdges.left = 0
					skin.portrait.layouts.iPad.extendedEdges.right = 0
	skin.landscape = new Object()
		skin.landscape.translucent = landscapeTranslucent
		skin.landscape.assets = new Object()
			skin.landscape.assets.iPhone = iphoneLandscapeAsset
			skin.landscape.assets['iPhone Widescreen'] = iPhoneWidescreenLandscapeAsset
			skin.landscape.assets.iPad = ipadLandscapeAsset
			skin.landscape.assets.iPadRetina = ipadRetinaLandscapeAsset
		skin.landscape.layouts = new Object()
			skin.landscape.layouts.iPhone = new Object()
				skin.landscape.layouts.iPhone.screen = new Object()
					skin.landscape.layouts.iPhone.screen.x = 0
					skin.landscape.layouts.iPhone.screen.y = 0
					skin.landscape.layouts.iPhone.screen.width = 0
					skin.landscape.layouts.iPhone.screen.height = 0
				skin.landscape.layouts.iPhone.a = new Object()
					skin.landscape.layouts.iPhone.a.x = 0
					skin.landscape.layouts.iPhone.a.y = 0
					skin.landscape.layouts.iPhone.a.width = 0
					skin.landscape.layouts.iPhone.a.height = 0
					skin.landscape.layouts.iPhone.a.extendedEdges = new Object()
						skin.landscape.layouts.iPhone.a.extendedEdges.top = 0
						skin.landscape.layouts.iPhone.a.extendedEdges.bottom = 0
						skin.landscape.layouts.iPhone.a.extendedEdges.left = 0
						skin.landscape.layouts.iPhone.a.extendedEdges.right = 0
				skin.landscape.layouts.iPhone.b = new Object()
					skin.landscape.layouts.iPhone.b.x = 0
					skin.landscape.layouts.iPhone.b.y = 0
					skin.landscape.layouts.iPhone.b.width = 0
					skin.landscape.layouts.iPhone.b.height = 0
					skin.landscape.layouts.iPhone.b.extendedEdges = new Object()
						skin.landscape.layouts.iPhone.b.extendedEdges.top = 0
						skin.landscape.layouts.iPhone.b.extendedEdges.bottom = 0
						skin.landscape.layouts.iPhone.b.extendedEdges.left = 0
						skin.landscape.layouts.iPhone.b.extendedEdges.right = 0
				skin.landscape.layouts.iPhone.ab = new Object()
					skin.landscape.layouts.iPhone.ab.x = 0
					skin.landscape.layouts.iPhone.ab.y = 0
					skin.landscape.layouts.iPhone.ab.width = 0
					skin.landscape.layouts.iPhone.ab.height = 0
					skin.landscape.layouts.iPhone.ab.extendedEdges = new Object()
						skin.landscape.layouts.iPhone.ab.extendedEdges.top = 0
						skin.landscape.layouts.iPhone.ab.extendedEdges.bottom = 0
						skin.landscape.layouts.iPhone.ab.extendedEdges.left = 0
						skin.landscape.layouts.iPhone.ab.extendedEdges.right = 0
				skin.landscape.layouts.iPhone.start = new Object()
					skin.landscape.layouts.iPhone.start.x = 0
					skin.landscape.layouts.iPhone.start.y = 0
					skin.landscape.layouts.iPhone.start.width = 0
					skin.landscape.layouts.iPhone.start.height = 0
					skin.landscape.layouts.iPhone.start.extendedEdges = new Object()
						skin.landscape.layouts.iPhone.start.extendedEdges.top = 0
						skin.landscape.layouts.iPhone.start.extendedEdges.bottom = 0
						skin.landscape.layouts.iPhone.start.extendedEdges.left = 0
						skin.landscape.layouts.iPhone.start.extendedEdges.right = 0
				skin.landscape.layouts.iPhone.select = new Object()
					skin.landscape.layouts.iPhone.select.x = 0
					skin.landscape.layouts.iPhone.select.y = 0
					skin.landscape.layouts.iPhone.select.width = 0
					skin.landscape.layouts.iPhone.select.height = 0
					skin.landscape.layouts.iPhone.select.extendedEdges = new Object()
						skin.landscape.layouts.iPhone.select.extendedEdges.top = 0
						skin.landscape.layouts.iPhone.select.extendedEdges.bottom = 0
						skin.landscape.layouts.iPhone.select.extendedEdges.left = 0
						skin.landscape.layouts.iPhone.select.extendedEdges.right = 0
				skin.landscape.layouts.iPhone.l = new Object()
					skin.landscape.layouts.iPhone.l.x = 0
					skin.landscape.layouts.iPhone.l.y = 0
					skin.landscape.layouts.iPhone.l.width = 0
					skin.landscape.layouts.iPhone.l.height = 0
					skin.landscape.layouts.iPhone.l.extendedEdges = new Object()
						skin.landscape.layouts.iPhone.l.extendedEdges.top = 0
						skin.landscape.layouts.iPhone.l.extendedEdges.bottom = 0
						skin.landscape.layouts.iPhone.l.extendedEdges.left = 0
						skin.landscape.layouts.iPhone.l.extendedEdges.right = 0
				skin.landscape.layouts.iPhone.r = new Object()
					skin.landscape.layouts.iPhone.r.x = 0
					skin.landscape.layouts.iPhone.r.y = 0
					skin.landscape.layouts.iPhone.r.width = 0
					skin.landscape.layouts.iPhone.r.height = 0
					skin.landscape.layouts.iPhone.r.extendedEdges = new Object()
						skin.landscape.layouts.iPhone.r.extendedEdges.top = 0
						skin.landscape.layouts.iPhone.r.extendedEdges.bottom = 0
						skin.landscape.layouts.iPhone.r.extendedEdges.left = 0
						skin.landscape.layouts.iPhone.r.extendedEdges.right = 0
				skin.landscape.layouts.iPhone.menu = new Object()
					skin.landscape.layouts.iPhone.menu.x = 0
					skin.landscape.layouts.iPhone.menu.y = 0
					skin.landscape.layouts.iPhone.menu.width = 0
					skin.landscape.layouts.iPhone.menu.height = 0
					skin.landscape.layouts.iPhone.menu.extendedEdges = new Object()
						skin.landscape.layouts.iPhone.menu.extendedEdges.top = 0
						skin.landscape.layouts.iPhone.menu.extendedEdges.bottom = 0
						skin.landscape.layouts.iPhone.menu.extendedEdges.left = 0
						skin.landscape.layouts.iPhone.menu.extendedEdges.right = 0
				skin.landscape.layouts.iPhone.dpad = new Object()
					skin.landscape.layouts.iPhone.dpad.x = 0
					skin.landscape.layouts.iPhone.dpad.y = 0
					skin.landscape.layouts.iPhone.dpad.width = 0
					skin.landscape.layouts.iPhone.dpad.height = 0
					skin.landscape.layouts.iPhone.dpad.extendedEdges = new Object()
						skin.landscape.layouts.iPhone.dpad.extendedEdges.top = 0
						skin.landscape.layouts.iPhone.dpad.extendedEdges.bottom = 0
						skin.landscape.layouts.iPhone.dpad.extendedEdges.left = 0
						skin.landscape.layouts.iPhone.dpad.extendedEdges.right = 0
				skin.landscape.layouts.iPhone.extendedEdges = new Object()
					skin.landscape.layouts.iPhone.extendedEdges.top = 0
					skin.landscape.layouts.iPhone.extendedEdges.bottom = 0
					skin.landscape.layouts.iPhone.extendedEdges.left = 0
					skin.landscape.layouts.iPhone.extendedEdges.right = 0
			skin.landscape.layouts['iPhone Widescreen'] = new Object()
				skin.landscape.layouts['iPhone Widescreen'].screen = new Object()
					skin.landscape.layouts['iPhone Widescreen'].screen.x = 0
					skin.landscape.layouts['iPhone Widescreen'].screen.y = 0
					skin.landscape.layouts['iPhone Widescreen'].screen.width = 0
					skin.landscape.layouts['iPhone Widescreen'].screen.height = 0
				skin.landscape.layouts['iPhone Widescreen'].a = new Object()
					skin.landscape.layouts['iPhone Widescreen'].a.x = 0
					skin.landscape.layouts['iPhone Widescreen'].a.y = 0
					skin.landscape.layouts['iPhone Widescreen'].a.width = 0
					skin.landscape.layouts['iPhone Widescreen'].a.height = 0
					skin.landscape.layouts['iPhone Widescreen'].a.extendedEdges = new Object()
						skin.landscape.layouts['iPhone Widescreen'].a.extendedEdges.top = 0
						skin.landscape.layouts['iPhone Widescreen'].a.extendedEdges.bottom = 0
						skin.landscape.layouts['iPhone Widescreen'].a.extendedEdges.left = 0
						skin.landscape.layouts['iPhone Widescreen'].a.extendedEdges.right = 0
				skin.landscape.layouts['iPhone Widescreen'].b = new Object()
					skin.landscape.layouts['iPhone Widescreen'].b.x = 0
					skin.landscape.layouts['iPhone Widescreen'].b.y = 0
					skin.landscape.layouts['iPhone Widescreen'].b.width = 0
					skin.landscape.layouts['iPhone Widescreen'].b.height = 0
					skin.landscape.layouts['iPhone Widescreen'].b.extendedEdges = new Object()
						skin.landscape.layouts['iPhone Widescreen'].b.extendedEdges.top = 0
						skin.landscape.layouts['iPhone Widescreen'].b.extendedEdges.bottom = 0
						skin.landscape.layouts['iPhone Widescreen'].b.extendedEdges.left = 0
						skin.landscape.layouts['iPhone Widescreen'].b.extendedEdges.right = 0
				skin.landscape.layouts['iPhone Widescreen'].ab = new Object()
					skin.landscape.layouts['iPhone Widescreen'].ab.x = 0
					skin.landscape.layouts['iPhone Widescreen'].ab.y = 0
					skin.landscape.layouts['iPhone Widescreen'].ab.width = 0
					skin.landscape.layouts['iPhone Widescreen'].ab.height = 0
					skin.landscape.layouts['iPhone Widescreen'].ab.extendedEdges = new Object()
						skin.landscape.layouts['iPhone Widescreen'].ab.extendedEdges.top = 0
						skin.landscape.layouts['iPhone Widescreen'].ab.extendedEdges.bottom = 0
						skin.landscape.layouts['iPhone Widescreen'].ab.extendedEdges.left = 0
						skin.landscape.layouts['iPhone Widescreen'].ab.extendedEdges.right = 0
				skin.landscape.layouts['iPhone Widescreen'].start = new Object()
					skin.landscape.layouts['iPhone Widescreen'].start.x = 0
					skin.landscape.layouts['iPhone Widescreen'].start.y = 0
					skin.landscape.layouts['iPhone Widescreen'].start.width = 0
					skin.landscape.layouts['iPhone Widescreen'].start.height = 0
					skin.landscape.layouts['iPhone Widescreen'].start.extendedEdges = new Object()
						skin.landscape.layouts['iPhone Widescreen'].start.extendedEdges.top = 0
						skin.landscape.layouts['iPhone Widescreen'].start.extendedEdges.bottom = 0
						skin.landscape.layouts['iPhone Widescreen'].start.extendedEdges.left = 0
						skin.landscape.layouts['iPhone Widescreen'].start.extendedEdges.right = 0
				skin.landscape.layouts['iPhone Widescreen'].select = new Object()
					skin.landscape.layouts['iPhone Widescreen'].select.x = 0
					skin.landscape.layouts['iPhone Widescreen'].select.y = 0
					skin.landscape.layouts['iPhone Widescreen'].select.width = 0
					skin.landscape.layouts['iPhone Widescreen'].select.height = 0
					skin.landscape.layouts['iPhone Widescreen'].select.extendedEdges = new Object()
						skin.landscape.layouts['iPhone Widescreen'].select.extendedEdges.top = 0
						skin.landscape.layouts['iPhone Widescreen'].select.extendedEdges.bottom = 0
						skin.landscape.layouts['iPhone Widescreen'].select.extendedEdges.left = 0
						skin.landscape.layouts['iPhone Widescreen'].select.extendedEdges.right = 0
				skin.landscape.layouts['iPhone Widescreen'].l = new Object()
					skin.landscape.layouts['iPhone Widescreen'].l.x = 0
					skin.landscape.layouts['iPhone Widescreen'].l.y = 0
					skin.landscape.layouts['iPhone Widescreen'].l.width = 0
					skin.landscape.layouts['iPhone Widescreen'].l.height = 0
					skin.landscape.layouts['iPhone Widescreen'].l.extendedEdges = new Object()
						skin.landscape.layouts['iPhone Widescreen'].l.extendedEdges.top = 0
						skin.landscape.layouts['iPhone Widescreen'].l.extendedEdges.bottom = 0
						skin.landscape.layouts['iPhone Widescreen'].l.extendedEdges.left = 0
						skin.landscape.layouts['iPhone Widescreen'].l.extendedEdges.right = 0
				skin.landscape.layouts['iPhone Widescreen'].r = new Object()
					skin.landscape.layouts['iPhone Widescreen'].r.x = 0
					skin.landscape.layouts['iPhone Widescreen'].r.y = 0
					skin.landscape.layouts['iPhone Widescreen'].r.width = 0
					skin.landscape.layouts['iPhone Widescreen'].r.height = 0
					skin.landscape.layouts['iPhone Widescreen'].r.extendedEdges = new Object()
						skin.landscape.layouts['iPhone Widescreen'].r.extendedEdges.top = 0
						skin.landscape.layouts['iPhone Widescreen'].r.extendedEdges.bottom = 0
						skin.landscape.layouts['iPhone Widescreen'].r.extendedEdges.left = 0
						skin.landscape.layouts['iPhone Widescreen'].r.extendedEdges.right = 0
				skin.landscape.layouts['iPhone Widescreen'].menu = new Object()
					skin.landscape.layouts['iPhone Widescreen'].menu.x = 0
					skin.landscape.layouts['iPhone Widescreen'].menu.y = 0
					skin.landscape.layouts['iPhone Widescreen'].menu.width = 0
					skin.landscape.layouts['iPhone Widescreen'].menu.height = 0
					skin.landscape.layouts['iPhone Widescreen'].menu.extendedEdges = new Object()
						skin.landscape.layouts['iPhone Widescreen'].menu.extendedEdges.top = 0
						skin.landscape.layouts['iPhone Widescreen'].menu.extendedEdges.bottom = 0
						skin.landscape.layouts['iPhone Widescreen'].menu.extendedEdges.left = 0
						skin.landscape.layouts['iPhone Widescreen'].menu.extendedEdges.right = 0
				skin.landscape.layouts['iPhone Widescreen'].dpad = new Object()
					skin.landscape.layouts['iPhone Widescreen'].dpad.x = 0
					skin.landscape.layouts['iPhone Widescreen'].dpad.y = 0
					skin.landscape.layouts['iPhone Widescreen'].dpad.width = 0
					skin.landscape.layouts['iPhone Widescreen'].dpad.height = 0
					skin.landscape.layouts['iPhone Widescreen'].dpad.extendedEdges = new Object()
						skin.landscape.layouts['iPhone Widescreen'].dpad.extendedEdges.top = 0
						skin.landscape.layouts['iPhone Widescreen'].dpad.extendedEdges.bottom = 0
						skin.landscape.layouts['iPhone Widescreen'].dpad.extendedEdges.left = 0
						skin.landscape.layouts['iPhone Widescreen'].dpad.extendedEdges.right = 0
				skin.landscape.layouts['iPhone Widescreen'].extendedEdges = new Object()
					skin.landscape.layouts['iPhone Widescreen'].extendedEdges.top = 0
					skin.landscape.layouts['iPhone Widescreen'].extendedEdges.bottom = 0
					skin.landscape.layouts['iPhone Widescreen'].extendedEdges.left = 0
					skin.landscape.layouts['iPhone Widescreen'].extendedEdges.right = 0
			skin.landscape.layouts.iPad = new Object()
				skin.landscape.layouts.iPad.screen = new Object()
					skin.landscape.layouts.iPad.screen.x = 0
					skin.landscape.layouts.iPad.screen.y = 0
					skin.landscape.layouts.iPad.screen.width = 0
					skin.landscape.layouts.iPad.screen.height = 0
				skin.landscape.layouts.iPad.a = new Object()
					skin.landscape.layouts.iPad.a.x = 0
					skin.landscape.layouts.iPad.a.y = 0
					skin.landscape.layouts.iPad.a.width = 0
					skin.landscape.layouts.iPad.a.height = 0
					skin.landscape.layouts.iPad.a.extendedEdges = new Object()
						skin.landscape.layouts.iPad.a.extendedEdges.top = 0
						skin.landscape.layouts.iPad.a.extendedEdges.bottom = 0
						skin.landscape.layouts.iPad.a.extendedEdges.left = 0
						skin.landscape.layouts.iPad.a.extendedEdges.right = 0
				skin.landscape.layouts.iPad.b = new Object()
					skin.landscape.layouts.iPad.b.x = 0
					skin.landscape.layouts.iPad.b.y = 0
					skin.landscape.layouts.iPad.b.width = 0
					skin.landscape.layouts.iPad.b.height = 0
					skin.landscape.layouts.iPad.b.extendedEdges = new Object()
						skin.landscape.layouts.iPad.b.extendedEdges.top = 0
						skin.landscape.layouts.iPad.b.extendedEdges.bottom = 0
						skin.landscape.layouts.iPad.b.extendedEdges.left = 0
						skin.landscape.layouts.iPad.b.extendedEdges.right = 0
				skin.landscape.layouts.iPad.ab = new Object()
					skin.landscape.layouts.iPad.ab.x = 0
					skin.landscape.layouts.iPad.ab.y = 0
					skin.landscape.layouts.iPad.ab.width = 0
					skin.landscape.layouts.iPad.ab.height = 0
					skin.landscape.layouts.iPad.ab.extendedEdges = new Object()
						skin.landscape.layouts.iPad.ab.extendedEdges.top = 0
						skin.landscape.layouts.iPad.ab.extendedEdges.bottom = 0
						skin.landscape.layouts.iPad.ab.extendedEdges.left = 0
						skin.landscape.layouts.iPad.ab.extendedEdges.right = 0
				skin.landscape.layouts.iPad.start = new Object()
					skin.landscape.layouts.iPad.start.x = 0
					skin.landscape.layouts.iPad.start.y = 0
					skin.landscape.layouts.iPad.start.width = 0
					skin.landscape.layouts.iPad.start.height = 0
					skin.landscape.layouts.iPad.start.extendedEdges = new Object()
						skin.landscape.layouts.iPad.start.extendedEdges.top = 0
						skin.landscape.layouts.iPad.start.extendedEdges.bottom = 0
						skin.landscape.layouts.iPad.start.extendedEdges.left = 0
						skin.landscape.layouts.iPad.start.extendedEdges.right = 0
				skin.landscape.layouts.iPad.select = new Object()
					skin.landscape.layouts.iPad.select.x = 0
					skin.landscape.layouts.iPad.select.y = 0
					skin.landscape.layouts.iPad.select.width = 0
					skin.landscape.layouts.iPad.select.height = 0
					skin.landscape.layouts.iPad.select.extendedEdges = new Object()
						skin.landscape.layouts.iPad.select.extendedEdges.top = 0
						skin.landscape.layouts.iPad.select.extendedEdges.bottom = 0
						skin.landscape.layouts.iPad.select.extendedEdges.left = 0
						skin.landscape.layouts.iPad.select.extendedEdges.right = 0
				skin.landscape.layouts.iPad.l = new Object()
					skin.landscape.layouts.iPad.l.x = 0
					skin.landscape.layouts.iPad.l.y = 0
					skin.landscape.layouts.iPad.l.width = 0
					skin.landscape.layouts.iPad.l.height = 0
					skin.landscape.layouts.iPad.l.extendedEdges = new Object()
						skin.landscape.layouts.iPad.l.extendedEdges.top = 0
						skin.landscape.layouts.iPad.l.extendedEdges.bottom = 0
						skin.landscape.layouts.iPad.l.extendedEdges.left = 0
						skin.landscape.layouts.iPad.l.extendedEdges.right = 0
				skin.landscape.layouts.iPad.r = new Object()
					skin.landscape.layouts.iPad.r.x = 0
					skin.landscape.layouts.iPad.r.y = 0
					skin.landscape.layouts.iPad.r.width = 0
					skin.landscape.layouts.iPad.r.height = 0
					skin.landscape.layouts.iPad.r.extendedEdges = new Object()
						skin.landscape.layouts.iPad.r.extendedEdges.top = 0
						skin.landscape.layouts.iPad.r.extendedEdges.bottom = 0
						skin.landscape.layouts.iPad.r.extendedEdges.left = 0
						skin.landscape.layouts.iPad.r.extendedEdges.right = 0
				skin.landscape.layouts.iPad.menu = new Object()
					skin.landscape.layouts.iPad.menu.x = 0
					skin.landscape.layouts.iPad.menu.y = 0
					skin.landscape.layouts.iPad.menu.width = 0
					skin.landscape.layouts.iPad.menu.height = 0
					skin.landscape.layouts.iPad.menu.extendedEdges = new Object()
						skin.landscape.layouts.iPad.menu.extendedEdges.top = 0
						skin.landscape.layouts.iPad.menu.extendedEdges.bottom = 0
						skin.landscape.layouts.iPad.menu.extendedEdges.left = 0
						skin.landscape.layouts.iPad.menu.extendedEdges.right = 0
				skin.landscape.layouts.iPad.dpad = new Object()
					skin.landscape.layouts.iPad.dpad.x = 0
					skin.landscape.layouts.iPad.dpad.y = 0
					skin.landscape.layouts.iPad.dpad.width = 0
					skin.landscape.layouts.iPad.dpad.height = 0
					skin.landscape.layouts.iPad.dpad.extendedEdges = new Object()
						skin.landscape.layouts.iPad.dpad.extendedEdges.top = 0
						skin.landscape.layouts.iPad.dpad.extendedEdges.bottom = 0
						skin.landscape.layouts.iPad.dpad.extendedEdges.left = 0
						skin.landscape.layouts.iPad.dpad.extendedEdges.right = 0
				skin.landscape.layouts.iPad.extendedEdges = new Object()
					skin.landscape.layouts.iPad.extendedEdges.top = 0
					skin.landscape.layouts.iPad.extendedEdges.bottom = 0
					skin.landscape.layouts.iPad.extendedEdges.left = 0
					skin.landscape.layouts.iPad.extendedEdges.right = 0