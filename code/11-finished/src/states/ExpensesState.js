const STATE_KEY = "items_state";
class ExpensesState {
  static getDataFromStorage() {
    let data = JSON.parse(localStorage.getItem(STATE_KEY)).expenses || [];
    data = data.map((x) => {
      x.date = new Date(x.date);
      return x;
    });
    return data;
  }

  static setDataToStorage(items) {
    return localStorage.setItem(STATE_KEY, JSON.stringify({ expenses: items }));
  }
}

export default ExpensesState;
