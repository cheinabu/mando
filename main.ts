BitPlayer.OnKey(BitPlayerKey.key_C, BitPlayerKeyEvent.released, function () {
    radio.sendNumber(10)
})
BitPlayer.OnKey(BitPlayerKey.key_D, BitPlayerKeyEvent.released, function () {
    radio.sendNumber(10)
})
BitPlayer.OnKey(BitPlayerKey.key_A, BitPlayerKeyEvent.released, function () {
    radio.sendNumber(10)
})
BitPlayer.OnKey(BitPlayerKey.key_B, BitPlayerKeyEvent.released, function () {
    radio.sendNumber(10)
})
basic.forever(function () {
    radio.setGroup(1)
    if (BitPlayer.OnJoystick(Joystick.Up)) {
        radio.sendNumber(1)
    }
    if (BitPlayer.OnJoystick(Joystick.Down)) {
        radio.sendNumber(2)
    }
    if (BitPlayer.OnJoystick(Joystick.Left)) {
        radio.sendNumber(3)
    }
    if (BitPlayer.OnJoystick(Joystick.Right)) {
        radio.sendNumber(4)
    }
    if (BitPlayer.OnJoystick(Joystick.Middle)) {
        radio.sendNumber(5)
    }
})
basic.forever(function () {
    radio.setGroup(2)
    if (BitPlayer.KeyPressed(BitPlayerKey.key_A)) {
        radio.sendNumber(6)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_B)) {
        radio.sendNumber(7)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_C)) {
        radio.sendNumber(8)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_D)) {
        radio.sendNumber(9)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_D)) {
        radio.sendNumber(9)
    }
})
basic.forever(function () {
    radio.setGroup(3)
    if (BitPlayer.KeyPressed(BitPlayerKey.key_L)) {
        radio.sendNumber(11)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_R)) {
        radio.sendNumber(12)
    }
})
