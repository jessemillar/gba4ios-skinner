var boxColor = '#FF0000'
var screenBoxColor = '#85144B'
var canvasWidth = 640
var canvasHeight = 480
var opacity = 0.35

var clicked = false

var errorAlerted = false
var mobileAlerted = false

var currentDevice = 'iPhone'
var currentOrientation = 'portrait'

var skinImage = new Image() // The image we'll draw to the canvas

var dropper = document.getElementById('dropper')
	dropper.addEventListener('dragover', handleDragOver, false)
	dropper.addEventListener('drop', handleDrop, false)

var dom = document.getElementById('canvas')
var ctx = dom.getContext('2d')

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))
{
	alert('GBA4iOS Skinner currently supports only desktop computers.')
	mobileAlerted = true
}

if (!window.chrome)
{
	if (!mobileAlerted)
	{
		alert('GBA4iOS Skinner currently supports only Google Chrome.')
	}
}

function handleDragOver(event)
{
	// Don't let the browser do things with the file
	event.stopPropagation()
	event.preventDefault()
	event.dataTransfer.dropEffect = 'copy' // Change the cursor to show we're gonna do something with the file
}

function handleDrop(event)
{
	document.getElementById('instructions').style.display = 'none'

	// Don't let the browser do things with the file
	event.stopPropagation()
	event.preventDefault()

	var data = event.dataTransfer.files[0]

	var imageReader = new FileReader()
	var jsonReader = new FileReader()

	jsonReader.onload = function(file)
	{
		var dataURL = file.target.result
		skin = JSON.parse(dataURL)
		loadValues()
	}

	imageReader.onload = function(file)
	{
		var dataURL = file.target.result
		var mimeType = dataURL.split(",")[0].split(":")[1].split(";")[0]

		if (mimeType == 'application/json')
		{
			jsonReader.readAsText(data)
		}
		else if (mimeType == 'image/png')
		{
			skinImage.src = dataURL
			document.getElementById('hack').src = skinImage.src

			canvasWidth = document.getElementById('hack').offsetWidth
			canvasHeight = document.getElementById('hack').offsetHeight

			dom.width = canvasWidth
			dom.height = canvasHeight

			if (canvasWidth == 640 && canvasHeight == 480) // iPhone
			{
				currentOrientation = 'portrait'
				currentDevice = 'iPhone'
			}
			else if (canvasWidth == 768 && canvasHeight == 427) // iPad
			{
				currentOrientation = 'portrait'
				currentDevice = 'iPad'
			}
			else if (canvasWidth == 1536 && canvasHeight == 854) // iPad Retina
			{
				currentOrientation = 'portrait'
				currentDevice = 'iPad'
			}
			else if (canvasWidth == 960 && canvasHeight == 640) // iPhone
			{
				currentOrientation = 'landscape'
				currentDevice = 'iPhone'
			}
			else if (canvasWidth == 1136 && canvasHeight == 640) // iPhone Widescreen
			{
				currentOrientation = 'landscape'
				currentDevice = 'iPhone Widescreen'
			}
			else if (canvasWidth == 1024 && canvasHeight == 768) // iPad
			{
				currentOrientation = 'landscape'
				currentDevice = 'iPad'
			}
			else if (canvasWidth == 2048 && canvasHeight == 1536) // iPad Retina
			{
				currentOrientation = 'landscape'
				currentDevice = 'iPad'
			}

			loadValues()
		}
	}

    imageReader.readAsDataURL(data)
}

function displayMouse()
{
	document.getElementById('mouseCoordinates').value = 'x: ' + event.clientX + ' y: ' + event.clientY
	if (clicked)
	{
		positionButton()
	}
}

function mouseClick()
{
	clicked = true
}

function mouseRelease()
{
	clicked = false
}

function positionButton()
{
	if (event.clientX < canvasWidth && event.clientY < canvasHeight && document.getElementById('export').style.display == 'none')
	{
		var button = skin[currentOrientation].layouts[currentDevice][document.getElementById('selectButton').value]
		button.x = event.clientX / 2
		button.y = event.clientY / 2
		loadValues()
	}
}

function updateValues()
{
	skin.name = document.getElementById('skinName').value
	skin.identifier = document.getElementById('skinIdentifier').value

	skin.landscape.translucent = document.getElementById('allowedTransparency').checked

	var button = skin[currentOrientation].layouts[currentDevice][document.getElementById('selectButton').value]

	button.x = document.getElementById('xPosition').value / 2
	button.y = document.getElementById('yPosition').value / 2
	button.width = document.getElementById('buttonWidth').value / 2
	button.height = document.getElementById('buttonHeight').value / 2
	if (document.getElementById('selectButton').value != 'screen')
	{
		button.extendedEdges.left = document.getElementById('buttonPadding').value / 2
		button.extendedEdges.right = document.getElementById('buttonPadding').value / 2
		button.extendedEdges.top = document.getElementById('buttonPadding').value / 2
		button.extendedEdges.bottom = document.getElementById('buttonPadding').value / 2
	}

	loadValues()
}

