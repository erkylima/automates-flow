import Flow from "../../components/flow";
import Topbar from "../../components/navbar/top";
import { listEdges } from "../../services/api/edges";
import { listNodes } from "../../services/api/nodes";
import { useMode } from "../../theme";

export default function Workflow(){
	const [theme, colorMode] = useMode();

    return (
    <div className="content">
        <Topbar></Topbar>														
        <Flow theme={theme} initialNodes={listNodes()} initialEdges={listEdges()} />
    </div>
)

}