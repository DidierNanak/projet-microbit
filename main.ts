let Boussole = 0
let Choix = 0
basic.forever(function () {
    Boussole = input.compassHeading()
    if (input.buttonIsPressed(Button.A)) {
        if (Boussole < 45) {
            basic.showString("N")
        } else if (Boussole < 135) {
            basic.showString("E")
        } else if (Boussole < 225) {
            basic.showString("S")
        } else if (Boussole < 315) {
            basic.showString("W")
        } else {
            basic.showString("N")
        }
    }
    if (input.isGesture(Gesture.Shake)) {
        basic.clearScreen()
        Choix = randint(1, 3)
        if (Choix == 1) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.showLeds(`
                # # . . .
                # # # . #
                . . . # .
                # # # . #
                # # . . .
                `)
        } else {
            if (Choix == 2) {
                music.playTone(220, music.beat(BeatFraction.Whole))
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # # # .
                    . # # # .
                    . . . . .
                    `)
            } else {
                music.playTone(698, music.beat(BeatFraction.Whole))
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . . . #
                    # . . . #
                    # # # # #
                    `)
            }
        }
    }
})
