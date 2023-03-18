function go_forward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M2A,
    150
    )
}
function go_backward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M2A,
    -150
    )
}
function stop () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    0
    )
}
function turn_left () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    150
    )
}
function left_round () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M2A,
    150
    )
}
function right_round () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M2A,
    -150
    )
}
function turn_right () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M2A,
    0
    )
}
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
	
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
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
    while (!(input.buttonIsPressed(Button.A))) {
        stop()
        basic.showIcon(IconNames.Happy)
    }
    basic.showIcon(IconNames.Heart)
})
