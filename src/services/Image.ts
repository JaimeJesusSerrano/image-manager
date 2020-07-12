import { FIREBASE_FOLDER, Image } from '~Models/Image'
import { db, storage } from '~Services/firebase'

const getImages = async () => {
  const images: Image[] = []

  const querySnapshot = await db.collection(FIREBASE_FOLDER).get()

  querySnapshot.forEach(function (doc) {
    const data = doc.data() as Image
    if (data.id) {
      images.push(new Image(data))
    }
  })

  return images
}

// const getImagesUrls = async () => {
//   const images: Image[] = []
//
//   const imagesList = await storage.ref(FIREBASE_FOLDER).listAll()
//   for (const item of imagesList.items) {
//     images.push(
//       new Image({
//         active: false,
//         url: await item.getDownloadURL(),
//       })
//     )
//   }
//
//   return images
// }

const uploadImage = async (file: File) => {
  return storage.ref(`${FIREBASE_FOLDER}/${file.name}`).put(file)
}

export { getImages, uploadImage }
