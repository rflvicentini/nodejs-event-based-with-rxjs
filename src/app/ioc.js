const dependencies = {}

dependencies["state"] = {}

const get = name => dependencies[name]

const register = (name, dependency) => {
  if (!dependencies[name]) dependencies[name] = dependency
}

module.exports = {
  get,
  register
}
