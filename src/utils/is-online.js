function isOnline(time) {
  const offline = (new Date().getTime() - time.toMillis()) / 1000 > 40;
  return offline ? "offline" : "online";
}

export default isOnline;
