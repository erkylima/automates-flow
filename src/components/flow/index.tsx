import { faAdd, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useCallback, useState } from "react";
import ReactFlow, { Background, Connection, Controls, Node, Edge, MiniMap, Position, addEdge, useEdgesState, useNodesState, BackgroundVariant } from "reactflow";
import NodeAutomates from "../nodes/automates-nodes";
import { Box, Button, Grid, Modal } from "@mui/material";
import '../../App.css'

function Flow(props: {initialNodes: NodeAutomates[], initialEdges: Edge[]}){
    const getNodeId = () => `randomnode_${+new Date()}`;
    const [nodes, setNodes, onNodesChange] = useNodesState(props.initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(props.initialEdges);
    const [open, setOpen] = useState(false);

    const handleOpen = (_: MouseEvent, node: Node) => {
        console.log(node);
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

    const onAdd = useCallback(() => {
        const newNode = {
          id: getNodeId(),
          sourcePosition: Position.Right,
          targetPosition: Position.Left, data: { label: <FontAwesomeIcon icon={faCheck} /> },
          position: {
            x: Math.random() * window.innerWidth - 100,
            y: Math.random() * window.innerHeight,
          },
        };
        setNodes((nds) => nds.concat(newNode));
      }, [setNodes])      
    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );
    const onDeleteEdge = (_: any, edge: Edge) => {
        setEdges((edges) => edges.filter((edge) => edge.id !== edge.id));
    
        console.log(edge)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    return (
      <div className="flow">
            <button className="add-node" onClick={onAdd}><FontAwesomeIcon icon={faAdd} /></button>
            <ReactFlow
            nodes={nodes}
            edges={edges}              
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}    
            onEdgeClick={onDeleteEdge}
            onNodeClick={handleOpen}    
            >
            <Controls />
            <MiniMap color='#413'/>
            <Background color='#ccc' variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 600 }}>
                <h2 id="child-modal-title">Text in a child modal</h2>
                <p id="child-modal-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
      </div>
    )
}

export default Flow;