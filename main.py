def my_function():
    radio.send_number(10)
BitPlayer.on_key(BitPlayerKey.KEY_C, BitPlayerKeyEvent.RELEASED, my_function)

def my_function2():
    radio.send_number(10)
BitPlayer.on_key(BitPlayerKey.KEY_D, BitPlayerKeyEvent.RELEASED, my_function2)

def my_function3():
    radio.send_number(10)
BitPlayer.on_key(BitPlayerKey.KEY_A, BitPlayerKeyEvent.RELEASED, my_function3)

def my_function4():
    radio.send_number(10)
BitPlayer.on_key(BitPlayerKey.KEY_B, BitPlayerKeyEvent.RELEASED, my_function4)

def on_forever():
    radio.set_group(1)
    if BitPlayer.on_joystick(Joystick.UP):
        radio.send_number(1)
    if BitPlayer.on_joystick(Joystick.DOWN):
        radio.send_number(2)
    if BitPlayer.on_joystick(Joystick.LEFT):
        radio.send_number(3)
    if BitPlayer.on_joystick(Joystick.RIGHT):
        radio.send_number(4)
    if BitPlayer.on_joystick(Joystick.MIDDLE):
        radio.send_number(5)
basic.forever(on_forever)

def on_forever2():
    radio.set_group(2)
    if BitPlayer.key_pressed(BitPlayerKey.KEY_A):
        radio.send_number(6)
    if BitPlayer.key_pressed(BitPlayerKey.KEY_B):
        radio.send_number(7)
    if BitPlayer.key_pressed(BitPlayerKey.KEY_C):
        radio.send_number(8)
    if BitPlayer.key_pressed(BitPlayerKey.KEY_D):
        radio.send_number(9)
    if BitPlayer.key_pressed(BitPlayerKey.KEY_D):
        radio.send_number(9)
basic.forever(on_forever2)

def on_forever3():
    radio.set_group(3)
    if BitPlayer.key_pressed(BitPlayerKey.KEY_L):
        radio.send_number(11)
    if BitPlayer.key_pressed(BitPlayerKey.KEY_R):
        radio.send_number(12)
basic.forever(on_forever3)
