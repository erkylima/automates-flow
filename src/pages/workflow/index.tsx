import Flow from "../../components/flow";
import { listEdges } from "../../services/api/edges";
import { listNodes } from "../../services/api/nodes";

export default function Workflow(){

    return (<div>
        <Flow  initialNodes={listNodes()} initialEdges={listEdges()}></Flow>
    </div>)

}