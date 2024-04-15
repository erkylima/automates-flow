import { faAdd, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useCallback, useRef, useState } from "react";
import ReactFlow, {   Background, Connection, Controls, Node, Edge, MiniMap, Position, addEdge, useEdgesState, useNodesState, BackgroundVariant, updateEdge, MarkerType } from "reactflow";
import { Theme } from "@mui/material";
import '../../App.css'
import { NodeAutomates } from "../types";
import { Menu, MenuItem, Sidebar, menuClasses } from "react-pro-sidebar";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons/faCircleNodes";

function Flow(props: {initialNodes: NodeAutomates[], initialEdges: Edge[] , theme:Theme}){
  const getNodeId = () => `randomnode_${+new Date()}`;
  const [nodes, setNodes, onNodesChange] = useNodesState(props.initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.initialEdges);
  const [hiddenAddSide, setHidden] = useState(true);
  const toggleHidden = () => {  
    setHidden(!hiddenAddSide);
  }
  

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

  const handleOpenModal = (_: MouseEvent, node: Node) => {
    console.log(node);
    
  };

  return (
    <div className="flow">

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
        onNodeClick={handleOpenModal}    
        >
        <Controls />
        <MiniMap color='#413'/>
        <Background color='#ccc' variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
  )
}

export default Flow;