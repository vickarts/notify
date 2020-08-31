self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.showNotification('test message', {});
})