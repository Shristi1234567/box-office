/* eslint-disable spaced-comment */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString)
{

    const response = await fetch(`${API_BASE_URL}${queryString}`).then(r => r.json());
    //throw new Error('opps')
        return response;
}
