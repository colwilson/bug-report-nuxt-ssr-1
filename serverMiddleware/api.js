export default function (req, res, next) {
  console.log(req.path)
  const data = {
    data: 'data'
  }
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(data))
  next()
}
