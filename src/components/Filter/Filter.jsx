import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { StyledFilterContainer, StyledFilterText } from './FilterStyle';
import { StyledFormIput, StyledFormLabel } from 'components/Form/FormStyle';

export const Filter = () => {
  const getFilter = state => state.filter.filter;
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    const { value } = e.currentTarget;
    dispatch(changeFilter(value));
  };

  return (
    <StyledFilterContainer>
      <StyledFilterText>Find contacts by name</StyledFilterText>
      <StyledFormLabel>
        <StyledFormIput
          type="text"
          value={value}
          placeholder="Enter name"
          onChange={onChange}
          style={{
            marginTop: '15px',
            width: '200px',
          }}
        />
      </StyledFormLabel>
    </StyledFilterContainer>
  );
};
