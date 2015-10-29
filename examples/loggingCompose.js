const createQueueTopicRelationships = (credentials, environment, topics) => (
  compose(
    all,
    curry(fanoutPairs)(credentials),
    curry(prefixPairs)(environment),
    toPairs,
    mergeDuplicates,
    unnest,
    keyQueueNamesWithTopicNames,
    getTopicsWithQueues
  )(topics)
)

const log = x => {
  console.log(x)
  return x
}

const createQueueTopicRelationships = (credentials, environment, topics) => (
  compose(
    log,
    all,
    log,
    curry(fanoutPairs)(credentials),
    log,
    curry(prefixPairs)(environment),
    log,
    toPairs,
    log,
    mergeDuplicates,
    log,
    unnest,
    log,
    keyQueueNamesWithTopicNames,
    log,
    getTopicsWithQueues,
    log,
  )(topics)
)
