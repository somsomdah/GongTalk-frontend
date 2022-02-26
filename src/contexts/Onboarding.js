import { createContext, useState } from "react";

const OnboardingContext = createContext({
    boardList: [],
    setBoardList: () => { },
    keywordList: [],
    setKeywordList: () => { }
})

const OnboardingProvider = ({ children }) => {
    const [boardList, setBoardList] = useState([])
    const [keywordList, setKeywordList] = useState([])
    const value = {
        'boardList': boardList, 'setBoardList': setBoardList,
        'keywordList': keywordList, 'setKeywordList': setKeywordList
    };
    return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>
};

const OnboardingConsumer = ({children}) => {
    return (
        <OnboardingContext.Consumer>
            {({boardList, setBoardList, keywordList,setKeywordList}) => {children}}
        </OnboardingContext.Consumer>
    );
}
;

export default OnboardingContext;
export {OnboardingProvider, OnboardingConsumer};