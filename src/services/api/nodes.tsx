import { Position } from "reactflow";
import NodeAutomates from "../../components/nodes/automates-nodes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWallet } from "@fortawesome/free-solid-svg-icons";


export function listNodes(): NodeAutomates[]{
    let nodes = [
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
    return nodes
}

export function getNode(name: string): NodeAutomates {
    let node = { id: name, type: "input", sourcePosition: Position.Right,
        targetPosition: Position.Left, position: { x: 200, y: 100 }, data: { label: <FontAwesomeIcon icon={faCheck} />}, value: 
        {
        teste:"aha",
        teste2: "teste2"
        } 
    }
    return node;
}