export const findMonth = (months=[], month_id) =>
  months.find(month => month.id === month_id)

export const findResult = (results=[], result_id) =>
  results.find(result => result.id === Number(result_id))

export const getResultsForMonth = (results=[], month_id) => (
  (!monthId)
    ? results
    : results.filter(result => result.monthId === Number(month_id))
)

export const countResultsForMonth = (results=[], month_id) =>
  results.filter(result => result.monthId === month_id).length