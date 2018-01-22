import { normalize } from 'normalizr';

export const isDev = () => {
    const url = window.location.href;
    return url.includes('localhost');
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API';
export const NO_CONTENT_STATUS_CODE = 204;

export const createPostConfig = body => ({
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        authorization: `Bearer ${localStorage.getItem('id_token')}`, // eslint-disable-line
        contentType: 'application/json'
    }
});

export const createGetConfig = () => ({
    credentials: 'same-origin',
    method: 'GET',
    headers: {
        authorization: `Bearer ${localStorage.getItem('id_token')}`, // eslint-disable-line
        contentType: 'application/json'
    }
});

export const createPutConfig = body => ({
    credentials: 'same-origin',
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
        authorization: `Bearer ${localStorage.getItem('id_token')}`, // eslint-disable-line
        contentType: 'application/json'
    }
});


export function checkStatusCode(response) {
    if (response.status >= 200 && response.status < 300 && response.ok) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export function fetchApiCall(fullUrl, apiSchema, config) {
    return fetch(fullUrl, config)
        .then(checkStatusCode)
        .then((response) => {
            if (response.status === NO_CONTENT_STATUS_CODE) {
                return Object.assign({});
            }
            return response
                .json()
                .then((json) => {
                    if (!response.ok) {
                        return Promise.reject(json);
                    }
                    if (apiSchema) {
                        return Object.assign({}, normalize(json, apiSchema));
                    }
                    return Object.assign({}, { result: json });
                });
        });
}
