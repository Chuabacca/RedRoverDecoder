
// Define the expected shape of the parsed string so we know what we are working with in
// of the parser. The final data object will be a series of keys with no value or more
// nested data.
type Data = {
  [key: string]: Data | null
}

interface ParserParams {
  input: string,
  sort: 'alpha' | 'func'
}

export default function parser({ input, sort }: ParserParams): string {
  // const data: Data = {}

  const sortType = sort === 'alpha' ? 'alphabetical' : 'functional'


  return sortType + ': ' + input
}

