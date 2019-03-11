import database from '../firebase/firebase'

export const generateMealPlan = () => {
  //get data
  return () => {
    const recipes = {}
    database.collection("recipes")
    .get()
    .then(snapshot => {
      snapshot.docs.map(doc=>{
        const temp = doc.data()
        recipes[temp.name] = temp
      })
    })    
  }
}