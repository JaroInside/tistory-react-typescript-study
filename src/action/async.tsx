import * as types  from './actionType';

export function startGithubApi(): { type: string; } {
  return {
    type: types.START_GITHUB_API
  };
}
export function errorGithubApi(): { type: string; } {
  return {
    type: types.ERROR_GITHUB_API
  };
}
export function endGithubApi(name: string): { type: string; name: string; } {
  return {
    type: types.END_GITHUB_API,
    name
  };
}