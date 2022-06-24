# Tutorial-Light of death

## Set the reading

Set the reading variable and grab it to the "forever" loop

```blocks
basic.forever(function () {
    reading = 0
})
```

## Set the light level

Grab light level from the input section and put him into the reading variable

```blocks
basic.forever(function () {
    reading = input.lightLevel()
})
```

## Set the plot

Grab plot variable from the led section,put him undr the reading variable,set the first number to reading variable and the secend number to 255

```blocks
basic.forever(function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    255
    )
})
```

# This is all