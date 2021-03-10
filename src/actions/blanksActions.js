export function updateBlanks(id, answer) {
  console.log("updateBlanks called");
  return {
    type: 'UPDATE_BLANK_ANSWER',
    id: id,
    answer: answer
  }
}
