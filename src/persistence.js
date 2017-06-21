function loadCookie (name) {
  console.log("loadCookie", name)
  /* TODO */
  return {}
}

function loadLocalStorage (name) {
  console.log("loadLocalStorage", name)
  /* TODO */
  return {}
}

function saveCookie (name, data) {
  console.log("saveCookie", name, data)
  /* TODO */
}

function saveLocalStorage (name, data) {
  console.log("saveLocalStorage", name, data)
  /* TODO */
}

export default {
  _store: null,
  name: 'split-test',
  method: 'cookie',

  _load () {
    if (this.method === 'cookie')
      this._store = loadCookie(this.name)
    else if (this.method === 'localStorage')
      this._store = loadLocalStorage(this.name)
    else {
      console.warn("SPLIT TEST WARNING: No or invalid storage method. Data will not persist.")
      this._store = {}
    }
    return this._store
  },

  _save () {
    if (this.method === 'cookie')
      saveCookie(this.name, this._store)
    else if (this.method === 'localStorage')
      saveLocalStorage(this.name, this._store)
  },

  get entry () {
    return this._store || this._load()
  },

  set entry ({name, winner}) {
    this._store[name] = winner
    this._save()
  }
}
