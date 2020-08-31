var push = require('web-push')

let vapidKeys = {
    publicKey: 'BETFgZH7qbwVCJDRI14FfLDuI-C_abb12NsGhk9DToPww4gW4XFgNhzycA8Wt19SCeSZxgRLWnU6XgsrikTeB1Q',
    privateKey: '-nyfMaTrN6k-VMvUoYcqIFpvCrxeQINhz0QpqCqAPKQ'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint: "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABfT…GOaXD8OnxOPrnHlvmB0WBLTkryFb8A62X2PfhVTaUBV3fE82p5Kz2Z3iXt4U",
    keys: {
        auth: "-PuT1IooBCFuwy25ankLPg",
        p256dh: "BKvGOGfDwzjLXRM_KA8MdKKCp_SjwdfKpQggEB9nByY4I23Jd6SwzD9TtBNfW_QkQTBcjhoOe9VDb2-GpS9pHYY"
    }
};

push.sendNotification(sub, 'test message')