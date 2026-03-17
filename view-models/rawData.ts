const string = '(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)'
const emptyString = ''
const singleValue = '(id)'
const deepNesting = '(a(b(c(d(e(f)))), d, c), c, b)'
const extraSpaces = '(  id  ,name ,  type ( id) )'
const noParens = 'id, name, email, externaId'
const missingParens = '(id, name, email, type(id, name, externalId' 
const extraComa = '(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId,)'
const duplicates = '(id, name, id, type(id, name, customFields(c1, c2, c3)), externalId)'

// Swap the assignment to test different scenarios.
let inputString: string = string
export default inputString

