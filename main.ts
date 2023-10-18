let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.showRainbow(1, 360)
basic.forever(function () {
    haloDisplay.rotate(1)
})
