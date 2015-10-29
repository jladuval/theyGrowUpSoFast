const handler = message => {
  const { userId, userFollowerId } = getIdsOfMessageEntities(message)

  return addFriend(userId, userFollowerId)
    .catch(err => {
      if (!err.published) {
        return rejectAnyway('unexpectedError', {
          info: 'High level catch in AddFriends found an unpublishedError',
          error: err
        }, err)
      }

      return reject(err)
    })
}

const getIdsOfMessageEntities = message => (
  compose(
    pick(['userId', 'userFollowerId']),
    JSON.parse,
    prop('Body')
  )(message)
)

export default handler

export {
  getIdsOfMessageEntities
}

// SOME OTHER FILE.js

import handler from './theAboveHandler'

import { getIdsOfMessageEntities } from './theAboveHandler'
