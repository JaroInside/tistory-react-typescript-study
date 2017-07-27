import { Middleware } from 'redux';

export const middleware: Middleware = api => next => action => {
  console.log(`첫번째 미들웨어 before Value - ${JSON.stringify(api.getState())}`);
  const returnValue = next(action);
  console.log(`첫번째 미들웨어 after Value - ${JSON.stringify(api.getState())}`);
  return returnValue;
};

export const middlewareB: Middleware = api => next => action => {
  console.log(`두번째 미들웨어 before Value - ${JSON.stringify(api.getState())}`);
  const returnValue = next(action);
  console.log(`두번째 미들웨어 after Value - ${JSON.stringify(api.getState())}`);
  return returnValue;
};

/*
export const middleware: Middleware =
  (api: MiddlewareAPI<void>) => (next: Dispatch<void>) => <A extends Action>(action: A) => {
    console.log(api.getState());
    const returnValue = next(action);
    console.log(api.getState());
    return returnValue;
  };
*/