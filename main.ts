let reading1 = 0
basic.forever(function () {
    reading1 = input.lightLevel()
    led.plotBarGraph(
    reading1,
    255
    )
})
