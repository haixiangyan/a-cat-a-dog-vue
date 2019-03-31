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
  };
}
export const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear() - 2000}`
}
