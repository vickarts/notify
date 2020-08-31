var push = require('web-push')

let vapidKeys = {
    publicKey: 'BETFgZH7qbwVCJDRI14FfLDuI-C_abb12NsGhk9DToPww4gW4XFgNhzycA8Wt19SCeSZxgRLWnU6XgsrikTeB1Q',
    privateKey: '-nyfMaTrN6k-VMvUoYcqIFpvCrxeQINhz0QpqCqAPKQ'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')