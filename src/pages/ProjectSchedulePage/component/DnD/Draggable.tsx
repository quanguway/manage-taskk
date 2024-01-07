import { DraggableSyntheticListeners } from '@dnd-kit/core';
import { Transform } from '@dnd-kit/utilities';
import styled from '@emotion/styled';
import classNames from 'classnames';
import { forwardRef } from 'react';

export enum Axis {
  All,
  Vertical,
  Horizontal,
}

interface Props {
  axis?: Axis;
  dragOverlay?: boolean;
  dragging?: boolean;
  handle?: boolean;
  label?: string;
  listeners?: DraggableSyntheticListeners;
  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  transform?: Transform | null;
  children?: React.ReactNode;
}

const Draggable = forwardRef<HTMLButtonElement, Props>(
  function Draggable(
    {
      dragOverlay,
      dragging,
      handle,
      label,
      listeners,
      transform,
      style,
      buttonStyle,
      ...props
    },
    ref
  ) {
    return (
      <DraggableStyled
        className={classNames(
          dragOverlay && 'dragOverlay',
          dragging && 'dragging',
          handle && 'handle'
        )}
        style={
          {
            ...style,
            '--translate-x': `${transform?.x ?? 0}px`,
            '--translate-y': `${transform?.y ?? 0}px`,
          } as React.CSSProperties
        }
      >
        <button
          {...props}
          aria-label={`Booking #${label}`}
          data-cypress="draggable-item"
          {...(handle ? {} : listeners)}
          tabIndex={handle ? -1 : undefined}
          ref={ref}
          style={buttonStyle}
        >
          {props.children}
        </button>
      </DraggableStyled>
    );
  }
);

export default Draggable;

const DraggableStyled = styled.div`
  position: relative;
  width:100%;
  height:100%;
  flex-direction: column;
  justify-content: center;
  transition: transform 250ms ease;

  > button {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    outline: none;
    border: 0;
  }

  &:not(.handle) {
    > button {
      cursor: grab;
      &:focus-visible:not(.active &) {
        box-shadow: 0 0 0 3px #4c9ffe;
      }
    }
  }

  &.handle {
    > button {
      --action-background: rgba(255, 255, 255, 0.1);

      > svg {
        margin-right: 5px;
      }

      > button {
        margin-right: -10px;
      }
    }
  }

  img {
    width: 140px;
    user-select: none;
    pointer-events: none;
  }

  label {
    display: block;
    flex-shrink: 1;
    padding: 10px;
    transition: opacity 250ms ease;

    text-align: center;
    font-size: 1rem;
    font-weight: 300;
    color: #8d8d8d;
    user-select: none;
    cursor: url('/cursor.svg'), auto;

    animation-name: pulse;
    animation-duration: 1.5s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    animation-direction: alternate;
  }

  &.dragging {
    z-index: 1;
    transition: none;

    * {
      cursor: grabbing;
    }

    > button {
      --scale: 1.06;
      &:focus-visible {
        --box-shadow: 0 0px 10px 2px #4c9ffe;
      }
    }

    label {
      animation: none;
      opacity: 0;
    }
  }

  &.dragOverlay,
  &.dragging {
    > button {
      animation: pop 250ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
    }
  }
`;