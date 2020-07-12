import { FIREBASE_FOLDER, Image } from '~Models/Image'
import { db, storage } from '~Services/firebase'
import { getImages, uploadImage } from '~Services/Image'

export class ImageCollection {
  images: Image[]

  constructor(images?: Image[]) {
    this.images = images ? images : []
  }

  add(image: Image): void {
    this.images.push(image)
  }

  deactivateAll(): void {
    for (const image of this.images) {
      image.active = false
    }
  }

  getActivated(): Image | undefined {
    return this.images.find((image) => {
      return image.active
    })
  }

  async getFromServer(): Promise<void> {
    this.images = await getImages()
  }

  async addImage(file: File, activate = false): Promise<void> {
    try {
      await uploadImage(file)
      const imageUrl = await storage
        .ref(FIREBASE_FOLDER)
        .child(file.name)
        .getDownloadURL()

      const image = new Image({
        active: activate,
        url: imageUrl,
      })

      await db
        .collection(FIREBASE_FOLDER)
        .doc(image.id)
        .set(Object.assign({}, image))

      // Only be one active at a time
      if (activate) {
        this.deactivateAll()
      }
      this.add(image)
    } catch (e) {
      console.log('addImage error: ', e.message)
    }
  }
}
