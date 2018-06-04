import * as constant from '../../../config/action';

export default {
    setHeader: (payload) => {
        return ({
            type: constant.SET_HEADER,
            payload
        })
    },
};