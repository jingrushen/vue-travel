// const Mock = require('mockjs')
// import { Random } from 'mockjs'
import Mock from 'mockjs'
const Random = Mock.Random
function produceData () {
  let acticle = []
  for (let i = 0; i < 100; i++) {
    let newObj = {
      title: Random.csentence(5, 30),
      imgs: Random.dataImage('300, 250', 'mock-pic'),
      author_name: Random.cname(),
      date: Random.date() + ' ' + Random.time()
    }
    acticle.push(newObj)
  }
  return {
    ret: true,
    articles: acticle
  }
}
Mock.mock('/api/data', produceData)
