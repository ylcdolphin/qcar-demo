function doStart () {
    while (stop) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8) {
            maqueen.motorStop(maqueen.Motors.All)
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                右轉()
            } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                左轉()
            } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                後退()
            } else {
                前進()
            }
        }
    }
}
function 左轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
}
function 右轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
}
function 後退 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 125)
}
function 停車 () {
    maqueen.motorStop(maqueen.Motors.All)
}
function 前進 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
}
let stop = false
basic.pause(1000)
stop = true
doStart()
basic.forever(function () {
	
})
