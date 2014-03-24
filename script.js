// console.log(JSON.stringify(skin.portrait.layouts.iPhone.a.x))
// console.log(document.getElementById('selectOrientation').value)

var blankColor = '#FFFFFF'
var boxColor = '#FF0000'
var canvasWidth = 300
var canvasHeight = 300

var skinImage = new Image() // The image we'll draw to the canvas

var loop // Where we'll store the main "game" loop

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
		document.getElementById('dropper').style.display = 'none'

		canvasWidth = document.getElementById('hack').offsetWidth
		canvasHeight = document.getElementById('hack').offsetHeight

		dom.width = canvasWidth
		dom.height = canvasHeight

		loadValues()
		loop = setInterval(drawCanvas, 1000 / 60)
	}

    reader.readAsDataURL(event.dataTransfer.files[0])
}

function loadValues()
{
	var button = skin[document.getElementById('selectOrientation').value].layouts[document.getElementById('selectDevice').value][document.getElementById('selectButton').value]

	document.getElementById('xPosition').value = button.x
	document.getElementById('yPosition').value = button.y
	document.getElementById('buttonWidth').value = button.width
	document.getElementById('buttonHeight').value = button.height
	document.getElementById('extendedEdges').value = button.extendedEdges.top
}

function updateValues()
{
	var button = skin[document.getElementById('selectOrientation').value].layouts[document.getElementById('selectDevice').value][document.getElementById('selectButton').value]

	button.x = document.getElementById('xPosition').value
	button.y = document.getElementById('yPosition').value
	button.width = document.getElementById('buttonWidth').value
	button.height = document.getElementById('buttonHeight').value

	button.extendedEdges.top = document.getElementById('extendedEdges').value
	button.extendedEdges.bottom = document.getElementById('extendedEdges').value
	button.extendedEdges.left = document.getElementById('extendedEdges').value
	button.extendedEdges.right = document.getElementById('extendedEdges').value

	loadValues()
}

function drawCanvas()
{
	blank()
	ctx.drawImage(skinImage, 0, 0)
	drawRectangle(skin.portrait.layouts.iPhone.a.x, skin.portrait.layouts.iPhone.a.y, skin.portrait.layouts.iPhone.a.width, skin.portrait.layouts.iPhone.a.height)
	drawRectangle(skin.portrait.layouts.iPhone.b.x, skin.portrait.layouts.iPhone.b.y, skin.portrait.layouts.iPhone.b.width, skin.portrait.layouts.iPhone.b.height)
	drawRectangle(skin.portrait.layouts.iPhone.start.x, skin.portrait.layouts.iPhone.start.y, skin.portrait.layouts.iPhone.start.width, skin.portrait.layouts.iPhone.start.height)
	drawRectangle(skin.portrait.layouts.iPhone.select.x, skin.portrait.layouts.iPhone.select.y, skin.portrait.layouts.iPhone.select.width, skin.portrait.layouts.iPhone.select.height)
	drawRectangle(skin.portrait.layouts.iPhone.l.x, skin.portrait.layouts.iPhone.l.y, skin.portrait.layouts.iPhone.l.width, skin.portrait.layouts.iPhone.l.height)
	drawRectangle(skin.portrait.layouts.iPhone.r.x, skin.portrait.layouts.iPhone.r.y, skin.portrait.layouts.iPhone.r.width, skin.portrait.layouts.iPhone.r.height)
	drawRectangle(skin.portrait.layouts.iPhone.dpad.x, skin.portrait.layouts.iPhone.dpad.y, skin.portrait.layouts.iPhone.dpad.width, skin.portrait.layouts.iPhone.dpad.height)
	drawRectangle(skin.portrait.layouts.iPhone.menu.x, skin.portrait.layouts.iPhone.menu.y, skin.portrait.layouts.iPhone.menu.width, skin.portrait.layouts.iPhone.menu.height)
}

function blank()
{
	ctx.fillStyle = blankColor
	ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}

function drawRectangle(x, y, width, height)
{
    ctx.strokeStyle = boxColor
    ctx.lineWidth = 1
    ctx.rect(Math.round(x), Math.round(y), width, height)
    ctx.stroke()
}