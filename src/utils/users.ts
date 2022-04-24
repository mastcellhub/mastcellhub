import {db} from './firebase'

export const getUsers = async () => {
  console.log('TRYING TO GET DATA')
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
    });
})
}
