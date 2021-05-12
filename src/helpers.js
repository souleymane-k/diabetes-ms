export const findMonth = (months=[], monthId) =>
  months.find(month => month.id === monthId)

export const findResult = (results=[], resultId) =>
  results.find(result => result.id === resultId)

export const getResultsForMonth = (results=[], monthId) => (
  (!monthId)
    ? results
    : results.filter(result => result.monthId === monthId)
)

export const countResultsForMonth = (results=[], monthId) =>
  results.filter(result => result.monthId === monthId).length