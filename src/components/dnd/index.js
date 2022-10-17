import React from 'react';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import useStyles from './styles/dndStyles';

function DragnDrop({
  list,
  setList,
  RenderComponent,
  className = '',
  ...rest
}) {
  // const [items, setItems] = React.useState([]);
  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);
  const [dragStarted, setDragStarted] = React.useState(false);
  const classes = useStyles();
  const handleSort = () => {
    const itemscp = [...list];
    const draggedItemContent = itemscp.splice(dragItem.current, 1)[0];
    itemscp.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    // setItems(itemscp);
    // alert(JSON.stringify(itemscp));
    setList(itemscp);
  };
  const dragStart = (i) => {
    dragItem.current = i;
    setDragStarted(true);
  };
  const dragEnd = (i) => {
    setDragStarted(false);
    handleSort();
  };

  return (
    <Box className={className}>
      {list.map((item, index) => (
        <Box
          key={index}
          draggable
          className={`${dragStarted ? classes.draggingItem : classes.dragItem}`}
          onTouchStart={(e) => dragStart(index)}
          onDragStart={(e) => dragStart(index)}
          onDragEnter={(e) => (dragOverItem.current = index)}
          onDragEnd={dragEnd}
          onTouchEnd={dragEnd}
          onDragOver={(e) => e.preventDefault()}
        >
          <RenderComponent
            {...rest}
            data={item}
            index={index}
            DraggerHandle={DragIndicatorOutlinedIcon}
          />
        </Box>
      ))}
    </Box>
  );
}
DragnDrop.prototype = {
  list: PropTypes.array,
  setList: PropTypes.func,
  RenderComponent: PropTypes.any,
  className: PropTypes.any,
};
export default DragnDrop;
