// localStorage.js
export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    // Handle storage errors (e.g., quota exceeded)
    console.error("Local storage error:", error)
  }
}

export const getLocalStorageItem = (key) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  } catch (error) {
    // Handle storage errors
    console.error("Local storage error:", error)
    return null
  }
}

export const removeLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    // Handle storage errors
    console.error("Local storage error:", error)
  }
}
