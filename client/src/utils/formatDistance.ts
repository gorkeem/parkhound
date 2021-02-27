export default function formatDistance(dist?: number) {
  if (dist == null) {
    return;
  }
  if (dist < 1) {
    return Math.round(dist * 100) * 10 + "m";
  } else {
    return dist.toFixed(1) + "km";
  }
}
