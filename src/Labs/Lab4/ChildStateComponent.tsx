export default function ChildStateComponent({ counter, setCounter }:
    {
        counter: number;
        setCounter: (counter: number) => void;
    }) {
    return (
        <div id="wd-child-state">
            <button className="btn btn-primary m-2" onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click">
                Increment</button>
            <button className="btn btn-primary m-2" onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click">
                Decrement</button>
        </div>
    );
}
