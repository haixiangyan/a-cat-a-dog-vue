export const getEChartOptions = (imageAnalysis) => {
  const data = imageAnalysis.labels
    .map(label => ({
      value: Number(label.Confidence.toFixed(2)),
      name: label.Name
    }))

  return {
    title: {
      text: 'Image Analysis',
      subtext: `ID: ${imageAnalysis.image_id}`,
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: 'Confidence',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}
export const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear() - 2000}`
}

export const isLogin = () => {
  const userStr = localStorage.getItem('user')
  // Not exist user info
  if (!userStr) {
    return false
  }
  const user = JSON.parse(userStr)
  return Boolean(user.subId && user.type)
}

export function initUser() {
  const emptyUser = {subId: '', type: 'CAT'}
  const userStr = localStorage.getItem('user')
  if (!userStr) {
    return emptyUser
  }
  const user = JSON.parse(userStr)
  if (!user.subId || !user.type) {
    return emptyUser
  }

  return user
}
