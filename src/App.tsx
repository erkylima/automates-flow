import Flow from "./components/flow";
import "./App.css";
import { listEdges } from "./services/api/edges";
import { listNodes } from "./services/api/nodes";

function App() {
	

  
	

	return (
		<div>
			<Flow  initialNodes={listNodes()} initialEdges={listEdges()}></Flow>
		</div>
	);
}

export default App;
