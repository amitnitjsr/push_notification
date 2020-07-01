console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Doodleblue!",
    // icon: "https://icons8.com/icon/48112/apple-logo"
  });
});
