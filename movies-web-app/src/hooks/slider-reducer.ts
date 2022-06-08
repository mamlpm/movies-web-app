import { useReducer } from "react";
enum CountActionKind {
    INCREASE = "INCREASE",
    DECREASE = "DECREASE",
}

interface CountAction {
    type: CountActionKind;
    payload: number;
}

interface CountState {
    count: number;
}

function useSliderReducer(sliderLength: number, initialValue?: number): any[] {
    const reducer = (state: CountState, action: CountAction) => {
        switch (action.type) {
            case CountActionKind.INCREASE:
                if (state.count === sliderLength - 1) return { count: 0 };
                return { count: state.count + 1 };
            case CountActionKind.DECREASE:
                if (state.count === 0) return { count: sliderLength - 1 };
                return { count: state.count - 1 };
                break;
        }
    };
    const [state, dispatch] = useReducer(reducer, { count: initialValue ?? 0 });
    const increase = () => {
        dispatch({ type: CountActionKind.INCREASE, payload: state.count });
    }
    const decrease = () => {
        dispatch({ type: CountActionKind.DECREASE, payload: state.count });
    }
    return [state, { increase, decrease }]
}

export default useSliderReducer;