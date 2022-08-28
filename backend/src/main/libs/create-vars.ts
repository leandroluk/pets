import globalVars from '$/global-vars'

export const createVars = (context: string): typeof globalVars & {
  function: {
    path: string
    name: string
  }
} => {
  const vars = {
    ...globalVars,
    function: {
      path: context.split(globalVars.app.path)[1].substring(1).replace(/\\/g, '/'),
      name: `/${context.split(/[\\/]/g).at(-1)}`
    }
  }
  return vars
}
