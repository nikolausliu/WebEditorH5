/**
 * 组件调用功能统一处理
 */
export default function(data, index) {
  const { functional } = data[index]
  const { id } = functional
  if (!id) {
    return
  }
  switch (id) {
    // 无功能
    case 'none':
      // doing nothing
      break
    // 链接
    case 'link':
      if (
        functional.value &&
        typeof functional.value === 'object' &&
        'url' in functional.value
      ) {
        location.href = functional.value.url
      }
      break
  }
}
