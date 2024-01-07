import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import React, { useMemo, useState } from 'react';

import moment from 'moment';
import classNames from 'classnames';
import styled from '@emotion/styled';
interface Props {
  children?: React.ReactNode;
  dragging?: boolean;
  id: UniqueIdentifier;
  className?: string,
  data: any;
  distance?: number;
  rowSpan?: number;
}

const Droppable = ({ id, dragging, className, data, distance = 0, rowSpan = 1, children }: Props) => {
  const pixelPerMinute = 12;
  const childTimes = useMemo(() => {
    // const [rowTime = '', col_id = ''] = id?.toString().split('/') ?? [];
    // const [hour = 0, minute = 0] = rowTime?.split(':') ?? [];
    // const date = data?.rowTime.clone().set({
    //   hour: +hour,
    //   minute: +minute,
    // });

    // const result: any[] = [];
    // Array.from(Array((distance * rowSpan) / 15).keys()).forEach(() => {
    //   result.push(
    //     {
    //       id: date?.format('HH:mm') + '/' + col_id,
    //       rowId: date?.format('HH:mm'),
    //       colData: data.colData,
    //       rowTime: date?.clone(),
    //     }
    //   );
    //   date?.add(15, 'minute');
    // });
    return [];
  }, [distance, rowSpan, data, id]);


  return (
    <DroppableStyled
      distance={(distance) * rowSpan}
      pixelPerMinute={pixelPerMinute}
      className={className}
      aria-label="Droppable region"
    >
      <>
        <div className='children' style={children ? {} : {pointerEvents: 'none'}} >
          {children}
        </div>
        <div className='absolute' >
          {childTimes.map(o => <DropChild id={o?.id ?? ''} key={o.id} data={o} dragging={!!dragging} />)}
        </div>
      </>
    </DroppableStyled>
  );
};

const DropChild = ({ id, dragging, data, children }: { id: string, data: any, dragging: boolean; children?: React.ReactNode }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data
  });

  const [time, setTime] = useState<string | undefined>(undefined);

  // const navigate = useNavigate();
  // const merchant_location_id = (bookingSelectors.getCalendarParamValue('merchant_location_id') ?? 'all') as IApiBookingParams['merchant_location_id'];


  // const activePopover = bookingSelectors.getActivePopover();


  const onAdd = () => {

    // if(activePopover) return;

    // const date = moment(data.colData.id, 'DD/MM/YYYY').isValid() ? moment(data.colData.id, 'DD/MM/YYYY') : moment();

    // const getTimeCalendar = moment(data.rowTime).set({
    //   date: date.date(),
    //   month: date.month(),
    //   year: date.year()
    // }).valueOf();

    // const params = {
    //   merchant_location_id: merchant_location_id,
    //   booking_date: getTimeCalendar.valueOf()
    // };


    // const queryAddBooking = queryString.stringify(
    //   params,
    //   { arrayFormat: 'bracket' }
    // );
    // navigate(`/private/bookings/quick-booking?${queryAddBooking}`);
  };

  return (
    <DropChildStyled
      ref={setNodeRef}
      onMouseEnter={() => {setTime(moment(data.rowTime).format('HH:mm'));}}
      onMouseLeave={() => {setTime(undefined);}}
      className={classNames(
        isOver && 'over',
        dragging && 'dragging',
        children && 'dropped',
        'calendar-time'
      )}
      onClick={onAdd}
      aria-label="Droppable region"
    >{children}
      <p className='time'>{time}</p>
    </DropChildStyled>
  );
};

export default Droppable;

const DropChildStyled = styled.div`
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: left;
  &.dragging {
    > svg {
      opacity: 0.8;
    }
  }
  &.over {
    box-shadow: inset #1eb99d 0 0 0 3px, rgba(201, 211, 219, 0.5) 20px 14px 24px;
    &.dropped {
      box-shadow: inset rgba(201, 211, 219, 0.7) 0 0 0 3px,
        rgba(201, 211, 219, 0.5) 20px 14px 24px;
    }
  }
  &.dropped {
    > svg {
      opacity: 0.2;
      transform: translate3d(-50%, 100%, 0) scale(0.8);
    }
  }
  &.calendar-time:hover {
    opacity: 0.8;
    border: 1px solid var(--color-green);
    z-index: 101;
  }

  .time {
    margin-left: 8px;
    font-weight: 600;
    font-size: 14px;
  }

`;

type StyleProps = {
  distance: number;
  isLast?: boolean;
  pixelPerMinute: number;
};
const DroppableStyled = styled.div`
  position: relative;
  z-index:1;
  height:100%;
  width:100%;
  .children {
    height:100%;
    width:100%;
    position: relative;
    z-index:99;
    cursor: pointer;
    
  }
  min-height: ${({ distance, pixelPerMinute }: StyleProps) => distance * pixelPerMinute}px;
  &.dragging {
    > svg {
      opacity: 0.8;
    }
  }
  &.over {
    box-shadow: inset #1eb99d 0 0 0 3px, rgba(201, 211, 219, 0.5) 20px 14px 24px;
    &.dropped {
      box-shadow: inset rgba(201, 211, 219, 0.7) 0 0 0 3px,
        rgba(201, 211, 219, 0.5) 20px 14px 24px;
    }
  }
  &.dropped {
    > svg {
      opacity: 0.2;
      transform: translate3d(-50%, 100%, 0) scale(0.8);
    }
  }
  .absolute {
    
    position: absolute;
    inset:0;
    display: flex;
    flex-direction: column;
  }
`;