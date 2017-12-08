import {GET_MY_LINK_CARD_REQUEST, GET_MY_LINK_CARD_SUCCESS, GET_MY_LINK_CARD_FAILED} from '../../../actions/const'
const initialState = {
    isFetching: false,
    items: [],
    paging: {},
    error: {}
};

function defaultLinkCards(){
    return [
        {
            id:"0abd0ee7-86bf-47ca-9643-2ec581f804c1",
            canID:"8888-999-333-4456",
            cardType:"",
            image:"https://www.myrapid.com.my/clients/Myrapid_Prasarana_37CB56E7-2301-4302-9B98-DFC127DD17E9/contentms/img/img_rapidcard_2017.png",
        },
        {
            id:"54c931af-e22d-45b4-99a2-234f4f1b5282",
            canID:"8734-345-675-6869",
            cardType:"",
            image:"https://www.myrapid.com.my/clients/Myrapid_Prasarana_37CB56E7-2301-4302-9B98-DFC127DD17E9/contentms/img/img_smart7.jpg",
        },
        {
            id:"b5bf344d-9f80-45c7-ae97-c607442185e7",
            canID:"0987-654-986-6384",
            cardType:"",
            image:"https://www.myrapid.com.my/clients/Myrapid_Prasarana_37CB56E7-2301-4302-9B98-DFC127DD17E9/contentms/img/img_smart7.jpg", 
        },{
            id:"a22e5fa8-7c1a-4e5c-985f-f1022dd70d98",
            canID:"9871-098-345-4893",
            cardType:"",
            image:"https://www.myrapid.com.my/clients/Myrapid_Prasarana_37CB56E7-2301-4302-9B98-DFC127DD17E9/contentms/img/img_smart30.jpg"
        }
    ]
}

export default function myCardListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MY_LINK_CARD_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                items: []
            });
        case GET_MY_LINK_CARD_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                items: action.response.data,
                paging: action.response.meta_data
            })
        case GET_MY_LINK_CARD_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                items: defaultLinkCards(),
                paging:{}
            });
        default:
            return initialState;
    }
}