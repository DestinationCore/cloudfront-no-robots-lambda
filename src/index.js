'use strict';

exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;

    headers['x-robots-tag'] = [{key: 'X-Robots-Tag', value: 'noindex, nofollow, nosnippet, noarchive'}];

    callback(null, response);
};
