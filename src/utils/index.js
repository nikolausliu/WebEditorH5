export function px2viewport(px, viewportWidth = 375) {
  return ((px / viewportWidth) * 100).toFixed(5)
}
