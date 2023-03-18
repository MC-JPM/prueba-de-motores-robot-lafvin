def go_forward():
    robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
def go_backward():
    robotbit.motor_run_dual(robotbit.Motors.M1A, 150, robotbit.Motors.M2A, -150)
def stop():
    robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
def turn_left():
    robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 150)
def left_round():
    robotbit.motor_run_dual(robotbit.Motors.M1A, 150, robotbit.Motors.M2A, 150)
def right_round():
    robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
def turn_right():
    robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 0)
basic.show_icon(IconNames.HAPPY)
while not (input.button_is_pressed(Button.A)):
    pass
basic.show_icon(IconNames.HEART)

def on_forever():
    go_forward()
    basic.pause(2000)
    go_backward()
    basic.pause(2000)
    turn_left()
    basic.pause(2000)
    turn_right()
    basic.pause(2000)
    left_round()
    basic.pause(2000)
    right_round()
    basic.pause(2000)
    while not (input.button_is_pressed(Button.A)):
        stop()
        basic.show_icon(IconNames.HAPPY)
    basic.show_icon(IconNames.HEART)
basic.forever(on_forever)