function loadValues()
{
	document.getElementById('skinName').value = skin.name
	document.getElementById('skinIdentifier').value = skin.identifier

	document.getElementById('allowedTransparency').checked = skin.landscape.translucent

	var button = skin[currentOrientation].layouts[currentDevice][document.getElementById('selectButton').value]

	if (!button.x)
	{
		button.x = 0
	}
	if (!button.y)
	{
		button.y = 0
	}
	if (!button.width)
	{
		button.width = 0
	}
	if (!button.height)
	{
		button.height = 0
	}

	document.getElementById('xPosition').value = button.x * 2
	document.getElementById('yPosition').value = button.y * 2
	document.getElementById('buttonWidth').value = button.width * 2
	document.getElementById('buttonHeight').value = button.height * 2
	if (document.getElementById('selectButton').value != 'screen')
	{
		document.getElementById('buttonPadding').value = button.extendedEdges.left * 2
	}
	else
	{
		document.getElementById('buttonPadding').value = 'null'
	}

	drawCanvas()
}

function closeExport()
{
	document.getElementById('export').style.display = 'none'
}

function exportJSON()
{
	var tempSkin = skin

	// if (!document.getElementById('screenModification').checked)
	// {
		delete tempSkin.portrait.layouts.iPhone.screen
		delete tempSkin.portrait.layouts.iPad.screen
		delete tempSkin.landscape.layouts.iPad.screen
		delete tempSkin.landscape.layouts['iPhone Widescreen'].screen
		delete tempSkin.landscape.layouts.iPad.screen
	// }
	document.getElementById('export').value = JSON.stringify(tempSkin)
	document.getElementById('export').style.display = 'block'
}

function drawCanvas()
{
	blank()
	ctx.drawImage(skinImage, 0, 0)
	drawButton(currentOrientation, currentDevice, 'a', 'A')
	drawButton(currentOrientation, currentDevice, 'b', 'B')
	drawButton(currentOrientation, currentDevice, 'l', 'L')
	drawButton(currentOrientation, currentDevice, 'r', 'R')
	drawButton(currentOrientation, currentDevice, 'start', 'Start')
	drawButton(currentOrientation, currentDevice, 'select', 'Select')
	drawButton(currentOrientation, currentDevice, 'dpad', 'D-Pad')
	drawButton(currentOrientation, currentDevice, 'menu', 'Menu')
	/*
	if (document.getElementById('screenModification').checked)
	{
		if (skin[currentOrientation].layouts[currentDevice].screen.width * 2 > 0 && skin[currentOrientation].layouts[currentDevice].screen.height * 2 > 0)
		{
			var thingy = skin[currentOrientation].layouts[currentDevice].screen

			ctx.fillStyle = screenBoxColor
			ctx.font = 'bold 15px Helvetica'
			ctx.fillText('Screen', skin[currentOrientation].layouts[currentDevice].screen.x * 2 + 2, skin[currentOrientation].layouts[currentDevice].screen.y * 2 + 15)
			ctx.globalAlpha = 0.65
			ctx.fillRect(thingy.x * 2, thingy.y * 2, thingy.width * 2, thingy.height * 2)
			ctx.globalAlpha = 1
		}
	}
	*/
}

function blank()
{
	ctx.clearRect(0, 0, canvasWidth, canvasHeight)
	ctx.globalAlpha = 0.5
	ctx.fillStyle = '#FFDC00'
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
    ctx.globalAlpha = 1
}

function drawButton(orientation, device, button, text)
{
	var thingy = skin[orientation].layouts[device][button]

	ctx.fillStyle = boxColor
	if (skin[orientation].layouts[device][button].width * 2 > 0 && skin[orientation].layouts[device][button].height * 2 > 0)
	{
		ctx.font = 'bold 15px Helvetica'
		ctx.fillText(text, skin[orientation].layouts[device][button].x * 2 + 2, skin[orientation].layouts[device][button].y * 2 + 15)
	}
	ctx.globalAlpha = opacity

	if (thingy.extendedEdges.left && thingy.extendedEdges.right && thingy.extendedEdges.top && thingy.extendedEdges.bottom)
	{
		ctx.fillRect(thingy.x * 2 - thingy.extendedEdges.left * 2, thingy.y * 2 - thingy.extendedEdges.top * 2, thingy.width * 2 + thingy.extendedEdges.left * 2 + thingy.extendedEdges.right * 2, thingy.height * 2 + thingy.extendedEdges.top * 2 + thingy.extendedEdges.bottom * 2)
	}
	else
	{
		thingy.extendedEdges.left = 0
		thingy.extendedEdges.right = 0
		thingy.extendedEdges.top = 0
		thingy.extendedEdges.bottom = 0
		ctx.fillRect(thingy.x * 2, thingy.y * 2, thingy.width * 2, thingy.height * 2)
	}
    ctx.globalAlpha = 1
}