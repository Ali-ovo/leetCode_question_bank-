class EventEmitter {
  #eventsMap = new Map()
  subscribe(eventName, callback) {
    this.#eventsMap.set(eventName, (this.#eventsMap.get(eventName) ?? new Set()).add(callback))
    return {
      unsubscribe: () => {
        this.#eventsMap.get(eventName)?.delete(callback)
      },
    }
  }

  emit(eventName, args = []) {
    return [...(this.#eventsMap.get(eventName) ?? [])].map((fn) => fn?.(...args))
  }
}

const emitter = new EventEmitter()

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99
}
const sub = emitter.subscribe('onClick', onClickCallback)

emitter.emit('onClick') // [99]
sub.unsubscribe() // undefined
emitter.emit('onClick') // []
