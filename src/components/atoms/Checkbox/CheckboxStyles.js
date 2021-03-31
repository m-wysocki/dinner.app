import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  position: relative;
  margin: 1em 0;
  text-align: left;

  &.md-checkbox-inline {
    display: inline-block;
  }

  label {
    cursor: pointer;
    display: inline;
    line-height: 1.25em;
    vertical-align: top;
    clear: both;
    padding-left: 1px;
    &:not(:empty) {
      padding-left: 0.75em;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
    }

    &:before {
      // box
      width: 1.25em;
      height: 1.25em;
      background: #fff;
      border: 2px solid rgb(0, 0, 0);
      border-radius: 0.125em;
      cursor: pointer;
      transition: background 0.3s;
    }

    &:after {
      // checkmark
    }
  }

  input[type='checkbox'] {
    outline: 0;
    visibility: hidden;
    width: 1.25em;
    margin: 0;
    display: block;
    float: left;
    font-size: inherit;

    &:checked {
      + label {
        text-decoration: line-through;
      }

      + label:before {
        background: rgb(0, 0, 0);
        border: none;
      }

      + label:after {
        transform: translate(0.25em, 0.33654em) rotate(-45deg);
        width: 0.75em;
        height: 0.375em;
        border: 0.125em solid #fff;
        border-top-style: none;
        border-right-style: none;
      }
    }

    &:disabled {
      + label:before {
        border-color: rgba(0, 0, 0, 0.26);
      }
      &:checked {
        + label:before {
          background: rgba(0, 0, 0, 0.26);
        }
      }
    }
  }
`;
