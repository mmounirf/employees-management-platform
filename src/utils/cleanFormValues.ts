/* eslint-disable */
// @ts-nocheck

type NonEmptyObject = {
  [key: string]: any
}

export function cleanFormValues<T extends NonEmptyObject>(obj: T): Partial<T> {
  return Object.entries(obj).reduce<Partial<T>>((acc, [key, value]) => {
    if (value === null || value === '' || value === 0 || JSON.stringify(value) === '{}') {
      return acc
    }

    if (Array.isArray(value)) {
      const filteredArray = value
        .map((item) => {
          if (typeof item === 'object' && !Array.isArray(item)) {
            return cleanFormValues(item as NonEmptyObject)
          }

          return item
        })
        .filter((item) => !(item === null || item === '' || item === 0 || JSON.stringify(item) === '{}'))
      if (filteredArray.length > 0) {
        acc[key] = filteredArray
      }
    } else if (typeof value === 'object') {
      const filteredObject = cleanFormValues(value as NonEmptyObject)
      if (Object.keys(filteredObject).length > 0) {
        acc[key] = filteredObject
      }
    } else {
      acc[key] = value
    }

    return acc
  }, {})
}

/* eslint-enable */
