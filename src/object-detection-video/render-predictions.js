export const renderPredictions = (ctx, predictions) => {
  // Font options.
  const font = `${16}px 'ibm-plex-sans', Helvetica Neue, Arial, sans-serif`
  const predicionMinValue = 0.8
  ctx.setFont(font)
  ctx.setTextBaseLine('top')
  const border = 4
  var bestPrediction = null;

  predictions.forEach(prediction => {
    if (prediction.score > predicionMinValue) {
      if (bestPrediction === null) {
        bestPrediction = prediction;
      }
      else {
        if (prediction.score > prediction.score) {
          bestPrediction = prediction;
        }
      }
    }
  })
    
  if (bestPrediction !== null) {
    const x = bestPrediction.bbox[0]
    const y = bestPrediction.bbox[1]
    const width = bestPrediction.bbox[2]
    const height = bestPrediction.bbox[3]
    // Draw the bounding box.
    ctx.setStrokeStyle('#0062ff')
    ctx.setLineWidth(border)

    ctx.strokeRect(
      Math.round(x),
      Math.round(y),
      Math.round(width),
      Math.round(height)
    )
  }
}
