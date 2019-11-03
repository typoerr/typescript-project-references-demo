import { greet } from '../shared'
import { identity } from '@typoerr/atomic'

console.log(identity(greet('project-a')))
