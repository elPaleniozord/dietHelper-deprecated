/* 
using United States Department of Agriculture Agricultural Research Service REST API
https://ndb.nal.usda.gov/ndb/ 
*/
 
// https://api.nal.usda.gov/ndb/search/?format=json&q=%27egg%27&ds=Standard%20Reference&max=10&api_key=DEMO_KEY

const apiKey = process.env.NDB_API_KEY

class NutriDB {
  doSearch = (phrase) =>{
    const uri = "https://api.nal.usda.gov/ndb/search/?format=json&q="+phrase+"&ds=Standard%20Reference&max=10&api_key="+apiKey

    fetch(uri, (data)=>{
      console.log(JSON/data)
    })
  }
}

export default NutriDB