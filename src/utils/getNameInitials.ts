export function getNameInitials(name: string) {
  const isOneWord = name.split(' ').length === 1

  if (isOneWord) {
    const [letter1, letter2] = name.toUpperCase()
    return [letter1, letter2].join('')
  } else {
    const allNames = name.split(' ')
    const firstName = allNames[0]
    const lastName = allNames[allNames.length - 1]

    const [letter1] = firstName.toUpperCase()
    const [letter2] = lastName.toUpperCase()
    return [letter1, letter2].join('')
  }
}
