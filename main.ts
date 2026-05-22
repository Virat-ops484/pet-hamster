input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
})
basic.showIcon(IconNames.Asleep)
