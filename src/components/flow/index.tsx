import { faAdd, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useCallback, useRef, useState } from "react";
import ReactFlow, { Background, Connection, Controls, Node, Edge, MiniMap, Position, addEdge, useEdgesState, useNodesState, BackgroundVariant, updateEdge, MarkerType } from "reactflow";
import { Box, Button, Grid, Modal, Theme } from "@mui/material";
import '../../App.css'
import { NodeAutomates } from "../types";
import { Menu, MenuItem, Sidebar, menuClasses } from "react-pro-sidebar";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons/faCircleNodes";

function Flow(props: {initialNodes: NodeAutomates[], initialEdges: Edge[] , theme:Theme}){
  const getNodeId = () => `randomnode_${+new Date()}`;
  const [nodes, setNodes, onNodesChange] = useNodesState(props.initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.initialEdges);
  const [open, setOpen] = useState(false);
  const [hiddenAddSide, setHidden] = useState(true);
  const toggleHidden = () => {  
    setHidden(!hiddenAddSide);
  }
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
      (params: Connection) => setEdges((eds) => addEdge({ ...params, type: 'floating', markerEnd: { type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#FF0072',}}, eds)),
      [setEdges],
  );


  const edgeUpdateSuccessful = useRef(true);
  

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge: Edge, newConnection:Connection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_:any, edge:Edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

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
    <Box display="flex" >
      <div className="side-new-node" hidden={hiddenAddSide} >
        <Sidebar rootStyles={{
          [`.${menuClasses.icon}`]: {
            backgroundColor: props.theme.palette.background.paper,
            borderRadius: '50px',
            color: '#344cff',
          },
          [`.${menuClasses.menuItemRoot}:hover`]: {
            backgroundColor: props.theme.palette.background.default,
            borderRadius: '50px',
            color: '#344cff',
          }
          ,
          [`.${menuClasses.menuItemRoot}`]: {
            backgroundColor: props.theme.palette.background.default,
            borderRadius: '50px',
            color: props.theme.palette.background.paper,
          }
        }}>
          <Menu >
            <MenuItem icon={<FontAwesomeIcon icon={faCircleNodes}/>} onClick={onAdd}> Add Node</MenuItem>

          </Menu>
        
        </Sidebar>
      </div>
      <div className="flow">
        
        <button className="add-node" onClickCapture={toggleHidden}><FontAwesomeIcon icon={faAdd} /></button>
        <ReactFlow
        nodes={nodes}
        edges={edges}              
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        onConnect={onConnect}    

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
    </Box>
  )
}

export default Flow;