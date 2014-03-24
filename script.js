var boxColor = '#FF0000'
var canvasWidth = 300
var canvasHeight = 300
var opacity = 0.3

var currentDevice
var currentOrientation

var skinImage = new Image() // The image we'll draw to the canvas

var dropper = document.getElementById('dropper')
	dropper.addEventListener('dragover', handleDragOver, false)
	dropper.addEventListener('drop', handleDrop, false)

var dom = document.getElementById('canvas')
var ctx = dom.getContext('2d')

function handleDragOver(event)
{
	// Don't let the browser do things with the file
	event.stopPropagation()
	event.preventDefault()
	event.dataTransfer.dropEffect = 'copy' // Change the cursor to show we're gonna do something with the file
}

function handleDrop(event)
{
	// Don't let the browser do things with the file
	event.stopPropagation()
	event.preventDefault()

	var reader = new FileReader()

	reader.onload = function(file)
	{
		skinImage.src = file.target.result
		document.getElementById('hack').src = skinImage.src
		closeDropper()

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
			currentDevice = 'iPhoneWidescreen'
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

    reader.readAsDataURL(event.dataTransfer.files[0])
}

function loadValues()
{
	document.getElementById('skinName').value = skin.name
	document.getElementById('skinIdentifier').value = skin.identifier

	var button = skin[currentOrientation].layouts[currentDevice][document.getElementById('selectButton').value]

	document.getElementById('xPosition').value = button.x * 2
	document.getElementById('yPosition').value = button.y * 2
	document.getElementById('buttonWidth').value = button.width * 2
	document.getElementById('buttonHeight').value = button.height * 2

	drawCanvas()
}

function updateValues()
{
	skin.name = document.getElementById('skinName').value
	skin.identifier = document.getElementById('skinIdentifier').value

	var button = skin[currentOrientation].layouts[currentDevice][document.getElementById('selectButton').value]

	button.x = document.getElementById('xPosition').value / 2
	button.y = document.getElementById('yPosition').value / 2
	button.width = document.getElementById('buttonWidth').value / 2
	button.height = document.getElementById('buttonHeight').value / 2

	loadValues()
}

function openDropper()
{
	document.getElementById('dropper').style.display = 'block'
}

function closeDropper()
{
	document.getElementById('dropper').style.display = 'none'
}

function closeExport()
{
	document.getElementById('export').style.display = 'none'
}

function closeLoad()
{
	document.getElementById('load').style.display = 'none'
}

function openLoad()
{
	document.getElementById('load').style.display = 'block'
}

function loadJSON()
{
	skin = JSON.parse(document.getElementById('loadCode').value)
	document.getElementById('load').style.display = 'none'
	loadValues()
}

function exportJSON()
{
	document.getElementById('exportCode').value = JSON.stringify(skin)
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
}

function blank()
{
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
}

function drawButton(orientation, device, button, text)
{
	ctx.fillStyle = boxColor
	ctx.font = 'bold 16px Helvetica'
	ctx.fillText(text, skin[orientation].layouts[device][button].x * 2, skin[orientation].layouts[device][button].y * 2)
	ctx.globalAlpha = opacity
    ctx.fillRect(skin[orientation].layouts[device][button].x * 2, skin[orientation].layouts[device][button].y * 2, skin[orientation].layouts[device][button].width * 2, skin[orientation].layouts[device][button].height * 2)
    ctx.globalAlpha = 1
}