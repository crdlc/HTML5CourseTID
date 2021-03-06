function rejectMe() {
  return Promise.reject({
    name: 'RejectedByDefinition'
  });
}

function brokenFunction() {
  throw {
    name: 'AppIsBroken'
  };
}

function resolveMe() {
  return Promise.resolve('resolved!');
}

function doSimpleReject() {
  clear();

  rejectMe().then(() => {
    error('It should not be called');
  }, (e) => {
      log('Rejected: ', e.name);
  });
}

function doNoRejectFunction() {
  clear();

  rejectMe().then(() => {
    error('It should not be called');
  });
}

function doCatchFunction1() {
  clear();

  rejectMe().then(() => {
    error('It should not be called');
  }).catch((e) => {
      error('Catched: ', e.name);
  });
}

function doCatchFunction2() {
  clear();

  resolveMe().then(() => {
    brokenFunction();
  }).catch((e) => {
      error('Catched: ', e.name);
  });
}

function doCatchFunctionChain() {
  clear();

  resolveMe().then(() => {
    return resolveMe();
  }).then(() => {
      return rejectMe();
  }).catch((e) => {
      error('Catched: ', e.name);
  });
}
