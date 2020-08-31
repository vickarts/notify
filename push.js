var push = require('web-push')

let vapidKeys = {
    publicKey: 'BETFgZH7qbwVCJDRI14FfLDuI-C_abb12NsGhk9DToPww4gW4XFgNhzycA8Wt19SCeSZxgRLWnU6XgsrikTeB1Q',
    privateKey: '-nyfMaTrN6k-VMvUoYcqIFpvCrxeQINhz0QpqCqAPKQ'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/fJOV_9kLWZY:APA91bEneoGgGlaVMPjciWsS2wH3gzjA1IlR0eEIpCx3_AZBEn0xHAENt4Bbfy3IthnZOJItXg_hpu_6HfKWM4LSYvOAGg25r1cI7p0_mB0l_ZU43KbaOjRwg7yPYi-ixFm9Of1pYE3D", "expirationTime": null, "keys": { "p256dh": "BBEYcgNgwO-1qTLocyLPOfRieHAAsgDmHmF3Jiegj24fcJcvK_9sDoKPtjr2D2DtU2sIdFmWTEkvsymQGBGv1TQ", "auth": "VUQbKxnmOB7Ovg7zeGsxVQ" } };

push.sendNotification(sub, 'test message')