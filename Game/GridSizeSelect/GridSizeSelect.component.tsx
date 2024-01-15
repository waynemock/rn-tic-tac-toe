import React, { FunctionComponent } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GridSizeSelectProps } from './GridSizeSelect.types';
import SelectDropdown from 'react-native-select-dropdown';
import { grideSizeSelectStyles } from './GridSizeSelect.styles';

export const GridSizeSelect: FunctionComponent<GridSizeSelectProps> = (props) => {
  const {
    defaultValue,
    setGridSize,
  } = props;

  return (
    <SelectDropdown
      data={[1, 2, 3, 4, 5]}
      defaultValue={defaultValue}
      onSelect={(selectedItem) => {
        setGridSize(selectedItem)
      }}
      buttonTextAfterSelection={(selectedItem) => {
        return `Grid size: ${selectedItem}`
      }}
      rowTextForSelection={(item) => {
        return item
      }}
      buttonStyle={grideSizeSelectStyles.container}
      renderDropdownIcon={(isOpened) => {
        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
      }}
    />
  );
}