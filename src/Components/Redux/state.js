let store = {
  _state: {
    TeamsPage: {
      TeamData: [
        { id: 758, name: 'Uruguay' },
        { id: 762, name: 'Argentina' },
        { id: 764, name: 'Brazil' },
      ],
    },
    LeaguesPage: {
      LeagueData: [
        { id: 212, name: 'Playoffs 2/3' },
        { id: 7, name: 'WC Qualification' },
        { id: 27, name: 'Supercopa Argentina' },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscribe() {
    console.log('Statechandged');
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },
};

export default store;
