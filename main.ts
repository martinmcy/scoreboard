radio.onReceivedString(function (receivedString) {
    let score = 0
    basic.showNumber(receivedscore)
    receivedscore += score
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(receivedscore)
})
let receivedscore = 0
radio.setGroup(84)
basic.showNumber(0)
receivedscore = 0
