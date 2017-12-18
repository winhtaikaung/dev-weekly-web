import EmailLoginReducer from '../../src/containers/login/reducers/LoginReducer'

describe('LoginRecuerTest', () => {
    it('should return the initial state', function () {
        const initialState = Object.freeze({
            isFetching: false, loginResponse:null,token:null
        });

        expect(EmailLoginReducer(initialState, {})).toEqual(initialState);
    });
});