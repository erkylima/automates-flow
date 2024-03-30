import { MarkerType, Position } from "reactflow";
import Workflow from "./components/workflow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWallet } from "@fortawesome/free-solid-svg-icons";
import "./App.css";



function App() {
	const initialNodes = [
        { id: '1', type: "input", sourcePosition: Position.Right,
        targetPosition: Position.Left, position: { x: 200, y: 100 }, data: { label: <FontAwesomeIcon icon={faCheck} />}, value: 
        {
          teste:"aha",
          teste2: "teste2"
        } },
        { id: '2', type: "default", sourcePosition: Position.Right,
        targetPosition: Position.Left, position: { x: 400, y: 100 }, data: { label: <FontAwesomeIcon icon={faCheck} /> }, value: 
        {
          teste:"aha",
          teste2: "teste2"
        } },
        { id: '3', type: "default", sourcePosition: Position.Right,
        targetPosition: Position.Left, position: { x: 600, y: 100 }, data: { label: <FontAwesomeIcon icon={faWallet} /> }, value: 
        {
          teste:"aha",
          teste2: "teste2"
        } }
      ];

	  const initialEdges = [{ id: '1->2', source: '1',  target: '2', markerEnd: { type: MarkerType.ArrowClosed,
		width: 20,
		height: 20,
		color: '#FF0072',}}];
	

	return (
		<div>
			<Workflow  initialNodes={initialNodes} initialEdges={initialEdges}></Workflow>
		</div>
	);
}

export default App;
