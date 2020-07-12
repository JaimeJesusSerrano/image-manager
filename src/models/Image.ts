import { v4 as uuidv4 } from 'uuid'

import { db, firebase } from '~Services/firebase'

export const DEFAULT_ROTATION = 0
export const FIREBASE_FOLDER = 'images'

export enum ImageActionType {
  Rotation = 'rotation',
}

interface ImageActionConstructor {
  createAt?: number
  type: ImageActionType
  value: any
}
export class ImageAction {
  createAt: number
  type: ImageActionType
  value: any

  constructor(values: ImageActionConstructor) {
    this.createAt = values.createAt || new Date().getTime()
    this.type = values.type
    this.value = values.value
  }
}

interface ImageConstructor {
  actions?: ImageAction[]
  active: boolean
  createAt?: number
  id?: string
  rotation?: number
  url: string
}
export class Image {
  actions: ImageAction[]
  active: boolean
  createAt: number
  id: string
  rotation: number
  url: string

  constructor(values: ImageConstructor) {
    this.actions = values.actions || []
    this.active = values.active
    this.createAt = values.createAt || new Date().getTime()
    this.id = values.id || uuidv4()
    this.url = values.url

    // Calculated values
    this.rotation = values.rotation || this.getRotation()
  }

  getLastAction(type: ImageActionType): ImageAction | null {
    if (!this.actions || !this.actions.length) {
      return null
    }

    const actionsType = this.actions.filter((action) => action.type === type)

    if (!actionsType.length) {
      return null
    }

    return actionsType[actionsType.length - 1]
  }

  getRotation(): number {
    const lastRotationAction = this.getLastAction(ImageActionType.Rotation)

    if (!lastRotationAction) {
      return DEFAULT_ROTATION
    }

    return lastRotationAction.value
  }

  setRotation(newRotation: number): void {
    this.rotation = newRotation

    const action = new ImageAction({
      type: ImageActionType.Rotation,
      value: newRotation,
    })

    this.actions.push(action)
    this.updateLastAction()
  }

  async updateLastAction() {
    try {
      await db
        .collection(FIREBASE_FOLDER)
        .doc(this.id)
        .update({
          actions: firebase.firestore.FieldValue.arrayUnion(
            Object.assign({}, this.actions[this.actions.length - 1])
          ),
        })
    } catch (e) {
      console.log('updateInServer error: ', e.message)
    }
  }
}
