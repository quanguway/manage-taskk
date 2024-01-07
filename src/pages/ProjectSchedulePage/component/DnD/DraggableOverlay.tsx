import { DragOverlay, DropAnimation, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { ComponentProps, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Draggable from './Draggable';
import Box from '@mui/material/Box';

const dropAnimationConfig: DropAnimation = {
  keyframes({ transform }) {
    return [
      { transform: CSS.Transform.toString(transform.initial) },
      {
        transform: CSS.Transform.toString({
          ...transform.final,
          scaleX: 0.94,
          scaleY: 0.94,
        }),
      },
    ];
  },
  sideEffects({ active, dragOverlay }) {
    active.node.style.opacity = '0';

    const button = dragOverlay.node.querySelector('button');

    if (button) {
      button.animate(
        [
          {
            boxShadow:
              '-1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)',
          },
          {
            boxShadow:
              '-1px 0 15px 0 rgba(34, 33, 81, 0), 0px 15px 15px 0 rgba(34, 33, 81, 0)',
          },
        ],
        {
          duration: 250,
          easing: 'ease',
          fill: 'forwards',
        }
      );
    }

    return () => {
      active.node.style.opacity = '';
    };
  },
};
interface Props {
  axis?: ComponentProps<typeof Draggable>['axis'];
  dropAnimation?: DropAnimation | null;
  data: any[];
}

export function DraggableOverlay({
  dropAnimation = dropAnimationConfig,
  data
}: Props) {
  // const viewType = bookingSelectors.getCalendarViewType();
  const { active, over } = useDndContext();
  const item = useMemo(() => {
    console.log('active');

    // const [bookingId] = active?.id?.toString()?.split('_') ?? [];
    // return data.find(o => o?.id?.toString() === bookingId);
    return active;
  }, [data, active]);

  return createPortal(
    <DragOverlay dropAnimation={dropAnimation}>
      <p style={{ fontWeight: 600, fontSize: 16 }}>{over?.data?.current?.rowId}</p>
      {item && <Box>haha</Box>}
      {/* {item ? <UIBookingItemSimple isMemberView={viewType === CalendarViewType.MemberView} key={item?.id} data={item} /> : null} */}
    </DragOverlay>,
    document.body
  );
}
