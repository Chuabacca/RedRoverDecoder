// Define the expected shape of the parsed string so we know what we are working with in
// of the parser. The final data object will be a series of keys with no value or more
// nested data.
type Data = {
  [key: string]: Data | null
}

interface ParserParams {
  string: string,
  alphabetical: boolean
}

// This is the parser that a view will call to get the string to display.
  export default function parser({ string, alphabetical }: ParserParams): string {
  if (string.length === 0) {
    return ''
  }

  if (string[0] !== '(') {
    throw new Error(`Expected input to start with '('.`)
  }

  const [data] = parse({ input: string, index: 1 })

  const result = stringify({ input: data, alphabetical})

  return result
}

// Recursive parse function to transform the string into a nested object.
const parse = (
  {
    input,
    index,
    isNested = false
  }: {
    input: string,
    index: number,
    isNested?: boolean
  }
): [Data, number] => {
  let i = index
  let stringBuffer = ''
  let tempData: Data = {}

  // Read each character of the string.
  while (i < input.length) {
    const char = input[i]

    if (char === '(') {
      // Handle nested data with recursive call. Write the nested object after recursion
      // returns.
      const [data, index] = parse({ input, index: i + 1, isNested: true})
      tempData = { ...tempData, [stringBuffer]:data }
      i = index
      stringBuffer = ''

    } else if (char === ')') {
      // Return from recursion or return the final data object.
      if (validBuffer(stringBuffer, tempData)){
        tempData = { ...tempData, [stringBuffer]: null }
      }
      return [tempData, i]

    } else if (char === ',') {
      // Add the buffer to data and clear the buffer once we reach the end of a field name.
      if (validBuffer(stringBuffer, tempData)) {
        tempData = { ...tempData, [stringBuffer]: null }
        stringBuffer = ''
      }
      
    } else if (char !== ' ') {
      // If not a delimiter or space, treat it as part of the field name and write it to
      // the buffer.
      stringBuffer += char
    }

    // Spaces are implicitly skipped by falling through and incrementing the index.
    ++i
  }

  // Make sure we reached the end of the string and there is nothing left over in
  // the buffer.
  if (i !== input.length || stringBuffer !== '' || isNested) {
    throw new Error(`Parsing did not complete. Missing ')'.`)
  }

  return [tempData, i]
}

// Transform the data object into the final string.
const stringify = (
  {
    input,
    alphabetical,
    depth = 0
  }: {
    input: Data,
    alphabetical: boolean,
    depth?: number
  }
): string => {
  // Convert object to array for sorting if needed.
  let array: [string, Data | null][]
  if (alphabetical) {
    array = Object.entries(input).sort((a, b) => (
      a[0].localeCompare(b[0], undefined, { sensitivity: 'base'})
    ))
  } else {
    array = Object.entries(input)
  }

  // Set the indentation according to the recursion depth.
  let indentation = '  '.repeat(depth)

  // Collect key strings in a buffer so we can join and append newlines.
  let buffer: string[] = []

  for (const [key, value] of array) {
    buffer.push(`${indentation}- ${key}`)

    // Recursively stringify nested objects.
    if (value !== null) {
      buffer.push(
        stringify({
          input: value,
          alphabetical,
          depth: depth + 1
        })
      )
    }
  }

  return buffer.join('\n')
}

// Helper function to validate the buffer before adding a key to Data.
const validBuffer = (string: string, data: Data): boolean => {
  if (string === '') {
    return false
  }

  if (Object.hasOwn(data, string)) {
    throw new Error('Duplicate field name found.')
  }

  return true
}
