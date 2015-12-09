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
  reset: resetReducer
});

// CREATE STORE

const store = createStore(rootReducer);

// BEGIN REDUCERS

// ATTEMPTS
function attemptReducer(state = 0, action) {
  switch (action.type) {
  case 'ATTEMPTS_POINTS':
    const attemptPoints = action.value / 10;
    console.log("attempts  = " + attemptPoints);
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
    console.log("completion = " + completionPoints);
    return state + completionPoints;
  default:
    return state;
  }
}

// COMPLETION PERCENTAGE
function completionPercentageReducer(state = 0, action) {
  switch (action.type) {
  case 'COMPLETION_PERCENTAGE_POINTS':
    const completionPercentagePoints = action.value / 10;
    console.log("completion PERCENTAGE = " + completionPercentagePoints);
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
    console.log("yards = " + yardsPoints);
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
    console.log("tds = " + tdsPoints);
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
    const intIntsPoints = parseInt(intsPoints);
    if (intIntsPoints < 1) {
      return state + 1.75
    } else {
      console.log("ints = " + (intIntsPoints * -2));
      return state + (intIntsPoints * -2)
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
    console.log("win = " + winPoints);
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
    console.log("ppd = " + ppdPoints);
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
    const intRushYardPoints = parseInt(rushYardPoints);
    if (intRushYardPoints > 20) {
      const trueRushYardPoints = intRushYardPoints/ 2;
      console.log("rush yards = " + trueRushYardPoints);
      return state + trueRushYardPoints;
    } else {
      const trueRushYardPoints = intRushYardPoints / 10;
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
    console.log("rush tds = " + rushTdPoints);
    return state + rushTdPoints;
  default:
    return state;
  }
}


// END REDUCERS

// BEGIN ACTIONS
const attempts = document.getElementById('attempts');
attempts.addEventListener('change', () => {
  store.dispatch({
    type: 'ATTEMPTS_POINTS',
    value: attempts.value,
  });
}, false);


const completions = document.getElementById('completions');
completions.addEventListener('value', () => {
  store.dispatch({
    type: 'COMPLETIONS_POINTS',
    value: completions.value,
  });
}, false);

const completionPercentage = document.getElementById('percentage');
completionPercentage.addEventListener('value', () => {
  store.dispatch({
    type: 'COMPLETION_PERCENTAGE_POINTS',
    value: completionPercentage.value,
  });
}, false);

const yards = document.getElementById('yards');
yards.addEventListener('value', () => {
  store.dispatch({
    type: 'YARDS_POINTS',
    value: yards.value,
  });
}, false);

const tds = document.getElementById('tds');
tds.addEventListener('value', () => {
  store.dispatch({
    type: 'TDS_POINTS',
    value: tds.value,
  });
}, false);

const ints = document.getElementById('ints');
ints.addEventListener('value', () => {
  store.dispatch({
    type: 'INTS_POINTS',
    value: ints.value,
  });
}, false);

const win = document.getElementById('win');
win.addEventListener('value', () => {
  store.dispatch({
    type: 'WIN_POINTS',
    value: win.value,
  });
}, false);

const ppd = document.getElementById('pointsPerDrive');
ppd.addEventListener('value', () => {
  store.dispatch({
    type: 'PPD_POINTS',
    value: ppd.value,
  });
}, false);

const rushYards = document.getElementById('rushYrds');
rushYards.addEventListener('value', () => {
  store.dispatch({
    type: 'RUSH_YARD_POINTS',
    value: rushYards.value,
  });
}, false);

const rushTds = document.getElementById('rushTds');
rushTds.addEventListener('value', () => {
  store.dispatch({
    type: 'RUSH_TDS_POINTS',
    value: rushTds.value,
  });
}, false);

const resetReducer = document.getElementById('rushTds');
rushTds.addEventListener('value', () => {
  store.dispatch({
    type: 'RUSH_TDS_POINTS',
    value: rushTds.value,
  });
}, false);

const checkIfCompleted = () => {
  if (store.getState().attempt != 0 &&
      store.getState().completion != 0 &&
      store.getState().completionPercentage != 0 &&
      store.getState().yards != 0 &&
      store.getState().tds != 0 &&
      store.getState().ppd != 0 &&
      store.getState().rushYards != 0) {
        return true
      } else {
        return false
      }
}

const calculateStore = () => {
  return  store.getState().attempt +
          store.getState().completion +
          store.getState().completionPercentage +
          store.getState().yards +
          store.getState().tds +
          store.getState().ints +
          store.getState().win +
          store.getState().ppd;
          // store.getState().rushYards +
          // store.getState().rushTds;
}

// SUBSCRIBE
const scoreValue = document.getElementById('score');
const renderScore = () => {
  if (checkIfCompleted()) {
        scoreValue.innerText = calculateStore();
}
      else {
        scoreValue.innerText = 0
      }
};

renderScore(score);

store.subscribe(renderScore);
