var push = require('web-push')

let vapidKeys = {
    publicKey: 'BETFgZH7qbwVCJDRI14FfLDuI-C_abb12NsGhk9DToPww4gW4XFgNhzycA8Wt19SCeSZxgRLWnU6XgsrikTeB1Q',
    privateKey: '-nyfMaTrN6k-VMvUoYcqIFpvCrxeQINhz0QpqCqAPKQ'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/edvuDO_txF0:APA91bF_Li2PIsF9uUg6kMfG9n53Uv3Qq719KuM6tQdCqr-YnBrCEiYPzxVS_rHCuAu9K0p5fXYmDGASFhjvkxnHrU_zJd_WNSC7n6Ja1urPg2UiJdrnsld7Z-j6ATn_m3WgvIIcxE4X",
    expirationTime: null,
    keys: {
        p256dh: "BE34LCEAUGPscwbG4FZDIOidoGSA0XzD2CAhVfxFyBLywfxMsF5vHwiRCnACM8MQZPVvzB40JRjXrPl2gkH0XmU",
        auth: "ri3VEaok9VkRzUo_roaewg"
    }
};

push.sendNotification(sub, 'test message');