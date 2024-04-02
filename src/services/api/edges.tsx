import { Edge, MarkerType } from "reactflow";

export function listEdges(): Edge[] {

    let edges = [{ id: '1->2', source: '1',  target: '2', markerEnd: { type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#FF0072',}}];
    return edges;
}