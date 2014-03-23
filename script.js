var blankColor = '#FFFFFF'
var boxColor = '#FF0000'
var canvasWidth = 300
var canvasHeight = 300

var skin = new Image() // The image we'll draw to the canvas

var loop = setInterval(drawCanvas, 1000 / 60)

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
		skin.src = file.target.result
		document.getElementById('hack').src = skin.src
		document.getElementById('dropper').style.display = 'none'

		canvasWidth = document.getElementById('hack').offsetWidth
		canvasHeight = document.getElementById('hack').offsetHeight

		dom.width = canvasWidth
		dom.height = canvasHeight

		console.log(dom.width, dom.height)
	}

    reader.readAsDataURL(event.dataTransfer.files[0])
}

function drawCanvas()
{
	blank()
	ctx.drawImage(skin, 0, 0)
}

function blank()
{
	ctx.fillStyle = blankColor
	ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}

function drawRectangle(x, y, width, height)
{
    l.ctx.fillStyle = boxColor
    l.ctx.fillRect(Math.round(x), Math.round(y), width, height)
}