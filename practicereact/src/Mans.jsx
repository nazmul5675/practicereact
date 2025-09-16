import { use } from "react";
import Man from "./Man";
const Mans = ({ mansPromise }) => {
    const mans = use(mansPromise)
    return (
        <div className="card">
            <h2>Mans : {mans.length} </h2>
            {
                mans.map(man => <Man key={man.id} man={man}></Man>)
            }
        </div>
    );
};

export default Mans;