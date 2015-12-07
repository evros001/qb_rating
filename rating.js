import {
  createStore,
  combineReducers,
} from 'redux';

// COMBINE REDUCERS

const rootReducer = combineReducers({
  attempt: attemptReducer,
  completion: completionReducer,
  completionPercentage: completionPercentageReducer,
  yards: yardsReducer,
  tds: tdsReducer,
  ints: intsReducer,
  win: winReducer,
  ppd: ppdReducer,
  rushYards: rushYardReducer,
  rushTds: rushTdReducer,
});

// CREATE STORE

const store = createStore(rootReducer);

// BEGIN REDUCERS

// ATTEMPTS
function attemptReducer(state = 0, action) {
  switch (action.type) {
  case 'ATTEMPTS_POINTS':
    const attemptPoints = action.value / 10;
    return state + attemptPoints;
  default:
    return state;
  }
}

// COMPLETIONS
function completionReducer(state = 0, action) {
  switch (action.type) {
  case 'COMPLETIONS_POINTS':
    const completionPoints = action.value / 10;
    return state + completionPoints;
  default:
    return state;
  }
}

// COMPLETION PERCENTAGE
function completionPercentageReducer(state = 0, action) {
  switch (action.type) {
  case 'COMPLETIONS_POINTS':
    const completionPercentagePoints = action.value / 10;
    return state + completionPercentagePoints;
  default:
    return state;
  }
}

// YARDS
function yardsReducer(state = 0, action) {
  switch (action.type) {
  case 'YARDS_POINTS':
    const yardsPoints = action.value / 10;
    return state + yardsPoints;
  default:
    return state;
  }
}

// TDS
function tdsReducer(state = 0, action) {
  switch (action.type) {
  case 'TDS_POINTS':
    const tdsPoints = action.value * 10;
    return state + tdsPoints;
  default:
    return state;
  }
}

// INTS
function intsReducer(state = 0, action) {
  switch (action.type) {
  case 'INTS_POINTS':
    const intsPoints = action.value;
    if (intsPoints < 1) {
      return state + 1.75
    } else {
      return state + (intsPoints * -2)
    }
  default:
    return state;
  }
}

// WIN
function winReducer(state = 0, action) {
  switch (action.type) {
  case 'WIN_POINTS':
    const winPoints = action.value * 5;
    return state + winPoints;
  default:
    return state;
  }
}

// PPD
function ppdReducer(state = 0, action) {
  switch (action.type) {
  case 'PPD_POINTS':
    const ppdPoints = action.value * 10;
    return state + ppdPoints;
  default:
    return state;
  }
}

// RUSH YARD STATS
function rushYardReducer(state = 0, action) {
  switch (action.type) {
  case 'RUSH_YARD_POINTS':
    const rushYardPoints = action.value;
    if (rushYardPoints > 20) {
      const trueRushYardPoints = rushYardPoints / 2;
      return state + trueRushYardPoints;
    } else {
      const trueRushYardPoints = rushYardPoints / 10;
      return state + trueRushYardPoints;
    }
  default:
    return state;
  }
}

// RUSH TD STATS
function rushTdReducer(state = 0, action) {
  switch (action.type) {
  case 'RUSH_TDS_POINTS':
    const rushTdPoints = action.value * 2;
    return state + rushTdPoints;
  default:
    return state;
  }
}


// END REDUCERS

// BEGIN ACTIONS
const attempts = document.getElementById('attempts');
attempts.addEventListener('keyup', () => {
  store.dispatch({
    type: 'ATTEMPTS_POINTS',
    value: attempts.value,
  });
}, false);


const completions = document.getElementById('completions');
completions.addEventListener('keyup', () => {
  store.dispatch({
    type: 'COMPLETIONS_POINTS',
    value: completions.value,
  });
}, false);

const completionPercentage = document.getElementById('percentage');
completionPercentage.addEventListener('keyup', () => {
  store.dispatch({
    type: 'COMPLETION_PERCENTAGE_POINTS',
    value: completionPercentage.value,
  });
}, false);

const yards = document.getElementById('yards');
yards.addEventListener('keyup', () => {
  store.dispatch({
    type: 'YARDS_POINTS',
    value: yards.value,
  });
}, false);

const tds = document.getElementById('tds');
tds.addEventListener('keyup', () => {
  store.dispatch({
    type: 'TDS_POINTS',
    value: tds.value,
  });
}, false);

const ints = document.getElementById('ints');
ints.addEventListener('keyup', () => {
  store.dispatch({
    type: 'INTS_POINTS',
    value: ints.value,
  });
}, false);

const win = document.getElementById('win');
win.addEventListener('keyup', () => {
  store.dispatch({
    type: 'WIN_POINTS',
    value: win.value,
  });
}, false);

const ppd = document.getElementById('pointsPerDrive');
ppd.addEventListener('keyup', () => {
  store.dispatch({
    type: 'PPD_POINTS',
    value: ppd.value,
  });
}, false);

const rushYards = document.getElementById('rushYrds');
rushYards.addEventListener('keyup', () => {
  store.dispatch({
    type: 'RUSH_YARD_POINTS',
    value: rushYards.value,
  });
}, false);

const rushTds = document.getElementById('rushTds');
rushTds.addEventListener('keyup', () => {
  store.dispatch({
    type: 'RUSH_TDS_POINTS',
    value: rushTds.value,
  });
}, false);

// SUBSCRIBE
const score = document.getElementById('score');
const renderScore = (score) => {
  debugger;
  score.innerText = store.getState().attempt + store.getState().completion + store.getState().completionPercentage + store.getState().yards + store.getState().tds +  store.getState().ints + store.getState().win + store.getState().ppd + store.getState().rushYards + store.getState().rushTds
};

renderScore(score);
