// domain/.netlify/functions/hello

const items = [
  {id:1, name:'zk'},
  {id:2, name:'hb'}
]

exports.handler = async function(event,context){
  return {
    statusCode:200,
    body: JSON.stringify(items) 
  }
}