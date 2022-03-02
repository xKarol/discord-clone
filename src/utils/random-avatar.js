export const defaultAvatars = [
  "/images/default-avatars/red-avatar.svg",
  "/images/default-avatars/green-avatar.svg",
  "/images/default-avatars/blue-avatar.svg",
];

export function getRandomAvatar() {
  return defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
}
