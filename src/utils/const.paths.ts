const commonPaths = {
  get: ['/', '/:id', '/schema'],
  post: ['/'],
  patch: ['/:id']
}

export const paths = {
  user: {
    get: ['/', '/me', '/:id'],
    post: ['/'],
    delete: ['/:id']
  },
  action: {
    get: ['/', '/:id']
  },
  auth: {
    post: ['/login']
  },
  chapter: commonPaths,
  character: commonPaths,
  nationality: commonPaths,
  region: commonPaths,
  race: commonPaths,
  arc: commonPaths,
  saga: commonPaths,
  'akuma-no-mi': commonPaths,
  'akuma-no-mi-type': commonPaths,
  haki: commonPaths,
  'character-type': commonPaths,
  occupation: commonPaths,
  organization: commonPaths,
  group: commonPaths,
  volume: commonPaths
}
