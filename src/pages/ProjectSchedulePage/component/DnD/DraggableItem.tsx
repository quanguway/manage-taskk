import { useDraggable } from '@dnd-kit/core';
import Draggable from './Draggable';
import {CSS} from '@dnd-kit/utilities';

interface DraggableProps {
  children: React.ReactNode;
  handle?: boolean;
  id: string;
  label?: string;
  data: any,
  disabledDrag?: boolean;
}

function DraggableItem({ handle, id, label, data, children, disabledDrag = false }: DraggableProps) {
  const { isDragging, setNodeRef, listeners, transform } = useDraggable({
    id,
    data,
  });

  if (disabledDrag) return <>{children}</>;
  return (
    <>
      <Draggable
        dragging={isDragging}
        ref={setNodeRef}
        handle={handle}
        listeners={listeners}
        label={label}
        style={{
          // opacity: isDragging ? 0 : undefined,
          transform: CSS.Translate.toString(transform),
        }}
      >
        {children}
      </Draggable>
    </>
  );
}
export default DraggableItem;
